---
layout: page
title: "Q315715: SMS: Cannot Reinstall Inventory Components on Windows XP"
permalink: kb/315/Q315715/
---

## Q315715: SMS: Cannot Reinstall Inventory Components on Windows XP

	Article: Q315715
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbsms200 kbsms200bug kbsms200preSP4fix
	Last Modified: 10-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may not be able to install the Systems Management Server (SMS) Software
	Inventory Client Agent on your Microsoft Windows XP-based computer. This
	inability occurs after you remove the client and then install it again with
	SMSMAN or 20clicln.bat. The following entry may appear in the Sinv32.log file:
	
	  ERROR 4 - Get SW Inventory Sites data failed !!
	
	CAUSE
	=====
	
	By default, registry key permissions are provided to the logged-on user and
	System accounts in Windows XP. To remove the SMS client and then install it
	again, the SMSClitoknacct& account is used. However, the account is deleted
	and re-created during this process which changes its Security Identifier (SID).
	This affects the Access Control List (ACL) for the registry keys because the SID
	is different for the new account.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was first corrected in SMS 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	SMS 2.0 Service Pack 4 adds explicit permissions for the local Administrators
	group and system account on hardware and software inventory Sites registry
	subkeys and the remote control Wuser32Initialized registry subkey.
	
	This problem did not occur in Microsoft Windows 2000 or earlier versions of
	Windows because the default permissions that were created were assigned to the
	local Administrators group, in which the newly-created SMSClitoknacct&
	account is added as a member.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbsms200 kbsms200bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
