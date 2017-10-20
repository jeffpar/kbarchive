---
layout: page
title: "Q261281: XCCC: Unable to Authenticate When Changing Conference Resource"
permalink: /kb/261/Q261281/
---

## Q261281: XCCC: Unable to Authenticate When Changing Conference Resource

{% raw %}

	Article: Q261281
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Conferencing Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to either extend an existing conference time or change the
	resource location, a Basic authentication dialog box may be displayed that
	prompts you for the user name and the password, but not for the domain name.
	
	CAUSE
	=====
	
	The Basic authentication dialog box may be displayed instead of the Integrated
	Windows authentication dialog box for any of the following reasons:
	
	- Basic authentication for the conferencing v-root is enabled, but Integrated
	  Windows authentication is not.
	
	- The conferencing URL contains the fully qualified domain name (FQDN) of the
	  conferencing server.
	
	If you have not used Microsoft Internet Explorer to define Exception entries
	about the server domain, and you connect through a proxy server, the proxy
	server sends authentication that enables you to extend conference time or change
	resources. However, when you use this configuration, Integrated Windows
	authentication does not function. Therefore, the computer uses Basic
	authentication, and a different credentials box is displayed.
	
	RESOLUTION
	==========
	
	To resolve this issue, use any of the following methods:
	
	Method One
	----------
	
	To enable Integrated Windows authentication for the conferencing v-root:
	
	1. Click Start, point to Programs, point to Administrative Tools, and then click
	  Internet Services Manager.
	
	2. Right-click Conferencing v-root under the Default Web site, and then click
	  Properties.
	
	3. Click the Directory Security tab, and then click the Edit button in the
	  "Anonymous access and authentication control" section.
	
	4. Click to select the Integrated Windows authentication check box.
	
	5. Click OK, and then click OK again.
	
	Method Two
	----------
	
	If you enable Integrated Windows authentication, use Internet Explorer to enter
	the conferencing server URL information in the Exceptions box on participating
	clients. Also, configure the computer to bypass the proxy server for local
	addresses:
	
	1. Right-click the Internet Explorer icon, and then click Properties.
	
	2. Click the Connections tab, and then click the LAN Settings button.
	
	3. Click to select the "Bypass proxy server for local addresses" check box.
	
	4. Click the Advanced button.
	
	5. In the Exceptions section, in the "Do not use proxy server for addresses
	  beginning with" box, type your FQDN in the following format:
	
	  "<*>.<domainname>.com" (without the quotation marks)
	
	6. Click OK three times.
	
	Method Three
	------------
	
	When the Basic authentication dialog box is displayed, use the following syntax
	for authentication:
	
	  Site: <Site Name>
	  Realm: <Realm Name>
	  User Name: <Domain Name\Username>
	  Password: <Password>
	
	Method Four
	-----------
	
	Use the Conference Management Service snap-in to remove the FQDN in the
	Conference Management Service URL settings; use only the host name.
	
	NOTE: This option is the most radical approach; you must consider this option
	carefully before you implement it because this change can have global effects.
	
	MORE INFORMATION
	================
	
	The Integrated Windows authentication dialog box prompts you for the following
	information:
	
	- User Name
	
	- Password
	
	- Domain
	
	The Basic authentication dialog box prompts you for the following information:
	
	- User Name
	
	- Password
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Component         : Jasper
	Technology        : kbExchangeSearch kbExchange2000Search kbExchange2000ConfServ
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
