---
layout: page
title: "Q276264: Zero Byte Files When You Print to a File w/ ByPass GDI Selected"
permalink: /kb/276/Q276264/
---

## Q276264: Zero Byte Files When You Print to a File w/ ByPass GDI Selected

{% raw %}

	Article: Q276264
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fixkbb
	Last Modified: 19-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a file through SNA Server, zero-byte-size files may be
	printed.
	
	CAUSE
	=====
	
	This problem only occurs when ByPass GDI is selected in the printer session
	configuration dialog box. Typically, the SNA Server Print Service starts up a
	print job by calling the StartDoc function. However, when ByPass GDI is
	selected, this print job must be started up transparently, so the AbortDoc
	function is called, then the StartDocPrinter function is called.
	
	Because of a timing issue with Microsoft Windows NT, the handle to the original
	file is not released immediately, which can cause the call to StartDocPrinter to
	fail, which results in the zero byte file. This problem has been corrected so
	that print jobs are started transparently, by using a generated minimal PDT
	file, rather than SNA Print Service having to stop and restart them. This same
	approach is used in Microsoft Host Integration Server (HIS) 2000.
	
	RESOLUTION
	==========
	
	SNA Server 4.0:
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	Host Integration Server 2000:
	
	No fix is available for this problem in Host Integration Server 2000 at this
	time.
	
	STATUS
	======
	
	SNA Server 4.0:
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server, versions
	4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	
	Host Integration Server 2000:
	
	Microsoft has confirmed this to be a bug in Microsoft Host Integration Server
	2000.
	
	
	Additional query words: Ppd3270 Snaprint sp1 sp2 sp3
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
