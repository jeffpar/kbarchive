---
layout: page
title: "Q200439: SMSINST: Install Status MIF Files Are Not Created on Windows 95"
permalink: /kb/200/Q200439/
---

## Q200439: SMSINST: Install Status MIF Files Are Not Created on Windows 95

	Article: Q200439
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbsmsInst
	Last Modified: 18-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Systems Management Server Installer script is compiled with WIN16/WIN32
	as its destination platform and then executed on a computer running Microsoft
	Windows 95, an Install Status MIF file may not be generated. This does not occur
	on computers running Windows NT, nor does it happen with Installer scripts
	compiled as True WIN32.
	
	WORKAROUND
	==========
	
	To work around this problem, compile your Installer executable selecting the
	True WIN32 destination platform. This can be done from the Global tab within the
	Advanced Configuration properties.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 1.0.
	
	
	Additional query words: prodsms smsinst
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbsmsInst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
