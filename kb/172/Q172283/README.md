---
layout: page
title: "Q172283: Blank Page Is Printed Between Each Print Job"
permalink: kb/172/Q172283/
---

## Q172283: Blank Page Is Printed Between Each Print Job

	Article: Q172283
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	A blank page is printed between each print job.
	
	CAUSE
	=====
	
	If the host or AS/400 initiates and ends a print job without sending any printer
	data, the SNA Print Server opens and closes the Windows NT printer. This results
	in a blank page being printed. If these empty print jobs separate the actual
	print jobs, blank pages are printed between each job.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, SNA Print Server allows a delay in opening the printer
	until the SNA Print Server receives printable data. To implement the fix, you
	need to edit the registry as follows:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe as appropriate for your
	  version of Windows NT).
	
	2. Go to the following key in the registry:
	
	HKEY_LOCAL_ MACHINE\System\CurrentControlSet\Services\SnaPrint\ 
	Parameters
	
	3. On the Edit menu, click Add Value and use the following entry:
	
	  "Value Name: DelayPrintStart
	  Data Type: REG_SZ
	  Value: YES" (without the quotation marks)
	
	4. Exit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
