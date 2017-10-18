---
layout: page
title: "Q325871: PRB: Err Msg and Event 5149 When You Try to Start SNA Manager"
permalink: kb/325/Q325871/
---

## Q325871: PRB: Err Msg and Event 5149 When You Try to Start SNA Manager

	Article: Q325871
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbhis2000
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open the Microsoft Management Console (MMC) SNA Manager snap-in, you
	receive the following error message:
	
	  Communication with the servers has been lost. SNA Manager must be restarted.
	
	Additionally, an Event 5149 similar to the following is logged in the Application
	Event Log:
	
	  Event ID: 5149
	  Event Source: SNA Manage Agent
	  Description: Manage base error - error in accessing the domain table. The
	  local domain name is not valid
	
	CAUSE
	=====
	
	The problem occurs when the SNA Manage Client (Mngcli.exe) process tries to
	start without having received the startup parameters that it requires to start
	successfully. This behavior may occur when certain types of applications are run
	on the same computer that is running Host Integration Server 2000. Antivirus
	software and system monitoring software are examples of the types of
	applications that might affect how the SNA Manager Client process starts.
	
	
	RESOLUTION
	==========
	
	If the server computer that is running Windows NT or Windows 2000 is also
	running any third-party applications, try to determine if one of the
	applications is causing the problem by removing the applications one at a time.
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps:
	
	1. Open a command prompt.
	
	2. Change to the <SNA Root> directory.
	
	3. Run Snaexp.cmd from the command prompt.
	
	MORE INFORMATION
	================
	
	For additional information about other issues that are related to SNA Manager,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q296839 Administrator Client Fails to Open Subdomain in SNA Manager
	
	  Q321159 Event IDs 5125 and 5149 After You Start SNA Manager in Host
	  Integration Server 2000
	
	  Q323056 "Error Opening Sub-Domain" Error Message When You Open SNA Manager
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbhis2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
