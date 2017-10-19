---
layout: page
title: "Q72927: DIVER.FSH from WRK Hangs System When Flipped"
permalink: /kb/072/Q72927/
---

## Q72927: DIVER.FSH from WRK Hangs System When Flipped

	Article: Q72927
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Flipping the DIVER.FSH file either horizontally or vertically causes your
	computer to stop responding (hang) or causes a series of error messages.
	
	MORE INFORMATION
	================
	
	The Windows Resource Kit (WRK) contains a shareware utility called Windows 3.0
	Fish. This utility is a screen saver program that inserts fish graphics onto
	your screen and makes your monitor appear like a fish bowl. This program allows
	you to edit fish species and create your own. Attempting to flip DIVER.FSH
	results in one or more of the following:
	
	- Your system hangs.
	
	- Several dialog boxes (usually 4-5) and corresponding buttons (usually 5-6)
	  with the word "Error" on the title bar and the words "Fishedit.cxxxx" in the
	  box cascade on your screen.
	
	- In Windows 3.0, an Unrecoverable Application Error message is displayed. In
	  Windows 3.1, a dialog box appears with an Application Error message. You can
	  choose the Close button and close Fish without quitting Windows.
	
	- The MS-DOS prompt appears in the top left corner with no cursor (you should
	  have keyboard control, however). To retrieve the cursor, type "mode 80"
	  (without the quotation marks) at the prompt and press the ENTER key.
	
	Windows Fish is manufactured by a vendor independent of Microsoft. We make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability. For more information regarding Fish, contact:
	
	  Tom & Ed's Bogus Software
	  15600 NE 8th St., Ste. A3334
	  Bellevue, WA 98008
	
	REFERENCES
	==========
	
	"Windows Resource Kit," page 174. (Windows 3.0 WRK only)
	
	Additional query words: 3rdparty 3.00a 3.0a 3.1 3.10 3.00 WRK RK uae
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
