---
layout: page
title: "Q125932: Windows NT Help Shows Incorrect Permission Switch for CACLS"
permalink: kb/125/Q125932/
---

## Q125932: Windows NT Help Shows Incorrect Permission Switch for CACLS

	Article: Q125932
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows NT Help, if you select Command Reference Help (NTCMDS.HLP) and choose
	CACLS, the /P switch lists the following permission (perm) options:
	
	  n - None
	  r - Read
	  c - Change (write)
	  a - All permissions
	
	However, if you specify perm "a" with the CACLS command, the following error
	message appears:
	
	  The argument string passed to DosExecPgm is not correct.
	
	CAUSE
	=====
	
	The Command Reference Help file references the permission options of the CACLS
	command incorrectly.
	
	WORKAROUND
	==========
	
	The perm options should show as the following:
	
	  n - None
	  r - Read
	  c - Change (write)
	  f - Full control
	
	NOTE: The correct perm options can be viewed by typing the following at the
	MS-DOS Command Prompt:
	
	  CACLS /H
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.1 and 3.5.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt 3.10 winhlp32
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
