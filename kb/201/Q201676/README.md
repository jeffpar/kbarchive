---
layout: page
title: "Q201676: Remote MMC Does Not Display All IP Addresses"
permalink: /kb/201/Q201676/
---

## Q201676: Remote MMC Does Not Display All IP Addresses

	Article: Q201676
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-JAN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run the MMC from a remote computer, the new Web site wizard does not
	enumerate all of the IP addresses of the destination server (it returns "Any
	Unassigned" and the IP of the destination computer only). If you run the wizard
	locally, all IP addresses are shown.
	
	CAUSE
	=====
	
	This is by design. You cannot query the IP addresses of a remote computer using
	the MMC interface. This information is simply not provided by the operating
	system. A remote registry query enumerates the static IP addresses, but not the
	dynamic IP addresses. There are also firewall concerns involved that prevent
	this from functioning properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
