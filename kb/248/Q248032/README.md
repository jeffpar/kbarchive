---
layout: page
title: "Q248032: Err Msg: Forbidden: Site Access Denied 403.8"
permalink: /kb/248/Q248032/
---

## Q248032: Err Msg: Forbidden: Site Access Denied 403.8

{% raw %}

	Article: Q248032
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp4038 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to a Web server using a Web browser, such as Microsoft Internet
	Explorer, you may receive the following error message:
	
	  You are not authorized to view this page.
	  You do not have permission to view this directory or page from the Internet
	  address of your Web browser.
	
	  Please try the following:
	
	  If you believe you should be able to view this directory or page, please
	  contact the Web site administrator by using the e-mail address or phone
	  number listed on the file:// home page.
	
	  HTTP 403.8 - Forbidden: Site access denied Internet Information Services
	
	CAUSE
	=====
	
	This error occurs because the server has a list of DNS names that are not
	allowed to access the site, and the DNS name you are using is in this list.
	
	RESOLUTION
	==========
	
	Have the Web site administrator remove your client's DNS name from the DNS
	restrictions on the IIS computer. To do this, open the properties on the Default
	Web Site or the Web site in question:
	
	1. Click the Directory Security tab.
	
	2. Under IP Address and Domain name restrictions, click Edit.
	
	3. Select the domain name that you want to remove in the Restrictions box.
	
	4. Click Remove.
	
	5. Do this for each domain that you want to remove.
	
	NOTE: IP and Domain restrictions can also be set in the Master properties. You
	may have to perform the above steps under Master properties. To enter Master
	properties, right-click the server name in the Internet Services Manager and
	choose Properties. In the Master Properties box, click Edit.
	
	Additional query words: IIS 5
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp4038 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
