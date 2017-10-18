---
layout: page
title: "Q180864: Print Sessions Stop with Host Print Service"
permalink: kb/180/Q180864/
---

## Q180864: Print Sessions Stop with Host Print Service

	Article: Q180864
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing
	the
	registry.
	Before you edit the registry, make sure you understand how to
	restore it if
	a problem occurs. For information about how to do this, view the
	"Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	An SNA Server computer using the Host Print service configured with a large
	number of print sessions on a Windows NT 4.0 Server may experience problems
	starting print sessions. When this occurs, print sessions may appear to stop
	responding or get stuck in a Spooling status when attempting to start the
	session or sessions. This problem may cause other symptoms as well.
	
	NOTE: Due to the factors involved, there are no specifics on exactly how many
	print sessions can be defined before this problem may occur.
	
	CAUSE
	=====
	
	There is a limit on the number of DCs (Device Contexts) that can exist on a
	Windows NT 4.0 system at one time. The number of DCs that can be created depends
	on a number of factors; therefore, a specific number cannot be given. After the
	limit of DCs has been reached, the problem that occurs when starting print
	sessions may become apparent.
	
	NOTE: This problem does not occur on Windows NT 3.51.
	
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	The limit on the number of DCs (Device Contexts) that can be created with this
	fix is 250.
	
	
	The updated module is Winvprt.dll.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0 SP
	1, 3.0 SP 2, 3.0 SP 3, 4.0, and 4.0 SP 1. This problem was first corrected in
	SNA Server 3.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	An update has been made to the Host Print service so that it can be configured
	to specify the maximum number of DCs that can be opened. If the maximum number
	of DCs is reached, the Host Print service will reject any additional print jobs
	it receives. If this occurs, it will log an Event 21 in the Windows NT
	Application Event Log. In addition, the SNA Print Server will return IBM Sense
	Code 0x0814 (Bracket BID Reject - RTR Forthcoming) to the host when a print job
	is rejected for this reason. The host should interpret this error as meaning
	that the print job can be re-sent at a later time.
	
	If the update has not been applied the hardcoded limit of 30 will be used if
	using Windows NT V4.0, 4.0 SP1, 4.0 SP2, or 4.0 SP3. There is no hardcoded limit
	using Windows NT 3.51 Operating System.
	
	If the update is applied, there is no hardcoded limit for the Windows NT system.
	However, the number of DCs that can exist on a Windows NT 4.0 system is still
	limited by the amount of memory that is allocated to GDI resources.
	
	NOTE: The SNA Print service may reject print jobs for reasons other than this,
	which would result in the same IBM sense code being returned to the host.
	
	If there is a need to control how many DCs the print server is allowed to create,
	follow these steps:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	NOTE: This registry entry is case sensitive.
	
	1. Apply the hotfix.
	
	2. Start the Windows NT Registry Editor (Regedt32.exe) and find the following
	  key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaPrint
	      \Parameters\ 
	
	  Add the following entry to this key:
	
	      Value Name: MaxGDISessions
	      Data Type: REG_DWORD
	      String: <value>
	
	  where value is the maximum number of DCs that can be created by the Host Print
	  service. Since the the number of DCs that can exist is still limited, the
	  recommended maximum value for this parameter is 200.
	
	In addition, the DC limitation is not applicable if the host print sessions are
	configured to use a PDF file. Print sessions configured to use a PDF file do not
	create DCs, and they do not make any other Graphical Device Interface (GDI)
	calls.
	
	
	NOTE: The SNA Print service may reject print jobs for reasons other than this,
	which would result in the same IBM sense code being returned to the host.
	
	If there is a need to control how many DCs the print server is allowed to create,
	follow these steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Apply the hotfix.
	
	2. Start the Windows NT Registry Editor (Regedt32.exe) and find the following
	  key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaPrint
	      \Parameters\ 
	
	  Add the following entry to this key:
	
	      Value Name: MaxGDISessions
	      Data Type: REG_DWORD
	      String: <value>
	
	  where value is 1 - 250.
	
	In addition, the limit of 250 DCs is not applicable if the host print sessions
	are configured to use a PDF file. Print sessions configured to use a PDF file do
	not create DCs, and they do not make any other Graphical Device Interface (GDI)
	calls.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
