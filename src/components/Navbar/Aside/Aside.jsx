import stylesAside from './Aside.module.css'
import { NavLink} from 'react-router-dom'
import FilterMenu from '../Filter/FilterMenu'

const Aside = () => {
    return (
        <>
            <div className={stylesAside.container}>
                <div className={stylesAside.subContainer}>
                    <div className={stylesAside.containerLink}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPpJREFUSEvt07tKBDEUBuBvn8LCwgvaKCJYuljaWfo49r6MrZ2daCXYqLAIXgoLn0IJzEB2yE5OxO02zTBD8n8nmZOJJY/JkvO1AGu4xg/O8B0pLgqk8Htsd6FvOI4gESCF32IXnx2wgVec1JAakFf+hWkH3GEd1Z2MAaXwfAchZBEwFt7/23RMVaQERMLDyBBoCQ8hOZB3S1q8hY9Ir2MT793cue7qgfR8xGEWWOuwoZ0uYD+ecJBecuABR/8E3OA0B/Jq+kr+uoO5daWQFbA6ooVXr9gcpS56xl7wBg+nvWA//1gCznGJnUZkhgtc1YDG3PHprbe1Gf8FEWVFGWqjs0wAAAAASUVORK5CYII="/>
                        <NavLink to={'/'} className={stylesAside.options}>Home</NavLink>
                    </div>
                    <div className={stylesAside.containerLink}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASRJREFUSEu11T8uBVEUgPHfYwtIJCLRobEGhQVIVDagUQiFggqvQSJRaBQqhTVQWIJGT0EkrEDiT67ME5l335t7zczU537fuefcM6ej5a/TMl9MsII9zNWQ32IxnI8J7jFfA947+sOOCb4agP+ycwX7OCsSWMfOkGSyb7CJkxIwCA4GSPoEVaUZx1sJNonnpgQB9lKCjeE1VdCLG3STbRyWYKu4bEoQOF2cYhRLOMJEqqCqB7mvN7vJQfCIh8I0g+mmnukVLnCNzwI6UpRpDcsRUdIcvCMM1HlFfbZwXIpJKtFu0diU+och3PgTmCSYwlMKHQu4GyaIzUHOvgg9+cgVJCYfDUtqciuC1hdOWJnhvz9bI/2bYkaiG60Gt/9oziv5l/gbq9wwGakzn5gAAAAASUVORK5CYII="/>
                        <NavLink to={'/contact'} className={stylesAside.options}>Contact</NavLink>
                    </div>
                    <div className={stylesAside.containerLink}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAS1JREFUSEvFlU1qAkEQhT+jJKeICiFZ5RSuvITGjblT/sifl3CRa4gaVPAcEsKDbuhpuofqmMFZDd1V9d6rv27R8NdqOD4nA+gAc2BgVPgFDIFDbJ9TcA88GIN7M/k8WQDEfgN0nbH+b4CfDOAd8AbsgatYRUrBFHgEvoEz5zQCZhkA2SyBa0C+z6FdDBCyFzM5vzpFf1IRA/jc+7TofgdcAmPgs0bF2qmt1CIECNmHwSbHqAgBYva+qO1jVIQASkUfSBXUq7B27talqzLJdQBK2bs1OpAEqEvRyjFSZ32UFPo/i+xVVgaupE2L2Utp3aCp2OfAi2HQkuxTADrzq0KDcwH0DENmXhUCKF12WfY5BTpvdF17FQu3IS3trza+LXlwLEFNNid7k03sLEa/+FlgGYMvvtQAAAAASUVORK5CYII="/>
                        <NavLink to={'/aboutUs'} className={stylesAside.options}>About us</NavLink>
                    </div>
                    <div className={stylesAside.containerFilter}>
                        <FilterMenu/>
                    </div>
                </div>
            </div>        
        </>
    )
}

export default Aside;