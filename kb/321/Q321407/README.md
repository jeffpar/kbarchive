---
layout: page
title: "Q321407: Dungeon Siege: &quot;Needs to Close&quot; Err Msg When Switching Windows"
permalink: kb/321/Q321407/
---

## Q321407: Dungeon Siege: &quot;Needs to Close&quot; Err Msg When Switching Windows

	Article: Q321407
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 04-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Dungeon Siege, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Dungeon Siege or try to switch from one window back to
	Dungeon Siege, you may receive an error message similar to the following:
	
	  Dungeon Siege has encountered an error and needs to close. We are sorry for
	  the inconvenience.
	
	When you click "click here", you receive details about the error message similar
	to the following:
	
	  Error Signature
	  AppName: dungeonsiege.exe AppVer: 0.2.3.801 ModName: dungeonsiege.exe
	  ModVer: 0.2.3.801 Offset: 00272a2f
	
	CAUSE
	=====
	
	On Microsoft Windows 2000 and Microsoft Windows XP, this behavior may occur if
	your video adapter does not successfully switch to and from full-screen Direct
	3D mode.
	
	Direct 3D is a hardware accelerator that is required to play Dungeon Siege. When
	you switch to another window from Dungeon Siege, your video adapter temporarily
	turns Direct 3D off, and then turns it on again when you switch back to Dungeon
	Siege. The error message appears if your video adapter cannot turn Direct 3D
	back on.
	
	On Microsoft Windows 98 and Microsoft Windows Millennium Edition (Me), this
	behavior may occur if your video adapter driver is incompatible with Dungeon
	Siege.
	
	RESOLUTION
	==========
	
	To resolve this issue, do one of the following:
	
	1. When you are running Windows 2000 or Windows XP, do not open the Windows
	  Security dialog box, and turn your password-protected screen saver off while
	  Dungeon Siege is open.
	
	  -or-
	
	2. When you are running Windows 98 or Windows Me, download the latest driver for
	  your video adapter. Contact your video adapter manufacturer for information
	  about updated drivers.
	
	MORE INFORMATION
	================
	
	For information about how to contact , click the appropriate article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHomeProdSearch kbGamesSearch _IK kbDungeonSiege
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
