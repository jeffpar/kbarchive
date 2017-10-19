---
layout: page
title: "Q129116: Members of the Server Operators Group Cannot Add Workstations"
permalink: /kb/129/Q129116/
---

## Q129116: Members of the Server Operators Group Cannot Add Workstations

	Article: Q129116
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to add workstations to a domain from Server Manager while logged into
	the domain as a member of the Server Operators group (but not a member of the
	Administrators group), the following error message appears:
	
	  Access is Denied
	
	CAUSE
	=====
	
	Footnote 1 on page 64 of the Microsoft Windows NT Server version 3.5 "Concepts
	and Planning Guide" incorrectly states the following:
	
	  Member[s] of the domain's Administrators and Server Operators
	  group can always add workstations to a domain, whether or not
	  they have this right assigned to them. This right is needed only
	  to enable users who are not members of these groups to add
	  workstations to the domain.
	
	The footnote should say:
	
	  Members of the domain's Administrators and Account Operators
	  groups can always add workstations to a domain, whether or not
	  they have this right assigned to them. This right is needed only
	  to enable users who are not members of these groups to add
	  workstations to the domain.
	
	WORKAROUND
	==========
	
	To work around this problem,
	
	- Logon as an Account Operator
	
	  -or-
	
	- Open User Manager for Domains, select User Rights from the Policies menu,
	  choose the "Add Workstations to the Domain" right and add the Server
	  Operators group.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
