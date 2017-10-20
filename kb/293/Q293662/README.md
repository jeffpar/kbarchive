---
layout: page
title: "Q293662: SMS: Your User Account May Be Repeatedly Locked Out in a Domain"
permalink: /kb/293/Q293662/
---

## Q293662: SMS: Your User Account May Be Repeatedly Locked Out in a Domain

{% raw %}

	Article: Q293662
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 01-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use your user account in a domain, you may repeatedly be
	locked out.
	
	CAUSE
	=====
	
	This problem can occur if a computer that is running Microsoft Windows 95,
	Microsoft Windows 98, or Microsoft Windows Millennium Edition (Me) is logged on
	to the network with a domain account whose password had been changed on a
	different computer. The Windows 95-based, Windows 98-based, or Windows Me-based
	computer is still using the previous account information when it attempts to
	perform Systems Management Server (SMS) tasks, such as, when it checks for new
	software distributions or transfers inventory information.
	
	The use of the previous password can cause the domain account to lock out a user
	account. The user that has logged on to the computer is using the password that
	the user had originally used to log on to the computer, not the new password
	that had been changed on another computer. The SMS client computer continues
	with its normal SMS processes and can continually lock out the user account
	until the client is logged off from the computer.
	
	WORKAROUND
	==========
	
	To work around this problem, go to the original computer (the logged-on computer
	that is locking out the user account) and log off from the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem is a limitation of the Windows 95, Windows 98, and Windows Me
	platform: To only perform network activity in the context of the logged-on user.
	The Microsoft Windows NT and Microsoft Windows 2000 platforms do not have this
	limitation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbWinMEsearch kbSMSSearch kbWin95search kbWin98search kbZNotKeyword3 kbWin98 kbWinME kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
