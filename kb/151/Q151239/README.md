---
layout: page
title: "Q151239: INFO: Invokable TP Written as an Application to Run as a Service"
permalink: kb/151/Q151239/
---

## Q151239: INFO: Invokable TP Written as an Application to Run as a Service

	Article: Q151239
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, 4.0 SP2, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An autostarted Invokable Transaction Program (TP) written as a Microsoft Windows
	NT application can be configured to run as a Windows NT service using the
	Windows NT Resource Kit utility Srvany.exe. This TP can then be configured to be
	autostarted by SNA Server when invoked by the remote system. When you configure
	an application to run as a service, the application can be automatically started
	without a user being logged onto Windows NT. Also, the user context under which
	the application is run can be configured in the Services Control Panel.
	
	NOTE: Some applications may assume that there is a logged on user in order to run
	properly. See the documentation for SRVANY included in the Windows NT Resource
	Kit for details. Some applications may not operate properly when run in this
	mode.
	
	MORE INFORMATION
	================
	
	For a program to run as a service, the program must include a service control
	handler to communicate with the Windows NT Service Control Manager, so that it
	can respond to startup and shutdown requests.
	
	Programs written specifically as a Windows NT service have these call in their
	code, whereas an application does not. The utility SRVANY acts as an
	intermediary between the application and Service Control Manager to allow an
	application to be run as a service.
	
	Installation Instructions (adapted from Resource Kit Help file)
	---------------------------------------------------------------
	
	1. Copy SRVANY.EXE to your system and install it as a Windows NT service, for
	  example, INSTSRV MyService c:\tools\srvany.exe
	
	  INSTSRV.EXE can be found in the Resource Kit. The service name "MyService"
	  should be the TPName.
	
	2. Configure the service (for example, "MyService") using the Services applet of
	  the Control Panel as manual or automatic. If you wish SNA Server to
	  automatically start the TP when an attach request is received, configure the
	  service for manual startup.
	
	3. Set via the Services applet of the Control Panel the account for the service.
	  If you need access to the screen and keyboard, you must choose the
	  LocalSystem account and click the Allow Service to Interact with Desktop,
	  otherwise choose any account and specify the correct logon password.
	
	  NOTE: The LocalSystem account does not have network access. Make sure that the
	  account specified has rights to logon as a service.
	
	Specify the Application to Start and its Parameters
	---------------------------------------------------
	
	Run the Registry Editor (Regedt32.exe):
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Under HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MyService: create
	  a Parameters key.
	
	2. Under the above key, create an Application value of type REG_SZ and specify
	  there the full path of your app executable (including the extension). For
	  example, Application: REG_SZ: D:\Tools\Vi.exe
	
	3. OPTIONAL: under the above key, create an AppParameters value of type REG_SZ
	  and specify the parameters for your app. For example, AppParameters: REG_SZ:
	  C:\Tmp\Temp
	
	4. OPTIONAL: under the above key, create an AppDirectory value of type REG_SZ
	  and specify the current directory to use for the application. For example,
	  AppDirectory: REG_SZ: C:\Tmp
	
	Add Registry Values to Have the Service Act as an Autostarted TP
	----------------------------------------------------------------
	
	1. Under HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MyService: create
	  a Linkage key
	
	2. Under the above key, create an OtherDependencies value of type REG_MULTI_SZ
	  and specify SnaBase. For example, OtherDependencies: REG_MULTI_SZ: SnaBase
	
	3. Under HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MyService
	  \Parameters, create the following values:
	
	     AlreadyVerified:REG_SZ:no
	     ConversationSecurity:REG_SZ:no
	     LocalLU:REG_SZ:'LUAlias'  (optional)
	     Parameters:REG_SZ:
	     SNAServiceType:REG_DWORD:0x5   (type 5 is autostarted)
	     Timeout:REG_DWORD:0xffffffff  (infinite timeout)
	
	  NOTE: The above Invokable TP parameters are described in Chapter 2 of the SNA
	  Server APPC and CPIC "Programmer's Guides."
	
	These settings correspond to the fields in TPSETUP, the utility included with SNA
	Server for installing Invokable TPs. The SnaBase service must be stopped and
	started to recognize the new transaction program.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
