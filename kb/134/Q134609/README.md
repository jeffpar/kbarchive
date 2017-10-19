---
layout: page
title: "Q134609: Machview Err Msgs: &quot;Couldn't View...&quot; and &quot;Couldn't Execute...&quot;"
permalink: /kb/134/Q134609/
---

## Q134609: Machview Err Msgs: &quot;Couldn't View...&quot; and &quot;Couldn't Execute...&quot;

	Article: Q134609
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbusage kbdocerr smsdocerr
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One of the following error messages appears after you run the Systems Management
	Server Machview command:
	
	- Couldn't View Selected Object
	
	-or-
	
	- Couldn't Execute the Given Query
	
	CAUSE
	=====
	
	You used the incorrect command line syntax for the Machview command.
	
	The Machview command line help incorrectly documents the syntax as follows:
	
	  MACHVIEW machineid
	  MACHVIEW /Q architechure:group:attribute=value
	
	RESOLUTION
	==========
	
	Use the proper Machview command line syntax as follows:
	
	machview /q "Personal Computer:MICROSOFT|IDENTIFICATION|1.0:SMSID=<smsid>"
	
	where <smsid> is the SMSID of the client you want to query. This option is
	case sensitive and the quotation marks are required.
	
	For example, if Systems Management Server Administrator shows your computer SMSID
	as SMS0002, type the Machview command as follows:
	
	machview /q "Personal Computer:MICROSOFT|IDENTIFICATION|1.0:SMSID=SMS0002"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbusage kbdocerr smsdocerr 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
