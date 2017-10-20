---
layout: page
title: "Q175530: Windows Computer Is Unable to View a Network Share"
permalink: /kb/175/Q175530/
---

## Q175530: Windows Computer Is Unable to View a Network Share

{% raw %}

	Article: Q175530
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbnetwork kbui win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to view a network share using a Windows 95 or Windows 98-based
	computer, you may be unable to do so. Also, if you try to use the NET VIEW
	command to view a network share, you may receive the following error message:
	
	  Error 234: Additional data is available
	
	CAUSE
	=====
	
	This behavior can occur because Windows 95/98 is unable to recognize a network
	share name of more than 12 characters in length.
	
	RESOLUTION
	==========
	
	To work around this problem, rename any network shares you want to view to 12
	characters or less. For information about how to do this, click Start, click
	Help, type "renaming" (without quotation marks), click Folders, and then click
	Display.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95/98.
	
	Additional query words: 98
	
	======================================================================
	Keywords          : kbnetwork kbui win95 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
