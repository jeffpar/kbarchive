---
layout: page
title: "Q195858: SMS: Changes to the SMS Installer Parse String Function"
permalink: kb/195/Q195858/
---

## Q195858: SMS: Changes to the SMS Installer Parse String Function

	Article: Q195858
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0,2.0; winnt:2.0
	Operating System(s): 
	Keyword(s): kbsmsInst
	Last Modified: 21-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	- Microsoft Systems Management Server Installer versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Parse String action is used to break a string up into two pieces and insert
	those pieces into two new variables, Destination Variable 1 and Destination
	Variable 2. A parse token is used to indicate the position within the string
	where it should be split. Before build 35 of Systems Management Server Installer
	1.0, the parse token was not included in either variable. Due to customer
	requests, builds 35 and higher of the Systems Management Server Installer 1.0
	include the parse token on Destination Variable 2. However, this change to the
	parse string function may affect the behavior of scripts written before build
	35. For this reason, the original functionality of the Parse String action was
	restored in Systems Management Server Installer 2.0 builds 55 and higher.
	Systems Management Server Installer 2.0 adds an "Include Parse Token in
	destination variable 2" check box to the PARSE STRING function.
	
	MORE INFORMATION
	================
	
	The following are some examples:
	
	  Parse String in SMS Installer 1.0 builds 34 and lower
	  String:  C:\Program Files
	  Parse Token: \ 
	  Destination Variable 1 value: C:
	  Destination Variable 2 value: Program Files
	
	  Parse String in SMS Installer 1.0 and 2.0 builds 35 to 54
	  String:  C:\Program Files
	  Parse Token: \ 
	  Destination Variable 1 value: C:
	  Destination Variable 2 value: \Program Files
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsmsInst 
	Technology        : kbSMSSearch kbSMS200 kbSMSI100 kbSMSI200
	Version           : WINDOWS:1.0,2.0; winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
