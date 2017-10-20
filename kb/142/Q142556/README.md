---
layout: page
title: "Q142556: Testing a Default Installation of Microsoft IIS WWW"
permalink: /kb/142/Q142556/
---

## Q142556: Testing a Default Installation of Microsoft IIS WWW

{% raw %}

	Article: Q142556
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides information on testing a default installation of the
	Microsoft Internet Information Server W3 Service.
	
	MORE INFORMATION
	================
	
	The default installation of the Microsoft Internet Information Server (IIS)
	contains sample files that can be used to test the functionality of your IIS WWW
	publication service.
	
	To test your server on the local LAN:
	
	- Ensure your computer has an active connection to your local LAN and that your
	  name resolution is working properly.
	
	- Make sure the WWW service is started by opening Microsoft Internet Service
	  Manager and verifying State is "Running".
	
	- Start the Microsoft Internet Explorer.
	
	- Click on File, Open or use the File Open icon on the toolbar.
	
	- Type in the Uniform Resource Location (URL) for the home directory of your
	  new server. The URL will be "http://" followed by the NetBIOS name of your
	  server. For example if your server is called, "myserver" you would type:
	
	  http://myserver
	
	- You should see a sample HTML page. If not you may be publishing from a
	  previous installation directory. In that case use the full path to access the
	  sample page such as:
	
	  http://myserver/samples
	
	Additional query words: prodiis1
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	

{% endraw %}
