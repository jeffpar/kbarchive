---
layout: page
title: "Q307338: Stop 0xA Error in nwlnkspx!SpxConnConnectFindRouteComplete()"
permalink: kb/307/Q307338/
---

## Q307338: Stop 0xA Error in nwlnkspx!SpxConnConnectFindRouteComplete()

	Article: Q307338
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message on a blue screen:
	
	  Stop: 0x0000000A (0x00000002, 0x00000002, 0x00000001, 0xf01f264b)
	
	Note that the parameters in the error message that you receive may differ from
	the parameters that are listed in this article.
	
	CAUSE
	=====
	
	This problem occurs because a NULL parameter is handled incorrectly by the
	nwlnkspx!SpxConnConnectFindRouteComplete function.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version         Size    File name     Platform
	  ------------------------------------------------------------------
	  21-Oct-2001  05:39  4.0.1381.33478  58,704  Nwlnkspx.sys  x86
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Terminal Server Edition Service Pack 6a.
	
	
	
	Note that this hotfix is available only for Windows NT Server, Terminal Server
	Edition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
