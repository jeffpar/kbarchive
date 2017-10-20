---
layout: page
title: "Q58366: Installing Windows 3.0 on a Network Server"
permalink: /kb/058/Q58366/
---

## Q58366: Installing Windows 3.0 on a Network Server

{% raw %}

	Article: Q58366
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains tips on installing a copy of Microsoft Windows on a shared
	network drive.
	
	For complete instructions when setting up a server installation of Windows 3.0,
	refer to the "Microsoft Windows User's Guide" for version 3.0.
	
	MORE INFORMATION
	================
	
	The following information may be helpful if you are installing a copy of Windows
	on a shared network drive, so that it can be run by multiple users.
	
	- All files in the shared Windows directory must be set to read-only. This can
	  be done from within the Windows File Manager, or by using the MS-DOS ATTRIB
	  command (see your MS-DOS manual). If this is not done, users may get sharing
	  violations while running Windows.
	
	  NOTE: On a Novell network, the share directory access rights under group
	  "everyone" can be set to read and file scan only to achieve the same result.
	
	- Make sure that the shared Windows directory does not contain any .INI or .GRP
	  files, or a copy of WIN.COM. Setup will create these files in the user's
	  personal Windows directory.
	
	Additional query words: 3.00 3.0 3.0a 3.00a Novell Banyan Vines Netware win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
