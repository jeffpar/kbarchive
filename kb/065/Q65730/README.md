---
layout: page
title: "Q65730: Film Recorder Support Under PowerPoint for Windows"
permalink: kb/065/Q65730/
---

## Q65730: Film Recorder Support Under PowerPoint for Windows

	Article: Q65730
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:2.0,3.0,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows, versions 2.0, 3.0, 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	As of September 1990, the following film recorder manufacturers are writing or
	have drivers for the Windows environment. Drivers listed below can be used to
	send output to the appropriate film recorders. If you use Matrix film recorder
	(PCR, QCR), you may want to consider the options listed under "More
	Information."
	
	  Manufacturer        Film Recorder       Driver Availability
	  ------------        -------------       -------------------
	
	  Mirus               Filmprinter         Available
	  (800) 654-0808
	
	  Presentation        Montage             Available
	  Technologies
	  (800) 782-2543
	  Sales Department
	
	  Lasergraphics       LFR, LFR plus       Alpha version available;
	  (714) 753-8292                          shipping 4th quarter 1990
	  Tech Support
	
	  Polaroid            Digital Palette     Shipping 4th Quarter 1990
	  (800) 225-1618                          Windows 95 driver should be
	  Electronic                              available by end of 1995,
	  Imaging Group                           according to Zenographics.
	
	  As of July, 1995, the most commonly used film recorder used with
	  PowerPoint 4.0 for Windows is the Polaroid Film Recorder driver created
	  by Zenographics. Zenographics has created three versions of this driver
	  for Windows 3.x. These drivers come with a spooler as a package and the
	  package restructures Control Panel Printers. Note that these drivers may
	  or may not work under Windows 95. Currently, these drivers are not
	  supported by Microsoft and have not been tested. Zenographics can be
	  contacted at (800) 524-3388 or (714) 851-6352
	
	  General Parametrics Photo Metric Slide  Currently under development
	  (415) 524-3950       Maker 250          (NAPLPS .PIC format)
	
	MORE INFORMATION
	================
	
	General Parametrics film recorders use the North American Presentation Level
	Protocol Syntax (NAPLPS) .PIC format. This is not the same as Lotus .PIC files.
	Micrografx has a Windows 2.x driver that can be used by Windows 3.0 running in
	Real-mode only.
	
	AGFA's Matrix film recorders use the Scan Conversion Object Description Language
	(SCODL) developed by Matrix. AGFA interfaces with QuickDraw and uses it as the
	rasterizer on the Macintosh. Currently, a similar interface method with Windows
	facilities is not available through AGFA.
	
	If you use Matrix or Management Graphics film recorders, the following options
	are available from third-party Windows and non-Windows-application vendors for
	achieving output from your film recorders.
	
	1. "Freedom of the Press" from Custom Applications is a software PostScript
	  raster image processor. For additional information about "Freedom of the
	  Press," call the sales department at Custom Applications at (800) 873- 4367.
	
	2. Micrografx has developed a driver (version 2.4) to create SCODL files. Files
	  created with the Micrografx driver can then be imaged using the Matrix
	  Conductor software. Currently, the Matrix Vector Processor (MVP) Conductor
	  software and rasterizer will operate from Windows 2.1 and 2.11 or Windows 3.0
	  in real mode. Micrografx can be reached at (800) 733- 3729; for Sales, press
	  1, then 2.
	
	3. If you have PowerPoint for Windows and the Macintosh, use the Apple File
	  Exchange (AFE) and the PowerPoint filter (available for the $4.50 shipping
	  cost) to translate the Windows presentation to the Macintosh and image from
	  the Macintosh using the Conductor Image Management software. The PowerPoint
	  filter with AFE will translate PowerPoint objects and imported graphics. To
	  obtain the PowerPoint filter, call the Microsoft Order Desk at (800)
	  360-7561. If you are outside the United States, contact the Microsoft
	  subsidiary for your area. To locate your subsidiary, see the Microsoft World
	  Wide Offices Web site at:
	
	  http://www.microsoft.com/worldwide/default.htm
	
	4. Graphx has developed a product called Raster Plus that allows a variety of
	  MS-DOS-based and Windows-based programs to image to a Matrix film recorder.
	  Graphx advertises that this product includes support for PowerPoint for
	  Windows. Raster Plus ships with a Windows 3.0 driver called the
	  WinSlideService driver. Files printed to the WinSlide driver can then be
	  imaged by Raster Plus to Matrix, Solitaire, Polaroid, or Samurai film
	  recorders. In addition, Raster Plus ships with a screen capture utility that
	  will capture any VGA graphics or text screen and save it as a Raster Plus
	  file. Graphx can be contacted at (508) 975- 5424.
	
	
	Additional query words: 4.00a 4.00c ppt95 ppt7 custsales winppt slides slide shoot shooting record
	
	======================================================================
	Keywords          : kb3rdparty kbprint kbPrinting 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search kbPowerPt400 kbPowerPt200 kbPowerPt300 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:2.0,3.0,4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
