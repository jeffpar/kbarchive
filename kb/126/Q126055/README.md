---
layout: page
title: "Q126055: Frank Lloyd Wright Err Msg: Call to Undefined Dynalink"
permalink: /kb/126/Q126055/
---

## Q126055: Frank Lloyd Wright Err Msg: Call to Undefined Dynalink

	Article: Q126055
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft The Ultimate Frank Lloyd Wright for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to play a video from The Ultimate Frank Lloyd Wright while
	Apple QuickTime version 2.0 for Windows is installed, you may receive the
	following error message in Microsoft Windows 3.1x:
	
	  Call to Undefined Dynalink
	
	In Windows 95, the error message may read:
	
	  Program Error. Your program is making an invalid dynamic link call to a .Dll
	  file
	
	If you receive this error while trying to play an .avi file in Frank Lloyd Wright
	please see the following article in the Microsoft Knowledge Base:
	
	  Q137051 Cannot Play .avi Files with Number 9 Video Card
	
	
	RESOLUTION
	==========
	
	To resolve this problem, do the following:
	
	1. Copy the following files from the <CD drive>:\PRE directory on the
	  Frank Lloyd Wright CD to your <drive>:\WRIGHT directory
	
	     Book_Lb.txt
	     Flwpre.dir
	     Hcode.dat
	     Lingo.ini
	     Phrase.dat
	     Playenu.dll
	     Qtyvu9.qtc
	     Viewenu.dll
	
	  where <CD drive> is your CD-ROM drive (for example, D), and
	  <drive> is your hard drive (for example, C).
	
	2. Change the Frank Lloyd Wright Start In properties if you are using Windows 95
	  or change the command-line properties if you are using Windows 3.1x, as
	  follows:
	
	  Change the Working Directory from <CD drive>:\PRE to
	  <drive>:\WRIGHT, where <CD drive> is your CD-ROM drive (for
	  example, D), and <drive> is your hard drive (for example, C).
	
	  For information about to change the properties, see the "How to Change the
	  Properties" section below.
	
	3. Restart Windows.
	
	HOW TO CHANGE THE PROPERTIES
	----------------------------
	
	Windows 95
	----------
	
	To change the Start In properties in Windows 95, use the following steps.
	
	If you start Frank Lloyd Wright from the Start menu:
	
	1. Click the Start button, point to Settings and then click Taskbar.
	
	2. Click the Start Menu Programs tab.
	
	3. Click the Advanced button.
	
	4. Click the "+" sign next to Programs, then double-click the folder containing
	  the Frank Lloyd Wright shortcut icon, usually Microsoft Multimedia.
	
	5. Use the right mouse button to click the Frank Lloyd Wright icon once.
	
	6. Use the left mouse button to click Properties.
	
	7. Click the Shortcut tab.
	
	8. Change the Start In line from <CD drive>:\PRE to <drive>:\WRIGHT,
	  where <CD drive> is your CD-ROM drive (for example, D), and
	  <drive> is your hard drive (for example, C).
	
	  NOTE: Be sure to leave the Target as <CD drive>:\PRE\FLW.EXE
	
	If your Frank Lloyd Wright icon is on the desktop:
	
	1. Use the right mouse button to click the Frank Lloyd Wright icon once.
	
	2. Use the left mouse button to click Properties.
	
	3. Click the Shortcut tab.
	
	Windows 3.1x
	------------
	
	To change the command-line properties in Windows 3.1x, click the Frank Lloyd
	Wright icon once to highlight it, then click Properties on the File menu in
	Program Manager.
	
	MORE INFORMATION
	================
	
	The Ultimate Frank Lloyd Wright ships with the run-time version of QuickTime
	1.9. If QuickTime 2.0 is installed on your machine, a conflict occurs with
	QuickTime 1.9, resulting in the error message. Copying the files listed above to
	the hard drive, and setting the working directory to point to the files, ensures
	that the routines unique to QuickTime 1.9 are defined when Frank Lloyd Wright
	loads.
	
	QuickTime is manufactured by Apple Computer, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 1.0 multi media multimedia multi-media mmtitles FLW dyna link dynalink quick time
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbZNotKeyword kbUltimateFLW
	Version           : 1.00
	
	=============================================================================
	
