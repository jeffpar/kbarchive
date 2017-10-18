---
layout: page
title: "Q161040: Host Initiated BIND Is Rejected with A BIND -RSP (Sense=0815)"
permalink: kb/161/Q161040/
---

## Q161040: Host Initiated BIND Is Rejected with A BIND -RSP (Sense=0815)

	Article: Q161040
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Terminating a 3270 session abruptly may result in a situation where a new VTAM
	or host signon screen is not sent to the 3270 session. This problem was observed
	in one case where a 3270 session was ended by pressing the SYSREQ key.
	
	When this problem occurs, SNA Server may log the following message in the Windows
	NT Application Event log:
	
	  Event ID: 21
	  Source: SNA Server
	  Description: X'1124' Negative Response Sent on Connection <connection
	  name>
	              (SENSE = 0815)
	
	This problem does not occur in SNA Server 3.0.
	
	CAUSE
	=====
	
	Normally, a Host is not entitled to send a BIND request for a new session until
	it receives an UNBIND response. However, when a host sends an UNBIND Type '0x0F'
	(UNBIND Cleanup) or any UNBIND type in the range of '0x07' to '0x7F,' it is
	allowed to reset its half-session immediately. If the UNBIND is one of these
	types, the host can send a BIND request before it receives the UNBIND response.
	
	SNA Server is not able to handle the receipt of a BIND request for a session
	before it has sent an UNBIND response for that session. Therefore, SNA Server
	rejects the new BIND request with a BIND -RSP because it has not yet received a
	response from the emulator to the Close(PLU) request that generates the UNBIND
	response that will be sent to the host.
	
	RESOLUTION
	==========
	
	There are no current workarounds for SNA Server versions 2.0, 2.1, 2.11, or 2.11
	SP1. A 2.11 SP1 hotfix is under investigation.
	
	This problem does not occur with SNA Server 3.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11, and 2.11 SP1.
	This problem was corrected in the latest Microsoft SNA Server 2.11 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The Sense Data section of the IBM SNA Formats Guide (GA27-3136) describes Sense
	Code 0815xxxx as:
	
	  Function Active: A request to activate a network element or procedure
	  was received, but the element or procedure was already active.
	
	  Bytes 2 and 3 following the sense code contain sense code specific
	  information.
	
	Additional query words: sscp msg10 prodsna
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
