---
layout: page
title: "Q137603: PPT: Unpacked PPT4.0 Presentation Requires PPT95"
permalink: /kb/137/Q137603/
---

## Q137603: PPT: Unpacked PPT4.0 Presentation Requires PPT95

	Article: Q137603
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbinterop kbpng
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the PowerPoint 7.0 Pack And Go Wizard to pack a PowerPoint 4.0
	presentation and then unpack that presentation on another computer, you may
	receive the following error message when you try to open the presentation in
	PowerPoint 4.0 or show it using PowerPoint Viewer version 4.0:
	
	  Sorry, this is not a PowerPoint presentation.
	
	CAUSE
	=====
	
	This problem occurs if you do not include the 16-bit PowerPoint Viewer as part
	of the Pack And Go file.
	
	The Pack And Go Wizard converts PowerPoint 4.0 presentations to PowerPoint for
	Windows 95 format. If you don't pack the Viewer along with the presentation,
	PowerPoint 4.0 won't be able to read the presentation when it is unpacked.
	
	The 16-bit PowerPoint Viewer includes a file called Pp7trans.dll. This file
	enables PowerPoint 4.0 to open PowerPoint 7.0 presentations. In addition, if the
	Viewer is packed with the presentation, Pngsetup.exe modifies your Powerpnt.ini
	file so that your copy of PowerPoint 4.0 can read PowerPoint for Windows 95
	presentations.
	
	RESOLUTION
	==========
	
	If you did not pack the Viewer, you can install the PowerPoint 7.0 Viewer by
	using a PowerPoint 7.0 Viewer disk.
	
	The disk contents can also be downloaded from the Microsoft Download Library,
	MSDL, at (425) 936-6735, using 1200-14,000 baud, 8 data bits, 1 stop bit, and no
	parity. After downloading the Viewer contents to a blank disk, install Viewer by
	switching to drive A, typing
	
	  "vsetup" (without the quotation marks)
	
	and pressing Enter.
	
	MORE INFORMATION
	================
	
	If you use the PowerPoint 7.0 Pack And Go Wizard to include the 16-bit Viewer as
	part of the packed presentation, the Viewer will run correctly under Windows 95
	or Windows NT 3.51 (or later). It also runs correctly on Windows 3.1 or Windows
	for Workgroups 3.11 provided the OLE .dll files are installed. These files do
	not come with Windows 3.1 but are installed by many products. These files are
	normally located in the C:\Windows\System folder and include:
	
	  Compobj.dll
	  Ole2.dll
	  Ole2conv.dll
	  Ole2disp.dll
	  Ole2nls.dll
	  Ole2prox.dll
	  Stdole.tlb
	  Storage.dll
	  Ttpelib.dll
	
	If these files are not present, you can't run Viewer without running Vsetup from
	a PowerPoint Viewer disk.
	
	Additional query words: 7.00 unpacked Pack and Go PowerPoint 95 4.0 Viewer w_powerpt 4.00 4.00a 4.00c powerpnt
	
	======================================================================
	Keywords          : kbinterop kbpng 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:4.0,4.0a,4.0c,7.0
	Hardware          : x86
	
	=============================================================================
	
