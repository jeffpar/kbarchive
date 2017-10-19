---
layout: page
title: "Q165875: Excel May Print Only 1 Page to LaserJet Series II"
permalink: /kb/165/Q165875/
---

## Q165875: Excel May Print Only 1 Page to LaserJet Series II

	Article: Q165875
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a document to a Hewlett-Packard LaserJet 2 from Microsoft Excel
	versions 5.0 or 7.0 or PowerPoint, the first page will print fine, but
	subsequent pages may never print. The job gets stuck in Print Manager with a
	status of spooling. No error code appears on the printer and the application has
	already finished composing the job, so the application is unaware of any
	problem. This happens when printing locally on a Windows NT Workstation or
	Windows NT Server with Service Pack 5 installed.
	
	-or-
	
	When you print across the network to a LaserJet Series II attached to a Windows
	NT 3.51 Server or Workstation with Service Pack 5 installed.
	
	
	
	RESOLUTION
	==========
	
	Apply the hotfix mentioned in this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
