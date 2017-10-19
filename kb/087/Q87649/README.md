---
layout: page
title: "Q87649: X400: How to Move the Gateway to Another Postoffice"
permalink: /kb/087/Q87649/
---

## Q87649: X400: How to Move the Gateway to Another Postoffice

	Article: Q87649
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Moving the Microsoft Mail Gateway to X.400 requires a series of steps that
	involve saving some valuable programming from the gateway and access components,
	removing and transporting the components to the new gateway postoffice by
	re-installing, then inserting the saved programming.
	
	MORE INFORMATION
	================
	
	1. Hardware: Move the necessary hardware. The Eicon Card and software do not
	  have to be moved.
	
	2. Microsoft Mail Gateway to X.400 access component:
	
	  a. Address lists: Use the import program to extract the X.400 address lists
	     that are already entered into the postoffice. The extracts them to an
	     ASCII text file that can be readily transported.
	
	  b. Removal: After the address lists have been moved, the access component is
	     ready for removal. Use the access component disk and run the installation
	     program with the "-r" command-line option.
	
	3. Microsoft Mail Gateway to X.400 gateway component:
	
	  a. Gateway settings: In the postoffice database, the X.400 subdirectory and
	     all of the subdirectories beneath it must be copied to a safe location.
	
	  b. Removal: After the X.400 subdirectory is moved to a safe location, you can
	     remove the X.400 gateway component.
	
	4. New gateway postoffice installation:
	
	  a. Install the gateway component.
	
	  b. Install the access component.
	
	5. Modify the AUTOEXEC.BAT and CONFIG.SYS files.
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
