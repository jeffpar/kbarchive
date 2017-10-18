---
layout: page
title: "Q135153: Cannot Access Macintosh Files on Windows NT Server"
permalink: kb/135/Q135153/
---

## Q135153: Cannot Access Macintosh Files on Windows NT Server

	Article: Q135153
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot view or open certain Macintosh files or folders on a Microsoft
	Windows NT server.
	
	NOTE: This same behavior can occur anytime a Windows 95 client tries to view or
	open a file that was created with a non-standard code page.
	
	For example, if you create a file using the PanEuro version of Windows 95, you
	cannot view the file in Windows 95 US version.
	
	CAUSE
	=====
	
	The files or folders you cannot access contain extended characters in their file
	name. Extended characters that are displayed as an underscore (_) are not in the
	OEM/ANSI-to-Unicode or Unicode-to-OEM/ANSI mapping tables. The underscore
	character is substituted for characters that cannot be mapped or displayed.
	
	RESOLUTION
	==========
	
	Rename these files or folders using Windows NT.
	
	MORE INFORMATION
	================
	
	The following characters are valid in file names in the Macintosh environment
	but not in Windows 95:
	
	  / 
	  \ 
	  *
	  <
	  >
	  "
	  |
	  ?
	
	If a Macintosh user creates a folder whose name contains any of these characters
	and you try to open the folder in Windows 95, you receive the following error
	message:
	
	  The directory does not exist
	
	This behavior can also occur if a Macintosh folder name contains a trailing space
	or period at the end of the name.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
