---
layout: page
title: "Q255189: Windows NT Explorer Displays Only Font Files on CD-ROM Copy"
permalink: /kb/255/Q255189/
---

## Q255189: Windows NT Explorer Displays Only Font Files on CD-ROM Copy

	Article: Q255189
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a CD-ROM containing the uncompressed setup files for Microsoft
	Windows NT 4.0 (or for a service pack) in the I386 folder, and you view that
	folder from Microsoft Windows NT Explorer, you may see only the font files. The
	other files in the folder may not appear.
	
	CAUSE
	=====
	
	This behavior can occur because the Desktop.ini file is not compressed.
	
	RESOLUTION
	==========
	
	To resolve this behavior, compress the Desktop.ini file and rename it to
	Desktop.in_ before you create the CD-ROM.
	
	MORE INFORMATION
	================
	
	The Desktop.ini file that is in the I386 folder contains a link to a registry
	key that designates it as a Fonts folder. The file contains the following
	string:
	
	  [.ShellClassInfo]
	  UICLSID={BD84B380-8CA2-1069-AB1D-08000948F534}
	
	If the folder has the read-only or system attribute, Windows NT Explorer reads
	the Desktop.ini file and links the Uiclsid back to the registry key. The
	registry identifies the folder as the Fonts folder, and Windows NT Explorer
	therefore displays only the fonts contained in it, and not the rest of the
	files.
	
	This issue does not occur with the installation media because, on the CD-ROM for
	Windows NT 4.0 or for a service pack, the Desktop.ini file is compressed and has
	an 'underscore' extension (Desktop.in_).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
