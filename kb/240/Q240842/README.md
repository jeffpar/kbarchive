---
layout: page
title: "Q240842: Using Java Servlets on IIS"
permalink: /kb/240/Q240842/
---

## Q240842: Using Java Servlets on IIS

{% raw %}

	Article: Q240842
	Product(s): Internet Information Server
	Version(s): 3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis300 kbiis400 kbiis500
	Last Modified: 14-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Java servlets are server side web server extensions. Java servlets are designed
	as a Java replacement for CGI.
	
	Servlets can be used and migrated between web servers because they rely on the
	servlet API rather than the server itself.
	
	To use servlets on a web server the web server must have a Virtual Machine that
	can support the language of the servlet (in this case Java), and the server must
	also support the Java Servlet API.
	
	To implement Java Servlets on IIS, you need an engine to host them.
	
	The following list are some possible:
	
	- IBM WebSphere Application Server
	
	  http://www.software.ibm.com/webservers/appserv/
	
	- Jrun from Macromedia
	
	  http://www.macromedia.com/software/jrun
	
	- ServletExecTM 2.1
	
	  http://www.newatlanta.com/
	
	MORE INFORMATION
	================
	
	The JDK can be downloaded from JavaSoft:
	
	  http://java.sun.com/products/index.html
	
	Sun's Servlet tutorial:
	
	  http://java.sun.com/docs/books/tutorial/servlets/overview/index.html
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: java servlet how to
	
	======================================================================
	Keywords          : kbDSupport kbiis300 kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300
	Version           : :3.0,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
