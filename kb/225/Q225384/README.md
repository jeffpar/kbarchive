---
layout: page
title: "Q225384: SBS: Fax Does Not Use Second Modem When the First One Is Busy"
permalink: /kb/225/Q225384/
---

## Q225384: SBS: Fax Does Not Use Second Modem When the First One Is Busy

	Article: Q225384
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): kbenv kbhw kbtool kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have two or more compatible modems configured to use the Microsoft Fax
	service and the first modem is in use by another service, other fax jobs may be
	held until the first modem becomes available.
	
	CAUSE
	=====
	
	This behavior can occur if you install a modem and the Unimodem file that keeps
	the corresponding Telephony API (TAPI) line open for monitoring is not
	installed. Without this file, the second modem does not receive notification of
	events on the corresponding line.
	
	RESOLUTION
	==========
	
	Contact the manufacturer of your modem to obtain an updated firmware revision
	and Unimodem driver files for use with Small Business Server (SBS). Reinstall
	the modem with those files.
	
	STATUS
	======
	
	This is a confirmed problem in SBS versions 4.0, 4.0a, and 4.5.
	
	MORE INFORMATION
	================
	
	After you reinstall a modem, you may encounter one or more of the issues
	described in the following Microsoft Knowledge Base article:
	
	  Q186813 SBS Fax Server Receive Properties May Not Be Saved
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbenv kbhw kbtool kbHardware 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a kbSBServ450
	Version           : winnt:4.0,4.0a,4.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
