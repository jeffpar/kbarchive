---
layout: page
title: "Q172118: Failure to Open Domain Error Displayed Too Soon By Manager"
permalink: /kb/172/Q172118/
---

## Q172118: Failure to Open Domain Error Displayed Too Soon By Manager

{% raw %}

	Article: Q172118
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When trying to open SNA Server subdomains, SNA Server Manager may display a
	
	  Failed to Open Domain
	
	error message prematurely. The SNAOLE error message pops up stating that the
	domain could not be found but then the domain is opened normally.
	
	CAUSE
	=====
	
	When trying to find the SNA Server configuration file path, a call is made to
	the SNA Server DMOD (SNADMOD.DLL). If the DMOD is locked doing an Open
	connection which times out, the call does not return for a while. This call has
	a timeout of 10 seconds, after which the "Failed to Open Domain" message was
	displayed.
	
	RESOLUTION
	==========
	
	An update has been made that increases the timeout for the call to find the SNA
	Server configuration file path to 60 seconds to reduce the likelihood of this
	problem occurring. During this 60 seconds, SNA Server Manager is unable to
	respond to user input.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server, versions
	3.0 and 3.0 SP1. This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
