---
layout: page
title: "Q221732: FIX: Multiple Opens of Memo File May Cause Corruption"
permalink: kb/221/Q221732/
---

## Q221732: FIX: Multiple Opens of Memo File May Cause Corruption

	Article: Q221732
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp3fix kbGrpDSFox
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have an application that accesses tables in a multiuser environment. If one
	of the clients performs an action that results in a table's memo file being
	locked, and a second client attempts to open the same table and access the memo
	field information, the second client may open the memo file with an incorrect
	blocksize. This can result in incorrect information being read from the memo
	field or memo file corruption.
	
	STATUS
	======
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This behavior requires the memo file (.fpt) to be locked in one instance of
	Visual FoxPro. One mechanism which causes this locking to occur is a REPLACE on
	a memo field within a transaction. This is described in Knowledge Base article:
	
	  Q190066 - FIX: Table Can Not Be USED After REPLACE of Memo in TRANSACTION
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start two instances of Visual FoxPro. Make sure each uses the same default
	  directory.
	
	2. Run the following code from a program (.PRG) file in instance 1:
	
	     CLEAR
	     SET EXCLUSIVE OFF
	     SET MULTILOCKS ON
	     SET REPROCESS TO 5
	
	     IF NOT FILE('MUTest.DBC')
	        SET BLOCKSIZE TO 64
	        WAIT WINDOW "Creating test data..." NOWAIT
	        CREATE DATABASE MUTest
	        CREATE TABLE MUTable (IntFld I, MemoFld M)
	        FOR lni = 1 TO 5
	           APPEND BLANK
	           REPLACE MemoFld WITH REPLICATE(TRANS(lni), 10)
	        ENDFOR
	        CLOSE DATABASE
	        WAIT CLEAR
	     ENDIF
	
	     USE MUTable
	     ?'Blocksize is ',SYS(2012)
	     ?'Contents of memo field in 1st record is ' + memofld
	
	     SELECT MUTable
	     LOCATE
	
	     BEGIN TRANSACTION
	     REPLACE MemoFld WITH SYS(3)
	     =MESSAGEBOX('Before you click OK, go to the other '+ ;
	     'instance of Visual FoxPro, and run the second test '+ ;
	     'program from there. Come back and click OK when you are done.', 16)
	
	     ROLLBACK
	     CLOSE DATABASE ALL
	
	3. Run the following code from a program (.PRG) file in instance 2:
	
	     CLEAR
	     SET EXCLUSIVE OFF
	     SET MULTILOCKS ON
	     SET REPROCESS TO 5
	
	     WAIT WINDOW "Opening table..." NOWAIT
	     USE MUTable 
	     WAIT CLEAR
	     ?'Blocksize is ',SYS(2012)
	     ?'Contents of memo field is' + memofld
	     CLOSE DATA ALL
	
	4. The blocksize returned in instance 1 will be 64, and the memo field contents
	  will be "1111111111".
	
	5. The blocksize returned in instance 2 will be 512, and the memo field contents
	  appears to be empty. This is incorrect, as the blocksize should be 64, and
	  the memo field contents should appear as "1111111111".
	
	REFERENCES
	==========
	
	Visual FoxPro Help, topics SET BLOCKSIZE, SYS(2012), SET REPROCESS.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation.
	
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbDatabase kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
