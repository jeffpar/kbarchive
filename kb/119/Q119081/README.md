---
layout: page
title: "Q119081: Comprehensive List of MS-DOS 6.22 Documentation Errors"
permalink: kb/119/Q119081/
---

## Q119081: Comprehensive List of MS-DOS 6.22 Documentation Errors

	Article: Q119081
	Product(s): Microsoft Disk Operating System
	Version(s): 6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information about the documentation errors in the
	README.TXT file, the "User's Guide," and the README.NOW file for MS-DOS 6.22.
	
	The following topics are covered:
	
	README.TXT Errors:
	
	- Section 1.18 Incorrectly References Section 1.20
	
	- Section 1.8 Incorrectly References DRVSPACE.BI_
	
	- Section 4.2 has Cyclical Reference
	
	- Section 7.26 "Creating an Emergency Startup Disk for DriveSpace Systems"
	
	- Section 7.3 refers to DriveSpace
	
	"User's Guide" Errors:
	
	- Page 171 - "drivparm /d:0 /f:x" Should Be "drivparm=/d:0 /f:x"
	
	README.NOW Errors:
	
	- Section 3
	
	README.TXT Errors
	-----------------
	
	Section 1.18 Incorrectly References Section 1.20:
	
	Section 1.18 incorrectly refers you to section 1.20 when it should refer you to
	section 1.17.
	
	Section 1.8 Incorrectly References DRVSPACE.BI_:
	
	Section 1.8 of the README.TXT for MS-DOS 6.22 discusses how you can expand a file
	from the MS-DOS 6 distribution disks. This example used has you look for
	DRVSPACE.BI_ on the MS-DOS 6 disk set. The correct reference should be
	DBLSPACE.BIN.
	
	Section 4.2 has Cyclical Reference:
	
	Section 4.2 of the MS-DOS 6.22 README.TXT file points to section 7.18 for more
	information. However, section 7.18 tells you to go back to section 4.2, part C.
	
	Section 7.26 Should Copy DBLSPACE.BIN, Not DRVSPACE.BIN:
	
	Section 7.26 outlines how to create an Emergency Startup Disk for DriveSpace
	systems. It should outline creating an Emergency Startup Disk for DoubleSpace
	systems as follows:
	
	7.26  Creating an Emergency Startup Disk for DoubleSpace Systems:
	
	To create an MS-DOS 6.22 startup disk if you use DoubleSpace:
	
	1. If you are upgrading from MS-DOS 6.0, install MS-DOS 6.22 in the directory
	  that contains your previous version of MS-DOS.
	
	2. To create a startup floppy disk, run Setup again by typing the following
	  command:
	
	  " SETUP /F " (without the quotation marks)
	
	  Setup installs MS-DOS 6.22 on the floppy disk. The resulting startup disk does
	  not include DBLSPACE.BIN, since MS-DOS 6.22 does not include DoubleSpace.
	
	3. Add the DBLSPACE.BIN file to the floppy disk by copying it from the directory
	  that contains your MS-DOS files. For example, if your MS-DOS directory is
	  C:\DOS and the floppy disk is in drive A, you would type:
	
	  " COPY C:\DOS\DBLSPACE.BIN A: " (without the quotation marks)
	
	  Note: If you are upgrading from MS-DOS 6 but need to install to the floppy
	  disk without first installing MS-DOS 6.22 on your hard disk, you can skip
	  Step 1. However, the resulting startup disk will include MS-DOS 6 DoubleSpace
	  rather than MS-DOS 6.2 DoubleSpace. When you start your computer using such a
	  startup disk, you will receive a message from DoubleSpace; to continue, just
	  press ENTER.
	
	Section 7.3 refers DriveSpace:
	
	Section 7.3 of README.TXT, discussing conversion from Stacker to DriveSpace,
	refers to DRVSPACE.BIN. This should refer to DBLSPACE.BIN.
	
	User's Guide Errors
	-------------------
	
	Page 171 - "drivparm /d:0 /f:x" Should Be "drivparm=/d:0 /f:x":
	
	Step 3 incorrectly shows the drivparm statement as follows:
	
	  drivparm /d:0 /f:x
	
	It should include an equal sign as follows:
	
	  drivparm=/d:0 /f:x
	
	README.NOW Errors
	-----------------
	
	Section 3:
	
	Section 3 of the MS-DOS 6.22 Step-Up README.NOW file incorrectly states that
	Microsoft Anti-Virus is automatically updated with MS-DOS 6.22 Setup.
	
	Below is the text of Section 3 from the README.NOW file:
	
	3. Updating Microsoft Backup, Undelete and Antivirus
	----------------------------------------------------
	
	  MS-DOS 6.22 Setup automatically updates the Backup, Undelete and Antivirus
	  programs only if the MS-DOS 6 or 6.2 versions of these programs are already
	  on your computer when you run MS-DOS 6.22 Setup. (These programs have not
	  changed since MS-DOS version 6.2.) If you want the latest versions of these
	  programs, but the MS-DOS 6 or 6.2 versions are not currently installed on
	  your system, carry the procedure in section 3.1 or 3.2 (depending on whether
	  you have installed MS-DOS 6.22 yet).
	
	Files for updating Backup and Undelete are present with the MS-DOS 6.22 Step-Up
	package; however, the Anti-Virus files for MS-DOS (MSAV) and Microsoft Windows
	(MWAV) are not included.
	
	REFERENCES
	==========
	
	MS-DOS 6.22 README.TXT file.
	MS-DOS 6.22 README.TXT file.
	
	Additional query words: 6.22 docerr doc err comprehensive
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : :6.22
	
	=============================================================================
	
