---
layout: page
title: "Q176243: XADM: Batch Setup-Setup /r /q Options Combined Unsupported"
permalink: kb/176/Q176243/
---

## Q176243: XADM: Batch Setup-Setup /r /q Options Combined Unsupported

	Article: Q176243
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you attempt to run Microsoft Exchange Server 5.5 Setup with the /r /q <ini
	filename> options, the /r command is ignored. This is equivalent to running
	Setup /q <ini filename>.
	
	CAUSE
	=====
	
	Batch mode Setup, Setup /r /q <ini filename> is not a supported Setup
	combination. There is no validation on options supplied during a command- line
	Setup.
	
	This is by design.
	
	Additional query words: Forklift
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	
	=============================================================================
	
