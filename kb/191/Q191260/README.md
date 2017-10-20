---
layout: page
title: "Q191260: Dr. Watson Error When Adding New Printer on Spanish Windows NT"
permalink: /kb/191/Q191260/
---

## Q191260: Dr. Watson Error When Adding New Printer on Spanish Windows NT

{% raw %}

	Article: Q191260
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An access violation occurs when adding any new printer with the Printers folder
	in Control Panel, or with the Add Printer Wizard. This will occur on the Spanish
	version of Windows NT 4.0 Service Pack 3 with Internet Explorer 4 installed.
	
	CAUSE
	=====
	
	When adding any new printer and the path from which Windows NT originally
	installs is not available, Windows prompts the user to insert the Windows NT
	compact disc. Because of a localization problem in Setupapi.dll installed by
	Internet Explorer 4, Explorer.exe will fail when prompting for the Windows NT
	compact disc.
	
	
	RESOLUTION
	==========
	
	To work around this problem, make sure the Windows NT installation files are
	available (the compact disc is in the drive) before adding a new printer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
