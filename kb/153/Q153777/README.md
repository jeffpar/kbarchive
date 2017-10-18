---
layout: page
title: "Q153777: Close Combat Err Msg: [ufs]Reference Is Invalid"
permalink: kb/153/Q153777/
---

## Q153777: Close Combat Err Msg: [ufs]Reference Is Invalid

	Article: Q153777
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
	
	You may receive the following error when you start Close Combat:
	
	  [ufs]Reference is invalid
	
	CAUSE
	=====
	
	This error can be caused by the following situations.
	
	Cause 1
	-------
	
	You receive the above error if the Campaign, Myob, or Replay folder is deleted
	from the Close Combat\Games folder. To correct this problem, see the RESOLUTION
	section below.
	
	Cause 2
	-------
	
	This problem also occurs when you change the default location and do not specify
	a directory (for example, if you enter d:\ instead of d:\cc\. If you change the
	default location, make sure you specify a directory for the new location. To
	correct this problem, see the "How to Re-install Close Combat" section below.
	
	Cause 3
	-------
	
	This error may also occur if you install Close Combat to a drive other than
	"C:\". When you select a different drive (for example, X), Setup defaults to
	"X:\" and copies all the files to the root of the drive, causing the
	"[ufs]Reference Is Invalid" error. To correct this problem, see the "Installing
	to a Drive Other than C:\" section below.
	
	RESOLUTION
	==========
	
	This problem can be corrected by reinstalling Close Combat or creating the
	missing folder(s).
	
	How to Re-install Close Combat
	------------------------------
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click the Install/Uninstall tab.
	
	4. On the Install/Uninstall tab, click Microsoft Close Combat, and then click
	  Add/Remove.
	
	5. When the Close Combat installation screen appears, click Reinstall.
	
	How to Re-Create the Missing Folder(s)
	--------------------------------------
	
	NOTE: The following steps assume Close Combat was installed in the default
	location of C:\Windows\Program Files\Microsoft Games\Close Combat.
	
	1. On your Windows 95 desktop, double-click My Computer.
	
	2. Double-click drive C. Double-click the Windows folder, then double-click the
	  Program Files Folder, double-click the Microsoft Games folder, double-click
	  the Close Combat folder, and then double-click the Games folder.
	
	  The following folders should be in the Games folder:
	
	  Campaign
	  Myob
	  Replays
	
	  Determine which folder or folders are missing.
	
	3. From the File menu, click New, and click Folder.
	
	4. Type the name of the missing folder and press the ENTER key. Repeat steps 3
	  and 4 until all the missing folders have been created.
	
	Installing to a Drive Other than C:\
	------------------------------------
	
	The "[ufs]Reference Is Invalid" error may also occur if you install Close Combat
	to a drive other than "C:\". To correct this problem, do the following:
	
	1. Click the Start button, point to Settings, and click Control Panel.
	
	2. Click Add/Remove Programs.
	
	3. Click Microsoft Close Combat, and click Add/Remove.
	
	4. Re-install Close Combat to the other drive by adding the path "X:\Program
	  Files\Microsoft Games\Close Combat" when prompted for the location.
	
	Additional query words: 1.00 close combat error reference invalid ufs
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmm kbfaq
	Technology        : kbHomeProdSearch kbGamesSearch kbZNotKeyword kbCloseCombatSearch kbCloseCombat
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
