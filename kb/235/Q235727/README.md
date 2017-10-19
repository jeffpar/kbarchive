---
layout: page
title: "Q235727: SMSINST: Repackage Does Not Detect Deleted Reg Keys and Values"
permalink: /kb/235/Q235727/
---

## Q235727: SMSINST: Repackage Does Not Detect Deleted Reg Keys and Values

	Article: Q235727
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug smsinst
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer versions 2.0, 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server Installer fails to detect deleted registry keys during
	the repackaging process. This problem may be found when trying to repackage the
	unintstallation of an application. Use the Script Editor to manually delete the
	desired registry keys by modifying the Systems Management Server Installer
	script with the Edit Registry action.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	This functionality is included in versions of Systems Management Server
	Installer 2.0.91.00 and higher.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMSI100 kbSMSI200
	Version           : WINDOWS:1.0,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
