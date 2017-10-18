---
layout: page
title: "Q168590: Netlogon Does Not Replicate Case Changes In User Account Names"
permalink: kb/168/Q168590/
---

## Q168590: Netlogon Does Not Replicate Case Changes In User Account Names

	Article: Q168590
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT User Manager allows a user account name to be renamed. However, if
	the difference in the New User account name and the previous user account is
	only in the case of the user account name, then the case changes in the user
	account names do not get replicated from the primary domain controller (PDC) to
	the backup domain controller (BDC).
	
	
	CAUSE
	=====
	
	The user account name in Windows NT is not case sensitive. As a result, Netlogon
	Service will not ask the SAM on the BDC to change the name. This is optimization
	in the NETLOGON service.
	
	
	RESOLUTION
	==========
	
	Use the following workaround to replicate the user account name case changes,
	from PDC to BDC.
	
	For example, to change the name JoeSmith to JOESMITH, perform the following three
	steps:
	
	1. Rename JoeSmith to Testuser.
	
	2. Synchronize the PDC and BDC in the domain.
	
	3. Rename Testuser to JOESMITH and then synchronize the domain.
	
	This will change the account name to JOESMITH on the BDC.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: netlogon replication upper case sensitive partial
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	
