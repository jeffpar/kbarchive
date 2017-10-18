---
layout: page
title: "Q319765: Zoo Tycoon: How to Change to a 3D Mouse Cursor"
permalink: kb/319/Q319765/
---

## Q319765: Zoo Tycoon: How to Change to a 3D Mouse Cursor

	Article: Q319765
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zoo Tycoon 
	-------------------------------------------------------------------------------
	
	Microsoft provides programming examples for illustration only, without warranty either 
	expressed or implied, including, but not limited to, the implied warranties of 
	merchantability and/or fitness for a particular purpose. This article assumes 
	that you are familiar with the programming language being demonstrated and the 
	tools used to create and debug procedures. Microsoft support professionals can 
	help explain the functionality of a particular procedure, but they will not 
	modify these examples to provide added functionality or construct procedures to 
	meet your specific needs. If you have limited programming experience, you may 
	want to contact a Microsoft Certified Partner or the Microsoft fee-based 
	consulting line at (800) 936-5200. For more information about Microsoft Certified 
	Partners, please visit the following Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	SUMMARY
	=======
	
	This article describes how to change to a 3D mouse cursor in Zoo Tycoon.
	
	MORE INFORMATION
	================
	
	To change to an alternate cursor, edit the zoo.ini file. To do this, follow
	these steps:
	
	1. Locate the following file:
	
	  C:\Program Files\Microsoft Games\Zoo Tycon\Zoo.ini.
	
	  This file opens in Notepad.
	
	2. Under the heading [UI], locate the text that reads as follows:
	
	  useAlternateCursors=1
	
	3. Change the '1' to a '0', so that the text reads as follows:
	
	  useAlternateCursors=0
	
	NOTE: After you change the cursor, if the cursor appears to flicker or
	disappears, change the '0' back to a '1'.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch kbZooTycoon
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
