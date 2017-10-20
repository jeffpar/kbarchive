---
layout: page
title: "Q161066: Permissions on WWW Default File Creates Access Denied Error Msg."
permalink: /kb/161/Q161066/
---

## Q161066: Permissions on WWW Default File Creates Access Denied Error Msg.

{% raw %}

	Article: Q161066
	Product(s): Internet Information Server
	Version(s): Winnt:1.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Internet Information Server (IIS) administrator sets file permissions on
	the predefined default file in a WWW publication directory, a client browser may
	get an access denied error, without the opportunity to provide validation.
	
	CAUSE
	=====
	
	If an IIS 1.0 administrator applies permissions to the default file in a WWW
	publication directory when a browser executes a URL (for example,
	HTTP://myserver), the browser may receive an access denied without returning a
	logon dialog request. If the full URL is provided to the default file (for
	example, HTTP://myserver/default.htm), the browser will return a logon dialog
	request.
	
	WORKAROUND
	==========
	
	Set the appropriate user permissions on the specific WWW publication Directory,
	as well as the default file within the directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 1.0. This problem has been fixed in Internet Information Server
	version 2.0.
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis100
	Version           : Winnt:1.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
