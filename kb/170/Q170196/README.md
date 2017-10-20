---
layout: page
title: "Q170196: CD-ROM Drive Inaccessible with FlexiCD PowerToy Installed"
permalink: /kb/170/Q170196/
---

## Q170196: CD-ROM Drive Inaccessible with FlexiCD PowerToy Installed

{% raw %}

	Article: Q170196
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access your CD-ROM drive in Windows NT, you receive one of
	the following error messages:
	
	  <CD-ROM drive>:\ is not accessible. The parameter is incorrect.
	
	-or-
	
	  Drive not accessible.
	
	Also, an incorrect icon may be displayed for your CD-ROM drive in My Computer.
	
	CAUSE
	=====
	
	This behavior can occur if the Windows 95 FlexiCD PowerToy is installed in
	Windows NT. FlexiCD is designed for Windows 95 and does not work properly in
	Windows NT.
	
	RESOLUTION
	==========
	
	To resolve this behavior, remove the FlexiCD PowerToy from Windows NT. To do so,
	follow these steps:
	
	1. In Control Panel, double-click Add/Remove Programs.
	
	2. Click FlexiCD (Remove Only) in the list of installed programs, and then click
	  Add/Remove.
	
	MORE INFORMATION
	================
	
	For information about using the Windows 95 PowerToys in Windows NT version 4.0,
	see the following article in the Microsoft Knowledge Base:
	
	  Q168113 Using Windows 95 PowerToys with Windows NT 4.0
	
	Additional query words: power toys toy flexi cd
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
