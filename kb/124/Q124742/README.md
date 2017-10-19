---
layout: page
title: "Q124742: Unable to Start 16-bit Applications in Separate Memory Space"
permalink: /kb/124/Q124742/
---

## Q124742: Unable to Start 16-bit Applications in Separate Memory Space

	Article: Q124742
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you enable 16-bit applications to run in separate memory spaces in Windows
	NT version 3.5, you may receive the following error message when you attempt to
	run any one of the 16-bit applications:
	
	  Error while setting up environment for the application.
	
	
	WORKAROUND
	==========
	
	You can run all 16-bit applications in the same memory space by disabling the
	option of "Run in Separate Memory Space" for each 16-bit application's program
	item property.
	
	You may also be able to work around this problem by editing the Visual C++
	environment variable LIB. Remove the %lib% portion and replace it with a
	complete path.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt wow apps problem vdm
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
