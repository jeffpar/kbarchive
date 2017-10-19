---
layout: page
title: "Q84965: LANtastic Err Msg: Program Requires Newer Version of Windows"
permalink: /kb/084/Q84965/
---

## Q84965: LANtastic Err Msg: Program Requires Newer Version of Windows

	Article: Q84965
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the LANtastic for Windows Starter Kit is installed under Microsoft Windows
	using the automatic installation program, WININSTALL, the following error
	message appears:
	
	  This program requires a newer version of Windows.
	
	This message is incorrect. The LANtastic for Windows Starter Kit is compatible
	with Windows 3.0, 3.0a, 3.1, and 3.11 but it must be installed manually.
	
	MORE INFORMATION
	================
	
	The manual installation procedure for the LANtastic for Windows Starter Kit is
	as follows:
	
	1. First, make sure EXPAND.EXE is in the WINDOWS directory. If not, copy it from
	  Disk 2 of the Windows setup disks.
	
	2. Quit Windows, if it is running.
	
	3. Insert the LANtastic for Windows disk in drive A (or B).
	
	4. Use the Expand utility to expand all the files on the LANtastic disk to the
	  C:\LANTASTI directory. To do this, type the following at the MS-DOS command
	  prompt:
	
	  expand a:*.* c:\lantasti
	
	5. Open the WIN.INI file in a text editor, such as Notepad, and add the
	  following lines:
	
	        WIN.INI
	        [Windows]
	        Load=C:\LANTASTI\WNET.EXE
	
	6. Open the SYSTEM.INI file in a text editor, such as Notepad, and add the
	  following lines:
	
	        SYSTEM.INI
	        [boot]
	        Network.drv=C:\lantasti\lantnet.drv
	
	        [386enh]
	        Network=C:\lantasti\lantasti.386, *vnetbios
	
	  If the following lines do not exist, add them as well:
	
	        EmmExclude=D800-DFFF
	        PerVMFiles=0
	        NetHeapSize=64
	        NetAsynchFallback=True
	        NetAsynchTimeout=5.0
	
	7. Start Windows.
	
	8. Manually install the LANtastic Starter Kit, as follows:
	
	  a. Choose the Windows Setup icon in the Main group in Program Manager.
	
	  b. From the Options menu, choose Setup Applications.
	
	  c. Select the Search For Applications option button and choose the OK button.
	
	  d. In the Setup Will Search box, select C:(Local Drive), and choose the
	     Search Now button.
	
	  e. In the Applications Found On Hard Disk(s) box, select LANtastic Net and
	     LANtastic Network Manager.
	
	  f. Choose the Add button, then choose the OK button.
	
	     Windows will add the LANtastic programs to the Windows Applications group.
	
	LANtastic for Windows is manufactured by Artisoft, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.00 3.00a 3.10 3.11 err msg 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
