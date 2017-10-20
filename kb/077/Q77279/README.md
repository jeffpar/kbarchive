---
layout: page
title: "Q77279: Print Using Printer Resolution with Paintbrush"
permalink: /kb/077/Q77279/
---

## Q77279: Print Using Printer Resolution with Paintbrush

{% raw %}

	Article: Q77279
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows Paintbrush program's Use Printer Resolution function
	allows you to size and control printed output. When Use Printer Resolution is
	selected, Paintbrush translates one screen pixel to one printer pixel.
	
	MORE INFORMATION
	================
	
	To use the Printer Resolution in printing graphics from Windows Paintbrush, use
	the following procedure:
	
	1. Confirm the graphics resolution setting for the default printer.
	
	  For example:
	
	  A Hewlett-Packard (HP) LaserJet II has three graphic resolution: 75, 150, and
	  300 dpi.
	
	  To do this, select the Printers icon from the Control Panel, highlight the
	  default printer from the installed printers list, and choose Configure and
	  Setup.
	
	2. Multiply the horizontal and vertical printer graphical resolutions (pels) by
	  the horizontal and vertical dimensions (in inches) of the desired output.
	
	  For example:
	
	  Suppose an output size of 7-by-10 inches is desired at printer resolution. If
	  the printer is currently set to 300 x 300 resolution, then set the Image
	  Attributes as follows:
	
	  Width: 7 x 300 = 2100 Pels
	  Height: 10 x 300 = 3000 Pels
	
	3. Enter the results from step 2 in Paintbrush's Image Attributes box located
	  under the Options menu. Enter the information as Pels.
	
	4. From the File menu, choose New to create a new work area. You need to use
	  Scroll bars to view the entire image.
	
	5. Check the current margins in Paintbrush by choosing Page Setup from the File
	  menu. Make sure the margins can accommodate the desired output size.
	
	6. When preparing to print the image, make sure the Use Printer Resolution box
	  is selected and Scaling is set to 100 0n the Print dialog box.
	
	Additional query words: 3.00 PBRUSH 3.0 3.00a 3.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
