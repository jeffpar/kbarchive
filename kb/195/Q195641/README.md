---
layout: page
title: "Q195641: Btrieve, IPX, and Event ID 2012"
permalink: /kb/195/Q195641/
---

## Q195641: Btrieve, IPX, and Event ID 2012

{% raw %}

	Article: Q195641
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 05-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When running an application with the Btrieve engine version 6.15 under Windows
	NT 4.0 with Service Pack 3 and NWLink IPX/SPX protocol, you may receive the
	following Event error consistently:
	
	  Event ID 2012 - The Server Has Encountered a Network Error.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serous problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	NOTE: Registry keys in the following procedure may appear on two or more lines,
	but are actually one path; they have been wrapped for readability.
	
	Change the IPX MaxPktSize from 240 to 0 via the Registry.
	
	1. Run Registry Editor (Regedt32.exe).
	
	  NOTE: It is recommended that you first save each registry key before deleting
	  it.
	
	2. The MaxPktSize information is located in the following registry keys:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NWLnkIPX
	\NetConfig\<adapter name>
	
	
	3. Double-click MaxPktSize and change from 240 to 0.
	
	If changing the MaxPktSize alone does not correct the problem, contact Microsoft
	Product Support Services and get the most recent Nwlnkspx.sys and MUP.SYS files.
	
	MORE INFORMATION
	================
	
	Btrieve 6.15 for Windows NT discussed here is manufactured by Pervasive Software
	Inc. (formerly Btrieve Technologies Inc.), a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
