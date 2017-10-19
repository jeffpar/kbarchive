---
layout: page
title: "Q176513: Incorrect Daylight Savings Settings for Finnish Time Zone"
permalink: /kb/176/Q176513/
---

## Q176513: Incorrect Daylight Savings Settings for Finnish Time Zone

	Article: Q176513
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	On a computer running Windows NT in the Finnish Time Zone, daylight-saving time
	changes are not applied at the correct time and date.
	
	CAUSE
	=====
	
	Since adopting new European Union standards, the GFT Standard Time Zone settings
	for daylight-saving time are no longer valid for Finland.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	ARTICLE-ID: Q156084
	TITLE : Windows NT 3.51 Does Not Have Updated Daylight Saving Time
	
	RESOLUTION
	==========
	
	The daylight-saving time settings for Finland do not match those for Greece and
	Turkey, with whom Finland shares the existing GFT standard time zone. It is not
	appropriate to amend the settings for this time zone. Create a new time zone
	specifically for Finland instead.
	
	Follow these instructions to manually create the new time zone:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Locate the time zone in the registry and create a new zone:
	
	  a. Run Registry Editor (Regedt32.exe).
	
	  b. Go to the following key in the registry:
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion
	     \Time Zones
	
	     NOTE: The above registry key is one path; it has been wrapped for
	     readability.
	
	  c. On the Edit menu, click Add Key and type the key name, Finnish Standard
	     Time.
	
	     NOTE: Leave the Class entry blank.
	
	  d. Select the newly created Finnish Standard Time key.
	
	  e. On the Edit menu, click Add Value and add the following four values:
	
	     +--------------------------------------------------+
	     | Value Name | Data Type  | Value                  | 
	     +--------------------------------------------------+
	     | Display    | REG_SZ     | (GMT+02:00) Helsinki   | 
	     +--------------------------------------------------+
	     | Dlt        | REG_SZ     | Finland Daylight Time  | 
	     +--------------------------------------------------+
	     | MapID      | REG_SZ     | -1,67                  | 
	     +--------------------------------------------------+
	     | TZI        | REG_BINARY | *see NOTE that follows | 
	     +--------------------------------------------------+
	
	     NOTE: The TZI value includes the definitions for the start and end of
	     daylight-saving time. The value to be entered into the binary editor in
	     hex follows:
	
	     88FFFFFF00000000C4FFFFFF000009000000050000000000000000000000030000000
	     5000000000000000000
	
	     NOTE: The above registry value is one entry; it has been wrapped for
	     readability.
	
	2. To help avoid confusion, it is recommended that you remove Helsinki from the
	  line display of the GFT Standard Time Zone in Control Panel.
	
	  a. Go to the following key in the registry:
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion
	     \Time Zones\GFT Standard Time
	
	     NOTE: The above registry key is one path; it has been wrapped for
	     readability.
	
	  b. Double-click the display value and remove Helsinki. The value should look
	     like this:
	
	     Value Name: Display
	     Data Type : REG_SZ
	     Value     : (GMT+02:00) Athens, Istanbul
	
	3. To make the new time zone current, follow these steps:
	
	  a. Click Start, point to Settings, click Control Panel, and then double-
	     click Date/Time.
	
	  b. Click the Time Zone tab.
	
	  c. Select (GMT+02:00) Helsinki for the Finnish Standard time zone and click
	     OK.
	
	MORE INFORMATION
	================
	
	To help you automate this process, a script follows for the Windows NT resource
	kit tool, Regini.exe. You must customize the key name and the values for your
	installation. Please note that the bytes in the REGINI script are ordered
	differently than shown by the Registry Editor. After you run the script, repeat
	step three as previously shown.
	
	This following sample is for the English version of Windows NT 4.0:
	
	   \Registry\Machine
	     Software
	      Microsoft
	            Windows NT
	              CurrentVersion
	                 Time Zones
	                    Finnish Standard Time
	           Display = REG_SZ (GMT+02:00) Helsinki
	           Dlt = REG_SZ Finland Daylight Time
	           MapID = REG_SZ -1,67
	           TZI = REG_BINARY 0x2c \ 
	              0xFFFFFF88 \ 
	              0x00000000 \ 
	              0xFFFFFFC4 \ 
	              0x000A0000 \ 
	              0x00050000 \ 
	              0x00000004 \ 
	              0x00000000 \ 
	              0x00030000 \ 
	              0x00050000 \ 
	              0x00000003 \ 
	              0x00000000
	
	   \Registry\Machine
	     Software
	      Microsoft
	            Windows NT
	              CurrentVersion
	                 Time Zones
	                    GFT Standard Time
	           Display = REG_SZ (GMT+02:00) Athens, Istanbul
	
	Additional query words: timezone time zones
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
