---
layout: page
title: "Q197806: &quot;Ordinal Not Found&quot; Error While Installing on NT-Based Computer"
permalink: kb/197/Q197806/
---

## Q197806: &quot;Ordinal Not Found&quot; Error While Installing on NT-Based Computer

	Article: Q197806
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbimu
	Last Modified: 15-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Reference Suite 99 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you are installing Encarta Reference Suite 99 on a Microsoft Windows NT
	4.0-based computer, you may receive the following error message:
	
	  OleMainThreadWndName: Setup.exe - Ordinal Not Found
	
	  The ordinal 6800 (or 6467) could not be located in the dynamic link library
	  Mfc42.dll.
	
	CAUSE
	=====
	
	This behavior can occur if an outdated version of the Mfc42.dll file is
	installed on the computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, click OK to continue installing Encarta Reference Suite.
	An updated version of the Mfc42.dll file is installed by the Setup program
	before it completes.
	
	MORE INFORMATION
	================
	
	If this issue continues to occur, make sure Windows NT 4.0 Service Pack 3 or
	later is installed on the computer.
	
	Additional query words: multi multi-media media mm winnt
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaReference99
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
