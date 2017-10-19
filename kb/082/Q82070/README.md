---
layout: page
title: "Q82070: VideoShow Support with Windows"
permalink: /kb/082/Q82070/
---

## Q82070: VideoShow Support with Windows

	Article: Q82070
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Windows driver is available from General Parametrics technical support for the
	VideoShow device. To obtain this driver, contact your dealer or General
	Parametrics.
	
	MORE INFORMATION
	================
	
	VideoShow is an apparatus for graphical presentations that works with a
	graphical output application, such as Microsoft PowerPoint, Lotus Freelance, and
	so on. The driver, supplied by General Parametrics, converts the output of the
	application into a format usable by VideoShow.
	
	Installation of the driver requires manual additions to the [Ports] section of
	the WIN.INI file. These additions are listed in a text file accompanying the
	driver and are given below:
	
	  [Ports]
	  HSL:=
	  SCSI:=
	
	The device driver VSPRINT.DRV is installed as an unlisted printer using the
	Control Panel. After installation of this driver, the following section is
	created in the WIN.INI file:
	
	     [WWFilters]
	     Video Show Import=VIDMPORT.FLT,PIC
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: Video Show 3.0 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
