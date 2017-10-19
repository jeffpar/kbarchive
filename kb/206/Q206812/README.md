---
layout: page
title: "Q206812: SMS: Remote Control Component Is Not Available"
permalink: /kb/206/Q206812/
---

## Q206812: SMS: Remote Control Component Is Not Available

	Article: Q206812
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbenv kbinterop kbsetup kbtool kbClient kbRemote kbsms200 kbRemoteProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Systems Management Server 2.0 on a client computer, the Remote
	Control component may not install. The Systems Management tool in Control Panel
	indicates that the Remote Control component is not available.
	NOTE: If you have not completely uninstalled Systems Management Server 1.2
	clients, you may have legacy component files on the local hard disk. If you do
	have legacy components, you may receive the following error message:
	
	  Client XXX quit installing REMOTE TOOLS because Third Party Remote Control
	  System Detected
	
	CAUSE
	=====
	
	This issue can occur if you have existing legacy or third-party remote control
	components or Microsoft Windows Terminal Server installed. If any of these
	components are found during the Remote Control installation, the component is
	set to Not Available. The remainder of the SMS client installation is not
	affected.
	
	WORKAROUND
	==========
	
	To work around this issue, follow these steps:
	
	1. Uninstall Microsoft Windows Terminal Server.
	
	2. Delete all the Termsrv.exe files found on your local hard disks.
	
	3. Uninstall Remote Control
	
	4. Delete all the Wuser.exe and Wuser32.exe files found on your local hard
	  disks.
	
	5. Reinstall Systems Management Server 2.0 client.
	
	NOTE: The Remote Control client component cannot be installed on a Windows
	Terminal Server.
	
	MORE INFORMATION
	================
	
	If you open the RemCtrl.log file on the client computer, you may see information
	similar to text in the following list:
	
	- Found Novell Remote Control client on workstation. Setting
	  ComponentNotAvailable and abandoning installation. Successfully notified SMS
	  that component is not available.
	
	- Found LANDesk Remote Control client on workstation in path %PATH%.
	
	- Terminal Server (termsrv.exe) found. This is a WTS 'machine'. Not installing
	  Remote Control.
	
	- SMS 1.2 Remote Control client found on workstation. Abandoning installation
	  until after next reboot.
	
	Additional query words: prodsms zenworks
	
	======================================================================
	Keywords          : kbenv kbinterop kbsetup kbtool kbClient kbRemote kbsms200 kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
