---
layout: page
title: "Q65111: INFO: Using WriteProfileString to Delete WIN.INI Entries"
permalink: kb/065/Q65111/
---

## Q65111: INFO: Using WriteProfileString to Delete WIN.INI Entries

	Article: Q65111
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbSysSettings
	Last Modified: 09-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The WriteProfileString function provides a mechanism to maintain the system
	profile file WIN.INI. In versions of Windows prior to version 3.0, an
	application could call the WriteProfileString function to add entries to WIN.INI
	or to modify existing entries. However, to delete an entry from WIN.INI, the
	user was required to edit the file manually.
	
	The WriteProfileString function was extended in Windows 3.0 to enable an
	application to delete any of the following from WIN.INI:
	
	1. A value associated with a key name.
	
	2. A line that contains a particular key name.
	
	3. An entire section.
	
	This article details the three deletion scenarios mentioned before.
	
	MORE INFORMATION
	================
	
	The parameters passed to the WriteProfileString function refer to the following
	selection from an example WIN.INI file:
	
	     [MY_APP]
	     KeyName = DATA
	
	To delete the line KeyName = DATA, call the WriteProfileString function as
	follows:
	
	     WriteProfileString("MY_APP", "KeyName", NULL);
	
	To delete the value DATA, change the call to the following:
	
	     WriteProfileString("MY_APP", "KeyName", "");
	
	To delete the entire MY_APP section, make the following call:
	
	     WriteProfileString("MY_APP", NULL, NULL);
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbSysSettings 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
