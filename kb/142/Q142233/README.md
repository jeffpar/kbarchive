---
layout: page
title: "Q142233: No Password Prompt After Network Adapter Is Detected"
permalink: kb/142/Q142233/
---

## Q142233: No Password Prompt After Network Adapter Is Detected

	Article: Q142233
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	You may experience either of the following symptoms:
	
	- When you remove a Plug and Play network adapter in Device Manager and then
	  restart your computer, the network adapter is redetected, and you are logged
	  on to the network and validated by a Microsoft Windows NT server without
	  entering a password.
	
	- When you remove a PCMCIA network adapter from the PCMCIA socket in your
	  computer, restart your computer, and then reinsert the PCMCIA network
	  adapter, you are logged on to the network and validated by a Windows NT
	  server without entering a password.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions exist:
	
	- You have a null Windows password.
	
	- Password caching is enabled.
	
	- User profiles are enabled, or the Dial-Up Networking adapter is installed.
	
	When your Windows password is null and there is no network adapter currently
	installed in your computer, you are not prompted to enter a password when
	Windows 95 starts. Even though you do not manually enter a password, your
	password list file is opened.
	
	After the Plug and Play network adapter is detected by Windows 95, or you
	reinsert the PCMCIA network adapter, Windows 95 installs the appropriate drivers
	for the adapter and then attempts to log on to the network. Because your
	password list file has been opened, and your Windows NT domain password was
	previously cached, you are logged on and validated by the Windows NT server
	without being prompted for a password.
	
	RESOLUTION
	==========
	
	Configure Windows 95 so that your Windows password is not null, or use System
	Policy Editor to disable password caching. To configure Windows 95 so that your
	Windows password is not null, follow these steps:
	
	1. In Control Panel, double-click Passwords.
	
	2. Click Change Windows Password.
	
	3. If you want your network password to be the same as your Windows password,
	  click the Microsoft Networking check box to select it, and then click OK. If
	  you do not want your network password to be the same as your Windows
	  password, verify that the Microsoft Networking check box is not selected, and
	  then click OK.
	
	4. Type your new password in the New Password and Confirm New Password boxes,
	  and then click OK.
	
	NOTE: You can edit the registry using System Policy Editor (Poledit.exe) or
	Registry Editor (Regedit.exe). Check with your network administrator before you
	make any changes to the registry.
	
	System Policy Editor (Poledit.exe) is available in the Admin\Apptools\ Poledit
	folder on the Windows 95 CD-ROM. Use the Add/Remove Programs tool in Control
	Panel to install System Policy Editor.
	
	NOTE: System Policy Editor is not included in the floppy disk version of Windows
	95. You can download Policy.exe, a self-extracting file containing Poledit.exe,
	from online services. Please see the following article in the Microsoft
	Knowledge Base for information about downloading Policy.exe:
	
	  Q135315 CD-ROM Extras for Microsoft Windows 95 Upgrade
	
	Use the following steps to edit the registry with System Policy Editor and
	disable password caching in Windows 95:
	
	1. Click the Start button, and then click Run.
	
	2. Type "poledit" (without the quotation marks) in the Open box, and then click
	  OK.
	
	3. On the File menu, click Open Registry, and then double-click Local Computer.
	
	4. Click the plus sign (+) next to Network, and then click the plus sign next to
	  Passwords.
	
	5. Click the Disable Password Caching check box to select it, and then click OK.
	
	6. Save the changes to the registry, exit System Policy Editor, and then restart
	  Windows 95.
	
	
	MORE INFORMATION
	================
	
	For additional information about situations in which you are not prompted to
	enter a password when Windows 95 starts, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q141858 No Windows or Network Logon Dialog Box at Startup
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
