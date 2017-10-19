---
layout: page
title: "Q321408: Dungeon Siege: Error Msg: Unable to Access Required Directory"
permalink: /kb/321/Q321408/
---

## Q321408: Dungeon Siege: Error Msg: Unable to Access Required Directory

	Article: Q321408
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Dungeon Siege, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start Dungeon Siege, you may receive an error message similar to
	the following:
	
	  Type : ErrorBox
	  Module : C:\Program Files\Microsoft Games\Dungeon
	  Siege\DungeonSiege.exe
	  Location : TattooGame.cpp line 934 (at
	  P:\vss_db_tattoo\GPG\Projects\Tattoo\Game\)
	  Fail Count : 1 (w:0, e:1, x:0)
	  Exe timestamp: Mar 8 2002 22:34:09
	
	  Unable to create or access required directory!
	
	  Attempted path: '<drive>:\Dungeon Siege'
	  Error code : 0x00000005 ('Access is denied.')
	
	CAUSE
	=====
	
	This behavior may occur if your My Documents folder is not in the default
	location.
	
	When Dungeon Siege starts, it tries to create a Dungeon Siege folder in the My
	Documents folder. If the My Documents folder is not in the default location that
	is specific to your user profile, Dungeon Siege cannot create the folder.
	
	RESOLUTION
	==========
	
	To resolve this issue, move the My Documents folder to the default location. To
	do this, follow these steps:
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	1. Click Start, right-click My Documents, and then click Properties.
	
	2. In the Target box, type "<drive>:\Documents and
	  Settings\<user>\My Documents" (without the quotation marks), where
	  drive is the drive on which Windows is installed and user is your user name.
	
	3. Click Apply, and then click OK.
	
	4. When you are prompted to confirm that you want to create the folder, click
	  Yes.
	
	5. When you are prompted to confirm that you want to move all of the documents
	  with the folder, click "Yes to All".
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch _IK kbDungeonSiege
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
