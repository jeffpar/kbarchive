---
layout: page
title: "Q213272: SMS: Class Rights in User Manager Are Not Added to Groups"
permalink: kb/213/Q213272/
---

## Q213272: SMS: Class Rights in User Manager Are Not Added to Groups

	Article: Q213272
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbMMC kbSecurity kbsms200 kbsms200bug kbsmsAdmin kbsmsUtil
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure security rights for a user class using the Systems Management
	Server 2.0 console tree, the account is not added to the Systems Management
	Server Administrators group in the User Manager for Domains tool.
	
	WORKAROUND
	==========
	
	To work around this issue, add a user to the Administrators group using the
	Security wizard. To automate this procedure, use the Systems Management Server
	User Wizard to assign class rights to users. The User Wizard adds the user to
	the Systems Management Server Administrators group.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms smsfaqtop
	
	======================================================================
	Keywords          : kbMMC kbSecurity kbsms200 kbsms200bug kbsmsAdmin kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
