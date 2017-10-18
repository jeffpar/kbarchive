---
layout: page
title: "Q132877: PC NTMMTA: RebootOnCE Does Not Work with NT MMTA"
permalink: kb/132/Q132877/
---

## Q132877: PC NTMMTA: RebootOnCE Does Not Work with NT MMTA

	Article: Q132877
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The RebootOnCE EXTERNAL.INI entry can not be used with the Microsoft Mail
	Multitasking MTA for Windows NT (NT MMTA) or the OS/2 MMTA running under
	Microsoft Windows NT.
	
	MORE INFORMATION
	================
	
	This switch is not valid under Windows NT because the redirector will never get
	into a critical error state. If a server is not available, External will get
	into a state where it marks that connection as disconnected and will retry each
	interval regular.
	
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
