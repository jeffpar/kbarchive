---
layout: page
title: "Q216955: PRB: Negative Values Put in Remote View Rounded Up in SQL Table"
permalink: kb/216/Q216955/
---

## Q216955: PRB: Negative Values Put in Remote View Rounded Up in SQL Table

	Article: Q216955
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbSQL kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Negative values inserted into numeric fields of remote views of SQL Server
	tables are rounded up by 0.01.
	
	RESOLUTION
	==========
	
	There are three alternative resolutions for this issue:
	
	1. Install the 3.70 ODBC driver.
	
	2. Set the DataType of the numeric field of the remote view to "Y" (currency) as
	  in the following example:
	
	  =DBSETPROP('testview.mykey','Field','KeyField',.T.)
	  =DBSETPROP('testview.mykey','Field','Updatable',.T.)
	  =DBSETPROP('testview.mykey','Field','UpdateName',lcsysdbo+'myKEY')
	  =DBSETPROP('testview.mykey','Field','DataType',"C(12)")
	  =DBSETPROP('testview.myamt','Field','KeyField',.F.)
	  =DBSETPROP('testview.myamt','Field','Updatable',.T.)
	  =DBSETPROP('testview.myamt','Field','UpdateName',lcsysdbo+'myamt')
	  =DBSETPROP('testview.myamt','Field','DataType',"Y")
	
	3. Use SQL Pass-through commands as in the following example:
	
	  sqlcommand="INSERT INTO testamount (mykey, myamt)" + ;
	     "VALUES ('" + m.cmykey + "', " + STR(0-m.nnumber,6,2) + " )"
	  =sqlexec(gnconnhandle,sqlcommand)
	
	MORE INFORMATION
	================
	
	This behavior occurs under the following conditions:
	
	- The DataType for the field of the remote view is N (numeric).
	
	- The value inserted into the numeric field is negative.
	
	- The DataType for the corresponding field of the base SQL Server table is
	  NUMERIC.
	
	- The 3.60.0319 version of the SQL Server ODBC driver is being used.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file named "SQLRND.PRG" (without the quotation marks) using
	  the following code:
	
	  LOCAL lcconnstring 
	  LOCAL lncounter, lnhandle, lnchecksource
	  LOCAL lbsourceexists, lbtableexists, lbconnexists, lbviewexists
	  lcconnstring    =  "DRIVER={SQL Server};" + ;
	     "SERVER=MY_SERVER;DATABASE=PUBS;UID=sa;PWD="
	  lncounter       =   0
	  lnhandle = SQLSTRINGCONN(lcconnstring)
	  IF lnhandle>0
	     lnchecksource=sqltables(lnhandle,'TABLE','sourcetabs')
	     SELECT sourcetabs
	     SCAN
	        IF UPPER(ALLTRIM(table_name))="TestSQL"
	           lbsourceexists=.T.
	           EXIT
	        ENDIF
	     ENDSCAN
	     IF !lbsourceexists
	        tmpcommand="CREATE TABLE dbo.TestSQL (MYKEY CHAR(10),"
	        tmpcommand=tmpcommand+" MYAMT NUMERIC(18,4))"
	        lnreturnresult=sqlexec(lnhandle,tmpcommand)
	     ELSE
	        sqlcommand="DELETE FROM TestSQL"
	        lnreturnresult=SQLEXEC(lnhandle,sqlcommand)
	     ENDIF
	     =sqldisconnect(lnhandle)
	     SET EXCLUSIVE ON
	     SET MULTILOCKS ON
	     CLOSE DATA ALL
	     CREATE DATABASE sqltest
	     CREATE CONNECTION TEST1 CONNSTRING (lcconnstring)
	     =DBSETPROP('TEST1','Connection','Asynchronous', .F.)
	     =DBSETPROP('TEST1','Connection','BatchMode', .T.)
	     =DBSETPROP('TEST1','Connection','Comment', '')
	     =DBSETPROP('TEST1','Connection','DispLogin', 3)
	     =DBSETPROP('TEST1','Connection','ConnectTimeOut', 15)
	     =DBSETPROP('TEST1','Connection','DispWarnings', .T.)
	     =DBSETPROP('TEST1','Connection','IdleTimeOut', 0)
	     =DBSETPROP('TEST1','Connection','QueryTimeOut', 0)
	     =DBSETPROP('TEST1','Connection','Transactions', 2)
	     CREATE SQL VIEW testview REMOTE CONNECT 'TEST1' SHARE ;
	        AS SELECT * ;
	        FROM TestSQL ;
	        ORDER BY mykey
	  ENDIF
	  =DBSETPROP('testview','View','SendUpdates',.T.)
	  =DBSETPROP('testview','View','UpdateType',1)
	  =DBSETPROP('testview','View','WhereType',3)
	  =DBSETPROP('testview','View','BatchUpdateCount',1)
	  =DBSETPROP('testview','View','UseMemoSize',255)
	  =DBSETPROP('testview','View','FetchSize',100)
	  =DBSETPROP('testview','View','MaxRecords',-1)
	  =DBSETPROP('testview','View','Tables','dbo.TestSQL')
	  =DBSETPROP('testview','View','Prepared',.F.)
	  =DBSETPROP('testview','View','FetchMemo',.F.)
	  =DBSETPROP('testview','View','CompareMemo',.F.)
	  =DBSETPROP('testview','View','FetchAsNeeded',.F.)
	  =DBSETPROP('testview','View','FetchSize',100)
	  =DBSETPROP('testview','View','Comment',"")
	  =DBSETPROP('testview','View','ShareConnection',.T.)
	  =DBSETPROP('testview.mykey','Field','KeyField',.T.)
	  =DBSETPROP('testview.mykey','Field','Updatable',.T.)
	  =DBSETPROP('testview.mykey','Field','UpdateName','dbo.TestSQL.myKEY')
	  =DBSETPROP('testview.mykey','Field','DataType',"C(12)")
	  =DBSETPROP('testview.myamt','Field','KeyField',.F.)
	  =DBSETPROP('testview.myamt','Field','Updatable',.T.)
	  =DBSETPROP('testview.myamt','Field','UpdateName','dbo.TestSQL.myamt')
	  =DBSETPROP('testview.myamt','Field','DataType',"N(15,2)")
	  USE testview IN 0
	  SELECT testview
	  DELETE FROM testview
	  =REQUERY('testview')
	  FOR lncounter = 1 TO 10
	     m.nnumber = 0-lncounter
	     m.cmykey = PADL(ALLTRIM(STR(lncounter,10,0)),FSIZE("MYKEY")-4 , '0')
	     INSERT INTO Testview (mykey, myamt) VALUES (m.cmykey,m.nnumber )
	  NEXT
	  BROW TITLE 'Display values inserted into remote view'
	  =TABLEUPDATE(.T.)
	  =REQUERY('testview')
	  BROW TITLE 'Negative Values inserted into view with NUMERIC datatype' + ;
	     'are rounded up by 0.01'
	  USE
	  CLOSE ALL
	  CLEAR ALL
	
	2. From the Command window, type:
	
	  DO SQLRND
	
	3. Note the numeric values when the first BROWSE window appears.
	
	4. Note that the numeric values displayed in the second BROWSE window have been
	  rounded up by 0.01.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by John Desch, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbSQL kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbGrpDSMDAC kbDSupport kbMDAC250 kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
