---
layout: page
title: "Q187793: Addition of New LAN Interface in RRAS Causes Event Message"
permalink: /kb/187/Q187793/
---

## Q187793: Addition of New LAN Interface in RRAS Causes Event Message

{% raw %}

	Article: Q187793
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you install an additional network interface card (NIC) and Routing and
	Remote Access Service (RRAS) is already installed, you receive the following
	error message in the System Log in Event Viewer:
	
	  Event ID   : 20101
	  Source     : Router
	  Type       : Warning
	  Description: Using the default value for Registry parameter Enabled
	               because the value given is not in the legal range for the
	               parameter.
	
	This event will be logged every time RRAS starts yet does not prevent RRAS from
	starting properly, nor does it cause any loss of functionality within RRAS.
	
	CAUSE
	=====
	
	When the new NIC binds to the Router Service in the registry, an incorrect value
	is set for the interface's Enabled value.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To work around this issue, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe), and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Router
	  \Interfaces\(x)
	
	  NOTE: The above registry key is one path, it has been wrapped for readability.
	
	2. Modify the value to "1". The value (x) will vary with the number of installed
	  network interfaces. Verify each (x) has a valid "Enabled" value of "0" or
	  "1".
	
	  Value: Enabled
	  Value Type: REG_DWORD - Boolean
	  Valid Range: 0 or 1 (False or True)
	  Default: 1 (True)
	
	3. Quit Registry Editor and restart your computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Routing and Remote Access
	Service for Windows NT Server 4.0. We are researching this problem and will post
	additional information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: ntrouter rras steelhead steel head
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
