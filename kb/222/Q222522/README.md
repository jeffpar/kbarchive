---
layout: page
title: "Q222522: Unable to View Modem Sharing Port in Ports Tool"
permalink: kb/222/Q222522/
---

## Q222522: Unable to View Modem Sharing Port in Ports Tool

	Article: Q222522
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbui
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to view the "Modem Sharing" port in the Ports tool in Control Panel
	on your Small Business Server-based computer, "Modem Sharing" may be missing
	from the list of available ports.
	
	CAUSE
	=====
	
	This issue can occur after you apply Microsoft Windows NT 4.0 Service Pack 4 to
	your Small Business Server-based computer. When you do so, the Ports.cpl file is
	replaced, and this removes the "Modem Sharing" port from the Ports tool.
	
	RESOLUTION
	==========
	
	To work around this issue, view the modem sharing port with the "netmodem"
	command:
	
	1. Click Start, point to Programs, and then click Command Prompt.
	
	2. At the command prompt, type "netmodem view <Small Business Server
	  name>" (without the quotation marks) and then press ENTER, where <Small
	  Business Server name> is the name of the computer with shared modems.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft BackOffice Small
	Business Server.
	
	MORE INFORMATION
	================
	
	In BackOffice Small Business Server versions 4.0a and earlier, modem sharing is
	listed as an available port in the Ports tool.
	
	Additional query words: smallbiz bof
	
	======================================================================
	Keywords          : kbnetwork kbtool kbui 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ450
	Version           : winnt:4.5
	Issue type        : kbbug
	
	=============================================================================
	
