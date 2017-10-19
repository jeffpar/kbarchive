---
layout: page
title: "Q200002: SMS: Ismif16.exe From Command Line Allows No Spaces In Field"
permalink: /kb/200/Q200002/
---

## Q200002: SMS: Ismif16.exe From Command Line Allows No Spaces In Field

	Article: Q200002
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When running Ismif16.exe from the Command line using switches to specify the
	field data, including spaces in the field data, the first quote and everything
	up to the first space are put into the contents of the field. The data after the
	first space is thought to be the start of a new switch and will be ignored. All
	subsequent switches will also be ignored.
	
	For example, enter the Command line:
	
	  Ismif16.exe -c "Microsoft" -f "My program" -d "Description"
	
	- The field contents for company (-c) will appear as: "Microsoft"
	
	- The field contents for filename (-f) will appear as: "My
	
	- Ismif16 will think that program is the next switch, which is not valid, and
	  ignore it and everything after it.
	
	- The field contents for description (-d) will be blank even though it's in the
	  correct format.
	
	The same behavior is seen with the -f, -c, -p, -v, -n, and -d. The Command line
	argument parsing functionality of Ismif16.exe does not accommodate spaces.
	Either use the Ismif16.exe GUI to enter the data or do not use spaces in the
	field description at the command line.
	
	MORE INFORMATION
	================
	
	The Ismif32.exe utility does not have this issue.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbinfo
	Solution Type     : kbpending
	
	=============================================================================
	
