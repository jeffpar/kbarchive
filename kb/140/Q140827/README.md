---
layout: page
title: "Q140827: TN3270 Server Incorrectly Formats Mod 5 Terminal LU-SSCP Screens"
permalink: /kb/140/Q140827/
---

## Q140827: TN3270 Server Incorrectly Formats Mod 5 Terminal LU-SSCP Screens

{% raw %}

	Article: Q140827
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
	
	Wall Data's Rumba TN3270 session screens are incorrectly formatted when changing
	the default terminal type from Mod 3 to Mod 5 at session logon. This problem
	does not occur when using a Rumba 3270 session or the SNA Server 3270 applet.
	
	RESOLUTION
	==========
	
	Microsoft has updated the file, TN3SERVR.EXE, to correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
