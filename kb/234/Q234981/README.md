---
layout: page
title: "Q234981: Access Violation in Win32k.sys Leading to STOP 0x0000001e"
permalink: kb/234/Q234981/
---

## Q234981: Access Violation in Win32k.sys Leading to STOP 0x0000001e

	Article: Q234981
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT Server 4.0, Terminal Server Edition may crash and
	display the following blue screen error message:
	
	  STOP 0000001e : c0000005 a3053380 00000000 00000008
	  KMODE_EXCEPTION_NOT_HANDLED
	
	NOTE: The parameters may vary depending on systems configurations.
	
	CAUSE
	=====
	
	This problem occurs because Win32k.sys references a null pointer to an object.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT Server 4.0, Terminal Server Edition service pack that
	contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time     Size        File name    Platform
	  ----------------------------------------------------
	  5/26/99   06:03p   1,265,936   Win32k.sys   Intel
	  5/26/99   06:07p   2,070,416   Win32k.sys   Alpha
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
