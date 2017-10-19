---
layout: page
title: "Q186413: SMSINST: Rollback Feature Can Cause an &quot;UNWISE&quot; Error Message"
permalink: /kb/186/Q186413/
---

## Q186413: SMSINST: Rollback Feature Can Cause an &quot;UNWISE&quot; Error Message

	Article: Q186413
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): smsinst
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the rollback feature of Systems Management Server Installer, you may
	receive the following message:
	
	  UNWISE
	
	  An error has occurred in your application
	  If you choose Ignore, you should save your work in a new file.
	  If you choose Close, your application will terminate.
	
	If you click Close, the following message may appear:
	
	  Application Error
	
	  UNWISE caused a General Protection Fault in module UNINSTAL.EXE at 0001:6d86
	
	If the same script is run without a backup directory, Uninstall may operate
	correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server Installer 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : smsinst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
