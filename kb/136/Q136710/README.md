---
layout: page
title: "Q136710: Time Zone Change During Setup May Not Allow Password Change"
permalink: kb/136/Q136710/
---

## Q136710: Time Zone Change During Setup May Not Allow Password Change

	Article: Q136710
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
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
	
	During the initial installation of Windows NT, if you change the Time Zone to
	(GMT + 10:00 Brisbane,Melbourne,Sydney), log on with the Local Account created
	during setup, and immediately change the password using the CTRL+ALT+DEL
	sequence, the following error appears:
	
	  The password on this account cannot be changed at this time.
	
	WORKAROUND
	==========
	
	To work around this problem, Use User Manager to change the password.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt greenwich mean time
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
