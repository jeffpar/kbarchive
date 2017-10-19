---
layout: page
title: "Q189510: XADM: Exchange 5.0 Does Not Install on Compaq Dual Processor"
permalink: /kb/189/Q189510/
---

## Q189510: XADM: Exchange 5.0 Does Not Install on Compaq Dual Processor

	Article: Q189510
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Exchange 5.0 Setup requires Service Pack 5 to be installed on Windows NT Server
	version 3.51 or Service Pack 2 installed on Windows NT Server 4.0.
	
	After you install Windows NT 4.0 Service Pack 2 on a Dual Processor Compaq System
	with a Compaq SSD installed, the system may stop responding (hang) at the
	Windows NT logon screen, without displaying any error messages.
	
	CAUSE
	=====
	
	The Compaq SSD was used to upgrade the system to a multi-processor system. The
	SSD correctly installs the files required for multi-processing support but
	incorrectly modifies the line in the Setup.log file that refers to Hal.dll. The
	Hal.dll line references the single processor version of Hal.dll, and the
	NTOSKRNL line references the multi-processor version of the kernel. As a result,
	the Windows NT Service Pack installs the multi- processor kernel file and the
	single processor version of Hal.dll.
	
	When the system restarts after the service pack installation, the Windows NT
	Kernel Load screen reports one system processor - the multiprocessor kernel.
	Windows NT continues loading but stops responding at the logon screen without
	any errors.
	
	WORKAROUND
	==========
	
	Please refer to Knowledge Base article Q162250, "Service Packs on Compaq MPS
	Systems May Cause System Hangs," for a workaround and more details.
	
	MORE INFORMATION
	================
	
	The Microsoft Exchange Server 5.0 Upgrade student guide shows an incorrect error
	message on pages 2-8. This error message states that the minimum requirement is
	Windows NT 4.0 [Build 138 Service Pack 1].
	
	STATUS
	======
	
	The third-party products discussed here are manufactured by Compaq, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prudent 4.00 hang complete
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
