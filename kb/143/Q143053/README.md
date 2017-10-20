---
layout: page
title: "Q143053: Mouse Systems Driver May Cause Windows Protection Error"
permalink: /kb/143/Q143053/
---

## Q143053: Mouse Systems Driver May Cause Windows Protection Error

{% raw %}

	Article: Q143053
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
	
	When you restart your computer after installing Windows 95 or making a system
	change that requires the computer to be restarted, you may receive the following
	error message:
	
	  While Initializing Device IOS: Windows Protection Error
	
	Or, you may receive a general protection (GP) fault error message in Gui.exe.
	
	CAUSE
	=====
	
	This error can occur if the Mscmouse.com driver by Mouse Systems is being loaded
	in the Autoexec.bat file, or if Gui.exe is being loaded from the "load=" line in
	the Win.ini file.
	
	
	RESOLUTION
	==========
	
	Remove the Mscmouse.com line in the Autoexec.bat file and then install the Mouse
	Systems driver update available from the Mouse Systems BBS.
	
	Use any text editor (such as Notepad) to open the Win.ini file in the Windows
	folder and remove the Gui.exe entry from the "load=" line. Save the Win.ini
	file, close it, and then restart your computer.
	
	MORE INFORMATION
	================
	
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q135888 Windows 95 CD-ROM Mouse.txt file
	
	  Q60782 Hardware and Software Third-Party Vendor List, Q-Z
	
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: gpf
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
