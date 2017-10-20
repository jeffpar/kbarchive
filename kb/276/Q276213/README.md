---
layout: page
title: "Q276213: Spurious Pop-up Messages When You Insert a New Link Service"
permalink: /kb/276/Q276213/
---

## Q276213: Spurious Pop-up Messages When You Insert a New Link Service

{% raw %}

	Article: Q276213
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fixkbbuglis
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you insert a new link service and shut down SNA Manager, when you reopen
	SNA Manager, you may receive a message stating that SNA Manager is deleting link
	services. Depending on the version of the Service Pack that you have installed,
	the link services may actually be removed from the Com.cfg file.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	Stop the SNA Server service or configure the new link service to a connection.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	Step to Reproduce Behavior
	--------------------------
	
	1. Add a Data Link Control (DLC) link service.
	
	2. Save the configuration.
	
	3. Close SNA Manager.
	
	4. Open SNA Manager.
	
	Depending on which version of SNA Server (SP1, SP2, or SP3) that you have
	installed, you may see the following results:
	
	- SP1: The 1st link service may be deleted.
	
	- SP2: All previous link services may be deleted.
	
	- SP3: You may receive a message that states that it is deleting link services,
	  but nothing is deleted.
	
	This only happens when you insert a link service while the SNA Server service is
	active, with active links, and you do not configure the new link service to a
	connection.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
