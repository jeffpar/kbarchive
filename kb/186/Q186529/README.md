---
layout: page
title: "Q186529: Local Policy Does Not Permit You to Log On Interactively"
permalink: /kb/186/Q186529/
---

## Q186529: Local Policy Does Not Permit You to Log On Interactively

{% raw %}

	Article: Q186529
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
	
	By default, the group called "Everyone" has the right to log on locally on a
	Terminal Server. This means that any user should be able to log on at the
	Terminal Server console. This is different from a normal Windows NT Server,
	where the default would be that only the administrator can log on locally. When
	clients connect to a Terminal Server, they are actually using the Terminal
	Server console. That is the reason for the different default right.
	
	RESOLUTION
	==========
	
	If you want to limit this right, create a group specifically for your Terminal
	Server Clients, and grant this group the right to log on locally. You can then
	remove the Everyone group, limiting console logon rights to the Client group and
	the administrator.
	
	If a Client or a User at the Console Gets the Error
	---------------------------------------------------
	
	Local policy of this system does not permit you to log on interactively, so that
	user does not have the right to log on locally.
	
	To grant or remove the right to log on locally:
	
	1. Start User Manager for Domains.
	
	2. Click Policies, then click User Rights.
	
	3. In the Rights field, select Log On Locally.
	
	4. In the Grant To field, select the users and/or groups you want to have this
	  right.
	
	NOTE: You will also see this error if you modify a user's configuration in User
	Manager by de-selecting the Allow Logon to Terminal Server checkbox.
	
	NOTE: If you install a Terminal Server as a backup domain controller, and the
	current primary domain controller's policy is set so that users do not have the
	right to log on locally, then the new Terminal Server inherits that policy. The
	result will be that no clients can connect to the Terminal Server. If a Terminal
	Server is a domain controller, the entire domain MUST use have a policy allowing
	users to log on locally.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
