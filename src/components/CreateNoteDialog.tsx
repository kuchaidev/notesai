'use client'
import React from 'react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Plus } from 'lucide-react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

type Props = {}

const CreateNoteDialog = (props: Props) => {
    const [input, setInput] = React.useState('');

    const createNotebook = useMutation({
        mutationFn: async() => {
            const response = await axios.post('/api/createNotebook', {
                name: input
            })
            return response.data
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (input === '') {
            window.alert('Please enter a notebook title!')
            return
        }
        createNotebook.mutate(undefined, {
            onSuccess: () => {
                console.log('Note successfully created!')
            },

            onError: error => {
                console.log(error)
            },
        });
    };

  return (
    <Dialog>
        <DialogTrigger>
            <div className='flex p-4 border-2 h-full items-center justify-center sm:flex-col rounded-lg border-dashed border-rose-600 hover:shadow-xl transition hover:-translate-y-1 flex-row'> 
                <Plus className='w-6 h-6 text-rose-600' strokeWidth={3} />
                <h2 className='sm:mt-2 font-semibold text-rose-600'> New Notebook </h2>
            </div>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                New Notebook
                </DialogTitle>
                <DialogDescription>
                Create a new note by clicking the button below!
                </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
                <Input 
                    value={input} 
                    onChange={e=>setInput(e.target.value)} 
                    placeholder='Note Name...' 
                />
                <div className='h-4'></div>
                <div className='flex items-center gap-2'>
                    <Button type='submit' className='bg-rose-600'>
                        Create
                    </Button>
                    <Button type='reset' variant={"secondary"}>
                        Cancel
                    </Button>

                </div>

            </form>
        </DialogContent>
    </Dialog>
  )
}

export default CreateNoteDialog