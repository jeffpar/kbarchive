---
layout: page
title: "Q320235: SMS: Components Change to Install Pending After Service Restart"
permalink: kb/320/Q320235/
---

## Q320235: SMS: Components Change to Install Pending After Service Restart

	Article: Q320235
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbtool kbui kbConfig kbSecurity kbsms200
	Last Modified: 22-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the SMS 2.0 client components on a Microsoft Windows
	2000-based member server or workstation, some of the client components may
	change to "Install Pending" after the 23 hour CCIM cycle, or after you restart
	the SMS Client service. The following components may be affected:
	
	- Software Distribution Agent
	
	- Software Inventory Agent
	
	The Clisvc.log file may contain the following error entry:
	
	  ***ERROR: Unable to launch
	  "C:\WINNT\MS\SMS\clicomp\SWDist32\bin\ODPUSR32.exe " - Error : 1314
	  *** WNet User Groups Offer Data Provider - Error launching (#0x3EB)
	  !!!WARNING: Problem starting App (1003). Doing App Verify.
	
	CAUSE
	=====
	
	This behavior may occur if a domain security policy restricts a required
	privilege of the local SMSCliSvcAcct& account on the SMS client computer.
	For example, "Replace process level token" may cause this behavior.
	
	WORKAROUND
	==========
	
	To work around this behavior, add the required security rights to the domain
	security policy for the SMSCliSvcAcct& account.
	
	MORE INFORMATION
	================
	
	Error 1314 is "A required privilege is not held by the client."
	
	The local security policy requirements for the SMSCliSvcAcct& account are:
	
	- Act as part of the operating system.
	
	- Increase the quotas.
	
	- Logon as a service.
	
	- Replace a process-level token.
	
	- Turn off the computer.
	
	Note that the SMSCliSvcAcct& account should also be a part of the local
	administrators group on the SMS client computer.
	
	For additional information about a related topic, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q295771 Restricted Group Policy Prevents SMS Client Installation
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbui kbConfig kbSecurity kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
