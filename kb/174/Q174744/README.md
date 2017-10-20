---
layout: page
title: "Q174744: XADM: Counter Increases While Propagating Permissions"
permalink: /kb/174/Q174744/
---

## Q174744: XADM: Counter Increases While Propagating Permissions

{% raw %}

	Article: Q174744
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In the Microsoft Exchange Administrator program, when you are changing user
	rights for a group of public folders and you select the Propagate These
	Properties to All Subfolders option on the General tab, a progress indicator
	counts from 0 to the number of folders. The following message is displayed
	during this process:
	
	  xxx folders to be processed. This could take some time (where xxx is a
	  counter)
	
	The counter increases from 0 to total number of folders, whereas the expected
	behavior would be a counter that decrements.
	
	MORE INFORMATION
	================
	
	This is by design. When this message is being displayed, the subfolders are
	being counted, which is why the number is increasing.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	
	=============================================================================
	

{% endraw %}
