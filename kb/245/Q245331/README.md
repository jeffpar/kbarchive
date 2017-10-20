---
layout: page
title: "Q245331: IIS: HTMLA Allows the Selection of Require Client Certificates"
permalink: /kb/245/Q245331/
---

## Q245331: IIS: HTMLA Allows the Selection of Require Client Certificates

{% raw %}

	Article: Q245331
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When browsing to a Web site, clients can receive the following error message:
	
	  403.7-Forbidden: Client Certificate Required Internet Information Services
	
	But Require Client Certificates is not active in the properties of the Web site
	in the Internet Service Manager Snap-in.
	
	CAUSE
	=====
	
	The HTML Administration Web site allows an Administrator to select Require
	Client Certificates in the properties of a Web site without first selecting
	Require Secure Channel.
	
	This is not possible in the Internet Service Manager MMC Snap-in.
	
	RESOLUTION
	==========
	
	When using the HTML Administration Web site to require Client Certificates,
	select Require Secure Channel after clicking Properties, then Security, and
	finally Edit in the Secure Communications section of the Web site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Services version 5.0.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
