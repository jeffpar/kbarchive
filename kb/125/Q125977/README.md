---
layout: page
title: "Q125977: Installing Windows NT Server As a BDC Fails"
permalink: kb/125/Q125977/
---

## Q125977: Installing Windows NT Server As a BDC Fails

	Article: Q125977
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT Server as a Backup Domain Controller (BDC), the
	following error message appears:
	
	  The dependency or group failed to start. This error prevented the network
	  from starting. As a result you will be unable to join a domain at the present
	  time.
	
	When you install Windows NT Server as a Server, the local account cannot be
	created and the installation fails.
	
	These problems occurs on computers using:
	
	- Compaq NetFlex-2 or NetFlex-L network adapters with the PCNTN3.SYS driver.
	
	  -or-
	
	- Compaq 32-bit Dualspeed Token Ring adapters.
	
	CAUSE
	=====
	
	This problem occurs when the default NonPagePool memory space is depleted and
	the pool attempts to expand with each memory request. Consequently, the network
	adapter and network driver fail to allocate memory during the initialization,
	and therefore fail to load.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Remove multiple network or SCSI adapters during the installation of Windows
	  NT Server in order to eliminate extra resource requirements.
	
	2. Add the adapters after the successful installation of Windows NT Server. You
	  may have to use different network adapters during the installation process.
	  Some network adapter drivers require large amount of NonPagePool memory
	  during installation.
	
	NOTE: If you experience this problem on a Compaq computer and network card,
	install Windows NT Server using the Compaq SmartStart CD.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	The Compaq products discussed here are manufactured by Compaq Computer Corp., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding the products' performance or reliability.
	
	Additional query words: prodnt nic mac dual speed
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
