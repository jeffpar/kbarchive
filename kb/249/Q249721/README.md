---
layout: page
title: "Q249721: Error Message: Data Area Passed to a System Call Is Too Small."
permalink: kb/249/Q249721/
---

## Q249721: Error Message: Data Area Passed to a System Call Is Too Small.

	Article: Q249721
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When connecting to ASP pages on a computer running Internet Information Server,
	the client may receive the following error message intermittently:
	
	  Data area passed to a system call is too small.
	
	CAUSE
	=====
	
	This error message can be caused by certain system configuration parameters.
	
	WORKAROUND
	==========
	
	To work around the problem, perform the following steps:
	
	1. In the Internet Services Manager (ISM) Microsoft Management Console (MMC),
	  open the Web site Properties, and then click the Home Directory tab.
	
	2. In Application Settings, click Configuration.
	
	3. Click to check the Cache ISAPI Applications check box.
	
	4. Stop and restart the Web site.
	
	If the problem persists, upgrade to the latest Windows NT service pack.
	
	MORE INFORMATION
	================
	
	The error message is listed under the Windows NT error code as follows:
	
	  122L ERROR_INSUFFICIENT_BUFFER The data area passed to a system call is too
	  small.
	
	The same error message may appear under different circumstances. For additional
	information, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q142650 Netlogon Stops when Mailslot Message Is Larger than Specified
	
	  Q207523 Error Occurs During SSL Connection
	
	  Q155011 INFO: Error Codes in Windows NT Part 1 of 2 (article I)
	
	Additional query words: IIS, ASP, ISAPI, buffer
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
