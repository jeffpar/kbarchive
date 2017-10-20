---
layout: page
title: "Q107815: NET START FULL Invokes Intel SatisFAXtion Fax Popup"
permalink: /kb/107/Q107815/
---

## Q107815: NET START FULL Invokes Intel SatisFAXtion Fax Popup

{% raw %}

	Article: Q107815
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the SatisFAXtion Fax Popup utility (FAXPOP) is loaded in your AUTOEXEC.BAT
	file, the NET START FULL command invokes that utility. Pressing the ESC key to
	cancel it returns you to the MS-DOS command prompt. The NET START FULL command
	then proceeds to run.
	
	CAUSE
	=====
	
	The SatisFAXtion Fax Popup utility is a terminate-and-stay-resident program that
	allows you to send faxes from any MS-DOS-based application (such as MS- DOS
	Editor or MS-DOS Shell). When NET START FULL is run, FAXPOP traps it and
	executes its own fax-sending utility.
	
	WORKAROUND
	==========
	
	At this time, the only way to work around this problem is to remove FAXPOP from
	your AUTOEXEC.BAT file.
	
	NOTE: Changing IRQs or I/O addresses does not correct this problem.
	
	MORE INFORMATION
	================
	
	Intel SatisFAXtion is manufactured by Intel, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.11 3rdparty popup cas board
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
