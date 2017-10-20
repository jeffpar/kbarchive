---
layout: page
title: "Q195685: Err Msg: Error 709: Cannot Establish the Dial-Up Networking..."
permalink: /kb/195/Q195685/
---

## Q195685: Err Msg: Error 709: Cannot Establish the Dial-Up Networking...

{% raw %}

	Article: Q195685
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; WINNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg dun win95 win98 kbDialUp
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you dial into a Remote Access Services (RAS) server from a Windows 95/98
	Dial-Up Networking client, you may be prompted to change your password. When you
	attempt to do so, you may receive one of the following error messages:
	
	   - Error 709: Cannot establish the Dial-Up Networking session. Check your
	  server type settings in the properties of the connection, and try the
	  connection again.
	
	   - No domain server was available to validate your password.
	
	CAUSE
	=====
	
	This behavior can occur if the wrong user credentials are being passed to the
	Windows NT server.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	To work around this behavior, use either of the following methods:
	
	Method 1
	--------
	
	Leave the user name, password, and domain name blank when you create a phone book
	entry for dialing into the Windows NT server. This ensures that you are prompted
	for those credentials.
	
	Method 2
	--------
	
	Using Registry Editor, add the Domain string value with a value data of
	<domain name>, where <domain name> is the domain server validating
	your credentials, to the following registry key
	
	HKEY_CURRENT_USER\RemoteAccess\Profile\<connection name>
	
	where <connection name> is the name of the Dial-Up Networking connection
	you are using.
	
	NOTE: If the User string value is not in the registry key, add it with a value
	data of <username>, where <username> is the name you use to log on
	to the domain server.
	
	
	======================================================================
	Keywords          : kberrmsg dun win95 win98 kbDialUp 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
