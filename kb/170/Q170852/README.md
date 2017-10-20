---
layout: page
title: "Q170852: Access Denied to Subdirectory w/ Windows NT Challenge/Response"
permalink: /kb/170/Q170852/
---

## Q170852: Access Denied to Subdirectory w/ Windows NT Challenge/Response

{% raw %}

	Article: Q170852
	Product(s): Internet Information Server
	Version(s): WinNT:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Windows NT Challenge/Response (NTLM) will fail to permit you access to
	a subdirectory if you do not have sufficient permissions to the root of the
	drive. However, if basic authentication is used, you can open the web page.
	
	
	WORKAROUND
	==========
	
	To work around this, use one of the following methods:
	
	- Grant sufficient permissions for the user in the root of the drive.
	
	- Upgrade to IIS 4.0, which fixes this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Microsoft Internet Information
	Server version 3.0.
	
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300
	Version           : WinNT:3.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
