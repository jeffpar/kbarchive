---
layout: page
title: "Q139955: Err Msg: This Is an Invalid CD Key Value. Check the..."
permalink: kb/139/Q139955/
---

## Q139955: Err Msg: This Is an Invalid CD Key Value. Check the...

	Article: Q139955
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Microsoft Plus!, you may be unable to type the entire CD
	Key number, or you may receive the following error message:
	
	  This is an invalid CD Key value. Check the identification number from your CD
	  sticker.
	
	CAUSE
	=====
	
	This problem can occur if the MS Sans Serif font is damaged or missing.
	
	RESOLUTION
	==========
	
	To correct this problem, use either of the following methods.
	
	Method 1
	--------
	
	Run Setup with the /K switch. This switch passes the CD Key number to Setup so
	that you are not asked for the number. To use this method, follow these steps:
	
	1. Click the Start button, and then click Run.
	
	2. In the Open box, type the following line, and then click OK
	
	  <drive>:\setup /k "<xxxxxxxxxx>"
	
	  where <drive> is the drive containing the Microsoft Plus! CD-ROM and
	  <xxxxxxxxxx> is your 10-digit CD Key number.
	
	  For example, if the Microsoft Plus! CD-ROM is in drive D and your CD Key
	  number is 123-4567890, type the following line:
	
	  d:\setup /k "1234567890"
	
	Method 2
	--------
	
	Replace the damaged or missing MS Sans Serif font. To do so, follow these steps:
	
	1. In Control Panel, double-click the Fonts folder.
	
	2. Click the MS Sans Serif font, and then click Delete on the File menu. When
	  you are prompted to confirm that you want to delete the font, click Yes.
	
	3. Click the Start button, click Run, and then type the following line in the
	  Open box
	
	  extract /l c:\windows <drive>:\win95\mini.cab sserife.fon
	
	  where <drive> is your CD-ROM drive.
	
	4. In Control Panel, double-click the Fonts folder.
	
	5. On the File menu, click Install New Font.
	
	6. Double-click "MS Sans Serif 8, 10, 12, 14, 18, 24 (VGA res)."
	
	7. Restart your computer.
	
	8. Run Microsoft Plus! Setup again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Plus! version 1.0 for
	Windows 95. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available
	
	MORE INFORMATION
	================
	
	For additional information about using the Extract tool, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbPlusSearch kbPlus95
	Version           : :95
	Issue type        : kbprb
	
	=============================================================================
	
