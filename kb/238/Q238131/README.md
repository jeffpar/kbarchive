---
layout: page
title: "Q238131: How to Disable Socket Pooling"
permalink: /kb/238/Q238131/
---

## Q238131: How to Disable Socket Pooling

{% raw %}

	Article: Q238131
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may need to disable socket pooling under the following conditions:
	
	- A low number of sites are being hosted.
	
	- There are special security concerns.
	
	- Another application or server has need of port 80 on an IP address.
	
	MORE INFORMATION
	================
	
	Socket pooling causes Internet Information Services (IIS) 5.0 to listen to all
	IP addresses, which can present a possible security risk for secure domains with
	multiple networks. Also, bandwidth throttling and performance adjustments will
	apply to all Web sites configured for the same port (for example port 80). If
	bandwidth throttling or performance tuning is being done on a per-site basis,
	socket pooling will need to be disabled.
	
	To disable socket pooling, perform the following steps:
	
	1. Start the command prompt and make sure you are in the X:\Inetpub\Adminscripts
	  folder (where X is the IIS installation drive). To do this, type the
	  following lines at the command prompt:
	
	  X:
	
	  CD\Inetpub\Adminscripts
	
	2. After you open the Adminscripts folder, type the following line at the
	  command prompt:
	
	  cscript adsutil.vbs set w3svc/disablesocketpooling true
	
	3. The command replies as follows:
	
	  disablesocketpooling : (BOOLEAN) True
	
	4. Stop and start the IISAdmin service.
	
	5. Restart the WWW service.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
