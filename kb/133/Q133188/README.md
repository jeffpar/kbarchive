---
layout: page
title: "Q133188: Microsoft Plus! Internet Mail Client Service Uses POP3 Port ID"
permalink: /kb/133/Q133188/
---

## Q133188: Microsoft Plus! Internet Mail Client Service Uses POP3 Port ID

{% raw %}

	Article: Q133188
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	You may experience problems sending and receiving e-mail using the Internet mail
	service in Microsoft Plus! for Windows 95.
	
	CAUSE
	=====
	
	The Internet mail service listens on the standard 110 port ID for POP3 mail, as
	specified in the RFC 1060 specification. If your POP3 mail server does not use
	port ID 110, you cannot send or receive mail.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	If your POP3 mail server does not use port ID 110, you can edit the value name
	
	  00036651
	
	in the following entry in the registry
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows Messaging Subsystem\ 
	  Profiles\<profile name>\<key>
	
	where <profile name> is the name you specified as the profile to store your
	Internet mail service information in Microsoft Exchange and <key> is a
	hexadecimal value assigned to this profile by Windows 95.
	
	The default value for port ID 110 (in hexadecimal format) is:
	
	  6E 00 00 00
	
	For example, if your POP3 mail server uses port ID 8110, you must convert 8110 to
	its hexadecimal equivalent (1F AE 00 00), and then enter this value in reverse
	notation for the value name 00036651.
	
	To enter the value 1F AE 00 00 in reverse notation, enter the value:
	
	  AE 1F 00 00
	
	For information about how to use Calculator to determine a hexadecimal value,
	view the "Converting values to other number systems" online Help topic in
	Calculator (Calc.exe).
	
	MORE INFORMATION
	================
	
	Although you can specify a different port ID in a Services.ini file, the
	Microsoft Exchange Internet mail client does not look there for it. The port ID
	is listed in the registry and can be changed only by editing the registry.
	
	Additional query words: SMTP Route66 Imail.exe
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	

{% endraw %}
