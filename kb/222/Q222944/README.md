---
layout: page
title: "Q222944: Allow COMTI LU6.2 Send Size to be Configurable."
permalink: kb/222/Q222944/
---

## Q222944: Allow COMTI LU6.2 Send Size to be Configurable.

	Article: Q222944
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP2,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP2 
	- Microsoft SNA Server, versions 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server COM Transaction Integrator (COMTI) feature currently sends LU6.2
	application data messages to the host system using a send size of 32763 bytes
	(32 KB). However, a customer implemented a CICS application which only receives
	data in 24-KB chunks, making large data transfers less efficient when used with
	COMTI.
	
	At the customer's request, COMTI has been enhanced to allow the LU6.2 send size
	to be configurable.
	
	CAUSE
	=====
	
	COMTI wasn't originally designed to allow the LU6.2 send size to be
	configurable.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	The host CICS application could be modified to receive data in 32-KB chunks, or
	post additional RECEIVE calls if the sent data cannot be received in a single
	RECEIVE call.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 4.0, 4.0 SP1, 4.0
	SP2. This problem was first corrected in SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	With this update applied, the COMTI send size can be configured within Component
	Builder under the Advanced tab for each method. The send size is configured
	under the "Set Explicit Send Size Block" field, where valid values are from 1 to
	32763. To implement a 24-Kb send size, the value should be 24576, or whatever
	the host is expecting.
	
	The customer implemented the 24-KB LU6.2 application data receive size within the
	host CICS application because of an apparent recommendation within the IBM
	CICS/ESA V4R1 Application Programming Guide (Document Number SC33-1169-00),
	topic 2.1.4 - LENGTH options. However, general LU6.2 tranaction programming
	references do not make such a recommendation, and support LU6.2 application data
	send/receive sizes of 32 KB.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI400SP2 kbSNAServ400
	Version           : WINDOWS:4.0,4.0 SP2,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
