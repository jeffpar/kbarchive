---
layout: page
title: "Q197254: Customize Dirsynced cc:Mail Display and Alias Names"
permalink: /kb/197/Q197254/
---

## Q197254: Customize Dirsynced cc:Mail Display and Alias Names

	Article: Q197254
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	The display names and alias names for custom recipients that were created when
	directory synchronization was performed between Exchange Server and Lotus
	cc:Mail can be customized.
	
	MORE INFORMATION
	================
	
	The name rule will contain the following name components:
	
	  Rule    Name Component
	  %F      firstname
	  %L      lastname
	  %I      Initials
	
	%#(rule) Specifies the number of characters for the name. For example, the format
	%2F for the name Nick would generate Ni.
	
	You can also add a string to the end of the rule. This string will be appended to
	the display name. For example, the rule "%L, %F - CCMail" will generate a
	display name for John Doe as Doe, John -CCMail.
	
	The alias name can be changed from the default (First name and first letter of
	the last name) by performing the following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the Dir Sync alias name rule value under the following key in the
	  registry:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	     \MSExchangeCCMC\Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Under data, type in the rule to use. For example, to have the first 5
	  characters of the last name and first character of the first name, type
	  "%5L%1F".
	
	4. Quit Registry Editor.
	
	The display name can also be changed from the default (First name and first
	letter of the last name) by the making a change to the registry. To do this,
	perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the Dir Sync display name rule value under the following key in the
	  registry:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	     \MSExchangeCCMC\Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Under data, type in the rule to use. For example, to have the first 5
	  characters of the last name and first character of the first name, type
	  "%5L%1F".
	
	4. Quit Registry Editor.
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
