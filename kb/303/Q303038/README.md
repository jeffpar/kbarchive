---
layout: page
title: "Q303038: Links 2001: Err Msg: Links 2001 Cannot Verify Your Disk"
permalink: /kb/303/Q303038/
---

## Q303038: Links 2001: Err Msg: Links 2001 Cannot Verify Your Disk

	Article: Q303038
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Links 2001 
	-------------------------------------------------------------------------------
	
	*********************************************************************
	**                           - WARNING -                           **
	**     THE INFORMATION BELOW IS PRELIMINARY AND HAS NOT BEEN       **
	**     CONFIRMED OR TESTED BY MICROSOFT. USE ONLY                  **
	**     WITH DISCRETION.                                            **
	*********************************************************************
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Links 2001, you may receive the following
	error message:
	
	  Please insert Links 2001 CD# 1
	
	When you insert the Links 2001 CD-ROM into your computer's CD-ROM or DVD-ROM
	drive, and then click OK, you receive the following error message
	
	  Links 2001 cannot verify your disk. Please refer to the README for further
	  information.
	
	and you are unable to start Links 2001.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions is true:
	
	- The Links 2001 installation is corrupted.
	
	  -or-
	
	- You install Links 2001 on a non-English version of Microsoft Windows.
	
	Links 2001 requires an English-language edition of Windows for proper operation.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods.
	
	Method 1: Reinstall Links 2001
	------------------------------
	
	If your Links 2001 installation is corrupted, follow these steps:
	
	1. Reinstall Links 2001. To do this, follow these steps:
	
	  a. Click Start, point to Programs, point to Microsoft Games, point to Links
	     2001, and then click Uninstall Links 2001.
	
	  b. In the Links 2001 dialog box that appears, click Reinstall, and then click
	     OK.
	
	  c. Click the type of installation that you want (for example, Medium), and
	     then click Install.
	
	  d. Insert disc 1 of your Links 2001 CD-ROM package into your computer's
	     CD-ROM or DVD-ROM drive, and then click OK.
	
	2. Download and install the Links 2001 update. To obtain the Links 2001 Update
	  v1.21 (11.3MB), browse to the following Microsoft Web site:
	
	  http://www.microsoft.com/games/home/games.asp?g=127#support
	
	3. Download and install the latest version of DirectX. To obtain the latest
	  version of DirectX, browse to the following Microsoft Web site:
	
	  http://www.microsoft.com/directx/homeuser/downloads
	
	4. Restart the computer.
	
	Method 2: On a Non-English Edition of Windows
	---------------------------------------------
	
	To work around the issue inherent to installing Links 2001 on a non-English
	edition of Windows, follow these steps:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Quit all running programs.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type "regedit" (without the quotation marks), and then click
	  OK.
	
	4. In Registry Editor, expand the following registry subkey:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Microsoft Games\Links 2001\Performance
	
	5. On the Edit menu, click Delete.
	
	  The following message appears:
	
	  Are you sure you want to delete this key?
	
	  Click Yes.
	
	6. Expand the following registry subkey:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Microsoft Games\Links 2001\EULA
	
	7. On the Edit menu, click Delete. The following message appears:
	
	  Are you sure you want to delete this key?
	
	  Click Yes.
	
	8. Quit Registry Editor, and then restart the computer.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbLinkGolfSearch kbGamesSearch kbGolfSearch kbLinks2001
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
