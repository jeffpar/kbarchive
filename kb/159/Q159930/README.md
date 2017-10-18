---
layout: page
title: "Q159930: Event ID 534 In The Security Log"
permalink: kb/159/Q159930/
---

## Q159930: Event ID 534 In The Security Log

	Article: Q159930
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Event Viewer yields Event ID 534 in the Security Log. "The user has not been
	granted the requested logon type at this machine."
	
	-or-
	
	No one can logon unless they are a member of the Administrators group.
	
	CAUSE
	=====
	
	The user right to "Access this computer from the network" has been removed for
	the Everyone group in User Manager for Domains.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Start User Manager for Domains.
	
	2. Select "User Rights" from the "Policy" option on the menu bar.
	
	3. Re-add the Everyone group to the user right, "Access this computer from the
	  network."
	
	
	Additional query words: event id auditing access
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Hardware          : x86
	
	=============================================================================
	
