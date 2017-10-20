---
layout: page
title: "Q103215: Animation in Windows"
permalink: /kb/103/Q103215/
---

## Q103215: Animation in Windows

{% raw %}

	Article: Q103215
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbOSWin310 _IK kbSDKWin16
	Last Modified: 04-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is aimed at people who would like to create a Microsoft
	Windows-based application that does some form of animation, or who would like to
	understand how to improve the performance of an existing animated application,
	or who are considering porting an MS-DOS--based application to Windows. The main
	focus of the article is on using Device-Independent Bitmaps (DIBs) for the
	images and the DIB driver (DIB.drv) for the off-screen image buffer. The article
	is written around a sample application, Sprites, which is included with the
	article. Some knowledge of animation techniques is assumed. If you're looking
	for a "How to Do Animation" article, this isn't it. The following points are
	covered:
	
	- Using the DIB driver
	
	- Palettes
	
	- Measuring and improving performance
	
	- Lots of useful little tips and hints
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  ~ SPRITES.EXE
	  (http://support.microsoft.com/download/support/mslfiles/SPRITES.EXE)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	SPRITES demonstrates sprite (cast-based) animation in a Microsoft Windows-based
	application using device-independent bitmaps (DIBs) for the images and the DIB
	driver (DIB.drv) for the off-screen image buffer.
	
	The SPRITES application uses a DIB for a background scene, and allows you to load
	multiple sprites on top of the background scene. Each sprite has x, y, and z
	coordinates, optional x and y velocity, and a flag that indicates whether it can
	be dragged by the mouse.
	
	A background and a set of sprites can be combined into a scene described in a
	simple INI file. You can load the entire scene by choosing the Load Scene
	command from the File menu.
	
	The application updates the positions of all sprites that have a non-zero
	velocity as fast as it can, using a PeekMessage() loop. Sprites that have the
	selectable attribute set can be dragged with the mouse. Double-clicking a sprite
	brings up a dialog box for setting sprite attributes.
	
	Additional query words: kbfile softlib SPRITES.EXE
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
