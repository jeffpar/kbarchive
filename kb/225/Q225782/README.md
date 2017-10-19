---
layout: page
title: "Q225782: Err Msg: Not Enough Server Storage Is Available to Process..."
permalink: /kb/225/Q225782/
---

## Q225782: Err Msg: Not Enough Server Storage Is Available to Process...

	Article: Q225782
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you use a locally mapped shared and the IRPStackSize parameter is set too
	low, you may receive the following error message:
	
	  Not enough server storage is available to process this command.
	
	CAUSE
	=====
	
	This behavior can occur in the following operating systems:
	
	- Windows NT Server 4.0 Service Pack 3 (SP3) or earlier
	
	- Windows NT Terminal Server 4.0 without Service Pack 4 (SP4)
	
	NOTE: This problem can also occur with service packs after SP3 on Windows NT 4.0
	if you install certain software such as Norton AntiVirus software.
	
	Depending on the hardware configuration of the specific computer, the default
	value may not be large enough for the SRV service to properly administer shared
	folders on some of the physical drives. You may see one or both of the following
	event messages:
	
	  Event ID: 2011
	  Source: SRV
	  Description: The server's configuration parameter "irpstacksize" is too small
	  for the server to use a local device. Please increase the value of this
	  parameter.
	
	  Event ID: 0
	  Source SRV
	  Description: Description for Event ID 0 could not be found. It contains the
	  insertion string \device\LanManServer.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	You can increase the IRPStackSize value. You must first add this value to the
	following key if it is not already present:
	
	  HKEY_LOCAL_MACHINE SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters
	
	  Value Name: IRPStackSize
	  Data Type: DWORD
	  Default: 0x4
	  Maximum: 0xC
	
	Increasing this value requires some memory from the non-allocated memory pool,
	but the impact should not be noticeable.
	
	NOTE: It is not always advisable to set the IRPStackSize value to its maximum of
	12. Generally, you should start the value at 4 and work your way up, increasing
	the value by 1 each time. The problem may still occur if the value is too high.
	
	This error message may also occur after installing or uninstalling virus-scanning
	software. You may want to remove the virus-scanning software or increase the
	IRPStackSize if you need to use the software.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The default IRPStackSize for Windows NT 4.0 SP3 and earlier and Windows NT
	Terminal Server 4.0 is 4. The default value for SP4 is 11.
	
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q198386 Changes in IRP Stack Size in Lanman Server
	
	For more information, view the following Symantec Web site:
	
	  http://service1.symantec.com/support/nav.nsf/552ba2f7636bedf088256818006f78bf/4f7d50c8b753a25788256962005ce9ac?opendocument&highlight=0,enough,server,storage
	
	This article provides information on the following products:
	
	Products: Norton AntiVirus 2000, Norton AntiVirus 2001, Norton AntiVirus 5.0 -
	Windows NT, Norton AntiVirus 5.0 - Windows NT Server, Norton AntiVirus Corporate
	Edition 6.0, Norton AntiVirus Corporate Edition 7.0
	Operating Systems: Windows NT 4.0, Windows NT3.51, Windows NT 4.0 Server, Windows
	NT3.51 Server.
	
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
