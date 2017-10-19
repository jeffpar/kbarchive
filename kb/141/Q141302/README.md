---
layout: page
title: "Q141302: Windows NT Print Driver Architecture"
permalink: /kb/141/Q141302/
---

## Q141302: Windows NT Print Driver Architecture

	Article: Q141302
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprint kbPrinting
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the Windows NT print driver. It also illustrates the
	advantages and disadvantages of having a universal driver with characterization
	files.
	
	MORE INFORMATION
	================
	
	Printer drivers are composed of three separate files:
	
	1. A printer graphics driver (for example, PSCRIPT.DLL, RASDD.DLL, or
	  PLOTTER.DLL). Graphics drivers are responsible for print rendering
	  (converting DDI commands from the graphics engine into printer commands that
	  a printer can understand). Each graphics driver handles different printer
	  languages. For example:
	
	     PSCRIPT.DLL: deals with the PostScript printer language.
	     PLOTTER.DLL: deals with the HPGL/2 language used by many plotters.
	     RASDD.DLL:   deals with printer languages based on raster (bitmap)
	                  images, including PCL and most dot matrix printer
	                  languages.
	
	2. A printer interface driver (for example, PSCRPTUI.DLL, RASDDUI.DLL, or
	  PLOTUI.DLL). This dynamic-link library (DLL) includes the user interface you
	  see when you configure a printer in Print Manager. It is called by the client
	  side of the router (WINSPOOL.DRV).
	
	3. Characterization Files: Characterization data files provide model- specific
	  information about print devices.
	
	  When hardware vendors release new print devices, a characterization data file
	  for the new device is all you will need for Windows NT. If Windows NT does
	  not supply such a file for your print device, check the device's users' guide
	  for a list of emulations. If your device emulates a device for which Windows
	  NT supplies a driver, then you may be able to use this driver to get output.
	
	   - Raster minidrivers are actually DLLs. The Windows NT Raster printer driver
	     can read most Windows 3.1 minidriver DLLs (those created for
	     UNIDRV.DLL)directly with no porting required. Raster minidrivers contain
	     printer-specific information.
	
	   - The PostScript driver uses standard Adobe PostScript .ppd files as
	     characterization data files. These files include printer-specific
	     information for a particular printer model and are available from the
	     printer's manufacturer. Unlike Windows 3.1, the Windows NT PostScript
	     printer driver can directly interpret .PPD files. Because PostScript
	     printers are included with .PPD files, when new PostScript printers become
	     available, they will be ready for use with Windows NT.
	
	   - Plotter .pcd files are similar in function to raster minidrivers. They are
	     dynamic link libraries (DLLs), which provide device-specific information
	     to the graphics driver. Unlike raster minidrivers, .pcd files are specific
	     to Windows NT; Windows NT cannot use plotter drivers built for Windows
	     3.1.
	
	The architecture explained above is an excellent way to easily support a variety
	of printers by using a characterization file. The disadvantage is that new
	innovative technologies or unique vendor-specific features are not always
	supported by the universal driver. For this reason it is often a good idea to
	request a vendor-supplied NT Print driver to fully utilize the capabilities of a
	print device.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
