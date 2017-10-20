---
layout: page
title: "Q141014: Emergency Recovery Utility Does Not Back Up Files"
permalink: /kb/141/Q141014/
---

## Q141014: Emergency Recovery Utility Does Not Back Up Files

{% raw %}

	Article: Q141014
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Emergency Recovery Utility (ERU) that is included on the
	Windows 95 CD-ROM to back up your configuration files, the utility may not work
	correctly. It may stop without any warning or error message.
	
	CAUSE
	=====
	
	This behavior can occur if one or more of the default configuration files is
	missing.
	
	RESOLUTION
	==========
	
	Verify that all the default configuration files exist on the hard disk.
	
	MORE INFORMATION
	================
	
	The ERU does not function properly if any of the following files are missing:
	
	  Autoexec.bat
	  Command.com
	  Config.sys
	  Io.sys
	  Msdos.sys
	  Protocol.ini
	  System.dat
	  System.ini
	  User.dat
	  Win.ini
	
	For additional information about the ERU, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q139437 Windows 95 Emergency Recovery Utility
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
