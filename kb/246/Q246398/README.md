---
layout: page
title: "Q246398: Help Screens Do Not Display in Compass"
permalink: /kb/246/Q246398/
---

## Q246398: Help Screens Do Not Display in Compass

{% raw %}

	Article: Q246398
	Product(s): Microsoft Windows NT
	Version(s): 2.1; WINDOWS:2000
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbui
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the Help button to display the help screen or click the right
	side of a form in Compass, you receive the following error message:
	
	  Proxy Report:
	  11001 Host was not found
	
	CAUSE
	=====
	
	This issue occurs because the MMS Help uses URLs to locate the help files. This
	is an example of a URL that could be called:
	
	  http://server_name.domain.com:8080/resource/help/admin
	
	This error message is generated when a Proxy Server is configured for Microsoft
	Internet Explorer and your MMS directory structure has an Internet type name
	such as server_name.domain_name.com.
	
	RESOLUTION
	==========
	
	To work around this issue, obtain access to the Internet by using a proxy
	server:
	
	1. In Internet Explorer, click Internet Options on the Tools menu, and then
	  click the Connections tab.
	
	2. Click Lan Settings, click to select the "Use a proxy server" check box, and
	  then click Advanced.
	
	3. Add the follow exception to the "Do not use proxy server for addresses
	  beginning with" box under Exceptions
	
	  http://<server name>.<domain name>.com
	
	  where <server name> is the server name, and <domain name> is the
	  domain name.
	
	  NOTE: To verify you are using the correct URL that the help file is trying to
	  contact, right-click the form where the proxy error is displayed, and then
	  click Properties. The General tab contains the address, copy the information
	  up to the port number. For example:
	
	  http://<server name>.<domain name>.com:8080/resource/help/admin
	
	This information would be the exception.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool kbui 
	Technology        : kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbMMSSearch kbMMS210
	Version           : :2.1; WINDOWS:2000
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
