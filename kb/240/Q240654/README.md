---
layout: page
title: "Q240654: HOW TO: Configure the IISADMPWD Pages for Different Ports"
permalink: /kb/240/Q240654/
---

## Q240654: HOW TO: Configure the IISADMPWD Pages for Different Ports

{% raw %}

	Article: Q240654
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 13-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Introduction
	   - Configure the Pages for Different Ports
	   - Troubleshooting
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to change passwords on a Web server that
	is running on a port other than 80.
	
	Introduction
	------------
	
	Internet Information Server (IIS) 4.0 and Internet Information Services (IIS) 5.0
	include Administration Web pages that allow users to change passwords only when
	a Web server is running on the IIS default port of 80. This article describes
	how to modify these pages to work on other ports.
	
	By default, the IIS installation creates a folder in the following location:
	
	  %SYSTEMROOT%\system32\inetsrv\iisadmpwd
	
	The following files are then copied to that folder:
	
	  Achg.htr
	  Aexp.htr
	  Aexp2.htr
	  Aexp2b.htr
	  Aexp3.htr
	  Aexp4.htr
	  Aexp4b.htr
	  Anot.htr
	  Anot3.htr
	
	Configure the Pages for Different Ports
	---------------------------------------
	
	1. Open each of the pages and search the text for the following string:
	
	   <%iis.SERVER_NAME%>
	
	2. For each occurrence of this text, if the URL begins with
	  "http://<%iis.SERVER_NAME%>" change it to read
	  "http://<%iis.SERVER_NAME%>:<PORT1>," where <PORT1> is the
	  port that the Web site is listening on.
	
	3. Likewise, change each URL that begins with
	  "https://<%iis.SERVER_NAME%>" to read
	  "https://<%iis.SERVER_NAME%>:<PORT2>," where <PORT2> is the
	  Secure Sockets Layer (SSL) port that the Web site is listening on.
	
	Troubleshooting
	---------------
	
	You may receive the following error message when you try to modify a password:
	
	  The parameter is incorrect.
	
	For additional information about how to resolve this problem, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q296617 Error When Password Changed After Password Change Utility Installed
	
	REFERENCES
	==========
	
	For additional information about this feature, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q184058 Unable to Change Password Using the IIS 4.0 Change Password Feature
	
	  Q184619 How to Change Windows NT Account Passwords Using Internet Information
	  Server (IIS) 4.0
	
	  Q269082 IISADMPWD Virtual Directory Is Not Created During Clean Install of
	  IIS 5.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
