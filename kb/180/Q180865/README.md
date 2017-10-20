---
layout: page
title: "Q180865: Print Server Adds Space After Form Feed"
permalink: /kb/180/Q180865/
---

## Q180865: Print Server Adds Space After Form Feed

{% raw %}

	Article: Q180865
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the
	registry.
	Before you edit the registry, make sure you understand how to
	restore it if
	a problem occurs. For information about how to do this, view the
	"Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	SNA Print Server inserts a space ('0x40') after a form feed ('0x0C') when
	processing LU3 print jobs.
	
	CAUSE
	=====
	
	The SNA Server Print Service was designed to add a space after receiving a form
	feed character in an LU3 print job, based upon IBM specifications for LU3
	printing.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server, versions 3.0, 3.0
	SP1, 3.0 SP2, and 4.0. This problem was corrected in the latest SNA Server
	versions 3.0 and 4.0 U.S. Service Packs. For information on obtaining these
	Service Packs, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
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
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To suppress the space that is inserted after a form feed in LU3 printing, follow
	these steps:
	
	1. Apply the hotfix.
	
	2. Start the Windows NT Registry Editor (Regedt32.exe) and find the following
	  key: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaPrint\
	  Parameters\ Add the following entry to this key: Value Name: NoSpaceAfterFF
	  Data Type: REG_SZ String: TRUE
	
	NOTE #1: The String is case-sensitive and must be set to TRUE for it to
	
	           function correctly.
	
	
	NOTE #2: If this registry parameter does not exist or if it is set to anything
	other then TRUE, a space will be added after all form feeds contained in the LU3
	print data.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
