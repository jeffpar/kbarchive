---
layout: page
title: "Q81356: BUG: QuickHelp /t Option Is Not Implemented"
permalink: /kb/081/Q81356/
---

## Q81356: BUG: QuickHelp /t Option Is Not Implemented

{% raw %}

	Article: Q81356
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.7,1.83
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft QuickHelp for MS-DOS, versions 1.7, 1.83 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Microsoft QuickHelp Utility versions 1.7 and 1.83, the /t command
	line option does not work correctly. This option allows the user to directly
	paste the Help information requested into the specified paste file. However, the
	option has not been implemented.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in QuickHelp versions 1.7 and 1.83.
	We are researching this problem and will post new information here as it becomes
	available.
	
	MORE INFORMATION
	================
	
	To duplicate this problem, enter the following command at the command prompt:
	
	  " QH /t printf " (without the quotation marks)
	
	This should copy the Help screen for printf into the default paste file (PASTE.QH
	in the directory that the TMP environment variable is pointing to). However,
	when viewing that directory, the file will not exist (this file will not be
	changed if it already existed in that directory).
	
	Additional query words: QH quick help
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbQBASICSearch kbQuickHelpSearch kbQuickHelp170DOS kbQuickHelp183DOS
	Version           : MS-DOS:1.7,1.83
	
	=============================================================================
	

{% endraw %}
