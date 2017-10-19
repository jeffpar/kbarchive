---
layout: page
title: "Q178105: Using &quot;Winnt.exe /e&quot; Command May Interfere with ZAK Setup"
permalink: /kb/178/Q178105/
---

## Q178105: Using &quot;Winnt.exe /e&quot; Command May Interfere with ZAK Setup

	Article: Q178105
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JAN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zero Administration Kit for Windows NT Workstation 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows NT Setup (Winnt.exe) program with the /e switch to set
	up a Zero Administration Kit (ZAK) Appstation or Taskstation, file restrictions
	may not be properly applied to the computer.
	
	CAUSE
	=====
	
	This behavior can occur when the process called by the /e switch causes the
	Zakboot1.cmd file to be run before the first reboot during ZAK Setup. As a
	result, the Cacls.exe program may not run and may not apply the file
	restrictions to the computer.
	
	RESOLUTION
	==========
	
	To work around this issue, use a batch file to run your program during ZAK
	Setup. To do so, follow these steps:
	
	1. Create a batch file to run your external program.
	
	2. Configure the Zakboot1.cmd file to run your batch file before processing the
	  SHUTDOWN command. For example, place the following command on the line above
	  the SHUTDOWN command in the Zakboot1.cmd file:
	
	        cmd /c %SystemRoot%\\<your_batchfile.cmd>
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTWsearch kbAudDeveloper kbZAWNTW400
	Version           : WINDOWS:4.0
	
	=============================================================================
	
