---
layout: page
title: "Q93348: INFO: Locking Error Messages in a Multiuser Environment"
permalink: /kb/093/Q93348/
---

## Q93348: INFO: Locking Error Messages in a Multiuser Environment

	Article: Q93348
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbvfp300 kbvfp500 kbvfp600
	Last Modified: 28-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article explains error messages that may occur in a multiuser environment.
	
	MORE INFORMATION
	================
	
	Attempting to Lock - Press ESC to Cancel
	----------------------------------------
	
	This error usually appears when a command that performs an automatic or a manual
	lock is unsuccessful. It appears in place of the SET MESSAGE message when
	REPROCESS is set to -2, 0, or automatic, and NOTIFY is set on.
	
	Cannot write to read only file (111)
	------------------------------------
	
	This error usually appears when the user attempts to change a file that has been
	marked read-only. The error appears in a FoxPro error message box.
	
	Exclusive open of file is required (110)
	----------------------------------------
	
	This error appears when an INDEX ON, INSERT, MODIFY STRUCTURE, PACK, REINDEX, or
	ZAP command is issued for a database that is not open for exclusive access. This
	error appears in a FoxPro error message box.
	
	File access denied (1705)
	-------------------------
	
	This error appears when the user attempts to open a database for exclusive access
	and the database is already opened by another user. It also appears when the
	user attempts to open a database that is already opened for exclusive access by
	another user. This error appears in a FoxPro error message box.
	
	File in use by another (108)
	----------------------------
	
	This error is displayed in a FoxPro error message box, and appears when one of
	the following occurs:
	
	- FoxPro attempts to lock a file when the file or a record is locked by another
	  user.
	
	  -or-
	
	- The user presses the ESC key in response to the "Attempting to lock" error
	  message.
	
	  -or-
	
	- You try to save an additional file to the root directory when the maximum
	  number (512) of subdirectories and files already exist in the MS-DOS root
	  directory
	
	
	Record in use by another (109)
	------------------------------
	
	This error appears when the user attempts to lock a record using an automatic
	locking command when the record is locked by another user. This error also
	appears when the user presses the ESC key in response to the "Attempting to
	lock" or "Waiting for lock" error messages. This error appears in a FoxPro error
	message box.
	
	Record not available. Please wait
	---------------------------------
	
	This error appears when a command that performs an automatic or manual lock is
	unable to lock a record because the record is part of a transaction for another
	user. This error appears in place of the SET MESSAGE message when the
	NETWARE.PLB library is used to implement Novell Transaction Processing and the
	"live lock" condition described above occurs.
	
	This error can also be caused if VSHARE is not loaded. For more information about
	the absence of VSHARE causing this error message, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q136264 PRB: "Record Not Available" When Opening a Table Shared
	
	Waiting for lock
	----------------
	
	This error appears while an automatic or manual locking command attempts to get a
	lock. This error is displayed below the status bar when SET STATUS ON and one of
	the following commands are in effect:
	
	     SET REPROCESS TO -1
	
	  -or-
	
	     SET REPROCESS TO <expN> SECONDS
	
	Additional query words: multi-user novel
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbinfo
	
	=============================================================================
	
