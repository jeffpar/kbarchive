---
layout: page
title: "Q72131: Installing Individual Windows 3.0 Resource Kit Utilities"
permalink: /kb/072/Q72131/
---

## Q72131: Installing Individual Windows 3.0 Resource Kit Utilities

{% raw %}

	Article: Q72131
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following are the steps to install an individual utility from the Microsoft
	Windows Resource Kit:
	
	1. Insert the Windows Resource Kit Disk 1 into your disk drive.
	
	2. Switch to your WINDOWS directory.
	
	3. Copy the appropriate program (for example, FISH.BAT) from the Windows
	  Resource Kit Disk 1 into your WINDOWS directory.
	
	4. Run the program (for example, FISH.BAT). Tell the program the location of
	  your WINDOWS directory (for example, C:\WINDOWS), your source drive (for
	  example, drive A), and your destination drive (for example, drive C). The
	  following is a sample command:
	
	  " fish c:\windows a: c: " (without the quotation marks)
	
	After the installation, the Setup program displays a message indicating that
	installation is complete.
	
	MORE INFORMATION
	================
	
	The following illustrates each utility's program name:
	
	  Utility                             Program Name
	  -------                             ------------
	
	  Windows 3.00 Fish                     FISH.BAT
	  Icon Tamer                            SHARE.BAT
	  Icon Draw                             SHARE.BAT
	  Icon Files                            SHARE.BAT
	  Microsoft Diagnostics                 SHARE.BAT
	  hDC Memory Viewer                     HDC.BAT
	  hDC Micro Manager                     HDC.BAT
	  hDC About Apps                        HDC.BAT
	  Productivity Pack for Windows         PRODPACK.BAT
	
	NOTE: FISH.BAT, SHARE.BAT, and HDC.BAT create a WRKIT subdirectory under the
	WINDOWS directory. PRODPACK.BAT creates a PPTMP subdirectory under the WINDOWS
	directory.
	
	Windows 3.0 Fish, Icon Tamer, Icon Draw and accompanying Icon Files, hDC Memory
	Viewer, hDC Micro Manager, and hDC About Apps are manufactured by vendors
	independent of Microsoft. We make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	REFERENCES
	==========
	
	Microsoft Windows Resource Kit, 1991. Pages 177-179.
	
	Additional query words: 3.00 win30 3rdparty wrk 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
