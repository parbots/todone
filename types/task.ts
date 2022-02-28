export type Task = {
    id: string;
    name: string;
    complete: boolean;
};

export type Filter = 'All' | 'Active' | 'Complete';

export const Filters: Filter[] = ['All', 'Active', 'Complete'];
