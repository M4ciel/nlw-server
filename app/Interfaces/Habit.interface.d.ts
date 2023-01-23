declare namespace Habit {
    type Create = {
        title: string
        weekDate: number[]
    }

    type Return = {
        WeekDate: {
            id: number
            habit: {
                id: number
                title: string
            }
            weekDate: number
        }
    }
}
