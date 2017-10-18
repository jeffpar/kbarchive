---
layout: page
title: "Q83029: MS-DOS Video Modes Displayed in a Window"
permalink: kb/083/Q83029/
---

## Q83029: MS-DOS Video Modes Displayed in a Window

	Article: Q83029
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the video modes supported while running MS-DOS-based
	applications in a window under Microsoft Windows operating system version 3.1 in
	386 enhanced mode.
	
	MORE INFORMATION
	================
	
	In Windows 3.1, all video drivers perform identically to the drivers shipped
	with Windows 3.0 when you run MS-DOS-based applications in a window, except the
	following drivers:
	
	- 8514
	
	- TIGA
	
	- SVGA
	
	- VGA
	
	The 8514, TIGA, SVGA, and VGA drivers support the following video modes when you
	run MS-DOS-based applications in a window:
	
	- 0Dh
	
	- 0Eh
	
	- 0Fh
	
	- 10h
	
	- 11h
	
	- 12h
	
	The other drivers that ship with Windows 3.1 and drivers based on Windows 3.0 are
	only capable of running mode 0Fh in a window.
	
	These other drivers are able to display MS-DOS-based applications that use video
	modes 0Dh, 0Eh, 10h, 11h, 12h in a window if the current screen does not need to
	be redrawn or updated. This way it is possible to select and copy text to the
	Clipboard. When it is time for the screens to be updated, the application must
	be switched back to full screen. Switching from a window to full-screen mode and
	back can be done in two different ways:
	
	- Make the MS-DOS-based application active and then press ALT+ENTER.
	
	  -or-
	
	- From the Control menu (-) in the upper-left corner of an MS-DOS-based
	  application running in a window, choose Settings, select Full Screen, and
	  then choose the OK button.
	
	If you attempt to update an MS-DOS-based application running in a window in a
	mode other than 0Fh, the following error message appears:
	
	  You cannot run this application while another high-resolution application is
	  running.
	
	After this has come up and been dismissed, Windows beeps if you make any
	subsequent attempt to update the screen, press keys, and so on. The application
	must be changed to full-screen mode before continuing.
	
	Video mode 13h is not capable of running in a window. If you attempt to run a
	13h-mode screen in a window, the following error message appears
	
	  Insufficient Memory
	
	and the screen will have to be changed back to full screen before the MS-DOS
	application is viewable.
	
	
	KBCategory: kb3rdparty kbdisplay kbenv
	KBSubcategory: win31
	
	Additional query words: 3.10 tseng quadram sigma ati video7 quadtel paradise diamond speedstar
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
