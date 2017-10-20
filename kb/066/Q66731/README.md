---
layout: page
title: "Q66731: Windows 3.0 Setup Hangs Disk #2 with Invalid Directory"
permalink: /kb/066/Q66731/
---

## Q66731: Windows 3.0 Setup Hangs Disk #2 with Invalid Directory

{% raw %}

	Article: Q66731
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	The Microsoft Windows version 3.0 Setup program hangs on Disk 2 if you
	specify an invalid directory.
	
	For example, if you shorten the given directory C:\WINDOWS by typing
	over it and removing the remaining characters with the SPACEBAR, you
	have just entered spaces to a directory name. You must delete the
	remaining characters (use the DEL key).
	
	You must use valid characters when making a directory with MS-DOS, but if
	you use a space within a directory name with Windows 3.0 Setup, Windows
	lets you continue and does not detect that you just made an invalid
	directory. MS-DOS does not let you do this.
	
	Additional query words: 3.00 3.0 3.0a 3.00a \* 31check - Please comment this article if it applies to later versions of Windows. NoWin4
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
