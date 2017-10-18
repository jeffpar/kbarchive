---
layout: page
title: "Q252902: XADM: Alpha Store Crash After Applying Windows NT 4.0 SP4"
permalink: kb/252/Q252902/
---

## Q252902: XADM: Alpha Store Crash After Applying Windows NT 4.0 SP4

	Article: Q252902
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, on platform(s):
	   - the hardware: DEC Alpha 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you apply Microsoft Windows NT 4.0 Service Pack 4 (SP4) or later on an
	Alpha computer that is running Exchange Server 5.5, you may experience a Dr.
	Watson crash in the information store.
	
	CAUSE
	=====
	
	Starting in Windows NT 4.0 SP4, there are changes in the heap manager that may
	prevent the information store from allocating memory that it had previously
	freed.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe), and locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Image File
	  Execution Options
	
	2. Click the Image File Execution Options key, and then click Add Key from the
	  Edit menu to create a new key with the name "store.exe" (without the
	  quotation marks). You can leave the Class field blank. This Key Name entry
	  should not include a path, only the name of the executable itself.
	
	3. Click the new key you created in step 2, and then click Add Value from the
	  Edit menu to create the Value Name: DisableHeapLookaside and Data Type:
	  REG_SZ.
	
	4. Click OK, and then type "1" (without the quotation marks) in the String
	  field.
	
	  Summary for the above entries:
	
	  Key Name: store.exe
	  Class:
	
	  Value Name: DisableHeapLookaside
	  Data Type: REG_SZ
	  String: 1
	
	5. You do not usually need to restart the system to see the results. You can
	  usually simply restart the Exchange Server information store because this
	  registry value is inspected during each process initialization. However, you
	  may need to restart the computer to properly restart the information store.
	
	MORE INFORMATION
	================
	
	For additional information about the new heap manager in Windows NT 4.0, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q195008 Heap Manager Change in Service Pack 4 and Windows 2000
	
	  Q195009 Application Access Violation or Hang After Applying SP4
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
