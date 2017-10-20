---
layout: page
title: "Q194396: MDM.EXE - DLL Initialization Failed Error"
permalink: /kb/194/Q194396/
---

## Q194396: MDM.EXE - DLL Initialization Failed Error

{% raw %}

	Article: Q194396
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis400
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you install the Windows NT Option Pack 4.0 on Windows Terminal Server 4.0
	and clients try to use the Internet Explorer 4.0 Web browser, it will appear to
	stop responding. The following message is displayed in a dialog box on the
	server:
	
	  MDM.EXE - DLL Initialization Failed
	  Initialization of the dynamic link library
	  c:\wtsrv\system32\kernel32.dll failed. The process is terminating
	  abnormally.
	
	In addition, you may see occurrences of event ID 10010 from DCOM in the Event
	Viewer with the following description:
	
	  The server {0C0A3666-30C9-11D0-8F20-00805F2CD064} did not register with DCOM
	  within the required timeout.
	
	CAUSE
	=====
	
	Mdm.exe is the Machine Debug Manager, which is used by the Windows NT Option
	Pack and Microsoft Developer Studio to provide application debugging. When
	Script Debugging is enabled for Internet Explorer 4.0, the debug manager is
	initialized whenever Internet Explorer 4.0 is started. In a Windows Terminal
	Server session, however, the debug manager cannot be initialized properly in the
	Interactive User's context and returns the errors listed above.
	
	WORKAROUND
	==========
	
	To work around this problem, perform one of the following:
	
	- Rename the MDM.exe found in the system root\system32 directory.
	
	-OR-
	
	- Remove all registry entries related to "MDM" and Machine Debug Manager.
	
	-OR-
	
	- For each client that will use Internet Explorer 4.0, disable Internet
	  Explorer 4.0 Script Debugging by performing the following steps:
	
	  1. Open Control Panel.
	
	  2. Double-click the Internet icon.
	
	  3. Click the Advanced tab.
	
	  4. Click the check box next to "Disable Script Debugging" to enable it.
	
	  5. Click OK.
	
	  6. Close Control Panel.
	
	  -OR-
	
	- If script debugging is required on a development server, it is possible to
	  change the user context that Mdm.exe runs by editing the registry.
	
	  NOTE: The following solution should only be used on a development or test
	  server.
	
	  WARNING: If you use Registry Editor incorrectly, you may cause serious
	  problems that may require you to reinstall your operating system. Microsoft
	  cannot guarantee that you can solve problems that result from using Registry
	  Editor incorrectly. Use Registry Editor at your own risk.
	
	  1. Start the Registry Editor (Regedt32.exe).
	
	  2. Locate the RunAs value under the following keys in the registry (presented
	     here as a list for readability):
	
	  HKEY_CLASSES_ROOT
	 \AppID
	   \{0C0A3666-30C9-11D0-8F20-00805F2CD064}
	  HKEY_LOCAL_MACHINE
	 \Software
	   \Microsoft
	     \Windows NT
	       \CurrentVersion
	         \Terminal Server
	           \Install
	             \Software
	               \Classes
	                 \AppId
	                   \{0C0A3666-30C9-11D0-8F20-00805F2CD064}
	
	  3. Double-click the value to change it, and enter "administrator" (without
	     the quotation marks).
	
	  4. Click OK.
	
	  5. Quit Registry Editor.
	
	  -OR-
	
	- Register the Class ID as System Global.
	
	  For additional information on how to register the class as a system global,
	  click the article number below to view the article in the Microsoft Knowledge
	  Base:
	
	  Q187146 DCOM Clients Cannot Create Objects
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q190157 Support for Windows NT 4.0 Option Pack on Terminal Server
	
	Additional query words: Terminalsrv
	
	======================================================================
	Keywords          : kbDSupport kbiis400 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
