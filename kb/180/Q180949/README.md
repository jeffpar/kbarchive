---
layout: page
title: "Q180949: Windows 95 Client Retrieves Wrong Password from the Cache"
permalink: /kb/180/Q180949/
---

## Q180949: Windows 95 Client Retrieves Wrong Password from the Cache

	Article: Q180949
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbtshoot
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	The SNA Server client for Windows 95 retrieves the wrong password from the cache
	during its initialization. Because the wrong password is obtained, account
	validation fails and the user is unable to get an application session through
	SNA Server.
	
	CAUSE
	=====
	
	The SNA Server client for Windows 95 does not expect its call to retrieve the
	password to succeed because the Windows 95 system does not have a password
	cache. If the call succeeds, the password retrieved by the client is not the
	correct password for the user.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0SP1,
	3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, the call to retrieve the password from the cache is
	disabled by default. To enable the client to retrieve the password, use the
	following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Apply the fix.
	
	2. Start the Windows 95 Registry Editor (Regedit.exe) and find the following
	  key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SnaBase\Parameters
	
	3. Add the following String Value:
	
	  Value Name: UseCachedPassword
	  String: True
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtshoot 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
