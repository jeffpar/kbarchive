---
layout: page
title: "Q125698: HOWTO: Obtain Microsoft WinG SDK and General Overview of WinG"
permalink: /kb/125/Q125698/
---

## Q125698: HOWTO: Obtain Microsoft WinG SDK and General Overview of WinG

{% raw %}

	Article: Q125698
	Product(s): Miscellaneous Software Development Kits
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbfile kbProgramming
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft WinG API, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WinG provides an optimized library of graphics functions that allow programmers
	to use Device Independent Bitmaps (DIB) in many of the same ways they currently
	use Device Dependent Bitmaps (DDB). However, unlike DDBs, programmers are still
	able to directly access the bits in the image. This ability allows programmers
	to implement state of the art graphics algorithms on a Windows platform without
	sacrificing performance.
	
	MORE INFORMATION
	================
	
	Although business applications such as word processors and spreadsheets have
	moved from MS-DOS to Windows, MS-DOS remains the operating system of choice for
	high-volume, high-performance, action games and innovative graphics applications
	for PCs. These applications have not made the transition to Windows because of
	restrictions placed on the programmer by GDI device independence, by the
	windowed environment, and by the inability of general graphics libraries to
	provide the necessary speed.
	
	The display techniques used by high-performance graphics applications have two
	characteristics in common. First, the application hides the frame composition
	process by double buffering in software or hardware. Second, programmers use
	knowledge specific to the problem at hand to optimize their graphics routines in
	ways a general graphics library can't do.
	
	Hiding frame composition eliminates flicker by presenting only completed frames
	to the user. Under MS-DOS, a VGA card can accomplish the display in hardware by
	page flipping or the buffer can reside in main memory that is copied to the
	screen. Some applications further optimize display access by copying only the
	areas of the buffer that have changed since the last frame, a process called
	dirty rectangle animation. Today, high-performance MS-DOS games use all of these
	techniques.
	
	In short, most MS-DOS games programmers use knowledge specific to their
	application and their hardware to write optimized graphics routines. Until now,
	Windows programmers could not use such methods because GDI prevents access to
	device-specific surfaces, so programmers cannot draw directly onto the surface
	of a GDI device context.
	
	WinG (pronounced "Win Gee") is an optimized library designed to enable these
	high-performance graphics techniques under Windows version 3.x, Win32s, Windows
	NT version 3.5, Windows 95, and future Windows releases.
	
	WinG allows the programmer to create a GDI-compatible HBITMAP with a Device
	Independent Bitmap (DIB) as the drawing surface. Programmers can use GDI or
	their own code to draw onto this bitmap, then use WinG to transfer it quickly to
	the screen. WinG also provides halftoning APIs that use the standard Microsoft
	halftone palette to support simulation of true color on palette devices.
	
	How to Obtain the Microsoft WinG SDK
	------------------------------------
	
	WinG is not included as a part of Windows version 3.1, Windows 95, or Windows NT.
	In order to run applications that use WinG, you will either have to install it
	yourself (see below) or rely on a third-party application that uses WinG to
	install it as part of its setup process.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Wing10.exe
	  (http://download.microsoft.com/download/platformsdk/wing/1/WIN98/EN-US/Wing10.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	This file contains the version 1.0 release of the WinG graphics libraries. Unzip
	the file into a temporary directory, and then run SETUP.EXE. The setup program
	will create a program group with icons for the samples and the WinG help file.
	
	NOTE: Setup will also install a file called README.TXT that contains information
	on known bugs and limitations. For more up to date information on known problems
	or conflicts with WinG, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q124741 BUG: WinG 1.0 Bug List
	
	Please report bugs to this Internet email address:
	
	  wingbug@microsoft.com
	
	Additional query words: WING GDI GAMES MOM APPLE PIE DENNYS
	
	======================================================================
	Keywords          : kbfile kbProgramming 
	Technology        : _IKkbbogus kbWinGAPI kbWinGSearch
	Version           : :1.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
