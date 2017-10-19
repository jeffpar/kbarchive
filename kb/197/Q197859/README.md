---
layout: page
title: "Q197859: Server Roles in a Small Business Server Domain"
permalink: /kb/197/Q197859/
---

## Q197859: Server Roles in a Small Business Server Domain

	Article: Q197859
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a
	Operating System(s): 
	Keyword(s): kbnetwork sbs
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	A backup domain controller (BDC) or standalone server can be added to the Small
	Business Server (SBS) domain. Because there can only be one computer running SBS
	on the network, any other servers added must run Windows NT Server.
	
	MORE INFORMATION
	================
	
	The applications from the SBS server cannot be installed on the Windows NT
	Server computer.
	
	If the SBS server goes down for any reason, the BDC will only be able to validate
	users logging on to the domain. Because the SBS applications cannot be installed
	on the BDC or standalone server, they will not be accessible should the primary
	domain controller (PDC) ever not be available.
	
	REFERENCES
	==========
	
	For more information, see the Start Here Guide that accompanies the installation
	software, Appendix B, Page 137.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbnetwork sbs 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : winnt:4.0,4.0a
	Issue type        : kbinfo
	
	=============================================================================
	
