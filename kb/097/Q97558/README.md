---
layout: page
title: "Q97558: Windows NT Err Msg: Logon Failure"
permalink: /kb/097/Q97558/
---

## Q97558: Windows NT Err Msg: Logon Failure

{% raw %}

	Article: Q97558
	Product(s): Microsoft Windows NT
	Version(s): ; Win2000:95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	- Microsoft Windows NT Server version 3.5,3.51,4.0 
	- Microsoft Windows NT Workstation version 3.5,3.51,4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you try to establish a connection from a Microsoft Windows for Workgroups
	computer to a shared resource on a Windows NT computer, you may receive one or
	both of the following error messages:
	
	- From Windows NT: Logon failure: the user has not been granted the requested
	  logon type at this computer.
	
	- From Windows for Workgroups: System Error: DOS error 31 occurred. Or The
	  password you specified is incorrect or your account is inactive. See your
	  network administrator for your password or to activate your account.
	
	- From Windows 95 The Domain password you supplied is not correct or access to
	  your logon server has been denied.
	
	These errors occur because another user logged on to the Windows NT computer as
	Administrator, and disabled privileges for the EVERYONE group ("Access this
	computer from network," for example). This prevents other users from accessing
	the shared resource.
	
	Steps to Resolve Problem
	------------------------
	
	On the computer that is running Windows NT, restore network access rights to the
	EVERYONE group by following the steps below:
	
	1. Log on as Administrator.
	
	2. From the Administrative Tools window, choose the User Manager icon.
	
	3. From the Policies menu, choose User Rights.
	
	4. Select "Access this Computer From Network" from the right dialog box, then
	  choose the Add button.
	
	5. In the Grant To dialog box, select the Everyone check box.
	
	6. Exit Windows NT and turn off the computer.
	
	7. Restart Windows NT so that the changes can take effect.
	
	NOTE: Steps 6 and 7 are not needed on computers running Windows NT 3.51 or
	later.
	
	Additional details are available for the above error message by typing:
	
	  C:\>NET HELP 31
	
	at any MS-DOS or Windows NT command prompt.
	
	Additional query words: wfw wfwg prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTSsearch kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3
	Version           : :; Win2000:95; winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
