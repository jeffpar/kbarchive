---
layout: page
title: "Q160978: Terminal Type Negotiation Fails w/RUMBA v3.2J TN3270 Emulator"
permalink: /kb/160/Q160978/
---

## Q160978: Terminal Type Negotiation Fails w/RUMBA v3.2J TN3270 Emulator

	Article: Q160978
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to connect to SNA Server's TN3270/e service with the Wall Data
	RUMBA v3.2J TN3270 emulator, you may see the following errors on the emulator:
	
	  Terminal Type Negotiation failure
	
	  -and-
	
	  Communication error 501
	
	CAUSE
	=====
	
	The Wall Data RUMBA v3.2J TN3270 emulator sends a message that is out of the
	normal sequence, but still legal. This causes the TN3270E Server to renegotiate
	an option it had already negotiated.
	
	The TN3720 negotiation would never complete if the emulator sent a "Won't
	TN3270E" command after it had sent a "Will TERMTYPE" command. This is because
	the TN3270 Server sends a "Do TERMTYPE" command in response to the "Won't
	TN3270E" command, even though the emulator had already sent the "Will TERMTYPE"
	command.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. If the emulator
	sends "Will TERMTYPE" before the "Won't TN3270E," the TN3270/e Service doesn't
	send a "Do TERMTYPE."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11, and 2.11 Service Pack 1. This problem was corrected in the latest
	Microsoft SNA Server 2.11 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The following is an example of a normal case:
	
	TN3270/e Service Emulator
	-------------------------
	
	  Do TN3270E
	  Won't TN3270E
	  Do TERMTYPE
	  Will TERMTYPE
	
	The following is an example of a failing case with the Wall Data RUMBA v3.2J
	TN3270:
	
	TN3270/e Service Emulator
	-------------------------
	
	  Do TN3270E
	  Will TERMTYPE
	  Won't TN3270E
	  Do TERMTYPE
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
