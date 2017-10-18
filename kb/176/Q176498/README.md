---
layout: page
title: "Q176498: System Event Log Fills with WINS Event IDs 4125 and 4141"
permalink: kb/176/Q176498/
---

## Q176498: System Event Log Fills with WINS Event IDs 4125 and 4141

	Article: Q176498
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The System event log on your Windows Internet Name Service (WINS) server may log
	several of the following event messages, even to the point of filling the event
	log:
	
	  Event ID   : 4125
	  Source     : WINS
	  Description: The WINS got an update notification from WINS with address
	               (%1). The WINS accepted it.
	
	-or-
	
	  Event ID   : 4141
	  Source     : WINS
	  Description: WINS has pulled records from a WINS while doing %1. The
	               partner's address and the address of the owner whose
	               records were pulled are given below in the data section (2
	               and 3rd DWORD respectively). The number of records pulled
	               is in the 4th DWORD below.
	
	CAUSE
	=====
	
	You have detailed logging enabled in the Advanced properties of the server
	configuration in WINS Manager.
	
	RESOLUTION
	==========
	
	To disable detailed logging, use the following steps:
	
	1. In WINS Manager, click Configuration on the Server menu.
	
	2. Click Advanced and click Log Detailed Events to clear the checkbox.
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
