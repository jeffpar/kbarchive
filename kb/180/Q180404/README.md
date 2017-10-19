---
layout: page
title: "Q180404: XADM: Silent Mode Setup Does Not Support Upgrade Mode"
permalink: /kb/180/Q180404/
---

## Q180404: XADM: Silent Mode Setup Does Not Support Upgrade Mode

	Article: Q180404
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the Exchange Server Setup program in silent mode (Setup /Q) to
	upgrade the Exchange Administrator program, the Setup program prompts for a CD
	key, even though the CD key has been entered into the Setup.ini file.
	
	CAUSE
	=====
	
	The Exchange Server Setup program does not support upgrades when run in the
	silent or unattended mode (Setup /Q).
	
	MORE INFORMATION
	================
	
	This is by product design.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
