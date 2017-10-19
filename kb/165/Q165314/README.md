---
layout: page
title: "Q165314: Grace Logon Remaining Is Not Decremented When Logging to BDC"
permalink: /kb/165/Q165314/
---

## Q165314: Grace Logon Remaining Is Not Decremented When Logging to BDC

	Article: Q165314
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.00
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 17-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare versions 3.51, 4.00 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Novell NetWare Client logs on to a backup domain controller (BDC) and if
	the password has expired for the user, the Grace Logon Remaining counter is not
	updated.
	
	CAUSE
	=====
	
	File and Print Services for NetWare provides an authentication package that is
	responsible for updating the NetWare related credentials in the security account
	database. The authentication package was not calling the LSASS subsystem
	correctly to update this information.
	
	RESOLUTION
	==========
	
	Use the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 and 4.0.
	This problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51,4.00
	Issue type        : kbbug
	
	=============================================================================
	
