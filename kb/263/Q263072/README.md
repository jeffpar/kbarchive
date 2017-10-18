---
layout: page
title: "Q263072: XCON: Err. Installing Internet Mail Service w. Terminal Services"
permalink: kb/263/Q263072/
---

## Q263072: XCON: Err. Installing Internet Mail Service w. Terminal Services

	Article: Q263072
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install the Internet Mail Service for Exchange Server 5.5 Service Pack
	3 on a Windows 2000 Terminal Services computer, you may receive the following
	error message when the Internet Mail Wizard begins to install services and
	modify the registry:
	
	  Self registration of the DLL C:\Documents and
	  Settings\Administrator\WINDOWS\system32\cdonts.dll failed : 0d.
	
	When you click OK, you receive the following error message:
	
	  Processing file 'C:\EXCHSRVR\bin\cdo.ins,' at or near line 7
	  The specified module could not be found.
	  Microsoft Windows NT
	  ID no: 0xc002007e
	
	When you click OK, you may receive the following error message:
	
	  Processing file 'C:\EXCHSRVR\bin\smtp.uns', at or near line 27
	  The system cannot find the file specified.
	  Microsoft Windows NT
	  ID no: 0xc0020002
	
	CAUSE
	=====
	
	This issue can occur because the Internet Mail Service cannot register the
	necessary dynamic-link libraries (DLLs) when the server is running Terminal
	Services in execute mode.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. At a command prompt, type "change user /install" (without the quotation
	  marks) to change Terminal Services to installation mode. The following
	  message is displayed:
	
	  User session is ready to install applications.
	
	2. Start the Internet Mail Wizard and make sure that the Internet Mail Service
	  is installed successfully.
	
	3. At a command prompt, type "change user /execute" (without the quotation
	  marks) to change Terminal Services to execute mode. The following message is
	  displayed:
	
	  User session is ready to execute applications.
	
	MORE INFORMATION
	================
	
	For additional information about how to install applications on a Windows 2000
	Terminal Server computer that is running in application server mode, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q248340 Installing and Using Programs in Windows 2000 Terminal Services
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
