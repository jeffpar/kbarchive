---
layout: page
title: "Q105850: FoxBASE+/Mac Most Frequently Asked Questions and Answers"
permalink: /kb/105/Q105850/
---

## Q105850: FoxBASE+/Mac Most Frequently Asked Questions and Answers

	Article: Q105850
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Below is a list of the most frequently asked questions and answers about
	FoxBASE+/Mac.
	
	MORE INFORMATION
	================
	
	1. Q. Why am I getting a "File not found" or "File does not exist" error when I
	  select a file in the File dialog box?
	
	  A. The FoxUSER resource file is not in the System Folder. If you are using
	  System 6.x, you may have an INIT conflict. Either put the FoxUSER file in the
	  System Folder and restart FoxBASE+/Mac, or remove all INITs, restart your
	  machine, and try again.
	
	2. Q. How do I create single-spaced reports?
	
	  A. Use the arrow keys to move the fields one pixel at a time so that the
	  fields can be fine adjusted.
	
	3. Q. Can I have scroll bars on an input screen so it resembles my paper form?
	
	  A. When you are working with screen forms that are larger than the screen
	  area, you must use multiple screen pages. Create a format file for each
	  screen, and paste the codes into one file with a READ command between them.
	
	4. Q. Why am I getting "No memory for screen" or "Insufficient memory" errors?
	
	  A. By default, FoxBASE+/Mac is allocated 1200K of memory. To allocate more
	  memory to FoxBASE+/Mac, quit FoxBASE+/Mac, click the FoxBASE+ icon, choose
	  Get Info from the File menu, and change the Current Size option in the
	  bottom-right corner of the Get Info dialog box to a larger value. There are
	  two other options for running a FoxBASE+/Mac application with less memory.
	  These are:
	
	   - Reduce the number of colors being used in the Monitors Control Panel.
	
	   - Deallocate memory for screens and variables when they are no longer needed
	     by using the RELEASE command and the DELETE option of the SCREEN command.
	
	5. Q. Why am I getting the error "Command line too long" when I use the APPEND
	  FROM command to select a field?
	
	  A. Command lines are limited to 254 characters. When you are selecting fields
	  with the APPEND FROM or COPY TO command, this limit will be exceeded if you
	  enter too many fields. By default, if you don't select any fields, all the
	  fields are selected.
	
	6. Q. When I am modifying or creating databases, field type pop-up windows don't
	  work or can't be changed. Why?
	
	  A. This problem can occur if you are running the Adobe Type Reunion
	  application. Neither the INIT nor the Extension version of this application
	  is compatible with FoxBASE+/Mac. You must disable Adobe Type Reunion when you
	  are using FoxBASE+/Mac.
	
	7. Q. Why am I getting the error "#Strings in RES file" when installing
	  FoxBASE+/Mac on an Apple Macintosh Quadra computer?
	
	  A. You need an updated version of FoxBASE+/Mac. To obtain the updated
	  software, call Microsoft Sales Information Center at (800) 426-9400 or
	  Microsoft Technical Support at (425) 635-7192 and ask for either the
	  single-user or multiuser version of FoxBASE+/Mac System 7-compatible
	  software. Or, to work around this problem, turn off 32-bit addressing.
	
	8. Q. Why am I getting the error "Disk full error - 34"?
	
	  A. You are attempting to install FoxBASE+/Mac on a floppy disk. FoxBASE+/Mac
	  must be installed on a hard disk. To do this, create a folder on your hard
	  disk and copy all the files from the FoxBASE+/Mac disks to that folder, and
	  then double-click the Installer program.
	
	9. Q. How can I install FoxBASE+/Mac on my network for maximum performance?
	
	  A. Buy the multiuser run-time version of FoxBASE+/Mac and install it on each
	  local machine.
	
	10. Q. How can I check the spelling of my memo fields?
	
	  A. Use XCMDs to convert the memo fields to text files, and then load the
	  resulting text files into a text editor and use its spelling program.
	
	11. Q. When I double-click a program file, why is the "Application 'FoxBASE'
	  cannot be found" error displayed?
	
	  A. This is a limitation of the Apple Finder. To correct this problem, try
	  rebuilding your desktop.
	
	12. Q. Can I use my FoxPro for MS-DOS databases on a Macintosh?
	
	  A. Yes, as long as you use a utility like Apple File Exchange to convert the
	  file from MS-DOS file format to Macintosh file format. If there is a memo
	  field in the database, use the COPY TO FILENAME TYPE FOXPLUS command in
	  FoxPro for MS-DOS before converting the file.
	
	13. Q. Can FoxBASE+/Mac and FoxBASE+ or FoxPro for MS-DOS and FoxPro for Windows
	  use the same files simultaneously?
	
	  A. Yes, as long as the memo fields are in the FoxBASE+ format, no Macintosh
	  picture fields or Windows general fields are included in the database, and
	  .IDX files are used instead of .CDX files.
	
	14. Q. How can I create labels that suppress blank fields?
	
	  A. Create one field and place all the fields separated by semicolons in this
	  field.
	
	  For more information on this topic, query on the following words here in the
	  Microsoft Knowledge Base:
	
	  " labels and suppress and blank and field " (without the quotation marks)
	
	Additional query words: 2.01
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
