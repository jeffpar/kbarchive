---
layout: page
title: "Q106113: Doc Err: Mandatory Profiles Assigned to Local Groups"
permalink: /kb/106/Q106113/
---

## Q106113: Doc Err: Mandatory Profiles Assigned to Local Groups

	Article: Q106113
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	Step 4 on page 428 of the Windows NT Advanced Server System Guide
	implies that mandatory user profiles can be assigned to local groups.
	This is a documentation error. If you assign a mandatory profile to a
	local group when you, as a user from that local group, attempt to log
	onto a Windows NT computer other than the primary domain server in
	that domain, you the following error message appears:
	
	  The mandatory profile cannot be loaded.
	
	You are then unable to logon.
	
	This occurs because local groups can be accessed only by the domain
	servers and not by the workstations. Also, the permissions on the
	profiles assigned to local groups can be read only by the primary
	domain controller of the domain.
	
	You should assign mandatory user profiles to Global groups instead of
	Local groups.
	
	Microsoft has confirmed this to be a problem in the Windows NT
	Advanced Server System Guide for Version 3.1. We are researching this
	problem and will post new information here in the Microsoft Knowledge
	Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
