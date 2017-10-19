---
layout: page
title: "Q171033: Remote Performance Monitor Changes Under Windows NT 4.0 SP3"
permalink: /kb/171/Q171033/
---

## Q171033: Remote Performance Monitor Changes Under Windows NT 4.0 SP3

	Article: Q171033
	Product(s): Microsoft Windows NT
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Commercial Internet Server, version 1.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	At some point after you install Windows NT 4.0 Service Pack 3, the computer
	experiences a STOP 0xC000021A during normal operation.
	
	CAUSE
	=====
	
	When Performance Monitor is used to monitor a computer remotely, the initiating
	computer attaches to the target computer's Winlogon process through remote
	procedure call (RPC). Winlogon has a performance library component for
	collecting data. The shared data is passed from the performance dll to Winlogon
	on the target computer. Performance dll's sometimes misbehave and overwrite
	their buffers. In the case of remote monitoring, this overwrite occurs in the
	context of the Winlogon process and causes an access violation on the target
	computer. This compromises the Winlogon subsystem and potentially causes a
	breach in security.
	
	RESOLUTION
	==========
	
	Perform one of the following procedures:
	
	- Fix the extensible performance counter so that it doesn't overwrite its
	  buffers. Performance DLL's export (make available to other modules) three
	  functions - Open, Collect, and Close (see "Creating the Performance DLL" in
	  the Microsoft WIN32 Software Developer's Kit). Usually the Collect function
	  is the culprit.
	
	  -or-
	
	- Configure Windows NT to write a guard page on either side of the shared
	  memory buffer with various levels of checking. This technology was enabled by
	  default up to Service Pack 3 but caused too many page faults for large
	  counters, significantly degrading system performance. In Service Pack 3 the
	  guard pages and checking were turned off by default. To enable this guard
	  page technology, create this value under the following subkey:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT
	     \CurrentVersion\Perflib
	
	3. Click Add Value on the Edit menu.
	
	4. Add the following value:
	
	     Value Name: ExtCounterTestLevel
	     Data Type: REG_DWORD
	     Data: 2
	
	     NOTE: The ExtCounterTestLevel value ranges from 1 to 4:
	        1 - Most extensive testing, can be expensive.
	        2 - Basic testing.
	        3 - No testing.
	        4 - Don't even allocate a guard page (default from Service
	            Pack 3 onwards).
	
	5. Click OK and then quit Registry Editor.
	
	6. Shut down and restart Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Commercial Internet
	System version 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: kernel bugcheck perflib mbs perfmon c000021a
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbAudDeveloper kbMCISSearch kbMCIServ100
	Version           : :1.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
