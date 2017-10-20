---
layout: page
title: "Q177651: AT Command Handles Quotation Marks Differently"
permalink: /kb/177/Q177651/
---

## Q177651: AT Command Handles Quotation Marks Differently

{% raw %}

	Article: Q177651
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	You used batch files in Windows NT 3.51 to schedule jobs with the AT command.
	With Windows NT 4.0, jobs surrounded with quotation marks are not run.
	
	CAUSE
	=====
	
	The parsing algorithm of the AT command was changed in Windows NT 4.0 to better
	handle Long File Names (LFN). Here are examples of the syntax for the AT command
	for each operating system.
	
	     AT 10:15 "notepad c:\config.sys" (Windows NT 3.51)
	     AT 10:15 notepad "c:\config.sys" (Windows NT 4.0)
	
	RESOLUTION
	==========
	
	The AT command in Windows NT 4.0 can be forced to use the same parsing algorithm
	as Windows NT 3.51 by adding a parameter to the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe) and select the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Schedule
	
	2. On the Edit menu, click Add Key to create the following entry:
	
	  Key Name: Parameters
	  Class: <blank>
	
	3. Open the Parameters key that you created in step 2.
	
	4. On the Edit menu, click Add Value to create the following entry:
	
	  Value Name:   UseOldParsing
	  Data Type :   REG_DWORD
	  String    :   1
	
	NOTE: This parameter is deleted by the Scheduler service on startup. To avoid the
	parameter being deleted, apply the fix mentioned below.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: atsvc schedular schedule
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
