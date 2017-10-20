---
layout: page
title: "Q259980: Nwrdr.sys Mishandles an Exception That Can Cause a &quot;Stop&quot; Error"
permalink: /kb/259/Q259980/
---

## Q259980: Nwrdr.sys Mishandles an Exception That Can Cause a &quot;Stop&quot; Error

{% raw %}

	Article: Q259980
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP5
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you are using Windows NT Server 4.0, Terminal Server Edition, with Gateway
	Services for NetWare (GSNW), you may receive a "Stop 0x0A" error message under
	certain conditions.
	
	CAUSE
	=====
	
	The NetWare redirector does not check for null returns when it dereferences an
	IrpContext function.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size    File name  Platform
	  -----------------------------------------------
	  04/25/2000  6:09PM  154 KB  Nwrdr.sys  Intel
	  04/25/2000  5:55PM  275 KB  Nwrdr.sys  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : :4.0,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
