---
layout: page
title: "Q249836: PRB: Table Buffer Contains Uncommitted Changes on REQUERY()"
permalink: kb/249/Q249836/
---

## Q249836: PRB: Table Buffer Contains Uncommitted Changes on REQUERY()

	Article: Q249836
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSuppor
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message appears when issuing a REQUERY() command against a
	remote view:
	
	  Table buffer for alias <view name> contains uncommitted changes
	
	CAUSE
	=====
	
	This behavior occurs when a REQUERY() command is issued against a remote view
	under the following conditions:
	
	- Optimistic Table Buffering has been enabled.
	
	- Changes have been made to one or more rows in the view.
	
	- A TABLEUPDATE() or TABLEREVERT() command has not been issued.
	
	RESOLUTION
	==========
	
	Issue a TABLEUPDATE() or TABLEREVERT() command before issuing a REQUERY()
	command.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file named "BUFFDEMO" using the following code:
	
	  CREATE TABLE test (Charfld c(10), Numfld N(10,4))
	  CLOSE ALL
	
	  CREATE DATA test
	  CREATE CONNECTION testa CONNSTRING 'DRIVER=Microsoft Visual FoxPro Driver;' + ;
	     'exclusive=no;SourceType=DBF;SourceDB='+SYS(5)+SYS(2003)
	
	  ON ERROR DO errordemo IN buffdemo WITH MESSAGE()
	
	  CREATE SQL VIEW myview CONNECTION testa ;
	     AS SELECT * FROM test
	
	  *Set View Properties
	  DBSETPROP('MyView','View','SendUpdates',.T.)
	  DBSETPROP('MyView','View','UpdateType',1)
	  DBSETPROP('MyView','View','WhereType',3)
	  DBSETPROP('MyView','View','BatchUpdateCount',1)
	  DBSETPROP('MyView','View','UseMemoSize',255)
	  DBSETPROP('MyView','View','FetchSize',100)
	  DBSETPROP('MyView','View','MaxRecords',-1)
	  DBSETPROP('MyView','View','Tables','test')
	  DBSETPROP('MyView','View','Prepared',.F.)
	  DBSETPROP('MyView','View','FetchMemo',.F.)
	  DBSETPROP('MyView','View','CompareMemo',.F.)
	  DBSETPROP('MyView','View','FetchAsNeeded',.F.)
	  DBSETPROP('MyView','View','FetchSize',100)
	  DBSETPROP('MyView','View','Comment',"")
	  *DBSETPROP('MyView','View','ShareConnection',.T.)
	  * Set Key and Updateable fields.
	  DBSETPROP('MyView.Charfld','Field','KeyField',.T.)
	  DBSETPROP('MyView.Charfld','Field','Updatable',.T.)
	  DBSETPROP('MyView.Charfld','Field','UpdateName','test.charfld')
	  DBSETPROP('MyView.Charfld','Field','DataType',"C(10)")
	  DBSETPROP('MyView.Numfld','Field','KeyField',.F.)
	  DBSETPROP('MyView.Numfld','Field','Updatable',.T.)
	  DBSETPROP('MyView.Numfld','Field','UpdateName','test.numfld')
	  DBSETPROP('MyView.Numfld','Field','DataType',"N(10,4)")
	
	  SET MULTILOCKS ON
	
	  USE myview
	  =CURSORSETPROP('buffering',5)
	  INSERT INTO myview VALUES ("test",1)
	  *!* TABLEUPDATE(.T.)
	  =REQUERY('myview')
	  BROW
	  ON ERROR
	  CLOSE ALL
	
	  PROCEDURE errordemo
	  PARAMETER whatfailed
	  messagebox(whatfailed,16+0,"Error")
	  =TABLEREVERT(.T.)
	
	2. Run the program file.
	
	3. Note the message displayed in the message box.
	
	4. Uncomment the TABLEUPDATE(.t.) command in BUFFDEMO.prg.
	
	5. Run the program file.
	
	6. Note that the remote view is updated and no error message appears.
	
	REFERENCES
	==========
	
	For additional Information, query the Visual FoxPro product documentation for
	the following topics:
	
	- Buffered Updates (defined)
	
	- REQUERY()
	
	- TABLEUPDATE()
	
	- TABLEREVERT()
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	Additional query words: VIEW
	
	======================================================================
	Keywords          : kbDatabase kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbGrpDSODBC 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
