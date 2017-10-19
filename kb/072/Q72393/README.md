---
layout: page
title: "Q72393: Installing All of the Windows Resource Kit Utilities"
permalink: /kb/072/Q72393/
---

## Q72393: Installing All of the Windows Resource Kit Utilities

	Article: Q72393
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To install all of Microsoft Windows Resource Kit utilities, follow the procedure
	in this article.
	
	NOTE: You must install the Windows Resource Kit outside of Windows.
	
	MORE INFORMATION
	================
	
	1. Insert Windows Resource Kit disk 1 into your floppy disk drive.
	
	2. From the MS-DOS prompt, switch to your Windows directory; for example, type
	
	  cd \windows
	
	3. Copy the KIT.BAT file from disk 1 to the Windows directory; for example,
	  type
	
	  copy kit.bat c:\windows
	
	4. To run KIT.BAT, specify your Windows directory, your source drive, and your
	  destination drive; for example, type:
	
	  kit c:\windows a: c:
	
	5. After the utilities are installed, the setup batch file installs the
	  Productivity Pack for Windows.
	
	6. After the Productivity Pack is installed, you can delete the PPTMP
	  subdirectory that has been created by the Productivity Pack setup batch file.
	
	The setup batch file installs these utilities into a WRKIT subdirectory under the
	Windows directory. The program loads into the Windows subdirectory, regardless
	of the drive and directory you specify as the destination drive. For example, if
	you specify E: as the destination drive the program loads into C:\WINDOWS.
	
	Microsoft has confirmed this to be a problem in The Windows Resource Kit. We are
	researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: 3.00 win30 3.00a WRK
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
