---
layout: page
title: "Q163001: Err Msg: Stop 0x0000007f (Unexpected_ Kernel_ Mode_ Trap)"
permalink: /kb/163/Q163001/
---

## Q163001: Err Msg: Stop 0x0000007f (Unexpected_ Kernel_ Mode_ Trap)

	Article: Q163001
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows NT Server version 3.51 with Service Pack 4 or Service Pack
	5 installed, you may receive the following error message:
	
	  Stop 0x0000007f (Unexpected_ Kernel_ Mode_ Trap)
	
	CAUSE
	=====
	
	This error message can occur if you have McAfee NetShield version 2.5.2 or
	version 2.5.3 installed on your computer. The McAfee drivers exhaust the kernel
	mode stack. The kernel mode stack is an important kernel mode resource. This can
	occur when many local variables are being defined in the functions and those
	variables are consuming a lot of memory off the stack.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, contact McAfee to inquire about a possible update to
	address this issue.
	
	To work around this issue, disable McAfee services, and then uninstall McAfee
	NetShield. For information about how to uninstall McAfee NetShield, contact
	McAfee Technical Support.
	
	For information about how to contact McAfee Technical Support, query in the
	Knowledge Base for one of the following articles:
	
	  ARTICLE-ID: Q65416
	  TITLE : Hardware and Software Third-Party Vendor Contact List, A-K
	
	  ARTICLE-ID: Q60781
	  TITLE : Hardware and Software Third-Party Vendor Contact List, L-P
	
	  ARTICLE-ID: Q60782
	  TITLE : Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	
	Additional query words: prodnt anti virus anti-virus 0x7f bugcheck stop code macafee
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51
	Issue type        : kbprb
	
	=============================================================================
	
