---
layout: page
title: "Q166545: XFOR: Exchange 5.0 DXA Appends 001 Only When Needed"
permalink: kb/166/Q166545/
---

## Q166545: XFOR: Exchange 5.0 DXA Appends 001 Only When Needed

	Article: Q166545
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After including Microsoft Exchange Server in the Directory Synchronization
	process of your MSMail environment, some Display Names are appended with
	
	1. This behavior can be seen whether your Microsoft Exchange Server is
	
	acting as the DirSync Server or a DirSync Requester.
	
	CAUSE
	=====
	
	In any one given MSMail postoffice, all display names (friendly names) must be
	unique. An MSMail postoffice may have multiple display names the same in its
	Global Address List (GAL). For example:
	
	  Bob SmithNET1/PO1/BSMITH
	  Bob SmithNET2/PO2/BSMITH
	
	The above would be perfectly legal in one MSMail postoffice but the following
	would not:
	
	  Bob SmithNET1/PO1/BSMITH
	  Bob SmithNET1/PO1/BSMITH2
	
	The above is illegal. Neither ADMIN.EXE nor IMPORT.EXE would allow the second Bob
	Smith to be created.
	
	Microsoft Exchange Server on the other hand will allow multiple objects to have
	the same display name. Due to this, the Microsoft Exchange Directory
	Synchronization Service (DXA) must ensure that it does not send the same display
	name to any one MSMail postoffice.
	
	WORKAROUND
	==========
	
	A new registry value is now available that will change this behavior as
	described in the MORE INFORMATION section below. The registry value to set is:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run the Registry Editor(Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     \SYSTEM\CurrentControlSet\Services\MSExchangeDX
	
	3. Add the following case-sensitive DWORD value of 0:
	
	     Unique Display Names
	
	4. Quit Registry Editor.
	
	After setting the registry parameter above, the following steps MUST be
	performed.
	
	1. Stop the Microsoft Exchange Directory Synchronization Service
	
	2. Delete the contents of the DXADATA subdirectory. Do not delete the directory,
	  only the contents of the directory.
	
	3. If the DXA is acting as the DirSync Server, using the Microsoft Exchange
	  Admin utility, choose each Remote Requester object one by one and check the
	  'Export on next cycle' checkbox on the general tab. This will force a full
	  DirSync export to be sent to each Remote Requester.
	
	  If the DXA is acting as a DirSync Requester, using the Microsoft Exchange
	  Admin utility, choose the DirSync Requester object and check the 'Export on
	  next cycle' checkbox on the settings tab. this will force a full DirSync
	  export to be sent to the DirSync Server.
	
	4. Start the Microsoft Exchange Directory Synchronization Service.
	
	STATUS
	======
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	For information about this problem in Microsoft Exchange Server version 4.0,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q146676 XFOR: Exchange 4.0 DXA Appends 001 Only When Needed
	
	How does the DXA keep track of what it has sent to the MSMail postoffices?
	
	The DXA keeps what we call a mappings database (XDIR.EDB) in the DXADATA
	directory of the Microsoft Exchange Server. Within this mappings database is
	kept a list of all transactions that have been sent by the DXA. The four values
	kept for each transaction sent are the objects:
	
	  USN-Changed
	  Display Name
	  Email-Addresss (the one that was sent)
	  Obj-Dist-Name
	
	Behavior with registry parameter listed above set to 1 or non existant:
	
	When a new DirSync transaction is about to be sent, the XDIR.EDB is checked to
	see if it has sent this friendly name before. If so, the Obj-Dist-Name of both
	objects are compared to see if this is the same object being sent again. If so,
	we update the USN-Changed value and send the transaction as is else we append
	the 001 to the friendly name.
	
	Behavior with registry parameter listed above set to 0.
	
	When a new DirSync transaction is about to be sent, the XDIR.EDB is checked to
	see if it has sent this friendly name before. If so, is this the same address
	type (IE, X.400, MS, SMTP, etc.) If so, is the address type MS (MSMail). If not,
	append the 001. If so, is it the same NETWORK/PO name. If so, append the 001
	else do not append the 001.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	
	=============================================================================
	
