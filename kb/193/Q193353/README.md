---
layout: page
title: "Q193353: PRB: Policy to Not Display Last Username on RDP Client"
permalink: /kb/193/Q193353/
---

## Q193353: PRB: Policy to Not Display Last Username on RDP Client

{% raw %}

	Article: Q193353
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When connecting to Terminal Server from an RDP client and the policy "Do not
	display last logged on user name" is enabled, the client still displays the
	username as if no policy exists. The behavior at the console is as expected.
	
	CAUSE
	=====
	
	Built into the RDP client is the functionality to display the username and the
	domain to which the client last logged on using the client. This information is
	also automatically filled in when connecting to servers that the client has
	never connected to before. By doing this, the client only has to enter his or
	her password.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The registry location for this policy is
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Winlogon
	  REG_SZ Value DontDisplayLastUserName
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	A value of 1 indicates that the policy is enabled, and a value of 0 indicates
	that it is disabled.
	
	REFERENCES
	==========
	
	For more information, see the following article in the Microsoft Knowledge
	Base:
	
	  Q114463 Hiding the Last Logged On Username in the Logon Dialog
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
