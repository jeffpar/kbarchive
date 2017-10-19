---
layout: page
title: "Q85970: PC Win: Missing Information in Paste Special Dialog Box"
permalink: /kb/085/Q85970/
---

## Q85970: PC Win: Missing Information in Paste Special Dialog Box

	Article: Q85970
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.0, 3.0b, or 3.2 of Microsoft Mail for Windows does not display file
	information correctly in the Pasted Special Option dialog box when an object
	linking and embedding (OLE) object is placed in a message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, and 3.2 of
	Microsoft Mail for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run Microsoft Windows version 3.1.
	
	2. Run Paintbrush, then open the Windows ARCADE.BMP file.
	
	3. Modify the ARCADE.BMP file and copy it to the Clipboard.
	
	4. Exit Paintbrush.
	
	5. Run Microsoft Mail for Windows, version 3.0, 3.0b, or 3.2.
	
	6. Open a new Compose Note and place cursor in the body of the message.
	
	7. From the Edit menu, choose Paste Special.
	
	Notice that "The Source: Paintbrush Picture" with the filename followed by four
	integers is displayed incorrectly.
	
	Example
	-------
	
	Incorrect:
	
	 Source: Paintbrush Picture
	        C:\WINDOWS\ARCADE.BMP  0 0
	
	(the 2nd 0 is 1/2 cut off).
	
	Correct (this is what should be displayed):
	
	 Source: Paintbrush Picture
	        C:\WINDOWS\ARCADE.BMP  0 0 32 32
	
	
	Additional query words: 3.00 3.00b 3.20 WIN31
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
