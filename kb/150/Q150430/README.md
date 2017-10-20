---
layout: page
title: "Q150430: Batch.exe 2.0 from Service Pack 1 May Add Extra Commas"
permalink: /kb/150/Q150430/
---

## Q150430: Batch.exe 2.0 from Service Pack 1 May Add Extra Commas

{% raw %}

	Article: Q150430
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Batch Setup (Batch.exe) version 2.0 tool included with
	Microsoft Windows 95 Service Pack 1, extra commas may appear at the end of the
	"Services=" line in the [Network] section of your custom Setup script.
	
	Note that in some cases, the extra commas cause a Select Device dialog box to
	appear during Setup, prompting the user to select a network service from a list
	of manufacturers.
	
	CAUSE
	=====
	
	The Microsoft Client for NetWare Networks is enabled on the Available Clients
	tab in the network options, and specific settings for the Preferred Tree or Name
	Context have been entered for the NetWare Directory Service settings.
	
	RESOLUTION
	==========
	
	Use any text editor (such as Notepad) to remove the extra commas from the end of
	the "Services=" line in the [Network] section.
	
	MORE INFORMATION
	================
	
	Normally, extra commas do not impact an automated Setup. If a custom Setup
	script contains extra commas in the "Services=" line, however, a prompt appears
	during Setup.
	
	Additional query words: msbatch.inf
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
