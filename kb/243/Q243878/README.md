---
layout: page
title: "Q243878: Tcpip.sys Hotfixes Dated 4/28/99 to 6/4/99 Replaced"
permalink: /kb/243/Q243878/
---

## Q243878: Tcpip.sys Hotfixes Dated 4/28/99 to 6/4/99 Replaced

{% raw %}

	Article: Q243878
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Hotfixes after Service Pack 5 (SP5) dated June 4, 1999, for the Tcpip.sys driver
	contain a regression that could cause any of the following problems:
	
	- A socket recv call returns an incorrect number of bytes and the subsequent
	  call hangs.
	
	- Windows NT stops with a "Stop 0x0000000A" error message.
	
	CAUSE
	=====
	
	The Tcpip.sys driver attempts to free the same spinlock twice.
	
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
	
	  Date      Time      Size      File name    Platform
	  ---------------------------------------------------
	  07/26/99  02:25p    150,832   Tcpip.sys    x86
	  07/26/99  02:23p    274,032   Tcpip.sys    Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	These hotfix files should be replaced with the newer files. The hotfixes are
	described in the following Microsoft Knowledge Base articles:
	
	  Q223450 TCP Initial Retransmission Timer Adjustment Added to Windows NT
	
	  Q224585 TCB Hash Function Modified to Improve Network Performance
	
	  Q230307 Slow Performance in TCP/IP When Reconnecting
	
	  Q230381 TCP/IP Dead Gateway Detection May Not Work if ARP Cache Empty
	
	  Q232512 TCP/IP May Retransmit Packets Prematurely
	
	  Q234593 Windows NT 4.0 Tcpip.sys Hotfixes Dated 4/28/99 to 5/28/99 Replaced
	
	Additional query words: tcpip
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
