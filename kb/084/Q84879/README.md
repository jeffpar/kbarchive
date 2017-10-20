---
layout: page
title: "Q84879: NEC Silentwriter 95 Shows Apple LaserWriter in Print Setup"
permalink: /kb/084/Q84879/
---

## Q84879: NEC Silentwriter 95 Shows Apple LaserWriter in Print Setup

{% raw %}

	Article: Q84879
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After installing the NEC Silentwriter 95 printer driver for Microsoft Windows
	from the disks provided by NEC or from the files downloaded from the NEC
	Technologies bulletin board (BBS), the driver may not be accessible when you
	choose the Printers icon in the Windows Control Panel. Instead, when you select
	the NEC Silentwriter 95 and choose the Setup button, the Apple Laserwriter
	printer driver appears.
	
	CAUSE
	=====
	
	This problem is due to an error in the OEMSETUP.INF file provided with the NEC
	drivers.
	
	RESOLUTION
	==========
	
	NEC has corrected this problem. You can obtain updated printer driver files from
	NEC. Ask for the "Windows 3.1 Printers Support Disk."
	
	Alternatively, you can resolve the error in the OEMSETUP.INF file. The following
	information, obtained from the NEC Technologies BBS, describes how to correct
	the problem:
	
	1. Run Notepad.
	
	2. Insert your original PostScript Printer Support Kit disk into drive A (or B).
	
	3. From the Notepad File menu, choose Open.
	
	4. Type the filename
	
	  " A:\\OEMSETUP.INF" (without the quotation marks)
	
	  (type B instead of A if you are using drive B) and choose the OK button. The
	  file will appear in Notepad.
	
	5. Look for the line with "Silentwriter 95" and add the version "v2010.121"
	  (without the quotation marks) to the end of the printer's name. For example,
	  Silentwriter 95 should now read:
	
	  Silentwriter 95 v2010.121
	
	6. Save the file and quit Notepad.
	
	7. Run Control Panel and install the printer using the original instructions
	  within the PostScript Printer Support Kit.
	
	After installation, the correct printer dialog box appears when you select the
	Silentwriter 95.
	
	MORE INFORMATION
	================
	
	The NEC products included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	
	Additional query words: w4wprint wrong postscript 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
