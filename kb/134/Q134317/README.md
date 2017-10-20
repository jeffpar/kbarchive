---
layout: page
title: "Q134317: PRB: Error: Bad Source File Value in INF File Description line"
permalink: /kb/134/Q134317/
---

## Q134317: PRB: Error: Bad Source File Value in INF File Description line

{% raw %}

	Article: Q134317
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running setup on any 16-bit Windows platform (such as Windows 3.1 or Windows for
	Workgroups 3.11), from distribution disks that were created with the Setup
	Wizard, generates the following error:
	
	  Bad Source File value in INF File Description line
	
	CAUSE
	=====
	
	This error is caused by including files (or a single file) that have long file
	names for distribution. If the executable was developed on a platform that
	supports long file names, such as Windows 95 or Windows NT, it is fairly common
	to include files with the application that take advantage of the long file name
	capabilities of the operating system.
	
	When the Setup Wizard creates the INF file that will be used in setting up the
	application, the long file names are written into the INF file description
	entries. When setup is run on a Windows platform that does not support long file
	names, the setup program does not know how to interpret these files, and the
	error occurs. After the error, a message is displayed stating that setup was
	unsuccessful.
	
	RESOLUTION
	==========
	
	To avoid this error when installing an application on Windows platforms that do
	not support long file names, ensure that all files included for distribution
	adhere to the MS-DOS 8.3 file-naming conventions.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an application in Visual FoxPro on Windows 95 or Windows NT.
	
	2. Include a file that has a long file name.
	
	3. Run the Setup Wizard to create distribution disks.
	
	4. After the disks have been created, try and run setup on a Windows platform
	  that does not support long file names. The error will occur when setup is
	  run.
	
	Additional query words: 3.00 Setup Wizard lfn INF VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
