---
layout: page
title: "Q130124: HOWTO: Create Custom Cursor and Icon Files"
permalink: /kb/130/Q130124/
---

## Q130124: HOWTO: Create Custom Cursor and Icon Files

{% raw %}

	Article: Q130124
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnokeyword kbvfp300 kbvfp500
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The professional version of Visual FoxPro includes a utility that allows you to
	create custom icon, bitmap, and cursor files. This utility is not shipped with
	the standard version of Visual FoxPro.
	
	MORE INFORMATION
	================
	
	The utility (IMAGEDIT.EXE) is installed in the VFP\IMAGEDIT directory. You can
	start the utility by choosing the IMAGEDIT icon from the Visual FoxPro group or
	by typing RUN /N IMAGEDIT in the Command window.
	
	Usually, cursors are created as black and white files, 32 x 32 pixels. The size
	of the file may vary based on your display device and installed Windows
	version.
	
	You must use a black and white image for a drag and drop cursor.
	
	If you want to create cursors or icons for different screen resolutions, you must
	edit the IMAGEDIT.INI file. For instructions on editing this file, refer to the
	Imagedit Help menu. The images for different resolutions are contained in a
	single file. The underlying operating system chooses the appropriate image based
	on the video system installed on the target system.
	
	REFERENCES
	==========
	
	For more information about acceptable cursor image sizes, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q73674 Icon and Cursor Size Determined by Display Driver
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbvfp300 kbvfp500 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
