---
layout: page
title: "Q87927: FIX: Breakpoints, Watches Not Restored with Dual Monitor"
permalink: /kb/087/Q87927/
---

## Q87927: FIX: Breakpoints, Watches Not Restored with Dual Monitor

	Article: Q87927
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01,4.05
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 4.0, 4.01, 4.05 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft CodeView for MS-DOS versions 4.0, 4.01, and 4.05 do not restore
	breakpoints or watches between sessions when invoked with "/2" for dual monitor
	debugging. Normally, CodeView will restore all breakpoints and watches that were
	set from the last debugging session.
	
	CAUSE
	=====
	
	An invalid command for dual monitor debugging is listed in the CURRENT.STS file.
	When CodeView reads this invalid command, it discontinutes reading the rest of
	the status file.
	
	RESOLUTION
	==========
	
	Remove the following line from the CURRENT.STS file
	
	     COMMAND:OF+
	
	(turn screen swapping on). This option is not valid in dual-monitor mode. Since
	this option is written each time you exit CodeView, you will need to modify the
	CURRENT.STS file each time you invoke CodeView.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CodeView versions 4.0, 4.01, and
	4.05. This problem was corrected in CodeView version 4.1.
	
	MORE INFORMATION
	================
	
	CodeView stores the following information in the CURRENT.STS file between
	debugging sessions:
	
	  Window layout
	  Breakpoints
	  Watch expressions
	  Source, Local, and Memory display options
	  Global CodeView options such as case sensitivity and radix
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS
	Version           : :4.0,4.01,4.05
	Solution Type     : kbfix
	
	=============================================================================
	
