---
layout: page
title: "Q247444: Err Msg: This User or User Group Could Not Be Added to the SMS.."
permalink: /kb/247/Q247444/
---

## Q247444: Err Msg: This User or User Group Could Not Be Added to the SMS..

	Article: Q247444
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbsms200
	Last Modified: 07-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Security Wizard in the Systems Management Server (SMS) 2.0
	Administrator Console to add a global group to SMS security, you may receive the
	following error message:
	
	  This user or user group could not be added to the SMS Admins local group.
	  This user or group has been added to SMS but will not have access until it or
	  a global group it is a member of is added to the SMS Admins local group. See
	  'WBEM Security/SMS Provider section' in Chapter 4 of the SMS 2.0
	  Administrators Guide for more information.
	
	Note that this symptom may occur when you add global groups if SMS is installed
	on a backup domain controller, but adding global groups works correctly if SMS
	is installed on the primary domain controller.
	
	WORKAROUND
	==========
	
	To work around this problem, manually add the global group to the SMS Admins
	local group on the site server.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms Manage Users Node
	
	======================================================================
	Keywords          : kberrmsg kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
