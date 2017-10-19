---
layout: page
title: "Q129549: Cannot View Correct Event Details with Non-Administrative Rights"
permalink: /kb/129/Q129549/
---

## Q129549: Cannot View Correct Event Details with Non-Administrative Rights

	Article: Q129549
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.11,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows NT Workstation versions 3.1, 3.5 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can use the Windows NT Server Tools Event Viewer under Windows 3.1 or
	Windows for Workgroups 3.11 to view security events of a remote Windows NT
	computer. If you don't have administrative rights and you attempt to view the
	security log in Event Viewer, the following description appears for each event:
	
	  The description for Event ID (<xxx>) in Source (Security) could not be
	  found. It contains the following insertion string(s): <Strings vary for
	  each Event ID number>.
	
	where <xxx> is a specific Event ID number.
	
	NOTE: This problem occurs even though the user in Windows 3.1 or Windows for
	Workgroups 3.11 has the "Manage auditing and security log" user rights.
	
	
	WORKAROUND
	==========
	
	To work around this problem, grant the Windows 3.1 or Windows for Workgroups
	3.11 user administrative rights.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt 3.10 3.11 win3x wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbWFWSearch kbWFW311
	Version           : :3.1,3.11,3.5
	
	=============================================================================
	
