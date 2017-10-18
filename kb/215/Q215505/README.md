---
layout: page
title: "Q215505: XFOR: Error 14 While Running Import in MS Mail"
permalink: kb/215/Q215505/
---

## Q215505: XFOR: Error 14 While Running Import in MS Mail

	Article: Q215505
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	you generate a Resync.glb file on Microsoft Exchange Server (XS) and use it to
	reset the sync numbers of the MsMail requestors, you may receive the following
	error message:
	
	  Fatal error 14: "Error processing Resync.glb"
	
	This error is received when you run Import.exe to import the Resync.glb file.
	
	CAUSE
	=====
	
	When Exchange Server (XS) is acting as the Microsoft Mail Directory
	Synchronization Server (DXS), you may need to produce resync.glb file on XS
	according to the steps outlined in the Knowledge base article:
	
	  Q150976 XFOR: How to Create a Resync.glb File From an Exchange DSS
	
	The problem occurs because DXA only pulls the highest IMPSEQ, SRVSEQ and REQSEQ
	numbers from the requesters you set in the registry when you follow the steps in
	article number Q150976.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Directory Synchronization
	
	+----------------------+
	| File name | Version  | 
	+----------------------+
	| Dxa.exe   | 5.5.2524 | 
	+----------------------+
	
	
	WORKAROUND
	==========
	
	To fix this problem, add the registry value below and use the Dxa.exe file from
	build 2524 or later. This fix will then allow DXA to pull the global highest
	IMPSEQ, SRVSEQ, and REQSEQ number when generating the Resync.glb file. WARNING:
	If you use Registry Editor incorrectly, you may cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	you can solve problems that result from using Registry Editor incorrectly. Use
	Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\Currentcontrolset\Services\Msexchangedx
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: GlobalMaxSeqInResync
	  Data Type: REG_DWORD
	  Value: Default is 0
	
	4. Quit Registry Editor.
	
	If this value is present and set to 1 (TRUE), then at resync time, DXA will
	search for the highest IMPSEQ, SRVSEQ, and REQSEQ from amongst all the
	requestors that are registered on that DSS.
	
	If this value is missing or set to 0 (FALSE), then DXA behaves as designed, that
	is, it only searches for the highest sequence numbers from the requestors that
	are asking for a resync.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
