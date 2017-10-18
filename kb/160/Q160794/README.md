---
layout: page
title: "Q160794: Removing or Adding a CD into Drive May Cause Errors"
permalink: kb/160/Q160794/
---

## Q160794: Removing or Adding a CD into Drive May Cause Errors

	Article: Q160794
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following errors may occur while removing or inserting a CD on a computer
	running Windows NT 4.0:
	
	  System Process - No Disk
	
	-or-
	
	  STOP: 0x0000000A
	  IRQL_NOT_LESS_OR_EQUAL
	
	The "System Process - No Disk" error may occur when Windows NT is upgraded from
	version 3.51 to 4.0 if NetShield is installed prior to the upgrade.
	
	The "STOP 0x0000000A" may occur when changing CD-ROMs, particularly the
	auto-starting disks, such as the Windows NT 4.0 or Windows 95 setup media.
	
	CAUSE
	=====
	
	Services for McAfee's NetShield for Windows NT are running on the server
	computer. Different versions of NetShield yield different errors. NetShield
	versions 2.5.1 and 2.5.2 are not compatible with Windows NT 4.0.
	
	RESOLUTION
	==========
	
	Set the McAfee Task Manager services to disabled. If the STOP errors prevent
	access to the server, do one of the following:
	
	FAT Partition
	-------------
	
	1. Boot to DOS using a bootable DOS disk.
	
	2. Rename the directory where NetShield is installed. This will cause the
	  services not to start (because they could not be found) and allow you to log
	  on to the server.
	
	NTFS Partition
	--------------
	
	1. Install a parallel copy of Windows NT into another directory.
	
	2. Boot to the new installation of Windows NT.
	
	3. Rename the directory where NetShield is installed. When you boot back to the
	  original installation, this will cause the services not to start (because
	  they could not be found) and allow you to log on to the server.
	
	Emergency Repair Disk
	---------------------
	
	Run the Emergency Repair Disk and replace the Software and System registry
	hives.
	
	NOTE: Replacing the Software and System hives will return the system registry to
	when the ERD was last updated. If the ERD was updated after McAfee was
	installed, then this method will not resolve the issue.
	
	If the ERD was created at the time of the Windows NT installation and not updated
	after hardware and software installations, then the system will revert to the
	registry at the time Windows NT was installed.
	
	MORE INFORMATION
	================
	
	Please see the following Microsoft Knowledge Base article for more information:
	
	  ARTICLE ID: Q157054
	  TITLE : STOP 0x0000000A when Accessing IIS After Windows NT 4 Upgrade
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
