---
layout: page
title: "Q137925: Compaq Systems Hangs During Upgrade to 3.51"
permalink: /kb/137/Q137925/
---

## Q137925: Compaq Systems Hangs During Upgrade to 3.51

	Article: Q137925
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Compaq computer using the HAL provided in Compaq's Support Software
	Diskette (SSD) version 1.14 does not start after upgrading to Windows NT 3.51.
	
	CAUSE
	=====
	
	Windows NT Setup incorrectly detects the Compaq ISA Uniprocessor HAL from SSD
	1.14 and replaces it with the multi-processor HAL from version 3.51.
	
	RESOLUTION
	==========
	
	Compaq technical support recommends that you install the Compaq ISA Uniprocessor
	Support HAL from SSD version 1.15 prior to upgrading to Windows NT version
	3.51.
	
	Support Software Distribution 1.15 is available from the Compaq BBS at
	(713)378-1418 or on CompuServe in the CPQ forum. The filename is SP1209.EXE.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
