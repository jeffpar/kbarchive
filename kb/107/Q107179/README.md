---
layout: page
title: "Q107179: Encarta 1994: Manual Installation Instructions"
permalink: /kb/107/Q107179/
---

## Q107179: Encarta 1994: Manual Installation Instructions

	Article: Q107179
	Product(s): Microsoft Home Kids Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you encounter problems installing Encarta 1994 using SETUP.EXE, use the
	INSTALL.BAT file to manually install Encarta and complete the instruction in the
	MSETUP.WRI file. MSETUP.WRI has instructions for a manual installation including
	how to correctly execute INSTALL.BAT. MSETUP.WRI is found on the Encarta 1994
	CD. The file is located in the X:\MSSTP\MANUAL directory, where X: is the CDROM
	drive.
	
	CAUTION: Do not use these steps if your are using Microsoft Windows 95 or
	Microsoft Windows NT. The manual installation uses a batch file that copies
	Windows 3.x system files onto your hard drive. Allowing the system files to be
	overwritten in Windows 95 or Windows NT may cause improper system performance.
	
	MSETUP.WRI
	----------
	
	ENCARTA MANUAL INSTALLATION INSTRUCTIONS
	
	If you encounter difficulties in setting up Encarta with the SETUP program, you
	will still be able to fully install and use Encarta by doing a Manual
	Installation using INSTALL.BAT, a batch file that will copy files from the CD to
	your hard disk. The normal Encarta setup program gives you the option of two
	types of installation: Faster (Recommended) and Slower (Minimum). The
	Recommended installation requires 8.4 megabytes of disk space and provides
	faster performance. The Minimum installation requires only 2.5 megabytes of disk
	space but provides slower performance. To have INSTALL copy the files for the
	installation of your choice, specify the install option as shown below.
	
	Once the copying is completed, it will be necessary to modify your WIN.INI and
	SYSTEM.INI files. This can be easily done by opening Notepad or the Windows text
	editor of your choice and making the following changes to the specified files.
	For the sake of convenience, you may want to copy the changes from this document
	and paste them into the appropriate .INI files at the end of the specified
	sections. Be sure to save the changes as you make them.
	
	Running INSTALL.BAT
	
	It is recommended that you exit Windows before running INSTALL.BAT to prevent
	possible difficulties with replacement of some system files. The INSTALL.BAT
	file is located in the x:\MSSTP\MANUAL directory of your Encarta CD (where 'x'
	is the drive corresponding to your CD-ROM drive). The CD-ROM drive will be
	referred to as [source] later in these instructions.
	
	To run INSTALL.BAT, select File. Run from the Program Manager and type:
	
	  "INSTALL [dest] [windows dir] [install option]" (without the quotation marks)
	
	[dest] is the path and directory to which you want to install Encarta (usually
	C:\ENCARTA) [windows] is the path to your Windows directory (usually C:\WINDOWS)
	[install option] is the installation option you select -- R = Recommended, M =
	Minimum.
	
	Note: Remember the installation you selected, Recommended(R) or Minimum(M), when
	making the changes to the .INI files as described below.
	
	For example:
	
	     INSTALL C:\ENCARTA C:\WINDOWS R
	
	installs Encarta to your C drive in the ENCARTA directory, tells the batch file
	that Windows is located on your C drive in the WINDOWS directory, and specifies
	that you would like to install the Recommended (Faster) installation. Once this
	batch file has finished, you will need to make the changes outlined below.
	
	Changes to the WIN.INI file (usually located in C:\WINDOWS)
	
	For either installation, add the following seven lines to the section labeled
	[Fonts]. If you have installed Microsoft multimedia software before, these line
	may already be present. If they are present, do not add them again.
	
	  V1 Lucida Sans=v1sp.fon
	  V2 Lucida Sans=v2sp.fon
	  V3 Lucida Sans=v3sp.fon
	  V4 Lucida Sans=v4sp.fon
	  V5 Lucida Sans=v5sp.fon
	  V6 Lucida Sans=v6sp.fon
	  V7 Lucida Sans=v7sp.fon
	
	For the Recommended installation, create a section labeled [Encarta] and add the
	following four lines beneath it :
	
	  FILE_usa.dct=
	  FILE_usa.ths=
	  ThsFile=[dest]\usa.ths
	  DctFile=[source]encarta\usa.dct
	
	For the Minimum installation, create a section labeled [Encarta] and add the
	following four lines beneath it:
	
	  FILE_usa.dct=
	  FILE_usa.ths=
	  ThsFile=[source]\encarta\usa.ths
	  DctFile=[source]\encarta\usa.dct
	
	For either installation, add the following lines to the section labeled [mci
	extensions]:
	
	  AVI=AVIVideo
	  mmm=MMMovie
	
	For either installation, add the following to the section labeled [Microsoft
	Multimedia Catalog]. If the section does not exist, then create it.
	
	  catalognum=1
	  path=[source]\mmcat\
	  parentCD=Microsoft Encarta 1994
	
	Save your WIN.INI file after making these changes.
	
	Changes to the SYSTEM.INI file (usually located in C:\WINDOWS)
	
	For either installation, add the following lines to the section labeled
	[Drivers]:
	
	  Wavemapper=msacm.drv
	  VIDC.CVID=iccvid.drv
	
	For either installation, add the following lines to the section labeled [mci]:
	
	  MMMovie=mcimmp.drv
	  AVIVideo=mciavi.drv
	
	For either installation, add the following line to the section labeled [MSACM].
	If the section does not exist, then create it.
	
	  Install=msadpcm.acm
	
	Save your SYSTEM.INI file after making these changes.
	
	Changes to the CONTROL.INI file (usually located in C:\WINDOWS)
	
	For either installation, add the following line to the section labeled
	[Userinstallable.driver]:
	
	  VIDC.CVID=iccvid.drv
	
	For either installation, add the following line to the section labeled
	[related.desc]:
	
	  VIDC.CVID=
	
	Save your CONTROL.INI file after making these changes.
	
	Copying the ENCARTA.INI to your Windows directory
	
	In the \MSSTP\MANUAL directory is a sample ENCARTA.INI file that is preset with
	all default Encarta settings for the Recommended installation. Copy the file
	into your Windows directory. If [dest] is C:\ENCARTA and your CD-ROM is D: then
	no changes are necessary. If you setup the Minimum installation, Encarta is in a
	directory other than C:\ENCARTA, or your CD-ROM drive is not D:, then make the
	following changes to the [94Options] section:
	
	Recommended
	CodePath=[dest]
	BookPath=[source]\ENCYC94\
	SpellFile=[dest]\ENCART94.LEX
	
	Minimum
	CodePath=[source]\ENCARTA
	BookPath=[source]\ENCYC94\
	SpellFile=[dest]\ENCART94.LEX
	
	Create a new Program Group called "Microsoft Multimedia" in the Program Manager
	(see your Windows manual for more information on creating a Program Group).
	
	Note: The Microsoft Multimedia Catalog requires that your video card be able to
	display 256 or more colors.
	
	If you are installing the Recommended version, create the following icons in the
	Program Group called Microsoft Multimedia:
	
	Item 1
	
	  Description:      Microsoft Encarta 1994
	  Command line:      [dest]\encart94.exe
	  Working directory:   [dest]
	
	Item 2
	
	  Description:      READ ME: Encarta Tips
	  Command line:      write.exe [dest]\readme.wri
	  Working directory:
	
	Item 3
	
	  Description:      Microsoft Multimedia Catalog
	  Command line:      catstub.exe
	  Working directory:
	
	If you are installing the Minumum version, create the following icons in the
	Program Group called Microsoft Multimedia:
	
	Item 1
	
	  Description:      Microsoft Encarta 1994
	  Command line:      [source]\encarta\encart94.exe
	  Working directory:   [source]\encarta
	
	Item 2
	
	  Description:      READ ME: Encarta Tips
	  Command line:      write.exe [dest]\readme.wri
	  Working directory:
	
	Item 3
	
	  Description:      Microsoft Multimedia Catalog
	  Command line:      catstub.exe
	  Working directory:
	
	Additional query words: kbhowto 1994 multi media multimedia multi-media set up 94
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1994
	Version           : :
	
	=============================================================================
	
