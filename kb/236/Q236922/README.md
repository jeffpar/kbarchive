---
layout: page
title: "Q236922: Event 201 Errors Logged Even When Licenses Are Available"
permalink: /kb/236/Q236922/
---

## Q236922: Event 201 Errors Logged Even When Licenses Are Available

{% raw %}

	Article: Q236922
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix kbsna400sp2
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An SNA Server 4.0 Service Pack 2 (SP2) system configured for Per Server
	licensing may log numerous Event 201 messages in the Windows NT application
	event log after you apply the fix described in the following Microsoft Knowledge
	Base article:
	
	  Q220886 Active SNA Server Clients do not Appear in License Manager
	
	The Event 201 is logged even though there are still available licenses. Users are
	unaffected by this problem as they can still obtain host sessions through the
	SNA Server.
	
	CAUSE
	=====
	
	This is a regression caused by the changes made to correct the problem described
	in the article referenced in the "Symptoms" section.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft SNA Server version
	4.0 SP2. This problem was first corrected in SNA Server version 4.0 Service Pack
	3.
	
	MORE INFORMATION
	================
	
	The following details the Event 201 message:
	
	  Event ID: 201
	  Source: LicenseService
	  Description: No license was available for user <user> using product SNA
	  Server 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP2
	Version           : WINDOWS:4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
