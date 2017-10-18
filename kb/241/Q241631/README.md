---
layout: page
title: "Q241631: Cluster Node with Heavy Disk Stress Does Not Shut Down Properly"
permalink: kb/241/Q241631/
---

## Q241631: Cluster Node with Heavy Disk Stress Does Not Shut Down Properly

	Article: Q241631
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cluster Server 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to restart a node of a computer running Microsoft Windows NT
	4.0 Cluster Server that is subjected to a large amount of disk activity, the
	computer running Windows NT 4.0 may not shut down properly. As a result, Cluster
	Server may stop responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur because the Network Driver Interface Specification
	(NDIS) drivers are being shut down before the Cluster service. This behavior can
	cause cluster network requests to stop responding.
	
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
	
	  Date        Time    Version        Size    File name     Platform
	  -----------------------------------------------------------------
	  01/31/2001  01:37p  4.0.1381.7090  50,320  clusnet.sys  x86
	  01/31/2001  01:33p  4.0.1381.7090  88,432  clusnet.sys  Alpha
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	This behavior can occur on both multi-processor and single-processor computers
	and it is not dependent on the computer's available resources (such as, disk
	space or memory).
	
	Additional query words: MSCS CLUSDISK.SYS clusnet sys
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbClustServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
