import {Colors} from '../styles';

export const Status = {
    1: {
        displayName: 'TO DO',
        bgColor: Colors.TODO,
        textColor: '#636366'
    },
    2: {
        displayName: 'IN PROGRESS',
        bgColor: Colors.INPROGRESS,
        textColor: '#291a03'
    },
    3: {
        displayName: 'COMPLETED',
        bgColor: Colors.COMPLETED,
        textColor: '#011701'
    },
    4: {
        displayName: 'OVERDUE',
        bgColor: Colors.OVERDUE,
        textColor: 'white'
    },
}

export const TaskData = [
    {
      id: '1',
      title: 'Pre-site Checklist',
      statusId: 1,
      dueDate: '2020-05-02T00:00:00',
      users: [
        {
          src: 'https://source.unsplash.com/100x100/?Human,portrait'
        }
      ]
    },
    {
      id: '1',
      title: 'Pre-site Checklist',
      statusId: 2,
      dueDate: '2020-05-02T00:00:00',
      total: 10,
      completed: 5,
      users: [
        {
          src: 'https://source.unsplash.com/100x100/?Human,portrait'
        },
        {
          src: 'https://source.unsplash.com/100x100/?Human,portrait'
        },
        {
          src: 'https://source.unsplash.com/100x100/?Human,portrait'
        },
        {
          src: 'https://source.unsplash.com/100x100/?Human,portrait'
        }

      ]
    },
    {
      id: '1',
      title: 'Service work report - Internal',
      statusId: 3,
      dueDate: '',
      completedBy: 'Santhosh'
    },
    {
      id: '1',
      title: 'Service work report - Internal',
      statusId: 4,
      dueDate: '2020-05-02T00:00:00',
      total: 10,
      completed: 5,
    },
  ];
  