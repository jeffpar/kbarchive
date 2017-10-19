---
layout: page
title: "Q176799: INFO: Using DCOM Config (DCOMCNFG.EXE) on Windows NT"
permalink: /kb/176/Q176799/
---

## Q176799: INFO: Using DCOM Config (DCOMCNFG.EXE) on Windows NT

	Article: Q176799
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbDCOM kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DCOMCNFG.EXE (DCOM Config) is a utility you can use to secure DCOM Objects you
	have created. This article describes the DCOM Config interfaces, options, and
	settings.
	
	Because security is much more limited on Windows 95, Windows 98, and Windows Me,
	the interface and options may differ on Windows 95, Windows 98, and Windows Me
	systems. This article is written for those running DCOM Config on Windows NT or
	Windows 2000 systems.
	
	MORE INFORMATION
	================
	
	The main interface of DCOM Config is divided into the following three tabs:
	
	- Applications.
	
	- Default Properties.
	
	- Default Security.
	
	Applications Tab
	----------------
	
	The Applications tab shows each of the items registered under the following
	registry key:
	
	  HKEY_CLASSES_ROOT\AppId\
	
	Beneath this key are all of the objects that can be launched on a remote machine.
	DCOM Config displays just the ProgIDs (friendly names) of each object, such as
	"Microsoft Word Document" or "Microsoft Access Database." Some objects may
	register without registering a ProgID; in these cases, the GUID of the object
	will be displayed, such as "{4E6B942A-01B0-11D1-A9CB- 00AA00B7B36F}."
	
	For each item listed in the Applications tab, properties for each application can
	be viewed by selecting an item and choosing the "Properties" button or by
	double-clicking an application name.
	
	Default Properties Tab
	----------------------
	
	Each of the values displayed under the Default Properties tab may be found under
	the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\OLE
	
	The first item in the Default Properties tab is a check box:
	
	  "Enable Distributed COM on this computer"
	
	This is a global setting for the entire machine. When this option is checked, the
	machine allows the creation of DCOM objects. If it is not checked, objects
	cannot be created via DCOM.
	
	NOTE: You must reboot the system in order for a change in this setting to take
	effect.
	
	The second part of the Default Properties tab is the Default Distributed COM
	Communication Properties, which has of two levels:
	
	1. Default Authentication Level.
	
	2. Default Impersonation Level.
	
	These two options can only be modified if DCOM is enabled on this system.
	
	Default Authentication Level (Packet Level)
	-------------------------------------------
	
	Authentication Levels are as follows:
	
	  Name                         Description
	  ------------------------------------------------------------------------
	  None                         No authentication.
	
	  Connect                      Authentication occurs when a connection
	                               is made to the server. Connectionless
	                               protocols do not use this.
	
	  Call                         The authentication occurs when a RPC call
	                               is accepted by the server. Connectionless
	                               protocols do not use this.
	
	  Packet                       Authenticates the data on a per-packet
	                               basis. All data is authenticated.
	
	  Packet Integrity             This authenticates that the data has come
	                               from the client, and checks that the
	                               data has not been modified.
	
	  Packet Privacy               In addition to the checks made by the other
	                               authentication techniques, this encrypts
	                               the packet.
	
	  Default                      May vary depending upon operating system.
	
	NOTE: "Connect" and "Call" are not used for connectionless protocols. Windows NT
	and Windows 2000 use a connectionless protocol, UDP, by default. However,
	Windows 95 uses TCP, which is connection-based. Windows 95 machines can only
	accept calls on the "None" or "Connect" levels.
	
	Default Impersonation Level
	---------------------------
	
	If no security is set at the object level, the server uses the security setting
	specified here as the default. The possible values are:
	
	  Name                         Description
	  ----------------------------------------------------------------------
	  Anonymous                    The client is anonymous. This setting is
	                               not currently supported by DCOM.
	
	  Identify                     The server can impersonate the client to
	                               check permissions in the ACL (Access
	                               Control List) but cannot access system
	                               objects.
	
	  Impersonate                  The server can impersonate the client and
	                               access system objects on the client's
	                               behalf.
	
	  Delegate                     In addition to the Impersonate level, this
	                               level can impersonate the client on calls
	                               to other servers. This is not supported in
	                               the current release of DCOM.
	
	The last item on the Default Properties tab is the "Provide additional security
	for reference tracking" check box, which tells the server to track connected
	client applications by keeping an additional reference count. Checking this box
	uses more memory and may cause COM to slow down, but it ensures that a client
	application cannot kill a server process by artificially forcing a reference
	count to zero.
	
	Default Security Tab
	--------------------
	
	There are three options under the Default Security tab. Each of the values stored
	here can be found in the Windows registry at the following location:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\OLE
	
	The three options are:
	
	1. Default Access Permission: This value determines the users and groups that
	  can access an object when no other access permissions are provided. For
	  information on how to give individual access permissions to specific DCOM
	  objects, see the "Application Properties" section later in this document. By
	  default, access is provided to the "System" and "Interactive" groups.
	
	2. Default Launch Permission: This value determines the users and groups that
	  can launch an object when no other access permissions are provided. For more
	  information on how to give individual launch permissions to specific DCOM
	  objects, see the section "Application Properties" later in this document.
	
	3. Default Configuration Permission: This value determines the users and groups
	  that may read or modify configuration information for DCOM applications. This
	  also includes which users and groups will have permission to install new DCOM
	  servers.
	
	System Groups
	-------------
	
	There are several group accounts you will find when you configure users and
	groups. The following list is a summary of which user belongs to each group:
	
	  Group                  Description
	  ------------------------------------------------------------------------
	  Interactive            Includes all users who log on to a Windows NT or
	                         Windows 2000 system locally (at the console). It 
	                         does not include users who connect to Windows NT
	                         or Windows 2000 resources across a network or are
	                         started as a server.
	
	  Network                Includes all users who connect to Windows NT or 
	                         Windows 2000 resources across a network. It does
	                         not include those who connect through an
	                         interactive logon.
	
	  Creator/Owner          The Creator/Owner group is created for each
	                         sharable resource in the Windows NT system. Its
	                         membership is the set of users who either create
	                         resource s(such as a file) and those who take
	                         ownership of them.
	
	  Everyone               All users accessing the system, whether locally,
	                         remotely, or across the network.
	
	  System                 The local operating system.
	
	The list above includes the group accounts that are intrinsic to Windows NT and
	Windows 2000 systems. Your particular network may include more groups from which
	you may choose. In order to determine the membership of each custom group
	account, you must contact your network administrator.
	
	Application Properties
	----------------------
	
	You can specify custom settings for individual DCOM applications by choosing the
	Properties button on the "Applications" tab in DCOM Config. The following
	section describes each tab (General, Location, Security, Identity) and setting
	found within Application Properties.
	
	General
	-------
	
	The General tab provides general information about the application, displaying
	the Application name, type (local server or remote server), and location (local
	path or remote computer). These settings are not modifiable through the DCOM
	Config interface.
	
	The General Table retrieves all of its information from subkeys of the following
	registry key:
	
	  HKEY_CLASSES_ROOT\CLSID\{...CLSID...}
	
	where {...CLSID...} is the unique CLSID for the Object Server currently being
	viewed.
	
	Location
	--------
	
	This tab is used to determine where DCOM will execute the application. There are
	three possible choices:
	
	1. Run application on the computer where the data is located: if selected, DCOM
	  will execute the application where the data is located. This is useful only
	  if the application provides a data file for the server application.
	
	2. Run application on this computer: indicates that the DCOM application should
	  run on the local machine.
	
	3. Run application on the following computer: allows you to specify a computer
	  on which to execute. (This feature is currently unavailable on Windows NT 4.0
	  systems, Windows NT 4.0 does not support full security delegation.)
	
	If more than one of the above is selected, DCOM will use the first applicable
	option. Client applications may also override this setting.
	
	Security
	--------
	
	On the Security tab, you can customize settings for the following individual
	application permissions:
	
	1. Access Permissions.
	
	2. Launch Permissions.
	
	3. Configuration Permissions.
	
	If you do not customize these settings, the default security settings are used.
	For more information about the Security tab, see the section earlier in this
	article on "Default Security."
	
	Identity
	--------
	
	This tab is used to determine which account you want to use to run the
	application. There are four choices by which the system determines which account
	your DCOM object will run under:
	
	1. The Interactive User: the application will run using the security context of
	  the user currently logged onto the computer. If this option is selected and
	  the user is not logged on, then the application will not start.
	
	2. The Launching User: the application will run using the security context of
	  the user who started the application. The launching user and the interactive
	  user may be the same.
	
	3. This User: you may specify the user whose security context will be used to
	  run the application.
	
	4. The System Account: this is available only for Windows NT and Windows 2000
	  services that use DCOM.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q158508 INFO: COM Security Frequently Asked Questions
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDCOM kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : :5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
