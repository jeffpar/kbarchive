---
layout: page
title: "Q134680: Mapped NetWare Drives Missing in My Computer"
permalink: /kb/134/Q134680/
---

## Q134680: Mapped NetWare Drives Missing in My Computer

{% raw %}

	Article: Q134680
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open My Computer, you may not see network drives that are mapped in
	your Novell NetWare login script.
	
	CAUSE
	=====
	
	This problem can occur if the network drives have drive letters higher than the
	drive letter specified in the "lastdrive=" statement in the Config.sys file.
	
	RESOLUTION
	==========
	
	Remove the "lastdrive=" statement from the Config.sys file, or change the line
	to read "lastdrive=Z."
	
	MORE INFORMATION
	================
	
	This behavior affects both the protected-mode Microsoft Client for NetWare
	Networks and the Novell NetWare real-mode VLM client.
	
	NOTE: The real-mode VLM client requires the "lastdrive=" statement in the
	Config.sys file.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
