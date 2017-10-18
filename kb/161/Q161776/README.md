---
layout: page
title: "Q161776: IBM MPA/A (MCA) SDLC Adapter Not Detected on Dual-Bus Servers"
permalink: kb/161/Q161776/
---

## Q161776: IBM MPA/A (MCA) SDLC Adapter Not Detected on Dual-Bus Servers

	Article: Q161776
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you install the IBM SDLC link service on an IBM PC Server 320 or 350, SNA
	Server Setup fails to detect the IBM SDLC Multifunction adapter /A
	(Microchannel) adapter. If you ignore this error, Setup adds the SDLC link
	service, but the link service remains pending and will not activate.
	
	CAUSE
	=====
	
	When detecting the IBM MPA/A adapter, SNA Server Setup only looks for the first
	hardware bus record in the Windows NT registry. However, these servers have both
	a PCI and an MCA bus. The first bus is identified as PCI, so this fails to match
	the expected MCA entry.
	
	RESOLUTION
	==========
	
	To resolve this problem, either apply the fix referenced below (see "STATUS") or
	use the following workaround:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe, as appropriate for your
	  version of Windows NT).
	
	2. Go to the following key in the registry:
	
	HKEY_LOCAL_MACHINE\HARDWARE\DESCRIPTION\System\MultifunctionAdapter\0
	
	3. Change the Identifier value from PCI to MCA, as follows:
	
	  Identifier: REG_SZ: MCA
	
	4. Quit Registry Editor.
	
	5. Re-run the SNA Server Setup program. Do NOT restart the computer first;
	  Windows NT dynamically sets this registry value when starting and will change
	  it back to PCI.
	
	Setting the value to MCA allows the Setup program to detect the adapter and
	configure the correct CardCfg entries for the adapter. The SDLC link service
	will continue to function even after the computer is restarted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11, 2.11
	Service Pack 1 (SP1), and 2.11 SP2. A supported fix is now available. Contact
	Microsoft Technical Support for more information.
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	A fix for this problem is available from Microsoft for both 2.11 and 3.0. With
	the fix applied, the Sync card detection module (syncdtct.dll) loops through all
	NetworkCard registry keys.
	
	IBM PC Server 320 and 350 are manufactured by IBM, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
