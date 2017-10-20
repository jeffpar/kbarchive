---
layout: page
title: "Q138083: Implementing the %SERVERNAME% Environment Variable In Profiles"
permalink: /kb/138/Q138083/
---

## Q138083: Implementing the %SERVERNAME% Environment Variable In Profiles

{% raw %}

	Article: Q138083
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to implement the %SERVERNAME% environment variable in
	the user profile path of the Windows NT User Manager. This environment variable
	must be set on the workstation computer, not the domain controller.
	
	MORE INFORMATION
	================
	
	When you have configured a user's profile path in User Manager, the entry looks
	similar to this:
	
	  UserProfiles User Profile Path: \\%SERVERNAME%\profiles\user1.usr
	
	The %SERVERNAME% variable provides load balancing and performance improvements.
	As Administrator, you can spread the load of processing user profiles to another
	server by setting the SERVERNAME environment variable to the name that is
	located close to the workstation. When a user logs into the domain, they are
	directed to \\%SERVERNAME%, where %SERVERNAME% has been set to the name of a
	server, for example, "Server1".
	
	The profile server should be close to the client's computer (not located across a
	slow link) to expedite log on. For example, on all workstations in Phoenix, set
	the variable to a Server name that is located in Phoenix. On workstations in
	Seattle, set the variable to a Server name that is located in Seattle. That way,
	when a user is in Phoenix, his or her logon script is executed on a controller
	in Phoenix. When that user visits Seattle, his or her logon script is executed
	on a controller in Seattle.
	
	Setting the Environment Variable On Workstation Using A Server
	--------------------------------------------------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Log on to a to the domain as "Administrator".
	
	2. Run the Registry Editor (REGEDIT32.EXE) and select the workstation's computer
	  name from the list.
	
	3. Be sure to select the HKEY_LOCAL_MACHINE of the workstation you have
	  connected to, not your computers' HKEY_LOCAL_MACHINE.
	
	4. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Control\Session Mgr\Environment
	
	5. From the Edit menu, select Add Value.
	
	6. Enter the following:
	
	  Value Name: SERVERNAME
	  Data Type: REG_SZ
	  String: <Server1>
	
	7. Click OK and quit the Registry Editor.
	
	8. Shut down and restart Windows NT.
	
	9. Open User Manager on a domain controller.
	
	10. Edit one of the user accounts. For example:"user1". In the Profile, set the
	  User's Profile Path to:
	  \\%SERVERNAME%\share\user1.usr
	  Make sure that there is a shared directory on Server1.
	
	11. Exit User Manager.
	
	12. Enter the User Profile Editor.
	
	13. Select the user that you want to access this profile, "user1".
	
	14. Make the appropriate changes.
	
	15. Save this to a file and place it on \\<Server1>\<share>.
	
	16. Have the user log on to the domain.
	
	NOTE: The directory where the profiles reside must be shared. In this example,
	the directory PROFILES was given a share name of "share". This must be done on
	every Server that participates. In this case, there is only one Server (Server1)
	involved.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50 3.51
	
	=============================================================================
	

{% endraw %}
