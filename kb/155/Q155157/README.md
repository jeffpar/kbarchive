---
layout: page
title: "Q155157: Error Changing Password at Logon with Dial-Up Networking"
permalink: /kb/155/Q155157/
---

## Q155157: Error Changing Password at Logon with Dial-Up Networking

{% raw %}

	Article: Q155157
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are prompted to change your password while you are logging on using a
	Dial-Up Networking (DUN) connection, you receive the following error message
	after typing your new password:
	
	  The system could not log you on. Make sure your user name and domain are
	  correct, then type your password again. Letters in passwords must be typed
	  using the correct case. Make sure that Caps Lock is not accidentally on.
	
	If you click OK, you can log on using the new password.
	
	RESOLUTION
	==========
	
	Ignore the error message. After you click OK, log on with your user name and new
	password. Because you are still connected using a DUN connection, it is
	unnecessary to click the Logon Using Dial-Up Networking check box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This situation most often occurs when the "User must change password at next
	logon" option is enabled in your user account properties on the domain
	controller.
	
	Additional query words: remote access service dialup pdc bdc
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
