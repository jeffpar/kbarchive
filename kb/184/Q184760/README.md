---
layout: page
title: "Q184760: Error: &quot;CreateIISPackage or DeleteIISPackage, 0x8008005&quot;"
permalink: kb/184/Q184760/
---

## Q184760: Error: &quot;CreateIISPackage or DeleteIISPackage, 0x8008005&quot;

	Article: Q184760
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 08-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During installation of the Windows NT 4.0 Option Pack, you may receive the
	following error messages:
	
	  CreateIISPackage or DeleteIISPackage, 0x8008005
	  Server Execution Failed
	
	  createinproc 0x80110401
	
	  Setup could not set WEBHITS OOP
	
	CAUSE
	=====
	
	The Internet Server Web Application Manager (IWAM) account is created on the
	primary domain controller (PDC), but does not have time to synchronize with the
	backup domain controller (BDC).
	
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Remove the Windows NT 4.0 Option Pack.
	
	2. Reinstall the Windows NT 4.0 Option Pack. During Setup, choose a Custom
	  installation and clear the Microsoft Index Server and World Wide Web Sample
	  Site.
	
	3. Synchronize the computer with the domain.
	
	4. Start the Windows NT 4.0 Option Pack Setup program again and add Microsoft
	  Index Server and World Wide Web Sample Site.
	
	MORE INFORMATION
	================
	
	For additional information about other known causes of the CreateIISPackage or
	DeleteIISPackage, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q180119 : "Create IISPackage or Delete IISPackage..." During NTOP Setup
	
	For additional information regarding Internet Information Server (IIS)
	installation issues, refer to the Internet Information Server 4.0 Release
	Notes.
	
	
	Additional query words: WAM set up installing setting all sych sync synched synced akz
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
