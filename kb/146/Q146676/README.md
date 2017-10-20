---
layout: page
title: "Q146676: XFOR: Exchange 4.0 DXA Appends 001 Only When Needed"
permalink: /kb/146/Q146676/
---

## Q146676: XFOR: Exchange 4.0 DXA Appends 001 Only When Needed

{% raw %}

	Article: Q146676
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After including Microsoft Exchange Server in the Directory Synchronization
	process of your Microsoft Mail environment, some Display Names are appended with
	001. This behavior can be seen whether your Microsoft Exchange Server computer
	is acting as the dirsync server or a dirsync requester.
	
	CAUSE
	=====
	
	In any one given Microsoft Mail postoffice, all display names (friendly names)
	must be unique. A Microsoft Mail postoffice may have multiple display names the
	same in its Global Address List (GAL). For example:
	
	  Bob SmithNET1/PO1/BSMITH
	  Bob SmithNET2/PO2/BSMITH
	
	The above would be perfectly acceptable in one Microsoft Mail postoffice, but the
	following would not:
	
	  Bob SmithNET1/PO1/BSMITH
	  Bob SmithNET1/PO1/BSMITH2
	
	In Microsoft Mail, neither Admin.exe nor Import.exe would allow the second Bob
	Smith to be created.
	
	Microsoft Exchange Server, on the other hand, will allow multiple objects to have
	the same display name. Because of this, the Microsoft Exchange Directory
	Synchronization Service (DXA) must ensure that it does not send the same display
	name to any one Microsoft Mail postoffice.
	
	WORKAROUND
	==========
	
	To work around this problem, edit the registry as shown below and then follow
	the rest of the procedure described below.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start the Registry Editor (Regedt32.exe).
	
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
	
	3. Follow step a or step b below, depending on whether the DXA is acting as the
	  dirsync server or the dirsync requester.
	
	  a. If the DXA is acting as the dirsync server, using the Microsoft Exchange
	     Admin utility, choose each Remote Requester object one by one and select
	     the "Export on next cycle" check box on the General tab. This will force a
	     full dirsync export to be sent to each Remote Requester.
	
	  b. If the DXA is acting as a dirsync requester, using the Microsoft Exchange
	     Administrator program, choose the dirsync requester object and select the
	     "Export on next cycle" check box on the settings. This will force a full
	     dirsync export to be sent to the dirsync server.
	
	4. Start the Microsoft Exchange Directory Synchronization Service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	For information about this problem in Microsoft Exchange Server version 5.0,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q166545 XFOR: Exchange 5.0 DXA Appends 001 Only When Needed
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
