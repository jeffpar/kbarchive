---
layout: page
title: "Q142918: Installing to Another Folder Is Not Fully Automated"
permalink: /kb/142/Q142918/
---

## Q142918: Installing to Another Folder Is Not Fully Automated

{% raw %}

	Article: Q142918
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
	
	When you upgrade to Windows 95 using a custom Msbatch.inf file to install
	Windows 95 in a folder other than the current Windows folder, the Setup process
	is not completely automated.
	
	CAUSE
	=====
	
	The Msbatch.inf file has a setting that is used to select the folder in which
	Windows 95 is installed. If a folder other than the current Windows folder is
	selected, you receive a message stating that installing Windows 95 in another
	folder requires you to reinstall all of your Windows-based programs.
	
	MORE INFORMATION
	================
	
	This behavior is by design. Because multiple installations of Windows 95 on a
	single computer is not supported, this feature is not included in an automated
	Setup using an Msbatch.inf file.
	
	Additional query words: sbs push
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
