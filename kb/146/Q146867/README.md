---
layout: page
title: "Q146867: Cannot Load User Profiles from Windows NT-Based Computer"
permalink: /kb/146/Q146867/
---

## Q146867: Cannot Load User Profiles from Windows NT-Based Computer

{% raw %}

	Article: Q146867
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a Microsoft Windows NT version 3.51-based computer from a
	Windows 95-based computer, your user profile may not be loaded. Instead, a
	default user profile may be loaded. Also, when you quit Windows 95, the default
	user profile you are using may overwrite your existing user profile in the home
	directory on the Windows NT-based computer. Or, you may receive the following
	error message:
	
	  An error occurred while copying the file <xxxxx.xxx>. Profile Error 9.
	
	  Some of your profile settings may not be available.
	
	<xxxxx.xxx> usually refers to a .lnk file.
	
	CAUSE
	=====
	
	If a user profile is located in a compressed folder on a Windows NT-based
	computer, it is not read by Windows 95.
	
	RESOLUTION
	==========
	
	
	To work around this problem, do not store user profiles in compressed folders on
	Windows NT-based computers. If necessary, uncompress the folder used to store
	user profiles and re-create the user profiles.
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	Although Windows 95 does not read user profiles stored in compressed folders on
	Windows NT-based computers, it can overwrite them. When you quit Windows 95, the
	current user profile is written to the home directory on the Windows NT-based
	computer. If a default user profile is loaded with you log on to Windows 95, the
	default profile overwrites your existing user profile when you quit Windows 95.
	
	Uncompressing the folder allows Windows 95 to read user profiles in the folder,
	but does not restore user profiles that have been overwritten.
	
	For related information, see the following article in the Microsoft Knowledge
	Base:
	
	  Q164512 Windows 95 Briefcase: No Drag-and-Drop on WinNT Compressed Dir
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
