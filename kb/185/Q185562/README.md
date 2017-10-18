---
layout: page
title: "Q185562: Golf 98/99 Err Msg: Requires Windows 95 with DirectX..."
permalink: kb/185/Q185562/
---

## Q185562: Golf 98/99 Err Msg: Requires Windows 95 with DirectX...

	Article: Q185562
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtlc kbimu msgame golf98kbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf 1998 Edition, version 1.0 
	- Microsoft Golf 1999 Edition, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Golf 1998 Edition, you may receive the following error
	message:
	
	  Microsoft Golf 1998 requires Windows 95 with DirectX 5.0 or higher.
	
	When you start Microsoft Golf 1999 Edition, you may receive the following error
	message:
	
	  Microsoft Golf 1999 requires Windows 95 with DirectX 6.0 or higher.
	
	CAUSE
	=====
	
	This behavior can occur if the Findstuff32.dll file is missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, delete the Findstuff32.dll file and then reinstall Golf.
	To do this, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following line (including the quotation marks), and
	  then click OK
	
	  <drive>:\Program Files\Microsoft Games
	
	  where <drive> is the drive letter of the hard disk on which Golf is
	  installed.
	
	3. Double-click the Golf '98 or the Microsoft Golf 1999 Edition folder.
	
	4. Click the Findstuff32.dll file (if present), and then press the DELETE key.
	  If you are prompted to confirm the file deletion, click Yes.
	
	5. Close the Golf '98 or the Microsoft Golf 1999 Edition window.
	
	6. Insert the Golf CD-ROM into the CD-ROM drive. Press and hold down the SHIFT
	  key when you insert the Golf CD-ROM to prevent Golf from starting
	  automatically.
	
	7. Click Start, and then click Run.
	
	8. In the Open box, type the following line, and then click OK
	
	  <drive>:\setup.exe
	
	  where <drive> is the drive letter of the CD-ROM drive.
	
	9. Click Reinstall, and then follow the instructions on the screen to reinstall
	  Golf. If you are prompted to restart the computer, do so.
	
	Additional query words: 1.00 msgame golf98 golf99
	
	======================================================================
	Keywords          : kberrmsg kbtlc kbimu msgame golf98 kbfaq
	Technology        : kbHomeProdSearch kbGamesSearch kbGolf98 kbGolf99 kbGolfSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
