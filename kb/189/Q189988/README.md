---
layout: page
title: "Q189988: CMPXCHG8B CPUs in Non-Intel/AMD x86 Compatibles Not Supported"
permalink: kb/189/Q189988/
---

## Q189988: CMPXCHG8B CPUs in Non-Intel/AMD x86 Compatibles Not Supported

	Article: Q189988
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Computers with x86-based processors that report support for CMPXCHG8B in the
	response from the CPUID instruction may cause the following blue-screen error
	message during startup:
	
	  STOP 0x0000003e
	  MULTIPROCESSOR_CONFIGURATION_ NOT SUPPORTED
	
	NOTE: This problem can occur on uniprocessor systems and only occurs on non-
	Intel and non-AMD x86-based processors.
	
	CAUSE
	=====
	
	During the boot process, Windows NT queries the processor for its type and uses
	that information to adjust its initialization to take advantage of the features
	that the processor should support. Later, it makes calls to the processor to
	verify that it does support these specific features. One of the calls is to note
	the maker of the processor. If the maker is not Intel or AMD, the return value
	causes Windows NT to assume that the features are not supported by the
	processor, even through they may be.
	
	
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
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
