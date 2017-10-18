---
layout: page
title: "Q263534: XGEN: Err. Mssg. When Using the Global Address List Modify Tool"
permalink: kb/263/Q263534/
---

## Q263534: XGEN: Err. Mssg. When Using the Global Address List Modify Tool

	Article: Q263534
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you connect to an Internet Information Service (IIS) server on which the
	Global Address List Modify for Web tool is installed in a virtual directory, you
	may receive the following error message:
	
	  Error: Permission Denied Restart your browser and enter the proper logon name
	  and password
	
	CAUSE
	=====
	
	This issue can occur because the Allow Anonymous Access option must be disabled
	for the virtual directory in which the Global Address List Modify for Web tool
	pages are installed.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Start Internet Services Manager.
	
	2. Locate the virtual directory in which the pages for the Global Address List
	  Modify for Web tool are installed.
	
	3. Click the Security tab, and then click to clear the Allow Anonymous Access
	  check box.
	
	NOTE: Also disable Windows NT Challenge/Response authentication (NTLM). The only
	authentication must be set to Basic (Clear Text) authentication.
	
	MORE INFORMATION
	================
	
	For additional information about how to set up the Global Address List Modify
	for Web tool, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q242223 XADM: How to Install and Use the Global Address List Modify for Web
	  Tool
	
	Additional query words: GAL MOD
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
