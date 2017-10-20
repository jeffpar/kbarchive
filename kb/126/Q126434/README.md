---
layout: page
title: "Q126434: Configuring a Windows NT User as an SNA Server Administrator"
permalink: /kb/126/Q126434/
---

## Q126434: Configuring a Windows NT User as an SNA Server Administrator

{% raw %}

	Article: Q126434
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): sna4
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server Admin or Manager allows an authorized administrator to define
	administrative access to SNA Server. However, if a Windows NT user is granted
	Full Control using SNA Admin, the following error may occur when the user
	attempts to save the SNA Server or Manager configuration file:
	
	  Error: 4006
	  Unable to get or set security information on the config file.
	
	  -or-
	
	  Unable to write file.
	
	Windows NT administrators do not have this problem.
	
	NOTE: This also occurs in SNA Manager 3.0 and 4.0. For related information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q180932 Saving Com.cfg Without Administrator Rights.
	
	RESOLUTION
	==========
	
	To allow a Windows NT user to fully administer the SNA Server:
	
	1. Run Windows NT User Manager for Domains.
	
	2. Choose Policies and then choose User Rights.
	
	3. Select Manage Auditing And Security Log.
	
	4. Grant the user this user right.
	
	5. Exit Windows NT User Manager for Domains.
	
	6. Run SNA Server Manager.
	
	7. Select the SNA Subdomain and choose Properties.
	
	8. In the Config File Security tab, select Take Ownership.
	
	9. Exit SNA Server Manager.
	
	For more information on security, see Chapter 12 "Setting up security with SNA
	Server" of the "SNA Server version 2.1 Admin Guide."
	
	Additional query words: ntprotocol prodsna 2.10 4006 user admin
	
	======================================================================
	Keywords          : sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.1,2.11,3.0,4.0
	
	=============================================================================
	

{% endraw %}
