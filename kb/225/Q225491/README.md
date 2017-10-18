---
layout: page
title: "Q225491: RRAS Server Does Not Send FramedIPAddress in RADIUS Packet"
permalink: kb/225/Q225491/
---

## Q225491: RRAS Server Does Not Send FramedIPAddress in RADIUS Packet

	Article: Q225491
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, used with:
	   - Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT Server with Routing and Remote Access Update (an RRAS server), when
	used as a Remote Authentication Dial-In User Service (RADIUS) client, does not
	send the FramedIPAddress attribute in a RADIUS accounting request packet.
	
	CAUSE
	=====
	
	According to RFC 2139, which specifies the RADIUS Accounting Protocol, the
	FramedIPAddress attribute is an optional attribute, and may or may not be
	included in RADIUS accounting request packets.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	
	Additional query words: ias
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTSsearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
