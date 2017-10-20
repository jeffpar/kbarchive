---
layout: page
title: "Q182140: DSPU and PU Passthrough Available in SNA Workstation Product"
permalink: /kb/182/Q182140/
---

## Q182140: DSPU and PU Passthrough Available in SNA Workstation Product

{% raw %}

	Article: Q182140
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Workstation allows the configuration of DSPU (DownStream Physical Units) and
	PU Passthrough connections. These features should only be available in the SNA
	Server product.
	
	Microsoft SNA Workstation is a single-user version of SNA Server that supports
	access to SNA networks from a single Windows NT computer. SNA Workstation
	supports SNA connectivity from the SNA Workstation computer but does not support
	gateway access from a client computer.
	
	CAUSE
	=====
	
	The SNA Server/Workstation management functions did not include a check that
	would disable the Downstream and PU Passthrough "Remote End" options on the
	connection properties dialog box on an SNA Workstation installation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
