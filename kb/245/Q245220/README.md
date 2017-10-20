---
layout: page
title: "Q245220: Novell Management Agent Does Not Run with CSNW"
permalink: /kb/245/Q245220/
---

## Q245220: Novell Management Agent Does Not Run with CSNW

{% raw %}

	Article: Q245220
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbtool
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Microsoft Client Services for Netware to work with the
	Novell Netware Management Agent (MA), the MA is unable to discover the Netware
	server and organizations, and the following error message is generated:
	
	  ********************************************************************
	  Start of the LDAP discovery process
	  DNS problem: 'servername' not reachable - Error code = 11001
	  LDAP discovery process failed
	  ********************************************************************
	  ** Discovery of organizations failed
	  ** Ensure that the server is currently in operation and check
	  ** configuration parameters such as the host name and the
	  ** host port number
	  *********************************************************************
	
	CAUSE
	=====
	
	This issue occurs because Netware Management Agents only work with the
	Intranetware client.
	
	
	RESOLUTION
	==========
	
	To work around this issue and permit this MA to run, install the Novell
	Intranetware client.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
