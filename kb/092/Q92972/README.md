---
layout: page
title: "Q92972: Graphics Print Slowly to PostScript Printer on LPT Port"
permalink: /kb/092/Q92972/
---

## Q92972: Graphics Print Slowly to PostScript Printer on LPT Port

{% raw %}

	Article: Q92972
	Product(s): Microsoft Windows Printing Issues
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If your graphics print jobs take a long time to print to a PostScript printer
	through a parallel port (LPT1-3), you can clear the Compress Bitmaps check box
	in the Advanced Options dialog box to improve the print speed. However, there is
	a tradeoff -- the application from which you are printing does not regain
	control as fast (that is, the hourglass takes longer to return to a pointer).
	
	If you print through a serial port (COM 1-4), you should not clear the Compress
	Bitmaps check box.
	
	MORE INFORMATION
	================
	
	Changing the Compress Bitmaps option does not affect either device fonts or
	TrueType fonts, and does not affect printing speed for text-only documents.
	
	Clearing the Compress Bitmaps check box increases the amount of time before
	control is returned to the application, but decreases the total time required to
	print.
	
	If you want control to be returned to the application as quickly as possible,
	select the Compress Bitmap check box.
	
	Setting the Compress Bitmap Option
	----------------------------------
	
	1. Run Control Panel and choose the Printers icon.
	
	2. Select the PostScript printer you are using from the list of Installed
	  Printers.
	
	3. Choose the Setup button.
	
	4. Choose the Options button.
	
	5. Choose the Advanced button.
	
	6. Select or clear the Compress Bitmaps check box, depending on your preference.
	
	7. Choose the OK button three times, and choose the Close button to save your
	  changes.
	
	
	Additional query words: 3.10 wfw wfwg win31 LPT1 LPT2 LPT3 COM1 COM2 COM3 COM4 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
