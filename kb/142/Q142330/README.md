---
layout: page
title: "Q142330: User-Level Security Not Enabled with Custom Setup Script"
permalink: /kb/142/Q142330/
---

## Q142330: User-Level Security Not Enabled with Custom Setup Script

	Article: Q142330
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): msnets win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you use the Server-Based Setup tool (Netsetup.exe) to create a custom
	Setup script that is designed to enable user-level security, user-level security
	may not be enabled when you install Windows 95 from the shared Windows 95 folder
	on the server.
	
	CAUSE
	=====
	
	When you use Netsetup.exe to create a custom Setup script and specify that
	user-level security should be enabled, the following line is added to the custom
	Setup script
	
	  UserSecurity=<agent>
	
	where <agent> is the type of security agent used to provide pass-through
	validation for user-level security. Pass-through validation can be provided by a
	Microsoft Windows NT domain, a Windows NT-based computer, or a Novell NetWare
	server.
	
	RESOLUTION
	==========
	
	To work around this problem, use one of the following methods:
	
	- Use a text editor (such as Notepad) to edit the custom Setup script and
	  modify the "UserSecurity=" line so that it reads
	
	  Security=<agent>
	
	  where <agent> is the type of security agent used to provide pass-
	  through validation for user-level security.
	
	- Use the Batch Setup tool (Batch.exe) to create your custom Setup script
	  instead of the Server-Based Setup tool. Batch.exe is located in the
	  Admin\Nettools\Netsetup folder on the Windows 95 CD-ROM. You can install this
	  tool using the Add/Remove Programs tool in Control Panel. You can also
	  install Batch.exe as part of the Microsoft Windows 95 Resource Kit.
	
	  NOTE: The Batch Setup tool is included in the CD-ROM version of Windows 95,
	  but not in the floppy disk version. To use the Batch Setup tool you must have
	  the CD-ROM version of Windows 95.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	REFERENCES
	==========
	
	For additional information about Server-Based Setup in Windows 95, please see
	chapters 4 and 5 of the Microsoft Windows 95 Resource Kit.
	
	For additional information about creating batch Setup files with Batch.exe,
	please see the consult the Help system in the Batch Setup tool.
	
	Additional query words: share level msbatch.inf
	
	======================================================================
	Keywords          : msnets win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
