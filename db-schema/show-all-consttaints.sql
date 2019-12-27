select tab.owner as schema_name,
       tab.table_name,
       con.constraint_name,
       cols.column_name,
       search_condition as constraint,
       con.status
from sys.all_tables tab
join sys.all_constraints con
     on tab.owner = con.owner
     and tab.table_name = con.table_name
join sys.all_cons_columns cols
     on cols.owner = con.owner
     and cols.constraint_name = con.constraint_name
     and cols.table_name = con.table_name
where constraint_type = 'C'
      and tab.owner not in ('ANONYMOUS','CTXSYS','DBSNMP','EXFSYS',
      'LBACSYS', 'MDSYS', 'MGMT_VIEW','OLAPSYS','OWBSYS','ORDPLUGINS',
      'ORDSYS','OUTLN', 'SI_INFORMTN_SCHEMA','SYS','SYSMAN','SYSTEM',
      'TSMSYS','WK_TEST','WKSYS', 'WKPROXY','WMSYS','XDB','APEX_040000',
      'APEX_040200', 'APEX_PUBLIC_USER', 'DIP', 'FLOWS_30000','FLOWS_FILES',
      'MDDATA', 'ORACLE_OCM', 'XS$NULL', 'SPATIAL_CSW_ADMIN_USR', 
      'SPATIAL_WFS_ADMIN_USR', 'PUBLIC',
      'SH', 'SSB', -- Oracle Cloud ATP Sample Schema 
      'APEX_190100', 'DVSYS', 'AUDSYS', 'DBSFWUSER', 'ORDS_METADATA', 'GSMADMIN_INTERNAL', -- Oracle Cloud ATP
	  'C##CLOUD$SERVICE', 'C##OMLIDM' ) -- Oracle Cloud ATP
order by tab.owner,
         tab.table_name,
         cols.position;
