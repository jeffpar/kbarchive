---
layout: page
title: "Q212875: SMS: SMS Installer on Novell Server Doesn't Allow Space in Name"
permalink: /kb/212/Q212875/
---

## Q212875: SMS: SMS Installer on Novell Server Doesn't Allow Space in Name

	Article: Q212875
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbsms200 kbOSNovell kbPackage kbsmsInst kbSoftwareDist
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Systems Management Server (SMS) Installer version 2.0, a repackaged
	installation does not work correctly when you create it on a Novell server in a
	shared directory whose name contains a space.
	
	CAUSE
	=====
	
	This behavior occurs because long file-name capability must be enabled on the
	reference and target computers that you are using; otherwise, a space in the
	directory name causes the repackage process to not complete successfully. Even
	though SMS supports long file names, the file systems that it interacts with
	must support them as well.
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbsms200 kbOSNovell kbPackage kbsmsInst kbSoftwareDist 
	Technology        : kbSMSSearch kbSMSI200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
