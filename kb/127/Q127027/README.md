---
layout: page
title: "Q127027: Windows NT Printing Err Msg: The Requested Resource Is In Use"
permalink: kb/127/Q127027/
---

## Q127027: Windows NT Printing Err Msg: The Requested Resource Is In Use

	Article: Q127027
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a locally attached printer, the following error message
	appears:
	
	  Error writing to LPT1: for <application name>. The requested resource
	  is in use. Do you wish to retry or cancel the job?
	
	If you select Retry, the print job finishes properly.
	
	NOTE: If this printer is shared, remote client computers do not experience this
	behavior.
	
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	Windows NT 4.0
	--------------
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. From the File menu, click Server Properties.
	
	3. On the Port tab, select the printer port (LPT1:, LPT2:, or LPT3:).
	
	4. Click Configure Port.
	
	5. Set the Transmission Retry value to 90 or greater.
	
	Windows NT 3.5x
	---------------
	
	1. Run Print Manager and click Properties from the Printer menu.
	
	2. Click Settings and set the Transmission Retry value to 90 or greater.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server versions 3.5, 3.51, and 4.0. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: spool
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
