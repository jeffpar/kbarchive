---
layout: page
title: "Q258791: &quot;LdapErr&quot;When Connecting to MMS Configured with Compass"
permalink: /kb/258/Q258791/
---

## Q258791: &quot;LdapErr&quot;When Connecting to MMS Configured with Compass

{% raw %}

	Article: Q258791
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 12-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may be displayed when you are trying to log on to
	Microsoft Metadirectory Services (MMS) running on Microsoft Windows 2000 by
	using the Compass client:
	
	  80090308: LdapErr: DSID-0C090290, comment: AcceptSecurityContext error, data
	  525, v893
	
	CAUSE
	=====
	
	You are attempting to connect to an MMS server running on a Windows 2000-based
	domain controller using Lightweight Directory Access Protocol (LDAP) port 390.
	However, the Compass client is connecting using LDAP port 389.
	
	RESOLUTION
	==========
	
	To configure Compass for port 390:
	
	1. Start Compass.
	
	2. Log on with the administrator ID and password.
	
	3. When the Server dialog box appears, click Configure.
	
	4. Click New.
	
	5. In the Name box, type the name of the MMS server.
	
	6. In the Host Name Or Address box, type the name or the IP address of the MMS
	  server.
	
	7. In the Port, type "390" (without the quotation marks) instead of the default
	  389.
	
	8. Click Apply.
	
	9. In the Server box, click the name of the server.
	
	10. Click OK.
	
	11. Click OK.
	
	MORE INFORMATION
	================
	
	Microsoft Active Directory uses LDAP port 389.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
