---
layout: page
title: "Q303283: Event 2086 Appears When You Run Multi-Protocol Services"
permalink: kb/303/Q303283/
---

## Q303283: Event 2086 Appears When You Run Multi-Protocol Services

	Article: Q303283
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbCOMIS kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run multi-protocol services such as Post Office Protocol (POP),
	Internet Message Access Protocol (IMAP), or Simple Mail Transfer Protocol (SMTP)
	over virtual servers, the services stop responding and the following error
	messages appear in the Event Viewer:
	
	  Event ID: 2086 Description: Exchange IMAP4 Virtual Server Instance - (RAWN2):
	  Failed to set the start bit in the metabase in order to start the protocol,
	  check if any process in the system is dead
	
	  Event ID: 2086 Description: Exchange POP3 Virtual Server Instance - (RAWN2):
	  Failed to set the start bit in the metabase in order to start the protocol,
	  check if any process in the system is dead
	
	  Event ID: 2086 Description: Exchange SMTP Virtual Server Instance - (RAWN2):
	  Failed to set the start bit in the metabase in order to start the protocol,
	  check if any process in the system is dead
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Internet Information
	Services 5.0. This problem was first corrected in Windows 2000 Service Pack 3.
	
	Additional query words: kbIISCom
	
	======================================================================
	Keywords          : kbCOMIS kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
