---
layout: page
title: "Q260848: Allegiance Err Msg: The Server You Are Trying to Play on Has..."
permalink: kb/260/Q260848/
---

## Q260848: Allegiance Err Msg: The Server You Are Trying to Play on Has...

	Article: Q260848
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu msgame
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Allegiance, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to join a game of Microsoft Allegiance, you may receive the
	following error message:
	
	  The server you are trying to play on has a newer version than you. Please go
	  play online to get the latest auto-update.
	
	CAUSE
	=====
	
	This behavior occurs if your copy of Allegiance has not been auto-updated to the
	latest version.
	
	RESOLUTION
	==========
	
	To resolve this issue, update your copy of Allegiance. To do this, use the
	following methods.
	
	Run Allegiance with Checkfiles
	------------------------------
	
	To run Allegiance with checkfiles:
	
	Click Start, point to Programs, point to Microsoft Games, point to Allegiance,
	point to Trouble Shooting, and then click Run Allegiance With Checkfiles.
	
	If the issue continues to occur, proceed to the next method.
	
	Delete the Allegiance Configuration Files
	-----------------------------------------
	
	To delete the Allegiance configuration files:
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. In the Named box, type the following line (including the quotation marks):
	
	  "Allegiance"
	
	3. In the "Look in" box, click My Computer, and then click Find Now.
	
	4. In the list of found files, double-click the Allegiance installation folder.
	  By default, this should be located in the C:\Program Files\Microsoft Games
	  folder.
	
	5. Right-click the Filelist.txt file, and then click Delete.
	
	6. If you are prompted to confirm the file deletion, click Yes.
	
	7. Right-click the AutoUpdate folder, and then click Delete.
	
	8. If you are prompted to confirm the folder deletion, click Yes.
	
	9. Click a file with a .cfg file extension, press and hold down the CTRL key,
	  and then click each file with a .cfg file extension in the list of found
	  files.
	
	10. On the File menu, click Delete.
	
	11. If you are prompted to confirm the multiple file deletion, click Yes.
	
	12. Close all open windows on the desktop, and then start Allegiance.
	
	Additional query words: 1.00 msgame igz msngz automatic updates
	
	======================================================================
	Keywords          : kberrmsg kbimu msgame 
	Technology        : _IKkbbogus kbGamesSearch kbAllegianceSearch kbAllegiance
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
