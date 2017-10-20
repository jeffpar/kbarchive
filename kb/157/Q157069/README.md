---
layout: page
title: "Q157069: &quot;Can't Access This Folder. Path Is Too Long&quot; Error"
permalink: /kb/157/Q157069/
---

## Q157069: &quot;Can't Access This Folder. Path Is Too Long&quot; Error

{% raw %}

	Article: Q157069
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you log on to a computer running Windows NT Workstation or Server, you get
	a dialog box with the following error message or you get a blank desktop:
	
	  Can't access this folder. The path is too long.
	
	RESOLUTION
	==========
	
	Log on as the local Administrator and verify that either the user or a group (of
	which the user is a member) has at least read access to the root of the system
	drive. To accomplish this if the desktop is blank, follow the procedure below:
	
	1. Start Task Manager by pressing CTRL+ALT+DELETE.
	
	2. On the File menu, click New Task.
	
	3. In the Run dialog box, start Explorer.exe or Winfile.exe.
	
	4. View the security permissions of the system drive.
	
	If the user or group does not have this access, add it to the directory
	permissions for the user or group. Do not select the Apply To Subdirectories
	check box.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q148437
	  TITLE : Default NTFS Permissions in Windows NT
	
	MORE INFORMATION
	================
	
	If a user logs on to a workstation (either locally or to a domain) and is not
	listed by group or name to have any access permissions to the root directory
	where the system files reside, the following problems can occur:
	
	- If the user logs on to the domain from the workstation or member server, he
	  or she will get a dialog box with the following error, followed by a blank
	  desktop:
	
	  Can't access this folder. The path is too long.
	
	  However, a profile is created in the %SystemRoot%\Profiles directory for that
	  user.
	
	- If the workstation or server is not a member of a domain, or if the user
	  decides to log on locally, the error message may or may not be displayed, but
	  a blank desktop with the profile created in the profiles directory will
	  occur.
	
	The scenarios described above have only been confirmed with Windows NT 4.0
	clients. The domain that a user logs on to can be either a Windows NT 3.51 or a
	Windows NT 4.0 domain with the same results. This is one type of scenario that
	can occur if directory permissions are not set up properly on a client.
	
	Additional query words: path profiles
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a kbSBServ450
	Version           : :4.0,4.0a,4.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
