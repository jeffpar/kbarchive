---
layout: page
title: "Q196225: SMS: SMS 2.0 Remote Control Registry Keys and Client Settings"
permalink: kb/196/Q196225/
---

## Q196225: SMS: SMS 2.0 Remote Control Registry Keys and Client Settings

	Article: Q196225
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): _IK964 kbsms200 kbHelpDesk kbRemoteProg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Although the client-side Control Panel icon for Remote Control is the preferred
	method for changing client-side Remote Control settings, a Systems Management
	Server administrator may also need to know where the registry settings for these
	items are located. The settings listed in the MORE INFORMATION section of this
	article include all of the "switches" that control what features are available
	to administrators attempting to view a client computer.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The following registry path is where all client-side Remote Control settings are
	stored:
	
	  
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Client\Client Components\Remote Control
	
	In nearly all cases, the values in each key represent either ON/ALLOWED (set to
	"1") or OFF/DISALLOWED (set to "0").
	
	  Value                     Default setting
	  -----------------------------------------
	
	  Allow Chat                1
	  Allow File Transfer       1
	  Allow Ping Test           1
	  Allow Reboot              1
	  Allow Remote Execute      1
	  Allow Takeover            1
	  Allow DOS Diagnostics     1 (Windows 95 or Windows 98 computers only)
	  Allow Windows Diagnostics 1 (Windows 95 or Windows 98 computers only)
	  Audible Signal            1 (exists for all, but used only by computers
	                               running Windows 95 or Windows 98)
	  CommandLine              IP (used to start WUSER with chosen protocol;
	                               computers running Windows NT only)
	  CompressionType           0 (0 = RLE, 1 = LZH)
	  Control Level             1
	  Default Protocol          IP (Windows 95 or Windows 98 computers only)
	  LanaNum                   0
	  LogToFile                 1 (not set by default; can be added to start
	                               logging)
	  Permission Required       0
	  PermittedViewers          "Administrators" (specifies the user groups
	                             permitted to use Remote Control)
	  Use IDIS                  1 (screen acceleration, 1 [ON] by default)
	  Use Local Settings        0
	  Visible Signal            1
	
	These settings are dynamically polled by the Windows NT WUSER32 service, but are
	not polled by the Windows 95 or Windows 98 (WUSER) client. Therefore, changes
	made to these registry settings will take effect immediately on computers
	running Windows NT, but will not take effect until you stop the WUSER service
	and restart it on computers running Windows 95 or Windows 98.
	
	Additional query words: prodsms applet admin admins machine machines win win9x win95 win98 RC enable enabled disable disabled
	
	======================================================================
	Keywords          : _IK964 kbsms200 kbHelpDesk kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
