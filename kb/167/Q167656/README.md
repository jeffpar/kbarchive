---
layout: page
title: "Q167656: SMS: Despooler Does Not Preserve Existing Rights on Shares"
permalink: /kb/167/Q167656/
---

## Q167656: SMS: Despooler Does Not Preserve Existing Rights on Shares

	Article: Q167656
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDespooler smsdespooler
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server Despooler service does not preserve share,
	directory, or file permissions for a software distribution package. If the
	administrator sets special permissions for a package on the destination
	distribution server, and then distributes the package again, the Despooler
	overwrites those permissions.
	
	CAUSE
	=====
	
	The Systems Management Server Despooler is designed to support only Read or
	Read/Write permissions. Every time it redistributes an application, it resets
	the permissions to whatever the permissions are set for that package in the
	Systems Management Server Administrator program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. This problem was corrected in the latest Microsoft
	Systems Management Server 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The hotfix will not change any permissions if the share or directory already
	exists. This allows administrators to set file and/or directory permissions
	after the initial distribution of the package. Any additional redistribution of
	that same package will not overwrite the permissions for that package.
	
	The Forced Disconnect feature available in Systems Management Server version 1.2
	should not be used because the share permissions will be restored to the default
	permissions after the Forced Disconnect process has completed.
	
	Additional query words: prodsms NetWare Novell rights change
	
	======================================================================
	Keywords          : kbnetwork kbDespooler smsdespooler 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
