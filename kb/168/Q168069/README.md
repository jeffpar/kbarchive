---
layout: page
title: "Q168069: Cannot Change Time Style Setting"
permalink: kb/168/Q168069/
---

## Q168069: Cannot Change Time Style Setting

	Article: Q168069
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg win95
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to change the Time Style setting on the Time tab in the
	Regional Settings tool in Control Panel, you may receive the following error
	message:
	
	  One or more of the characters that you typed in this field are invalid. Try
	  typing different characters.
	
	CAUSE
	=====
	
	This behavior can occur when the International registry key is missing or
	damaged.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this problem, use Registry Editor to delete the International key
	if it exists under the following registry key:
	
	  HKEY_CURRENT_USER\Control Panel
	
	After removing the International key, re-create the International string value,
	quit Registry Editor, and then restart the computer.
	
	The international settings will be set to the default when you restart the
	computer, and you should then be able to change the time style setting.
	
	Additional query words: appearance
	
	======================================================================
	Keywords          : kbenv kberrmsg win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
