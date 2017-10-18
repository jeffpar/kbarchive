---
layout: page
title: "Q155727: XFOR: DirSync Deletes and Modifies Not Being Processed by DXA"
permalink: kb/155/Q155727/
---

## Q155727: XFOR: DirSync Deletes and Modifies Not Being Processed by DXA

	Article: Q155727
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Delete and modify directory synchronization (dirsync) transactions are not
	processed by the Microsoft Exchange Server Directory Synchronization Agent
	(DXA).
	
	CAUSE
	=====
	
	When using Microsoft Mail, it is common practice (although not recommended) to
	force names into the dirsync stream by using the IMPORT -E command. Everything
	is directory synchronized; the entire organization sees everyone and can send
	and receive from everyone.
	
	When you use the IMPORT -E command with Microsoft Exchange Server as the dirsync
	server, you may run into problems. Every Microsoft Mail user in the Microsoft
	Exchange organization has an Imported-From value, which is the name of the
	Requester object that the transaction came from. Therefore, all Delete and
	Modify transactions for any Microsoft Mail user other than the Requester object
	the transaction came from are discarded by Microsoft Exchange Server. The reason
	is the Delete and Modify transactions come in from their appropriate postoffice
	and therefore do not match the Imported- From field.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 4.0
	and 5.0. This problem was corrected in the latest Microsoft Exchange Server 4.0
	and 5.0 U.S. Service Packs. For information on obtaining the service pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	After installing the service pack, use Registry Editor to add the following
	registry value:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows NT. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe, depending on your version
	  of Windows NT).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, highlight the following subkey:
	
	  SYSTEM\CurrentControlSet\Service\MSExchangeDX
	
	3. On the Edit menu, click Add Value and use the following entry:
	
	  Value: Requestors Used To Import From
	  Data Type: REG_MULTI_SZ
	
	  When prompted for data, enter the Display Names of the Requester Objects in
	  the Microsoft Exchange Server DXA that were used to run IMPORT -E from. Use a
	  space as a seperator.
	
	4. Quit Registry Editor.
	
	Now when the DXA searches the directory and does not find a distinguished name
	(DN) and the registry value is set, the DXA will search again using those
	requester names. Every time the DXA searches again, it puts an event message
	with Event ID 282 in the event log.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
