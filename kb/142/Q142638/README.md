---
layout: page
title: "Q142638: Can't Create New Microsoft Mail Postoffice"
permalink: kb/142/Q142638/
---

## Q142638: Can't Create New Microsoft Mail Postoffice

	Article: Q142638
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Windows for Workgroups 3.11 is upgraded to Windows NT Server 3.51, the
	Microsoft Mail dialog box that allows you to choose between connecting to an
	existing postoffice or creating a new one does not appear if a Workgroup
	postoffice (WGPO) was previously installed on the system at the time of the
	upgrade. The system will allow you to add and delete new users to the existing
	postoffice; however, the administrator cannot create a new postoffice. Searching
	for all Msmail.ini files and deleting them does not fix the problem, nor does
	deleting the existing WGPO directory structure.
	
	If you delete the existing WGPO directory structure, you get an error message
	stating
	
	  The configuration for the Mail Server Path is missing or invalid.
	
	A look at the properties for the icon in the Main group shows Msmail32.exe as the
	executable file.
	
	WORKAROUND
	==========
	
	The workaround for this situation is to delete the existing WGPO directory
	structure and then perform the following:
	
	1. Create another user account that has Administrator privileges (copy the Admin
	  account).
	
	2. Log on to the new account.
	
	3. Go to Main/NT Setup/Delete User Profiles.
	
	4. Delete the Administrator's profile.
	
	5. Log off.
	
	6. Log on as the administrator.
	
	7. Go to the Main group and double-click the Microsoft Mail icon--you should now
	  be able to create the new postoffice.
	
	MORE INFORMATION
	================
	
	The reason the administrator cannot create a new postoffice, even when the
	Msmail.ini file is deleted and the WGPO directory structure is removed, is
	because the profile for the administrator contains user-specific information
	about the postoffice that was on the system. Deleting the user profile for the
	administrator forces Windows NT to build a new one that does not contain that
	information.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
