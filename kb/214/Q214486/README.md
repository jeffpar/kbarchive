---
layout: page
title: "Q214486: INFO: How SourceSafe Uses the DATA Directory"
permalink: /kb/214/Q214486/
---

## Q214486: INFO: How SourceSafe Uses the DATA Directory

	Article: Q214486
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0,6.0
	Operating System(s): 
	Keyword(s): kbConfig kbSSafe kbSSafe400 kbSSafe500 kbSSafe600 kbGrpDSSSafe
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Visual SourceSafe (VSS) DATA directory is not complex, but some
	explanation of its structure may be needed. This article describes the file and
	directory structure of the DATA directory and provides an overview of each the
	use of each directory.
	
	MORE INFORMATION
	================
	
	SourceSafe creates 26 subdirectories in the DATA directory named "A" through
	"Z." In addition, you may have up to four additional directories named LABELS
	(version VSS 6.0 only), BACKUP, LOCKS, and LOGGEDIN (version VSS 5.0 and VSS 6.0
	only). SourceSafe will never create more than 30 sub-directories in the data
	directory (28 in version 4.x).
	
	Each file or project added to SourceSafe will have two files associated with it
	in the database (called a file pair). By design, the root project ($/) is stored
	in the file pair AAAAAAAA and AAAAAAA.A. The first file or project added to an
	empty database will be stored in the "B" directory and will be named BAAAAAAA
	and BAAAAAAA.A. The file with an extension (the data file) is a byte-for-byte
	copy of the most recently checked-in version of the file or a list of files
	contained in a project (if the physical file is associated with a project). The
	other (known as the log file) contains the history of the file as well as other
	information such as the name of its parent project, and so forth.
	
	Each time you modify a file in VSS (through a Check-in, Label, Branch, Merge, and
	so forth), VSS adds these changes to the log file and then rewrites the data
	file to keep it current. On an Intel computer, each time the data file is
	rewritten, its extension will change from .a to .b, or vice versa. For example,
	if MYFILE.txt is being stored in the file pair BAAAAAAA and BAAAAAAA.a, checking
	out MYFILE.txt, modifying it and checking it back in again will result in
	BAAAAAAA and BAAAAAAA.b (BAAAAAAA.a will be deleted). Repeating the earlier
	procedure will again result in BAAAAAAA and BAAAAAAA.a. If you are using a
	Macintosh client, there may be an additional file with an extension of .c or .d.
	If you are using a UNIX computer, you may have an additional file with an
	extension of .e or .f. If you have a .c or .e file, you should also have a .a
	file. If you have a .d or .f file, you should also have a .b file.
	
	Visual SourceSafe sequentially distributes files to the directories labeled "A"
	through "Z" as files are added to the database. For example, if the file pair
	for "FILE1" is placed in "B," the file pair for FILE2 will be placed in "C," the
	file pair for FILE3 will be placed "D," and so on. The file pair for the 27th
	file added will go back to "A" because it is the next directory after "Z." Its
	name will be ABAAAAAA.a. As files are added to the "A" directory, the files will
	be named ACAAAAAA.A, ADAAAAAA.A, AEAAAAAA.A, and so on. The first letter of
	these file names will be the same as the directory in which the files reside.
	
	The BACKUP directory is created by ANALYZE.exe when it is executed against the
	database. If ANALYZE is run with the -f switch, this directory contains a backup
	copy of each file that was modified by ANALYZE. Anytime ANALYZE is executed, a
	log file (ANALYZE.log) that contains information on potential problems
	encountered by ANALYZE will be placed in this directory.
	
	The LABELS directory is used to keep track of labels that have been placed on
	projects or files.
	
	The LOCKS directory may be used to keep track of temporarily-locked files. This
	feature is enabled when the LOCK_MODE = LOCKFILES setting is placed in the
	server's SRCSAFE.ini.
	
	The LOGGEDIN directory is used by Visual SourceSafe (version 5.0 or 6.0 only) to
	keep track temporarily of who is logged into the database.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbConfig kbSSafe kbSSafe400 kbSSafe500 kbSSafe600 kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0,4.0a,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
