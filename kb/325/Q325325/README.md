---
layout: page
title: "Q325325: XADM: Setup Hangs When You Upgrade to Enterprise Edition"
permalink: /kb/325/Q325325/
---

## Q325325: XADM: Setup Hangs When You Upgrade to Enterprise Edition

{% raw %}

	Article: Q325325
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange, version 5.5, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to upgrade Microsoft Exchange Server 5.5 Standard Edition to
	Microsoft Exchange Server 5.5 Enterprise Edition on a Microsoft Windows
	2000-based computer, Setup may stop responding (hang) after approximately 30
	seconds.
	
	CAUSE
	=====
	
	This behavior may occur if one or more instances of the Xcopy.exe process are
	running.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use Task Manager to end the Xcopy.exe process. To do
	so, follow these steps:
	
	1. Press CTRL+ALT+DELETE, and then click Task Manager.
	
	2. Click the Processes tab.
	
	3. Click Xcopy.exe, and then click End Process.
	
	4. Repeat step 3 to end each instance of Xcopy.exe that is running on the
	  computer.
	
	5. Quit Task Manager.
	
	MORE INFORMATION
	================
	
	For additional information about how to upgrade Exchange Server Standard Edition
	to Enterprise Edition, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q170280 XADM: Upgrading From Exchange Server Standard Edition to the
	  Enterprise Edition
	
	For additional information about Task Manager, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q323527 HOW TO: Use Windows Task Manager in Windows 2000
	
	Additional query words: front page
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
