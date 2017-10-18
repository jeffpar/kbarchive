---
layout: page
title: "Q139035: TN3270 Service Is Enhanced to TN3270E in SNA Server"
permalink: kb/139/Q139035/
---

## Q139035: TN3270 Service Is Enhanced to TN3270E in SNA Server

	Article: Q139035
	Product(s): Microsoft SNA Server
	Version(s): 2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork sna4
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The TN3270 Service of SNA Server supports the TN3270E protocol as specified by
	RFC 1647. The new TN3270 Service adds support for the following:
	
	- LU1 and LU3 printing.
	
	- The ability to associate a printer LU with a display LU.
	
	- The ability for a client to request connection to a specific LU or LU pool.
	
	- Standardized access to the SSCP-LU session.
	
	- Standardized support for the ATTN and SYSREQ keys.
	
	MORE INFORMATION
	================
	
	2.11:
	-----
	
	For 2.11, these features were introduced into 2.11 SP1 and are supported through
	TN3270 Admin. See the Help file for additional information on configuring these
	features.
	
	3.0:
	----
	
	For 3.0, TN3270 Administration is now integrated into SNA Server Manager. In
	addition, the readme.wri includes the following note:
	
	TN3270 and LUA LU Pools "LUA LU pools cannot be added to the TN3270 service.
	Individual LUA LUs are managed based on the IP address that TN3270 is using."
	
	Non-version specific notes: NOTE: Do not attempt to edit the TN3270 Service
	configuration file directly; doing so can cause unpredictable results.
	
	NOTE: Although you can still connect to the SNA Server TN3270 service with a
	TN3270 client, you need a TN3270E client to make use of the TN3270E features.
	
	STATUS
	======
	
	This feature is included in the latest U.S. Service Pack for SNA Server for
	Windows NT, version 2.11. For information on obtaining the Service Pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400
	Version           : :2.11,3.0,4.0
	
	=============================================================================
	
