---
layout: page
title: "Q182882: Upgrading SNA 3.0 To 4.0 May Cause Failure On Mfc42u.dll File"
permalink: kb/182/Q182882/
---

## Q182882: Upgrading SNA 3.0 To 4.0 May Cause Failure On Mfc42u.dll File

	Article: Q182882
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade Microsoft SNA Server from version 3.0 to version 4.0, you may
	receive a pop-up message indicating that SNA Server cannot copy the Mfc42u.dll
	file to the \WINNT\System32 directory. A dialog is then presented with the
	options to Abort, Retry, or Ignore.
	
	CAUSE
	=====
	
	This message can occur if an application, such as Microsoft Visual C++ 4.2 (or
	some third-party application that has been written to use its own version of the
	Mfc42u.dll file), has a lock on this file during the upgrade process.
	
	WORKAROUND
	==========
	
	Stop any applications that may be running, and choose Retry to continue the
	upgrade process.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbprb
	
	=============================================================================
	
