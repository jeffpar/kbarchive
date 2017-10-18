---
layout: page
title: "Q131835: JULIA CHILD: MSETUP.TXT Contents"
permalink: kb/131/Q131835/
---

## Q131835: JULIA CHILD: MSETUP.TXT Contents

	Article: Q131835
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Julia Child: Home Cooking with Master Chefs for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article is the contents of the MSETUP.TXT file from the Julia
	Child CD-ROM in the D:\AAMSSTP\MANUAL subdirectory (where D: is your CD-ROM
	drive).
	
	MORE INFORMATION
	================
	
	MSETUP.TXT file Contents:
	
	Add the following lines to the [386Enh] section of system.ini in your Windows
	directory ONLY if they haven't been previously defined:
	
	     device=dva.386
	     device=vshare.386
	
	Modify the following lines to the [Options] section of msjulia.ini in your
	Windows directory:
	
	Note: <CD> should be replaced with the letter of your CD drive.
	
	     BookDirectory=<CD>:\msjulia\ 
	     CodeDirectory=<destination path>\ 
	     DataDirectory=<destination path>\ 
	     MediaDirectory=<CD>:\msjulia\video\ 
	
	Note: <destination path> is the first parameter you specified when running
	pss.bat.
	
	Add the following line to the [mci] section of system.ini in your Windows
	directory:
	
	     AVIVideo=mciavi.drv
	
	Add the following line to the [mci extensions] section of win.ini in your Windows
	directory:
	
	     avi=AVIVideo
	
	Add the following lines to the [Drivers] section of system.ini in your Windows
	directory:
	
	     MSACM.msadpcm=msadpcm.acm
	     MSACM.imaadpcm=imaadpcm.acm
	     VIDC.IV31=ir32.dll
	     VIDC.IV32=ir32.dll
	     VIDC.MSVC=msvidc.drv
	     VIDC.CVID=iccvid.drv
	     VIDC.MRLE=msrle.drv
	
	Add the following lines to the [drivers.desc] section of control.ini in your
	Windows directory:
	
	     msacm.drv=Microsoft Sound Mapper V2.00
	     msadpcm.acm=Microsoft ADPCM Codec V2.00
	     imaadpcm.acm=Microsoft IMA ADPCM Codec V2.00
	
	>From the Program Manager File New menu option select Program Item and enter
	the following information in fields listed in the Program Item Properties dialog
	box:
	
	  Description:       Julia Child Read Me
	  Command:           write <destination path>\readme.wri
	  Working Directory: c:\msjulia
	
	  Description:       Julia Child
	  Command:           <destination path>\msjulia.exe
	                     <CD>:\msjulia\msjulia.m13
	  Working Directory: <destination path>
	
	Note: <CD> should be replaced with the letter of your CD drive.
	
	<destination path> is the first parameter you specified when running
	pss.bat.
	
	Additional query words: kbhowto 1995 txt help french chef mmtitles
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword kbJuliaChild
	Version           : WINDOWS:1.0
	
	=============================================================================
	
