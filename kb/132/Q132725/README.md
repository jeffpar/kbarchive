---
layout: page
title: "Q132725: FIX: The Breakpoint &quot;{,&lt;filename&gt;,} .&lt;line&gt;&quot; cannot be set"
permalink: /kb/132/Q132725/
---

## Q132725: FIX: The Breakpoint &quot;{,&lt;filename&gt;,} .&lt;line&gt;&quot; cannot be set

	Article: Q132725
	Product(s): Microsoft C Compiler
	Version(s): 2.00 2.10 2.20 4.00
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbide kbVC kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbGrpDSTools
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When debugging projects located on a Novell Netware server from Windows NT
	version 3.51, you may receive this error:
	
	  The breakpoint "{,<filename>,} .<line>" cannot be set.
	
	CAUSE
	=====
	
	There is a problem in NWRDR.SYS. The file read modes are not set correctly.
	
	RESOLUTION
	==========
	
	This problem has been fixed in the Service Pack 2 for Windows NT. Please see
	article Q128465 for information on how to obtain the Windows NT 3.51 Service
	Pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows NT version 3.51. This bug
	was corrected in the Windows NT 3.51 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To reproduce the bug using the HELLO, MFC sample:
	
	1. Place the HELLO sample on the Netware Server.
	
	2. Build HELLO for the Debug Target.
	
	3. Place a breakpoint in InitInstance().
	
	4. Press F5 (Go) to run the program.
	
	NOTE: This problem occurs only under Windows NT version 3.51.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbide kbVC kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC200 kbVC210
	Version           : 2.00 2.10 2.20 4.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
