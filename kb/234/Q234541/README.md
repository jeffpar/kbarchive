---
layout: page
title: "Q234541: STOP 0x00000050 When Source Routing Info Exceeds 18 Bytes"
permalink: kb/234/Q234541/
---

## Q234541: STOP 0x00000050 When Source Routing Info Exceeds 18 Bytes

	Article: Q234541
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 08-MAY-2002
	
	SYMPTOMS
	========
	
	A STOP 0x0000000A or STOP 0x000000050 error message may be displayed after a
	call to MacLookupSourceRouting() when source routing information exceeds 18
	bytes in length.
	
	CAUSE
	=====
	
	SourceRoutingBuffer is allocated as a UCHAR[18] on the stack. The 802.5
	specification states that source routing can be up to 31 bytes in length.
	Originally, this length was 18 bytes to allow seven hops. Later, it was changed
	to 31 bytes. When MacLookupSourceRouting finds the media access control entry,
	it fills in the 31 bytes of Source Routing into the caller's parameters. This
	causes corruption in the stack.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	The latest service pack is also available at the following Internet location:
	
	  http://www.microsoft.com/windows/servicepacks/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
