---
layout: page
title: "Q101044: Comprehensive List of WRK for Version 3.0 Doc Errors"
permalink: kb/101/Q101044/
---

## Q101044: Comprehensive List of WRK for Version 3.0 Doc Errors

	Article: Q101044
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a comprehensive list of documentation errors in the
	Microsoft Windows Resource for version 3.0. This article covers:
	
	- WRK Incorrectly Describes Maximizing Memory for MS-DOS Applications
	
	- Displaying SEA.BMP Bitmap Shipped with Windows Resource Kit
	
	- Windows Resource Kit Displays File Manager Incorrectly
	
	- WRK Says SETUP/P Instead of SETUP /P
	
	- No Current Application Note for SMARTDrive Available
	
	- Windows: Maximum Valid Size for .INI files
	
	- Windows Resource Kit: PIF.INF Does Not Exist
	
	- Redirecting One Parallel Port to Another
	
	WRK Incorrectly Describes Maximizing Memory for MS-DOS Applications
	-------------------------------------------------------------------
	
	On page 115 of the "Microsoft Windows Resource Kit" (WRK) guide, the steps that
	explain how to free up memory for MS-DOS-based applications apply to
	Windows-based applications, not to MS-DOS-based applications.
	
	To increase the amount of memory available for an MS-DOS-based application, clear
	any terminate-and-stay-resident (TSR) programs, unneeded drivers, and so on.
	(Eliminate all programs and drivers that use and keep conventional memory before
	Windows loads.)
	
	This information does not apply to later versions of Windows.
	
	Displaying SEA.BMP Bitmap Shipped with Windows Resource Kit
	-----------------------------------------------------------
	
	The SEA.BMP file is a bitmap that comes with the Windows Resource Kit (WRK) when
	you install the Windows 3.0 Fish program. Page 181 of the "Microsoft Windows
	Resource Kit" guide shows how to set up the Windows 3.0 Fish program. However,
	step 13 simply states
	
	    13. SEA.BMP
	
	with no reference explaining how to display it as a bitmap for Windows.
	
	To display the SEA.BMP as wallpaper, refer to pages 155-156 in the "Microsoft
	Windows User's Guide" for version 3.0. Also, the SEA.BMP is displayed in the
	background example on page 181 of the "Windows Resource Kit" guide.
	
	Windows Resource Kit Displays File Manager Incorrectly
	------------------------------------------------------
	
	Page 184 of the "Microsoft Windows Resource Kit" incorrectly displays a File
	Manager screen with open folders and split screen display. Windows 3.0 File
	Manager cannot do this. This is a feature of Windows 3.1 File Manager.
	
	WRK Says SETUP/P Instead of SETUP /P
	------------------------------------
	
	In the "Reconstructing Main Accessories and Games Groups" section on page 172 of
	the "Microsoft Windows Resource Kit" (WRK) guide for Windows 3.0, the following
	message is discussed:
	
	  Group file XXXX.GRP is invalid or damaged; reconstruct the group
	
	In the next section, "Reconstruction Process," it incorrectly states that the
	command to rebuild the Main, Accessories, and Games groups is "SETUP/P" (without
	the quotation marks). The correct command is:
	
	  SETUP /P
	
	There must be a space after the word "SETUP" or the command will be
	unsuccessful.
	
	No Current Application Note for SMARTDrive Available
	----------------------------------------------------
	
	On page 103 of the "Microsoft Windows Resource Kit" (WRK) guide for Windows 3.0,
	under the "Configuring Windows 3.0" section, there is a documentation error
	referencing the "SMARTDrive Technical Data Application Note" available from
	Microsoft Product Support Services.
	
	The application note described here is a reference to an old Application Note for
	Windows versions 2.x. This Application Note is no longer available.
	
	The most current information about SMARTDRV.SYS is in the "Microsoft Windows
	User's Guide" for version 3.0, on pages 530-535 and 587-590.
	
	Windows: Maximum Valid Size for .INI files
	------------------------------------------
	
	Page 89 of the "Microsoft Windows Resource Kit" (WRK) guide incorrectly states
	that the maximum size of the WIN.INI file is 32K.
	
	The maximum valid size for .INI files is 64K. If the WIN.INI file exceeds 64K,
	the additional information will be ignored. This can result in Windows behaving
	unpredictably (for example, system configuration changes may not be implemented,
	fonts may be missing, printer information may be missing, and default
	information from applications may not be saved).
	
	Some third-party applications may be unable to read .INI files, including the
	WIN.INI file, if the INI files are larger than 32K.
	
	
	Windows Resource Kit: PIF.INF Does Not Exist
	--------------------------------------------
	
	Pages 108 and 109 of "The Microsoft Windows Resource Kit" for version 3.0
	incorrectly states that the Windows 3.0 Setup program uses a file called PIF.INF
	when setting up MS-DOS-based applications. The Setup program actually uses the
	SETUP.INF file. Windows 3.0 does not contain a file called PIF.INF.
	
	Redirecting One Parallel Port to Another
	----------------------------------------
	
	The "Microsoft Windows Resource Kit" (WRK) guides for Windows version 3.0 provide
	erroneous examples of the MS-DOS MODE redirector command. Page 98 (or page 108
	for the guide without the Windows Resource Kit update) for Windows 3.0 state the
	following:
	
	  ...if you have a physical LPT1, but not an LPT3, and you execute MODE
	  LPT3=LPT1, output sent to LPT3 will be redirected to LPT1.
	
	The MS-DOS MODE command can be used to redirect output from a parallel port to a
	serial communications port, but not to another parallel port. The following is
	an example of a valid command:
	
	  MODE LPT1=COM1
	
	Redirecting output to a parallel port generates the following error message:
	
	  Invalid Parameter - =LPTx
	
	A redirection of COM1 to LPT1 requires the use of a special buffer for which the
	MODE command would have to allocate space. The MS-DOS MODE command does not have
	this capability.
	
	For more information on port redirection, query on the following words in the
	Microsoft Knowledge Base:
	
	  mode and redirect and port
	
	Additional query words: appnote 3.00 3.0 3.0a 3.00a documentation error docerr doc err picture display WRK WRKIT 1.00 comprehensive
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
