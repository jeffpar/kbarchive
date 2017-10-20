---
layout: page
title: "Q295297: PRB: Err Msg: 0x80004005: General Error Unable to Open Reg Key"
permalink: /kb/295/Q295297/
---

## Q295297: PRB: Err Msg: 0x80004005: General Error Unable to Open Reg Key

{% raw %}

	Article: Q295297
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access a page that connects to an Access database, you may receive the
	following error message in the browser:
	
	  Microsoft OLE DB Provider for ODBC Drivers (0x80004005)[Microsoft][ODBC
	  Microsoft Access Driver]General error Unable to open registry key 'Temporary
	  (volatile) Jet DSN for process 0x614 Thread 0x6c0 DBC 0x21dd07c Jet'.
	  (FileName), (LineNumber)
	
	CAUSE
	=====
	
	The account that is being used to access the page does not have access to the
	HKEY_LOCAL_MACHINE\SOFTWARE\ODBC registry key.
	
	RESOLUTION
	==========
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Select the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\ODBC
	
	3. On the Security menu, click Permissions.
	
	4. Type the required permissions for the account that is accessing the Web page.
	
	5. Quit Registry Editor.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q183060 INFO: Troubleshooting Guide for 80004005 and Other Error Messages
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
