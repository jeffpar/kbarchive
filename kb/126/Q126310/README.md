---
layout: page
title: "Q126310: Error Attempting to Paste Into ClipBook Viewer"
permalink: kb/126/Q126310/
---

## Q126310: Error Attempting to Paste Into ClipBook Viewer

	Article: Q126310
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Even though your user account is a member of the Users group, when you attempt
	to paste the contents of the Clipboard into a ClipBook Viewer page the following
	error message appears:
	
	  You do not have sufficient privileges to perform this action.
	
	Contrary to page 61 of the Windows NT Server 3.5 Concepts and Planning Guide,
	this procedure fails unless your user account is a member of the Administrators,
	Server Operators, or Power Users groups.
	
	WORKAROUND
	==========
	
	Add your user account to the local Power Users, Server Operators, or
	Administrators group.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
