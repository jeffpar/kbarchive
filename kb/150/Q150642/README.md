---
layout: page
title: "Q150642: HOWTO: Use SSInt.exe in Visual SourceSafe"
permalink: kb/150/Q150642/
---

## Q150642: HOWTO: Use SSInt.exe in Visual SourceSafe

	Article: Q150642
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbVBp400
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To integrate SourceSafe with the 16-bit edition of Microsoft Visual Basic
	version 4.0, you need to install a 16-bit version of SourceSafe and then run the
	SSINT.EXE file.
	
	MORE INFORMATION
	================
	
	If the user has installed Visual SourceSafe and source code management is not
	available on the menu of the 16-bit edition of Visual Basic 4.0, the VB.INI file
	needs to be updated to integrate with Visual SourceSafe.
	
	Step-by-Step Example
	--------------------
	
	1. Go to the directory where Visual SourceSafe is installed on the server.
	
	2. Select the WIN directory, and double-click the SSINT.EXE file.
	
	3. Ensure that Update VB.INI is checked, and click OK.
	
	4. Visual SourceSafe is now integrated with the 16-bit Edition of Visual Basic
	  4.0.
	
	With Visual SourceSafe 4.0, a Custom installation is required to install the
	16-bit version on a 32-bit operating system. With Visual SourceSafe 4.0a, there
	is Netsetup.exe and a Netset16.exe. The Netset16.exe should be used if the
	16-bit Visual SourceSafe client is to be installed on a 32-bit operating system.
	The Netsetup.exe assumes that you want to install the same bit client as
	operating system (for example, 16-bit client on 16-bit operating system or
	32-bit client on 32-bit operating system.)
	
	For instructions regarding Visual SourceSafe 5.0, see the readme.wri file in the
	Ss_16bit folder in the Visual SourceSafe 5.0 CD-ROM.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbVBp400 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	
