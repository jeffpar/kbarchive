---
layout: page
title: "Q216101: INF: Missing Entry in Add/Remove Programs after Package Export"
permalink: /kb/216/Q216101/
---

## Q216101: INF: Missing Entry in Add/Remove Programs after Package Export

{% raw %}

	Article: Q216101
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,1.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, versions 1.0, 1.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	A component, including COMTI component libraries, can be installed in an MTS
	server package and the package can be exported to a remote Windows NT computer
	so the client application can run on the remote computer using DCOM.
	
	The export process produces an executable file to be run on the remote computer
	for setting up registry entries (for example, ProgID, CLSID, and so on) for
	directing the remote client application to the component on the server where it
	runs under the control of Microsoft Transaction Server (MTS). Implementing the
	client application on the remote computer simply involves running the executable
	file on that computer. At that time, additional registry entries are provided
	for the future removal of this client application through the Add/Remove
	Programs utility in Control Panel. However, under certain conditions, the
	application's entry is missing from the Add/Remove Programs Properties dialog
	box under the Install/Uninstall tab.
	
	The list entry is specified in the following registry value:
	
	  HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\<CLSID>\DisplayName
	
	where <CLSID> is the CLSID of the remote application that is installed by
	running the executable file mentioned above.
	
	If the value of DisplayName is more than 63 characters, the name doesn't display
	in Add/Remove Programs.
	
	There is a workaround when this situation occurs. Edit the registry to change the
	value of DisplayName to a string less than 64 bytes in length. Then the revised
	name will appear in Add/Remove Programs list, and the application can be removed
	as desired.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To change the registry value, proceed as follows:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the DisplayName value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\<CLSID>
	
	3. On the Edit menu, double-click DisplayName, type in a name no more than 63
	  characters long, and then click OK.
	
	4. Quit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch kbCOMTI100 kbCOMTI100SP1 kbCOMTI400SP2 kbComSearch
	Version           : WINDOWS:1.0,1.0 SP1,4.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
