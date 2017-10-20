---
layout: page
title: "Q177076: How to Start the Add Printer Wizard at a Command Prompt"
permalink: /kb/177/Q177076/
---

## Q177076: How to Start the Add Printer Wizard at a Command Prompt

{% raw %}

	Article: Q177076
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbprint kbsetup win95
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to start the Add Printer wizard at a command prompt.
	
	MORE INFORMATION
	================
	
	To start the Add Printer wizard at a command prompt, follow these steps:
	
	1. Click Start, point to Programs, and then click MS-DOS Prompt.
	
	2. At the command prompt, type the following command, and then press ENTER:
	
	  " rundll32.exe sysdm.cpl,InstallDevice_Rundll printer " (without the
	  quotation marks)
	
	  NOTE: This command line is case sensitive. You should type the line exactly as
	  shown.
	
	======================================================================
	Keywords          : kbprint kbsetup win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
