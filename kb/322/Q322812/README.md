---
layout: page
title: "Q322812: How to Turn Setuid/Setgid On or Off"
permalink: kb/322/Q322812/
---

## Q322812: How to Turn Setuid/Setgid On or Off

	Article: Q322812
	Product(s): Microsoft Windows NT
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 12-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 3.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to turn set-user-identifier-on-execution (setuid) or
	set-group-identifier-on-execution (setgid) on or off.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Windows Services For UNIX 3.0 (SFU) includes support for setuid/setgid. When you
	install SFU, you can turn on this support. In SFU 3.0, you can use the chmod(1)
	utility to set the setuid, setgid, and sticky file mode bits on files or folders
	that are stored on an NTFS file system partition and that are shared through
	Server for NFS. When you later obtain access to the file or folder by using a
	UNIX-based client, the standard semantics for these bits apply. For example, an
	executable file (.exe) that has the setuid bit set will execute under the user
	ID of the file's owner, not the user ID of the user who is executing the file.
	
	Some UNIX-based network file system (NFS) servers apply special interpretations
	or restrictions for the setuid, setgid, and sticky bits. Some versions of UNIX,
	for example, enforce mandatory locking on a folder with the setgid bit set but
	no execute permissions. Server for NFS does not implement special
	interpretations or restrictions when you use these bits.
	
	The functionality of setuid/setgid is a potential security issue. Because of
	this, SFU 3.0 can toggle this feature by either editing the registry values
	directly or by using Regini with the included .ini files to turn the values on
	or off.
	
	Use REGINI to Turn On or Turn Off Setuid/Setgid
	-----------------------------------------------
	
	In the SETUP folder on the SFU 3.0 CD-ROM are 2 files:
	
	  Enablesetuid.ini - Turns on setuid/setgid.
	  Disablesetuid.ini - Turns off setuid/setgid.
	
	At a command prompt, run the "regini enablesetuid" (without the quotation marks)
	command or the "regini disablesetuid" (without the quotation marks) command.
	
	Edit the Registry Values Directly
	---------------------------------
	
	Use Registry Editor to locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Services for UNIX
	
	Edit the EnableSetuidBinaries value:
	
	  1 is setuid/setgid turned on.
	  0 is setuid/setgid turned off.
	
	Additional query words: solar coaster solarcoaster interix
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinServiceUNIXSearch kbWinServiceUNIX300
	Version           : :3.0
	Issue type        : kbhowto
	
	=============================================================================
	
