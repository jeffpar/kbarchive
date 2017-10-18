---
layout: page
title: "Q215014: SMS: APM16 Does Not Run Batch File Without Extension in Cmd Line"
permalink: kb/215/Q215014/
---

## Q215014: SMS: APM16 Does Not Run Batch File Without Extension in Cmd Line

	Article: Q215014
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 21-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a 16-bit operating system, such as Microsoft Windows for Workgroups
	3.11, the Advertised Program Monitor (APM) will not be able to run a batch
	command correctly unless an extension (.bat) is added to the command line. This
	happens with both Windows NT 16-bit clients and Novell NetWare 16-bit clients.
	
	CAUSE
	=====
	
	APM16svc.dll does the actual work of running an application selected by the
	Advertised Programs Monitor Wizard. After you select the application to run, it
	checks to see if the first token in the command line has an extension of ".bat";
	if it does, it always maps the path to a temporary drive letter and builds a new
	command line by prepending the original command line with "c:\command.com /c"
	(wherever Command.com is). The command line fails because the temporary drive
	mapping is not passed to the MS-DOS Command.com environment.
	
	MORE INFORMATION
	================
	
	This is by design. By default, Systems Management Server 2.0 handles the .exe
	type of file; there is no way to handle both .exe and .bat by default in the a
	16-bit operating system environment. To make sure that everything works
	correctly, file extensions should be placed on all package command lines,
	regardless of type, for both 16-bit and 32-bit clients.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
