---
layout: page
title: "Q190066: FIX: Table Can Not Be USED After REPLACE of Memo in TRANSACTION"
permalink: kb/190/Q190066/
---

## Q190066: FIX: Table Can Not Be USED After REPLACE of Memo in TRANSACTION

	Article: Q190066
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your application issues a REPLACE of a Memo field within a transaction. In a
	multi-user environment, a user (User 1) issues the REPLACE. After User 1's
	REPLACE, but before User 1's transaction has completed, another user (User 2)
	attempts to open the table. User 2 receives the following scrolling message
	until User 1's transaction has completed:
	
	  Record not available...please wait.
	
	NOTE: This has been changed in Visual FoxPro 6.0 such that even if the memo file
	can not be locked, the table can be opened.
	
	CAUSE
	=====
	
	When a REPLACE of a memo field is issued within a transaction, the memo file
	header is locked for the remainder of the transaction. If another user attempts
	to USE the table, that user can not open the table because the USE command can
	not lock the memo file. Once the first user's transaction has completed, the
	second user can open the table.
	
	RESOLUTION
	==========
	
	One way to work around this issue is to not use REPLACE with Memo field data
	within a transaction.
	
	Alternatively, use buffering on the tables with Memo fields, REPLACE memo values,
	then cause the update to be written by issuing a TABLEUPDATE() within the
	transaction.
	
	Additionally, you do not want to cause the transaction to last any longer than
	necessary. Avoid modal dialog boxes, such as message boxes, that pause program
	execution, during transactions. Please see the MORE INFORMATION section for
	additional details.
	
	STATUS
	======
	
	This behavior is by design. All locks made within a transaction remain until the
	transaction has completed. In the case of Memo field, replacing the Memo field
	actually locks the memo file header, which prevents the USE command from opening
	the table.
	
	MORE INFORMATION
	================
	
	Visual FoxPro tables consist of one or more files. Each file has the same name,
	but with different extensions. These are:
	
	  File      Extension   Comment
	  -----------------------------------------------------------------------
	
	  Table     .dbf        Present for all tables.
	  Memo      .fpt        Present only if table has Memo or General fields.
	  Index     .cdx        Present only if table has index tags.
	
	When a table is opened (with a USE command), the .dbf file opens. The .fpt and
	.cdx files are also opened if they exist, and they must be open for the USE
	command to succeed.
	
	When a replace is made on a Memo field, at the time the replace is made, the memo
	file (.fpt) header is locked. Normally, this lock is made and released
	instantaneously, but the transaction causes the lock to be held until the
	transaction ends.
	
	Because the USE command can not open the memo file if its header is locked, the
	scrolling message appears until the lock is removed, for example, when the
	transaction ends.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	        SET EXCLUSIVE OFF
	        SET MULTILOCKS ON
	        SET REPROCESS TO 5
	
	        IF NOT FILE('MUTest.DBC')
	           WAIT WINDOW "Creating test data..." NOWAIT
	           CREATE DATABASE MUTest
	           CREATE TABLE MUTable (IntFld I, MemoFld M)
	           APPEND BLANK
	           CLOSE DATABASE
	        ENDIF
	
	        WAIT WINDOW "Opening database..." NOWAIT
	        OPEN DATA MUTest SHARE
	
	        WAIT WINDOW "Opening table..." NOWAIT
	        USE MUTable IN 0 SHARE
	
	        WAIT CLEAR
	        SELECT MUTable
	        LOCATE
	
	        BEGIN TRANSACTION
	           REPLACE MemoFld WITH sys(3)
	           =MESSAGEBOX('Start another instance of Visual FoxPro and run ;
	           this program again. Observe that the USE statement causes ;
	           the "Record not available...please wait." scrolling message    ;
	           to appear when attempting to open the table.', 16)
	
	        ROLLBACK
	        CLOSE DATABASE
	
	2. Start another instance of Visual FoxPro and change to the same default
	  directory that the first instance used.
	
	3. Run the program above in the second instance.
	
	RESULTS:
	
	- The second instance receives a scrolling "Record not available...please wait"
	  message on the USE command.
	
	- If the REPLACE is made to the Integer field rather than the Memo field, the
	  scrolling message will not occur and the table opens.
	
	- Buffering helps if the REPLACE is made before the BEGIN TRANS.
	
	- To clear the scrolling message in the second instance, click OK in the
	  message box in the first instance, then click OK in the message box of the
	  second instance.
	
	NOTES:
	
	- In this case, we have intentionally added a message box to make the
	  transaction last longer, which is what we want to avoid, because the
	  lengthening of the transaction makes the behavior more likely to occur.
	
	- It is much preferable to use buffering and issue your REPLACE before starting
	  the transaction. Use the preceding steps with the following code to
	  demonstrate:
	
	        SET EXCLUSIVE OFF
	        SET MULTILOCKS ON
	        SET REPROCESS TO 5
	
	        IF NOT FILE('MUTest.DBC')
	           WAIT WINDOW "Creating test data..." NOWAIT
	           CREATE DATABASE MUTest
	           CREATE TABLE MUTable (IntFld I, MemoFld M)
	           APPEND BLANK
	           CLOSE DATABASE
	        ENDIF
	
	        WAIT WINDOW "Opening database..." NOWAIT
	        OPEN DATA MUTest SHARE
	
	        WAIT WINDOW "Opening table..." NOWAIT
	        USE MUTable IN 0 SHARE
	
	        WAIT CLEAR
	        SELECT MUTable
	        =CURSORSETPROP('Buffering', 5)
	        LOCATE
	
	        REPLACE MemoFld WITH sys(3)
	
	        BEGIN TRANSACTION
	           =TABLEUPDATE(.T.)
	           =MESSAGEBOX('Start another instance of Visual FoxPro and run ;
	           this program again. The second instance will open the table ;
	           without the scrolling message', 16)
	
	        ROLLBACK
	        CLOSE DATABASE
	
	In this case, the scrolling message will not occur and the table opens in the
	second instance without problem.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp600 kbVFp500a kbVFp300b kbDatabase kbXBase kbVFp600fix kbVFp500abug kbVFp300bbug kbDatabase kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
