---
layout: page
title: "Q141115: SNA Server Admin &quot;Select Domain&quot; Dialog Box Suspended"
permalink: /kb/141/Q141115/
---

## Q141115: SNA Server Admin &quot;Select Domain&quot; Dialog Box Suspended

{% raw %}

	Article: Q141115
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server Admin "Select Domain" dialog box suspends until a full list of
	domains is shown. Anything you enter in the Domain field is not processed until
	the browse list of domains is returned.
	
	NOTE: The SNA Server Admin "Select Domain" dialog box allows an administrator to
	enter the name of an SNA Server or SNA Server domain to be administered.
	
	RESOLUTION
	==========
	
	Microsoft has updated SNA Server Admin (SNAADMIN.EXE) to include a Low Speed
	Connection check box that can be used to enable/disable browsing in the Select
	Domain dialog box. If this check box is unchecked, SNA Server Admin does not
	return a browse list of available domains.
	
	
	Microsoft has updated the following files to correct this problem:
	
	- <snaroot>\SYSTEM\SNAADMIN.EXE
	
	- <snaroot>\SNAFILES.INF
	
	- <snaroot>\SNASFD.DLL
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
