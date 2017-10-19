---
layout: page
title: "Q226477: LineGatherDigits May Cause Memory Leak in Tapisrv.exe"
permalink: /kb/226/Q226477/
---

## Q226477: LineGatherDigits May Cause Memory Leak in Tapisrv.exe

	Article: Q226477
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Any program that uses the lineGatherDigits Telephony API to collect digits on a
	specified call may cause a small memory leak. For example, a program that
	implements a menu-driven voice response system might use the lineGatherDigits
	API to gather the choices (digits) typed in by remote parties.
	
	CAUSE
	=====
	
	This behavior occurs every time the lineGatherDigits API is called. Each time
	the API is called, 16 bytes of process heap leak in Tapisrv.exe.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 4.0.
	This problem was first corrected in Windows NT 4.0 Service Pack 5.
	
	Additional query words: SP5
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
