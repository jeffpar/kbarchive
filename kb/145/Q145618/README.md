---
layout: page
title: "Q145618: FIX: Visual Basic 4.0 Setup on Compressed Drive Failure"
permalink: /kb/145/Q145618/
---

## Q145618: FIX: Visual Basic 4.0 Setup on Compressed Drive Failure

	Article: Q145618
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0;
	Operating System(s): 
	Keyword(s): kbsetup kbVBp400bug kbGrpDSVB kbvbp400afix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to install Visual Basic 4.0 for the first time, the following
	message is received:
	
	  Setup cannot access the required initialization file :
	  'O:\VB4DROP\ENT-CD\SETUP\VB4-2.CAB : ACMSETUP.HLP : MSSTP32.DL_ :
	  VB4SETUP.TTF : ODBCCP32.DLL : ODBCINT.DLL : MSVCRT40.DLL'.
	
	CAUSE
	=====
	
	Installing on a compressed drive may fail if the uncompressed drive, usually
	H:\, has more than 900K but less than 2MB free on it. This is due to an error in
	SETUP.LST and SETUP16.LST on the CD. The value for TmpDirSize in
	setup.lst/setup16.lst is set to 900. This tells the setup program that setup
	need 900K of free space on the drive in order to create the temporary directory
	(~msstfqf.t) for the install. The amount of room needed by Visual Basic 4.0 is
	actually:
	
	- 32-bit Enterprise and Professional Editions: 2000K
	
	- 16-bit Enterprise and Professional Editions: 1250K
	
	- 32-bit Standard Edition: 1500K
	
	For example, when Visual Basic is installed on a computer using a compressed C
	drive with drive H as the host, H will be used to create the temporary directory
	because as host it is the boot drive. If the amount of space available on drive
	H is under 900K, setup will use another drive. If the amount of space available
	on drive H is over (about) 1800K, setup will use the H drive, and no problem
	will occur. If the amount of space available on the H drive is between 900K and
	(about) 1800K, setup will use the H drive, but it will fail due to insufficient
	space.
	
	WORKAROUND
	==========
	
	- For a floppy install, change the value of TmpDirSize in the setup.lst/
	  setup16.lst file.
	
	- Copy files to the host drive (typically H:) so that it has less than 900K of
	  free space remaining.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in Microsoft Visual Basic
	programming system version 4.0 for Windows. This problem has been corrected in
	the Microsoft Visual Basic version 4.0a for windows synchronization release.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbVBp400bug kbGrpDSVB kbvbp400afix 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0;
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
