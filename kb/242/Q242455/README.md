---
layout: page
title: "Q242455: Incorrect Link in Mapping Client Certificates to User Accounts"
permalink: /kb/242/Q242455/
---

## Q242455: Incorrect Link in Mapping Client Certificates to User Accounts

{% raw %}

	Article: Q242455
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the Mapping Client Certificates to User Accounts link in Internet
	Information Services (IIS) 5.0 Help, the following error message occurs:
	
	  A Runtime error has occurred.
	  Do you wish to debug?
	
	  Line: 38
	  Error: Permission denied:"MyURL"
	
	The link also generates a warning event 30 with the following text in the system
	event log:
	
	  The server was unable to read the file C:\WINNT\help\iisHelp\common\404.htm.
	  The file does not exist. For additional information specific to this message
	  please visit the Microsoft Online Support site located at:
	  http://www.microsoft.com/contentredirect.asp.
	
	WORKAROUND
	==========
	
	Use the index in the IIS documentation (http://localhost/iishelp) to find
	Mapping:
	
	1. Select Client Certificates.
	
	2. Click Certificate Authentication.
	
	3. Choose Mapping Client Certificates to User Accounts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Services version 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	
	1. In the IIS MMC, right-click a Web site, and then click Properties.
	
	2. Click the Directory Security tab.
	
	3. Click Help.
	
	4. Click Enable the Windows directory service mapper to display the text for
	  this item.
	
	5. Click the Mapping Client Certificates to User Accounts link.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
