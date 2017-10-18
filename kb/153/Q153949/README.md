---
layout: page
title: "Q153949: CSNW Does Not Support MS-DOS Name Space Correctly"
permalink: kb/153/Q153949/
---

## Q153949: CSNW Does Not Support MS-DOS Name Space Correctly

	Article: Q153949
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a connection is made to a Novell NetWare Server, Client Services for
	NetWare (CSNW) checks whether the volume supports OS/2 name space. If it does,
	CSNW enables long file name support on that connection. However CSNW only
	provides long file names for that connection . An application that needs MS-DOS
	name space will fail.
	
	CAUSE
	=====
	
	CSNW does not support MS-DOS name space if long file name support is enabled on
	a connection.
	
	RESOLUTION
	==========
	
	
	To correct this problem, first apply the updated Nwrdr.sys mentioned below and
	then do the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run the Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \System\CurrentControlSet\Services\NWRDR\parameters
	
	3. From the Edit menu, choose Add Value.
	
	4. Add the following:
	
	  Value Name: LongNameFlags
	  Data Type: REG_DWORD
	  Data: 0x1 (Hex)
	
	LongNameFlags enable or disable the LFN support on NWCS Default is Enabled (0x0)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: sp3 kbfix kbbug
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
