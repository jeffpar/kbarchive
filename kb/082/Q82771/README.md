---
layout: page
title: "Q82771: Windows 3.1 Setup Error Codes (S208 through S214)"
permalink: kb/082/Q82771/
---

## Q82771: Windows 3.1 Setup Error Codes (S208 through S214)

	Article: Q82771
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbsetup kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Setup error message contains an error code, it also includes some text
	indicating what Setup was trying to do, for example, copying a file. The text of
	the error message indicates whether the error is fatal or not. In some nonfatal
	cases, Setup may be performing an operation (such as copying a file) that is
	needed to run Microsoft Windows. Other times the error may prevent some specific
	feature of Windows from operating properly.
	
	In many cases, the error code is an MS-DOS extended error code. These error codes
	are between 0 and 100. Setup-specific error codes have two different formats,
	depending on whether the error occurs during the character (MS- DOS) mode or the
	Windows graphical user interface (GUI) mode portion of Setup. The character mode
	Setup-specific error numbers are in the format "Snnn", where "nnn" is any
	three-digit number. The GUI mode error numbers are codes greater than 200.
	
	MORE INFORMATION
	================
	
	GUI Mode Setup Error Codes
	--------------------------
	
	208
	
	  Out of disk space during file copy in VerInstallFile. Because of the disk
	  space checks that Setup does, this problem should occur only if you have
	  upgraded over an invalid Windows installation (that is, files have been
	  deleted manually). Make sure there is enough disk space and then run Setup
	  again. Also make sure that VER.DLL does not exist in the WINDOWS directory.
	  It should only be in the WINDOWS\SYSTEM directory.
	
	209
	
	  File in use. This error occurs if some file that needs to be replaced by
	  Setup is in use or opened by another some other software. Make sure Setup is
	  the only application running or exit Windows and run Setup from the MS-DOS
	  prompt.
	
	210
	
	  Destination file is write-protected. Type
	
	  ATTRIB -r <filename>
	
	  at the MS-DOS prompt, where <filename> is the indicated file and run
	  Setup again. This problem may also be caused by virus- protection software,
	  in which case, this software should be disabled while running Setup.
	
	211
	
	  Buffers allocated for file expansion operations are too small. This error
	  should never occur. If it does, free up some memory and run Setup again.
	
	212
	
	  Unknown version mismatch happened during attempt to install file. This
	  problem can be caused by the incorrect version of VER.DLL running or by
	  corrupt files. Make sure you do not have VER.DLL in your WINDOWS directory.
	  It should only be in the WINDOWS\SYSTEM directory.
	
	213
	
	  File expansion initialization failed. This problem is probably due to
	  insufficient memory.
	
	214
	
	  Source file is unreadable. This problem is probably due to drive hardware
	  problems, corrupt files or disks, or, if you are setting up from a network,
	  network problems. Setup error 214 can also be caused by incorrect CMOS
	  settings for floppy drives or third party extended memory managers.
	
	
	Additional query words: 3.10 3.11 qemm winfest
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
