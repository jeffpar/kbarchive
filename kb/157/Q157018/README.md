---
layout: page
title: "Q157018: XCLN: Using OLE Messaging to View Non-Replicated PF Fails"
permalink: kb/157/Q157018/
---

## Q157018: XCLN: Using OLE Messaging to View Non-Replicated PF Fails

	Article: Q157018
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you use OLE messaging to view a non-replicated Public Folder in the Public
	Folder hierarchy the following error might appear on Win32:
	
	  Run-time error -2147417851 (80010105) OLE Automation Error The server threw
	  an exception.
	
	This error can be trapped and avoided.
	
	On Win16, you might see:
	
	  MDSIP - An error has occurred in your application. If you choose Ignore, you
	  should save your work in a new file. If you choose Close, your application
	  will terminate.
	
	If you click Ignore, you will see the following:
	
	  Application error. MDISP caused a GPF in module MDISP.EXE at 0002:093F.
	
	If you click Close, you will see:
	
	  Run time error '-2147418105 (80010007' OLE Automation error.
	
	You can click OK and the application will terminate.
	
	If you click Close after the initial error, the following error will be
	displayed:
	
	  Application error. MDISP cause a GPF in module MDISP.EXE at 0002:08E6.
	
	and then the application will terminate. This cannot be trapped.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	
	Additional query words: OleMsg
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
