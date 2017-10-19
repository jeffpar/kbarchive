---
layout: page
title: "Q117927: PC DB: General Information About Mail Templates"
permalink: /kb/117/Q117927/
---

## Q117927: PC DB: General Information About Mail Templates

	Article: Q117927
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0a, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use templates to add custom directory information to versions 3.0, 3.0a,
	and 3.2 of Microsoft Mail for PC Networks postoffice. In addition to the default
	fields provided by Mail (alias, name, address type, mailbox, postoffice and
	network), you can display custom information for each user (such as telephone
	number, office number, and employee identification number) in the postoffice
	address list.
	
	The postoffice administrator creates a template file which defines the way the
	custom information will look. The information about each user is kept in an
	encrypted file on the postoffice. Mail provides a program to convert between the
	encrypted format and ASCII (text only) format.
	
	Important Files
	---------------
	
	ADMIN.INF        Encrypted user information
	ADMIN.TPL        Format for the information
	EXAMPLE.TPL      Sample template file; edit and rename to ADMIN.TPL
	COURIER.TPL      DO NOT EDIT, contains system defaults (alias, name,
	                etc.)
	TEMPLATE.EXE     Converts between encrypted user information and ASCII
	                (text only) format. (ADMIN.INF <===> ADMIN.TXT
	
	To use a template, the postoffice administrator will:
	
	1. Create the ADMIN.TPL file. The format for the ADMIN.TPL file is documented in
	  the version 3.0 Microsoft Mail "Administrator's Guide" chapter 9, "Templates
	  and Custom User Directories." Just rename EXAMPLE.TPL to ADMIN.TPL if you
	  want to edit a working sample.
	
	2. Save the ADMIN.TPL file as ASCII (text only) in the postoffice TPL sub
	  directory with read-only privileges.
	
	  NOTE: If there is an ADMIN.TPL file in the TPL subdirectory, the Mail
	  Administrator program (ADMIN.EXE) will create the ADMIN.INF file in the
	  postoffice INF subdirectory the next time you start it on that postoffice.
	
	3. Put the user information into the ADMIN.INF.
	
	  On a small postoffic (fewer than 50 users): Use the Mail Administrator program
	  to enter the template information when you create users. If the users already
	  have an account on the postoffice, use Local-Admin, Modify.
	
	  On a large postoffice (more than 50 users): Create an ASCII (text only) file
	  that contains the information you want, and convert it to ADMIN.INF using the
	  TEMPLATE.EXE program.
	
	  The ADMIN.TPL and ADMIN.INF files must be treated as a unit. If changes are
	  made to the ADMIN.TPL file, the ADMIN.INF is invalid and must be updated as
	  follows:
	
	  On a small postoffice: Make changes to the ADMIN.TPL file, delete the
	  ADMIN.INF file, and re-enter the information using the Mail Administrator
	  program.
	
	  On a large postoffice: Make changes to the ADMIN.TPL file and convert the
	  ADMIN.INF file to ADMIN.TXT using TEMPLATE.EXE. Edit the ADMIN.TXT file to
	  add the new/revised information. Convert ADMIN.TXT back to ADMIN.INF using
	  TEMPLATE.EXE.
	
	REFERENCES
	==========
	
	For more information, see the chapter "Templates and Custom User Directories" in
	the "Microsoft Mail Administrator's Guide."
	
	Additional query words: 3.00 3.00a 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a
	Version           : WINDOWS:3.0,3.0a,3.2
	
	=============================================================================
	
