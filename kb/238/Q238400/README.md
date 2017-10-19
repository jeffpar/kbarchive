---
layout: page
title: "Q238400: WD97: Unable to Access Spelling Checker Using Terminal Server"
permalink: /kb/238/Q238400/
---

## Q238400: WD97: Unable to Access Spelling Checker Using Terminal Server

	Article: Q238400
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When Microsoft Word 97 is installed on Windows NT Terminal Server, users may be
	unable to access the spelling checker. (It appears dimmed or grayed out on the
	Tools menu.)
	
	
	CAUSE
	=====
	
	Access rights are not set up up correctly in Terminal Server.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this problem, the Terminal Server network administrator can edit the
	registry and give full Access rights to the Everyone group for Proofing Tools by
	using the following steps:
	
	1. On the Start menu, click Run.
	
	2. In the Open box, type "regedit32" (without the quotation marks) and then
	  click OK.
	
	3. Locate the following registry key:
	
	  HKLM\Software\Microsoft\Shared Tools\Proofing Tools
	
	4. On the Security menu, click Permissions.
	
	5. Click the Everyone Group.
	
	6. Under Type of Access, choose Full access rights.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
