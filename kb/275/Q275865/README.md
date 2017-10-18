---
layout: page
title: "Q275865: COMTI Event 104 HRESULT 0x8007000e When You Use Recordsets"
permalink: kb/275/Q275865/
---

## Q275865: COMTI Event 104 HRESULT 0x8007000e When You Use Recordsets

	Article: Q275865
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
	
	When you use recordsets, COMTI intermittently logs a COMTI Event 104 in the
	application event log, and the COMTI transaction fails. The following text is
	included in the details of the 104 event:
	
	  (104) COM Transaction Integrator reported an IDispatch::Invoke failure to a
	  client.
	
	  Client method name: MethodNameHere
	
	  HRESULT: 0x8007000e
	
	  EXPLANATION
	  A call to COM Transaction Integrator's IDispatch::Invoke
	  implementation returned an HRESULT rather than an Automation exception.
	  The HRESULT above describes the error.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	SP1, 4.0 SP2, 4.0 SP3 and Microsoft COM Transaction Integrator for CICS and IMS
	versions 1.0, 1.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	
	Additional query words: Cedrmsgs Tagen sp1 sp2 service pack pak
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI100 kbCOMTI100SP1 kbCOMTI400SP2 kbCOMTI400SP3 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :1.0,1.0 SP1,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
