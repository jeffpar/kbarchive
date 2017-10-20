---
layout: page
title: "Q154305: Explorapedia Nature: List of Files Installed and Modified"
permalink: /kb/154/Q154305/
---

## Q154305: Explorapedia Nature: List of Files Installed and Modified

{% raw %}

	Article: Q154305
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Explorapedia series: World of Nature for Windows, versions 1.0, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following files and folders are created and/or installed onto the hard drive
	during installation of Explorapedia World of Nature:
	
	Directory of C:\MSKIDS
	
	.              <DIR>        06-28-96  9:31p
	..             <DIR>        06-28-96  9:31p
	USERS          <DIR>        06-28-96  9:31p
	SHARED         <DIR>        06-28-96  9:31p
	EXPLORA        <DIR>        06-28-96  9:31p
	NATURE   TXT             0  06-29-96  8:50p
	        1 file(s)              0 bytes
	
	Directory of C:\MSKIDS\EXPLORA
	
	.              <DIR>        06-28-96  9:31p
	..             <DIR>        06-28-96  9:31p
	NATURE   EXE        49,232  11-20-94  1:00a
	NATURE   MEN         8,630  11-20-94  1:00a
	NATURE   LST       103,770  11-20-94  1:00a
	NATURE   MDF        26,044  11-20-94  1:00a
	NATURE   TBL         2,421  11-20-94  1:00a
	NATURE   TDF       391,680  11-20-94  1:00a
	NATURE   TOP         1,664  11-20-94  1:00a
	NATURE   DLL       302,912  11-20-94  1:00a
	EXPLORA  DLL     1,677,024  11-20-94  1:00a
	MSPAM    DLL       343,040  11-20-94  1:00a
	MSPAM    REG         9,149  11-20-94  1:00a
	NATURE   INI         1,153  06-28-96  8:55p
	README   WRI        24,448  11-20-94  1:00a
	       13 file(s)      2,941,167 bytes
	
	Directory of C:\MSKIDS\SHARED
	
	.              <DIR>        06-28-96  9:31p
	..             <DIR>        06-28-96  9:31p
	USERS          <DIR>        06-28-96  9:31p
	STUFF          <DIR>        06-28-96  9:31p
	        0 file(s)              0 bytes
	
	Directory of C:\MSKIDS\SHARED\STUFF
	
	.              <DIR>        06-28-96  9:31p
	..             <DIR>        06-28-96  9:31p
	KIDSCAT  EXE        11,264  09-12-94  1:00a
	        1 file(s)         11,264 bytes
	
	Directory of C:\MSKIDS\SHARED\USERS
	
	.              <DIR>        06-28-96  9:31p
	..             <DIR>        06-28-96  9:31p
	        0 file(s)              0 bytes
	
	Directory of C:\MSKIDS\USERS
	
	.              <DIR>        06-28-96  9:31p
	..             <DIR>        06-28-96  9:31p
	        0 file(s)              0 bytes
	
	Total files listed:
	       15 file(s)      2,952,431 bytes
	       17 dir(s)      70,975,488 bytes free
	
	In addition, the following files are installed into the \WINDOWS
	and \WINDOWS\SYSTEM directories, and the noted files are
	modified:
	
	C:\WINDOWS\EXPLORA.INI
	
	C:\WINDOWS\SYSTEM\ARIALN.TTF
	C:\WINDOWS\SYSTEM\ACMCMPRS.DLL
	C:\WINDOWS\SYSTEM\DVA.386
	C:\WINDOWS\SYSTEM\DCISVGA.DRV
	C:\WINDOWS\SYSTEM\MEDV12.DLL
	C:\WINDOWS\SYSTEM\MVFS12.DLL
	C:\WINDOWS\SYSTEM\MVBRKR12.DLL
	C:\WINDOWS\SYSTEM\MVSRCH12.DLL
	C:\WINDOWS\SYSTEM\MVTTL12.DLL
	C:\WINDOWS\SYSTEM\IMAADPCM.ACM
	C:\WINDOWS\SYSTEM\MAP_WIN.HLP
	C:\WINDOWS\SYSTEM\MSADPCM.ACM
	C:\WINDOWS\SYSTEM\ICCVID.DRV
	C:\WINDOWS\SYSTEM\IR21_R.DLL
	C:\WINDOWS\SYSTEM\IR32.DLL
	C:\WINDOWS\SYSTEM\MSRLE.DRV
	C:\WINDOWS\SYSTEM\MSVIDC.DRV
	C:\WINDOWS\SYSTEM\WING.DLL
	C:\WINDOWS\SYSTEM\WINGDE.DLL
	C:\WINDOWS\SYSTEM\WINGDIB.DRV
	C:\WINDOWS\SYSTEM\WINGPAL.WND
	C:\WINDOWS\SYSTEM\ARIALN.FOT
	
	*** ADDITIONS TO WIN.INI ***
	
	[fonts]
	Arial Narrow (TrueType)=ARIALN.FOT
	
	[Microsoft Kids Catalog]
	CatalogNum=2
	Path=D:\KIDSCAT\ 
	ParentCD=The World of Nature
	
	[DrawDib]
	pnpdrvr.drv 1024x768x8(0)=55,0,0,0
	
	*** SECTIONS ADDED OR CHANGED IN SYSTEM.INI ***
	
	[drivers]
	MSACM.imaadpcm=imaadpcm.acm
	MSACM.msadpcm=msadpcm.acm
	VIDC.IV32=ir32.dll
	VIDC.IV31=ir32.dll
	VIDC.MRLE=msrle.drv
	VIDC.RT21=ir21_r.dll
	VIDC.YVU9=ir21_r.dll
	VIDC.MSVC=msvidc.drv
	
	*** SECTIONS ADDED TO THE REGISTRY ***
	
	HKEY_CLASSES_ROOT\MSPAMArena
	HKEY_CLASSES_ROOT\MSPAMSpriteElement
	HKEY_CLASSES_ROOT\MSPAMTimeEvent
	HKEY_CLASSES_ROOT\MSPAMOutputBuffer
	HKEY_CLASSES_ROOT\MSPAMMediaObjectManager
	HKEY_CLASSES_ROOT\MSPAMPibList
	HKEY_CLASSES_ROOT\MSPAMTransEffPib
	HKEY_CLASSES_ROOT\MSPAMVideo
	HKEY_CLASSES_ROOT\MSPAMActMan
	HKEY_CLASSES_ROOT\MSPAMSound
	HKEY_CLASSES_ROOT\MSPAMTransEffPal
	HKEY_CLASSES_ROOT\MSPAMPalette
	HKEY_CLASSES_ROOT\MSPAMPibMD
	HKEY_CLASSES_ROOT\MSPAMPibListMD
	HKEY_CLASSES_ROOT\MSPAMPaletteMD
	HKEY_CLASSES_ROOT\MSPAMTransEffCumPib
	HKEY_CLASSES_ROOT\MSPAMExploraNatureTitle
	
	Additional query words: kids mskids kbmm multimedia multi-media multi media file files directory directories setup install installed folder folders homekid xplora tad
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbZNotKeyword2 kbExplorapediaNature100 kbExplorapediaNature120
	Version           : WINDOWS:1.0,1.2
	
	=============================================================================
	

{% endraw %}
