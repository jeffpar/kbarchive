---
layout: page
title: "Q250705: No Internet Explorer Installation When Shdocvw.dll in Windows"
permalink: /kb/250/Q250705/
---

## Q250705: No Internet Explorer Installation When Shdocvw.dll in Windows

	Article: Q250705
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Microsoft Internet Explorer on a Microsoft Windows
	95-based computer and you already have an older copy of Shdocvw.dll in the
	Windows directory, you may find that the setup program does not complete the
	installation.
	
	CAUSE
	=====
	
	This behavior can occur because the Microsoft Internet Explorer installation
	program searches for a Shdocvw.dll in the Windows directory, and if it finds
	that file, the installation program stops.
	
	WORKAROUND
	==========
	
	To work around this behavior, delete the old Shdocvw.dll file in the Windows
	directory and try the installation again.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
