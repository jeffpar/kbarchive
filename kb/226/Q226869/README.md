---
layout: page
title: "Q226869: SMS: Cannot License Programs That Specify ANY for Language/Time"
permalink: kb/226/Q226869/
---

## Q226869: SMS: Cannot License Programs That Specify ANY for Language/Time

	Article: Q226869
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a program is licensed and ANY is specified in either the time zone or
	language categories, the record becomes mutually exclusive. This means that any
	other instance of the same product cannot be tracked for another time zone or
	language.
	
	WORKAROUND
	==========
	
	To work around this issue, explicitly enter each combination of time zone and
	language.
	
	For example:
	
	+-------------------------------------------+
	| Program  | Version | Language | Time Zone | 
	+-------------------------------------------+
	| Calc.exe | 4.00    | English  | Eastern   | 
	+-------------------------------------------+
	| Calc.exe | 4.00    | German   | Pacific   | 
	+-------------------------------------------+
	| Calc.exe | 4.00    | German   | Eastern   | 
	+-------------------------------------------+
	|          |         |          |           | 
	+-------------------------------------------+
	|          |         |          |           | 
	+-------------------------------------------+
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
