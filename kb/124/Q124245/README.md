---
layout: page
title: "Q124245: Closing LAN Manager Logon Script Dialog Box Automatically"
permalink: /kb/124/Q124245/
---

## Q124245: Closing LAN Manager Logon Script Dialog Box Automatically

	Article: Q124245
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	Logon scripts assigned to a user account run when the user logs on,
	regardless of the user's workstation type. If the workstation is running
	Windows for Workgroups, the LAN Manager Logon Script dialog box remains on
	the screen until you choose Cancel. In LAN Manager 2.2, the logon process
	creates a zero-byte file called LMSCRIPT.$$$. The presence of this file
	indicates the logon script processing is complete.
	
	To prevent the LAN Manager Logon Script dialog box from remaining on the
	screen of a Windows for Workgroups computer, add the following commands as
	the last two lines in the logon script batch file
	
	     cd\<windir>
	     echo>\<windir>\lmscript.$$$
	
	where <windir> is your Windows for Workgroups directory.
	
	The file is created and then deleted from the hard drive. When the script
	completes, the dialog box is cleared from the screen; the domain validation
	message subsequently appears.
	
	Additional query words: wfw wfwg 3.11 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11; winnt:3.5
	
	=============================================================================
	
