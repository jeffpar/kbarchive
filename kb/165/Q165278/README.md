---
layout: page
title: "Q165278: 3270/5250 Print Jobs Generate an Extra Form Feed"
permalink: /kb/165/Q165278/
---

## Q165278: 3270/5250 Print Jobs Generate an Extra Form Feed

	Article: Q165278
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
	
	Host or AS/400 print jobs that are printed through the SNA Server 3.0 Host Print
	service, may generate an extra form feed at the end of the print job.
	
	CAUSE
	=====
	
	The SNA Server 3.0 Host Print service calls the EndDos API to close to a print
	session when printing transparent data. The EndDos API always appends a form
	feed character to the print job even if the Host Print service sent a form feed
	as part of the transparent data.
	
	RESOLUTION
	==========
	
	The Host Print service for SNA Server 3.0 has been updated to use new APIs that
	do not append a form feed character when closing the print session. The new APIs
	are StartDocPrinter, WritePrinter, and EndDocPrinter. The EndDos API is no
	longer used by the Host Print service.
	
	The following modules have been updated:
	
	  <Snaroot>\System\Ppd3270.dll
	  <Snaroot>\System\Winvprt.dll
	
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
	
