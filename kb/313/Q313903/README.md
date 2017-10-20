---
layout: page
title: "Q313903: HOW TO: Change a User Name in a Domain in Windows NT 4.0"
permalink: /kb/313/Q313903/
---

## Q313903: HOW TO: Change a User Name in a Domain in Windows NT 4.0

{% raw %}

	Article: Q313903
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbAudITPro kbHOWTOmaster
	Last Modified: 24-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Create a New User Account
	- Disable the Old User Account
	- Troubleshooting
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to change a user's name in a Windows NT
	4.0 domain environment. The most efficient way to accomplish this is to create a
	new user account by copying the user account that is being modified, and then
	disabling the old account. A member of the administrators group on a Windows NT
	4.0-based domain controller (DC) will complete the following procedures.
	
	Create a New User Account
	-------------------------
	
	1. Click Start, point to Programs, point to Administrative Tools, and then click
	  User Manager.
	
	2. Click the user account that you want to modify, and then click Copy on the
	  User menu.
	
	3. In the User Name box, type the new name for the user, and then provide the
	  rest of the user information.
	
	4. Click to select the "User must change password at next login" check box, and
	  then click OK.
	
	Disable the Old User Account
	----------------------------
	
	1. In the User Manager window, double click the old user account.
	
	2. Click Account Disabled, and then click OK.
	
	Troubleshooting
	---------------
	
	This procedure will not copy the existing Access Control Lists (ACLs) for the old
	user account. New ACLs will need to be created for the new user account.
	
	REFERENCES
	==========
	
	For additional information on modifying account passwords, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q272530 How to Use the Cusrmgr.exe Tool to Change Administrator Account
	  Password on Multiple Computers
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbtool kbAudITPro kbHOWTOmaster 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
