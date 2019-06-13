/* eslint-disable no-undef */
declare type controlStateType = '' | 'is-hint' | 'is-valid' | 'is-invalid' // состояние контрола формы
declare type validateResultType = { controlState: controlStateType, controlStateMsg: string } //результат валиации контрола
declare type validateResultsType = {[field: string]: validateResultType}; // резултаты валидации всех полей формы
declare type bodyValuesType = {[field: string]: any}; // результаты валидации всех полей формы

declare type componentSchemaType = {
    convert?: { // приведение получаемого "значения виджета" к требуемому типу
        action: (value: any) => any,
        msg: string
    },
    hint?: { // Хинт для компонента формы
        msg: string
    },
    isValid?: { // Сообщение для валидного компонента формы
        msg: string
    },
    inputRules?: Array<{ // валидация ввода полей виджета
        validate: (value: any) => boolean,
        msg: string
    }>,
    logicRules?: Array<{ // валидация логики (валидность относительно других полей формы)
        validate: (attrs: any) => boolean,
        msg: string
    }>

}
declare type formSchemaType = {
    [field: string]: componentSchemaType
}
