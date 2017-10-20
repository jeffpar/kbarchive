---
layout: page
title: "Q177640: 16 or More Link Services of Same Type Show Incorrect Name"
permalink: /kb/177/Q177640/
---

## Q177640: 16 or More Link Services of Same Type Show Incorrect Name

{% raw %}

	Article: Q177640
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If 16 or more link services are added in SNA Server Manager, the 16th (and
	higher) link service of the same type shows the wrong service name when you view
	the Link Service Property page.
	
	If 17 802.2 DLC link services are added in SNA Server Manager, they will be
	numbered as follows:
	
	  SnaDlc1
	  SnaDlc2
	      .
	      .
	  SnaDlcE
	  SnaDlcF
	  SnaDlc10
	  SnaDlc11
	
	If the link service properties are displayed for one of the link services that
	contains 8 characters (for example, SnaDlc10), the 8th character is not
	displayed.
	
	For example, the Link Service Property page for SnaDlc10 displays the following
	information:
	
	  Service Name: SnaDlc1
	  Title: DLC 802.2 Link Service #16
	  Adapter: <network adapter name>
	
	The Service Name parameter contains SnaDlc1 instead of SnaDlc10.
	
	CAUSE
	=====
	
	The Text Control size is not large enough to contain more than 7 characters for
	a link service name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
