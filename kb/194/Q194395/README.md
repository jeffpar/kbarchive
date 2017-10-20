---
layout: page
title: "Q194395: Windows NT Option Pack Installation Fails on Terminal Server 4.0"
permalink: /kb/194/Q194395/
---

## Q194395: Windows NT Option Pack Installation Fails on Terminal Server 4.0

{% raw %}

	Article: Q194395
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install the Windows NT Option Pack and Internet Information
	Server 4.0 (IIS) on Windows Terminal Server 4.0, the installation does not work
	properly.
	
	CAUSE
	=====
	
	By default, Windows Terminal Server installs software for the current logged-in
	user only. Because IIS is a system service, this type of installation can cause
	a variety of errors from setup failures to lost files or documentation.
	
	This behavior is by design.
	
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q190157 Support for Windows NT 4.0 Option Pack on Terminal Server
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
