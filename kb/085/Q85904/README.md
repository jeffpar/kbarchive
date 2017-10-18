---
layout: page
title: "Q85904: Bitmaps Pasted into Cardfile Print Incorrectly"
permalink: kb/085/Q85904/
---

## Q85904: Bitmaps Pasted into Cardfile Print Incorrectly

	Article: Q85904
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When pasting a bitmap into Windows Cardfile, the image is sized to fit the card
	properly when displayed, but the image is not scaled when printed.
	
	Pasting the image into Paintbrush before pasting it into Cardfile scales the
	image properly when printed.
	
	Microsoft has confirmed this to be a problem in Windows Cardfile version 3.10. We
	are researching this problem and will post new information here as it becomes
	available.
	
	WORKAROUND
	==========
	
	1. Run Paintbrush from the Accessories group.
	
	2. From the Edit menu, choose Paste From.
	
	3. Select the image you wish to paste, then choose OK.
	
	4. From the Edit menu, choose Copy.
	
	5. From the File menu, choose Exit.
	
	6. In the Paintbrush dialog box, choose No.
	
	7. Run Cardfile from the Accessories group.
	
	8. From the Edit menu, choose Picture.
	
	9. From the Edit menu, choose Paste.
	
	10. From the File menu, choose Print.
	
	The image will print correctly.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Press the PRINT SCREEN key to send a bitmap to the Clipboard.
	
	2. Run Cardfile from the Accessories group.
	
	3. From the Edit menu, choose Picture.
	
	4. From the Edit menu, choose Paste.
	
	5. From the File menu, choose Print.
	
	When printed, only the upper left corner of the bitmap is printed in the card,
	because the bitmap is not being scaled to a smaller size when printed.
	
	Additional query words: 3.10 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
