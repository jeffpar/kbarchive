---
layout: page
title: "Q156361: Names Disappear from Name List in Directory Auditing Window"
permalink: /kb/156/Q156361/
---

## Q156361: Names Disappear from Name List in Directory Auditing Window

	Article: Q156361
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the File Auditing or Directory Auditing window of File Manager, a list of
	users or groups is added to the Name window. One or more items in the Events to
	Audit window are selected for success or failure. When you click OK, security is
	applied to the selected objects and the Auditing window closes. Upon reentering
	the Auditing window, only one or some of the users or groups on the Names list
	are retained. The rest have disappeared from the list.
	
	CAUSE
	=====
	
	Each name entered on the Names list must be selected individually, and one or
	more events to be audited must be selected for that entry. Repeat this procedure
	for each listed name. Names for which no events have been selected will
	disappear when you click the OK button to exit the Directory Auditing window.
	This is expected behavior.
	
	RESOLUTION
	==========
	
	Select each name in the Name window individually and select at least one event
	to audit for success or failure.
	
	Additional query words: audit prodnt
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
