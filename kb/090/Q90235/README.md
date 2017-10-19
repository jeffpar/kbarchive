---
layout: page
title: "Q90235: Pop-up Message Halts Printing and Causes Bad Print Jobs"
permalink: /kb/090/Q90235/
---

## Q90235: Pop-up Message Halts Printing and Causes Bad Print Jobs

	Article: Q90235
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	If you use the Windows for Workgroups or Workgroup Connections pop-up
	terminate and stay resident (TSR) program (started with the NET START POPUP
	command) while an MS-DOS-based application is printing to a redirected port
	(a print server), the print job may be halted. When you clear the pop-up
	dialog box, the print job resumes, often becoming garbled as the printer
	misinterprets the rest of the print job.
	
	Additional query words: 1.00 3.10 popup wc line lines box boxes junk garbage incomplete poor output corrupt character characters hang crash stop inconsistent freeze
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1; :1.0
	
	=============================================================================
	
