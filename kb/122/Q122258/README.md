---
layout: page
title: "Q122258: BUG: Cannot Disconnect From Network Drive After Running Setup"
permalink: kb/122/Q122258/
---

## Q122258: BUG: Cannot Disconnect From Network Drive After Running Setup

	Article: Q122258
	Product(s): Microsoft C Compiler
	Version(s): 2.0,4.0,4.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may be generated when disconnecting from a network
	drive after running SETUP.EXE:
	
	  The device is being accessed by an active process.
	
	  More help is available by typing NET HELPMSG 2404.
	
	CAUSE
	=====
	
	SETUP.EXE is a 16-bit Windows-based application that spawns VCSETUP.EXE, a
	32-bit Windows-based application. It was included so that error checking could
	be done if it was running under 16-bit Windows, or under a different processor
	under Windows NT.
	
	To run a 16-bit application under Windows NT, the Windows-on-Windows (WOW) layer
	is used. Once WOW, a 32-bit Windows NT-based application, is started, it
	maintains a current directory. If the current directory is the network drive,
	you can get the previous error message after setup has finished executing.
	
	RESOLUTION
	==========
	
	You can disconnect from the network by either running another 16-bit application
	that changes WOW's current directory, or by closing down WOW, using PVIEW.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following information can be found by typing NET HELPMSG 2404:
	
	- The device is being accessed by an active process.
	
	  EXPLANATION
	
	- The drive letter you specified is the current drive of a session. You tried
	  to delete a drive redirection (x:) while it is in use, possibly as your
	  current drive.
	
	  ACTION
	
	  Be sure the drive you are trying to delete is not the current drive in any of
	  your sessions.
	
	Additional query words: kbVC400bug buglist2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC200
	Version           : :2.0,4.0,4.1
	Issue type        : kbbug
	
	=============================================================================
	
