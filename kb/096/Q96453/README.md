---
layout: page
title: "Q96453: Mac Wkst: Installation Program Cannot Find Needed Files"
permalink: kb/096/Q96453/
---

## Q96453: Mac Wkst: Installation Program Cannot Find Needed Files

	Article: Q96453
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While installing version 3.1 of Microsoft Mail for AppleTalk Networks as a
	client on a network from an AppleShare volume or a Personal File Sharing system,
	the following error message may be displayed:
	
	  The files needed for this installation could not be found on your server
	  volume "VOLUMENAME". Please contact your network administrator about this
	  problem.
	
	CAUSE
	=====
	
	Three possible causes for this error message are:
	
	1. The folder name where the installation program resides is not Microsoft Mail.
	
	2. The time on the workstation clock is different from the time on the server
	  clock.
	
	3. The desktop file on the AppleShare Volume is corrupt.
	
	RESOLUTION
	==========
	
	1. Ensure that the folder name is Microsoft Mail.
	
	2. Set the time on the workstation to closely match the time on the server.
	
	3. Rebuild the desktop file by pressing the COMMAND+OPTION keys down while
	  restarting the computer.
	
	MORE INFORMATION
	================
	
	The time on the server clock does not have to match the time on the workstation
	clock exactly. After testing, Microsoft has determined that the problem occurs
	only when the workstation time is more than 16.40 minutes behind the server or
	more than 13.15 minutes ahead of the server.
	
	Additional query words: 3.00 MacMail install
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
