---
layout: page
title: "Q75961: Printing Extended Characters with Generic Text Driver"
permalink: /kb/075/Q75961/
---

## Q75961: Printing Extended Characters with Generic Text Driver

	Article: Q75961
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	You can print extended characters on a daisy wheel printer by assigning the
	characters through the Control Panel, using the Generic Printer/Text driver (see
	the steps below).
	
	MORE INFORMATION
	================
	
	To print extended characters on a daisy wheel printer, you must assign the
	screen code to the appropriate printer code.
	
	For more information on the differences between screen codes and printer codes,
	query on the following
	
	  "printer" (without the quotation marks) and "codes" (without the quotation
	  marks) and "screen" (without the quotation marks) and "windows" (without the
	  quotation marks)
	
	or read the information found in the PRINTERS.TXT file that came with your
	Windows program, or follow the first four steps below and choose the Help
	button.
	
	Changing the screen code to the correct printer can be done as follows:
	
	1. Run Control Panel.
	
	2. Select the Printers icon from the Control Panel.
	
	3. Make sure the Generic Printer/Text printer is selected (highlighted) and then
	  choose the Configure button.
	
	4. Choose the Setup button.
	
	5. Choose the Character button.
	
	6. In the On Screen list box, select the screen character you want to change.
	
	7. Type the corresponding printer character code in the On Printer text box.
	
	This printer code can be typed in using the ALT keys and the numeric keypad.
	
	For example, if you want to change ASCII code 167, \247, into 180 for the
	printer:
	
	1. Select the 167=\247 from the On Screen list box.
	
	2. In the On Printer text box, press ALT+Keypad 0180. When you release the ALT
	  key, the character code will appear on the screen.
	
	
	Additional query words: generic/text only tty control ansi 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
