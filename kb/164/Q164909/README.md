---
layout: page
title: "Q164909: Backup Host Account Cache May Hang if Out of Sync with Master"
permalink: /kb/164/Q164909/
---

## Q164909: Backup Host Account Cache May Hang if Out of Sync with Master

{% raw %}

	Article: Q164909
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server backup Host Account Cache service may hang if its database gets
	out of sync with the master Host Account Cache database.
	
	CAUSE
	=====
	
	The backup service was incorrectly acquiring a write lock on the database file,
	which may cause the service to hang.
	
	RESOLUTION
	==========
	
	An update to SNA Server 3.0 is available to correct this problem. The updated
	module is:
	
	  <Snaroot>\Hssystem\Snaudb.exe
	
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
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
