---
layout: page
title: "Q139379: Cannot Load Lucida Typewriter Font"
permalink: /kb/139/Q139379/
---

## Q139379: Cannot Load Lucida Typewriter Font

{% raw %}

	Article: Q139379
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
	
	When you start the SNA Server Windows NT 3270 applet, the following message
	appears:
	
	  Cannot load lucida typewriter font. Please ensure that ltype.ttf is
	  in the windows system directory.
	
	CAUSE
	=====
	
	Snafiles.inf does not tell setup to copy Ltype.ttf to the
	<ntroot>\system32 directory. This occurs only when you select only the
	3270 emulator in SNA Server Setup dialog box: Optional Components. If the
	defaults are accepted by the user, Ltype.ttf gets copied appropriately.
	
	RESOLUTION
	==========
	
	Microsoft has updated the file SNAFILES.INF to correct this problem.
	
	To work around this problem, copy the \CLIENTS\WINNT\I386\LTYPE.TTF from the SNA
	Server compact disc to the SYSTEM32 directory.
	
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
