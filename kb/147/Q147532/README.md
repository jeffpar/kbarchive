---
layout: page
title: "Q147532: Access Denied and Login Failed on Internet Information Server"
permalink: /kb/147/Q147532/
---

## Q147532: Access Denied and Login Failed on Internet Information Server

{% raw %}

	Article: Q147532
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access an HTML page on an Internet Information Server, the
	following error message appears:
	
	  Error: Access is denied.
	
	When you attempt to access the FTP server on an Internet Information Server, the
	following error message appears:
	
	  Login failed.
	
	CAUSE
	=====
	
	This problem occurs if there is a password mismatch of IUSR_<server name>
	user name between Internet Information Server and User Manager. This user name
	is created by default during the installation of Internet Information Server.
	
	NOTE: This problem can also occur if the Internet Information Server is a primary
	or backup domain controller. By default, Everyone is not allowed to log on
	locally.
	
	RESOLUTION
	==========
	
	To correct this problem, make sure that the password of IUSR_<server name>
	matches among the FTP Server and Web Server of Internet Information Server and
	User Manager.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
