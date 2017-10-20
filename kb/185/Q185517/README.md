---
layout: page
title: "Q185517: AOE: Connection Type Dialog Box Does Not Include Zone.com"
permalink: /kb/185/Q185517/
---

## Q185517: AOE: Connection Type Dialog Box Does Not Include Zone.com

{% raw %}

	Article: Q185517
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv aoe kbimu msgame
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to play Age of Empires with other players, the MSN Gaming Zone
	may not appear in the Connection Type dialog box on the Multiplayer Connection
	screen.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Use Registry Editor to open the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Games\Age of Empires\1.00
	
	2. On the Edit menu, point to New, and then click String Value.
	
	3. Type "Zone" (without the quotation marks), and then press ENTER.
	
	4. Double-click the Zone string value.
	
	5. In the Edit String dialog box, type the following line in the Value Data box,
	  and then click OK:
	
	  http://www.zone.com/asp/aoferedir.asp
	
	6. Quit Registry Editor, and then restart the computer.
	
	Additional query words: 1.00 msgame aoe ageofempires ages ror rise of rome expansion pack msngz
	
	======================================================================
	Keywords          : kbenv aoe kbimu msgame 
	Technology        : kbHomeProdSearch kbAOE kbGamesSearch kbZNotKeyword kbAOESearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
