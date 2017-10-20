---
layout: page
title: "Q99986: Err Msg Running MSD: Error: You Have Attempted to Run..."
permalink: /kb/099/Q99986/
---

## Q99986: Err Msg Running MSD: Error: You Have Attempted to Run...

{% raw %}

	Article: Q99986
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Microsoft Diagnostics (MSD.EXE) with Windows 3.0 in 386 enhanced
	mode, you receive the following message:
	
	  Error: You have attempted to run a protected-mode application in 386 enhanced
	  mode. To run the application, exit and run Windows using either the WIN /S or
	  the WIN /R command.
	
	WORKAROUND
	==========
	
	To work around this problem, create an icon for MSD with the following command
	line:
	
	  " c:\dos\msd.exe /i " (without the quotation marks)
	
	The /I switch bypasses the initial hardware (memory) detection.
	
	Additional query words: 6.22 6.00 6.20 2.00 2.01 2.01a
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
