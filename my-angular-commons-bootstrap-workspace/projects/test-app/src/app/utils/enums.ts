export enum Role {
    ADMIN,
    USER,
    SUPERVISOR
}

export class Enums {
    public static roles: any[] = [
        {
            title: 'راهبر',
            value: 'ADMIN'
        },
        {
            title: 'کاربر عادی',
            value: 'USER'
        },
        {
            title: 'ناظر',
            value: 'SUPERVISOR'
        }
    ]

    public static getRoleTitle(value: string) {
        return this.valueToTitle(value, this.roles);
    }

    private static valueToTitle(value: string, arr: any[]) {
        for(let i of arr) {
            if(i.value == value)
                return i.title;
        }
        return '';
    }
}
