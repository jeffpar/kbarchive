---
layout: page
title: "Q299352: SMS: The SMSCliToknAcct&amp; Account May Be Locked Out"
permalink: kb/299/Q299352/
---

## Q299352: SMS: The SMSCliToknAcct&amp; Account May Be Locked Out

	Article: Q299352
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200 kbsms200bug
	Last Modified: 12-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SMSCliToknAcct& account may be locked out on any server that functions
	as a Client Access Point (CAP). If security auditing is turned on, the Security
	event log may show unsuccessful logon attempts, and may show account lock-outs
	with event IDs 529 and 539.
	
	CAUSE
	=====
	
	This problem may occur because SMS clients may sometimes try to connect to CAPs
	by using their local SMSCliToknAcct& account. If the domain or server has a
	lockout policy in use, the domain or server SMSCliToknAcct& account is
	locked out. This prevents Software Distribution from working on domain
	controllers or servers that are CAPs.
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
