---
layout: page
title: "Q96058: How to Switch Between VGA and Monochrome Monitors in Windows"
permalink: /kb/096/Q96058/
---

## Q96058: How to Switch Between VGA and Monochrome Monitors in Windows

{% raw %}

	Article: Q96058
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If you have two monitors (VGA and monochrome) connected to your computer and
	both a VGA and mono video card in your computer, you can switch back and forth
	between the two monitors and their respective video cards while running
	non-Windows based applications in Windows. You can do this using the VGA video
	driver supplied with Windows.
	
	MORE INFORMATION
	================
	
	With this configuration, Windows uses the VGA card and VGA monitor. To use the
	monochrome monitor and video card, do the following:
	
	1. In Windows Program Manager, choose the MS-DOS Prompt icon. You can run MS-DOS
	  Prompt in a full-screen window.
	
	2. To switch to the monochrome monitor, type the following at the MS-DOS command
	  prompt and press ENTER:
	
	  " mode mono" (without the quotation marks)
	
	  When you exit MS-DOS Prompt or reactivate Windows, you automatically switch
	  back to the VGA monitor and video card.
	
	
	Additional query words: 3.00 3.10 win31 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
