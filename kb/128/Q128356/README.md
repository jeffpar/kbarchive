---
layout: page
title: "Q128356: PC Mac: Err Msg: Cannot Perform Any Logging to Designated..."
permalink: /kb/128/Q128356/
---

## Q128356: PC Mac: Err Msg: Cannot Perform Any Logging to Designated...

	Article: Q128356
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0, on platform(s):
	   - the operating system: Mac OS (ALL) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log in to the Microsoft Mail for PC Networks, Macintosh workstation,
	the following error message may occur:
	
	  Cannot perform any logging to designated text file for this session.
	
	CAUSE
	=====
	
	This is caused by a missing ENGMAI.GLB file in the GLB subdirectory of the Mail
	postoffice.
	
	RESOLUTION
	==========
	
	Check the GLB subdirectory for the existence of this file. If it does not exist,
	the administrator can replace this file in one of the following two ways:
	
	1. Find another postoffice in the Mail system that contains this file, and copy
	  it from that postoffice to the problem postoffice's GLB subdirectory.
	
	2. Using the complete set of Setup disks for version 3.2 of Microsoft Mail for
	  PC Networks, install a complete temporary postoffice on a local workstation
	  hard drive. Be careful to install the complete client software (for both
	  MS-DOS and Windows) as well. The temporary postoffice will contain the
	  missing file in the GLB subdirectory. Copy the file to the problem
	  postoffice's GLB subdirectory.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q119554 PC Adm: Err Msg: Notice 101 Error File Not Accessible
	
	Additional query words: 3.00 mac client dos
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.0
	
	=============================================================================
	
