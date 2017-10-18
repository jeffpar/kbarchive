---
layout: page
title: "Q224988: FIX: CREATE FROM Command Incorrectly Assumes .dbf Extension"
permalink: kb/224/Q224988/
---

## Q224988: FIX: CREATE FROM Command Incorrectly Assumes .dbf Extension

	Article: Q224988
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbDatabase kbvfp600 kbvfp600bug kbXBase KbDBFDBC kbVS600sp2 kbVS600SP1 kb
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The CREATE FROM command incorrectly assumes that the table used to create a new
	table needs a .dbf extension. For example, when using the following syntax:
	
	CREATE [Table1] FROM [Table2]
	
	Visual FoxPro mistakenly assumes that Table2 needs a .dbf extension added to it.
	If the file already has an extension, Visual FoxPro 6.0 appends the .dbf
	extension to the end of the table name; therefore, an error appears.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program that contains the following code:
	
	  USE HOME(2)+"\data\customer"
	  COPY STRUCTURE EXTENDED TO test.STR
	  USE
	  CREATE customer2 FROM test.STR
	
	2. Run the program.
	
	  The last line of code causes the error:
	
	  File Test.str.dbf does not exist.
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbservicepack kbDatabase kbvfp600 kbvfp600bug kbXBase KbDBFDBC kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
