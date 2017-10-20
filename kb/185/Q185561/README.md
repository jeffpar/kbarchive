---
layout: page
title: "Q185561: How to Enable Profile Quotas in Windows NT 4.0"
permalink: /kb/185/Q185561/
---

## Q185561: How to Enable Profile Quotas in Windows NT 4.0

{% raw %}

	Article: Q185561
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbFEA kbWinNT400sp4fea
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Workstation version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With the installation of Service Pack 4 for Microsoft Windows NT 4.0,
	administrators will have the ability to limit the amount of disk space a user
	profile can consume. This article describes how to enable this feature.
	
	MORE INFORMATION
	================
	
	Profile quotas are enabled by using a system policy.
	
	1. In System Policy Editor, load the templates Common.adm and Winnt.adm.
	
	2. Create a new policy.
	
	3. Open Default User, and then expand Windows NT User Profiles.
	
	4. When you select Limit Profile Size, the following option are available:
	
	  Custom Message
	  --------------
	
	  The text in the dialog box that appears when the user's profile exceeds the
	  quota.
	
	  Max Profile Size
	  ----------------
	
	  The maximum size of the user profile. This value defaults to 30,000 KB, so
	  administrators will want to carefully consider how low they set this value.
	  This is especially true, given the fact that users will not be able to
	  successfully log off if their profile is too large.
	
	  Include registry in file list
	  -----------------------------
	
	  When the user exceeds the profile quota, an error icon appears in the system
	  tray. Double-clicking the icon brings up a tool that lists all the files in
	  the profile, as well as the file size from the largest file to the smallest.
	  By default, the list does not include files that are smaller than 2 KB. Users
	  can consult this list to determine which files can be erased, moved to
	  server-based storage, or backed up to offline storage. When this option is
	  checked, the users' registry settings, Ntuser.dat, will be included in the
	  list. Users cannot delete this file.
	
	  Notify user when profile storage space is exceeded
	  --------------------------------------------------
	
	  By default, users will get a dialog box informing them that their user profile
	  is too large only when they attempt to log off. With this option selected, a
	  dialog box appears as soon as the profile reaches the quota size, and at a
	  configurable interval thereafter.
	
	NOTE: Remember that the user will not be able to log off if the user profile
	quota is exceeded, and, by default, small files are not listed in the dialog
	that displays the files contained in the profile. If Internet Explorer 4.x is
	installed, these small files could include the entries in the Temporary Internet
	Files folder. This cache uses a small percentage of the total drive space, but
	can easily grow to be several megabytes in size. To delete these files, the user
	will need to empty the cache through the Internet Explorer Internet Options
	dialog box.
	
	
	Additional query words: profile quota
	
	======================================================================
	Keywords          : kbFEA kbWinNT400sp4fea 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
