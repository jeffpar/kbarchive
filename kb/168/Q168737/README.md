---
layout: page
title: "Q168737: XADM: Dr. Watson Error Occurs When Extracting NT Account List"
permalink: /kb/168/Q168737/
---

## Q168737: XADM: Dr. Watson Error Occurs When Extracting NT Account List

	Article: Q168737
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you click Extract Windows NT Account List on the Tools menu in the
	Microsoft Exchange Server Administrator program, the following error message may
	appear:
	
	  An application error has occurred and an application error log is
	  being generated.
	
	  ADMIN.exe
	  Exception: illegal instruction (0xc000001d), Address: 0x00420004
	
	The following event may also be logged in the Application Event Log (this is
	exactly as it appears in Event Viewer):
	
	  Event ID: 4097
	  Source: DrWatson
	  Type: Information
	  Category: None
	
	  The application, admin.dbg, generated an application error The
	  error occurred on  5/13/1997 @  2: 0:57.638 The exception generated
	  was c000001d at address 00420004 (<nosymbols>)
	
	In addition, the Drwtsn32.log file will look similar to the following:
	
	  Application exception occurred:
	          App: admin.dbg (pid=125)
	          When: 5/14/1997 @ 2:0:57.638
	          Exception number: c000001d (illegal instruction)
	
	CAUSE
	=====
	
	The allocated buffer to hold the length of the domain's primary domain
	controller (PDC) name is too small. A PDC machine name with a length of 14
	characters or more will overrun the buffer and corrupt the stack, causing heap
	corruption and the access violation.
	
	WORKAROUND
	==========
	
	To correct this behavior, do one of the following:
	
	- Rename the PDC to a name with 13 characters or less. The computer will need
	  to be restarted and any shares used by clients will need to be remapped to
	  the new machine name.
	
	  -OR-
	
	- Install a backup domain controller (BDC) in the domain and promote it to be
	  the PDC. This will demote the PDC to a BDC, but still allow the machine name
	  to appear on the network.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	
	Additional query words: long
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
