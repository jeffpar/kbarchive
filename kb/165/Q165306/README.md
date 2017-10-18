---
layout: page
title: "Q165306: PRB: Error &quot;File c:&#92;.dbc does not exist&quot; in Visual FoxPro"
permalink: kb/165/Q165306/
---

## Q165306: PRB: Error &quot;File c:&#92;.dbc does not exist&quot; in Visual FoxPro

	Article: Q165306
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbusage kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error "File c:\.dbc does not exist" occurs when an exclamation point (!) is
	used as the first character in the name of the directory that a table is located
	in. On the Macintosh the error is as follows:
	
	  File 'Hardrivename:.dbc' does not exist
	
	If the exclamation point is at the end of the folder name the error is as
	follows:
	
	  File c:\<foldername>.dbc does not exist
	
	CAUSE
	=====
	
	An exclamation point is used in the folder or directory containing the table.
	When opening a table the name of the database may be used. The exclamation point
	is used as the separator between the database name and the table name.
	
	     USE C:\Vfp\Samples\Data\Testdata!Customer
	
	FoxPro is looking for a DBC with the same name as the folder or directory.
	
	RESOLUTION
	==========
	
	Do not use exclamation points in folder or directory names.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a folder or directory with an exclamation point in the name like
	  "test!" (without the quotation marks) in the Visual FoxPro directory.
	
	2. Place the customer table in that folder.
	
	3. Issue the command USE C:\Vfp\Test!\Customer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbusage kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
