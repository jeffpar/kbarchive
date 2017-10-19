---
layout: page
title: "Q162717: Autodial Settings Lost When Using Roaming Profiles"
permalink: /kb/162/Q162717/
---

## Q162717: Autodial Settings Lost When Using Roaming Profiles

	Article: Q162717
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Internet Explorer or Microsoft Internet Mail and News,
	the Remote Access Service (RAS) automatic dialing feature does not function.
	
	CAUSE
	=====
	
	This behavior can occur if you are using a roaming profile and a user without
	automatic dialing in their profile logs into Windows NT after your session. The
	next time you log into Windows NT without rebooting the computer, automatic
	dialing fails.
	
	RESOLUTION
	==========
	
	The only workaround at this time is to restart the computer between access by
	different users.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt winnt DUN
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
