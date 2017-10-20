---
layout: page
title: "Q183058: XFOR: Modifying the Display Name and Alias for cc:Mail Dirsync"
permalink: /kb/183/Q183058/
---

## Q183058: XFOR: Modifying the Display Name and Alias for cc:Mail Dirsync

{% raw %}

	Article: Q183058
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	This article describes how to modify the default display name and alias for
	custom recipients that are created when you perform directory synchronization
	(dirsync) between Lotus cc:Mail and Microsoft Exchange Server. When you migrate
	users from cc:Mail to Exchange Server and these custom recipients are converted
	to mailboxes, the display names and aliases for the custom recipients are
	maintained.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	Modifying the Display Name
	--------------------------
	
	When you perform dirsync between cc:Mail and Exchange Server, the default display
	name for custom recipients that are created is the user's first name and last
	name, separated by a space. To modify the display name that is used, follow
	these steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the "Dir Synch display name rule" registry value under the following
	  key in the registry:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeCCMC
	     \Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Click String on the Edit menu, type a new rule, and then click OK. The
	  following table lists the rules that can be used:
	
	     Rule     Purpose
	     --------------------------------------------------------------------
	     %<n>F    Includes the first <n> characters of the user's first name.
	              If the <n> component is not used, the entire first name is
	              included. For example, to include the first five characters
	              of the first name, type "%5F" (without quotation marks). To
	              include the entire first name, type "%F" (without quotation
	              marks).
	
	     %<n>L    Includes the first <n> characters of the user's last name.
	              If the <n> component is not used, the entire first name is
	              included. For example, to include the first five characters
	              of the last name, type "%5L" (without quotation marks). To
	              include the entire last name, type "%L" (without quotation
	              marks).
	
	     %I       Includes the user's middle initial.
	
	     <text>   Includes <text>. For example, to include "cc:Mail User,"
	              type "cc:Mail User" (without quotation marks). To include a
	              space, press SPACE BAR. Note that this rule can only be
	              used at the end of the string.
	
	4. Quit Registry Editor.
	
	Modifying the Alias
	-------------------
	
	When you perform dirsync between cc:Mail and Exchange Server, the default alias
	for custom recipients that are created is the user's first name and the first
	character of their last name. To modify the alias that is used, follow these
	steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the "Dir Synch alias name rule" registry value under the following key
	  in the registry:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeCCMC
	     \Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Click String on the Edit menu, type a new rule, and then click OK. The table
	  in the "Modifying the Display Name" section above lists the rules that can be
	  used.
	
	4. Quit Registry Editor.
	
	Additional query words: ccmc migration
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
