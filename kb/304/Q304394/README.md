---
layout: page
title: "Q304394: BUG: MS Oracle Driver Doesn't Sort SQLPrimaryKeys Result Set"
permalink: /kb/304/Q304394/
---

## Q304394: BUG: MS Oracle Driver Doesn't Sort SQLPrimaryKeys Result Set

{% raw %}

	Article: Q304394
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.5,2.6,2.7,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202,Build
	Operating System(s): 
	Keyword(s): kbOracle kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbmdac260sp2fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.3513, Build 2.573.3711, Build 2.573.4202, Build 2.573.4403, Build 2.573.5303, Build 2.573.6019, Build 2.573.6526, Build 2.573.7326, Build 2.573.7626, Build 2.573.7713.2 
	- Microsoft Data Access Components versions 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you call the SQLPrimaryKeys command, and the SchemaName is set to a valid
	schema name, the Microsoft Oracle Driver does not order the result set that is
	returned from ODBC Test as expected.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Microsoft Data
	Access Components 2.6. For additional information, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q300635 INFO: How to Obtain the Latest MDAC 2.6 Service Pack
	
	To work around this problem, use Oracle's ODBC Driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Microsoft Data Access Components 2.6 Service Pack 2.
	
	MORE INFORMATION
	================
	
	According to the ODBC specifications, the result set that SQLPrimaryKeys returns
	should sort by TABLE_CAT, TABLE_SCHEM, TABLE_NAME, and KEY_SEQ. Although the
	Microsoft Oracle Driver sorts by catalog and schema followed by table name, the
	key sequence is left unordered. This problem only occurs when a schema is
	specified in the SQLPrimaryKeys call ("DEMO") in the following example. If DEMO
	is not specified but is left as null, the result set is returned in the correct
	order.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From SQL *PLUS, use the following code to create a table:
	
	  create table my_table(col1 int, col2 int, col3 int, primary key(col2, col3,col1));
	
	2. Open ODBC Test, click Conn from the menu, and then click Full connect. Select
	  the DSN that uses the Microsoft Oracle Driver, and type the User Id and
	  Password.
	
	3. Click Catalog, and then click SQLPrimaryKeys to invoke SQLPrimaryKeys.
	
	4. In the TableName drop-down list box, click my_table. In the SchemaName
	  drop-down list box, click a valid schema name, and then click OK to invoke
	  the command. You receive the following error message:
	
	  Return: SQL_SUCCESS=0
	
	5. Click Results, and then click Get Data All. In the result set, notice that
	  KEY_SEQ appears as "2, 3, 1" instead of the expected "1,2,3".
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q271852 BUG: MS Oracle ODBC Driver Truncates Spaces in Column Name
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOracle kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbmdac260sp2fix 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC250 kbMDAC260 kbODBCOracle25732927 kbODBCOracle25733513 kbODBCOracle25733711 kbODBCOracle25734202 kbODBCOracle25734403 kbODBCOracle25736526 kbMDAC270 kbodbcOracle25737626 kbodbcoracle25735303 kbODBCOracle25736019 kbODBCOracle25737326 kbODBCOracle257377132 kbODBCOracle250Search
	Version           : :2.5,2.6,2.7,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202,Build 2.573.4403,Build 2.573.5303,Build 2.573.6019,Build 2.573.6526,Build 2.573.7326,Build 2.573.7626,Build 2.573.7713.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
