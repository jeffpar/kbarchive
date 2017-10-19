---
layout: page
title: "Q111070: How to Change the Post Office Name After Setting Up"
permalink: /kb/111/Q111070/
---

## Q111070: How to Change the Post Office Name After Setting Up

	Article: Q111070
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	When the Mail post office is initially created under Windows NT, the
	network and post office names are read from the WORKGROUP= and
	COMPUTERNAME= lines in the [Network] section of the Windows for Workgroups
	SYSTEM.INI file. If no SYSTEM.INI is present, the network name defaults to
	WINDOWS and the post office name defaults to the mailbox name of the
	postoffice administrator.
	
	Since these default settings are set when the post office is created,
	changing the postoffice administrator mailbox after installation will not
	change the post office name. The only way to get a different post office
	name is to create a SYSTEM.INI file with at least a [Network] section and
	the following lines:
	
	  [Network]
	  computername=<desired post office name>
	  workgroup=<desired network name>
	
	After creating this file, recreate the post office.  For information on how
	to delete and recreate the post office, query on the following words in the
	Microsoft Knowledge Base:
	
	  postoffice, remove or recreate
	
	To check what the Network and post office names are, choose the About Mail
	option from the Help menu or choose Details in the Postoffice Manager
	dialog box.
	
	This article is not applicable to Windows NT 4.x.
	
	Additional query words: wfw wfwg prodnt post office manager po administration po manager
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	
