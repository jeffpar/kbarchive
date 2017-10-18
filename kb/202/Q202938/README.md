---
layout: page
title: "Q202938: SMS: Unable to Perform Carriage Return in SQL Command Text Box"
permalink: kb/202/Q202938/
---

## Q202938: SMS: Unable to Perform Carriage Return in SQL Command Text Box

	Article: Q202938
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200bug
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to type multiline commands in the SQL Command text box of the SQL
	Command Properties dialog box and you press the ENTER key, it does not move the
	cursor to the next line.
	
	To open the SQL Command Properties dialog box in the Administrator console, go to
	the Site Database menu, click Site Hierarchy, click Site Code, click Database
	Maintenance, click SQL Commands, right-click New, click SQL Command, click the
	General tab, and click SQL Command Window.
	
	WORKAROUND
	==========
	
	Press CTRL+ENTER to move to the next line.
	
	Additional query words: prodsms SQL command
	
	======================================================================
	Keywords          : kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
