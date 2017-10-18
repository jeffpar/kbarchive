---
layout: page
title: "Q188059: SMS: (SightNT&#92;Lana)RegOpenKeyEx Failed: 2 Error Message"
permalink: kb/188/Q188059/
---

## Q188059: SMS: (SightNT&#92;Lana)RegOpenKeyEx Failed: 2 Error Message

	Article: Q188059
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	The following error message occurs when you attempt to Remote Control a Systems
	Management Server client if the Lana registry subkey is missing:
	
	  (SightNT\Lana)RegOpenKeyEx Failed: 2
	
	CAUSE
	=====
	
	The following registry key is missing:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Components\SightNT\Lana
	
	WORKAROUND
	==========
	
	To work around this problem, do either of the following:
	
	- Reinstall the Systems Management Server Administrator tool if the computer
	  experiencing the problem is not the Systems Management Server site server
	  itself.
	
	  -or-
	
	- Manually add the missing registry key. To do this, perform the steps in the
	  "Adding Lana Registry Key" section of this article, below.
	
	Adding Lana Registry Key
	------------------------
	
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
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Navigate to the following key:
	
	     HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Components\SightNT
	
	3. On the Edit menu, click Add Key.
	
	4. In the Key Name box, type "Lana" (without the quotation marks).
	
	5. Select the newly-created key (Lana). On the Edit Menu, Click Add Value. The
	  following are the default values for the Lana registry key:
	
	     <No Name>:REG_DWORD:0x7
	     Default0:REG_DWORD:0
	     Default1:REG_DWORD:1
	     Default2:REG_DWORD:2
	     Default3:REG_DWORD:3
	     Default4:REG_DWORD:4
	     Default5:REG_DWORD:5
	     Default6:REG_DWORD:6
	     Default7:REG_DWORD:7
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	
