---
layout: page
title: "Q218458: Err Msg: CoGetClassObject, 0x80080005 Server Execution Failed"
permalink: /kb/218/Q218458/
---

## Q218458: Err Msg: CoGetClassObject, 0x80080005 Server Execution Failed

	Article: Q218458
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT 4.0 Option Pack Setup program displays the following error
	message repeatedly (it reappears when you click the OK button):
	
	  (Title bar: iis-error)
	  CoGetClassObject, 0x800800005
	  Server execution failed
	
	Additionally, the following error messages may also occur, depending on which
	Windows NT Option Pack components are being installed:
	
	  (Title bar: Microsoft Index Server)
	  Setup could not modify the IIS metabase.
	
	  (Title bar: Windows NT Setup)
	  Setup of "Index Server System Files" failed. The specific error code is
	  0x743e644.
	  Setup will continue but the component may not function properly.
	
	  (Title bar: Microsoft Index Server)
	  Setup could not set webhits OOP
	
	  (Title bar: Windows NT Setup)
	  Setup of "Sample Files" failed. The specific error code is 0x743e644.
	  Setup will continue but the component may not function properly.
	
	  (Title bar: IMS/INS Metabase Error)
	  CoGetClassObject, 80080005
	
	When the computer is restarted after the Windows NT Option Pack has been
	installed, the following error message is displayed:
	
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	The following two System Errors are listed repeatedly in the Event Viewer:
	
	  Event ID: 7003
	  Source: Service Control Manager
	  Description: The IIS Admin Service depends on the following nonexistent
	  service: NTLMSSP
	
	  Event ID: 10005
	  Source: DCOM
	  Description: DCOM got error "The dependency service does not exist or has been
	  marked for deletion. " attempting to start the service IISADMIN with
	  arguments "" in order to run the server:
	  {A9E69610-B80D-11D0-B9B9-00A0C922E750
	
	The following system errors may also be displayed in Event Viewer, depending on
	the components that were installed:
	
	  Event ID: 7001
	  Source: Service Control Manager
	  Description: The Microsoft SMTP Service service depends on the IIS Admin
	  Service which failed to start because of the following error:
	  The dependency service does not exist or has been marked for deletion.
	
	  Event ID: 7003
	  Source: Service Control Manager
	  Description: The IIS Admin Service depends on the following nonexistent
	  service: NTLMSSP
	
	  Event ID: 7001
	  Source: Service Control Manager
	  Description: The World Wide Web Publishing Service depends on the IIS Admin
	  Service service which failed to start because of the following error:
	  The dependency service does not exist or has been marked for deletion.
	
	  Event ID: 7001
	  Source: Service Control Manager
	  Description: The FTP Publishing Service depends on the IIS Admin Service
	  service which failed to start because of the following error:
	  The dependency service does not exist or has been marked for deletion.
	
	CAUSE
	=====
	
	The Windows NT LanManager (NTLM) Security Support Provider service is not
	installed.
	
	RESOLUTION
	==========
	
	Install the RPC Configuration Network Service, which also installs the NTLM
	Security Support Provider service. Then, remove and reinstall the Windows NT
	Option Pack.
	
	  CAUTION: Before you remove the Windows NT Option Pack, preserve any
	  configuration information that you want to keep, such as virtual
	  directories.
	
	  For more information, please see the following articles in the Microsoft
	  Knowledge Base:
	
	  Q193152 Preserving Virtual Directories and Servers During Uninstall
	
	  Q187870 How to Remove and Reinstall the Windows NT 4.0 Option Pack
	
	To resolve the problem, perform the following steps:
	
	1. In Control Panel, click the Network icon.
	
	2. Click the Services tab, and then click the Add button.
	
	3. In the list of network services, select RPC Configuration, and then click OK.
	
	4. Restart the computer for the new settings to take effect.
	
	5. Remove and reinstall the Windows NT Option Pack.
	
	Additional query words: ntop iis akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	
	=============================================================================
	
