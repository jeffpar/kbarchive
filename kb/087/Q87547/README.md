---
layout: page
title: "Q87547: BUG: Warning Level Disabled After Selecting Processor"
permalink: /kb/087/Q87547/
---

## Q87547: BUG: Warning Level Disabled After Selecting Processor

	Article: Q87547
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:2.0,2.1.49
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 2.0, 2.1.49 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Programmer's WorkBench (PWB), if the arrow for the Processor option is
	selected once then selected again to close it without selecting a processor,
	clicking on the arrow for the Warning Level option will no longer display the
	options for the warning level. It is as if the Warning Level option is disabled.
	
	RESOLUTION
	==========
	
	To allow the Warning Level to be set again, input focus needs to be switched in
	one of the following ways:
	
	- Clicking in the text entry field of any other menu.
	
	-or-
	
	- Opening any menu, other than the Processor menu and the Warning level menu.
	
	-or-
	
	- Pressing TAB or SHIFT+TAB to move focus to the menu before or after the
	  Processor menu.
	
	-or-
	
	- Close the dialog box and re-open it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 2.00 StaticOverlay buglist2.1.49 buglist2.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB200DOS kbPWB2149DOS
	Version           : MS-DOS:2.0,2.1.49
	
	=============================================================================
	
