---
layout: page
title: "Q298932: &quot;Connection Test Failed&quot; Error with SMS Web Reports Installation"
permalink: kb/298/Q298932/
---

## Q298932: &quot;Connection Test Failed&quot; Error with SMS Web Reports Installation

	Article: Q298932
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbsms200 kbsms200bug smsinst
	Last Modified: 28-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install SMS Web Reports, you may receive the following error
	message:
	
	  Connection test failed! Please verify you have entered the connection
	  information correctly.
	
	CAUSE
	=====
	
	The SMS Web Reports require the use of standard security for the connection to
	the SQL server. This error can occur if standard security is not enabled on the
	SQL server. The following requirements must be met so you can install SMS Web
	Reports:
	
	- Installation requires Mixed or Standard SQL Security mode, and will not work
	  with Integrated Security mode.
	
	- When you install the SMS Web Reporting tool, you must type the password for
	  the SA user account on the SQL server.
	
	MORE INFORMATION
	================
	
	When you install SMS Web Reports, Setup must be able to grant READ access to the
	SQL view objects. This requires the use of the SA account to obtain DBO rights
	to the SQL view objects.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
