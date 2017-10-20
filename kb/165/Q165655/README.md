---
layout: page
title: "Q165655: Size of Config File Does Not Change After Items Are Deleted"
permalink: /kb/165/Q165655/
---

## Q165655: Size of Config File Does Not Change After Items Are Deleted

{% raw %}

	Article: Q165655
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The size of the SNA Server configuration file (Com.cfg) does not change even
	after a large number of items have been deleted from the configuration.
	
	NOTE: The configuration file will rarely exceed the capacity of a high- density
	floppy disk. This problem will not present operational issues under normal
	circumstances.
	
	CAUSE
	=====
	
	The Snacfg.dll was not setting the end of file correctly on the configuration
	file.
	
	RESOLUTION
	==========
	
	SNA Server has been modified to close the file properly, thereby adjusting the
	file size.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
