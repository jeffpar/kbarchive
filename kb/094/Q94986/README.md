---
layout: page
title: "Q94986: Golf Err Msg: Bad or Missing RealSound Driver"
permalink: /kb/094/Q94986/
---

## Q94986: Golf Err Msg: Bad or Missing RealSound Driver

	Article: Q94986
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-1999
	
	kbsetup kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Golf issues the error statement "Bad or missing RealSound driver
	[vrsd.386]" in the Current Sound Driver portion of the System Info dialog box
	if:
	
	1. VRSD.386 was not installed properly in the SYSTEM subdirectory of the WINDOWS
	  directory.
	
	2. The line DEVICE=VRSD.386 is not under the [386Enh] section of the SYSTEM.INI
	  file.
	
	3. The VRSD.386 file is corrupt.
	
	Solution
	--------
	
	1. If the VRSD.386 file is corrupt or does not exist in the SYSTEM subdirectory
	  of Windows, you must expand it from the Setup Disk 1. Also, make sure it is
	  not in the WINDOWS directory or the MSGOLF directory. If you find it in
	  either place, you need to delete it.
	
	2. Exit Windows and switch to the SYSTEM subdirectory of the WINDOWS directory.
	
	3. Insert Golf Disk 1 in your floppy disk drive.
	
	4. Type the following
	
	  expand <drive>:\vrsd.38_ vrsd.386.
	
	  where <drive> is the name of your floppy disk drive.
	
	5. Restart Windows and run Golf.
	
	Additional query words: no sound 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbGolfSearch kbGolf100
	Version           : WINDOWS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	
