---
layout: page
title: "Q141534: Unconf.:Haunted :Call to Undefined Dynalink/QuickTime"
permalink: /kb/141/Q141534/
---

## Q141534: Unconf.:Haunted :Call to Undefined Dynalink/QuickTime

	Article: Q141534
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	1.00
	WINDOWS
	unconfirmed kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Haunted House for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	*********************************************************************
	**                           - WARNING -                           **
	**     THE INFORMATION BELOW IS PRELIMINARY AND HAS NOT BEEN       **
	**     CONFIRMED OR TESTED BY MICROSOFT. USE ONLY                  **
	**     WITH DISCRETION.                                            **
	*********************************************************************
	
	SYMPTOMS
	========
	
	You may receive the following error message when you try to view the movies with
	the film projector, or try to watch the television clips, in the Haunted House
	Viewing Room:
	
	Windows 95 message
	------------------
	
	  Your program is making an invalid dynamic link call to a .dll file
	
	Windows 3.1 message
	-------------------
	
	  Call to undefined Dynalink
	
	  -or-
	
	  The screen will stay blank.
	
	CAUSE
	=====
	
	The error message or blank screen occurs if there is a newer version of
	QuickTime for Windows installed on the computer.
	
	The Ultimate Haunted House uses QuickTime version 1.0 to view the movies and
	television clips that are seen in the viewing room.
	
	If there has been an application installed on the computer that installs version
	2.0 of QuickTime, the DLL files in the WINDOWS\SYSTEM folder will not be
	compatible with the version of QuickTime Haunted House uses.
	
	RESOLUTION
	==========
	
	Try these steps first. They usually resolve most of these conflicts:
	
	1. Copy the file QCMC.QTC from the HHOUSE folder on the Haunted House CD to the
	  WINDOWS\SYSTEM folder on the hard drive.
	
	2. Rename the file to QQCMC.QTC.
	
	  When you rename the file, you may receive an "access denied" error message.
	  Make sure you've changed the file attributes from read-only to archive. For
	  information about how to change file attributes in Windows, see your Windows
	  printed documentation or online Help.
	
	3. Restart Haunted House and try playing the movies or television clips.
	
	If the problem still occurs, there are certain QuickTime version 2.0 files in the
	WINDOWS\SYSTEM folder that need to be renamed and then replaced with the
	QuickTime version 1.0 files. Here are the steps to accomplish this:
	
	Exit Windows to a DOS prompt.
	
	Windows 95
	----------
	
	1. Click Start.
	
	2. Click Shut Down, and click Restart In Ms-Dos Mode.
	
	For Windows 3.1
	---------------
	
	1. From the File Manager, click File and click Exit Windows.
	
	2. Type "CD\WINDOWS\SYSTEM" (without the quotation marks) and press ENTER.
	
	3. From the C:\WINDOWS\SYSTEM> prompt, type the following commands:
	
	  NOTE: It is important to rename the QuickTime version 2.0 files instead of
	  deleting them, because they may need to be renamed back to be used with other
	  applications using QuickTime version 2.0.
	
	  REN QCMC.QTC QCMC.QT2      press ENTER
	  REN QTHNDLR.DLL QTHNDLR.QT2   press ENTER
	  REN QTIM.DLL QTIM.QT2      press ENTER
	  REN QTIMCMGR.DLL QTIMCMGR.QT2   Press ENTER
	
	4. Place the Haunted House CD in the CD-ROM drive.
	
	5. Type the following commands:
	
	  (Where D: is the correct drive letter for your CD-ROM drive)
	
	  COPY D:\HHOUSE\QCMC.QTC      press ENTER
	  COPY D:\HHOUSE\QTHNDLR.DLL   press ENTER
	  COPY D:\HHOUSE\QTIM.DLL      press ENTER
	  COPY D:\HHOUSE\QTIMCMGR.DLL   Press ENTER
	
	6. Restart Windows.
	
	7. Start The Ultimate Haunted House and play the movies and the television
	  clips.
	
	STEPS TO RENAME THE FILES BACK
	------------------------------
	
	Exit Windows to a DOS prompt.
	
	Windows 95:
	
	1. Click Start.
	
	2. Click Shut Down, and click Restart In Ms-Dos Mode.
	
	For Windows 3.1:
	
	1. From the File Manager, click File and click Exit Windows.
	
	2. Type "CD\WINDOWS\SYSTEM" (without the quotation marks) and press ENTER.
	
	3. From the C:\WINDOWS\SYSTEM> prompt, type the following commands:
	
	  REN QCMC.QT2 QCMC.QTC      press ENTER
	  REN QTHNDLR.QT2 QTHNDLR.DLL   press ENTER
	  REN QTIM.QT2 QTIM.DLL      press ENTER
	  REN QTIMCMGR.QT2 QTIMCMGR.DLL   Press ENTER
	
	NOTE: Another solution is to reinstall Windows 95.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.00 movies uhh haunted qt quicktime err wuhh quick time
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword kbKidsSearch kbHauntedHouse
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
