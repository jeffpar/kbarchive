---
layout: page
title: "Q183265: OL98: (CW) Enabling Outlook Automatic Upgrade"
permalink: /kb/183/Q183265/
---

## Q183265: OL98: (CW) Enabling Outlook Automatic Upgrade

	Article: Q183265
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	NOTE: These procedures only apply if you have installed Outlook with the
	Corporate Workgroup/Other option. This option allows you to use Messaging
	Application Programming Interface (MAPI) services. To determine your
	installation type, on the Help Menu click About Microsoft Outlook. In About
	Microsoft Outlook you should see "Corporate" if you have the Corporate
	Workgroup installation.
	
	SUMMARY
	=======
	
	The Microsoft Outlook automatic upgrade feature will upgrade Microsoft Windows
	95 and Microsoft Windows NT clients to the latest version of Outlook, if the
	version of Outlook installed on the computer is older than the one at the
	installation point. This article provides information on enabling this feature
	using the Wizard in the Microsoft Outlook Deployment Kit.
	
	MORE INFORMATION
	================
	
	If users install Microsoft Outlook 98 from a shared installation point, the
	automatic upgrade feature can be enabled by adding the following Registry value
	to the client workstation:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\8.0\Outlook\UpgradePath
	
	  Value Name: ServerPath
	  Data Type:  REG_SZ (String)
	  Value Data: <path>
	
	Where <path> is the directory on the server that contains the Outlook.stf
	file. This file is located in the CD\En\Packages directory of the Outlook 98
	installation point.
	
	NOTE: Do not add a trailing backslash to the path. The path can be a mapped drive
	(X:\, for example) or a UNC (\\servername\share) path.
	
	Adding the Registry Entry through the ODW
	-----------------------------------------
	
	1. Start the ODW and go to the Add Registry Entries screen in Stage 5.
	
	2. Select the Add button.
	
	3. Type the following values in the Add/Edit Registry Value dialog box:
	
	     Root:         HKEY_LOCAL_MACHINE
	     Data type:    SZ
	     Key:          Software\Microsoft\Office\8.0\Outlook\UpgradePath
	     Value name:   ServerPath
	     Value data:   <path to OUTLOOK.STF in Outlook 98 install point>
	
	4. Select OK and complete the ODW installation.
	
	5. Run Setup from the install point to install the Outlook client on a
	  workstation.
	
	The automatic upgrade feature performs the following actions at startup to
	determine whether a new version is available:
	
	- Reads the UpgradePath Registry entry on the user's local workstation to
	  determine the location of the OUTLOOK.STF file. If found, OUTLOOK.STF is
	  opened and the version number is obtained from the "App Version" string on
	  the second line of the file.
	
	- Compares the version number to the version number extracted from the local
	  Outlook.stf file, which was placed on the user's computer during setup. If
	  the version number at the installation point is greater than the version
	  number in the local file, Outlook opens a dialog box informing the user that
	  a new version is available, and allows them to install it.
	
	The automatic upgrade feature has the following limitations:
	
	- This feature only works with standalone installations of Outlook. It does not
	  work with versions of Outlook that are included with Microsoft Office 97.
	
	- Microsoft Schedule+ does not support the automatic upgrade feature. In
	  addition, if Schedule+ is started before Microsoft Exchange, the user will
	  never be prompted for an automatic upgrade.
	
	- If the user starts Microsoft Exchange while not connected to the network, and
	  then connects after Microsoft Exchange is running, the user will not be
	  prompted for an automatic upgrade.
	
	- After the auto-upgrade process has completed, the Outlook.stf file is not
	  updated to reflect the new version just installed. Therefore, the user will
	  be prompted again that a newer version is available and the process starts
	  over again. To work around this behavior, the administrator will need to copy
	  an updated Outlook.stf file to the user's local computer. For example, this
	  can be done through a custom component (using an IExpress package or batch
	  file) specified in the ODW.
	
	Additional query words: 98 Update new
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbOutlookSearch kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:98
	Issue type        : kbhowto
	
	=============================================================================
	
