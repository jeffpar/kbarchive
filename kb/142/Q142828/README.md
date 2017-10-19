---
layout: page
title: "Q142828: PRB: Incorrect Toolbar Bitmaps Installed with VB 4.0"
permalink: /kb/142/Q142828/
---

## Q142828: PRB: Incorrect Toolbar Bitmaps Installed with VB 4.0

	Article: Q142828
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp400bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following pairs of bitmaps that come with Visual Basic are identical, but
	they should be different:
	
	  \bitmaps\outline\open.bmp      AND    \bitmaps\tlbr_w95\open.bmp
	  (222 bytes)                  (246 bytes)
	
	  \bitmaps\assorted\delete.bmp   AND    \bitmaps\tlbr_w95\delete.bmp
	  (382 bytes)                  (246 bytes)
	
	RESOLUTION
	==========
	
	Although they are not installed correctly, there are two different versions of
	Open.bmp and Delete.bmp included on the distribution media for Visual Basic 4.0.
	The Extract.exe program, which comes with Visual Basic, can be used to extract
	the Windows 95 toolbar versions of Open.bmp and Delete.bmp from the installation
	disks or CD. These files can then be copied over the files in the tlbr_w95
	directory.
	
	To extract the Open.bmp file, open an MS-DOS command window, change to the drive
	that your installation disk resides in, and enter the following line: extract /a
	/e /l c:\temp vb4-1.cab open.bmp where c:\temp is the name of a temporary
	directory that the new copy of Open.bmp will be extracted to. The '/a' switch
	tells Extract.exe to search all .cab files for the file(s) specified.
	
	After pressing ENTER, Extract.exe starts searching, and finds and extracts the
	first copy of Open.bmp (which is already installed). It continues searching and
	finds the second copy, at which point it will ask if it's ok to overwrite
	Open.bmp. Choose OK and let Extract.exe finish up. The second version of
	Open.bmp now resides in the directory specified in the command. All that remains
	now is to copy it to the tlbr_w95 subdirectory. Repeat the same steps to extract
	the other version of Delete.bmp. For more information on Extract.exe enter
	'extract /?' at a command prompt.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start Visual Basic, or if it is already running, choose New Project from the
	  File menu.
	
	2. Double-click twice on the Image button in the Toolbox to add two image
	  controls to the form. Move one of the image controls so both are visible.
	
	3. Change the Picture property of Image1 to:
	
	     <path to your VB directory>\bitmaps\outline\open.bmp
	
	4. Change the Picture property of Image2 to:
	
	     <path to your VB directory>\bitmaps\tlbr_w95\open.bmp
	
	The pictures in the two image controls should be different, but they're not.
	
	Manually extracting the second Open.bmp from the installation disks or CD will
	allow access to both bitmaps.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp400bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
