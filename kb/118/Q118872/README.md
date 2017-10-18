---
layout: page
title: "Q118872: Manual Install Instructions for Viewer 2.0"
permalink: kb/118/Q118872/
---

## Q118872: Manual Install Instructions for Viewer 2.0

	Article: Q118872
	Product(s): Miscellaneous Software Development Kits
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	2.00
	WINDOWS
	kbsetup
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Below are the instructions for installing the Microsoft Multimedia Viewer
	Publishing Toolkit version 2.0 manually from the product CD. In these
	instructions, drive "X" is used to refer to the CD drive that has the Viewer CD
	in it.
	
	PART I: COPYING FILES
	=====================
	
	Create the directory C:\MVPUBKIT. This will be the main Viewer directory.
	If you prefer, you can specify a different drive and directory, but note
	that the rest of these instructions refer to C:\MVPUBKIT. Type the
	following commands at the MS-DOS prompt, pressing ENTER after each entry:
	
	  copy X:\README.TXT C:\MVPUBKIT
	
	  copy X:\QUESTION.TXT C:\MVPUBKIT
	
	To Install the Multimedia Viewer Run Time
	-----------------------------------------
	
	Type one of the following commands at the MS-DOS prompt and then press
	ENTER:
	
	- If you want the default version to be English, type:
	
	     copy X:\MVSYSUSA\*.* C:\WINDOWS\SYSTEM
	
	- If you want the default version to be German, type:
	
	     copy X:\MVSYSGER\*.* C:\WINDOWS\SYSTEM
	
	- If you want the default version to be French, type:
	
	     copy X:\MVSYSFRN\*.* C:\WINDOWS\SYSTEM
	
	To Install Copies of All the Language Files
	-------------------------------------------
	
	Type the following commands at the MS-DOS prompt, pressing ENTER after each
	entry:
	
	  md C:\MVPUBKIT\MVSYSUSA
	
	  copy X:\MVSYSUSA\*.* C:\MVPUBKIT\MVSYSUSA
	
	  md C:\MVPUBKIT\MVSYSGER
	
	  copy X:\MVSYSGER\*.* C:\MVPUBKIT\MVSYSGER
	
	  md C:\MVPUBKIT\MVSYSFRN
	
	  copy X:\MVSYSFRN\*.* C:\MVPUBKIT\MVSYSFRN
	
	This will allow you to easily switch between language versions.
	
	To Install the Multimedia Authoring Tools
	-----------------------------------------
	
	Type the following commands at the MS-DOS prompt, pressing ENTER after each
	entry:
	
	  md C:\MVPUBKIT\MVTOOLS
	
	  copy X:\MVTOOLS\*.* C:\MVPUBKIT\MVTOOLS
	
	  copy  X:\SYSTEM\*.*  C:\WINDOWS\SYSTEM
	
	  copy  X:\WINDOWS\*.* C:\WINDOWS
	
	  copy X:\GRPHFLT\*.* C:\WINDOWS\MSAPPS\GRPHFLT
	
	  md C:\MVPUBKIT\TUTORIAL
	
	  copy X:\TUTORIAL\*.* C:\MVPUBKIT\TUTORIAL
	
	To Install the Additional Tools for Sony Multimedia Player Viewer
	Authoring
	-----------------------------------------------------------------
	
	Type the following commands at the MS-DOS prompt, pressing ENTER after each
	entry:
	
	  md C:\MVPUBKIT\MVSONY
	
	  copy X:\MVSONY\*.* C:\MVPUBKIT\MVSONY
	
	To Install the Multimedia Viewer Help Run Time and Source Files
	---------------------------------------------------------------
	
	Type one of the following command strings at the MS-DOS prompt, pressing
	ENTER after each entry:
	
	- If you want to install the English version, type:
	
	     md C:\MVPUBKIT\MVHLPUSA
	
	     copy  X:\MVHLPUSA\*.* C:\MVPUBKIT\MVHLPUSA
	
	     md C:\MVPUBKIT\MVHLPUSA\TEXT
	
	     copy X:\MVHLPUSA\TEXT\*.* C:\MVPUBKIT\MVHLPUSA\TEXT
	
	     md C:\MVPUBKIT\MVHLPUSA\GRAPHICS
	
	     copy X:\MVHLPUSA\GRAPHICS\*.* C:\MVPUBKIT\MVHLPUSA\GRAPHICS
	
	- If you want to install the German version, type:
	
	     md C:\MVPUBKIT\MVHLPGER
	
	     copy X:\MVHLPGER\*.* C:\MVPUBKIT\MVHLPGER
	
	     md C:\MVPUBKIT\MVHLPGER\TEXT
	
	     copy X:\MVHLPGER\TEXT\*.* C:\MVPUBKIT\MVHLPGER\TEXT
	
	     md C:\MVPUBKIT\MVHLPGER\GRAPHICS
	
	     copy X:\MVHLPGER\GRAPHICS\*.* C:\MVPUBKIT\MVHLPGER\GRAPHICS
	
	- If you want to install the French version, type:
	
	     md C:\MVPUBKIT\MVHLPFRN
	
	     copy X:\MVHLPFRN\*.* C:\MVPUBKIT\MVHLPFRN
	
	     md C:\MVPUBKIT\MVHLPFRN\TEXT
	
	     copy X:\MVHLPFRN\TEXT\*.* C:\MVPUBKIT\MVHLPFRN\TEXT
	
	     md C:\MVPUBKIT\MVHLPFRN\GRAPHICS
	
	     copy X:\MVHLPFRN\GRAPHICS\*.* C:\MVPUBKIT\MVHLPFRN\GRAPHICS
	
	To Install the Programming Samples
	----------------------------------
	
	Type the following commands at the MS-DOS prompt, pressing ENTER after each
	entry:
	
	  md C:\MVPUBKIT\MVSAMPLE
	
	  md C:\MVPUBKIT\MVSAMPLE\PROGSAMP
	
	  md C:\MVPUBKIT\MVSAMPLE\PROGSAMP\EPLIST
	
	  cd C:\MVPUBKIT\MVSAMPLE\PROGSAMP\EPLIST
	
	  copy X:\MVSAMPLE\PROGSAMP\EPLIST\*.*
	
	  md C:\MVPUBKIT\MVSAMPLE\PROGSAMP\KATASRCH
	
	  cd C:\MVPUBKIT\MVSAMPLE\PROGSAMP\KATASRCH
	
	  copy X:\MVSAMPLE\PROGSAMP\KATASRCH\*.*
	
	  md C:\MVPUBKIT\MVSAMPLE\PROGSAMP\SETUP
	
	  cd C:\MVPUBKIT\MVSAMPLE\PROGSAMP\SETUP
	
	  copy X:\MVSAMPLE\PROGSAMP\SETUP\*.*
	
	  md C:\MVPUBKIT\MVSAMPLE\PROGSAMP\SETUP
	
	  md C:\MVPUBKIT\MVSAMPLE\PROGSAMP\SETUP\USA
	
	  cd C:\MVPUBKIT\MVSAMPLE\PROGSAMP\SETUP\USA
	
	  copy X:\MVSAMPLE\PROGSAMP\SETUP\USA\*.*
	
	  md C:\MVPUBKIT\MVSAMPLE\PROGSAMP\SETUP\USA\BLDCUI
	
	  cd C:\MVPUBKIT\MVSAMPLE\PROGSAMP\SETUP\USA\BLDCUI
	
	  copy X:\MVSAMPLE\PROGSAMP\SETUP\USA\BLDCUI\*.*
	
	  md C:\MVPUBKIT\MVSAMPLE\PROGSAMP\SETUP\FRN
	
	  cd C:\MVPUBKIT\MVSAMPLE\PROGSAMP\SETUP\FRN
	
	  copy X:\MVSAMPLE\PROGSAMP\SETUP\FRN\*.*
	
	  md C:\MVPUBKIT\MVSAMPLE\PROGSAMP\SETUP\FRN\BLDCUI
	
	  cd C:\MVPUBKIT\MVSAMPLE\PROGSAMP\SETUP\FRN\BLDCUI
	
	  copy X:\MVSAMPLE\PROGSAMP\SETUP\FRN\BLDCUI\*.*
	
	  md C:\MVPUBKIT\MVSAMPLE\PROGSAMP\SETUP\GER
	
	  cd C:\MVPUBKIT\MVSAMPLE\PROGSAMP\SETUP\GER
	
	  copy X:\MVSAMPLE\PROGSAMP\SETUP\GER\*.*
	
	  md C:\MVPUBKIT\MVSAMPLE\PROGSAMP\SETUP\GER\BLDCUI
	
	  cd C:\MVPUBKIT\MVSAMPLE\PROGSAMP\SETUP\GER\BLDCUI
	
	  copy X:\MVSAMPLE\PROGSAMP\SETUP\GER\BLDCUI\*.*
	
	To Install the Source Files for Windows Viewer Sample Title
	-----------------------------------------------------------
	
	Type the following commands at the MS-DOS prompt, pressing ENTER after each
	entry:
	
	  md C:\MVPUBKIT\MVSAMPLE\GALLERY
	
	  cd C:\MVPUBKIT\MVSAMPLE\GALLERY
	
	  copy X:\MVSAMPLE\GALLERY\gallery.mvp
	
	  copy X:\MVSAMPLE\GALLERY\gallery.ico
	
	  copy X:\MVSAMPLE\GALLERY\alias.txt
	
	  md C:\MVPUBKIT\MVSAMPLE\GALLERY\TEXT
	
	  copy X:\MVSAMPLE\GALLERY\TEXT\*.* C:\MVPUBKIT\MVSAMPLE\GALLERY\TEXT
	
	  md C:\MVPUBKIT\MVSAMPLE\GALLERY\GRAPHICS
	
	  cd C:\MVPUBKIT\MVSAMPLE\GALLERY\GRAPHICS
	
	  copy X:\MVSAMPLE\GALLERY\GRAPHICS\*.*
	
	  md C:\MVPUBKIT\MVSAMPLE\GALLERY\SOUNDS
	
	  cd C:\MVPUBKIT\MVSAMPLE\GALLERY\SOUNDS
	
	  copy X:\MVSAMPLE\GALLERY\SOUNDS\*.*
	
	  md C:\MVPUBKIT\MVSAMPLE\GALLERY\VIDEO
	
	  copy X:\MVSAMPLE\GALLERY\VIDEO\*.* C:\MVPUBKIT\MVSAMPLE\GALLERY\VIDEO
	
	To Install the Source Files for Sony Multimedia Player Viewer Sample
	Title
	--------------------------------------------------------------------
	
	Type the following commands at the MS-DOS prompt, pressing ENTER after each
	entry:
	
	  md C:\MVPUBKIT\MVSAMPLE\USA
	
	  copy X:\MVSAMPLE\USA\usa.mvp C:\MVPUBKIT\MVSAMPLE\USA
	
	  copy X:\MVSAMPLE\USA\usa.ico C:\MVPUBKIT\MVSAMPLE\USA
	
	  copy X:\MVSAMPLE\USA\sonyhelp.mvp C:\MVPUBKIT\MVSAMPLE\USA
	
	  md C:\MVPUBKIT\MVSAMPLE\USA\TEXT
	
	  copy X:\MVSAMPLE\USA\TEXT\*.* C:\MVPUBKIT\MVSAMPLE\USA\TEXT
	
	  md  C:\MVPUBKIT\MVSAMPLE\USA\SONYPICS
	
	  copy X:\MVSAMPLE\USA\SONYPICS\*.* C:\MVPUBKIT\MVSAMPLE\USA\SONYPICS
	
	  md C:\MVPUBKIT\MVSAMPLE\USA\PCPICS
	
	  copy X:\MVSAMPLE\USA\PCPICS\*.* C:\MVPUBKIT\MVSAMPLE\USA\PCPICS
	
	  md C:\MVPUBKIT\MVSAMPLE\USA\SONYHELP
	
	  copy X:\MVSAMPLE\USA\SONYHELP\*.* C:\MVPUBKIT\MVSAMPLE\USA\SONYHELP
	
	  md C:\MVPUBKIT\MVSAMPLE\USA\SONYHELP\HELPPICS
	
	  cd C:\MVPUBKIT\MVSAMPLE\USA\SONYHELP\HELPPICS
	
	  copy X:\MVSAMPLE\USA\SONYHELP\HELPPICS\*.*
	
	  md C:\MVPUBKIT\MVSAMPLE\USA\MEDIA
	
	  copy X:\MVSAMPLE\USA\MEDIA\*.* C:\MVPUBKIT\MVSAMPLE\USA\MEDIA
	
	PART II:  UPDATING CONFIGURATION AND .INI FILES
	===============================================
	
	NOTE: Some changes or additions to the .INI files may have already been
	made to the by the setup program for another application. The lines below
	only have to be added if they don't already exist.
	
	1. Create the file C:\WINDOWS\MVPROJ.INI, and put the following lines in
	  it:
	
	     [preferences]
	     PathToCompiler=c:\mvpubkit\mvtools\wmvc.exe
	
	2. Add the following lines to the WIN.INI file:
	
	[MS Graphic Import Filters]
	Windows Metafile(.WMF)=C:\WINDOWS\MSAPPS\GRPHFLT\wmfimp.flt,WMF
	HP Graphic Language(.HGL)=C:\WINDOWS\MSAPPS\grphflt\hpglimp.flt,HGL
	Computer Graphics Metafile(.CGM)=C:\WINDOWS\MSAPPS\grphflt\cgmimp.flt,CGM
	Encapsulated Postscript(.EPS)=C:\WINDOWS\MSAPPS\grphflt\epsimp.flt,EPS
	Tagged Image Format(.TIF)=C:\WINDOWS\MSAPPS\grphflt\tiffimp.flt,TIF
	Lotus 1-2-3 Graphics(.PIC)=C:\WINDOWS\MSAPPS\grphflt\lotusimp.flt,PIC
	AutoCAD Plot File(.PLT)=C:\WINDOWS\MSAPPS\grphflt\adimport.flt,PLT
	
	3. Add the following lines to the [Extensions] section of the WIN.INI file:
	
	     bmp=c:\mvpubkit\mvtools\bitedit ^.bmp
	     dib=c:\mvpubkit\mvtools\bitedit.exe ^.dib
	     shg=c:\mvpubkit\mvtools\shed2.exe ^.shg
	     mvp=c:\mvpubkit\mvtools\mvproj.exe ^.mvp
	     mvb=MVIEWER2 ^.MVB
	
	4. Add the following line to the [mci extensions] section of the WIN.INI
	  file:
	
	     AVI=AVIVideo
	
	5. Add the following line to the [mci] section of the SYSTEM.INI file:
	
	     AVIVIDEO=mciavi.drv
	
	6. Add the following lines to [drivers] section of the SYSTEM.INI file:
	
	     vidc.msvc=msvidc.drv
	     vidc.rt21=indeo.drv
	
	7. Add the following lines to the CONFIG.SYS file:
	
	     device=c:\mvpubkit\mvsony\PIEXPC.SYS /d=c:\mvpubkit\mvsony
	     stacks=15, 256
	
	Additional query words: 2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch
	Version           : :
	
	=============================================================================
	
