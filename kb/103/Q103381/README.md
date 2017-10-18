---
layout: page
title: "Q103381: PC Forms: Installing Forms Designer with Non-English Mail"
permalink: kb/103/Q103381/
---

## Q103381: PC Forms: Installing Forms Designer with Non-English Mail

	Article: Q103381
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Non-English versions of Microsoft Mail for Windows must be updated with new
	libraries to correctly support the development and use of electronic forms
	(E-forms). Disk 2 of the version 1.0 Microsoft Electronic Forms Designer disks
	contains updated versions of MAILSPL.EXE, MSSFS.DLL, and MAPI.DLL for the German
	and French versions of Microsoft Mail. Updated versions of these files for other
	languages will be available from your local Microsoft subsidiary.
	
	The files on Disk 2 are in compressed format. The French version of the updated
	files are in the INTL\FRN directory of Disk 2. The German version are in the
	INTL\GER directory.
	
	MORE INFORMATION
	================
	
	To install the updated Forms Designer files for French or German Microsoft Mail,
	perform the following steps:
	
	1. Use the Designer Setup program to install the Electronic Forms Designer, by
	  following the instructions in the Microsoft Electronic Forms Designer
	  "Developer's Guide."
	
	2. Exit Windows.
	
	3. Insert Disk 2 of the Electronic Forms Designer into your floppy disk drive
	  and at the MS-DOS prompt, select your floppy disk drive.
	
	4. To install the French version of the files, type the following:
	
	  "cd a:\intl\frn" (without the quotation marks)
	
	  To install the German version of the files, type the following:
	
	  "cd a:\intl\ger" (without the quotation marks)
	
	5. Change the current drive to the drive that contains your Windows directory.
	  If your Windows directory is not in your path, copy the EXPAND.EXE program
	  from your Windows directory to your Windows SYSTEM directory.
	
	6. Change the current directory to your Windows system directory. For example,
	  if your Windows system directory is on drive C and is called WINDOWS\SYSTEM,
	  type the following:
	
	  "cd c:\windows\system" (without the quotation marks)
	
	7. Type the following commands to copy and decompress the updated Microsoft Mail
	  files into your Windows system directory:
	
	  "expand a:mailspl.ex_ mailspl.exe
	  expand a:mssfs.dl_ mssfs.dll
	  expand a:mapi.dl_ mapi.dll" (without the quotation marks)
	
	To install the updated files for access by E-form users with French or German
	Microsoft Mail, perform the following steps:
	
	1. Use the Electronic Forms Designer Server Setup program to install the E-form
	  run-time files into the shared extensions directory by following the
	  instructions in the Microsoft Electronic Forms Designer "Developer's Guide."
	
	2. Follow steps 2 through 4 in the procedure listed above, but instead of
	  decompressing and copying the updated files into the Windows SYSTEM
	  directory, copy and decompress the files into the EFORMS\RUNTIME directory
	  created by the Server Setup program.
	
	This procedure replaces the English versions of the libraries created by the User
	Setup program with the French or German version of the library files, so that
	when users run the User Setup program, the correct language version is installed
	on their machines.
	
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	
