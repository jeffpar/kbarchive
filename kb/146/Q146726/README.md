---
layout: page
title: "Q146726: ErrMsg: File .IDC Could Not Be Found"
permalink: /kb/146/Q146726/
---

## Q146726: ErrMsg: File .IDC Could Not Be Found

{% raw %}

	Article: Q146726
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 21-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following Error message appears on your web browser when you try to access
	an .IDC (Internet Database Connector) file on an Internet Information Server
	(IIS):
	
	  'file:c:\scripts/samples/viewbook.idc?' could not be found.
	  The attempt to load 'file:c:\scripts/samples/viewbook.idc?' failed.
	
	CAUSE
	=====
	
	Web Browsers send requests to IIS to access its databases. These queries are
	conveyed in .IDC files. The .IDC file passes the request to database through the
	file, HTTPODBC.DLL. Database results are then sent back to the client in a .HTX
	file.
	
	The .IDC file passes the request to HTTPODBC.DLL only if the request is received
	over the HTTP protocol. If you use the following syntax to access the .IDC file,
	IIS sends the content of the .IDC file back to the Web Browser, instead of the
	results from the database query.
	
	File:///c:\<directory path>/viewbook.idc
	
	RESOLUTION
	==========
	
	Use HTTP to access an .IDC file. For example:
	
	  http://<path>/viewbook.idc?
	
	Additional query words: prodie
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : winnt:1.0
	
	=============================================================================
	

{% endraw %}
