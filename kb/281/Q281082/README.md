---
layout: page
title: "Q281082: Encarta: DVD Player Starts When You Insert the Encarta DVD-ROM"
permalink: /kb/281/Q281082/
---

## Q281082: Encarta: DVD Player Starts When You Insert the Encarta DVD-ROM

{% raw %}

	Article: Q281082
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbimu
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Reference Suite 2001 
	- Microsoft Encarta Reference Suite 99 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you insert a Microsoft Encarta 2001 DVD-ROM into your DVD-ROM drive, a DVD
	player may start instead of Encarta 2001.
	
	CAUSE
	=====
	
	This behavior can occur if the value data for the NoDriveTypeAutoRun value in
	the Windows Registry is incorrect.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, edit the following registry key to use the following value
	and value data:
	
	  HKEY_CURRENT_USER/Software/Microsoft/Windows/Currentversion/policies/explorer
	
	Value: NoDriveTypeAutoRun
	Value data: 95 00 00 00
	
	Additional query words: ers2001 autorun autoplay launch
	
	======================================================================
	Keywords          : kbenv kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaReference99 kbEncartaReference2001
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
