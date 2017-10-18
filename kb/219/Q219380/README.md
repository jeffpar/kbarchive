---
layout: page
title: "Q219380: SP4 RAS Server Hangs Up When RAS Client Tries to Connect"
permalink: kb/219/Q219380/
---

## Q219380: SP4 RAS Server Hangs Up When RAS Client Tries to Connect

	Article: Q219380
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
	
	When a Microsoft Windows NT 4.0 RAS client tries to connect to a RAS server
	computer running Windows NT Server 4.0 Service Pack 4, the RAS server
	unexpectedly hangs up the connection.
	
	CAUSE
	=====
	
	This problem occurs because the Ndiswan.sys driver for the RAS server in this
	particular hardware configuration becomes deadlocked. The deadlock occurs in the
	code that causes the NdisWanSend() API call to quit without contacting the RAS
	client. The RAS server then hangs up.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepack
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0 and
	Windows NT Server 4.0 Service Pack 4. This problem was first corrected in
	Windows NT Server 4.0 Service Pack 5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
