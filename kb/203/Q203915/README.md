---
layout: page
title: "Q203915: &quot;Send To&quot; Command Missing When You Right-Click a File or Folder"
permalink: /kb/203/Q203915/
---

## Q203915: &quot;Send To&quot; Command Missing When You Right-Click a File or Folder

{% raw %}

	Article: Q203915
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you right-click a file or folder, the Send To command may be missing.
	
	CAUSE
	=====
	
	This issue can occur if the following registry key is damaged or missing:
	
	HKEY_CLASSES_ROOT\AllFileSystemObjects\Shellex\ContexMenuHandlers\Send To
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, verify that the "default" value with a data value of
	"(7BA4C740-9E81-11CF-99D3-00AA004AE837)" exists in the following registry key:
	
	HKEY_CLASSES_ROOT\AllFileSystemObjects\Shellex\ContexMenuHandlers\Send To
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
