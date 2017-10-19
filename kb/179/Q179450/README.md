---
layout: page
title: "Q179450: Unable to Modify Logon Hours on a Member Server"
permalink: /kb/179/Q179450/
---

## Q179450: Unable to Modify Logon Hours on a Member Server

	Article: Q179450
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a stand-alone server or member server in a domain environment, administrators
	are unable to modify the logon hours for a user in User Manager. These hours can
	be set if a new user account is created by using the Add User Accounts wizard
	included in the Administrative Wizards. However, after the user is created,
	there is no way to adjust this restriction through User Manager.
	
	CAUSE
	=====
	
	In User Manager, the button entitled Hours does not exist and, therefore,
	prevents modification of a user's logon hours on the server.
	
	RESOLUTION
	==========
	
	The user's logon hours can be modified by using the NET USERS command. For
	example, to set the user's logon hours to Mondays and Tuesdays from 2:00 A.M. to
	3:00 A.M., enter the following command:
	
	C:\>NET USER USER_NAME /TIMES:MONDAY,TUESDAY,2
	
	Further information on the NET USERS command can be obtained by typing:
	
	C:\>NET HELP USERS
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q274435 You Cannot Use Logon Hours with a Windows 2000 Professional-Based
	  Computer That Is in a Workgroup
	
	Additional query words: restrict restricted
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
