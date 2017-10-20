---
layout: page
title: "Q275864: COMTI TOR/AOR Changes"
permalink: /kb/275/Q275864/
---

## Q275864: COMTI TOR/AOR Changes

{% raw %}

	Article: Q275864
	Product(s): Microsoft SNA Server
	Version(s): 1.0,1.0 SP1,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft COM Transaction Integrator for CICS and IMS, versions 1.0, 1.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a mainframe computer, the Customer Information Control System (CICS) allows
	terminals that are connected to one CICS region, a Terminal Owning Region (TOR),
	to run transactions on another CICS region, an Application Owning Region (AOR).
	
	When you run COM Transaction Integrator (COMTI) through CICS Link by using LU
	version 6.2, if the program that is being called is to be run in an AOR, the
	default CICS mirror transaction ID (CSMI) is always passed to the AOR even if
	COMTI is configured to invoke some mirror transaction other than CSMI in the
	TOR. There are circumstances where a different mirror transaction ID may be
	desirable for security or tracking purposes.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, specify the correct mirror transaction ID in the PPT
	table for the remote transaction program. When this is done in the TOR, then the
	correct mirror transaction ID is passed to the AOR.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	Service Pack 1 (SP1), 4.0 Service Pack 2 (SP2), 4.0 Service Pack 3 (SP3),
	Microsoft COM Transaction Integrator for CICS and IMS versions 1.0, 1.0 SP1, 4.0
	SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	Once the update is applied, the Source TP Name that is specified in the Host
	Names Tab of the Method Properties within the COMTI Component Builder will be
	passed as the mirror transaction ID to be used by the AOR.
	
	Additional query words: Dpl1 sp1 sp2 sp3 service pack 1 2 3
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI100 kbCOMTI100SP1 kbCOMTI400SP2 kbCOMTI400SP3 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :1.0,1.0 SP1,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
