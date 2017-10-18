---
layout: page
title: "Q157714: INFO: How SourceSafe Stores Log Files"
permalink: kb/157/Q157714/
---

## Q157714: INFO: How SourceSafe Stores Log Files

	Article: Q157714
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	- Microsoft SourceSafe for MS-DOS, versions 3.02, 3.04, 3.1 
	- Microsoft SourceSafe for UNIX, versions 3.0, 3.01, 3.02, 3.04, 3.1 
	- Microsoft SourceSafe for Macintosh, versions 3.01, 3.02, 3.04, 3.1 
	- Microsoft SourceSafe for Windows, versions 3.01, 3.02, 3.04, 3.1 
	- Microsoft SourceSafe for Windows NT, versions 3.01, 3.02, 3.04, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When files are added to Visual SourceSafe, the file names are "mangled" and
	placed into the database. There is no documentation on how SourceSafe knows to
	place files in the appropriate data sub-directory.
	
	MORE INFORMATION
	================
	
	SourceSafe translates all files and projects into a corresponding "internal"
	file number. The name of the file, TBAAAAAA for instance, represents the actual
	file number.
	
	How to Find File Number
	-----------------------
	
	SourceSafe uses base-26 math (left to right) to get the file number. The letter
	maps to a number where A=0 and Z=25. Take the actual file name and break the
	letters down to a series of multiples using the base of 26. For example, the
	file number for TBAAAAAA may be found by:
	
	  T = 19 * 26^0 = 19
	  B = 1  * 26^1 = 26
	  A = 0  * 26^2 =  0
	  A = 0  * 26^3 =  0
	  A = 0  * 26^4 =  0
	  A = 0  * 26^5 =  0
	  A = 0  * 26^6 =  0
	  A = 0  * 26^7 =  0
	          TOTAL = 45
	
	Therefore, the file number of TBAAAAAA is 45. By using a file number rather than
	a name, SourceSafe gains several advantages:
	
	- SourceSafe can store long filenames on 16-bit systems. Using the NAMES.DAT
	  file, SourceSafe can take the long name and store it while a short name is
	  generated for 16-bit platforms.
	
	- SourceSafe can distribute files among the data subdirectories equally. This
	  prevents scenarios where, for example, the Z subdirectory holds 0% of the
	  database files and the M directory holds 23% of the database files.
	
	- Hashing the filename adds to the security of the system by making the DATA
	  directory a black box to users.
	
	- SourceSafe can handle cross-platform naming conventions. On UNIX, SourceSafe
	  and SOURCESAFE are two different files, and on NT these are the same file.
	  Hashing the name allows SourceSafe to store the file case independently of
	  the server operating system.
	
	How SourceSafe Finds Next File
	------------------------------
	
	In the DATA directory, there is a text file called AAAAAAAA.CNT. The contents of
	this file consist of the last filename that was added in the database. When a
	new project or file is added, SourceSafe opens this file and adds one (1) to the
	file number. This new file is then generated in the SourceSafe database. It is
	possible to put something like ZZZZZAAA in the AAAAAAAAA.CNT file. SourceSafe
	will add 1 to this file number and write the new file in the database. If a user
	is unaware of this and continues to use SourceSafe and add files or projects,
	ANALYZE may not be able to run and the database will not be able to be repaired.
	Because all read/write users need read/write access to this file, a malicious
	user can cause some serious database problems that may not be detected until it
	is too late.
	
	If AAAAAAAA.CNT is Set Incorrectly
	----------------------------------
	
	If the file in AAAAAAAA.CNT is incorrect, then SourceSafe will try the next file
	number until it is able to create the new file. Obviously, SourceSafe will be
	much slower when creating files or projects but there will be no data loss. If
	the file is missing for some reason, create a new AAAAAAAA.CNT file and put
	AAAAAAAA as the only text in the file. SourceSafe will start writing files in
	the first available open file number.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe302 kbSSafe302DOS kbSSafe301 kbSSafe304 kbSSafe304DOS kbSSafe310 kbSSafe310DOS kbSSafe301Mac kbSSafe304Mac kbSSafe310Mac kbSSafe301UNIX kbSSafe302UNIX kbSSafe304UNIX kbSSafe310UNIX kbSSafe300UNIX kbSSafe302Mac kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch kbSSafe301NT kbSSafe302NT kbSSafe304NT kbSSafe310NT
	Issue type        : kbinfo
	
	=============================================================================
	
