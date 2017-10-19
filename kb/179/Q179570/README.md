---
layout: page
title: "Q179570: SQL Server Books Online Does Not Display Properly"
permalink: /kb/179/Q179570/
---

## Q179570: SQL Server Books Online Does Not Display Properly

	Article: Q179570
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Inside Microsoft SQL Server 6.5 ISBN 1-57231-331-5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run "SQL Server Books Online" from the Start menu, the
	Microsoft Info Viewer window appears. However, the window may be blank or may
	not include "SQL Server Books Online" as an option.
	
	CAUSE
	=====
	
	The shortcut to the SQL Server Books Online file installed to the Start menu
	does not give the correct location of the SQL Server Books Online file.
	Consequently, the Info Viewer program cannot find the SQL Server Books Online
	file.
	
	RESOLUTION
	==========
	
	To correct the shortcut, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. Type the following command, including quotation marks:
	
	  " "C:\Inside SQL Server\Sql Server Books Online\infoview.exe" sqlbooks.mvb "
	  (without the quotation marks)
	
	  Change the path to match the Inside SQL Server folder if necessary.
	
	The SQL Server Books Online will appear.
	
	NOTE: You need to perform these steps only once. Once you have performed these
	steps, the Start menu shortcut will work normally.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in "Inside Microsoft SQL Server
	Version 6.5." This problem will be corrected in future reprints and editions.
	
	
	Additional query words: 1-57231-331-5 devbook SQL65
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
