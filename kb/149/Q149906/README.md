---
layout: page
title: "Q149906: NetWare Server Can't Be Added to New Domain"
permalink: kb/149/Q149906/
---

## Q149906: NetWare Server Can't Be Added to New Domain

	Article: Q149906
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you add a NetWare server to the DSMN in a Windows NT domain and later abandon
	the domain, you will be barred from adding that NetWare server to a different
	Windows NT domain.
	
	CAUSE
	=====
	
	When Windows NT tries to add a NetWare server to its domain, it looks to see if
	the account Winnt_Synch_Agent is already on the NetWare server. If that account
	is present, you will receive the following error message:
	
	  <servername> has already been added to a Windows NT Domain.
	
	RESOLUTION
	==========
	
	To solve this problem, either release the NetWare server in DSMN from the
	original domain or delete the Winnt_Synch_Agent account on the NetWare server.
	If you delete the account, you may need to restore the bindery before you'll be
	able to add the NetWare server to the new Windows NT domain. For more
	information, see page 41 of the DSMN Administrator's Guide.
	
	Additional query words: prodnt novell dsmn
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
