---
layout: page
title: "Q244748: 14 Character Password Limitation in IMS Logon Information"
permalink: /kb/244/Q244748/
---

## Q244748: 14 Character Password Limitation in IMS Logon Information

{% raw %}

	Article: Q244748
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5,5.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 27-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enter the logon information in Internet Mail Service (IMS), you are
	unable to enter more than 14 characters in the Password box.
	
	CAUSE
	=====
	
	This issue occurs because the maximum password length that is allowed in the
	Password box is 14 characters. Some Internet service providers (ISPs) may assign
	a computer-generated password larger than 14 characters.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact your ISP to shorten your password to use 14
	characters or less.
	
	MORE INFORMATION
	================
	
	Some Internet service providers may not be able to provide a shorter password.
	Without the complete password, the Microsoft Exchange Server cannot log on to
	the ISP.
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbSBServSearch kbBackOfficeServ450 kbSBServ450
	Version           : winnt:4.5,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
