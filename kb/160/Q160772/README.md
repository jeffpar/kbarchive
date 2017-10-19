---
layout: page
title: "Q160772: PRB: &quot;File does not exist&quot; Using FoxTools Functions"
permalink: /kb/160/Q160772/
---

## Q160772: PRB: &quot;File does not exist&quot; Using FoxTools Functions

	Article: Q160772
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling a function in the Foxtools library generates an Error 1 "Program
	<function name> does not exist."
	
	CAUSE
	=====
	
	Some FoxTools functions are not compiled with the complete name. For example,
	FxNewFolder() needs to be called as FxNewFolde(). To verify how a function
	should be called, load the FoxTools library and then look at the output of
	DISPLAY STATUS.
	
	RESOLUTION
	==========
	
	Drop appropriate letters from the functions name.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Load the appropriate version of Foxtools for the Macintosh. Foxtools.cfm is for
	PowerPCs only and Foxtools.slm is for both PPC and 68K Macintoshes.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Enter the following commands in the Command window:
	
	        SET LIBRARY TO HOME()+'FoxTools.slm'
	        ? FxNewFolder('macintosh hd:test') && Note Error
	        ? FxNewFolde('macintosh hd:test')
	
	Additional query words: vfoxmac kbdsd
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
