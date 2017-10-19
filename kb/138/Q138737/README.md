---
layout: page
title: "Q138737: Directory Synchronization May Fail with Windows NT 3.51 Mail"
permalink: /kb/138/Q138737/
---

## Q138737: Directory Synchronization May Fail with Windows NT 3.51 Mail

	Article: Q138737
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Persistent failures of directory synchronization (Dir-Sync) with Windows NT Mail
	(MSMAIL32.EXE) may record the following in the DIRSYNC.LOG file:
	
	  Fatal [203] GAL Rebuild problem accessing files Global Address List not
	  installed on this Postoffice
	
	CAUSE
	=====
	
	The GAL.NME file is being held open (but not locked) by the MSSFS32.DLL file.
	MSSFS32.DLL is used to resolve the names of intended recipients. When an
	intended recipient is an external user with a name already in the Personal
	Address Book (PAB), the GAL.NME file is not closed after the message is sent.
	The server does not allow REBUILD.EXE to delete the old GAL.NME, generating the
	error.
	
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- From the Mail menu, select Options and clear the Add Recipients To Personal
	  Address Book check box
	
	  -or-
	
	- Make sure every workstation performs an Exit And Sign Out from Windows NT
	  3.51 Mail before you run REBUILD.EXE.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt workgroup
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
