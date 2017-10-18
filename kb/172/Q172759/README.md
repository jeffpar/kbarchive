---
layout: page
title: "Q172759: Advanced Windows 3rd Ed. Project Crashes VC++ 5.0"
permalink: kb/172/Q172759/
---

## Q172759: Advanced Windows 3rd Ed. Project Crashes VC++ 5.0

	Article: Q172759
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Advanced Windows, 3rd Edition ISBN 1-57231-548-2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to convert the AdvWin.mdp project included on the "Advanced
	Windows, 3rd Edition" CD-ROM for use in Microsoft Visual C++ 5.0, the Visual C++
	development environment may crash with one of the following messages.
	
	On Windows NT 4.0:
	
	  MSDEV.EXE - Application Error
	  The instruction at :0x00000004" referenced memory at "0x00000004". The memory
	  could not be read.
	
	After clicking OK you may receive the following error:
	
	  MSDEV.EXE - Application Error
	  The instruction at :0x5f402181" referenced memory at "0x00000004". The memory
	  could not be read.
	
	On Windows 95:
	
	  This program has performed an illegal operation and will be shut down.
	  Details shows:
	  MSDEV caused an invalid page fault in module <unknown> at 00de:00000009
	
	After clicking OK you may receive the following error:
	
	  This program has performed an illegal operation and will be shut down.
	  Details shows:
	  MSDEV caused an invalid page fault in module <unknown> at 0137:5f402181
	
	  -or-
	
	  This program has performed an illegal operation and will be shut down.
	  Details shows:
	  MSDEV caused an invalid page fault in module SSSCC.DLL at 0137:48248c18.
	
	CAUSE
	=====
	
	This error was caused by a bug in the initial release of Visual C++ 5.0. The bug
	has been corrected in Microsoft Visual Studio 97 Service Pack 1.
	
	RESOLUTION
	==========
	
	Upgrade to Visual Studio 97 Service Pack 1. For more information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Pack 1 - What, Where and Why
	
	MORE INFORMATION
	================
	
	For more information on this error and other possible workarounds, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q166285 FIX: MSDEV Crashes When Converting VC++ 4.0 Projects
	
	
	Additional query words: mspress press ms_press advwin 1-57231-548-2
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	
