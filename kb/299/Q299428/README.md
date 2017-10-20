---
layout: page
title: "Q299428: How to Configure Passport for Multiple Sites on a Single Server"
permalink: /kb/299/Q299428/
---

## Q299428: How to Configure Passport for Multiple Sites on a Single Server

{% raw %}

	Article: Q299428
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Passport Manager object that is installed on a particular server can be given
	different defaults, behaviors, encryption keys, and Site IDs so that a single
	object can be used for multiple sites that are being served from a single server
	computer.
	
	MORE INFORMATION
	================
	
	1. Run the Passport Manager Administration utility. To do this, click Start,
	  point to Programs, point to Microsoft Passport, and then click Passport
	  Manager Administration Utility.
	
	2. In the Passport Manager Administration Utility, click New. The Add New Web
	  Site dialog box appears.
	
	3. In the Web Site Name field, type a new friendly name for the site. The value
	  that you type for Web Site Name should match the site name that is specified
	  as the /s parameter if encryption keys that are designated for a particular
	  site name have already been installed or will be installed. For details and
	  the purpose of the /s parameter when installing keys, see the following
	  Passport Web site:
	
	  Installing the Encryption Key
	  http://www.passport.com/sdkdocuments/sdk14/Implementation/enckey.htm
	
	  NOTE: It is best to not use names that contain spaces when you specify the Web
	  site name. If you do, you must enclose the string in quotation marks when you
	  specify as the /s value, and you must encode the spaces out of the value if
	  you specify it as vSiteName.
	
	4. For Host Name, type a host name and IP address. This value should be the
	  server host name that this particular Passport-enabled site resolves to. If
	  the site uses a port other than 80, specify the port number along with the
	  host name in a single string (for example, hostname:port#).
	
	5. For Host IP, type an IP address. The IP address is the resolving IP number
	  for the site.
	
	6. Click Commit Changes to enable the new site configuration.
	
	REFERENCES
	==========
	
	For more information, see the SDK documentation at the following Passport Web
	site:
	
	  Multiple Site Configuration
	  http://www.passport.com/SDKDocuments/SDK14/reference/operations/multisiteconfig.htm
	
	Additional query words: multisite, encryption, keys,
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
