---
layout: page
title: "Q165201: TN5250 DEC Alpha Fails When Client Request Unsupported Options"
permalink: kb/165/Q165201/
---

## Q165201: TN5250 DEC Alpha Fails When Client Request Unsupported Options

	Article: Q165201
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When running the TN5250 service on a DEC Alpha computer and a client attempts to
	get a session which uses unsupported options, the session will fail and the
	following error will be posted in the application log of the event viewer:
	
	  Event ID: 5
	
	  The SNA TN5250 Service detected an internal error.
	
	NOTE: The error message was seen while using the Wall Data Rumba 95 client.
	
	CAUSE
	=====
	
	TN5250 Server is not responding correctly during terminal negotiation to the
	client request for unsupported options, specifically NOGA (suppress go ahead)
	and ECHO (echo).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	The updated file is:
	
	  Tn5250.exe
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
