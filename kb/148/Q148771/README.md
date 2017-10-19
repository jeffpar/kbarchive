---
layout: page
title: "Q148771: PC DirSync: Err Msg: Bad ID or Password"
permalink: /kb/148/Q148771/
---

## Q148771: PC DirSync: Err Msg: Bad ID or Password

	Article: Q148771
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-1999
	
	3.50
	MS-DOS
	kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may see the following error on the screen when you run manual Directory
	Synchronization (dirsync), just prior to the beginning of Rebuild.exe.
	
	  Bad ID or Password
	
	When dirsync is being performed manually, you must make sure the administrator's
	account and password are correctly specified to invoke Import.exe. See the
	"Directory Synchronization (Dir-Sync)" document for further details on manual
	dirsync.
	
	For more information about how to obtain the dirsync document, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q96060 PC DirSync: Directory Synchronization (Dir-Sync)
	
	CAUSE
	=====
	
	If the administrator account and password are not correct, no error will be
	logged in the Dirsync.log, Dsserver.log, or Central.log file. If dirsync is
	being run from a batch file, unless you are watching the screen very closely,
	you probably will not notice the error just prior to Rebuild.exe running. If you
	are not using a batch file, you will see the error on the screen.
	
	In addition, Rebuild.exe will run and properly rebuild the Global Address List.
	The only evidence of a problem other than actually seeing the error message will
	be a failure of the updates to post.
	
	The above error has also been seen where the administrator's name and password
	are incorrect in an X25 login script.
	
	RESOLUTION
	==========
	
	Make sure the administrator's account name and password are correct for the
	postoffice against which Import.exe is being run.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN350
	Version           : WINDOWS:3.2,3.5
	
	=============================================================================
	
