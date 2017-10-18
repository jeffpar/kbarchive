---
layout: page
title: "Q152728: Logon Scripts Not Processing With Space In Computer Name"
permalink: kb/152/Q152728/
---

## Q152728: Logon Scripts Not Processing With Space In Computer Name

	Article: Q152728
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Logon scripts fail when you log on from a computer running Windows NT
	Workstation. However, Windows for Workgroups and Windows 95 computers process
	the logon script successfully.
	
	CAUSE
	=====
	
	The Windows NT Server providing the Logon Script has a space in its computer
	name.
	
	RESOLUTION
	==========
	
	Remove the space from the Windows NT Server computer name, or use another
	character such as an underscore.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: domain login script
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
