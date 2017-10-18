---
layout: page
title: "Q138012: Incorrect Settings for File System Performance Profiles"
permalink: kb/138/Q138012/
---

## Q138012: Incorrect Settings for File System Performance Profiles

	Article: Q138012
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 1.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	The performance of the file system on your computer is unchanged or degraded
	after you select Network Server or Mobile Or Docking System in the Typical Role
	Of This Machine box in the File System Properties dialog box.
	
	CAUSE
	=====
	
	The NameCache and PathCache values are written to the registry incorrectly for
	the Network Server and Mobile Or Docking System profiles. The data for NameCache
	is written to the PathCache value, and the data for PathCache is written to the
	NameCache value.
	
	RESOLUTION
	==========
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	Modify the NameCache and PathCache values in the following registry key:
	
	  Hkey_Local_Machine\Software\Microsoft\Windows\CurrentVersion\FS
	  Templates
	
	NOTE: The value data for these settings is in hexadecimal format.
	
	For the Mobile Or Docking System profile, use the following data:
	
	  Value name   Value data
	  ------------------------
	  NameCache    51 01 00 00
	  PathCache    10 00 00 00
	
	For the Network Server profile, use the following data:
	
	  Value name   Value data
	  ------------------------
	  NameCache    a9 0a 00 00
	  PathCache    40 00 00 00
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 and
	Microsoft Windows 95 OEM Service Release version 1.
	
	This problem has been corrected in Windows 95 OEM Service Release version 2.
	
	MORE INFORMATION
	================
	
	After you modify the registry settings, use the following procedure to optimize
	your file system performance:
	
	1. In Control Panel, double-click the System icon.
	
	2. On the Performance tab, click File System.
	
	3. In the Typical Role Of This Machine box, click the most common role for your
	  computer, and then click OK.
	
	The default profile (Desktop Computer) does not use the NameCache or PathCache
	values in the registry. Instead, the file system defaults are used.
	
	NOTE: The profile values for NameCache and PathCache listed in the "Microsoft
	Windows 95 Resource Kit" (page 566) are correct; however, they are listed in
	decimal format. For the Desktop Computer profile, the default value for
	NameCache is a5 02 00 00, and the default value for PathCache is 20 00 00 00.
	
	
	REFERENCES
	==========
	
	For additional information about optimizing file system performance, please see
	the "Microsoft Windows 95 Resource Kit," pages 565-567, "Optimizing File System
	Performance with Profiles."
	
	Additional query words: osr osr1
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
