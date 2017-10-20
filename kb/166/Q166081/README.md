---
layout: page
title: "Q166081: ASP Page Not Update Even if ASP File on UNC Virtual Dir. Changed"
permalink: /kb/166/Q166081/
---

## Q166081: ASP Page Not Update Even if ASP File on UNC Virtual Dir. Changed

{% raw %}

	Article: Q166081
	Product(s): Internet Information Server
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 30-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Active Server Pages (ASP) page will not update even if the ASP
	file on an UNC virtual directory has been changed. However, no problem exists if
	the ASP file is on a local drive.
	
	WORKAROUND
	==========
	
	Stop and start WWW service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server (IIS) version 3.0 and fixed in IIS 4.0.
	
	For additional information about the fix for IIS 4.0, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q281253 File Change Notifications Are Lost When Content Is on UNC Share
	
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbiisSearch kbiis400 kbiis300
	Version           : :3.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
