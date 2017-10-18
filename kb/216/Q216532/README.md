---
layout: page
title: "Q216532: XADM: Exchange 5.5 Does Not Function Properly on EV6 Computer"
permalink: kb/216/Q216532/
---

## Q216532: XADM: Exchange 5.5 Does Not Function Properly on EV6 Computer

	Article: Q216532
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Exchange Server 5.5 may not function properly on DEC Alpha EV6 (21264)
	computers. In particular, Exchange Server may stop responding (hang) or
	experience performance problems. Note that this problem does not occur on
	earlier DEC Alpha computers, including the EV4 (21064), EV5 (21164), and EV5.6
	(21164A).
	
	CAUSE
	=====
	
	Certain operations performed by the Ese.dll dynamic-link library (DLL) file do
	not completely conform to the DEC Alpha architecture specification.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Exchange Database Engine
	
	+------------------------+
	| File name | Version    | 
	+------------------------+
	| Ese.dll   | 5.5.2545.0 | 
	+------------------------+
	
	This hotfix has been posted to the following Internet location as Psp2esea.exe
	(Alpha) and Psp2esei.exe (x86):
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.5/PostSP2/ESE-fix/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	You may be able to determine if your DEC Alpha computer contains an EV6
	microprocessor by using the Control Panel System tool and then clicking the
	General tab. If your DEC Alpha computer contains an EV6 microprocessor,
	"DEC-21264" (without quotation marks) appears under Computer. For more
	information about how to determine if your DEC Alpha computer contains an EV6
	microprocessor, please contact Compaq.
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
