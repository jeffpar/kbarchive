---
layout: page
title: "Q224198: Stop 0x00000050 in Netbt Closing Outbound Connections"
permalink: /kb/224/Q224198/
---

## Q224198: Stop 0x00000050 in Netbt Closing Outbound Connections

	Article: Q224198
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbfixlist
	Last Modified: 19-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT Server may stop responding (crash) and display the following error
	message at a blue screen:
	
	  STOP 0x00000050 (0xfebf182a, 0x00000000, 0x00000000, 0x00000000)
	
	NOTE: The first parameter may vary in all error messages, but this is always a
	STOP 0x00000050 error message.
	
	CAUSE
	=====
	
	This problem occurs because Netbt is accessing a field in the connection block
	that has already been freed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0. This
	problem was first corrected in Windows NT 4.0 Service Pack 4.
	
	
	Additional query words: 0x50 PAGE_FAULT_IN_NONPAGED_AREA
	
	======================================================================
	Keywords          :  kbfixlist
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
