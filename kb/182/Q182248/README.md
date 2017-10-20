---
layout: page
title: "Q182248: HOWTO: Use DCOM Config (DCOMCNFG.EXE) with Windows 95/98/Me"
permalink: /kb/182/Q182248/
---

## Q182248: HOWTO: Use DCOM Config (DCOMCNFG.EXE) with Windows 95/98/Me

{% raw %}

	Article: Q182248
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbDCOM kbRegistry kbVBp kbVBp500 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DCOMCNFG.EXE (known as DCOM Config) is a utility that can be used to secure
	distributed COM (DCOM) objects that have been created.
	
	Because security is much more advanced on Windows NT and Windows 2000, the
	options differ on Windows NT and Windows 2000 systems. This article, written for
	those running DCOM Config on Windows 95, Windows 98, and Windows Me systems,
	describes the options and settings in DCOM Config.
	
	MORE INFORMATION
	================
	
	The DCOM Config's main window is divided into three tabs:
	
	1. Applications Tab.
	
	2. Default Properties Tab.
	
	3. Default Security Tab.
	
	The following explains each tab in DCOM Config, beginning with the Applications
	tab.
	
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
	
	Properties for each application listed in the Applications tab can be viewed
	either by selecting an item and choosing the "Properties" button, or by
	double-clicking the application name.
	
	Default Properties Tab
	----------------------
	
	Each of the values displayed under the Default Properties tab may be found under
	the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\OLE
	
	The first item in the Default Properties tab is a check box:
	
	  "Enable Distributed COM on this computer"
	
	This is a global setting for the entire machine. When this option is checked, the
	machine allows the creation of DCOM objects. If it is not checked, no objects
	may be created via DCOM.
	
	NOTE: You must reboot the system in order for a change in this setting to take
	effect.
	
	The second part of the Default Properties tab is the Default Distributed COM
	Communication properties, which consists of two parts:
	
	1. Default Authentication Level
	
	2. Default Impersonation Level
	
	These two options can only be modified if DCOM is enabled on this system.
	
	1. Default Authentication Level
	
	Authentication Levels are as follows:
	
	Name                         Description
	---------------------------------------------------
	None                         No authentication.
	
	Connect                      Authentication occurs when a connection
	                            is made to the server. Connectionless
	                            protocols do not use this.
	
	Unlike Windows NT and Windows 2000, Windows 95, Windows 98, and Windows Me
	machines can only accept calls on the 'None' or 'Connect' levels.
	
	2. Default Impersonation Level
	
	  If no security is set at the object level, the server uses the security
	  setting specified here as the default. The possible values are:
	
	Name                         Description
	-----------------------------------------------------
	Identify                     The server can impersonate the client to
	                            check permissions in the ACL (Access Control
	                            List) but cannot access system objects.
	
	Impersonate                  The server can impersonate the client and
	                            access system objects on the client's behalf.
	
	The last item on the Default Properties tab is a check box:
	
	  "Provide additional security for reference tracking"
	
	This tells the server to track connected client applications by keeping an
	additional reference count. Checking this box uses more memory and may slow down
	COM, but it ensures that a client application cannot kill a server process by
	artificially forcing a reference count to zero.
	
	Default Security Tab
	--------------------
	
	On Windows 95 machines, there is an option under the Default Security tab for
	Default Access Permission. The value displayed here may be found in the Windows
	registry at the following location:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\OLE
	
	Default Access Permission - This value determines the users who can access an
	object when no other access permissions are provided. For information on how to
	give individual access permissions to specific DCOM objects, see the
	"Application Properties" section later in this document.
	
	An additional option under the Default Security tab is "Enable remote
	connection." This option must be selected in order to enable remote connections
	to DCOM Servers running on Windows 95, Windows 98, and Windows Me. The value is
	stored as a Yes or No value in the Windows registry at the following location:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\OLE\EnableRemoteConnect
	
	Application Properties
	----------------------
	
	You may specify custom settings for individual DCOM applications by choosing the
	Properties button on the "Applications" tab in DCOM Config. This section
	describes each tab (General, Location, and Security) and setting found within
	Application Properties.
	
	General
	-------
	
	The General tab provides general information about the application. This tab
	displays the Application name, type (local server or remote server), and
	location (local path or remote computer). These settings are not modifiable
	through the DCOM Config interface.
	
	The General Tab retrieves all of its information from subkeys of the following
	registry key:
	
	  HKEY_CLASSES_ROOT\CLSID\{...CLSID...}
	
	where {...CLSID...} is the unique CLSID for the Object Server currently being
	viewed.
	
	Location
	--------
	
	This tab is used to determine where DCOM will execute the application. There are
	three possible choices:
	
	1. Run application on the computer where the data is located - If selected, DCOM
	  will execute the application where the data is located. This is useful only
	  if the application provides a data file for the server application.
	
	2. Run application on this computer - Indicates that the DCOM application should
	  run on the local machine.
	
	3. Run application on the following computer - Allows you to specify a computer
	  to execute on. This option should only be selected on DCOM Client machines to
	  specify where the DCOM server is located. For DCOM Servers this option will
	  not work as expected; Windows 95 and Windows 98 machines cannot delegate an
	  application to execute on a different machine.
	
	Security
	--------
	
	On this tab, you may customize settings for individual application permissions.
	This tab is only available for objects capable of performing as DCOM Servers.
	You may customize the settings for the following permissions:
	
	- Use default access permissions.
	
	- Use custom access permissions.
	
	With custom access permissions, you may specify individual users who may access
	the application. If you do not choose to use custom access permissions, the
	default security settings are used. For more information about the Security tab
	see the "Default Security" section earlier in this article.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q158508 : INFO: COM Security Frequently Asked Questions
	
	
	  Q165101 : HOWTO: Use Win95 as a DCOM Server
	
	  Q176799 : INFO: Use DCOM Config (DCOMCNFG.EXE) on Windows NT
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDCOM kbRegistry kbVBp kbVBp500 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
