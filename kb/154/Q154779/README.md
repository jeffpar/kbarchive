---
layout: page
title: "Q154779: Close Combat Err Msg: Video Not Available, Cannot Find..."
permalink: kb/154/Q154779/
---

## Q154779: Close Combat Err Msg: Video Not Available, Cannot Find...

	Article: Q154779
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	1.00
	WINDOWS
	kbother kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Close Combat for Windows 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When starting Close Combat, you may receive the error message
	
	  Video Not Available, cannot find 'vids:ir32' decompressor
	
	and some AVI videos may not play. Notably, the Microsoft .AVI at the beginning of
	the game does not play nor does the first pre-battle video.
	
	CAUSE
	=====
	
	Incorrect versions of the Intel video decompressor files are installed in the
	Windows System folder.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following resolutions.
	
	Run the Indeo Setup Program
	---------------------------
	
	Run the Indeo Setup program to reinstall the Intel video decompressor files by
	following these steps:
	
	1. Insert the Close Combat CD-ROM in the CD-ROM drive.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type "<CD-ROM drive letter>:\setup\indeo\setup.exe"
	  (without the quotation marks), and then press ENTER.
	
	  Where <CD-ROM drive letter> is the drive letter of your CD-ROM drive.
	
	4. Follow the Indeo Setup program instructions.
	
	Rename the Decompressor Files and Reinstall Close Combat
	--------------------------------------------------------
	
	Rename the incorrect Intel video decompressor files and reinstall Close Combat.
	To rename these files:
	
	1. Open the Windows Explorer.
	
	2. Open the Windows System folder.
	
	3. Use the right mouse button to click the file Ir32.dll, and click Rename.
	
	4. Type "Ir32.old" (without the quotation marks) and press ENTER.
	
	5. Use the right mouse button to click the file Ir32_32.dll, and click Rename.
	
	6. Type Ir32_32.old and press ENTER.
	
	Now reinstall Close Combat. The correct versions of these files will be installed
	to the Windows System folder.
	
	MORE INFORMATION
	================
	
	Some applications may install an earlier version of the Intel video decompressor
	files. However, if the files have a date later than the date of the files
	included with Close Combat, the Close Combat installation will not overwrite
	these files.
	
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbZNotKeyword kbCloseCombatSearch kbCloseCombat
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
