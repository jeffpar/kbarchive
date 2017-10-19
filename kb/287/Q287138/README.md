---
layout: page
title: "Q287138: PRB: eVT 3.0 Setup Does Not Detect Windows 98 SE Upgrade"
permalink: /kb/287/Q287138/
---

## Q287138: PRB: eVT 3.0 Setup Does Not Detect Windows 98 SE Upgrade

	Article: Q287138
	Product(s): Microsoft C Compiler
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual C++, Version:4.0 version 3.0, used with:
	   - the operating system: Microsoft Windows 98 Second Edition 
	- Microsoft eMbedded Visual Basic, version 3.0, used with:
	   - the operating system: Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you install Microsoft eMbedded Visual Tools (eVT) 3.0 on a system that is
	running Windows 98 Second Edition, the installation may fail with the following
	error message:
	
	  eMbedded Visual Tools 3.0 requires that Windows 98 Second Edition be
	  installed.
	  This is available at <http://windowsupdate.microsoft.com>.
	  Would you like to install Windows 98 Second Edition now?
	
	The setup program does not detect that you have already upgraded to Windows 98
	Second Edition.
	
	CAUSE
	=====
	
	eVT 3.0 can be installed on a Windows 98-based computer only if the computer has
	been upgraded to Windows 98 Second Edition. However, when you upgrade to Windows
	98 Second Edition, the upgrade does not update the registry value that the eVT
	3.0 installation uses to determine whether the system has been upgraded to SE.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this problem, after you apply the Windows 98 Second Edition upgrade,
	modify the registry to reflect the correct value as follows:
	
	1. On the Start menu, click Run, and then type "regedit" (without the quotation
	  marks) to start Registry Editor.
	
	2. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion
	
	3. Locate the VersionNumber value.
	
	4. Change the value from 4.10.1998 to 4.10.2222.
	
	5. Install eVT 3.0
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbVCeMb
	Version           : :3.0
	Issue type        : kbprb
	
	=============================================================================
	
