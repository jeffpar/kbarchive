---
layout: page
title: "Q113689: PRB: Transport Screens w/ PICT Files from Macintosh to Windows"
permalink: /kb/113/Q113689/
---

## Q113689: PRB: Transport Screens w/ PICT Files from Macintosh to Windows

{% raw %}

	Article: Q113689
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.6x,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.6x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Creating a screen in FoxPro for Windows that uses a PICT file from FoxPro for
	Macintosh will produce a "Picture too big, corrupt, or wrong format" error
	message if FOX.BMP cannot be found in the main FoxPro for Windows directory. If
	FOX.BMP can be found, it will automatically be substituted for any PICT file
	when you transport a screen from FoxPro for Macintosh to FoxPro for Windows.
	
	RESOLUTION
	==========
	
	To avoid this behavior, use the PICT-to-BMP utility that ships with FoxPro for
	Macintosh (it is located in the GOODIES:MISC subfolder by default). You can
	either convert the PICT file to a .BMP file and use that file on both platforms,
	or you can just move the .BMP file along with the *.SC? files so that the bitmap
	can be used with FoxPro for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a screen in FoxPro 2.5b for Macintosh.
	
	2. Add a word to the screen using the Text tool in the Screen Builder toolbox.
	
	3. Add a picture to the screen; for example, FOX.PCT. To add the PICT file, use
	  the Picture tool in the Screen Builder toolbox.
	
	4. Move the *.SC? files to a Windows machine.
	
	5. To see the error message, either move FOX.BMP out of the FoxPro for Windows
	  directory or rename the file.
	
	6. Using FoxPro 2.6 for Windows, try to modify the screen that was created on
	  the Macintosh.
	
	At this point, the transporter is invoked. During the transport, you will be
	asked to locate the file. Unless you select a particular .BMP file, FOX.BMP in
	the FOXPROW directory will be substituted. If another .BMP file is not selected
	and FOX.BMP cannot be found, you will get the error message "Picture too big,
	corrupt, or wrong format," and the screen file will not open.
	
	Additional query words: VFoxWin FoxWin 2.60 2.60a errmsg err msg cross platform xplat transfer convert transport translate
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300
	Version           : WINDOWS:2.6x,3.0
	
	=============================================================================
	

{% endraw %}
