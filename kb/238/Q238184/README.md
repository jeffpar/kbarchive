---
layout: page
title: "Q238184: Err Msg: &quot;Transport Driver Error...&quot; with Citrix Client"
permalink: /kb/238/Q238184/
---

## Q238184: Err Msg: &quot;Transport Driver Error...&quot; with Citrix Client

{% raw %}

	Article: Q238184
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Citrix Metaframe client for MS-DOS, the following error message
	may be displayed:
	
	  Transport driver error (NetBIOS 254)
	
	CAUSE
	=====
	
	This behavior occurs because of a change made in Windows NT Server 4.0, Terminal
	Server Edition Service Pack 4. Clients using NetBEUI as a transport protocol
	periodically may not be able to connect to the network.
	
	
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
	
	  Date      Time      Size     File name    Platform
	  --------------------------------------------------
	  07/26/99   05:01p   17,016   Tdnetb.sys   x86
	  07/26/99   05:06p   27,736   Tdnetb.sys   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition Service Pack 4.
	
	MORE INFORMATION
	================
	
	When you attempt to connect to the network again, the connection is usually
	successful.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
