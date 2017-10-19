---
layout: page
title: "Q135528: Event ID 1999 Appears When Using Compaq Insight Manager"
permalink: /kb/135/Q135528/
---

## Q135528: Event ID 1999 Appears When Using Compaq Insight Manager

	Article: Q135528
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade from Windows NT 3.5 to Windows NT 3.51 on a Compaq computer
	using the Compaq Insight Manager, the following events may appear in Event
	Viewer:
	
	  Event ID: 1999 Description: SNMP service debug trace management API thread
	  attach.
	
	  Event ID: 1999 Description: SNMP service debug trace management API thread
	  detach.
	
	CAUSE
	=====
	
	This problem occurs if the Compaq Insight Manager file SYSMGMT.SYS is missing
	from the %SYSTEMROOT%\SYSTEM32\DRIVERS directory and you are using outdated
	Compaq Insight Manager system files.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Ensure SYSMGMT.SYS is located in the %SYSTEMROOT%\SYSTEM32\DRIVERS directory.
	
	2. Obtain SP1311.EXE from the Compaq Bulletin Board Service (BBS) at (713)
	  378-1418 or the Compaq Forum (GO CPQFORUM) on CompuServe. This file extracts
	  the latest MGMTAPI.SYS and CIMNT32.DLL.
	
	For more information, contact Compaq Technical Support at (800) 386-2172.
	
	The Compaq products discussed here are manufactured by Compaq Computer Corp., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: prodnt mgmt cim 2.40 2.50 3.50 snmp
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
