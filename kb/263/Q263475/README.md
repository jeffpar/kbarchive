---
layout: page
title: "Q263475: MapPoint 2001: How to Clear Entries from the Find Box"
permalink: /kb/263/Q263475/
---

## Q263475: MapPoint 2001: How to Clear Entries from the Find Box

{% raw %}

	Article: Q263475
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv kbui kbimu
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2002 
	- Microsoft MapPoint 2001 
	- Microsoft Streets & Trips 2002, version 1.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article discusses how to clear entries from the Find box on the Navigation
	toolbar in Microsoft MapPoint 2001.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To clear entries from the Find box on the Navigation toolbar:
	
	1. Start Registry Editor.
	
	2. Open the following registry key:
	
	  MapPoint 2001
	  HKEY_CURRENT_USER\Software\Microsoft\MapPoint\8.0\FindMRU
	
	  MapPoint 2002
	  HKEY_CURRENT_USER\Software\Microsoft\MapPoint\9.0\FindMRU
	
	  Streets & Trips 2002
	  HKEY_CURRENT_USER\Software\Microsoft\Automap\9.0\FindMRU
	
	3. On the Edit menu, click Delete. When you are prompted to confirm the key
	  deletion, click Yes.
	
	4. Quit Registry Editor.
	
	Additional query words: mp2001 map point place address list empty
	
	======================================================================
	Keywords          : kbenv kbui kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbExpediaSearch kbMapptSearch kbMapPoint2001 kbExpediaStreets2002 kbMapPoint2002
	Version           : :1.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
