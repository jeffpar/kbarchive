---
layout: page
title: "Q138613: How to Use the SYS(3052) Function to Avoid Scrolling Error"
permalink: kb/138/Q138613/
---

## Q138613: How to Use the SYS(3052) Function to Avoid Scrolling Error

	Article: Q138613
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SYS(3052) function helps prevent the scrolling error message "Record Not
	Available, please wait" by specifying whether or not Visual FoxPro uses the SET
	REPROCESS settings when attempting to lock an index or a memo file. This article
	explains how to use the SYS(3052) function in multiuser applications.
	
	MORE INFORMATION
	================
	
	The "Record not available, please wait" message is displayed when a table is
	updated but the index or memo file cannot be locked. There is not a way to
	escape or cancel this warning message until the contention has been resolved. By
	modifying the locking order of files, the SYS(3052) function can help suppress
	the scrolling message.
	
	Currently, for performance optimization, Visual FoxPro performs record locks on a
	table and file locks on a memo and index file in the following order:
	
	  Lock table record
	  Write table record
	  Lock memo file
	  Write memo file
	  Lock index file
	  Write index file
	
	When the index and memo attributes of the SYS(3052) function are set to True
	(.T.), the locking and updating order is as follows:
	
	  Lock table record
	  Lock memo file
	  Lock index file
	  Write table record
	  Write memo file
	  Write index file
	
	As a result of using the SYS(3052) function, the scrolling "Record not available,
	please wait" message is less likely to occur. If this message is displayed, an
	abnormal shutdown would cause less discrepancy because neither the table nor the
	memo or index files have been updated.
	
	The following example illustrates how to use the SYS(3052) function. To run it:
	
	1. Copy and paste the two sample programs into two program files, Server.prg and
	  Client.prg.
	
	2. Start two instances of Visual FoxPro and run Server.prg.
	
	3. When the programs have run, issue an END TRANSACTION command in the instance
	  of Visual FoxPro that ran Server.prg.
	
	Sample Programs
	---------------
	
	  *:*************************************************************************
	  *:*: Procedure File Server.prg
	  *:*************************************************************************
	  *:   SERVER
	     SET SAFETY OFF
	     SET EXCLUSIVE OFF
	
	     CLOSE DATA ALL
	     IF FILE('TSTSRVER.dbc')
	         DELETE DATA TSTSRVER DELETETABLES
	     ENDIF
	
	     =SYS(3052,1,.T.)
	     =SYS(3052,2,.T.)
	
	     CREATE DATA TSTSRVER  && Creates a database and a table
	     CREATE TABLE xxx (dbkey i PRIMARY KEY, field2 c(5), field3 m)
	
	     INSERT INTO xxx VALUES (1, 'aaaaa', 'long string 1')
	     INSERT INTO xxx VALUES (2, 'bbbbb', 'long string 2')
	     INSERT INTO xxx VALUES (3, 'ccccc', 'long string 3')
	     INSERT INTO xxx VALUES (4, 'ddddd', 'long string 4')
	     INSERT INTO xxx VALUES (5, 'eeeee', 'long string 5')
	
	     CLOSE DATA ALL
	     OPEN DATA TSTSRVER SHARED
	     =MESSAGEBOX('Start the Client program on the second instance now.')
	     USE xxx SHARED  && Executes after the Client program is started
	
	     BEGIN TRANSACTION
	     GOTO 2
	     REPLACE field3 WITH 'Changed String'
	     SKIP
	     ?'Return to client and press ok.'
	
	  *:*************************************************************************
	  *: Procedure File Client.prg
	  *:*************************************************************************
	  *: CLIENT
	     SET SAFETY OFF
	     SET EXCLUSIVE OFF
	     CLOSE DATA ALL
	
	     =SYS(3052,1,.T.)  && Changes the lock and write order
	     =SYS(3052,2,.T.)
	
	     USE XXX SHARED
	     =MESSAGEBOX('Switch to server and press OK')
	
	     GOTO 1
	     REPLACE field3 WITH 'Changed String from client'
	     SKIP
	
	When these programs are run, the message "Attempting To Lock. Press Cancel" is
	displayed. When you press the ESC key, the error "Record is in Use by another
	user" appears, or your ON ERROR routine is triggered.
	
	If you change the settings of SYS(3052) to false (.F.) in Client.prg, the
	scrolling message "Record not available, please wait" is displayed.
	
	Additional query words: VFoxWin rlock flock locking
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
