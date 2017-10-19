---
layout: page
title: "Q197401: Convlog Tool Stops Processing NCSA Files"
permalink: /kb/197/Q197401/
---

## Q197401: Convlog Tool Stops Processing NCSA Files

	Article: Q197401
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbtool kbWin2000PreSP1Fix
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to use NCSA input file to convert an Internet Protocol (IP)
	address to a Domain Name Server (DNS) name, the Convlog tool may stop processing
	the file.
	
	CAUSE
	=====
	
	This problem can occur if the IP address is resolved to a short DNS name (for
	example, 194.191.178.65 is resolved to ns.sv.fr).
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 1.
	
	
	Additional query words: IIS hotfix hot fix qfe quick engineering patch
	
	======================================================================
	Keywords          : kbtool kbWin2000PreSP1Fix 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
