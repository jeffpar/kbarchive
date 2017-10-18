---
layout: page
title: "Q142375: BUG: Jetpack.exe Reports Incorrect Usage Syntax"
permalink: kb/142/Q142375/
---

## Q142375: BUG: Jetpack.exe Reports Incorrect Usage Syntax

	Article: Q142375
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Windows NT Server versions 3.5 and 3.51 include the utility
	Jetpack.exe that can be used to compact a WINS or DHCP database. This utility is
	located in the %SYSTEMROOT%\SYSTEM32 subdirectory.
	
	If you type "JETPACK /?" (without the quotation marks) at a command prompt, it
	will report an incorrect usage syntax.
	
	The correct command line syntax for Jetpack.exe is:
	
	  JETPACK.EXE <database name> <temp database name>
	
	For example:
	
	  C:\NT\SYSTEM32\DHCP\JETPACK.EXE DHCP.MDB TMP.MDB
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
