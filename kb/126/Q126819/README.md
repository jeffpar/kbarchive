---
layout: page
title: "Q126819: MSD 2.11 Does Not Print the Report You Selected"
permalink: /kb/126/Q126819/
---

## Q126819: MSD 2.11 Does Not Print the Report You Selected

	Article: Q126819
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are printing reports from Microsoft Diagnostics (MSD) version 2.11, the
	report that is printed is not the report you selected. For example, you select
	the AUTOEXEC.BAT report for printing, but the CONFIG.SYS report is printed
	instead. This also occurs when you print all the reports, but is not as
	noticeable because the reports are printed in sequence.
	
	CAUSE
	=====
	
	The memory browser report includes the AUTOEXEC.BAT report. This causes each
	subsequent report to move up one place in the report list.
	
	RESOLUTION
	==========
	
	To print reports from the AUTOEXEC.BAT report on, select the report before the
	report you want to print. The following table lists which report to select to
	print the report you want:
	
	  Report wanted   Report to select
	  --------------------------------
	  AUTOEXEC.BAT    MEMORY BROWSER
	  CONFIG.SYS      AUTOEXEC.BAT
	  SYSTEM.INI      CONFIG.SYS
	  WIN.INI         SYSTEM.INI
	  MSMAIL.INI      WIN.INI
	  PROTOCOL.INI    MSMAIL.INI
	
	Additional query words: 6.22
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	
