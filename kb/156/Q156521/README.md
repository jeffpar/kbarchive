---
layout: page
title: "Q156521: PC NTMMTA: Error Message: Setup Has Encountered a Problem"
permalink: kb/156/Q156521/
---

## Q156521: PC NTMMTA: Error Message: Setup Has Encountered a Problem

	Article: Q156521
	Product(s): Microsoft Mail For PC Networks
	Version(s): winnt:4.0; :3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows NT 4.0 
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you install the Microsoft Mail Multitasking MTA for Windows NT (NTMMTA),
	version 3.5, on Windows NT Server 4.0, the Setup program stops and the following
	error message is displayed:
	
	  Setup has encountered a problem.
	  Please report File='COMMON\INF01.C',Line='253' (number may vary) to Microsoft
	  Product Support Services.
	
	Setup then displays a box that states that it was unable to finish, and directs
	you to try again.
	
	The NTMMTA is not successfully installed.
	
	CAUSE
	=====
	
	During installation, the Setup program for Microsoft Mail Service Manager checks
	for the Windows NT Server version 3.51. Any other version is not accepted and
	Setup stops.
	
	NOTE: The Microsoft Mail Multitasking MTA for Windows NT is not supported on
	Windows 95 or Windows NT Workstation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail Multitasking MTA
	for Windows NT, Version 3.5. A supported fix is now available, but has not been
	fully regression-tested and should be applied only to systems experiencing this
	specific problem. Contact Microsoft Product Support Services for more
	information.
	
	
	MORE INFORMATION
	================
	
	The same error message is displayed when you try to install the Microsoft Mail
	Multitasking MTA for Windows NT, Version 3.5 from Windows 95 Explorer. For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q135733 PC NTMMTA: Errors Installing on Unsupported Platforms
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTSsearch kbExchange400 kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : winnt:4.0; :3.5
	
	=============================================================================
	
