---
layout: page
title: "Q232629: Errors Occur When the MTS Identity Is Not Set to Default User"
permalink: kb/232/Q232629/
---

## Q232629: Errors Occur When the MTS Identity Is Not Set to Default User

	Article: Q232629
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open an ASP application in the Web browser, the following
	error message occurs:
	
	  Server Application Error An error occurred reading or setting a configuration
	  parameter. (0x80080005)
	
	After you receive this error message, the Event Viewer will contain the following
	system event:
	
	  DCOM got error "Logon failure: unknown user name or bad password. " and was
	  unable to logon DOMAINX\Administrator in order to run the server:
	  {182C40F0-32E4-11D0-818B-00A0C9231C29}
	
	If you start the Microsoft Transaction Server (MTS) Explorer, which loads the MTS
	snap-in for the Microsoft Management Console (MMC), and attempt to open a System
	package, the following error message occurs:
	
	  An error occurred accessing components in the system package on this
	  computer. Error code was 8080005. Make sure that:
	
	  Microsoft Transaction server is installed correctly.
	  If you have set a specific identity for the system package, check that the
	  user account and password are correct and user is a member of the local
	  Windows NT Administrators group.
	
	CAUSE
	=====
	
	These errors occur because the MTS identity is not set to the default user.
	
	RESOLUTION
	==========
	
	To resolve this issue, change the identity back to the default user. To do this,
	perform the following steps:
	
	1. Open the MMC, and open the system package that causes the error described in
	  the "Symptoms" section.
	
	2. Clear the error message.
	
	3. Click Yes when prompted by the following message:
	
	  The previous error could have been caused because the system package identity
	  is configured with an invalid user account or password. Do you want to try
	  resetting this identity to the default.
	
	4. After you click Yes, you may receive the following error message:
	
	  Error occurred accessing components in the system package on this computer.
	  Make sure that Microsoft Transaction Server is installed correctly. If you
	  have set a specific identity for the system package, check that the user
	  account and password are correct, and user is a member of the local NT
	  administrators group.
	
	  If you receive this error message, unregister and then reregister the
	  following dynamic-link library (DLL) files (located in the Winnt\System32\MTS
	  folder). To do this, click Start, click Run, and then enter the following
	  commands:
	
	  " regsvr32 /u mtxclex.dll
	  regsvr32 /u mtxcatex.dll
	  regsvr32 /u mtxextrk.dll
	  regsvr32 mtxclex.dll
	  regsvr32 mtxcatex.dll
	  regsvr32 mtxextrk.dll " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	For more information about the MTS identity, see the "Identity Tab (Package)"
	topic in the MTS Help.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
