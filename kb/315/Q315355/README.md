---
layout: page
title: "Q315355: Creating a Certificate Request Causes An Internal Error to Occur"
permalink: /kb/315/Q315355/
---

## Q315355: Creating a Certificate Request Causes An Internal Error to Occur

{% raw %}

	Article: Q315355
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you are generating a certificate request for use with Secure Sockets Layer
	(SSL) by using the Certificate Request Wizard in Internet Information Services
	(IIS) 5.0, an internal server error may occur and you receive the following
	error message when the wizard completes:
	
	  Certificate Request Failed. An Internal Error Occurred.
	
	CAUSE
	=====
	
	This problem occurs because the Crypto subsystem is corrupt.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this problem:
	
	1. Click Start, click Run, and then type "regedit" (without the quotation marks)
	  to start Registry Editor.
	
	2. Locate the following registry key:
	
	  HKEY_USERS\Default\Software\Microsoft\Cryptography\Providers\Type 001
	
	3. Click the Providers registry key, and then on the Registry menu, click Export
	  Registry File. Choose a location in which to save this file for backup
	  purposes.
	
	4. After you have exported the registry key, delete the Type 001 registry key.
	
	5. Quit Registry Editor.
	
	6. Restart the server.
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Windows 2000.
	
	
	
	Additional query words: iis5 certificate request wizard internal error failed
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
