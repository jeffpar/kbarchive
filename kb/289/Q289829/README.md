---
layout: page
title: "Q289829: Blank Spaces in Folder Name Aliases Become Underscore Characters"
permalink: /kb/289/Q289829/
---

## Q289829: Blank Spaces in Folder Name Aliases Become Underscore Characters

	Article: Q289829
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): w2000sfu kbUNIXService
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you mount a folder from a UNIX client to a server that is running the
	Server for NFS service in Services for UNIX, spaces in folders or file names are
	automatically converted to an underscore character (_).
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	If you start Microsoft Windows Explorer, and you try to map a network drive to
	point to C:\Program Files, the default alias is "Program Files". This alias does
	not pass the NFS aliasing requirements. Currently, the default alias that is
	used is "Program_Files"; this alias satisfies the aliasing requirement.
	
	When you create an NFS share on a computer that is running Windows 2000 with
	Services for UNIX 2.0, an underscore character replaces all the blank spaces.
	When you connect to the NFS share from an NFS client, type an underscore
	character in place of the blank spaces when you access the share.
	
	Additional query words: sfu solar coaster solarcoaster
	
	======================================================================
	Keywords          : w2000sfu kbUNIXService 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
