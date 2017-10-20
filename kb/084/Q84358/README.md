---
layout: page
title: "Q84358: Write Err Msg: Problem with Object/Link"
permalink: /kb/084/Q84358/
---

## Q84358: Write Err Msg: Problem with Object/Link

{% raw %}

	Article: Q84358
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows version 3.1's Write (WRITE.EXE) program displays the following error
	message when you use the PRINT SCREEN key to copy an image to the Clipboard from
	a high-resolution MS-DOS- or a Windows-based application, and paste the image
	into Write:
	
	  Problem with Object/Link
	
	This error message appears either when you try to save the file after pasting the
	graphic image, or when you attempt to print the document after saving it.
	
	WORKAROUND
	==========
	
	1. Run a high-resolution MS-DOS-based or Windows-based application.
	
	2. Press the PRINT SCREEN key to capture the image into Clipboard.
	
	3. Run Windows Paintbrush.
	
	4. From the Edit menu, choose Paste.
	
	5. From the File menu, choose Save. Save the graphic image as a .BMP file.
	
	6. Use the Pick tool and mark the graphic image.
	
	7. From the Edit menu, choose Copy.
	
	8. Run WRITE.EXE.
	
	9. From the Edit menu, choose Paste.
	
	NOTE: This workaround may not work all of the time.
	
	As an alternative workaround, run Windows in a lower resolution.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows Write versions 3.1 and
	3.11. We are researching this problem and will post new information here as it
	becomes available.
	
	Additional query words: 3.10 3.11 err msg high resolution
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
