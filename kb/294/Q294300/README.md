---
layout: page
title: "Q294300: Terminal Server Client May Have Keyboard Problems When Shadowed"
permalink: /kb/294/Q294300/
---

## Q294300: Terminal Server Client May Have Keyboard Problems When Shadowed

{% raw %}

	Article: Q294300
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A shadowed client session that is running an MS-DOS-based program has keyboard
	problems after you quit shadowing by pressing the CTRL, ALT, or SHIFT keys.
	
	CAUSE
	=====
	
	This problem can occur because when shadowing stops, the server does not reset
	any residual shift states that may occur from the use of shadow keys.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
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
	
	  Date        Time             Size       File name    Platform
	  -------------------------------------------------------------
	  07/11/2000  02:45p             170,256  Gdi32.dll    Intel
	  07/11/2000  02:44p             331,536  User32.dll   Intel
	  03/20/2001  04:00p           1,279,792  Win32k.sys   Intel
	  03/01/2001  03:19p             195,856  Winsrv.dll   Intel
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, instead of using combination CTRL, ALT, or SHIFT
	keys for Shadow Hotkeys, use function keys such as F11 or F12.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbui kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
