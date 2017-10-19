---
layout: page
title: "Q258788: Cannot Change Password in Windows Without Logging on to Domain"
permalink: /kb/258/Q258788/
---

## Q258788: Cannot Change Password in Windows Without Logging on to Domain

	Article: Q258788
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; :4.0; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmigrate kbOSWin2000 kbOSWin95 kbOSWin98 w2000migrate
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows NT Advanced Server, version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a password policy is being used in a Windows 2000 domain and some or all of
	the users in the domain were migrated to Active Directory by using the Active
	Directory Migration tool, users who attempt to change their password after
	receiving the "Password Change Notification" message may receive the following
	error message:
	
	  You do not have permission to change your password.
	
	If a user instead chooses not to change the password by clicking No, the user is
	logged on with the old password, which the user can change any time thereafter.
	
	CAUSE
	=====
	
	This behavior occurs if the Everyone group has not been granted the Change
	Password right on the user object. By default, the "Password Change
	Notification" message appears 14 days before the "Maximum password age" policy
	setting.
	
	If the Everyone group does not have the Change Password right on the object,
	passwords cannot be changed over the null session connection (anonymous logon
	relies on the Everyone group to carry out this action) established between the
	workstation and a domain controller. Instead, an authenticated session is
	required to change a password (users must be logged on to change their
	password).
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Start the Active Directory Users and Computers snap-in.
	
	2. Right-click your domain, and then click Advanced Features on the View menu to
	  enable advanced features.
	
	3. Right-click the container hosting the user object to which you want to grant
	  the Change Password right (for example, Users), and then click Properties .
	
	4. Click the Security tab. Make sure that the Everyone group is listed in the
	  Name box. If it is not, click Advanced, and then add the Everyone group to
	  the list from the Advanced Access Control Settings dialog box. If the
	  Everyone group does exist, click Advanced and continue with the next step.
	
	5. Click the Everyone group in the list, and then click View/Edit to edit the
	  group's permissions. In the Apply Onto box, click User Objects. In the
	  Permissions section, click to select the Change Password permission in the
	  Allow box.
	
	
	6. Click OK to accept the changes.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmigrate kbOSWin2000 kbOSWin95 kbOSWin98 w2000migrate 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTAdvSerSearch kbWinNTAdvServ400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin95search kbWin98search kbWinAdvServSearch kbWinDataServSearch kbZNotKeyword3 kbWin98
	Version           : WINDOWS:2000; :4.0; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
