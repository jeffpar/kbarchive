---
layout: page
title: "Q287029: Problems with Repeated LoadAccelerators() Calls"
permalink: /kb/287/Q287029/
---

## Q287029: Problems with Repeated LoadAccelerators() Calls

{% raw %}

	Article: Q287029
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a program repeatedly calls the LoadAccelerators() function for the same
	accelerator table, the 64 kilobyte (KB) user handles may be exhausted, and the
	computer may stop responding (hang).
	
	CAUSE
	=====
	
	The LoadAccelerators() function should only load the accelerator table if it has
	not yet been loaded into memory, but it loads the accelerator table for each
	call (even for the same accelerator table) instead.
	
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
	
	  Date        Time             Size        File name     Platform
	  ---------------------------------------------------------------
	  02/13/2001  06:31p             166,160   Gdi32.dll     Intel
	  02/13/2001  06:31p             327,440   User32.dll    Intel
	  02/02/2001  05:01p           1,254,352   Win32k.sys    Intel
	  02/13/2001  06:31p             175,376   Winsrv.dll    Intel
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
