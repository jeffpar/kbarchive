---
layout: page
title: "Q194934: Shared Folders Gateway Doesn't Support S/36 or AS/36"
permalink: kb/194/Q194934/
---

## Q194934: Shared Folders Gateway Doesn't Support S/36 or AS/36

	Article: Q194934
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	The Shared Folders Gateway (SFGW) service introduced with SNA Server 3.0 does
	not support connecting to S/36 or AS/36 systems for shared folder access.
	
	CAUSE
	=====
	
	The SFGW service was not originally designed to support connections to S/36 or
	AS/36 systems.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. We are researching this problem in SNA
	Server version 3.0 and will post more information here in the Knowledge Base as
	it becomes available.
	
	This problem was corrected in the latest Microsoft SNA Server version 4.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	In addition to applying the update, the following registry entry has to be
	manually added to enable S/36 and AS/36 support for the SFGW service:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Sfgw\Parameters
	
	3. On the Edit menu, click Add Key, and then add the following registry value:
	
	  " Key Name: S36
	  Class:" (without the quotation marks)
	
	  (NOTE: The Class value can be left blank.)
	
	4. Select the S36 key and new values that match the Remote Advanced
	  Program-to-Program Communications (APPC) logical unit (LU) aliases for the
	  S/36 or AS/36 systems that will be connected to. As an example, if the Remote
	  APPC LU for a S/36 is S36PROD, the following steps need to be done:
	  a. On the Edit menu, click Add Value, and then add the following registry
	     value:
	
	  " Value Name: S36PROD
	  Data Type: REG_DWORD
	
	  Value: 1" (without the quotation marks)
	
	     NOTE: The actual Data Type and Value do not matter, so they can be set to
	     anything. The Value Name has to match the actual Remote APPC LU alias
	     configured for the S/36 or AS/36 in SNA Server Manager.
	
	5. Quit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
