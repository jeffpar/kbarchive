---
layout: page
title: "Q148763: IIS Returns IP Address Instead of Host Name"
permalink: /kb/148/Q148763/
---

## Q148763: IIS Returns IP Address Instead of Host Name

{% raw %}

	Article: Q148763
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you connect to an Internet Information Server from any web browser, the
	Uniform Resource Location (URL) address that you enter changes. For example, the
	following URL address:
	
	  http://www.microsoft.com/devonly
	
	changes to the following:
	
	  http://198.105.232.5/devonly/
	
	CAUSE
	=====
	
	This problem occurs if you do not enter a trailing forward slash (/) to the end
	of the URL address. When the web browser sends the original address, the server
	responds by indicating that it has moved, along with the IP address of the site
	(which is itself).
	
	RESOLUTION
	==========
	
	To correct this problem, include a trailing forward slash (/) at the end of the
	URL address.
	
	Additional query words: prodiis path
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	

{% endraw %}
