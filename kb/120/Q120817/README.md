---
layout: page
title: "Q120817: How to Delete and Re-create a WFWG Post Office"
permalink: /kb/120/Q120817/
---

## Q120817: How to Delete and Re-create a WFWG Post Office

	Article: Q120817
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some cases, you may need to delete and re-create the Windows for Workgroups
	post office (WGPO); however, before you delete a WGPO, make sure that the
	following steps have been taken:
	
	- All Schedule+ calendar resource files have been exported.
	
	- Backups have been made of all shared folders in Microsoft Mail.
	
	- No users' mail message files exist in the WGPO.
	
	- All users are signed out of Mail, Schedule+, and Schedule+ Reminder.
	
	- Workgroup Add-On for MS-DOS mail users' files are not stored on the WGPO.
	
	MORE INFORMATION
	================
	
	Exporting Resource Schedules
	----------------------------
	
	For a Schedule+ resource (such as a conference room), sign in as the resource and
	export the schedule. By default, the password is "password" (without the
	quotation marks).
	
	Saving Shared Folders
	---------------------
	
	To save messages stored in shared folders, the contents of a shared folder must
	be copied into a private folder. You can then export the private folder.
	
	Verify That No Mail Messages Are Stored on the WGPO
	---------------------------------------------------
	
	Check the MMF subdirectory on the WGPO for files with the .MMF extension. If any
	.MMF files are found, the user with a mail file on the server can choose to
	configure Mail to store the file locally on his or her computer. This is done
	using the Mail Options menu. The mail files can also be exported from the WGPO.
	
	To export an .MMF file:
	
	1. Start Mail on the computer with the WGPO.
	
	2. From the File menu, choose Export Folder.
	
	3. Insert a new filename and storage location.
	
	  IMPORTANT: If you choose a filename from the displayed list, the selected file
	  is overwritten, resulting in data loss.
	
	4. In the Export Folders dialog box, select the folders you want to save.
	
	5. Choose Copy.
	
	Exit and Sign Out
	-----------------
	
	All users should exit and sign out of Mail, Schedule+, and Schedule+ Reminders.
	To do so, choose Exit And Sign Out from the File menu.
	
	Saving Workgroup Add-On for MS-DOS Mail User Messages
	-----------------------------------------------------
	
	To save Workgroup Add-On for MS-DOS mail messages on your local computer:
	
	1. Start Mail.
	
	2. From the Options menu, choose Folders.
	
	3. Select Private-Storage and then select Local Storage.
	
	4. Enter a local path for the message folder.
	
	When you have completed all of the above steps, safe deletion of a WGPO is
	possible. You can now delete the WGPO and rename the MSMAIL.INI file. After
	doing so, choose the Mail icon to display a menu enabling creation of a new post
	office.
	
	To re-enable other users to access the newly created post office, do the
	following:
	
	- Direct each user to delete his or her MSMAIL.INI file, restart Mail and
	  re-create his or her account on the post office.
	
	  -or-
	
	- Have the Postoffice Manager create an account for each existing user and
	  insert their most recent passwords in place of the default "password."
	
	
	Additional query words: ms mail msmail
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
