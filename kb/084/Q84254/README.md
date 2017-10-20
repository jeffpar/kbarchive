---
layout: page
title: "Q84254: Order of Groups on the Program Manager's Window Menu"
permalink: /kb/084/Q84254/
---

## Q84254: Order of Groups on the Program Manager's Window Menu

{% raw %}

	Article: Q84254
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows operating system version 3.1, when you select the
	Window menu in Program Manager, a list of groups is displayed in numerical
	order. The order of these groups is determined by the Order= line in the
	[Settings] section of the PROGMAN.INI file.
	
	MORE INFORMATION
	================
	
	The following is a sample PROGMAN.INI file:
	
	     [Settings]
	     Window=84 60 724 480 1
	     display.drv=vga.drv
	     Order= 3 1 2 4
	     AutoArrange=0
	
	     [Groups]
	     Group1=C:\Windows\MAIN0.GRP
	     Group2=C:\Windows\ACCESSO0.GRP
	     Group3=C:\Windows\GAMES0.GRP
	     Group4=C:\Windows\APPLICA1.GRP
	
	If you select the Window menu, the above groups are displayed in the following
	order:
	
	1. Games
	
	2. Main
	
	3. Accessories
	
	4. Applications
	
	To change the position of a group on the Window menu, use the following steps:
	
	1. Locate the group's number in the [Groups] section of the PROGMAN.INI file.
	
	2. Place the group's number in the desired position on the Order= line in the
	  [Settings] section.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
