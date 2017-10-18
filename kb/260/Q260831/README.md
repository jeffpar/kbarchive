---
layout: page
title: "Q260831: &quot;STOP 0x0000001E&quot; Caused by Pool Corruption"
permalink: kb/260/Q260831/
---

## Q260831: &quot;STOP 0x0000001E&quot; Caused by Pool Corruption

	Article: Q260831
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT 4.0-based server may stop responding (hang) with a "STOP
	0x0000001E" stop error message.
	
	NOTE: If you turn on the special pool feature, you may receive a "STOP
	0x00000050" or "STOP 0x0000001A" error message instead.
	
	For additional information about how to use the special pool feature, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q188831 How to Use the Special Pool Feature to Isolate Pool Damage
	
	CAUSE
	=====
	
	This problem occurs when you are running third-party remote control software
	that causes memory pool corruption.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Windows NT 4.0 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time       Size        File name    Platform
	  -------------------------------------------------------
	  08/27/99   18:24:29     166,160   Gdi32.dll    x86
	  12/23/99   14:48:59     326,416   User32.dll   x86
	  05/17/00   15:41:46   1,251,408   Win32k.sys   x86
	  10/25/99   17:12:53     175,376   Winsrv.dll   x86
	  08/06/99   14:06:48     307,984   Gdi32.dll    Alpha
	  12/23/99   14:48:18     577,808   User32.dll   Alpha
	  05/17/00   15:41:11   2,051,056   Win32k.sys   Alpha
	  10/25/99   17:11:50     314,128   Winsrv.dll   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	Additional query words: trap
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
