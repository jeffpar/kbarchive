---
layout: page
title: "Q92758: Setup: Files and Directories Changed During Installation"
permalink: kb/092/Q92758/
---

## Q92758: Setup: Files and Directories Changed During Installation

	Article: Q92758
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Installing version 1.0 of Microsoft Video for Windows makes additions and
	modifications to the Windows and the Windows System directories as well as the
	WIN.INI, SYSTEM.INI, CONTROL.INI, PROGMAN.INI, REG.DAT, and ACCESSO0.GRP files.
	In addition, it creates a new directory, WINVIDEO, which contains a subdirectory
	called INCLUDE. The following is a listing of all files either added or changed
	during the installation of Microsoft Video for Windows 1.0.
	
	MORE INFORMATION
	================
	
	The following files are added to the WINDOWS directory during the installation
	of Microsoft Video for Windows 1.0:
	
	  MBROWSER.EXE
	  MBRWSER.HLP
	  MCIOLE.DLL
	  MULTIMED.GRP
	  MBROWSER.INI
	  MPLAYER.REG
	  VIDEOFOR.GRP
	
	The following files are replaced in the WINDOWS directory during the installation
	of Microsoft Video for Windows 1.0:
	
	  MPLAYER.EXE
	  MPLAYER.HLP
	
	The following files are added to the Windows SYSTEM directory during the
	installation of Microsoft Video for Windows 1.0:
	
	  MCIAVI.DRV
	  INDEO.DRV
	  MSVIDC.DRV
	  DIB.DRV
	  DISPDIB.DLL
	  MSVIDEO.DLL
	  MEDIAMAN.DLL
	  WINCOM.DLL
	  WRKBENCH.DLL
	  MEDBITS.MMH
	  MEDDIBS.MMH
	  MEDIMP.MMH
	  MEDWAVE.MMH
	  FUNCLIP.BMP
	  VIDCLIP.BMP
	  INDEO.HLP
	  DIGITALV.MCI
	
	The following files are added to the WINVIDEO directory during the installation
	of Microsoft Video for Windows 1.0, when you choose to install all of the
	components:
	
	  VIDEDIT.EXE
	  VIDCAP.EXE
	  BITEDIT.EXE
	  PALEDIT.EXE
	  WAVEEDIT.EXE
	  VIDEDIT.HLP
	  VIDCAP.HLP
	  BITEDIT.HLP
	  PALEDIT.HLP
	  WAVEEDIT.HLP
	  VFW1.WRI
	
	The following file is added to the WINVIDEO directory during the installation of
	Microsoft Video for Windows 1.0 if you choose to install the optional sample AVI
	file :
	
	  WINDSURF1.AVI
	
	The following files are added to the INCLUDE directory during the installation of
	Microsoft Video for Windows 1.0:
	
	  DIGITALV.H
	  MCIAVI.H
	
	The INCLUDE directory is a subdirectory of WINVIDEO directory.
	
	NOTE: WINVIDEO is the default directory for the placement of the Video for
	Windows modules, such as VIDEDIT.EXE and VIDCAP.EXE.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	
