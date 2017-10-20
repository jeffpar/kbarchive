---
layout: page
title: "Q233969: SSIEnableCmdDirective Is Set to FALSE by Default"
permalink: /kb/233/Q233969/
---

## Q233969: SSIEnableCmdDirective Is Set to FALSE by Default

{% raw %}

	Article: Q233969
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	In IIS 4.0, the SSIEnableCmdDirective registry property is set to TRUE by
	default. However, in IIS version 5.0, the default value of the
	SSIEnableCmdDirective registry property is set to FALSE. This value is set to
	FALSE to prevent running unauthorized server-side executables.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To set the value to TRUE or enable the SSI CMD directive, follow these steps:
	
	1. Start the Registry Editor (Regedit.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\W3SVC\Parameters
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click New, and then DWORD Value.
	
	4. Specify "SSIEnableCmdDirective" (without the quotation marks) for the name.
	
	5. Specify "1" (without the quotation marks) for the value.
	
	6. Close the Registry Editor.
	
	7. Restart IIS.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
