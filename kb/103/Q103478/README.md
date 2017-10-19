---
layout: page
title: "Q103478: Mac Wkst: Mail 3.1 Installer Corrupts AppleTalk on System 7.1"
permalink: /kb/103/Q103478/
---

## Q103478: Mac Wkst: Mail 3.1 Installer Corrupts AppleTalk on System 7.1

	Article: Q103478
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install version 3.1 of Microsoft Mail for AppleTalk Networks on a
	Macintosh running System version 7.1 software, you may receive any of the
	following error messages regarding AppleTalk or network access:
	
	  The correct version of AppleTalk is not installed. Please reinstall the
	  Network Software
	
	  -or-
	
	  An error occurred while trying to start up your AppleTalk connection. The
	  built-in LocalTalk port will be used instead.
	
	  -or-
	
	  The Network Control Panel cannot be used because AppleTalk did not load at
	  startup. Activate AppleTalk in the Chooser and reboot.
	
	  -or-
	
	  AppleTalk service is unavailable because a serious error has occurred.
	  Rebooting may restore AppleTalk Service.
	
	  -or-
	
	  The currently installed version of AppleTalk is too old for this version of
	  the Network Control Panel. Please install the most recent version.
	
	CAUSE
	=====
	
	The Microsoft Mail installer script replaces AppleTalk with version 57.0.3. This
	version is not compatible with System 7.1.
	
	RESOLUTION
	==========
	
	To correct the problem once it has occurred, you need to reinstall the AppleTalk
	drivers with a more current version than 57.0.3. To do this, use one of the
	following methods:
	
	- Reinstall the Macintosh System software with the original disks. this will
	  update AppleTalk during the course of the installation.
	
	  NOTE: To reduce installation time, you can choose a minimal installation from
	  the Custom menu.
	
	-or-
	
	- Update the AppleTalk drivers by using the Network Software Installation (NSI)
	  disk from Apple. You can obtain the NSI disk from Apple or from most online
	  bulletin board systems, such as AppleLink.
	
	Additionally, Microsoft Mail 3.1a will not update the AppleTalk if the AppleTalk
	version is 57.0.3 or later.
	
	MORE INFORMATION
	================
	
	You can manually install Microsoft Mail 3.1 on a Macintosh running System 7.1.
	With a manual installation, the AppleTalk driver is not updated, and therefore,
	network connectivity is not affected.
	
	To manually install Microsoft Mail
	----------------------------------
	
	1. Insert the Disk 2 - Macintosh Workstation disk.
	
	2. Open the Mail Files folder by double-clicking the folder.
	
	3. Drag the MS Mail file to the Extensions folder.
	
	4. Open the Microsoft Mail DA suitcase by double-clicking it.
	
	5. Drag the enclosed Microsoft Mail desk accessory to the Apple Menu Items
	  folder.
	
	6. Restart the Macintosh.
	
	Additional query words: 3.10 AppleTalk corrupt
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
