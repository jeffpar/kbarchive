---
layout: page
title: "Q67614: PWB Hyperlink in PWB.HLP is Inconsistent in Version 1.1"
permalink: /kb/067/Q67614/
---

## Q67614: PWB Hyperlink in PWB.HLP is Inconsistent in Version 1.1

{% raw %}

	Article: Q67614
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.1; OS/2:1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, version 1.1 
	- Microsoft Programmer's Workbench for OS/2, version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When selecting help on the Programmer's WorkBench (PWB) version 1.1 from the
	Categories menu in QuickHelp version 1.7, the help screen for Microsoft Advisor
	Help System is presented instead. This behavior may be duplicated by following
	the procedure outlined below:
	
	1. Start QuickHelp without an argument to get help on any topic. This will bring
	  up the main help screen.
	
	2. Select the Programmer's WorkBench choice under the Categories menu.
	
	Instead of bringing up the help screen for Programmer's WorkBench, you will see
	the screen for the Microsoft Advisor Help System.
	
	MORE INFORMATION
	================
	
	If the PWB.HLP help file is decoded using helpmake as follows
	
	  helpmake /D /T /Opwb.doc pwb.hlp
	
	we can see that the reason for this is that the .context directive for
	Programmer's WorkBench appears in the wrong section in the decoded help file.
	The following line
	
	  .context Programmer's Workbench
	
	appears above the section for "Microsoft Advisor Contents." To correct the
	problem, move the .context directive for Programmer's WorkBench to the proper
	section, which is the "Programmer's WorkBench Contents."
	
	The helpfile must then be recompressed, as follows:
	
	  helpmake /E7 /T /Opwb.hlp pwb.doc
	
	The choice of /E7 is shown here for demonstration purposes only, and is strictly
	arbitrary in this case. If maximum compression is desired, the numerical
	argument to the /E switch may be left off, or /E15 may be specified. Maximum
	compression will restore the database as close to its original size and state as
	possible.
	
	Additional query words: kbinf 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB110DOS kbPWB110OS2
	Version           : MS-DOS:1.1; OS/2:1.1
	
	=============================================================================
	

{% endraw %}
