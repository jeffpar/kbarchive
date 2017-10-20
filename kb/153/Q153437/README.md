---
layout: page
title: "Q153437: Access Not Allowed When Accessing Web Server"
permalink: /kb/153/Q153437/
---

## Q153437: Access Not Allowed When Accessing Web Server

{% raw %}

	Article: Q153437
	Product(s): Internet Information Server
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 03-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	- Microsoft Internet Explorer versions 1.0, 2.0 for Windows 95 
	- Microsoft Internet Explorer version 2.0 for Windows NT 3.51 
	- Microsoft Internet Explorer version 2.0 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to your Internet Information Server (IIS) web site via
	Internet Explorer with only the server name as a URL you will get the following
	the error message:
	
	  You are not allowed to access this server.
	
	CAUSE
	=====
	
	The default document that you have specified in your directory set up does not
	exist.
	
	RESOLUTION
	==========
	
	1. Go to the IIS Manager and double click the web server. Select the Directories
	  property tab.
	
	  NOTE: The name of the default document and that the Enable Default Document
	  check box is selected.
	
	2. Check the home directory listed in the directory list to be sure that the
	  default document file is there.
	
	  A default document is included with IIS. It is not placed in the wwwroot
	  directory by default as it is only a sample. The wwwroot directory is
	  generally the home directory for the IIS web server.
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbIEsearch kbiis100 kbZNotKeyword2 kbIENT400Search kbIENT351Search kbIE95Search kbZNotKeyword3 kbIE100Win95 kbIE200Win95 kbIE200WinNT351 kbIE200WinNT400
	Version           : :1.0,2.0
	
	=============================================================================
	

{% endraw %}
