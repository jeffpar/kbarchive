---
layout: page
title: "Q320319: PRB: &quot;Um.dat May Be Corrupt&quot; Err Msg When You Start SourceSafe"
permalink: kb/320/Q320319/
---

## Q320319: PRB: &quot;Um.dat May Be Corrupt&quot; Err Msg When You Start SourceSafe

	Article: Q320319
	Product(s): Microsoft SourceSafe
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 32-bit, for Windows versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start Visual SourceSafe, you may receive the following error
	message:
	
	  Um.dat may be corrupt
	
	CAUSE
	=====
	
	New Database
	------------
	
	When you create a new database, a 3.1 database format is converted to a 5.0
	database format, which is then converted to a 6.0 database format. If the
	conversion is not completed, the database may still be in 3.1 format. Check the
	Version.dat file to see if the version number is 6.0. If the version number is
	5.0, the database is still in 3.1 format.
	
	Existing Database
	-----------------
	
	Alternatively, this problem can occur with an existing database. In this
	scenario, the Um.dat file may be corrupted.
	
	RESOLUTION
	==========
	
	New Database
	------------
	
	To resolve this problem, manually run the Ddconv.exe file against the database to
	convert the database format. Alternatively, you can run the Ddupd.exe file if
	you want to upgrade the database to 6.0 format.
	
	For example, go to the VSS\Win32 folder in a command prompt window, and then type
	one of the following commands:
	
	- ddconv <path to data directory>
	- ddupd <path to data directory>
	
	Existing Database
	-----------------
	
	To resolve this problem, build a new Um.dat file. Note that when you build a new
	Um.dat file, you must add all of the users again.
	
	To build a new Um.dat file, follow these steps:
	
	1. Create a temporary folder named C:\Sstemp.
	
	2. Click Start, click Run, type "cmd" (without the quotation marks), and then
	  click OK.
	
	3. Go to the VSS\Win32 folder in the command prompt window, and then type the
	  following command:
	
	  "mkss c:\sstemp" (without the quotation marks)
	
	4. In the VSS\Win32 folder at the command prompt, type the following command:
	
	  "ddconv c:\sstemp" (without the quotation marks)
	
	5. In the VSS\Win32 folder at the command prompt, type the following command:
	
	  "ddupd c:\sstemp" (without the quotation marks)
	
	6. Copy the Um.dat file from the C:\SStemp\Data folder to the Visual SourceSafe
	  data directory.
	
	7. Rename the Rights.dat file in the Visual SourceSafe data directory as
	  Rights2.dat.
	
	8. At a command prompt, run the analyze -f command against the database.
	
	9. Add all of the Visual SourceSafe users again.
	
	10. Reassign rights to the Visual SourceSafe users.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500 kbSSafe32bitSearch
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
