---
layout: page
title: "Q284215: Non-Paged Pool Leak in TimerQueue Active List Cleanup"
permalink: /kb/284/Q284215/
---

## Q284215: Non-Paged Pool Leak in TimerQueue Active List Cleanup

{% raw %}

	Article: Q284215
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Netbt.sys may send many broadcast messages from a Windows NT 4.0-based server
	(by using UdpSendNSBcast). The absence of a response to particular broadcast
	messages causes a Netbt timer function to expire after a retry period.
	Typically, a timer cleanup routine moves expired list entries from an active
	list to a free list, and list entry memory blocks are reused. In the situation
	that is described in this article, however, expired memory blocks are being
	abandoned. The result is a non-paged pool leak of 0xA0 (160 bytes) for each
	abandoned entry. After many ignored broadcast messages and several weeks,
	non-paged pool may be exhausted.
	
	CAUSE
	=====
	
	A special condition causes expired timer memory blocks to be abandoned and not
	moved to the free list for reuse. This special condition has been modified to
	prevent the problem.
	
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
	
	  Date         Time     Size      File name   Platform
	  ----------------------------------------------------
	  02/12/2001   08:51p   124,720   Netbt.sys   Intel
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, review network broadcasts and determine if
	broadcasts are being ignored. Monitor non-paged pool by using Perfmon, and cycle
	the servers before before non-paged pool is exhausted. Use this method until you
	can apply this hotfix.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
