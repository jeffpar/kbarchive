---
layout: page
title: "Q194593: Print Sessions May Fail to Start When Using Host Print Service"
permalink: /kb/194/Q194593/
---

## Q194593: Print Sessions May Fail to Start When Using Host Print Service

{% raw %}

	Article: Q194593
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Host print sessions may stay in an inactive state when they are activated for
	use. This problem may occur under the following circumstances:
	
	- If several print sessions are configured for automatic activation, and are
	  all configured to print to the same physical printer, one or more of the
	  print sessions may fail to start.
	
	  - or -
	
	- Print sessions that are configured to print to remote printers that exist in
	  Windows NT domains different than the domain that includes the SNA Server
	  system may fail to start.
	
	CAUSE
	=====
	
	The following are the causes for the two scenarios listed in the SYMPTOMS
	section:
	
	In the first scenario, if there are several auto-activated print sessions
	configured to print to the same physical printer, each print session tries to
	call GetPrinter() at exactly the same time when the Print Server service is
	started. As a result, some of the GetPrinter() calls may fail, causing some of
	the print session to stay in an inactive state.
	
	
	In the second scenario, when a print session is activated, it makes a call to
	OpenPrinter() to get a handle to the specified printer. The permissions required
	for the OpenPrinter() call may cause permission problems with some printers
	which results in the OpenPrinter() call failing. The effect of this is that the
	print session would fail to activate. This is more likely to occur when the
	print session is configured to print to a remote printer in a different Windows
	NT domain.
	
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0 and 4.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 4.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
