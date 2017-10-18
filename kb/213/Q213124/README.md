---
layout: page
title: "Q213124: SMS: Clients Hang After Installation of Hardware Inventory Agent"
permalink: kb/213/Q213124/
---

## Q213124: SMS: Clients Hang After Installation of Hardware Inventory Agent

	Article: Q213124
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 23-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	International versions of Windows 3.x and Windows 9x clients stop responding
	(hang) after installation of the Hardware Inventory Agent components on NEC-PC98
	computers.
	
	WORKAROUND
	==========
	
	Run REGNEC98.exe manually before other client installation programs to prevent
	the system from hanging when installing the Hardware Inventory Agent.
	
	REGNEC98.exe, found on the International Client Pack 4, is a program that
	registers the client computer as a NEC-PC98 computer. Running this program sends
	a signal to subsequent installation programs that this computer requires
	NEC-PC98-specific components.
	
	If no signature or an incorrect signature is found, PC/AT client components are
	installed by default.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
