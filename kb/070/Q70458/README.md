---
layout: page
title: "Q70458: Err Msg: Missing &#42;.GRB File with Genoa Graphics"
permalink: /kb/070/Q70458/
---

## Q70458: Err Msg: Missing &#42;.GRB File with Genoa Graphics

	Article: Q70458
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows 3.0 may display the error message "Missing *.GRB file" or may
	not be able to run in the 386 enhanced mode if the Genoa 6000 series VGA drivers
	are not installed correctly.
	
	RESOLUTION
	==========
	
	Use the following procedures to install the Genoa 6000 series graphic video
	drivers:
	
	1. Copy all files from the Genoa drivers disk WIN30 directory to the directory
	  where Windows resides on your hard disk.
	
	2. From the Main Group, select the Windows Setup icon.
	
	3. Select the Options Title.
	
	4. Select Change System Settings.
	
	5. Select the Display line, and choose the correct Genoa driver.
	
	6. Add the following line to the SYSTEM.INI file under the [386Enh] section to
	  exclude Windows from using the C600-C7FF address in the adapter segment:
	
	  EMMEXCLUDE=C600-C7FF
	
	MORE INFORMATION
	================
	
	The Genoa 6000 series graphics cards are VGA graphic cards that also provide
	1024 x 768 16-color resolution. These drivers support the following video
	display resolutions:
	
	  640 x 480  16-color  Windows version 3.00 supplied VGA.DRV
	  800 x 600  16-color  G640256.DRV
	  1024 x 768 16-color  GVGA1K.DRV
	  640 x 480  256-color GVGA86.DRV
	
	Drivers can be downloaded from Genoa's bulletin board service (BBS). Download the
	file 34WIN3.EXE. This is a self-extracting archive file.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.00 win30 3rdparty windrvr 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
