---
layout: page
title: "Q195009: Application Access Violation or Hang After Applying SP4"
permalink: /kb/195/Q195009/
---

## Q195009: Application Access Violation or Hang After Applying SP4

	Article: Q195009
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After applying Windows NT 4.0 Service Pack 4 (SP4) or Windows 2000, you
	encounter lockups or access violation (Dr. Watson) errors in an application that
	appeared to be working fine previously.
	
	NOTE: You might encounter other symptoms or errors in an application that relate
	to the below-mentioned cause.
	
	CAUSE
	=====
	
	The application in question is errantly trying to access a block of memory that
	it had previously freed or deallocated. With Windows NT 4.0 Service Pack 3 (SP3)
	and earlier, such a reallocation is more likely to succeed, since the same
	memory location is more likely to still be available for reallocation. SP4 and
	later, however, introduces a change in the heap manager allocation patterns that
	can result in a failure of such a reallocation request. For more information on
	this change, please see the following article in the Microsoft Knowledge Base:
	
	  Q195008 Heap Manager Change in Service Pack 4
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To determine if the above-mentioned change is exposing a problem in the
	application in question, proceed with the following steps. If these steps result
	in the application generating fewer or no more such errors, contact the vendor
	of the application to inquire about an updated version of the application that
	resolves this problem.
	
	NOTE: There are other conditions that can cause such errors or hangs that are not
	related to this change introduced in SP4 and Windows 2000. If the following
	workaround does not correct the problem, query on the error or condition you are
	encountering and the application name in the Microsoft Knowledge Base and/or
	check with your application vendor for more information on any other known
	problems.
	
	
	1. Start Registry Editor (regedt32.exe) and navigate to the following registry
	  path:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Image File
	  Execution Options
	
	2. With the Image File Execution Options key selected, click Add Key from the
	  Edit menu to create a new key using the name of the executable file that
	  starts the process that is encountering the above-noted problem. An example
	  Key Name entry is "Application.exe". You can leave the Class field blank.
	  This Key Name entry should not include a path, only the name of the
	  executable file itself. Refer to the already-existing Game.exe entry in this
	  location of the registry as an example.
	
	3. Select the new key you created in step 2 above and click Add Value from the
	  Edit menu to create the Value Name: DisableHeapLookaside and Data Type:
	  REG_SZ. Click OK and then enter "1" (without the quotation marks) in the
	  String field.
	
	  Summary for the above entries:
	
	  Key Name: application.exe
	  Class:
	
	  Value Name: DisableHeapLookaside
	  Data Type: REG_SZ
	  String: 1
	
	4. It is not usually necessary to restart the system to see the results. You can
	  usually simply restart the application because this registry value is
	  inspected during each process initialization. If the executable is a service,
	  however, restarting the computer may be necessary to cause the executable to
	  be properly restarted.
	
	NOTE: This registry setting only affects the process or processes that you
	specify.
	
	
	Additional query words: 4.00 AV stack hang error bug compatguidestability Heap LookAside HeapLookAside Disable Look Aside
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
