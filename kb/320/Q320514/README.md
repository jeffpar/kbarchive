---
layout: page
title: "Q320514: XCCC: Troubleshooting &quot;ASP 0115&quot; Error Messages in OWA 5.x"
permalink: kb/320/Q320514/
---

## Q320514: XCCC: Troubleshooting &quot;ASP 0115&quot; Error Messages in OWA 5.x

	Article: Q320514
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use Outlook Web Access (OWA), you may receive an "ASP 0115" error
	message. This article describes the variations of the "ASP 0115" error message,
	some of the problems that may cause this error message, and resolutions for
	these problems.
	
	MORE INFORMATION
	================
	
	The "ASP 0115" error message may occur if either the heap is corrupted or the
	Exchange Server virtual directory in Internet Information Server (IIS) does not
	have the appropriate permissions. The following sections describe these problems
	in more detail.
	
	The Heap Is Corrupted
	---------------------
	
	If you use OWA to access an Exchange Server computer, you may experience any of
	the following symptoms:
	
	- The Internet browser stops responding (hangs).
	
	- You receive an "ASP 0115" error message.
	
	This problem may occur in any environment, but it typically occurs on servers
	that support a greater number of concurrent users. However, this problem does
	not depend on server usage or the memory that is allocated to the service.
	
	This problem may occur if the buffer that is created when you empty the Deleted
	Items folder is too small. If the buffer is too small, the end of the buffer is
	overwritten by data, which corrupts the memory that follows.
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook Web Access 5.5.
	This problem was first corrected in Exchange Server Service Pack 4.
	
	
	The Exchange Server Virtual Directory Does Not Have the Appropriate Permissions
	-------------------------------------------------------------------------------
	
	If you are using an OWA client computer and you try to insert an attachment in a
	message, you may receive one of the following error messages:
	
	  HTTP/1.0 405 - Method Not Allowed
	
	  -or-
	
	  HTTP/1.0 403.1 - Forbidden: Execute Access Forbidden
	  Please contact the Web Server's administrator if the problem persists.
	
	  -or-
	
	  ASP 0115 - Unexpected error
	  /vroot/page
	  A trappable error occurred in an external object. The script cannot continue
	  running.
	
	This problem may occur if you changed the permissions for the Exchange Server
	virtual directory in IIS from "Execute" to a different permission.
	
	To resolve this problem:
	
	1. Start Internet Service Manager.
	
	2. Expand Internet Information Server.
	
	3. Expand Default Web Site.
	
	4. Right-click Exchange, and then click Properties.
	
	5. Click the Virtual Directory tab, and then change the permissions to Execute
	  (including the script).
	
	For additional information about how to troubleshoot the 'ASP 0115' error
	message, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q281674 HOWTO: Troubleshoot ASP 0115 Errors in IIS
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550 kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
