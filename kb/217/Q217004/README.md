---
layout: page
title: "Q217004: BackOffice Installer Tool Does Not Delete Password Cache File"
permalink: kb/217/Q217004/
---

## Q217004: BackOffice Installer Tool Does Not Delete Password Cache File

	Article: Q217004
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 16-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use BackOffice Server version 4.0 to install Microsoft SQL Server,
	Microsoft Exchange Server, or Microsoft Transaction Server, you are required to
	provide a user account and password during the installation of each product.
	This information is stored in the Reboot.ini file to automate part of the
	installation process. However, upon completion, the installation tool does not
	delete the Reboot.ini file and the file can then be accessed if:
	
	- A user has security permission to log on to the server locally.
	
	- The folder containing the Reboot.ini file is shared and a user has security
	  permissions to that shared folder.
	
	RESOLUTION
	==========
	
	To prevent the Reboot.ini file from being read by an unauthorized user:
	
	1. At a command prompt, change to the Program Files\Microsoft BackOffice folder
	  on the partition where the BackOffice server was installed.
	
	2. Type "del reboot.ini" (without the quotation marks), and then press ENTER.
	
	NOTE: It will not be necessary to repeat this process at any future time unless
	the BackOffice installation tool is used again.
	
	MORE INFORMATION
	================
	
	For more information on this issue, please see the following Microsoft Security
	Bulletin at:
	
	  http://www.microsoft.com/security/bulletins/MS99-005.asp
	
	For additional security related information about Microsoft products, visit the
	Microsoft Security Web site at:
	
	  http://www.microsoft.com/security
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
