---
layout: page
title: "Q68851: Creating Windows PCX Images From Harvard Graphics"
permalink: /kb/068/Q68851/
---

## Q68851: Creating Windows PCX Images From Harvard Graphics

{% raw %}

	Article: Q68851
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Harvard Graphics CAPTURE command doesn't work with Windows 3.0 or 3.1, but
	there is a workaround to create a .PCX file that Harvard Graphics can use.
	
	MORE INFORMATION
	================
	
	Create the .PCX file as follows:
	
	1. Within Harvard Graphics, open the document you want to capture and press the
	  PRINT SCREEN button to copy that screen to the Clipboard as a bitmap.
	
	2. Start Windows Paintbrush. From the Edit menu, choose Paste (or press
	  SHIFT+INS) to paste the screen from the Clipboard into Paintbrush.
	
	3. After performing any modifications, save the file by selecting Save As from
	  the File menu.
	
	4. Click the Options button to change the file format to .PCX (instead of the
	  .BMP default).
	
	If necessary, choose Image Attributes from the Options menu to make sure that the
	image attributes are correct for the type of display on which you'll be
	displaying the .PCX file. To correctly display a .PCX file in a screenshow, the
	.PCX file image attributes should be:
	
	  640 x 350 pixels, 16 colors, and 4 planes
	
	The product included here is manufactured by Software Publishing Corporation, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: 3rdparty 3.0 3.0a 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
