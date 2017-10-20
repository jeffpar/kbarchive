---
layout: page
title: "Q259877: &quot;Stop 0x1E&quot; on Terminal Server During Session Shutdown"
permalink: /kb/259/Q259877/
---

## Q259877: &quot;Stop 0x1E&quot; on Terminal Server During Session Shutdown

{% raw %}

	Article: Q259877
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Terminal Server client shuts down its session, Terminal Server may stop
	responding (hang) with a "Stop 0x1E" error message on a blue screen. Typical
	stop codes for Terminal Server with Service Pack 5 installed include:
	
	  0x0000001e (0xc0000005, 0xa3079ce3, 0x00000000, 0x00000074)
	
	CAUSE
	=====
	
	This problem occurs because all WindowStations for the session being terminated
	have already been closed, but Terminal Server expects at least one WindowStation
	to still be active.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Windows NT 4.0 service pack that
	contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The typical support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time   Size       File name   Platform
	  --------------------------------------------------
	  04/04/2000  20:12  1,275,152  Win32k.sys  Intel
	  14/04/2000  23:07  2,087,120  Win32k.sys  Alpha
	
	NOTE: This fix should only be installed after you apply Terminal Server Edition
	Service Pack 6. For more information on this service pack, please see the
	following Microsoft web site:
	
	  http://www.microsoft.com/ntserver/terminalserver/downloads/recommended/tsesp6/
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The problem occurs because of a null pointer reference through the grpwinstaList
	variable.
	
	The stack trace in the crash dump looks something like this:
	
	  bb3e7df0 a3053c5d 7ffdabf8 00000001 a4055b30
	  win32k!_UserTestForWinStaAccess+0xda
	  bb3e7e84 a30a63ce 000000f4 bb3e7eb4 bb3e7ecc win32k!xxxResolveDesktop+0x1df
	  bb3e7eec 80147829 000000f4 0081feb0 00000000
	  win32k!NtUserResolveDesktop+0x13f
	  bb3e7eec 5ffc3f63 000000f4 0081feb0 00000000 ntkrnlmp!KiSystemService+0xc9
	
	Additional query words: tse win32k
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
