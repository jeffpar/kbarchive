---
layout: page
title: "Q197141: SMS: SMS Administrator and Quick Viewer Close Without Warning"
permalink: /kb/197/Q197141/
---

## Q197141: SMS: SMS Administrator and Quick Viewer Close Without Warning

	Article: Q197141
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbRemote kbsms120 kbsms120bug kbRemoteProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to take Remote Control of a remote computer, the SMS
	Administrator program user interface (UI) and Remote Control Quick Viewer window
	close without warning.
	
	CAUSE
	=====
	
	This problem occurs when both of the following conditions are true:
	
	- The computer running the SMS Administrator program UI is also the Systems
	  Management Server site server or Administrator Tools computer.
	
	  -and-
	
	- That computer has been upgraded to Windows NT 4.0 Service Pack 4 and Systems
	  Management Server 1.2 or the Systems Management Server 1.2 Administrator
	  tools have been subsequently installed or reinstalled.
	
	The problem occurs because both the original Systems Management Server 1.2
	installation and the Systems Management Server 1.2 Service Pack 4 installation
	overwrite the Windows NT Server 4.0 Service Pack 4 version of the Sightnt.dll
	file.
	
	WORKAROUND
	==========
	
	To work around this problem, copy the Sightnt.dll file from the appropriate
	platform directory (Alpha or X86) of the Windows NT Server 4.0 Service Pack 4
	media to the Systems Management Server site server or Administrator Tools
	computer. Replace the existing copy of Sightnt.dll located in the
	<sms_root_dir>\Site.srv\<Platform>.bin directory.
	
	To update the clients, either manually run Upgrade.bat on each client or follow
	the instructions in the following article in the Microsoft Knowledge Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	Although the versions of Sightnt.dll included with Windows NT Server 4.0 Service
	Pack 4 and Systems Management Server 1.2 Service Pack 4 have identical file
	sizes, their contents are different. You can identify the correct file by
	comparing the date/timestamps. The Sightnt.dll file included with Windows NT
	Server 4.0 Service Pack 4 is dated 10/15/98, while the Sightnt.dll file included
	with Systems Management Server 1.2 and Systems Management Server 1.2 Service
	Pack 4 have earlier date/timestamps.
	
	MORE INFORMATION
	================
	
	The Sightnt.dll file supplied with Windows NT Server 4.0 Service Pack 4 is a
	later version of the one that is included with the original version of Systems
	Management Server 1.2 and with Systems Management Server 1.2 Service Pack 4.
	This later version is required for correct Help Desk operations under Windows NT
	Server 4.0 Service Pack 4. The Systems Management Server 1.2 and Systems
	Management Server 1.2 Service Pack 4 Setup.exe programs automatically replace
	the Sightnt.dll file during installation, upgrade, or reinstallation, regardless
	of the date/timestamp of the currently installed file.
	
	
	Additional query words: prodsms sp sp4
	
	======================================================================
	Keywords          : kbRemote kbsms120 kbsms120bug kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	
