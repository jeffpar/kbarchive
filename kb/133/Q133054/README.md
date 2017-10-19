---
layout: page
title: "Q133054: HOWTO: Detect and Fix Database Corruption Errors in SSafe"
permalink: /kb/133/Q133054/
---

## Q133054: HOWTO: Detect and Fix Database Corruption Errors in SSafe

	Article: Q133054
	Product(s): Microsoft SourceSafe
	Version(s): 3.04,3.1
	Operating System(s): 
	Keyword(s): kbtool kbtshoot
	Last Modified: 24-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Windows, versions 3.04, 3.1 
	- Microsoft SourceSafe for Windows NT, versions 3.04, 3.1 
	- Microsoft SourceSafe for MS-DOS, versions 3.04, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SourceSafe Data directory includes a database that contains all of your
	files and projects. Although every precaution has been taken to ensure the
	integrity of all SourceSafe files, there are certain events that can cause the
	data in this database to become corrupted. Errors relating to the Data
	directory, to filenames such as aacpaaaa, or to missing files such as abaaaaaa.b
	occur.
	
	SourceSafe database corruption can be caused by a variety of factors. Listed
	below are a few events that can cause database corruption:
	
	- Power loss
	
	- System hangs (stops responding)
	
	- User terminates a long process
	
	- Bad network connections
	
	- Running out of disk space
	
	- Network problems
	
	- Operating system problems
	
	MORE INFORMATION
	================
	
	
	Use the following steps to analyze and resolve the database problems SourceSafe
	is having:
	
	1. The Analyze program allows you to search for database corruption or database
	  errors. Use the following command to execute the Analyze program:
	
	        Analyze <SourceSafe Data directory>
	
	  To run the Analyze program in unattended mode, use the -i- option. For
	  example, if you want to run Analyze overnight and output the results to a
	  text file, use the following syntax:
	
	         Analyze -i- <path to data> > c:\output.txt
	
	  Analyze.exe goes through your database, reporting possible problems. If
	  database errors or corrupted database files are discovered, continue through
	  the following steps.
	
	  The primary use of this program is to scan a SourceSafe database for integrity
	  and/or errors. We recommend that administrators run it every one to three
	  months to verify that there are no problems in their SourceSafe database.
	
	2. If there are access rights problems, "unable to checkout files" errors,
	  "losing checkout status" errors, or any other errors that refer to the
	  Status.dat or Rights.dat file, run the Ddconv.exe or Ddconvw.exe program.
	  These programs update a SourceSafe database from an older format to the
	  current format. By default, these programs are installed in the \admin
	  subdirectory.
	
	  These programs are used primarily by installation scripts to verify that the
	  format of an installed SourceSafe database is correct after an update has
	  occurred. Ddconv.exe is also used to create a new SourceSafe database (see
	  the Mkss utility for more information). During installation, if SourceSafe
	  cannot find all of the installed databases, the administrator may have to run
	  this utility manually. Ddconv.exe (with the -s option) can also be used by
	  the administrator to rebuild files in the database.
	
	
	3. If the errors returned by the Analyze program refer to "FREE CHAIN" and you
	  are using Microsoft SourceSafe versions 3.x, run the Fixfree program.
	  Fixfree.exe fixes a variety of database errors reported when running
	  Analyze.exe, such as the following:
	   - Invalid extended header structure.
	
	   - Error in extended header.
	
	   - Error processing checkout free chain.
	
	   - Checkout free chain contains a loop.
	
	   - Checkout chain contains a loop.
	
	4. If the errors returned by the Analyze program refer to "PROJECT FILE" and you
	  are using Microsoft SourceSafe versions 3.x, run the Fixprj program. You can
	  use Fixprj.exe to fix a variety of project errors, such as the following:
	   - File Not Found: <filename.a or b>.
	
	   - Error reading PRJ INT entry: <num> of 38 bytes read.
	
	   - Error in project file.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q123427 SourceSafe: Use FIXPRJ.EXE to Fix Project Errors
	
	5. If the errors returned by the Analyze program refer to "PARENT CHAIN", and
	  you are using Microsoft SourceSafe versions 3.x, run the Fixpar program.
	  Fixpar.exe repairs various database errors reported by Analyze.exe such as
	  the following:
	   - Error in Parent Chain.
	
	   - Parent not found.
	
	  Fixpar.exe removes references to projects that no longer exist.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q130178 FIXPAR Fixes Database Errors Reported by ANALYZE.EXE
	
	6. If the error returned by Analyze.exe refers to "Cannot find file
	  <filename>.b" or "Cannot find file <filename>.a," the best
	  workaround is to save a copy of the correct current file. Recover both files
	  (<filename> and <filename>.a or <filename>.b) as they
	  existed on the backup. Then update the file in SourceSafe to the current
	  version.
	
	  If the <filename>.a or <filename>.b refers to a project, use
	  Fixprj.exe to rebuild the project file.
	
	7. If the errors returned by Analyze.exe refer to any other type of problem,
	  call Microsoft Technical Support for further assistance. You can reach
	  Microsoft Technical Support at the following phone numbers:
	   - In the United States, call (425) 635-7014.
	
	   - In Canada, call (905) 568-3503.
	
	REFERENCES
	==========
	
	Refer to the Administrator's help file in SourceSafe for command information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbtshoot 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe304 kbSSafe304DOS kbSSafe310 kbSSafe310DOS kbSSafe304NT kbSSafe310NT
	Version           : :3.04,3.1
	Issue type        : kbhowto
	
	=============================================================================
	
