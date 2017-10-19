---
layout: page
title: "Q216878: Macintosh Clients Cannot See WinNT Server After Upgrade to SP4"
permalink: /kb/216/Q216878/
---

## Q216878: Macintosh Clients Cannot See WinNT Server After Upgrade to SP4

	Article: Q216878
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Apple Macintosh clients are unable to attach and view files on the Windows NT
	Services for Macintosh (SFM) volume. This problem only happens with some network
	interface cards (NICs) after Windows NT 4.0 is upgraded to Service Pack 4 (SP4).
	The Intel Ether Express 8/16 is one of the NICs that exhibits this problem.
	Reverting back to SP3 resolves the problem. And, if there is a Seed Router on
	the network, the Windows NT Server computer is able to resolve the media access
	control (MAC) address of the Apple client.
	
	CAUSE
	=====
	
	Modifications made to Ndis.sys after SP3 broke functionality in Windows NT
	Server 4.0, which ignored Apple Macintosh broadcasts.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
