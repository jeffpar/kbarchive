---
layout: page
title: "Q190444: Memory Leak when Reading Configuration File"
permalink: /kb/190/Q190444/
---

## Q190444: Memory Leak when Reading Configuration File

{% raw %}

	Article: Q190444
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Memory leaks occur each time the configuration file is opened and closed. Memory
	leaks occur each time SNA Server Manager is used to view or to change the
	configuration for the SNA Server sub-domain.
	
	The memory leaks can affect two components of SNA Server: the SNA Manager and
	SnaBase. The leak will be very small for SNA Manager. Each time the Manager is
	stopped and restarted, the memory is recovered. The leak is evident only if a
	sub-domain is closed and reopened without restarting SNA Manager.
	
	SnaBase can be affected if frequent changes are made to the configuration. Each
	time a change is written to the Config file, SnaBase must read the file.
	Therefore, a small memory leak will occur each time a change is made. If SnaBase
	is stopped and restarted, the memory is recovered
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	and 4.0 SP1. This problem was corrected in the latest SNA Server version 4.0
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
