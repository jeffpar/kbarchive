---
layout: page
title: "Q257633: Resolution of Unqualified Host Name May Not Succeed"
permalink: /kb/257/Q257633/
---

## Q257633: Resolution of Unqualified Host Name May Not Succeed

{% raw %}

	Article: Q257633
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP5
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Windows NT 4.0, Terminal Server Edition, Service Pack 5 (SP5) installed, an
	attempt to resolve an unqualified host name by using the Domain Name System
	(DNS) may not succeed after the second attempt. This problem can occur if the
	host is in the second or later entry in the domain suffix search order. Terminal
	Server then attempts to resolve the name by using Windows Internet Naming
	Service (WINS) and/or NetBIOS broadcast.
	
	After a period of six minutes the condition is reset, the first two attempts
	succeed, and subsequent attempts do not succeed.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Windows NT 4.0, Terminal Server
	Edition, service pack that contains this fix.
	
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
	
	  Date        Time     Size     File name   Platform
	  --------------------------------------------------
	  03/16/2000  05:13p   43,792   Rnr20.dll   Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The registry key to specify the depth of the search (up to a maximum of 12) is:
	
	  HKLM\System\CurrentControlSet\Services\TCPIP\Parameters\MaxDomainsSearchListSize
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
