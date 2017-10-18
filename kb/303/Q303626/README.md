---
layout: page
title: "Q303626: SMSINST: Version of Windows Not Detected Correctly"
permalink: kb/303/Q303626/
---

## Q303626: SMSINST: Version of Windows Not Detected Correctly

	Article: Q303626
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200bug smsinst
	Last Modified: 25-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the "check configuration" script item from Systems Management
	Server (SMS) Installer to determine if the computer is running an operating
	system that is later than Microsoft Windows 95, a computer that is running
	Microsoft Windows 2000 is detected as being a version of Windows that is earlier
	than Windows 95.
	
	
	WORKAROUND
	==========
	
	To work around this problem use the Windows NT Running check configuration
	option instead of the Windows 95 or Later Running option.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 2.0.148.00.
	
	Additional query words: prodsms isu
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMSI200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
