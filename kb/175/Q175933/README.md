---
layout: page
title: "Q175933: PRB: Using Views with Non-Unique Key Fields"
permalink: kb/175/Q175933/
---

## Q175933: PRB: Using Views with Non-Unique Key Fields

	Article: Q175933
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an updateable view that has a non-unique key field and you delete a
	single record, all records with a matching value in the source table are
	deleted.
	
	-or-
	
	When you use an updateable view that has a non-unique key field and make changes
	affecting a key field, the following warning is displayed in a dialog box:
	
	  Warning: The key defined by the KeyField property for table
	  <sourcetable> is not unique
	
	CAUSE
	=====
	
	One of the assumptions associated with updateable views is that each of the
	records in the result set returned by the SQL Select statement are dependent
	upon a unique key. Because the view is updateable, changes affecting the key and
	updateable fields are reflected in the source table.
	
	RESOLUTION
	==========
	
	Create views based on a unique key field or a unique combination of fields.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code:
	
	     *Begin code
	     SET SAFETY OFF
	     SET EXCLUSIVE ON
	     CLOSE DATA ALL
	     CREATE DATABASE viewdemo
	     CREATE TABLE sourcea (myfirst c(10),mysecond N(1,0))
	     *Insert records
	     INSERT INTO sourcea (myfirst,mysecond) VALUES ("Apple",1)
	     INSERT INTO sourcea (myfirst,mysecond) VALUES ("Apple",2)
	     INSERT INTO sourcea (myfirst,mysecond) VALUES ("Apple",3)
	     INSERT INTO sourcea (myfirst,mysecond) VALUES ("Apple",4)
	     CREATE SQL VIEW demoa ;
	        AS SELECT * FROM sourcea ;
	        ORDER BY myfirst                           && Create View
	     =DBSETPROP('DEMOA','View','SendUpdates',.T.)  && Enable Updates
	     =DBSETPROP('DEMOA','View','UpdateType',1)     && Use SQL Updates
	     =DBSETPROP('DEMOA','View','WhereType',3)      && Modify key / changed
	     =DBSETPROP('DEMOA','View','UseMemoSize',255)  && Memo size = 255
	     =DBSETPROP('DEMOA','View','MaxRecords',-1)    && All Records
	     =DBSETPROP('DEMOA','View','Tables','sourcea') && Source table
	     =DBSETPROP('DEMOA','View','FetchMemo',.F.)    && Don't get memo
	     =DBSETPROP('DEMOA','View','FetchSize',100)    && Fetch size=100
	     =DBSETPROP('DEMOA.myfirst','Field','KeyField',.T.) && Key Field
	     =DBSETPROP('DEMOA.myfirst','Field','Updatable',.T.) && Updateable
	     =DBSETPROP('DEMOA.myfirst','Field','UpdateName','sourcea.myfirst')
	     =DBSETPROP('DEMOA.myfirst','Field','DataType',"C(10)")
	     =DBSETPROP('DEMOA.mysecond','Field','KeyField',.F.) && Not a key field
	     =DBSETPROP('DEMOA.mysecond','Field','Updatable',.T.)&& Updateable
	     =DBSETPROP('DEMOA.mysecond','Field','UpdateName','sourcea.mysecond')
	     =DBSETPROP('DEMOA.mysecond','Field','DataType',"N(1,0)")
	     SELECT sourcea
	     BROWSE TITLE "BASE TABLE FOR SQL VIEW" NODELETE NOEDIT NOAPPEND ;
	        TIMEOUT(5)
	     USE demoa
	     GO TOP
	     REPLACE myfirst WITH "Orange"   && Replace in one record
	     =TABLEUPDATE(.T.,.T.,'DEMOA')
	     SELECT sourcea
	     GO TOP
	     BROWSE TITLE "BASE TABLE AFTER A SINGLE REPLACE IN A VIEW WITH" + ;
	        " Non-unique keyfield"  NODELETE NOEDIT NOAPPEND TIMEOUT(5)
	     SELECT demoa
	     =REQUERY("DEMOA")
	     GO TOP
	     DELETE                          && Delete one record
	     =TABLEUPDATE(.T.,.T.,'DEMOA')
	     SELECT sourcea
	     GO TOP
	     BROWSE TITLE "BASE TABLE AFTER DELETING ONE RECORD IN A VIEW WITH" + ;
	        " Non-unique keyfield"  NODELETE NOEDIT NOAPPEND TIMEOUT(5)
	     * Now create unique key fields in base table
	     DO WHILE !EOF()
	        IF DELETED()
	           RECALL                    && Recall deleted records
	        ENDIF
	        REPLACE myfirst WITH "Apple "+ALLTRIM(STR(RECNO())) && Set Unique Key
	        SKIP
	     ENDDO
	     GO TOP
	     BROWSE TITLE "BASE TABLE TABLE FOR SQL VIEW" NODELETE NOEDIT ;
	        NOAPPEND TIMEOUT(5)
	     SELECT demoa
	     =REQUERY("demoa")
	     GO TOP
	     REPLACE myfirst WITH "Orange"   && Replace in one record
	     =TABLEUPDATE(.T.,.T.,'DEMOA')
	     SELECT sourcea
	     BROWSE TITLE "BASE TABLE AFTER A SINGLE REPLACE IN A VIEW WITH" + ;
	        " Unique keyfield"  NODELETE NOEDIT NOAPPEND TIMEOUT(5)
	     SELECT demoa
	     =REQUERY("DEMOA")
	     GO TOP
	     LOCA FOR myfirst="Orange"
	     DELETE                          && Delete one record
	     =TABLEUPDATE(.T.,.T.,'DEMOA')
	     SELECT sourcea
	     GO TOP
	     BROWSE TITLE "BASE TABLE AFTER DELETING ONE RECORD IN VIEW WITH" + ;
	        " Unique keyfield"  NODELETE NOEDIT NOAPPEND TIMEOUT(5)
	     RETURN
	     *End code
	
	With a non-unique key included in the SQL View, the first browse window displays
	four records with "Apple" in the Myfirst field. The second browse window
	displays four records with "Orange" in the Myfirst field. The third browse
	window displays four deleted records with "Orange" in the Myfirst field. This
	behavior is not observed when the KeyField of the SQL View is unique.
	
	Additional query words: kbprg kbtshoot vfoxwin vfoxmac
	
	======================================================================
	Keywords          : kbHWMAC kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
