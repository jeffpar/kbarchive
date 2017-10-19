---
layout: page
title: "Q234865: MOD2000: Setting Up VBE/VSS for Multiuser Development"
permalink: /kb/234/Q234865/
---

## Q234865: MOD2000: Setting Up VBE/VSS for Multiuser Development

	Article: Q234865
	Product(s): Microsoft SourceSafe
	Version(s): ; WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbdta kbOffice2000 modSSafe
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 2000 Developer 
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual Basic Editor integration with Microsoft Visual SourceSafe allows
	multiple developers to collaborate on a VBA project. To enable multiuser
	development, you must install Visual SourceSafe correctly on all development
	(client) computers and on the Visual SourceSafe server.
	
	MORE INFORMATION
	================
	
	In a multiuser development environment, the Visual SourceSafe database is on one
	computer that is called the server, and each developer has a local installation
	of the Visual SourceSafe client.
	
	To set up Visual SourceSafe for multiuser development, follow these steps:
	
	1. Install Visual SourceSafe on the server. Run the Visual SourceSafe Setup
	  program from the Other Developer Applications option of Microsoft Office 2000
	  Developer Tools Setup.
	
	2. In Setup, when you are prompted, click the Shared Database Server option, and
	  make sure you install the program to a folder on the server.
	
	3. Share the folder in which you installed the program and make sure that all
	  users have the correct permissions to the share.
	
	For additional information about network permissions, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q131022 INFO: Required Network Rights for the SourceSafe Directories
	
	4. From each development computer (client), run Netsetup.exe, which is located
	  in the install folder on the server. This installs a Visual SourceSafe client
	  that accesses the database on the server for each user. After the
	  installation is finished, run the Visual SourceSafe Explorer on the client,
	  and then close it.
	
	5. Also, on each development computer, install the Developer Addins and ActiveX
	  Controls from the Office 2000 Developer Tools option of the Microsoft Office
	  2000 Developer Tools Setup.
	
	REFERENCES
	==========
	
	For more information about installing Visual SourceSafe, in the Microsoft Visual
	SourceSafe Administrator, click Contents on the Help menu, type "installation"
	(without the quotation marks) on the Index tab, and then click one of the topics
	that appear.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbOffice2000 modSSafe 
	Technology        : kbSSafeSearch kbOfficeSearch kbAudDeveloper kbOffice2000Search kbOffice2000 kbSSafe600 kbOffice2000DevSearch
	Version           : :; WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
