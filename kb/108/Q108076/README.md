---
layout: page
title: "Q108076: 3Com Etherlink 16 Network Adapter Unstable in Turbo Mode"
permalink: /kb/108/Q108076/
---

## Q108076: 3Com Etherlink 16 Network Adapter Unstable in Turbo Mode

{% raw %}

	Article: Q108076
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the 3Com Etherlink 16 network adapter card is set to Turbo, the network
	card may not function correctly with Windows for Workgroups 3.11.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use the 3Com Etherlink 16 network adapter card
	diagnostics setup utility to reset the data mode on the network adapter card to
	Standard.
	
	To change this setting, use the following steps:
	
	1. Place the Etherdisk configuration disk in your floppy disk drive.
	
	2. Type the following
	
	  <drive letter>:setup
	
	  where <drive letter> is the letter of the drive containing the Etherdisk
	  configuration disk.
	
	3. Type "menu" (without the quotation marks) and press ENTER. From this menu,
	  choose Diagnostics Program.
	
	4. Select "Run Diagnostic and Configuration Program" (number 1).
	
	5. Select Set Configuration and press ENTER.
	
	6. Press Y to change the configuration settings.
	
	7. Scroll down to Data Mode and press ENTER.
	
	8. Select Standard and press ENTER, then press ENTER again to save the new
	  settings.
	
	9. Press any key other than ENTER to return to the main menu.
	
	Further questions about these steps should be directed to 3Com Corporation
	Technical Support.
	
	The 3Com Etherlink 16 network adapter card is manufactured by 3Com, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	REFERENCES
	==========
	
	"3Com Etherlink 16 Adapter Guide" (3Com part number 6847-01)
	
	Additional query words: 3.11 3 three com 3C507 settings 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
