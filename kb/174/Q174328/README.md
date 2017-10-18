---
layout: page
title: "Q174328: SMSINST: Repackage Does Not Capture REG_MULTI_SZ Changes"
permalink: kb/174/Q174328/
---

## Q174328: SMSINST: Repackage Does Not Capture REG_MULTI_SZ Changes

	Article: Q174328
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbusage kbsms200 kbsms200bug smsinst
	Last Modified: 18-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Systems Management Server Installer is unable to read or modify
	multi-string registry values. If a value is added or changed, only the first
	line of the multi-string data value is written.
	
	CAUSE
	=====
	
	Systems Management Server Installer currently does not have the capability to
	read or write complete multi-string registry values.
	
	WORKAROUND
	==========
	
	Use an external utility designed for editing multi-string registry values.
	Execution of such utilities can be accomplished within Systems Management Server
	Installer by using the Execute Program script item.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer 1.0.
	
	This is fixed in the latest publicly available version of Installer available on
	the Microsoft Web site at
	http://www.microsoft.com/smsmgmt/downloads/install.asp.
	
	
	
	Additional query words: prodsms multiple string
	
	======================================================================
	Keywords          : kbusage kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
