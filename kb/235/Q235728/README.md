---
layout: page
title: "Q235728: SMSINST: Edit .ini Fails on Win95/98 if Compiled w/ 32-Bit Only"
permalink: kb/235/Q235728/
---

## Q235728: SMSINST: Edit .ini Fails on Win95/98 if Compiled w/ 32-Bit Only

	Article: Q235728
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:2.0; winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug smsinst
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Microsoft Systems Management Server Installer version 2.0 to compile
	a script with the Edit INI File action included in it, the action might fail if
	the script is run on a Microsoft Windows 95 or a Microsoft Windows 98 system.
	
	This will occur if the script was compiled using the Microsoft SMS Installer 32
	and it was compiled only for 32-bit clients. The option to compile only for
	32-bit clients is selected under installation properties\destination platforms
	in the script editor. Select both 16-bit and 32-bit under installation
	properties\destination platforms in the script editor before compiling the
	executable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 2.0. This problem has been corrected in the latest U.S.
	service pack for Systems Management Server Installer version 2.0. For
	information on obtaining the service pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMS200 kbSMSI200
	Version           : WINDOWS:2.0; winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
