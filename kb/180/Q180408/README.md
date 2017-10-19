---
layout: page
title: "Q180408: Country Does Not Appear in Telephony Country Code List"
permalink: /kb/180/Q180408/
---

## Q180408: Country Does Not Appear in Telephony Country Code List

	Article: Q180408
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbtool dun _IK12469 kbDialUp
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry  Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you attempt to create a phonebook entry to dial another country, you may
	find that the country you want to call is not in the Country Code list.
	
	CAUSE
	=====
	
	This issue can occur if the country you want to call was assigned a calling code
	after Windows NT 4.0 was released.
	
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
	
	To resolve this issue you can add new country codes using the following steps:
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe).
	
	2. Go to the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\ 
	  Currentversion\Telephony\Country List
	
	3. Create a new key named for the country code that is provided by your
	  telephone provider.
	
	4. Within the new key you created in step 3, create the following values:
	
	  Value Name: CountryCode
	  Data Type : REG_DWORD
	  Data      : <country code in decimal>
	
	  Value Name: Name
	  Data Type : REG_SZ
	  Data      : <Country name>
	
	  Value Name: SameAreaRule
	  Data Type : REG_SZ
	  Data      : <provided by telephone provider>
	
	  Value Name: LongDistanceRule
	  Data Type : REG_SZ
	  Data      : <provided by telephone provider>
	
	  Value Name: InternationalRule
	  Date Type : REG_SZ
	  Data      : <provided by telephone provider>
	
	5. Restart your computer for the new country to appear in the Country Code list.
	======================================================================
	Keywords          : kbtool dun _IK12469 kbDialUp 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
