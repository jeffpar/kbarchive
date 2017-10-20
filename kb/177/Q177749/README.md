---
layout: page
title: "Q177749: How IIS 3.0 Handles Client Language"
permalink: /kb/177/Q177749/
---

## Q177749: How IIS 3.0 Handles Client Language

{% raw %}

	Article: Q177749
	Product(s): Internet Information Server
	Version(s): WinNT:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains:
	
	- How Internet Information Server (IIS) handles the HTTP "Accept- Language"
	  field
	
	- Why the client may be unable to access to the IIS Web Site if its language
	  setting matches the name of an IIS virtual directory.
	
	MORE INFORMATION
	================
	
	The Accept-Language http field allows the client browser to specify the list of
	"preferred" languages. For instance if you select Danish with the Regional
	Settings Control Panel tool, for each HTTP request Internet Explorer will add
	"Accept-Language = da in the HHTP packet. This allows the Web Server to
	customize the response based on the client language.
	
	When IIS receives the request Accept-Language field, IIS tries to see if the
	"Accept-Language" virtual directory exist. If yes, then IIS modifies the query
	and adds the language to the URL.
	
	A sample is shown below. In this sample, the IIS Web Server has two directories
	defined:
	
	- Home -> C:\Inetpub\WWWROOT
	
	- Virtual directory named da -> C:\Danish
	
	First Request
	-------------
	
	Client language: Danish
	
	Client request: GET /yyyy.htm Accept-Language = da
	
	1. IIS receives the request : GET /yyyy.htm Accept-Language = da
	
	2. IIS processes the language and checks if a virtual directory named "da"
	  exists.
	
	3. The "da" virtual directory exists. So IIS modifies the request from GET
	  /yyyy.htm to GET /da/yyyy.htm.
	
	4. IIS tries to return the /da/yyyy.htm page. If c:\Danish\yyyy.htm does not
	  exist, an error message is returned to the client.
	
	Second Request
	--------------
	
	Client language: Italian.
	
	Client request: GET /yyyy.htm Accept-Language = it
	
	1. IIS receives the request : GET /yyyy.htm Accept-Language = it
	
	2. IIS processes the language and checks if a virtual directory named "it"
	  exists
	
	3. In this case the "it" virtual directory DOES NOT exist. IIS does not modify
	  the request.
	
	4. IIS tries to return the /yyyy.htm page.
	
	This feature allows IIS to return "localized" pages to the client. The drawback
	is that all pages must be duplicated for each language virtual directory.
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300
	Version           : WinNT:3.0
	
	=============================================================================
	

{% endraw %}
