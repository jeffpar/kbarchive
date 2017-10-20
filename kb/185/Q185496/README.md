---
layout: page
title: "Q185496: Changing IP/Port on SSL Web May Require Key Manager Change"
permalink: /kb/185/Q185496/
---

## Q185496: Changing IP/Port on SSL Web May Require Key Manager Change

{% raw %}

	Article: Q185496
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a server certificate is applied to an Internet Information Server version
	4.0 (IIS) Web server, the server certificate must be bound to the IP address and
	port number. If there are multiple certificates loaded but not bound, the server
	may not use the certificate correctly.
	
	MORE INFORMATION
	================
	
	Secure Socket Layer (SSL) connections may fail if the settings in Key Manager
	are incorrect. By default, Key Manager sets up IIS to use the certificate on all
	unassigned IP addresses and all unassigned ports. Unassigned means IP addresses
	or Port combinations are not currently bound to a certificate.
	
	If you bind a certificate to a specific IP address or Port and then change the IP
	or Port combination of the Web server, you must also change the setting in Key
	Manager.
	
	Example: If you have a Web server, www.myserver.com, on IP address 10.56.65.200
	and port 443 (for SSL traffic), the server certificate must also be bound to
	10.56.65.200:443.
	
	However, if you change the server address to 10.56.65.201:443, you must also
	change the setting to 10.56.65.201:443 in Key Manager. If you do not, IIS does
	not service requests for the new IP address and Port because it is still bound
	to 10.56.65.200:443.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
