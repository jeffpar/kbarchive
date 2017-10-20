---
layout: page
title: "Q100427: BUG: R6003 Error Possible From TOOLS.INI Filetab, SHIFT+F4"
permalink: /kb/100/Q100427/
---

## Q100427: BUG: R6003 Error Possible From TOOLS.INI Filetab, SHIFT+F4

{% raw %}

	Article: Q100427
	Product(s): Microsoft Programming Utilities
	Version(s): 2.0,2.1.49
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 2.0, 2.1.49 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to debug an application may fail and Programmer's WorkBench (PWB) may
	display a "run-time error R6003 - integer divide by 0" error when the following
	two conditions are true:
	
	- The [PWB] section of the TOOLS.INI file contains a "filetab 3" statement.
	
	- Immediately after building a project, you press SHIFT+F4 to run the
	  _pwbprevmsg macro to search for errors in the build.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Programmer's WorkBench versions
	2.0 and 2.1.49 for MS-DOS. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For more information on changing PWB settings in your TOOLS.INI file, please
	refer to page 130 (section 6.6) of the "Environment and Tools" manual.
	
	For more information on the PWB filetab setting, please refer to page 282 of the
	"Environment and Tools" manual.
	
	Additional query words: 2.00 2.01.49 buglist2.00 buglist2.01.49 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB200DOS kbPWB2149DOS
	Version           : :2.0,2.1.49
	
	=============================================================================
	

{% endraw %}
