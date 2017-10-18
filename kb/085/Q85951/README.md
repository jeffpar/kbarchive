---
layout: page
title: "Q85951: BUG: &quot;Help on Topic Not Found&quot; for Win API with PWB 2.0"
permalink: kb/085/Q85951/
---

## Q85951: BUG: &quot;Help on Topic Not Found&quot; for Win API with PWB 2.0

	Article: Q85951
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
	
	When using the Microsoft Programmer's WorkBench (PWB) version 2.0 to view the
	Windows API help, some of the hyperlinks don't find their associated topics.
	
	When you first choose Contents from the Help menu and then select Windows API,
	the entire top line is highlighted. Clicking any area of the line brings up the
	following message box
	
	  Help on topic not found:
	  <Function Groups>
	
	followed by a second message box:
	
	  Cannot process context
	
	Also, these message boxes may appear for other topics under the Windows API
	category when they are selected. For example, topics Database Version and
	Alphabetical Functions also cause these message boxes.
	
	RESOLUTION
	==========
	
	Although viewing all the topics in the Windows API category with PWB version 2.0
	is not currently supported, the QuickHelp (QH.EXE) utility can be used to view
	this information. To run QuickHelp, select the "C/C++ 7.0 Reference" icon from
	the program group created by the C/C++ Setup program, or run the utility from
	the MS-DOS command line by typing "qh" (without the quotation marks).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Programmer's WorkBench
	version 2.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: Quick Help 2.00 2.1.49 buglist2.00 buglist2.1.49
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB200DOS kbPWB2149DOS
	Version           : MS-DOS:2.0,2.1.49
	
	=============================================================================
	
