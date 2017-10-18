---
layout: page
title: "Q150508: Netscape Clients Hang While Posting Data to SSL Forms on IIS"
permalink: kb/150/Q150508/
---

## Q150508: Netscape Clients Hang While Posting Data to SSL Forms on IIS

	Article: Q150508
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using a Netscape Browser to connect to a Secure Socket Layer (SSL)
	protected form on the Microsoft Internet Information Server (IIS), the browser
	appears to hang when submitting the form data to the server by the POST method.
	
	CAUSE
	=====
	
	A timing window exists in IIS where the service may lose received data. IIS
	waits for data from the client (which was already sent), and the Netscape
	Browser waits since it has sent the data.
	
	RESOLUTION
	==========
	
	This timing window has been eliminated.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 1.0. This problem was corrected in the latest Windows NT 3.51 U.S.
	Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Netscape Navigator is manufactured by Netscape, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodiis SSL hang freeze POST method
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : winnt:1.0
	
	=============================================================================
	
