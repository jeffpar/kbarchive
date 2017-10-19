---
layout: page
title: "Q165154: 3270 Print Session Stays in Spooling Status"
permalink: /kb/165/Q165154/
---

## Q165154: 3270 Print Session Stays in Spooling Status

	Article: Q165154
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
	
	A 3270 print session defined for the SNA Server 3.0 Host Print Service may stay
	in a spooling state after a host print job is sent to the printer. The result of
	this is that the print job does not finish printing completely.
	
	CAUSE
	=====
	
	The credit mechanism used by the FMI interface to provide flow control between
	SNA Server and an application (to prevent the application from exhausting its
	resources) does not correctly handle a BID message. A BID message received from
	the host is counted for pacing purposes, but not for credit purposes. The
	default credit algorithm fails to send a credit message from the Print Server
	service to the SNA Server service. Because the SNA Server service did not
	receive a credit message, it cannot send a pacing response to the host. This
	causes the host to stop sending data to SNA Server for the print session,
	causing the print session to remain in a spooling state. Therefore, the print
	job does not finish printing.
	
	RESOLUTION
	==========
	
	To work around this problem, obtain the hotfix mentioned below. With the hotfix,
	the 3270 Print Provider has been updated to correct this problem. This update
	allows a single credit message to be sent to the SNA Server service for all data
	messages it receives. The updated module is:
	
	  <Snaroot>\System\3270ppd.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
