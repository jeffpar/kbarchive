---
layout: page
title: "Q98912: PC WFW: Version 3.2 Postoffice Upgrade Instructions"
permalink: /kb/098/Q98912/
---

## Q98912: PC WFW: Version 3.2 Postoffice Upgrade Instructions

{% raw %}

	Article: Q98912
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to install version 3.2 of the Microsoft Mail for
	Windows Postoffice Upgrade for Microsoft Windows for Workgroups.
	
	The focus of these directions is based on working from the Windows for Workgroups
	station on which the Windows for Workgroups postoffice is installed. To complete
	the upgrade process, perform the following steps. You may need to make
	adjustments, as needed, if your postoffice is located on a Novell or LAN Manager
	server.
	
	NOTE: Be sure all users on the postoffice have exited and signed out of Mail
	before installing the upgrade.
	
	MORE INFORMATION
	================
	
	To upgrade the existing Windows for Workgroups postoffice to a full version 3.2
	Microsoft Mail for PC Networks postoffice, run the SETUP.EXE program from the
	Setup Postoffice disk. You will be prompted with a series of screens and
	questions.
	
	Follow the instructions, inserting disks as prompted, until the upgrade process
	is finished. The screens and questions are as follows:
	
	- Welcome screen
	
	  Setup can do the following:
	
	   - Update a Workgroup postoffice
	
	   - Copy Microsoft Mail server programs
	
	   - Copy Microsoft Mail client programs
	
	- Prompt screen
	
	  Setup then prompts for:
	
	   - Location of the postoffice data files
	
	   - Administrators mailbox name and password
	
	   - Postoffice and network name
	
	   - If you are running gateways earlier than version 3.0
	
	   - If you are moving the postoffice
	
	   - Server programs to install
	
	   - Client programs to install
	
	- Postoffice Directory Screen
	
	  Please specify the directory containing the Workgroup postoffice. The
	  postoffice must exist in this directory.
	
	  Setup suggests the following directory:
	
	     C:\MAILDATA
	
	  NOTE: The Windows for Workgroups postoffice may be located in C:\WINDOWS\WGPO
	  or in another location. If you are not sure, check with your network
	  administrator.
	
	- Mailbox screen
	
	  Enter your administrator name:
	
	- Password screen
	
	  Enter your password:
	
	- Gateway Installation screen
	
	  Will you run Microsoft Mail gateways earlier than 3.0?
	
	- Postoffice Relocation screen
	
	  No relocation
	  Microsoft LAN Manager Compatible Novell
	
	- Server programs screen
	
	  Select Server programs you want to install
	
	  Done
	  Administration and Utilities
	  Server agents
	  Modem scripts files
	
	  NOTE: You must choose to install the Administration and Utilities programs
	  here in order to access the postoffice administrator program ADMIN.EXE. This
	  utility replaces the Windows for Workgroups Postoffice Manager. You will be
	  prompted for a directory location for the Mail executable files.
	
	  Setup suggests the following directory:
	
	     C:\MAILEXE
	
	  WARNING: Do NOT specify the Windows directory.
	
	- Client Programs screen
	
	  Select the client programs you want to install
	
	  Done
	  Windows and Presentation Manager
	  MS-DOS
	
	  NOTE: You should always install the MS-DOS-based workstation even if all your
	  users will be running different workstation software. The MS-DOS client
	  installation copies files needed by other Microsoft Mail components. It may
	  also be helpful when troubleshooting the Mail system.
	
	  NOTE: You must choose to install Windows and Presentation Manager client files
	  here, if you plan to update your users' local workstations to the latest
	  version of the Windows or Presentation Manager client. If you choosing not to
	  install the files at this time, you must rerun this portion of Setup before
	  you can complete the client upgrades.
	
	- Confirm Choices screen
	
	- Updating screen
	
	  NOTE: You will see files being copied.
	
	- Installation Complete screen
	
	  Setup has successfully installed Microsoft Mail Extensions.
	
	- From File Manager, share the mail executables directory with Full Rights.
	  From File Manager, share the postoffice directory with Full Rights (if you
	  have not already done so).
	
	- For Macintosh users only: Use the Apple Macintosh Workstation disk and refer
	  to Chapter 1 of the Microsoft Mail "Administrator's Guide."
	
	- Locate the postoffice and use the ADMIN.EXE program on a nondedicated Windows
	  for Workgroups server.
	
	  NOTE: Nondedicated refers to a Windows for Workgroups computer being used as a
	  workstation and as the postoffice server.
	
	Schedule+ Installation
	----------------------
	
	- Create the Schedule+ Admin Mail account "adminsch." For more information
	  about how to do this, see Chapter 2 of the Schedule+ "Administrator's Guide."
	
	- Use the Schedule+ disks and follow the instructions in the Schedule+ for
	  Windows "Administrator's Guide" to upgrade the server portion of Schedule+.
	
	After the Windows for Workgroups postoffice has been upgraded to a full Mail 3.2
	postoffice, the administration functions are handled through the MS-DOS-based
	Administrator program (ADMIN.EXE).
	
	ADMIN.EXE is located in the Mail executables directory. By default, the
	Administrator program looks for the postoffice on the current or root directory
	of drive M. There are several ways to make the Administrator program
	successfully locate the postoffice; use the method best suited for your
	configuration:
	
	- Use the -d command-line parameter.
	
	  When using a drive other than M for the postoffice, you can specify that drive
	  using the -d<drive letter> parameter. For example, if you want to use
	  the N drive, use the following syntax:
	
	  c:\mailexe\admin -dn
	
	  NOTE: The postoffice must be located in the current or root directory of the
	  specified drive.
	
	  The following is an example of incorrect usage of the -d parameter:
	
	  c:\mailexe\admin -dn:\wgpo
	
	-or-
	
	- Copy ADMIN.EXE to the root of the postoffice directory.
	
	  You can copy ADMIN.EXE to the postoffice directory rather than use a drive map
	  for the MAILEXE directory. The following example uses N:\WGPO as the
	  postoffice location. Copy ADMIN.EXE from the MAILEXE directory to N:\WGPO.
	  Then invoke the Administrator program with the following syntax:
	
	  n:\wgpo\admin -dn
	
	-or-
	
	- Use the MS-DOS SUBST command.
	
	  If you are using a peer-to-peer network and the postoffice is located on a
	  nondedicated server, you can elect to use the MS-DOS SUBST command to assign
	  the root of drive M to the postoffice. You should add the SUBST command to
	  your AUTOEXEC.BAT file. For example:
	
	  subst m: c:\windows\wgpo
	
	The server-based portion of the mail system update is now complete. You need to
	update the client side (local workstation files) for the Windows-based and OS/2
	Presentation Manager-based client, and the Schedule+ client.
	
	Windows and OS/2 Presentation Manager Upgrade
	---------------------------------------------
	
	To complete this section, you must have specified that the Windows and
	Presentation Manager client files be installed during the server-based portion
	of setup.
	
	Complete the following steps at each user's workstation:
	
	1. From File Manager, connect drive M to the shared postoffice directory.
	
	2. Connect to the shared mail executables directory (any drive letter).
	
	3. Double-click the SETUP.EXE file located in the mail executables directory.
	  You will be prompted for a directory location to install Microsoft Mail.
	
	  Setup suggests the following directory:
	
	     C:\MSMAIL
	
	Follow the instructions until the Microsoft Mail Windows client upgrade is
	complete.
	
	Schedule+ Upgrade
	-----------------
	
	Complete the following steps from each user's workstation:
	
	1. From File Manager, connect drive M to the shared postoffice directory.
	
	2. Connect to the shared Schedule+ directory (any drive letter).
	
	3. Double-click the SETUP.EXE file located in the shared Schedule+ directory.
	  You will be prompted for a directory location to install Schedule+.
	
	Follow the instructions until the Schedule+ client upgrade is complete.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
