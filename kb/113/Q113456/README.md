---
layout: page
title: "Q113456: Problems Sending Faxes from MAPI-Enabled Applications"
permalink: /kb/113/Q113456/
---

## Q113456: Problems Sending Faxes from MAPI-Enabled Applications

	Article: Q113456
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft Mail is not running and you send several faxes from a MAPI-
	enabled application, the first fax is sent, but subsequent faxes stay in the
	Mail Outbox. When you start Mail, the remaining faxes are sent.
	
	CAUSE
	=====
	
	Any messages added to the Outbox while the Mail spooler is in its exiting state
	are not picked up by the Mail spooler.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups At Work
	PC Fax version 3.11. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Start Mail before you send several faxes from MAPI-enabled applications.
	
	  -or-
	
	- Start Mail after you send several faxes from MAPI-enabled applications.
	
	Additional query words: 3.11 unsent facsimile
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
