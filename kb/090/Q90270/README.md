---
layout: page
title: "Q90270: Does Windows for Workgroups Work with Novell TCP/IP?"
permalink: /kb/090/Q90270/
---

## Q90270: Does Windows for Workgroups Work with Novell TCP/IP?

{% raw %}

	Article: Q90270
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows for Workgroups version 3.1 does not work with Novell TCP/IP
	product.
	
	NOTE: This information does not apply to later versions of Windows for
	Workgroups.
	
	MORE INFORMATION
	================
	
	Novell's TCP/IP product is LAN Workplace for MS-DOS version 4.0. This product
	has a TCP/IP transport driver that uses Novell's ODI
	transport/media-access-control interfaces to send and receive messages using the
	ODI LSL.
	
	Windows for Workgroups uses the NDIS transport/media-access-control interfaces to
	send and receive network messages. The ODI interfaces are not supported for
	Windows for Workgroups; consequently, Novell's TCP/IP is not supported.
	
	Additional query words: 3.10 net ware netware novell mac 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : :3.1
	
	=============================================================================
	

{% endraw %}
