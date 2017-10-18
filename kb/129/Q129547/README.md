---
layout: page
title: "Q129547: Company Name Preset to MICROSOFT When Installing WFW"
permalink: kb/129/Q129547/
---

## Q129547: Company Name Preset to MICROSOFT When Installing WFW

	Article: Q129547
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows for Workgroups version 3.11 from the Windows NT Server
	version 3.5 compact disc (CD), the Company name is pre-set to MICROSOFT.
	
	CAUSE
	=====
	
	This problem occurs because the CD is read-only.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Copy the files in the Windows NT Server CD \CLIENT\WFW\NETSETUP subdirectory
	  to a directory on your local drive.
	
	2. Install Windows for Workgroups version 3.11 again.
	
	
	Additional query words: prodnt 3.11 3.10 cd-rom wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11; winnt:3.5
	
	=============================================================================
	
