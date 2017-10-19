---
layout: page
title: "Q147912: Server Operator Unable to Synchronize Domain Controller"
permalink: /kb/147/Q147912/
---

## Q147912: Server Operator Unable to Synchronize Domain Controller

	Article: Q147912
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A user account logged on as a Server Operator is able to highlight the Primary
	Domain Controller (PDC) in Server Manager and successfully initiate a
	"Synchronize Entire Domain," but receives "Access Denied" when attempting to
	synchronize a single Backup Domain Controller (BDC) to the PDC.
	
	WORKAROUND
	==========
	
	To synchronize the user account database of a backup domain controller with its
	primary, from the command prompt at the console of the BDC, issue a: "net
	accounts /sync".
	
	For a synchronization of machine accounts and user account information, use the
	"Synchronize Entire Domain" selection in Server Manager.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server versions 3.5,
	3.51, and 4.0. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
