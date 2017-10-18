---
layout: page
title: "Q86150: PROFS: Definition of XEDIT, How to Find Help Using It"
permalink: kb/086/Q86150/
---

## Q86150: PROFS: Definition of XEDIT, How to Find Help Using It

	Article: Q86150
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	XEDIT is the standard file editing program available to VM/CMS users on the
	mainframe. It is spawned by many of the Microsoft Mail Host Access component
	programs, and the VM administrator can also use it to edit configuration files
	manually.
	
	To edit a file with XEDIT, type:
	
	  " XEDIT <fn> <ft> <fm> " (without the quotation marks)
	
	where <fn> is the filename, <ft> is the file type, and <fm> is
	the file mode. For example, to edit the file PWANODES DATA on the gateway's 191
	A disk, you would type the following, then press ENTER:
	
	  " XEDIT PWANODES DATA A " (without the quotation marks)
	
	When XEDIT opens the file, a list of the PF key commands is displayed at the
	bottom of the screen. To get further help for the XEDIT program, type "HELP
	XEDIT" (without the quotation marks) at the CMS prompt.
	
	Additional query words: 3.20 pcmail profsvm XEDIT
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320
	Version           : :3.2
	
	=============================================================================
	
