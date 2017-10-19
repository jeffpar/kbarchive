---
layout: page
title: "Q153612: Close Combat Err Msg: Required .dll File Wsock32.dll Not Found"
permalink: /kb/153/Q153612/
---

## Q153612: Close Combat Err Msg: Required .dll File Wsock32.dll Not Found

	Article: Q153612
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmmkbfaq
	Last Modified: 08-NOV-2001
	
	1.0
	WINDOWS
	kbother kberrmsg kbfaq kbfasttip
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Close Combat for Windows 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Close Combat for Windows, you may receive the following error
	message:
	
	  A required .DLL file, WSOCK32.DLL, was not found.
	
	CAUSE
	=====
	
	If Wsock32.dll is located anywhere other than in your Windows System folder, or
	if it is not installed on the computer, you will receive the above error
	message.
	
	RESOLUTION
	==========
	
	The following steps describe how to resolve this problem if Wsock32.dll is in
	the wrong location:
	
	1. Click the Start button, point to Programs, and click Explorer.
	
	2. Double-click My Computer, and use the right mouse button to click Find.
	
	3. In the Named box, type "Wsock32.dll" (without the quotation marks) and click
	  Find Now.
	
	4. If Wsock32.dll is located anywhere other than in the Windows System folder,
	  move the file into the Windows System folder.
	
	  For more information on how to move files, view the following Help topics in
	  Windows 95: moving, files or folders.
	
	5. Restart the computer.
	
	If Wsock32.dll Is Missing
	-------------------------
	
	If Wsock32.dll is missing from the computer, then extract the file from the
	Windows 95 compact disc or the Windows 95 floppy disks. The following steps
	describe how to resolve this problem if Wsock32.dll is missing or has not been
	installed on your computer:
	
	Compact Disc:
	
	1. Click the Start button, point to Programs, and then click MS-DOS Prompt.
	
	2. Type "extract /L c:\<windows>\system d:\win95\win95_11.cab wsock32.dll"
	  (without the quotation marks), where C is the drive on which Windows 95 is
	  installed, Windows is the directory in which Windows 95 is installed, and D
	  is your CD-ROM drive. (Make the appropriate changes if your system differs.)
	
	  NOTE: Wsock32.dll may be in win95_12.cab if you are extracting the file off of
	  the Windows 95 compact disc. In this case, type:
	
	  extract /L c:\<windows>\system d:\win95\win95_12.cab
	
	3. Type "exit" (without the quotation marks) and press ENTER to close the MS-DOS
	  Prompt.
	
	4. Click the Start button, click Shutdown, click Restart The Computer, and then
	  click Yes.
	
	3.5-inch Disks:
	
	1. Click the Start button, point to Programs, and then click MS-DOS Prompt.
	
	2. Use the command that corresponds to the type of disks you have:
	
	  a. If you have DMF disks, type "extract /L c:\<windows>\system
	     a:\win95_12.cab wsock32.dll" (without the quotation marks), where C is the
	     drive on which Windows 95 is installed, where Windows is the folder in
	     which Windows 95 is installed, and where A is your floppy disk drive.
	
	  b. If you have non-DMF disks, type "extract /L c:\<windows>\system
	     a:\win95_19.cab wsock32.dll" (without the quotation marks), where C is the
	     drive on which Windows 95 is installed, where Windows is the folder in
	     which Windows 95 is installed, and where A is your floppy disk drive.
	
	3. Type "exit" (without the quotation marks) and press ENTER to close the MS-DOS
	  Prompt.
	
	4. Click the Start button, click Shutdown, click Restart The Computer, and then
	  click Yes.
	
	Additional query words: 1.00 cc wsock required error
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmm kbfaq
	Technology        : kbHomeProdSearch kbGamesSearch kbZNotKeyword kbCloseCombatSearch kbCloseCombat
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
