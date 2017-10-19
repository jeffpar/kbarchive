---
layout: page
title: "Q166838: System Policies No Longer Applied Using 3rd-Party Client Service"
permalink: /kb/166/Q166838/
---

## Q166838: System Policies No Longer Applied Using 3rd-Party Client Service

	Article: Q166838
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbnetwork
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	System Policies on a Windows NT system may not take affect. The policies may not
	work when first implemented, or subsequent changes to the central policy file
	may not alter existing policy settings on the client.
	
	CAUSE
	=====
	
	There may be many causes to Policies not being read by the client. A few
	standard things to check include verifying the location of the policy file
	Ntconfig.pol on the Netlogon share, verifying this policy file being replicated
	to all domain controllers within the domain, and verifying the Update mode of
	the client is set properly.
	
	Another cause may be a third-party service or client redirector. To verify this
	is the cause, remove the third-party client software and try the policies
	again.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
