---
layout: page
title: "Q145732: FIX: Cannot Enter All Ten Digits of CD Key at Setup Time"
permalink: kb/145/Q145732/
---

## Q145732: FIX: Cannot Enter All Ten Digits of CD Key at Setup Time

	Article: Q145732
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp400bug kbVBp500fix kbGrpDSVB kbDSupport
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
	
	During the installation of Microsoft Visual Basic for Windows, you are prompted
	to enter the digits of the key on the sticker placed on the back of the compact
	disc case. In some cases, you cannot enter all ten digits. After entering more
	than one digit, you may receive the following error message:
	
	  This is an invalid CD Key value. Check the identification number from your CD
	  sticker.
	
	CAUSE
	=====
	
	This error is caused by a corrupted or missing MS Sans Serif font.
	
	RESOLUTION
	==========
	
	Either of the following methods can be used to work around this problem.
	
	Method One - Reinstall The MS Sans Serif Font
	---------------------------------------------
	
	1. Be sure your original operating system installation disks are available. You
	  need access to the SSERIFE.FON and SSERIFF.FON files.
	
	2. Double-click the Control Panel's Font icon to view all the fonts currently
	  installed on your system.
	
	3. If you see MS Sans Serif in the list of installed fonts, it may be corrupted.
	  You need to remove it with either of the following methods:
	
	   - In Microsoft Windows version 3.x, Windows NT, or Windows 2000 , select all
	     of the MS Sans Serif fonts. Then click the Remove button.
	
	  -or-
	
	   - In Microsoft Windows 95 or Windows 98, select all of the MS Sans Serif
	     fonts. Click the Delete button, or drag the fonts to the Recycle Bin.
	
	4. Use either of the following methods to reinstall the MS Sans Serif font:
	
	   - In Microsoft Windows version 3.x, Windows NT, or Windows 2000, click the
	     Add button. Select all the MS Sans Serif fonts from your original
	     operating system installation disks. Be sure the "Copy Fonts to Windows
	     Directory" checkbox is checked.
	
	  -or-
	
	   - In Microsoft Windows 95 or Windows 98, select the File/Install New Font...
	     menu item. Select all the MS Sans Serif fonts from your original operating
	     system installation disks. Be sure the "Copy fonts to Fonts Folder"
	     checkbox is checked.
	
	Method Two - Command Line Argument
	----------------------------------
	
	Run the appropriate setup program, either SETUP.EXE or SETUP16.EXE, located in
	the \SETUP directory of the compact disc, using the /K command-line argument.
	For example, to install the 32-bit version of Visual Basic, assuming the compact
	disc is in drive D:, you would enter the following command:
	
	  D:\SETUP /K "xxxxxxxxxx"
	
	Use must use double quotes. "xxxxxxxxxx" represents the digits of the compact
	disc key, without spaces. This is case-insensitive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual Basic
	version 5.0 for Windows.
	
	MORE INFORMATION
	================
	
	You can duplicate this problem by temporarily removing the MS Sans Serif font
	before installing Visual Basic 4.0 for the first time. After you have installed
	Visual Basic, you will not be prompted for the compact disc key.
	
	Additional query words: disk register product identifier SetIns
	
	======================================================================
	Keywords          : kbVBp kbVBp400bug kbVBp500fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
