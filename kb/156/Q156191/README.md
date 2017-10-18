---
layout: page
title: "Q156191: PRB: SQL Server 6.5 SP1 on Windows 95 Gives Cryptic Message"
permalink: kb/156/Q156191/
---

## Q156191: PRB: SQL Server 6.5 SP1 on Windows 95 Gives Cryptic Message

	Article: Q156191
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:4.2,5.0
	Operating System(s): 
	Keyword(s): kbcode kbEEdition kbVC kbVC420
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install SQL Server 6.5 SP1 from Visual C++, Enterprise Edition,
	version 4.2 on Windows 95, the following cryptic message appears:
	
	  A critical error has occurred. Unable to load library file
	  "<Drive:>\SQL_SP1\sqlsetup.dll." This error prevents setup from
	  continuing. You may either retry the operation or exit Setup; however, the
	  software is not completely installed. If you exit, therefore, you will have
	  to repeat the Setup process from the beginning." [RETRY] or [EXIT SETUP].
	
	When you try to install SQL Server 6.5 SP2 from Visual C++, Enterprise Edition,
	version 5.0 on Windows 95, a similar message appears.
	
	RESOLUTION
	==========
	
	The Service Pack is server side only and should be run on the Windows NT
	machine, which has SQL Server. It is not necessary for the Windows 95 client
	utilities.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbEEdition kbVC kbVC420 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC500 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:4.2,5.0
	Issue type        : kbprb
	
	=============================================================================
	
