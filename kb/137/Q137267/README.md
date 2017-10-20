---
layout: page
title: "Q137267: SNA Server WinSLI Library Does Not Support Format 1 InitSelf"
permalink: /kb/137/Q137267/
---

## Q137267: SNA Server WinSLI Library Does Not Support Format 1 InitSelf

{% raw %}

	Article: Q137267
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an SLI_Open API call is issued, and the SLI application has defined format
	1 Initself, the WinSLI library returns the following error message in an RUI
	trace:
	
	  initself not valid
	
	CAUSE
	=====
	
	The SNA Server 2.0, 2.1 and 2.11 SLI interface was originally written to support
	only Format 0 Initself messages. However, it has been expanded in SNA Server
	2.11 to support Format 1 as well.
	
	Page 5-22 of the IBM SNA Formats Guide defines a format 1 Initself to be
	identified as 810681 (bytes 0-2), while the format 0 Initself to be identified
	as 010681.
	
	
	RESOLUTION
	==========
	
	Microsoft has updated the files, WINSLI.DLL, for 16-bit clients, and
	WINSLI32.DLL for 32-bit clients, to correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11 winsli format initself
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
