---
layout: page
title: "Q263636: Unable to Promote BDC to PDC Event ID 5516 and 3096"
permalink: /kb/263/Q263636/
---

## Q263636: Unable to Promote BDC to PDC Event ID 5516 and 3096

	Article: Q263636
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer system's backup domain controller cannot be promoted to a primary
	domain controller through the server manager and the domain is unavailable to
	manage. Your computer system's event log contains the following error messages:
	
	  Event ID 3096 The Windows NT domain controller for this domain could not be
	  located.
	
	  Event ID 5516 The computer or domain <computername> trusts domain
	  <domainname>. This may be an indirect trust. However,
	  <computername> and <domainname> have the same security
	  identifier. NT should be reinstalled on <domainname> or
	  <computername>.
	
	CAUSE
	=====
	
	A trust relationship is configured from the backup domain controller to the
	domain to which the backup domain controller is a member.
	
	RESOLUTION
	==========
	
	To resolve this behavior, you must delete the trust relationship between the
	backup domain controller and the domain by performing the following steps:
	
	1. Start User Manager for Domains.
	
	2. Click Policies, and then click Trust Relationships.
	
	3. Remove Trust Relationships for the domain.
	
	4. Start Server Manager.
	
	  The domain should be available.
	
	5. Select the backup domain controller to be promoted.
	
	6. Click Computer, and then click "Promote to Primary Domain Controller".
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
