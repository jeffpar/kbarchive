---
layout: page
title: "Q82033: Tiny Printout from Windows 3.0 Paintbrush"
permalink: kb/082/Q82033/
---

## Q82033: Tiny Printout from Windows 3.0 Paintbrush

	Article: Q82033
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Printing from Microsoft Windows 3.0 Paintbrush may produce a miniature version
	of the actual image size, approximately 1.5 x 1.5 inches, if the Use Printer
	Resolution check box is selected in the File Print dialog box.
	
	CAUSE
	=====
	
	If the Use Printer Resolution check box is selected, Paintbrush translates one
	screen pixel to one printer pixel. The Image Attributes dialog box (on the
	Options menu) is ignored. Standard VGA resolution is 640 x 480 pixels and most
	laser printers have a resolution of 300 dots per inch (dpi). Therefore, a VGA
	screen image translates to about 1.5 x 1.5 inches when printed.
	
	RESOLUTION
	==========
	
	To correct this problem, choose Print from the File menu and clear the Use
	Printer Resolution check box.
	
	To use the printer's resolution when printing graphics from Paintbrush, do the
	following:
	
	1. Confirm the graphics resolution setting for the default printer.
	
	  Example
	
	  A Hewlett-Packard (HP) LaserJet II has three graphic resolutions: 75, 150, and
	  300 dpi.
	
	  To confirm the graphics resolution, choose the Printers icon from Control
	  Panel, select the default printer from the Installed Printers list, choose
	  the Configure button, and choose the Setup button. The graphics resolution
	  will be shown in the resulting dialog box.
	
	2. Multiply the horizontal and vertical printer graphical resolutions (pels) by
	  the horizontal and vertical dimensions (in inches) of the desired output.
	
	  Example
	
	  Suppose an output size of 7-by-10 inches is the desired printer resolution. If
	  the printer is currently set to 300 x 300 resolution, then set the Image
	  Attributes as follows:
	
	     Width:   7 x 300 = 2100 pels
	     Height: 10 x 300 = 3000 pels
	
	3. In Paintbrush, choose Image Attributes from the Options menu and enter the
	  results from step 2 above as pels.
	
	4. From the File menu, choose New to create a new work area. You will need
	  scroll bars to access the entire image size.
	
	5. From the File menu, choose Page Setup and make sure the margins can
	  accommodate the desired output size.
	
	6. Create the image. To print it, choose Print from the File menu, select the
	  Use Printer Resolution check box, and set Scaling to 100.
	
	Additional query words: 3.00 3.0 3.0a 3.00a paint brush small 3.11 printout
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
