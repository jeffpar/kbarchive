---
layout: page
title: "Q184477: Stop Some Services Before Installing Proxy Server 2.0"
permalink: /kb/184/Q184477/
---

## Q184477: Stop Some Services Before Installing Proxy Server 2.0

{% raw %}

	Article: Q184477
	Product(s): Internet Information Server
	Version(s): 2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Proxy Server version 2.0 
	- Microsoft Site Server version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Proxy Server 2.0 on a computer that already has Internet
	Information Server (IIS) 4.0 and Site Server 3.0 installed, you must manually
	stop certain services prior to installing Proxy 2.0.
	
	MORE INFORMATION
	================
	
	The following services must be stopped before you install or remove Proxy Server
	2.0 from a computer that already has IIS 4.0 and Site Server 3.0 installed:
	
	- Site Server Authentication Service
	
	- Site Server LDAP Service
	
	- Site Server Message Builder Service
	
	- Microsoft SMTP Service
	
	- FTP Publishing Service
	
	- World Wide Web Publishing Service
	
	- IIS Administrator Service
	
	From the command prompt you can also type:
	
	  net stop "IIS Admin Service" /y
	
	This will stop the IIS Administrator Service and all related services.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSiteServSearch kbiisSearch kbAudDeveloper kbiis400 kbProxyServSearch kbProxyServ200 kbSiteServ300
	Version           : :2.0,3.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
