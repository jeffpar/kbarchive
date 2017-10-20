---
layout: page
title: "Q151773: Flight Simulator: ATI MACH 64 SVGA Option May Not Work"
permalink: /kb/151/Q151773/
---

## Q151773: Flight Simulator: ATI MACH 64 SVGA Option May Not Work

{% raw %}

	Article: Q151773
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.1
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay
	Last Modified: 07-MAY-2002
	
	5.10
	MS-DOS
	kbdisplay kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Flight Simulator 5.1 and select any SVGA mode, only the top 1/4 of
	the screen appears and the graphics overlap. It looks like the screen is divided
	into four horizontal sections and they have been moved to overlap in the first
	horizontal section.
	
	CAUSE
	=====
	
	This problem occurs when you choose any SVGA mode and select the ATI Mach 64 or
	VESA 1.2 Compatible as the adapter when you are using a newer ATI MACH 64 video
	card.
	
	RESOLUTION
	==========
	
	To correct the problem:
	
	1. Run the ATI supplied VESA BIOS extensions with the following switches in your
	  Autoexec.bat file
	
	  c:\<directory name>\m64vbe.com s acc
	
	  where <directory name> is the directory where the M64vbe.com file is
	  installed.
	
	2. Select VESA 1.2 Compatible as the adapter type in Flight Simulator.
	
	The M64vbe.com file comes with the card, or it can be downloaded from ATI. To
	download the file from ATI's web page:
	
	1. Using your Internet browser, connect to ATI's web page at
	
	  http://www.atitech.ca.
	
	  Once you are connected, choose the Current Drivers option.
	
	2. At the top of the Current Drivers page, choose the connection to ATI's FTP
	  site, FTP: ftp.atitech.ca.
	
	3. Choose the Utility directory. Download 64vbe101.zip, which contains the
	  M64vbe.com file, by double-clicking the file name 64vbe101.zip and following
	  the instructions that appear on your screen.
	
	To choose the adapter type in Flight Simulator 5.1:
	
	1. From the Options menu, click Preferences.
	
	2. Click Display.
	
	3. Click the down arrow next to VGA Board Model.
	
	MORE INFORMATION
	================
	
	This problem is known to occur on newer ATI Mach 64 cards that use the 264CT
	chipset, which is a brand new card. It does not occur on original chipsets. All
	graphics Xpression Mach 64 cards being distributed by ATI include the new 264CT
	chipset.
	
	To determine which chipset the card is using:
	
	1. If your are running Windows, exit to MS-DOS.
	
	2. Change to the directory where your MACH 64 drivers are installed, by typing
	  "cd <directory name>" (without the quotation marks), where
	  <directory name> is the directory where the MACH 64 drivers are
	  installed.
	
	3. Run Install.exe.
	
	4. Under System Information for the Controller type, look for CT in the
	  description.
	
	For more information, contact ATI technical support:
	
	  User Support: (905) 882-2626
	  FAX: (905) 882-2620
	  BBS: (905) 764-9404
	  WWW: www.atitech.ca
	
	Additional query words: 5.10 flightsim fltsim d_fltsim Mach64 ATI screen distorted
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim510DOS kbSimSearch
	Version           : MS-DOS:5.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
