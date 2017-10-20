---
layout: page
title: "Q196387: XCLN: Microsoft Importer for cc:Mail Archive Fails During Setup"
permalink: /kb/196/Q196387/
---

## Q196387: XCLN: Microsoft Importer for cc:Mail Archive Fails During Setup

{% raw %}

	Article: Q196387
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The Microsoft Importer for cc:Mail Archives may fail with an error indicating
	that it could not load the Advpack.dll file.
	
	CAUSE
	=====
	
	Windows 95 does not contain the files required for the cc:Mail Archive Importer
	setup to complete.
	
	RESOLUTION
	==========
	
	In order for the cc:Mail Archive Importer setup program to complete on Windows
	95 systems, users must first install Internet Explorer 4.x or higher.
	
	The installation of the Microsoft Importer for cc:Mail Archives will work on the
	following platforms:
	
	- Windows NT 4 (any build version)
	
	- Windows 2000
	
	- Windows 98
	
	- Windows 95 with Internet Explorer 4.x or higher installed
	
	
	Additional query words: advpack.dll, error, fail, setup
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
