---
layout: page
title: "Q124414: Video Problems in Grolier 6.0 After Installing VFW 1.1."
permalink: /kb/124/Q124414/
---

## Q124414: Video Problems in Grolier 6.0 After Installing VFW 1.1.

{% raw %}

	Article: Q124414
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0,1.0a,2.0; :1.0,1994 edition,1994-1995 edition,1995 edition,1995-1996 editio
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft 500 Nations, version 1.0, on platform(s):
	   - the operating system: Microsoft Windows NT, on platform(s):
	      - the operating system: Microsoft Windows 
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft Bookshelf for Windows versions 1994 edition, 1995 edition 
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Cinemania for Windows 1995 edition 
	- Microsoft Complete Baseball for Windows, version 1994 edition 
	- Microsoft Complete Baseball Guide for Windows, 1995 edition 
	- Microsoft Complete NBA Basketball for Windows versions 1994-1995 edition, 1995-1996 edition 
	- Microsoft Dangerous Creatures for Windows, version 1.0 
	- Microsoft Dogs for Windows, version 1.0 
	- Microsoft Encarta for Windows 1995 edition 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Isaac Asimov's The Ultimate Robot for Windows, version 1.0 
	- Microsoft Julia Child: Home Cooking with Master Chefs for Windows, version 1.0 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Strauss for Windows, version 1.0 
	- Microsoft Oceans for Windows, version 1.0 
	- Microsoft Wine Guide for Windows, versions 1.0, 1.0a, 2.0 
	- Microsoft World of Flight for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install one or more of the Microsoft multimedia titles listed above,
	the video clips in the Grolier New Multimedia Encyclopedia version 6.0 may not
	work correctly. The video clips may be black or distorted. Also, the multimedia
	maps and animations may be split into sections that do not align properly. No
	error messages are generated when these problems occur.
	
	RESOLUTION
	==========
	
	There are two ways to correct this problem:
	
	- Contact your hardware manufacturer to update your computer's video display
	  driver.
	
	  -or-
	
	- Revert to the version of Video for Windows used by Grolier. Consult the
	  Grolier User's Guide for information about how to do this. Make sure to
	  select the option to install Video for Windows.
	
	MORE INFORMATION
	================
	
	The Grolier New Multimedia Encyclopedia 6.0 installs Microsoft Video for Windows
	version 1.0. The Microsoft multimedia titles listed above install version 1.1 of
	Video for Windows. Some video display drivers may have problems displaying
	graphic images using Video for Windows 1.1. The best solution to this problem is
	to install an updated or alternative display driver. Updated display drivers
	should be available from your hardware manufacturer. For testing purposes, you
	can use the standard VGA video display driver.
	
	An alternative resolution is to delete the following Video for Windows 1.1 files
	installed by any of the Microsoft multimedia titles listed above, and then to
	reinstall the Video for Windows 1.0 files by reinstalling Grolier New Multimedia
	Encyclopedia 6.0:
	
	The following files are located in the Windows\System folder:
	
	  Mciavi.drv
	  Msvidc.drv
	  Msvideo.dll
	  Dispdib.dll
	
	Search your hard drive for duplicates of these files. There should be only one
	copy of each.
	
	NOTE: Do not delete these files if you are running Windows 95, which uses newer
	versions of these files. Update the display driver if you encounter this problem
	on Windows 95.
	
	For more information about this problem, please contact Grolier Electronic
	Publishing Technical Support at (800) 356-5590.
	
	The Grolier New Multimedia Encyclopedia is manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: msn_bookshelf 1994 multi media multimedia multi- mmtitles
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch
	Version           : WINDOWS:1.0,1.0a,2.0; :1.0,1994 edition,1994-1995 edition,1995 edition,1995-1996 edition
	
	=============================================================================
	

{% endraw %}
