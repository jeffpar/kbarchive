---
layout: page
title: "Q175402: XCLN: An Extension Failed To Initialize"
permalink: /kb/175/Q175402/
---

## Q175402: XCLN: An Extension Failed To Initialize

{% raw %}

	Article: Q175402
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 5.0 
	- Microsoft Exchange Windows NT client, version 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you attempt to start the Microsoft Exchange Client, you may receive the
	following error message:
	
	  An extension failed to initialize. The entry point could not be
	  obtained.
	
	CAUSE
	=====
	
	The name or path of the DLL where the custom command resides is incorrect. This
	entry can optionally be followed by a comma and the ordinal of the entry point
	to call (default is 1).
	
	WORKAROUND
	==========
	
	Using the Registry Editor, ensure that the path statement in the dialog box
	correctly points to the DLL in question and that the original is correct. In the
	CleanSweep utility (Clnsp32.dll) located in the Back Office Resource Kit the
	ordinal is 2.
	
	Example: Winnt4.0; c:\windows\system32\clnswp32.dll;2
	
	This is assuming your OS is installed in C:\Windows and the DLL is in the
	System32 subdirectory.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To repair the problem, perform the following steps:
	
	1. At the command prompt, type RegEdit.
	
	2. In the HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Exchange\Client \Extensions
	  registry key, add the following New String value: Clnswp
	
	3. Note that the Data value for this String value should be as follows:
	
	  4.0;c:\windows\system32\clnswp32.dll;2
	
	if you copied Clnswp32.dll to the proper directory (c:\Windows\System32) when
	installing the tool.
	
	Additional query words: cleansweep clnswp xcln
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT kbExchange500Win95
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
