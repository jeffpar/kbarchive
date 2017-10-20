---
layout: page
title: "Q258972: TN3270 Display Can be Opened with Associated Printer In Use"
permalink: /kb/258/Q258972/
---

## Q258972: TN3270 Display Can be Opened with Associated Printer In Use

{% raw %}

	Article: Q258972
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can open a TN3270 display session that has an associated printer, even
	though the associated printer is in use. It is possible to close a TN3270
	display session and not close the associated printer session. When this happens,
	a user can request and receive a new TN3270 display session that has an
	associated printer, even though the associated printer is not available.
	
	CAUSE
	=====
	
	SNA Server is not performing a check to verify that the associated printer for a
	TN3270 display session is available before it returns the display LU to the
	TN3270 server.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To prevent this behavior from occurring, close the associated printer session
	before you close the TN3270 display session.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft SNA Server 3.0,
	Microsoft SNA Server 3.0 Service Pack 1, Microsoft SNA Server 3.0 Service Pack
	2, Microsoft SNA Server 3.0 Service Pack 3, Microsoft SNA Server 3.0 Service
	Pack 4, Microsoft SNA Server 4.0, Microsoft SNA Server 4.0 Service Pack 1,
	Microsoft SNA Server 4.0 Service Pack 2, and Microsoft SNA Server 4.0 Service
	Pack 3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	For additional information about similar behavior with 3270 display sessions,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q172637 User Able to Open Display Session If Associated Printer in Use
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
