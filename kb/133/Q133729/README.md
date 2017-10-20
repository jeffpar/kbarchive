---
layout: page
title: "Q133729: Using Microsoft Mouse 9.01 Mouse Manager in Windows 95"
permalink: /kb/133/Q133729/
---

## Q133729: Using Microsoft Mouse 9.01 Mouse Manager in Windows 95

{% raw %}

	Article: Q133729
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to Windows 95 on a computer with the Microsoft Mouse driver
	version 9.01 installed, you may not be able to use Mouse Manager. When this
	occurs, features such as Snap-To, Locate, Screen Wrap, and Magnify do not work.
	
	CAUSE
	=====
	
	The folder containing the Mousemgr.dll file is not in the search path.
	
	RESOLUTION
	==========
	
	To enable Mouse Manager, use either of the following methods:
	
	- Add the folder containing the Mousemgr.dll file to the search path.
	
	- Move the Mousemgr.dll file to a folder that is in the search path.
	
	After you use either of these methods, restart your computer.
	
	MORE INFORMATION
	================
	
	The Mousemgr.dll file is placed in the C:\Mouse folder by default. If you need
	to replace the file, expand it from the original Microsoft Mouse disk using the
	following steps:
	
	1. Place the Microsoft Mouse 9.01 disk in the appropriate floppy disk drive.
	
	2. Type the following line at an MS-DOS command prompt
	
	  <fdisk>:\expand <fdisk>:\mousemgr.dl$
	  <hdisk>:\<windows>\mousemgr.dll
	
	  where <fdisk> is the drive letter of the floppy disk drive containing
	  the Microsoft Mouse disk, <hdisk> is the drive letter of the hard disk
	  on which Windows 95 is installed, and <windows> is the folder
	  containing Windows 95.
	
	For example,
	
	  a:\expand a:\mousemgr.dl$ c:\<windows>\mousemgr.dll
	
	  where <windows> is the folder containing Windows 95.
	
	NOTE: The information in this article does not apply to the Microsoft
	IntelliPoint software.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
