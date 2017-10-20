---
layout: page
title: "Q84042: Windows Err Msg: Cannot Run This Program..."
permalink: /kb/084/Q84042/
---

## Q84042: Windows Err Msg: Cannot Run This Program...

{% raw %}

	Article: Q84042
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start an application in Microsoft Windows 3.1 or try to run
	Windows Setup from within Windows, you receive the following error message:
	
	  Cannot run this program. The program or one of its components is compressed.
	  Expand the program files from your Windows setup disks.
	
	CAUSE
	=====
	
	You may have old or corrupt Windows .DLL or .MOD files are in your Windows
	directory.
	
	If this error occurs after you install Windows 3.1, it may be caused by a
	third-party display driver.
	
	You may also receive this error if you try to run an MS-DOS-based application in
	Windows, even though the application itself is not compressed; compressed
	Windows files are actually causing the problem.
	
	WORKAROUND
	==========
	
	Remove any Windows 3.0 .DLL or .MOD files from your Windows directory. For more
	information, see the "Windows 3.0 Files in Your Windows Directory" section
	below.
	
	If the problem is a third-party display driver, reset it to a generic Microsoft
	driver, such as VGA.
	
	If you receive this error while running an uncompressed MS-DOS-based application,
	determine if you have compressed Windows files as explained in the "Compressed
	Windows Files" discussion later in this article, then expand the files.
	
	MORE INFORMATION
	================
	
	Windows 3.0 Files in Your Windows Directory
	-------------------------------------------
	
	When you upgrade a Windows 3.0 installation to Windows 3.1, system .DLL files are
	replaced in the WINDOWS\SYSTEM directory. If there are duplicate system .DLL
	files in the Windows directory, they are not replaced or removed during the
	upgrade to Windows 3.1. Windows 3.1 Setup looks only in the WINDOWS\SYSTEM
	directory because that is where the system .DLL files are installed. If system
	.DLL files are in the Windows directory, they were copied or moved to that
	location manually.
	
	If Windows 3.0 versions of .DLL or .MOD files are in the Windows directory
	instead of (or in addition to) the Windows 3.1 versions in the WINDOWS\SYSTEM
	directory, you may experience a variety of problems.
	
	Creating a clean installation of Windows in a new directory can correct these
	problems; however, this is not a satisfactory solution because many
	Windows-based applications store critical settings in the WIN.INI file when they
	are installed. Many of these applications would need to be reinstalled if
	Windows 3.1 were installed into a new directory.
	
	The only way you can verify that you have the correct files is to check the file
	dates. The Windows 3.1 files are dated 3/10/92 or later. Windows 3.0 files are
	dated either 5/1/90 or 10/31/90.
	
	You can search for old Windows files by using the MS-DOS 5.0 DIR command in
	conjunction with the /O switch and its options. DIR /ON gives you a directory
	listing of files in the current directory listed alphabetically by name, and DIR
	/OD lists the files in the current directory by date. The following example
	lists all the .DLL files in the Windows and WINDOWS\SYSTEM directory on the
	printer instead of the screen:
	
	  dir c:\windows\*.dll > prn
	  dir c:\windows\system\*.dll > prn
	
	NOTE: Do not redirect files to PostScript printers using these commands. There
	should not be any .DLL or .MOD files in the Windows or WINDOWS\SYSTEM directory
	dated 5/1/90 or 10/31/90.
	
	Compressed Windows Files
	------------------------
	
	If you receive this error while trying to run an uncompressed MS-DOS- based
	application, you can determine if compressed Windows files are causing the
	problem by following these steps:
	
	1. From the File Manager File menu, choose Create Directory and create a new
	  directory in your root directory (for example, C:\TEST1).
	
	2. From the File menu, choose Run, type the following command, and press ENTER:
	
	  c:\windows\expand c:\windows\*.* c:\test1
	
	3. If the percentage increase is NOT zero, compressed files did exist. You can
	  copy these files back to the Windows directory.
	
	You should also try this technique in your WINDOWS\SYSTEM subdirectory. (If you
	copy the files back to the WINDOWS\SYSTEM subdirectory, make sure you don't copy
	the Windows directory files there also.)
	
	NOTE: When you run the EXPAND utility from inside Windows File Manager, the
	screen showing the percentage increase disappears very quickly. When you use the
	COPY command in File Manager, you may receive a number of error messages saying
	that Windows cannot copy this file because Windows is using it. This is not a
	problem because if Windows is using a file, it isn't compressed. It may be
	easier to run EXPAND and COPY from an MS-DOS command prompt outside Windows.
	(The only advantage to using Windows File Manager is that it doesn't abort the
	copy when it tries to copy a read-only file.)
	
	KBCategory: kbsetup kbdisplay kberrmsg kbtshoot
	KBSubcategory: win31
	
	Additional query words: 3.10 3.11 missing lzexpand.dll ver.dll win87em.dll S3 1.2 800X600 64K Colors 1M tshoot
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
