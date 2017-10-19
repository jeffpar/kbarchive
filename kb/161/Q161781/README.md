---
layout: page
title: "Q161781: SMS: Error: Unable to Get NetBIOS Lana List"
permalink: /kb/161/Q161781/
---

## Q161781: SMS: Error: Unable to Get NetBIOS Lana List

	Article: Q161781
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot kbsmsAdmin smsadmin smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When looking at a client's properties with the Systems Management Server
	Administrator program, a dialog box containing the following message appears:
	
	  Unable to get NetBIOS Lana list
	
	Or, when clicking on the Help Desk icon in the client properties of a client
	computer running either Windows for Workgroups or Windows 95, a dialog box
	containing the following message appears:
	
	  SMS Remote Control
	
	  No NetBIOS Lana numbers are available.
	
	A second dialog box reports the following:
	
	  SMS.EXE - DLL Initialization failed.
	
	  Initialization of dynamic link library d:\sms\site.srv\x86.bin\sightnt.dll
	
	  Failed Process is terminating abnormally.
	
	A third dialog box may also appear with the following message:
	
	  Microsoft SMS Administrator
	
	  Couldn't load a Machine Properties DLL: sightnt.dll
	
	Finally, the client's properties are loaded without the Help Desk icon.
	
	CAUSE
	=====
	
	The NetBIOS Interface network service has either not been correctly installed or
	configured on the computer running the SMS Administrator program.
	
	WORKAROUND
	==========
	
	To work around this problem, follow the steps below for the version of Windows
	NT you are running:
	
	On a computer running Windows NT Server 4.0 or Windows NT Workstation 4.0:
	
	1. Open the Network Control Panel.
	
	2. Click the Services tab.
	
	3. If NetBIOS Interface is installed, click it and then click Remove. Click OK
	  and shut down and restart the computer.
	
	4. If NetBIOS Interface is not installed, click Add and select NetBIOS
	  Interface. If it asks for a location, specify the correct platform directory
	  on the Windows NT Server 4.0 (or Windows NT Workstation 4.0) compact disc.
	  Click OK, and shut down and restart the computer.
	
	On a computer running Windows NT Server 3.51 or Windows NT Workstation 3.51:
	
	1. Open the Network Control Panel.
	
	2. If NetBIOS Interface is listed under 'Installed Network Software,' click it
	  and click Remove. Click OK and shut down and restart the computer.
	
	3. If NetBIOS Interface is not listed under 'Installed Network Software,' click
	  Add Software, and select NetBIOS Interface. If it asks for a location,
	  specify the correct platform directory on the Windows NT Server 3.51 (or
	  Windows NT Workstation 3.51) compact disc. Click OK, and shut down and
	  restart the computer.
	
	Additional query words: prodsms WFW Win95 RC
	
	======================================================================
	Keywords          : kbnetwork kbtshoot kbsmsAdmin smsadmin smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
