---
layout: page
title: "Q258993: Perflib Event 1009 Occurs When Opening COMTI Performance Monito"
permalink: /kb/258/Q258993/
---

## Q258993: Perflib Event 1009 Occurs When Opening COMTI Performance Monito

{% raw %}

	Article: Q258993
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,1.0 SP1,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft COM Transaction Integrator for CICS and IMS, versions 1.0, 1.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The COM Transaction Integrator (COMTI) object is not an available option in
	Performance Monitor. When you open Performance Monitor, a Perflib event 1009 is
	logged in the Application Event Log and states the following:
	
	  The Open Procedure for service "COMTIPerf" in DLL "comtiperf.dll" generated
	  an exception. Performance data for this service will not be available.
	  Exception code returned is DWORD 0.
	
	CAUSE
	=====
	
	The COM Transaction Integrator (COMTI) performance-measuring software is not
	compatible with third-party performance measuring services, such as HP
	MeasureWare or Performance SeNTry.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, stop the third-party services (such as HP
	MeasureWare and Performance SeNTry) so that the COMTI object appears in
	Performance Monitor. When Performance Monitor is open, start the other services.
	The COMTI object will remain accessible in Performance Monitor.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft SNA Server version
	4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, Microsoft COM Transaction Integrator for CICS
	and IMS, versions 1.0, 1.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI100 kbCOMTI100SP1 kbCOMTI400SP2 kbCOMTI400SP3 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:1.0,1.0 SP1,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
