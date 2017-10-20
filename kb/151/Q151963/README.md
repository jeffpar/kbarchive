---
layout: page
title: "Q151963: CGI Scripts Must Use Full Directory Path"
permalink: /kb/151/Q151963/
---

## Q151963: CGI Scripts Must Use Full Directory Path

{% raw %}

	Article: Q151963
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	CGI scripts that manipulate files in directories other than where the CGI script
	is executed will not run correctly if the CGI script references virtual
	directory aliases rather than the full path to the file.
	
	CAUSE
	=====
	
	The Internet Information Server (IIS) CGI interface does not recognize virtual
	directory names.
	
	RESOLUTION
	==========
	
	For example, when you open a file, use the following:
	
	  c:\inetsrv\scripts\data\mycgidata.txt
	
	instead of the following:
	
	  /scripts/data/mycgi.txt.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 1.0. We are researching this problem and will post new
	information here as it becomes available.
	
	Additional query words: prodiis
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	

{% endraw %}
