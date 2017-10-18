---
layout: page
title: "Q124294: Windows NT Help Err Msg: Cannot Open Help File"
permalink: kb/124/Q124294/
---

## Q124294: Windows NT Help Err Msg: Cannot Open Help File

	Article: Q124294
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows NT Help, choose Additional Networking Services for Windows
	NT Server, and choose any one of the following topic buttons
	
	- Gateway Services for NetWare
	
	- Services for Macintosh
	
	- Remoteboot Service
	
	- Network Client Administrator
	
	the following Windows Help error message appears:
	
	  Cannot open Help file.
	
	CAUSE
	=====
	
	These Help topics are only available in Windows NT Server version 3.5 Help.
	
	WORKAROUND
	==========
	
	To make these Help topics available in Windows NT Workstation Help, manually
	expand the help files from the Windows NT Server installation media to the
	%SYSTEMROOT%\SYSTEM32 directory. The following table lists the help files you
	need to expand:
	
	  Help file name                 Source file   Expanded file
	  ----------------------------------------------------------
	  Gateway Services for NetWare   NWDOCGW.HL_   NWDOCGW.HLP
	  Services for Macintosh         SFMMGR.HL_    SFMMGR.HLP
	  Remoteboot Service             RPLMGR.HL_    RPLMGR.HLP
	  Network Client Administrator   NCADMIN.HL_   NCADMIN.HLP
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation version
	3.5. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: rpl prodnt sfm gsnw
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search
	
	=============================================================================
	
