---
layout: page
title: "Q150945: BUG: Unable to Enter the CD KEY in the Setup Dialog Box"
permalink: kb/150/Q150945/
---

## Q150945: BUG: Unable to Enter the CD KEY in the Setup Dialog Box

	Article: Q150945
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0;
	Operating System(s): 
	Keyword(s): kbList kbsetup kbVBp400 kbGrpDSVB kb32bitOnly
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The CD Key dialog box does not allow the correct 3 - 7 digit combination. The
	characters appear jumbled or do not appear at all.
	
	CAUSE
	=====
	
	At the beginning of the installation process, the user is prompted to enter the
	CD Key for the product. This key is found on the back of the CD-ROM case.
	Attempts to enter the digits into the text boxes either fail to work, display
	symbol-like characters, or display the wrong number of characters. The setup
	program displays the error "This is an invalid CD Key value. Check the
	identification number from your CD sticker," and does not allow the user to
	proceed.
	
	RESOLUTION
	==========
	
	The setup program requires that the MS Sans Serif font is correctly installed on
	the machine.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. We are researching this issue and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	To work around this behavior, use either of the following methods:
	
	Method 1
	--------
	
	Run Setup with the /k switch. This switch, followed by the CD Key, passes the
	information directly to the Setup program, and bypasses the dialog box where the
	CD Key is entered. The message does not appear because the MS Sans Serif font is
	not used.
	
	To use the Setup program with the switch, use the following steps:
	
	1. Insert the Microsoft Visual Basic 4.0 CD-ROM.
	
	2. From the Start menu, select Run.
	
	3. In the Open dialog box, type the following:
	
	  <drive>:\SETUP\setup.exe /k "<CD Key>"
	
	  where <drive> is the drive letter for the CD-ROM on your computer and
	  <CD Key> is the 10-digit key from the CD-ROM sticker. Enter this key
	  enclosed in quotation marks (" "). The key cannot contain a hyphen. For
	  example:
	
	  D:\SETUP\setup.exe /k "1111111111"
	
	4. Click OK.
	
	NOTE: To obtain the best results from other programs, use the steps listed under
	Method 2 to reinstall the MS Sans Serif font.
	
	Method 2
	--------
	
	Exit Setup, remove, and then reinstall the MS Sans Serif font. After the MS Sans
	Serif font is reinstalled, run the Microsoft Visual Basic 4.0 Setup.
	
	To remove and reinstall the MS Sans Serif font, use the following steps:
	
	1. From the Start menu, select Settings, and click the Control Panel.
	
	2. Double-click the Fonts icon in the Control Panel.
	
	3. Right-click the MS Sans Serif icon, and then click Delete.
	
	4. From the File menu, select Install New Font.
	
	5. In the Folders list, select the folder containing the font.
	
	6. Double-click the font to install it.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q138079 OFF7 Err Msg: This is an Invalid CD Key Value
	
	Additional query words:
	
	======================================================================
	Keywords          : kbList kbsetup kbVBp400 kbGrpDSVB kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0;
	Issue type        : kbbug
	
	=============================================================================
	
