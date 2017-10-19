---
layout: page
title: "Q101814: PC Win: Network File Locking Problems"
permalink: /kb/101/Q101814/
---

## Q101814: PC Win: Network File Locking Problems

	Article: Q101814
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some peer-to-peer networks may have difficulty locking files in versions 3.0 and
	3.2 of Microsoft Mail for Windows. Common error messages caused by insufficient
	file locks are:
	
	  Your message file could not be opened. To access your message file in its
	  current location, mail requires that the MS-DOS utility SHARE.EXE be run
	  before Windows is started.
	
	  -or-
	
	  You do not have the proper access to the postoffice. Please contact your
	  system administrator.
	
	  -or-
	
	  Another machine is already signed in with the user name you have entered.
	  Sign out from the other machine and try again.
	
	CAUSE
	=====
	
	Some possible causes of the above errors are as follows:
	
	- Allocated file space for SHARE.EXE is insufficient.
	
	- The number of files that can be locked at one time is insufficient.
	
	RESOLUTION
	==========
	
	To remedy this problem, load SHARE.EXE on the server storing the postoffice with
	the following command-line options:
	
	  share /F:16384 /L:255
	
	For more information on SHARE.EXE, see your Microsoft MS-DOS documentation.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
