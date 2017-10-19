---
layout: page
title: "Q156451: FIX: DDCONV Causes GP Fault During Database Conversion"
permalink: /kb/156/Q156451/
---

## Q156451: FIX: DDCONV Causes GP Fault During Database Conversion

	Article: Q156451
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500fix kbSSafe310bug kbSSafe304bug
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	- Microsoft SourceSafe for Windows, versions 3.04, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use DDCONV.EXE in an attempt to convert your SourceSafe 3.x database to
	the Visual SourceSafe 4.0 format, a General Protection Fault may occur.
	
	When DDCONV.EXE is run against the database, it generates a file called
	DDCERR.LOG. This file contains an informational list of the actions performed by
	DDCONV.EXE and includes references to any problems encountered during the
	upgrade.
	
	This article contains information on the following problem:
	
	- You are receiving a General Protection Fault when running DDCONV.EXE.
	
	- The last entry in the DDCERR.LOG file reads:
	
	  File <filename>.<a or b> not found
	
	where <filename> is any 8-character filename with an extension of .a or .b.
	
	CAUSE
	=====
	
	Each file or project in a SourceSafe database is represented as a "file pair"
	within the database itself. For example, information on the root project ($/) of
	a SourceSafe database is stored in the file AAAAAAAA, called the log file, and
	AAAAAAAA.A (or .B), called the data file. If you were to add a new file to an
	empty SourceSafe database, it would be stored internally as BAAAAAAA and
	BAAAAAAA.A (or .B).
	
	NOTE: The file extension will alternate between .A and .B each time the file is
	modified or labeled.
	
	If the data file for a Project is moved or deleted and you attempt to run
	DDCONV.EXE against the database, a General Protection Fault will occur.
	
	WORKAROUND
	==========
	
	You may use the DDCERR.LOG file to identify the physical file name that is
	generating the error. From this point, any of three approaches may be used to
	fix the problem:
	
	1. Delete the offending log file for which no data file exists. This may cause
	  data loss, but, if the data file is missing, it is already inaccessible from
	  SourceSafe.
	
	2. Recover the file pair (both the data and the log file) from a backup copy of
	  the database.
	
	3. Microsoft has provided a new version of DDCONV.EXE that prevents the General
	  Protection Fault from occurring. To download this version, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q150647 Updated Visual SourceSafe 4.0 DDCONV.EXE
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual SourceSafe
	5.0.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	The following procedure describes how to upgrade your SourceSafe database when
	using this new version of DDCONV:
	
	1. Copy your SourceSafe 3.1 database, including the Data directory and all of
	  its subdirectories, to a new directory. Or, you can make a backup copy to a
	  tape drive.
	
	2. Make a backup copy of the \USERS directory, the SS\SRCSAFE.INI file, and the
	  SS\USERS.TXT file.
	
	3. Run DDCONV.EXE against the database using the following syntax:
	
	  DDCONV <path to database>
	
	4. Install the server version of Visual SourceSafe 4.0a to a new, empty
	  directory. Do not point to your SourceSafe 3.x location.
	
	5. After the Visual SourceSafe installation is complete, verify that it is
	  version 4.0a by choosing About from the Help menu. Version 4.0a is required
	  for this procedure.
	
	6. Copy the VSS\DATA\VERSION.DAT file from the Visual SourceSafe 4.0a
	  installation to a temporary location outside of the SourceSafe directory
	  structure.
	
	7. Delete the VSS\DATA directory and all of its subdirectories from the Visual
	  SourceSafe installation.
	
	8. Copy the converted SourceSafe Data directory, from step 3 above, to the
	  Visual SourceSafe installation.
	
	9. Copy the backed-up VERSION.DAT file, from step 4 above, to the new VSS\DATA
	  directory, overwriting the existing file.
	
	10. Delete the VSS\USERS directory, the VSS\USERS.TXT file, and the
	  VSS\SRCSAFE.INI file from the new Visual SourceSafe installation.
	
	11. Copy the SS\USERS directory, the SS\USERS.TXT file, and the SS\SRCSAFE.INI
	  file, from step 2 above, to the new Visual SourceSafe directory.
	
	12. Run ANALYZE.EXE against the database to correct any remaining problems in
	  the database files using the following syntax:
	
	  ANALYZE <path to data directory> -f
	
	NOTE: It may be necessary to run ANALYZE against the database more than once.
	Each time ANALYZE is run, it will create an output file called ANALYZE.LOG that
	contains a description of the errors it encountered. ANALYZE should be run until
	two successive LOG files are identical. For additional information on ANALYZE,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q190881 SAMPLE: Analyze6.exe Utility for Visual SourceSafe
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new, empty SourceSafe 3.x database.
	
	2. Switch to or start SourceSafe 3.x Explorer, and add a new project.
	
	3. Close SourceSafe.
	
	4. Switch to File Manager or the Windows Explorer and delete the following
	  file:
	
	  <path to SourceSafe Database>\SS\DATA\BAAAAAAA.A
	
	5. Run DDCONV.EXE against the database. Note that a General Protection Fault
	  occurs and that the last entry in DDCERR.LOG is:
	
	  File BAAAAAAA.A not found
	
	6. Delete the file BAAAAAAA and rerun DDCONV.EXE. Note that the process
	  completes successfully.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500fix kbSSafe310bug kbSSafe304bug 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword3 kbSSafe304 kbSSafe310 kbSSafe400 kbSSafe400a kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
