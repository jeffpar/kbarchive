---
layout: page
title: "Q176485: Encarta: Cannot Run Setup on Shared Installation of Windows"
permalink: /kb/176/Q176485/
---

## Q176485: Encarta: Cannot Run Setup on Shared Installation of Windows

	Article: Q176485
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:; :
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbimu
	Last Modified: 24-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta 98 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 99 
	- Microsoft Encarta Encyclopedia 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Encarta Encyclopedia for Windows on a
	computer running a shared installation of Microsoft Windows (such as a diskless
	workstation), you receive the following error message:
	
	  Could not start another application during Setup. Run Setup again.
	
	When you click OK, Setup terminates and you are returned to Windows.
	
	CAUSE
	=====
	
	This behavior occurs because the 1997 and later editions of Encarta Encyclopedia
	require a network or stand-alone installation of Microsoft Windows. These
	programs are unable to run on a shared installation of Windows.
	
	NOTE: You may be able to install Encarta Encyclopedia on a computer that is a
	client of Microsoft Windows NT Server 4.0, Terminal Server Edition.
	
	For information about Windows NT Server 4.0, Terminal Server Edition, please
	contact Microsoft Sales at (800) 426-9400, or visit the following Microsoft Web
	site:
	
	  http://www.microsoft.com/ntserver/terminalserver/default.asp
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: multi multi-media media mm winnt
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbEncartaEnCyc2000 kbEncartaEnCyc1999 kbEncartaEnCyc1998
	Version           : WINDOWS:; :
	Issue type        : kbprb
	
	=============================================================================
	
