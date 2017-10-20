---
layout: page
title: "Q90291: Using Graphics Within a Help File"
permalink: /kb/090/Q90291/
---

## Q90291: Using Graphics Within a Help File

{% raw %}

	Article: Q90291
	Product(s): Miscellaneous Software Development Kits
	Version(s): 3.1; WINDOWS:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows version 3.1 
	- Microsoft Win32 Software Development Kit (SDK), versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article explains how to use graphics in a Help file with both the help
	compiler 3.1 (HC30.EXE, HC31.EXE, and HCP.EXE) and the help compiler 4.0
	(HCW.EXE).
	
	MORE INFORMATION
	================
	
	TYPES OF GRAPHICS
	-----------------
	
	With the Help Compiler, four types of graphics can be displayed within help
	topics: bitmaps, metafiles, segmented hypergraphics, and multiple resolution
	bitmaps. With HC30 and HC31, these graphics are limited to 16 colors but it is
	possible to use embedded windows to create a 256-color bitmap. HCW is capable of
	displaying 16 million colors.
	
	The following section discusses the details of the graphics formats listed above,
	and provides details on their advantages and disadvantages.
	
	Bitmaps
	-------
	
	A bitmap is an image that is described by a matrix of memory bits that, when
	copied to a device, define the color and pattern of a corresponding matrix of
	pixels on the display surface of the device. The advantage to using a bitmap is
	that drawing a bitmap is very fast. The disadvantage is that the size of a
	bitmap is very large. Bitmaps can be created with a graphics editor, such as
	Paintbrush.
	
	Metafiles
	---------
	
	A metafile is a collection of GDI commands that creates desired text or images.
	There are two advantages to using metafiles: the size of the metafile is small,
	and metafiles are less device-dependent than bitmaps. The disadvantage of using
	a metafile is that it takes a long time to draw one.
	
	Segmented Hypergraphics
	-----------------------
	
	A segmented hypergraphic is a graphic that has hot spots defined in various
	regions of the graphic. Clicking hot spots either executes a macro or jumps to a
	context string. To make a segmented hypergraphic, use the segmented hypergraphic
	(hot spot) editor (SHED.EXE) included with the Windows 3.1 SDK.
	
	Multiple Resolution Bitmaps
	---------------------------
	
	A multiple resolution bitmap is a single bitmap file that contains one or more
	bitmaps that have been marked for use with specific displays. The advantages of
	multiple resolution bitmaps are:
	
	1. Bitmaps are prevented from appearing too big or too small on different
	  resolutions.
	
	2. Bitmaps are prevented from looking stretched or compressed from display to
	  display.
	
	3. Colors are mapped correctly on different displays.
	
	The disadvantage of multiple resolution bitmaps is that the files are large.
	multiple resolution bitmaps can be created from bitmap files with the multiple
	resolution bitmap compiler, MRBC.
	
	PLACING GRAPHICS
	----------------
	
	Direct Pasting
	--------------
	
	Bitmaps and metafiles can be pasted directly from the clipboard into an RTF
	source file. This allows the help author to see what the topic will look like
	while it is being edited. There are several disadvantages to this method. The
	first disadvantage only applies to HC30 and HC31. It is that any graphic pasted
	directly into a topic is limited to 64K. This is the result of the help
	compiler's 64K per paragraph limit when processing RTF source files. The second
	disadvantage applies to all the help compilers. It is size. If the same graphic
	is used multiple times within the same source file, then a copy of the graphic
	is made each time it is placed within the source.
	
	By Reference
	------------
	
	All of the graphics can be placed "by reference." To insert a graphic by
	reference, the help author must type {bm? graphic.ext} where bm? is bml, bmr, or
	bmc and graphic.ext is the name of the graphic file that the author wants to
	have placed in the help topic. The bml command is used for a left-justified
	graphic, the bmr command is used for a right justified graphic, and the bmc
	command is used for a character justified graphic (that is, the graphic is
	inserted into the paragraph as if it were a character).
	
	One of the advantages of placing a graphic by reference is that it lifts the 64K
	limit on a graphic. Also, a graphic placed by reference is actually just a
	"pointer" to the real graphic. Therefore, if the same graphic is used multiple
	times, it is only "stored" once within the .HLP file.
	
	The disadvantage of placing graphics by reference is that the help author does
	not see how the topic will appear while in the RTF editor. The bitmap files
	inserted by reference must be found in the directory specified by either the
	ROOT or BMROOT settings in the [OPTIONS] section of the help project file. If
	the bitmap is not located in one of these directories, then the file must be
	listed in the [BITMAPS] section of the project file, so the help compiler can
	locate the bitmap.
	
	Hot Spots and Pop Ups
	---------------------
	
	When placing a graphic into an RTF source file, it can be turned into a hot spot
	or pop up, similar to other text. Just select the graphic and turn on the double
	or single underline attribute followed immediately by the hidden text for the
	context string or macro.
	
	Additional query words: 3.10 4.00 95 WinHelp win16sdk
	
	======================================================================
	Keywords          :  
	Technology        : kbWin32SDKSearch kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32SDK400 kbWin32SDK351 kbWinSDKSearch kbWinSDK310
	Version           : :3.1; WINDOWS:3.51,4.0
	
	=============================================================================
	

{% endraw %}
