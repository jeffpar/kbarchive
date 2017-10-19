---
layout: page
title: "Q172193: INFO: List of VB 4.0 Custom Controls Discontinued in VB 5.0"
permalink: /kb/172/Q172193/
---

## Q172193: INFO: List of VB 4.0 Custom Controls Discontinued in VB 5.0

	Article: Q172193
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbVBp500 kbGrpDSVB kb32bitOnly
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following custom (ActiveX) controls that shipped with Visual Basic 4.0 are
	not installed with Visual Basic 5.0:
	
	  AniBtn32.OCX   Gauge32.OCX    Graph32.OCX    Grid32.OCX     KeySta32.OCX
	  MSOutl32.OCX   MSRDC32.OCX    Spin32.OCX     ThreeD32.OCX
	
	These controls have been replaced with different custom (ActiveX) controls or
	enhanced intrinsic controls. Microsoft does not support the use of these
	controls in Visual Basic 5.0. This article describes each of these Visual Basic
	4.0 controls and how to achieve the same functionality in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	A brief description of each of the discontinued Visual Basic 4.0 custom
	(ActiveX) controls and their Visual Basic 5.0 replacements follows.
	
	AniBtn32.OCX
	------------
	
	The Animated Button control is a flexible button control that allows you to use
	any icon, bitmap, or metafile to define your own button controls. It also allows
	you to create animated or multi-state buttons.
	
	The intrinsic Command Button control in Visual Basic 5.0 now supports a Picture
	property. The Picture property supports graphics of the following types: bitmap,
	icon, metafile, GIF, and JPEG.
	
	The Animation control can be used to create buttons that display animations. This
	control is included with the Windows Common Controls-2, ComCt232.OCX.
	
	Gauge32.OCX
	-----------
	
	The Gauge control creates user-defined gauges with a choice of linear (filled) or
	needle styles. This control is useful for thermometers, fuel gauges,
	percent-complete indicators, or any other type of analog gauge.
	
	In Visual Basic 5.0, use the ProgressBar control found in the Windows Common
	Controls, ComCtl32.OCX.
	
	Graph32.OCX
	-----------
	
	The Graph control allows programmatic creation of graphs and charts in Visual
	Basic objects.
	
	In Visual Basic 5.0, the MSChart control, MSChart.OCX, provides similar
	functionality.
	
	Grid32.OCX
	----------
	
	A Grid control displays a series of rows and columns.
	
	In Visual Basic 5.0 use the FlexGrid control, MSFlxGrd.OCX.
	
	KeySta32.OCX
	------------
	
	You can use the Key State control to display or modify the CAPS LOCK, NUM LOCK,
	INS, and SCROLL LOCK keyboard states.
	
	In Visual Basic 5.0, you can modify the status of CAPS LOCK, NUM LOCK, INS, and
	SCROLL LOCK using the SendKeys command or Windows API commands. The state of the
	above keys can be displayed using the StatusBar control. The StatusBar control
	can be found with the Windows Common Controls, ComCtl32.OCX.
	
	MSOutl32.OCX
	------------
	
	The Outline control is a special type of list box that allows you to display
	items in a list hierarchically. This is useful for showing directories and files
	in a file system.
	
	In Visual Basic 5.0, the TreeView control provides similar functionality. The
	TreeView control can be found in the Windows Common Controls, ComCtl32.OCX. For
	displaying directories and file systems, the intrinsic DriveListBox, DirListBox
	and FileListBox may be used.
	
	MSRDC32.OCX
	-----------
	
	Provides access to data stored in a remote ODBC data source. The Remote Data
	control enables you to move from row to row in a result set and to display and
	manipulate data in bound controls.
	
	In Visual Basic 5.0, this control had been replaced with MSRDC20.OCX.
	
	Spin32.OCX
	----------
	
	The Spin button is a spinner control that you can use with another control to
	increment and decrement numbers. You can also use it to scroll back and forth
	through a range of values or a list of items.
	
	In Visual Basic 5.0, use the UpDown control found in the Windows Common
	Controls-2, ComCt232.OCX.
	
	ThreeD32.OCX
	------------
	
	The ThreeD32.OCX provides three-dimensional versions of several of the Visual
	Basic intrinsic controls, such as the 3D Command Button and 3D CheckBox.
	
	Most of the functionality provided by this control has been incorporated into
	each of the intrinsic Visual Basic 5.0 controls.
	
	NOTE: The discontinued controls listed above are no longer supported in Visual
	Basic 5.0 applications. However, for backward compatibility several of the files
	are available on the Visual Basic 5.0 installation CD-ROM in the following
	location:
	
	  Tools\Controls
	
	Detailed instructions for installing the older versions of the controls are
	provided in the README.TXT file in the same folder.
	
	REFERENCES
	==========
	
	The Custom Control Reference Help File found in the Tools\Controls folder of the
	Visual Basic 5.0 installation CD-ROM.
	
	The ReadMe.Txt file found in the Tools\Controls folder of the Visual Basic 5.0
	installation CD-ROM.
	
	Visual Basic Books On-Line\Visual Basic Help\Controls Reference\ActiveX Controls.
	
	======================================================================
	Keywords          : kbVBp400 kbVBp500 kbGrpDSVB kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
