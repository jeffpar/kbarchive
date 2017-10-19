---
layout: page
title: "Q183422: Long Delays Trying to View Registry Values Edit Dialog Box"
permalink: /kb/183/Q183422/
---

## Q183422: Long Delays Trying to View Registry Values Edit Dialog Box

	Article: Q183422
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	If you have a registry key value of binary data type that is fairly large
	(approximately 100 KB), and you use Regedt32 to try and display the Value Editor
	for the keys value by double-clicking the value, you may notice a considerable
	delay.
	
	CAUSE
	=====
	
	Value lengths are limited by available memory. Long values (more than 2048
	bytes) should be stored as files with the filenames stored in the registry. This
	helps the registry perform efficiently. Application elements such as icons,
	bitmaps, and executable files should be stored as files and not be placed in the
	registry.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	As a workaround, place all large application elements such as icons, bitmaps, and
	executable in files and create registry values pointing to those files.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
