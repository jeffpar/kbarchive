---
layout: page
title: "Q119102: Dangerous Creatures: Manual Installation Instructions"
permalink: /kb/119/Q119102/
---

## Q119102: Dangerous Creatures: Manual Installation Instructions

	Article: Q119102
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Dangerous Creatures for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following describes how to manually set up Dangerous Creatures.
	
	CAUTION: If you are using Windows 95 or Windows NT, when copying files, DO NOT
	overwrite ANY existing files. Allowing the system files to be overwritten in
	Windows 95 or Windows NT may cause improper system performance.
	
	These directions assume the following:
	
	- The hard disk drive is drive C.
	
	- Windows is installed in C:\WINDOWS.
	
	- The CD-ROM drive is drive X.
	
	MORE INFORMATION
	================
	
	1. Create a directory called C:\MSDANGER on your hard disk (drive C).
	
	2. Copy the following files from the X:\XFILES\APP directory on the CD-ROM to
	  the C:\MSDANGER directory on your hard disk:
	
	      PIDHOLDR.DLL
	      MSDANGER.THE
	      README.TXT
	      EXPLORE.EXE
	      MSDANGER.DLL
	      MSDANGER.EXE
	
	3. Copy the following file from the X:\XFILES\SYSTEM directory on the CD-ROM to
	  the C:\WINDOWS\SYSTEM directory on the hard disk:
	
	      ACMCMPRS.DLL
	      AVICAP.DLL
	      AVIFILE.DLL
	      COMPOBJ.DLL
	      DISPDIB.DLL
	      DVA.386
	      ICCVID.DRV
	      IMAADPCM.ACM
	      INDEOV.DRV
	      IR21_R.DLL
	      IR32.DLL
	      MAP_WIN.HLP
	      MCIAVI.DRV
	      MCIMMP.DRV
	      MCIOLE.DLL
	      MMP.DLL
	      MSACM.DLL
	      MSACM.DRV
	      MSADPCM.ACM
	      MSRLE.DRV
	      MSVIDC.DRV
	      MSVIDEO.DLL
	      OLE2.DLL
	      OLE2CONV.DLL
	      OLE2DISP.DLL
	      OLE2NLS.DLL
	      OLE2PROX.DLL
	      STDOLE.TLB
	      STORAGE.DLL
	      TYPELIB.DLL
	      VBRUN200.DLL
	      VER.DLL
	      VSHARE.386
	
	4. Copy the following file from the X:\XFILES\SYSTEM directory on the CD-ROM to
	  the C:\WINDOWS directory on the hard disk:
	
	      MPLAYER.EXE
	      MPLAYER.HLP
	      INDEO.INI
	
	5. Modify and/or add the following sections to the SYSTEM.INI file:
	
	  NOTE: Do not delete any information from these sections.
	
	      [Drivers]
	      WAVEMAPPER=MSACM.DRV
	      VIDC.MSVC=MSVIDC.DRV
	      VIDC.CVID=ICCVID.DRV
	      VIDC.RT21=INDEOV.DRV
	      VIDC.YVU9=INDEOV.DRV
	      VIDC.IV32=IR32.DLL
	      VIDC.IV31=INDEOV.DRV
	
	      [MSACM]
	      INSTALL=MSADPCM.ACM
	
	      [MCI]
	      AVIVIDEO=MCIAVI.DRV
	
	6. Modify and/or add the following sections to the WIN.INI file:
	
	      [MCI EXTENSIONS]
	      AVI=AVIVIDEO
	
	7. Create a file named MSDANGER.INI with the following entries:
	
	      [MICROSOFT DANGEROUS CREATURES]
	      CD=X:
	      DIRECTORY=C:\MSDANGER\ 
	      DISABLESOUNDEFFECTS=0
	      VIDEOINWINDOW=0
	      FIRSTVIDEOINWINDOW=0
	      DISABLENARRATION=0
	      PRINTHIGHQUALITY=1
	      PRINTPORTRAIT=0
	      COMMAND=C:\MSDANGER\MSDANGER.THE
	      WINDOW=195,134
	      DEMO=0
	
	  Save the file MSDANGER.INI to the C:\WINDOWS directory.
	
	8. Register OLE information.
	
	  a. From the File menu in the Program Manager, choose Run.
	
	  b. Type the following command lines, and choose OK after each line.
	
	         regedit x:\xfiles\system\mplayer.reg
	         regedit x:\xfiles\system\ole2.reg
	         regedit x:\xfiles\system\cleanup.reg
	
	     NOTE: If the operation is successful, the following message appears:
	
	  Registration Info Editor Information in X:\XFILES\SYSTEM\*.REG has been
	  successfully registered in the registration database.
	
	     Choose OK.
	
	9. Create a new program group called "Microsoft Multimedia."
	
	  a. From the File menu in Program Manager, choose New.
	
	  b. Select New Program Group and choose OK.
	
	  c. Enter " Microsoft Multimedia " (without the quotation marks) in the
	     Description box and choose OK.
	
	10. Add the following new program item to this group.
	  a. From the File menu in Program Manager, choose New and choose OK to add a
	     new Program Item.
	
	  b. Enter the following description and command line for the program item:
	
	         Description: Dangerous Creatures
	         Command Line: C:\MSDANGER\MSDANGER.EXE
	         Working Directory: C:\MSDANGER
	
	  c. Choose OK to accept the information.
	
	11. Restart Windows for the system changes to take affect.
	
	Additional query words: kbhowto 1994multi media multimedia multi-media
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword kbDangerousCreatures
	Version           : 1.00
	
	=============================================================================
	
