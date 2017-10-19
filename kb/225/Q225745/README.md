---
layout: page
title: "Q225745: Administrators Can Remove Themselves from the Permissions for a"
permalink: /kb/225/Q225745/
---

## Q225745: Administrators Can Remove Themselves from the Permissions for a

	Article: Q225745
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Administrators can remove any share or NTFS security permissions from a shared
	device, including their own permissions to a device. In many cases, this action
	could remove the only group that had permission to the resource. This
	effectively leaves the shared device with no way to gain access at all, similar
	to setting Everyone with "No Access".
	
	As a safeguard, Windows NT prompts the administrator with this warning message
	when removing the last user or group from NTFS security permissions to a
	resource:
	
	  You have denied everyone access to C:\share-name. Nobody will be able to
	  access C:\share-name and only the owner will be able to change the
	  permissions.
	  Do you wish to continue?
	  Yes
	  No
	
	Here is the warning message displayed when removing the last user or group from
	Share permissions to a resource:
	
	  You have denied everyone access to (Folder name). Nobody will be able to
	  access (Folder name) and only the owner will be able to change the
	  permissions.
	  Do you wish to continue?
	  Yes
	  No
	
	After performing this operation, any attempt to gain access to the folder yields
	the following error message:
	
	  C:\share-name is not accessible.
	  Access is Denied.
	  Retry
	  Cancel
	
	CAUSE
	=====
	
	This behavior occurs by design of the Windows NT operating system. The
	Administrator can add and remove any user's or group's permissions to a
	resource.
	
	RESOLUTION
	==========
	
	To resolve this problem and correct the Share permissions of a shared resource:
	
	1. Double-click on My Computer to display the computer's resources.
	
	2. Click on the share resource, example C:\Share_name.
	
	3. On the File menu, click Properties.
	
	4. Click the Share tab.
	
	5. Click Permissions.
	
	6. View the groups and users along with their permissions. Change existing share
	  permissions using the Type of Access list.
	
	7. If the group or user is not listed, click Add.
	
	8. Select the appropriate group or user from the list by double-clicking on the
	  name, then use the Type of Access list to select Full Control.
	
	9. Click OK, and view the results on the previous screen. Click OK, and then
	  click OK again on the main Properties dialog box.
	
	10. Test the access from a client workstation to validate the shared
	  permissions.
	
	To Correct the NTFS security permissions by either adding appropriate permissions
	or to Take Ownership of a shared resource:
	
	1. Double-click My Computer to display the computer's resources.
	
	2. Click the share resource. For example, C:\Share-name.
	
	3. On the File menu, click Properties.
	
	4. Click Security tab.
	
	5. Click either the Permissions button or the Ownership button, depending on the
	  desired result. Try the permissions button first.
	
	6. View the groups and users as well as their permissions. Change existing
	  permissions by using the Type of Access list.
	
	7. If the group or user is not listed, click Add.
	
	8. Click the appropriate group or user from the list by double-clicking on the
	  name, then use the Type of Access list to select Full Control
	
	9. Click OK, view the results on the previous screen, and then click on the
	  appropriate check boxes for "Replace Permissions on Subdirectories" and
	  "Replace Permissions on Existing Files". These both apply the permissions
	  from the share point to sub-folders and files.
	
	10. Then click OK, and CLICK OK again on the Main Properties page.
	
	11. Test the access privileges to validate the NTFS permissions.
	
	If the appropriate level of permissions has not been recovered:
	
	1. Take Ownership is appropriate.
	
	2. Follow steps 1 - 4 from the NTFS permissions section above.
	
	3. Click the Ownership button.
	
	4. A dialog box appears and displays:
	
	  Directory Name: D:\
	  Owner: Administrators
	  Close
	  Take Ownership
	  Help
	
	5. Click the Take Ownership button.
	
	6. This causes the following error message to be displayed:
	
	  One or more of the items selected is a directory. Do you want to take
	  ownership of all the files and contained in the selected directories?
	  Yes
	  No
	  Cancel
	
	7. Click Yes, which makes the Administrators the owner of the whole directory
	  structure and all of the files in it.
	
	  Taking Ownership is also a good way to gain access to the home folder of a
	  user that has left the organization. The Administrator can take ownership of
	  the resource and then assigns permissions to a new user.
	
	Note: This will also work if you install in a separate hard drive (if you cannot
	boot into the system), conduct a parallel install, and then take ownership.
	
	MORE INFORMATION
	================
	
	Administrators always have the ability to add themselves back to the share or
	modify NTFS permissions to a shared resource. An administrator can also "Take
	Ownership" of the device if all permissions have been lost.
	
	For more information concerning SBS NTFS Permissions, please see the following
	articles in the Microsoft Knowledge Base:
	
	  For additional information, please see the following article(s) in the
	  Microsoft Knowledge Base:
	
	  Q225026 Sharing the root folder using an SBS wizard doesn't work.
	
	  For additional information, please see the following article(s) in the
	  Microsoft Knowledge Base:
	
	  Q148437 Default NTFS Permissions in Windows NT
	
	  For additional information, please see the following article(s) in the
	  Microsoft Knowledge Base:
	
	  Q185558 User Names Missing in Setup Computer and Manage Users Wizards
	
	Additional query words: NTFS Share Access
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
