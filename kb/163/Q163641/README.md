---
layout: page
title: "Q163641: PPT: Cannot Create EPS File Using Windows NT PostScript Driver"
permalink: /kb/163/Q163641/
---

## Q163641: PPT: Cannot Create EPS File Using Windows NT PostScript Driver

{% raw %}

	Article: Q163641
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,7.0; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbgraphic kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, version 4.0 
	- the operating system: Microsoft Windows NT, versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot create Encapsulated PostScript (EPS) files from Microsoft PowerPoint
	if you are using the Microsoft Windows NT Workstation PostScript printer driver.
	In contrast, if you run these versions of PowerPoint on Windows 95 or PowerPoint
	4.0 on a computer running Microsoft Windows 3.1, you can create EPS files using
	the Windows PostScript printer driver.
	
	
	CAUSE
	=====
	
	The Windows NT PostScript printer drivers send the output directly to the
	PostScript printer. They cannot be configured to print to EPS files. This
	functionality is different from the Windows 95 and Windows 3.1 PostScript
	printer drivers that can be configured to print to EPS files instead of directly
	to the PostScript printer.
	
	WORKAROUND
	==========
	
	To work around this problem, create a PostScript print file (also called
	PostScript dump or PS file) from Windows NT. In many cases, you can use a
	PostScript print file instead of an EPS file. To do this, follow these steps:
	
	1. On the File menu, click Print.
	
	2. Click to select the Print To File check box.
	
	You can also convert PowerPoint slides to Windows Metafile (.wmf), Portable
	Network Graphics (PNG), CompuServe Graphics Interchange Format (GIF), or Joint
	Photographic Expert Group (JPEG) files. If you have a graphics program that can
	create EPS files, you can export your slides from PowerPoint in one of these
	formats and import them into a graphics program. You can then use that graphics
	program to create the EPS files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT
	Workstation, versions 3.51 and 4.0.
	
	MORE INFORMATION
	================
	
	PostScript is a page description language that is used by a large number of
	printers, including most image-setters and large format color printers.
	
	A PostScript file is a file that contains a collection of PostScript commands
	necessary to print one or more pages to a device that uses the PostScript page
	description language. To use a PostScript file, you simply copy the file to the
	device. PostScript files are not designed to be placed or imported into other
	programs.
	
	An EPS file, on the other hand, contains additional information. EPS files are
	designed to be opened in a graphics program or placed in a word processing or
	desktop publishing program and printed from there. Unlike a PostScript file, an
	EPS file can only contain the information needed to print a single page. To use
	a PostScript file, you should insert it into a document created in another
	program and print it from that program. EPS files are not designed to be copied
	directly to a PostScript device.
	
	Additional query words: ppt4 ppt7 post script linotronic laser writer apple server tab properties qms tektronix phaser
	
	======================================================================
	Keywords          : kbenv kbgraphic kbprint 
	Technology        : kbOSWinSearch kbPowerPtSearch kbOSWinNT400 kbOSWinNT351 kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search kbPowerPt400 kbOSWinNTSearch
	Version           : WINDOWS:4.0,7.0; winnt:3.51,4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
