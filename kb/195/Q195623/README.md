---
layout: page
title: "Q195623: FIX: Index Corruption When Table is Used in Read-Only Mode"
permalink: /kb/195/Q195623/
---

## Q195623: FIX: Index Corruption When Table is Used in Read-Only Mode

	Article: Q195623
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug KbDBFDBC kb
	Last Modified: 14-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under a specific set of circumstances, the indexes of a table do not properly
	update when you append or insert records into a table that you have opened in a
	private data session of two or more forms.
	
	CAUSE
	=====
	
	This behavior occurs with the following conditions and sequence of events:
	
	1. A table is first USEd in read-only mode or with the NOUPDATE clause in a
	  private data session of a form.
	
	2. The same table is USEd in read/write mode in a private data session of a
	  second form.
	
	3. A new record is inserted into the table from the second form.
	
	4. The following sequence of commands is executed in the second form:
	
	  BEGIN TRANSACTION
	  TABLEUPDATE()
	  END TRANSACTION
	
	RESOLUTION
	==========
	
	Depending on the needs of the developer, the following two workarounds can be
	used for this problem:
	
	- If it is not essential to USE tables in read-only mode or with the NOUPDATE
	  clause, you might elect the following:
	   - Use shared tables in the default data session
	
	  -or-
	
	   - Use shared tables in read/write mode in the open forms
	
	  -OR-
	
	- If it is necessary or desirable to USE tables in read only mode or with the
	  NOUPDATE clause, in one or more forms, the developer may elect the
	  following:
	   - Instantiate the forms using shared tables, opened in read-only mode, after
	     instantiating forms USEing shared tables in read/write mode.
	
	  -or-
	
	   - Avoid issuing a TABLEUPDATE() command within a transaction.
	
	  -or-
	
	   - Issue a REINDEX command after closing the form(s) using the shared table.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Opening a table with the following syntax is functionally equivalent to opening
	the data environment of a form, selecting a table and setting the table's
	ReadOnly property to .T.:
	
	  USE TABLE_NAME AGAIN NOUPDATE
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file named Cdxdemo.prg containing the following code:
	
	  PUBLIC oa, ob
	  * Trap the verion of VFP
	  ver_number=VAL(SUBSTR(VERSION(),15,2))
	  oa=CREATEOBJECT('indexpra')
	  ob=CREATEOBJECT('indexprb')
	  oa.SHOW
	  ob.SHOW
	  READ EVENTS
	  CLOSE ALL
	
	  IF ver_number>5
	     * Visual FoxPro 6.x.
	     * Set path to samples.
	     USE HOME(2)+'data\customer' EXCL
	  ELSE
	     * Visual FoxPro 3.x or 5.x.
	     * Set path to samples.
	     USE home()+'samples\data\customer' EXCL
	  ENDIF
	
	  GO BOTT
	
	  * Native Order, so the newly added record is visible.
	  BROWSE ;
	     TITLE "Native Order, New Record Visible" ;
	     TIMEOUT 15
	  SET ORDER TO TAG cust_id
	  GO TOP
	
	  * Order is CUST_ID, but the newly added record is not visible
	  BROW ;
	     TITLE "CUST_ID Order, New Record Not Visible" ;
	     TIMEOUT 15
	  * REINDEX will fix the problem.
	  REINDEX
	  GO TOP
	
	  * Order is CUST_ID, and the newly added record is visible
	  BROW ;
	     TITLE "REINDEX CUST_ID Order, New Record Visible" ;
	     TIMEOUT 15
	  CLOSE ALL
	
	  DEFINE CLASS indexpra AS FORM
	     DATASESSION = 2
	     DOCREATE = .T.
	     BUFFERMODE = 2
	     CAPTION = "Form1"
	     NAME = "Form1"
	     CLOSABLE=.F.
	     MAXBUTTON=.F.
	     MINBUTTON=.F.
	
	     PROCEDURE INIT
	        SET MULTILOCKS ON
	        IF ver_number>5
	           USE HOME(2)+'data\customer' AGAIN NOUPDATE
	        ELSE
	           USE home()+'samples\data\customer' AGAIN NOUPDATE
	        ENDIF
	     ENDPROC
	  ENDDEFINE
	
	  DEFINE CLASS indexprb AS FORM
	      DATASESSION = 2
	      DOCREATE = .T.
	      BUFFERMODE = 2
	      CAPTION = "Form1"
	      NAME = "Form1"
	      AUTOCENTER=.T.
	      CLOSABLE=.F.
	      MAXBUTTON=.F.
	      MINBUTTON=.F.
	
	      ADD OBJECT command1 AS COMMANDBUTTON WITH ;
	         TOP = 36, ;
	         LEFT = 96, ;
	         HEIGHT = 37, ;
	         WIDTH = 193, ;
	         CAPTION = "Add Record", ;
	         NAME = "Command1"
	
	      ADD OBJECT command2 AS COMMANDBUTTON WITH ;
	         TOP = 96, ;
	         LEFT = 96, ;
	         HEIGHT = 37, ;
	         WIDTH = 193, ;
	         CAPTION = "Save Record & Close", ;
	         NAME = "Command2", ;
	         ENABLED=.F.
	
	      PROCEDURE command1.CLICK
	         INSERT INTO customer (cust_id,company, contact, TITLE, ;
	            Address, city, REGION, postalcode, country, phone, ;
	            fax, maxordamt) ;
	            VALUES ("0000"+ALLTRIM(STR(RECCOUNT()+1,10)),  ;
	            "Company "+ ALLTRIM(STR(RECCOUNT()+1,10)), ;
	            "Contact " + ALLTRIM(STR(RECCOUNT()+1,10)), ;
	            "Title "+ ALLTRIM(STR(RECCOUNT()+1,10)), ;
	            "Address " + ALLTRIM(STR(RECCOUNT()+1,10)), ;
	            "City "+ ALLTRIM(STR(RECCOUNT()+1,10)), ;
	            "Region " + ALLTRIM(STR(RECCOUNT()+1,10)), ;
	            "Post "+ ALLTRIM(STR(RECCOUNT()+1,10)), ;
	            "Country " + ALLTRIM(STR(RECCOUNT()+1,10)), ;
	            "Phone "+ ALLTRIM(STR(RECCOUNT()+1,10)), ;
	            "Fax " + ALLTRIM(STR(RECCOUNT()+1,10)), ;
	            RECCOUNT()+1)
	            THIS.ENABLED=.F.
	            THISFORM.COMMAND2.ENABLED=.T.
	            THISFORM.REFRESH
	      ENDPROC
	
	      PROCEDURE command2.CLICK
	         LOCAL llSuccess
	         BEGIN TRANSACTION
	         IF TABLEUPDATE(.T.,.T.,"Customer")
	            END TRANSACTION
	            WAIT WINDOW "Update Succeeded" NOWAIT
	         ELSE
	            ROLLBACK
	            WAIT WINDOW "Update Failed" NOWAIT
	         ENDIF
	         oa.RELEASE
	         THISFORM.RELEASE
	         CLEAR EVENTS
	      ENDPROC
	
	      PROCEDURE INIT
	         SET MULTILOCKS ON
	         IF ver_number>5
	            USE HOME(2)+'data\customer' AGAIN
	         ELSE
	            USE home()+'samples\data\customer' AGAIN
	         ENDIF
	         =CURSORSETPROP('BUFFERING',3,'Customer')
	      ENDPROC
	  ENDDEFINE
	
	2. In the Command window type the following:
	
	  DO CDXDEMO
	
	3. Click the command button labeled "Add Record."
	
	4. Click the command button labeled "Save Record & Close."
	
	5. Note in the first Browse window that appears that a new record has been added
	  to the Customer table.
	
	6. Note that in the second Browse window, with the index order set to the
	  CUST_ID tag, the newly-added record is not visible.
	
	7. Note that in the third Browse window, after a REINDEX command is issued, that
	  the newly-added record is visible.
	
	8. To USE the shared tables in the default data session, comment the DataSession
	  property of both forms or change the DataSession property of both forms to
	  one (1). Run the program again, and note that the indexes update properly.
	
	9. To USE the shared tables in read/write mode in both open forms, comment the
	  NOUPDATE clause of the USE command in the Init event of the class definition
	  for Indexpra. Run the program again and note that the indexes update
	  properly.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by John Desch, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
