---
layout: page
title: "Q166082: ASP Page Not Update Even if File Included Is Changed"
permalink: /kb/166/Q166082/
---

## Q166082: ASP Page Not Update Even if File Included Is Changed

{% raw %}

	Article: Q166082
	Product(s): Internet Information Server
	Version(s): winnt:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Active Server Pages (ASP) page will not update even if the file
	included in it has been changed. However, no problem occurs if the file included
	in the ASP file is in the same virtual root as the ASP file.
	
	WORKAROUND
	==========
	
	Put the included files in the same virtual root as the ASP file. Included files
	and the ASP file can be in different subdirectories as long as they share the
	same virtual root.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 3.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis300
	Version           : winnt:3.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
