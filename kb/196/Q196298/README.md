---
layout: page
title: "Q196298: Characters May Print Over Each Other When Using Print Server"
permalink: /kb/196/Q196298/
---

## Q196298: Characters May Print Over Each Other When Using Print Server

{% raw %}

	Article: Q196298
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Host print jobs printed through SNA Server's host print service may have
	overlapping characters. This may occur if the print session has been configured
	to use a specific font and if the print job consists of mostly uppercase
	characters.
	
	CAUSE
	=====
	
	When a print session is printing through the Microsoft Windows NT Graphic Device
	Interface (GDI), an {x,y} coordinate has to be passed to the GDI to indicate
	where it should start printing a string of data. Because uppercase characters
	are mostly wider than the average character width, the x- positions calculations
	can end up being too short. This results in printed output with overlapped
	characters.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft SNA Server, versions 3.0, 3.0 Service Pack 1, 3.0 Service Pack 2, 3.0
	Service Pack 3, 4.0, and 4.0 Service Pack 1. This problem was first corrected in
	SNA Server 3.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	After applying the update, add the following registry entry to change the way
	that the x-coordinate calculations are made to correct the overlapping problem.
	To add the registry entry, perform the following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaPrint\Parameters
	  NOTE: The above registry key is one path; it has been wrapped for
	  readability.
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	  Value Name: UseProportionalFontFix Data Type: REG_SZ Value: <any value>
	  NOTE: Any value can be used since this registry entry is enabled if it
	  exists.
	
	4. Quit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
