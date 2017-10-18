---
layout: page
title: "Q221653: FIX: APPEND FROM TYPE CSV Does Not Include Extension by Default"
permalink: kb/221/Q221653/
---

## Q221653: FIX: APPEND FROM TYPE CSV Does Not Include Extension by Default

	Article: Q221653
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbservicepack kbDatabase kbvfp600 kbvfp600bug kbXBase kbVS600sp2 kbVS600SP1 kb
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following program error is encountered with the APPEND FROM <filename>
	TYPE CSV command:
	
	  File <path and file name> does not exist
	
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
	
	Visual FoxPro was not looking for the CSV file name extension when it was not
	provided. For instance, if using an Excel file, issuing the command below would
	not produce a program error when the file is named Temp.xls:
	
	  APPEND FROM temp TYPE XLS
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Copy the following code to a new program file:
	
	  CREATE CURSOR x (f1 c(1))
	  INSERT INTO x VALUES ('x')
	  COPY TO Temp TYPE CSV
	  APPEND FROM Temp TYPE CSV
	
	2. Save the program and then run it. The program error should be received on the
	  APPEND FROM line.
	
	  NOTE: If there is a file named Temp.txt in the same location as Temp.csv,
	  Visual FoxPro will append in Temp.csv without the program error. To repeat,
	  if Temp.txt exists, then Temp.csv rather than Temp.txt, will append in
	  without error. If you delete Temp.txt, the error will occur.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbservicepack kbDatabase kbvfp600 kbvfp600bug kbXBase kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
