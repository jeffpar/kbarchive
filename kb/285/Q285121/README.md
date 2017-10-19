---
layout: page
title: "Q285121: Events 15 and 21 Are Logged When You Use HIS2000 Print Server"
permalink: /kb/285/Q285121/
---

## Q285121: Events 15 and 21 Are Logged When You Use HIS2000 Print Server

	Article: Q285121
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user attempts to run an AS/400 or mainframe print job by using the Host
	Integration Server 2000 Print Server, the job may fail to print, and the
	following events may appear in the Application event log:
	
	  Event ID: 15 - Source: SNA Virtual Print Driver
	
	  The GDI routine StartDoc has returned an error to the SNA Virtual Print
	  Driver.
	
	  Error returned: 1722
	  Print session: [print session name]
	  Device context: [device context number]
	  Job name: SNA Print Job on session [print session name]
	  Output file name (if re-directed to file): (null).
	
	  Event ID: 21 - Source: SNA Server
	
	  (1124) Negative Response Sent on Connection [Connection Name] (SENSE = 814)
	
	  Event ID: 21 - Source: SNA Server
	
	  (1124) Negative Response Sent on Connection [Connection Name] (SENSE = 2003)
	
	NOTE: When you print a document from Notepad or WordPad to this same printer, if
	you do not use the Host Integration Server 2000 Print Server, the output prints
	correctly.
	
	CAUSE
	=====
	
	Although Event ID 15 includes an error returned code of 1722, which means "the
	RPC Server is unavailable," this problem may be related to security and printer
	access. The SnaPrint Service user account may not have access to the network
	printer. To test this, log on with the SnaPrint credentials, and then attempt to
	print from Notepad. If the print job fails to print, troubleshoot this problem
	as a resource access issue.
	
	For this particular issue, the Host Integration Server is located in one Windows
	NT Server or Windows 2000 domain, while the printer is located in another
	Windows NT Server or Windows 2000 domain. These two domains are separate, with
	no trust relationship setup.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- Add the user ID and password that the SnaPrint Service runs under to the
	  domain where the printer resides.
	
	- Set up a trust relationship between the two domains.
	
	- Set up the printer to use LPR (Standard TCP/IP Port). When you use an LPR
	  printer, the print job is sent directly to the printer not passing any
	  security credentials.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
