---
layout: page
title: "Q175459: Error: Missing Oleaut32.dll in Setup Program"
permalink: kb/175/Q175459/
---

## Q175459: Error: Missing Oleaut32.dll in Setup Program

	Article: Q175459
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Networking Essentials, Second Edition ISBN 1-57231-527-X 
	- MSPRESS Hardcore Visual Basic, Second Edition ISBN 1-57231-422-2 
	- MSPRESS Microsoft Jet Database Engine Programmer's Guide, Second Edition 
	- MSPRESS Microsoft Press Computer Dictionary, Third Edition ISBN 1-57231-446-X 
	- MSPRESS Advanced Microsoft Visual Basic 5 
	- MSPRESS Microsoft Excel 97 Step by Step, Advanced Topics ISBN 1-57231-564-4 
	- MSPRESS Microsoft Word 97 Step by Step, Advanced Topics ISBN 1-57231-563-6 
	- MSPRESS Microsoft Word 97 Step by Step, Complete Course ISBN 1-57231-579-2 
	- MSPRESS Microsoft Excel 97 Step by Step, Complete Course ISBN 1-57231-580-6 
	- MSPRESS Active Visual J++ 
	- MSPRESS Microsoft Office 97 Professional 6-in-1 Step by Step ISBN 1-57231-703-5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Setup program from the companion disc, you may receive an error
	message similar to the following:
	
	  Setup cannot find Oleaut32.dll. Exiting.
	
	  - or -
	
	  The SETUP.EXE file is linked to missing export OLEAUT32.DLL:420
	
	CAUSE
	=====
	
	Oleaut32.dll is a shared file installed by the operating system and used by the
	Setup program. The Setup program is looking for a newer version of the file than
	the one that you have installed on your system. Oleaut32.dll should be 473,872
	bytes long, and should have a version number of 2.20.4049.
	
	RESOLUTION
	==========
	
	Download and run MSVBVM50.EXE from the Microsoft Software Library. Run the
	executable file after download. This file installs Oleaut32.dll and other files
	needed to run the Setup program successfully. This should eliminate the error
	message. See the REFERENCES section of this article for more information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This error does not affect Windows 95 OEM Service Release 2 (OSR2).
	
	The newer version of Oleaut32.dll is installed and used by numerous programs,
	including Microsoft Office 97 and later, Microsoft Internet Explorer 3.0 and
	later, and Microsoft Visual Studio.
	
	REFERENCES
	==========
	
	See the following Microsoft Knowledge Base article for further information on
	MSVBVM50.EXE:
	
	  Q180071 FILE: MSVBVM50.EXE Visual Basic 5.0 Run-Time Files
	
	
	Additional query words: press ms_press 1-57231-422-2 1-57231-342-0 1-57231- 446-X 1-57231-414-1 1-57231-564-4 1-57231-563-6 1-57231-579-2 1-57231-580-6 1-57231-609-8 1-57231-703-5 1-57231-743-4 1-57231-527-X
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	
