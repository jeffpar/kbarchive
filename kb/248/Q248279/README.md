---
layout: page
title: "Q248279: Poor Performance Observed on WLBS Hosts"
permalink: kb/248/Q248279/
---

## Q248279: Poor Performance Observed on WLBS Hosts

	Article: Q248279
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Load Balancing Service 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a cluster host with a single network adapter, the transmission of Internet
	Protocol (IP) packets for outbound connections (for example, to a back end
	database) may appear to be paced at 16-millisecond intervals. This may affect
	the performance of a Windows NT Load Balancing Service (WLBS) cluster, and the
	problem may be especially noticeable under low loads.
	
	If you disable WLBS the time delay is not improved. If you uninstall WLBS, the
	problem is resolved.
	
	CAUSE
	=====
	
	This behavior occurs because of an interaction failure between WLBS and Network
	Driver Interface Specification (NDIS).
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time      Size     File name     Platform
	  ---------------------------------------------------
	  10/12/1999  08:44p   36,112  Wlbs.exe      x86
	  10/29/1999  02:06p   60,208  Wlbs.sys
	  10/12/1999  08:43p  121,744  Ndis.sys
	
	  10/12/1999  08:43p   51,472  Wlbs.exe      Alpha
	  10/29/1999  02:05p  101,104  Wlbs.sys
	  10/12/1999  08:41p  213,680  Ndis.sys
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	
	Additional query words: nic card
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTLBS100 kbWinNTLBSSearch
	Version           : winnt:1.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
