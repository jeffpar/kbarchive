---
layout: page
title: "Q87386: PC DB: Symptoms of a Missing CONTROL.GLB File"
permalink: kb/087/Q87386/
---

## Q87386: PC DB: Symptoms of a Missing CONTROL.GLB File

	Article: Q87386
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Three main areas of the Microsoft Mail system will be affected if there is a
	problem with the CONTROL.GLB file, and the following errors will occur:
	
	- Unable to create mail
	
	- Unable to create a local user
	
	- Unable to create an External postoffice or Gateway Node
	
	MORE INFORMATION
	================
	
	The process to generate a new filename is as follows:
	
	1. Open the CONTROL.GLB file in read/write mode.
	
	2. Read the current value of the next mailbag or mail filename.
	
	3. Create the new filename with appropriate extension.
	
	4. If the filename is created successfully, increment the new filename and write
	  it back to the CONTROL.GLB file. Otherwise, display an error message.
	
	5. Close the CONTROL.GLB file.
	
	
	Additional query words: 2.10e 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210e
	Version           : WINDOWS:2.1e,3.0,3.2
	
	=============================================================================
	
