---
layout: page
title: "Q171256: IBM DFT Link Service Properties Refers to DCA DFT Adapter"
permalink: /kb/171/Q171256/
---

## Q171256: IBM DFT Link Service Properties Refers to DCA DFT Adapter

	Article: Q171256
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The IBM DFT Link Service property page incorrectly makes references to the DCA
	DFT adapter in SNA Server Manager when the link service is installed. The
	following information appears on the property page during installation of the
	link service:
	
	  IBM DFT Link Service #1 Properties
	
	  IBM DFT Link Service Configuration
	
	  Service Name: SnaDft1
	  Title: IBM DFT Link Service #1
	
	  The DCA DFT device driver supports up to four IRMA3 adapters at once.
	  You must specify a unique base address for each adapter you will use.
	  The IRMA3 adapter(s) will use interrupt 2.
	
	CAUSE
	=====
	
	The IBM DFT link service includes an incorrect text control string.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, the IBM DFT Link Service includes the correct text control
	string for this adapter.
	
	Additional query words: coax
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
