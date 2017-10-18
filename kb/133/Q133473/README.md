---
layout: page
title: "Q133473: NWCONV.EXE Hangs Converting a Non-Default Group w/ &gt; 30 Members"
permalink: kb/133/Q133473/
---

## Q133473: NWCONV.EXE Hangs Converting a Non-Default Group w/ &gt; 30 Members

	Article: Q133473
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOM
	-------
	
	The NWCONV.EXE program hangs.
	
	This problem occurs when you are using NWCONV.EXE to convert files, user
	accounts, and groups from a Novell NetWare server to a Windows NT server
	during a trial or real migration.
	
	CAUSE
	=====
	
	The NWCONV.EXE program is stuck in a loop.
	
	This problem occurs if the Novell NetWare server has a non-default group with
	more than 30 members.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in the latest Windows NT version 3.5 U.S. Service Pack.
	
	
	Additional query words: prodnt freezes
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	
