---
layout: page
title: "Q214684: XADM: Information Store Crashes Due to Database Corruption"
permalink: /kb/214/Q214684/
---

## Q214684: XADM: Information Store Crashes Due to Database Corruption

	Article: Q214684
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An improperly handled rollback operation by the Exchange Server DB Engine causes
	corruption in the database. This corruption may lead the Microsoft Exchange
	Server information store to terminate unexpectedly and display an access
	violation error message. If the correct Windows NT and Exchange Server debug
	symbols are installed, the resulting Dr. Watson log may display a stack dump
	similar to the following:
	
	  FramePtr RetAddr Param1 Param2 Param3 Function Name
	  3f9ceb48 6feaf887 3f9ceb58 133f48b0 00000000 ESE!ErrNDSeek+0xb({...})
	  3f9ceb6c 6feb0010 10816f40 fffffed4 3f9cebf4 ESE!BTISeekSeparatorKey+0x48
	  3f9ceb80 6feaf954 3f9cebf4 00000201 10816f40 ESE!ErrBTISelectSplit+0xba
	  3f9cebc4 6fea45a8 00000001 00000000 10816180 ESE!ErrBTISplit+0xbd
	  3f9cec84 6fea4fe9 3f9ced34 00000001 00000000 ESE!ErrBTInsert+0x3e8({...},
	  {...})
	  3f9ceca0 6feb653e 3f9ced34 00000001 00000000 ESE!ErrDIRInsert+0x27({...},
	  {...})
	  10816180 04560e80 1081de80 0fdabad0 1081de80 ESE!ErrRECSeparateLV+0x1c6
	
	CAUSE
	=====
	
	When the underlying Exchange Server database engine tries to roll back the
	creation of a long value (LV) tree on a table opened with exclusive access, the
	database is corrupted, and the rollback is only partially successful. This
	corruption will cause the information store process to terminate.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	Component: Exchange Database Engine
	
	The English version of this fix should have the following file attributes or
	later:
	
	+----------------------+
	| File name | Version  | 
	+----------------------+
	| Ese.dll   | 5.5.2522 | 
	+----------------------+
	
	This hotfix has been posted to the following Internet location as Psp2esei.exe
	(x86) and Psp2esea.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.5/PostSP2/ESE-fix/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	======================================================================
	Keywords          : EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
