---
layout: page
title: "Q248043: Error Message: 403.6 - Forbidden: IP Address Rejected"
permalink: /kb/248/Q248043/
---

## Q248043: Error Message: 403.6 - Forbidden: IP Address Rejected

	Article: Q248043
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport kbiis400 kbiis500 kbiis500prod2web kbhttp4036 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When connecting to Internet Information Services using a Web browser, you may
	receive the following error message:
	
	  HTTP 403.6 - Forbidden: IP address rejected
	
	CAUSE
	=====
	
	Each client has a unique IP address. If the server defines a list of IP
	addresses that are not allowed to access the site and the IP address you are
	using is on this list, you will receive the error message.
	
	This is a feature that grants or denies specific users access to a Web site,
	directory, or file.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Using the Internet Service Manager (Microsoft Management Console), open the
	  Internet Information Server (IIS) snap-in and select the Web site reporting
	  the 403.6 error. Right-click the Web site, virtual directory, or file where
	  the error is occurring. Click Properties to display the property sheet for
	  that item.
	
	2. Select the appropriate Directory Security or File Security property page.
	  Under IP Address and Domain Name Restrictions, click Edit.
	
	3. In the IP Address and Domain Name Restrictions dialog box, if the Denied
	  Access option is selected, then add the IP address, network ID, or domain of
	  the computer that requires access to the exceptions list.
	
	  In the IP Address and Domain Name Restrictions dialog box, if the Granted
	  Access option is selected, then remove the IP address, network ID, or domain
	  of the computer that requires access to the exceptions list.
	
	IMPORTANT:
	
	- When you set security properties for a specific Web site, you automatically
	  set the same security properties for directories and files belonging to that
	  site, unless the security properties of the individual directories and files
	  have been previously set.
	
	- Your Web server will prompt you for permission to reset the properties of
	  individual directories and files when you attempt to set security properties
	  for your Web site. If you choose to reset these properties, your previous
	  security settings will be replaced by the new settings. The same condition
	  applies when you set security properties for a directory containing
	  subdirectories or files with previously set security properties.
	
	NOTES:
	
	- By default, some sites are only granted access from the IP address 127.0.0.1,
	  which corresponds to the computer name localhost and is considered a
	  different address/name than the NetBIOS or fully qualified domain name (FQDN)
	  of the Web server. To access a site restricted to localhost, you must be at
	  the console of the computer with the localhost restriction.
	
	- Computers accessing your server across proxy servers will appear to have the
	  IP address of the proxy server.
	
	- Restricting by domain name is not recommended because it decreases the
	  performance of your Web server by forcing the Web server to perform a reverse
	  DNS lookup for each connection to that site. In addition to increasing the
	  load on the Web server, reverse lookups can also result in unexpected
	  denials. For additional information, click the article number below to view
	  the article in the Microsoft Knowledge Base:
	
	  Q227943 How Internet Information Services (IIS) Handles Reverse Lookup
	  Failures
	
	MORE INFORMATION
	================
	
	If the product documentation was installed with IIS, one of the following links
	will be available when viewed on the IIS server:
	
	  Internet Information Services 5.0 Documentation
	  http://localhost/iishelp/iis/misc/default.asp?jumpurl=../htm/core/iigdasc.htm
	
	  Internet Information Server 4.0 Documentation
	  http://localhost/iishelp/iis/htm/core/igdasc.htm
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q227943 How IIS Handles Reverse Lookup Failures
	
	  Q172218 Microsoft TCP/IP Host Name Resolution Order
	
	  Q163391 Troubleshooting Problems Communicating on the Internet
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport kbiis400 kbiis500 kbiis500prod2web kbhttp4036 kbProd2Web 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
