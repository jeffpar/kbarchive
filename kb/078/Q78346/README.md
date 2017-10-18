---
layout: page
title: "Q78346: Windows: Maximum Valid Size for REG.DAT and .INI Files"
permalink: kb/078/Q78346/
---

## Q78346: Windows: Maximum Valid Size for REG.DAT and .INI Files

	Article: Q78346
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The maximum valid size for a REG.DAT or .INI file is 64 kilobytes (K). In some
	instances, however, problems occur when these files are greater than 32K.
	
	MORE INFORMATION
	================
	
	If an application uses the standard Windows application program interface (API)
	calls to access the .INI files, the limit is 64K. Examples of these standard API
	calls are GetPrivateProfileString() and WritePrivateProfileString().
	
	If, for example, the WIN.INI file exceeds 64K, the information beyond 64K is
	ignored, and Windows may behave unpredictably--system configuration changes may
	not be implemented, fonts may be missing, printer information may be missing,
	and default information from applications may not be saved.
	
	If an application uses a SIGNED INT instead of an UNSIGNED INT to point to the
	file size, the size limit for these files is 32K. Some third-party applications
	may be unable to read .INI files, including the WIN.INI file, if they are larger
	than 32K.
	
	NOTE: Page 89 of the "Microsoft Windows Resource Kit" (WRK) for version 3.0
	incorrectly states that the maximum size of the WIN.INI file is 32K.
	
	
	SysEdit
	-------
	
	The Microsoft Windows SysEdit program provided with Windows cannot correctly edit
	a file larger than 30,000 bytes. If SysEdit does load a file larger than 30,000
	bytes, you can delete text, but you cannot type any text until you reduce the
	file size to 29,999 bytes or fewer.
	
	The largest file SysEdit can load is between 30,000 bytes and 53K, depending on
	your system. If you load a file large than 30,000 bytes, you may receive the
	following error message:
	
	  <Filename>
	  Cannot open this file.
	
	If the large file you are trying to open is the WIN.INI file, only part of it may
	load, and you may receive the following two error messages:
	
	  C:\CONFIG.SYS
	  Cannot open this file
	
	  C:\AUTOEXEC.BAT
	  Cannot open this file
	
	Additional query words: 3.00 3.00a 3.0 3.0a 3.10 3.1 3.11 documentation error docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
