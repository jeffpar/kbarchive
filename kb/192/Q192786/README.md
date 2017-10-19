---
layout: page
title: "Q192786: Event ID 11 Changed to an Informational Message"
permalink: /kb/192/Q192786/
---

## Q192786: Event ID 11 Changed to an Informational Message

	Article: Q192786
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following message appears as an warning:
	
	  Event ID   :  11
	  Source     :  Serial
	  Description:  The hardware resources for COM1 are already in use by
	                another device.
	
	However, the device on COM1 continues to function normally.
	
	CAUSE
	=====
	
	When modems are enumerated by Pnpisa.sys, entries are created in the registry.
	When installing a third-party driver that is the equivalent of Serial.sys, these
	entries confuse Serial.sys. During startup, Serial.sys attempts to manage this
	device and claim those resources already used by the third-party driver. This
	process fails and reports this as an error when, in fact, it is informational as
	the device on COM1 is still functioning.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
