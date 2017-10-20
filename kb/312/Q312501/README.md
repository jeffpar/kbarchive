---
layout: page
title: "Q312501: HOW TO: Change the LDAP Port for Exchange Server 5.5"
permalink: /kb/312/Q312501/
---

## Q312501: HOW TO: Change the LDAP Port for Exchange Server 5.5

{% raw %}

	Article: Q312501
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbAudITPro kbHOWTOmaster
	Last Modified: 09-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Change the LDAP Port for Exchange Server
	- Troubleshooting
	
	SUMMARY
	=======
	
	This step-by-step article describes how to change the Lightweight Directory
	Access Protocol (LDAP) port number for the Exchange directory service when you
	upgrade primary domain controllers (PDCs) or backup domain controllers (BDCs)
	that run Exchange Server 5.5.
	
	Change the LDAP Port for Exchange Server
	----------------------------------------
	
	1. In the Microsoft Exchange program group, start Microsoft Exchange
	  Administrator.
	
	2. Connect to the server. If necessary, click "Connect to Server" on the File
	  menu to display the "Connect to Server" dialog box, type the server name, and
	  then click OK.
	
	3. Expand Site, expand Configuration, and then click Protocols.
	
	4. Double-click LDAP (Directory) Site Defaults. On the General tab, change the
	  port number to 390, and then click OK to configure the Exchange directory
	  service to use TCP port 390.
	
	5. Close Microsoft Exchange Administrator, and then restart the computer.
	
	Troubleshooting
	---------------
	
	Both the legacy Exchange directory service and Active Directory support LDAP. On
	an Active Directory domain controller, Active Directory starts automatically and
	locks TCP port 389 for its own use. When Exchange Server starts, Exchange Server
	cannot use the same port and cannot communicate by using LDAP until you change
	the LDAP port for the Exchange directory service to a port other than 389.
	
	Note that Microsoft recommends that you change the LDAP port for the Exchange
	directory service before you upgrade to Windows 2000 and Active Directory.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudITPro kbHOWTOmaster 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
