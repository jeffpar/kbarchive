---
layout: page
title: "Q276460: Internal Record Error Opening HIS 2000 Com.cfg with SNA 4.0"
permalink: /kb/276/Q276460/
---

## Q276460: Internal Record Error Opening HIS 2000 Com.cfg with SNA 4.0

{% raw %}

	Article: Q276460
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fixkbb
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you open an SNA configuration file that was created with Host Integration
	Server 2000 (HIS 2000) by using the SNA 4.0 Manager, you may receive the
	following error:
	
	  SNAOLE: Internal: Invalid Record
	
	CAUSE
	=====
	
	Before Host Integration Server 2000 was released, the format of the
	configuration file was uncertain. Because of changes internally in the Com.cfg
	file, SNA Server 4.0 reports errors when it tries to read configuration data
	that is related to shared folders or printers.
	
	RESOLUTION
	==========
	
	This problem has been corrected so that SNA 4.0 cannot open a Com.cfg file that
	is created by HIS 2000.
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server, versions
	4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words: Snacfg sp1 sp2 sp3
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
