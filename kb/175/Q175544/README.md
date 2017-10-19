---
layout: page
title: "Q175544: Windows NT Setup for 3.51 Fails When Deleting User Profiles"
permalink: /kb/175/Q175544/
---

## Q175544: Windows NT Setup for 3.51 Fails When Deleting User Profiles

	Article: Q175544
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Selecting Options | Delete user profiles..., from Windows NT Setup for Windows
	NT 3.51 results in the following error message:
	
	  No user profiles were found on this machine.
	
	-Or-
	
	The following Dr. Watson error message is displayed:
	
	  An application error has occurred and an application
	  error log is being generated.
	  Setup.exe
	  Exception: access violation (0xc0000005), Address: 0x77f52edb
	
	CAUSE
	=====
	
	The stack trace shows the access violation occurs in GetUserAccounts.
	
	The GetUserAccounts function enumerates the user profile summary information from
	the following registry key:
	
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT
	\CurrentVersion\ProfileList
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	The receive buffer for the enumeration is set to a fixed length. For the case of
	approximately nine or more user profiles, the fixed buffer gets overwritten
	during enumeration, which results in the Dr. Watson access violation.
	
	WORKAROUND
	==========
	
	To work around this problem, delete the user profile(s) manually using the
	following procedure:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe), and select the following subkey:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsNT
	  \CurrentVersion\ProfileList
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Click Save Key from the Registry menu to create a backup copy of this parent
	  key.
	
	3. Within this key, select the subkey that represents the user profile that you
	  wish to delete.
	
	  You can typically determine the user name for the profile subkey by referring
	  to the ProfileImagePath value of that subkey. Make a note of that profile's
	  ProfileImagePath value, because this information is used in a later step to
	  delete the actual user profile.
	
	4. Delete the user profile subkey.
	
	5. From a command prompt, start File Manager. Go to the path referenced in the
	  ProfileImagePath value of the user profile subkey just deleted, and delete
	  the file referenced at the end of the ProfileImagePath value.
	
	RESOLUTION
	==========
	
	Obtain the updated Setupdll.dll from Microsoft Product Support Services.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
