---
layout: page
title: "Q221624: FIX:Extra EOF Char Inserted with SELECT Within Transaction"
permalink: /kb/221/Q221624/
---

## Q221624: FIX:Extra EOF Char Inserted with SELECT Within Transaction

	Article: Q221624
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbDatabase kbSQL kbvfp500aBUG kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp2 kb
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have an application that updates a record in a table, which is buffered, and
	the TABLEUPDATE() call is made within a transaction. This application also
	executes a SQL SELECT statement against the same table within the transaction.
	Another application or program running within a separate instance of Visual
	FoxPro then adds a record or records to the same table before the first instance
	has committed the changes. When the transaction is written from the first
	instance, an extra end of file (EOF) character, ASCII value 26, is written to
	the table.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start an instance of Visual FoxPro. Run the following code from a program
	  file:
	
	     CLEAR
	     CLOSE DATA ALL
	     CREATE DATABASE testdb
	
	     CREATE TABLE testtab1 (F1 C(10) NOT NULL ;
	        PRIMARY KEY, ;
	        F2 C(10) NOT NULL)
	     FOR lnj = 1 TO 10
	        INSERT INTO testtab1 (F1) VALUES (PADL(ALLTR(STR(lnj)),10,'0'))
	     ENDFOR
	
	     CLOSE DATA ALL
	
	     USE testtab1
	     SET MULTILOCKS ON
	     =CURSORSETPROP('buffering',5)
	     GO BOTTOM
	     REPLACE F2 WITH (SYS(2015))
	     ?"Before BEGIN TRANS, Estimated - actual length =",TestTable()
	     SUSPEND
	
	     BEGIN TRANS
	     SELECT * FROM testtab1 INTO CURSOR ctemp NOFILTER
	     SELECT testtab1
	     =TABLEUPDATE(.T.)
	     ?"Within TRANS, Estimated - actual length =",TestTable()
	     END TRANS
	     =INKEY(1)
	     ?"After END TRANS, Estimated - actual length =",TestTable()
	     CLOSE DATA ALL
	     * Read DBF into a string variable. Could FILETOSTR() in VFP 6.0.
	     CREATE CURSOR ctemp (m1 m)
	     APPEND BLANK
	     APPEND MEMO m1 FROM testtab1.DBF
	     lcLast2 = SUBSTR(m1, LEN(m1)-1)  && Return last 2 characters
	     USE
	
	     * Report ASCII value of last 2 characters.
	     ?"Next to last char ASCII value =",ASC(SUBSTR(lcLast2,1,1))
	     ?"Last char ASCII value =",ASC(SUBSTR(lcLast2,2,1))
	
	     PROC TestTable()
	        LOCAL lnEstSize, lnActualSize
	        SET COMPATIBLE ON
	        * lnEstSize = Header size + (record length*record count) + 1
	        * The + 1 represents the end of file character, CHR(26)
	
	        lnEstSize = HEADER() +RECSIZE()* RECCOUNT() + 1
	        * The actual file size
	        lnActualSize = FSIZE(DBF())
	        SET COMPATIBLE OFF
	        RETURN lnEstSize - lnActualSize
	     ENDPROC
	
	2. Start another instance of Visual FoxPro. Set this instance to the same
	  default directory as used in the instance of Visual FoxPro opened in step 1.
	  Run the following code from a program file:
	
	  USE testtab1
	  SELECT testtab1
	  APPEND BLANK
	  REPLACE f1 WITH (PADL(ALLTR(STR(RECNO())),10,'0'))
	  CLOSE DATA ALL
	
	3. ALT+TAB back to the first instance, then from the Program menu choose Resume.
	  The estimated file size will be 1 byte less than the actual file size. The
	  last 2 characters are both ASCII 26, or the end of file marker. There is one
	  extra end of file character, as there should only be a single EOF character.
	
	NOTE: When the table is located on a network drive, the extra character may not
	result in the actual table file size differing from the estimated size.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation.
	
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbservicepack kbDatabase kbSQL kbvfp500aBUG kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
