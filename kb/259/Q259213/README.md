---
layout: page
title: "Q259213: XCLN: Journaling Configured, No Data in Outlook 97 &amp; Outlook 98"
permalink: /kb/259/Q259213/
---

## Q259213: XCLN: Journaling Configured, No Data in Outlook 97 &amp; Outlook 98

{% raw %}

	Article: Q259213
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 
	- Microsoft Outlook 97 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you configure Outlook to use journaling, the journaling data is not stored
	in the Journal folder.
	
	CAUSE
	=====
	
	This issue can occur if the path for the Item Log File value or Outlook Item Log
	File value that is located in the following registry key
	
	  HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Outlook\Journal
	
	is not a path to an available folder location in the operating system file
	structure.
	
	For example, if the Item Log File value or Outlook Item Log File path is C:\Winnt
	on a Microsoft Windows 98 system, this issue occurs.
	
	RESOLUTION
	==========
	
	To resolve this issue, modify the path in the Item Log File or Outlook Item Log
	File value to an accessible path in the operating system structure:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the Item Log File or Outlook Item Log File value under the following
	  key in the registry:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Outlook\Journal
	
	3. On the Edit menu, click String, type an accessible path in the operating
	  system structure, and then click OK.
	
	4. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	If you delete of the following registry key
	
	  HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Outlook\Journal
	
	and then restart the client, the key is recreated with an accessible path.
	
	Additional query words: OL97, OL98
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:; :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
