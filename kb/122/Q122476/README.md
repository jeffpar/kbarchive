---
layout: page
title: "Q122476: Cinemania '95: Manual Installation Instructions"
permalink: /kb/122/Q122476/
---

## Q122476: Cinemania '95: Manual Installation Instructions

{% raw %}

	Article: Q122476
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1995 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cinemania for Windows 1995 edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you encounter problems using Setup to install Microsoft Cinemania 1995, you
	can use the PSS.BAT file on the CD-ROM to perform a manual installation of the
	program.
	
	CAUTION: Do not use these steps if your are using Microsoft Windows 95 or
	Microsoft Windows NT. The manual installation uses a batch file that copies
	Windows 3.x system files onto your hard drive. Allowing the system files to be
	overwritten in Windows 95 or Windows NT may cause improper system performance.
	
	MANUAL INSTALLATION INSTRUCTIONS
	--------------------------------
	
	1. At an MS-DOS command prompt, change to your CD-ROM drive. For example if your
	  CD-ROM drive is D, type the following at an MS-DOS command prompt and press
	  ENTER:
	
	  "d:" (without the quotation marks)
	
	2. Type the following and press ENTER:
	
	  "cd\aamsstp\manual" (without the quotation marks)
	
	3. Run the PSS.BAT file from the AAMSSTP\MANUAL directory by typing the
	  following at the MS-DOS prompt and pressing ENTER:
	
	  "PSS <cinemania directory> <windows directory>" (without the
	  quotation marks)
	
	  where <cinemania directory> is your Cinemania directory and <windows
	  directory> is your Windows directory. For example, if your Cinemania
	  directory is C:\CIN95 and your Windows directory is C:\WINDOWS, type the
	  following at the MS-DOS prompt and press ENTER:
	
	  "pss c:\cin95 c:\windows" (without the quotation marks)
	
	4. The PSS.BAT file on the Cinemania 1995 CD incorrectly references source files
	  on the CD located in the \SYSTEM directory. As a result, it is necessary to
	  type the following after running the PSS.BAT file
	
	  "copy <cd drive>:\aamsstp\system\*.* <Windows directory>\system"
	  (without the quotation marks)
	
	  where <cd drive> is your CD-ROM drive and <Windows directory> is
	  your Windows directory. For example, type the following and press ENTER:
	
	  "copy d:\aamsstp\system\*.* c:\windows\system" (without the quotation marks)
	
	  The previous step copies numerous files to your WINDOWS\SYSTEM subdirectory.
	  Move the following files from the WINDOWS\SYSTEM directory on your hard drive
	  to the WINDOWS directory on your hard drive:
	
	  MPLAYER.EXE
	  MPLAYER.HLP
	  MCIOLE.DLL
	  INDEO.INI
	
	  For information about how to move files, see your MS-DOS manual.
	
	5. Add the following lines to the [386Enh] section of SYSTEM.INI in your Windows
	  directory if they do not already exist:
	
	         device=dva.386
	         device=vshare.386
	
	6. Create a CINMANIA.INI file using Windows Write and save it to the WINDOWS
	  directory on your hard drive. The contents of the CINMANIA.INI file are as
	  follows, where D is your CD-ROM drive letter and CIN95 is your Cinemania
	  directory:
	
	         [Options]
	         StartUpAudio=1
	         ListMakerList=
	         HotSpotColor=0,0,128
	         PopUpColor=0,0,128
	
	         [Files]
	         InstallPath=c:\Cin95
	
	         [Windows]
	         BrowseOnly=0
	         AppMax=1
	         BrowseState=3
	         BrowseID=1
	
	         [Coordinates]
	         Cinemania '95 Help=160 0 480 480
	         MainApp=43 26 683 540
	         Browse=-8 53 197 453
	         Back List=46 46 196 296
	
	7. Add the following lines to the [Drivers] section of SYSTEM.INI in your
	  Windows directory:
	
	         VIDC.MSVC=msvidc.drv
	         VIDC.RT21=indeov.drv
	         VIDC.CVID=iccvid.drv
	         VIDC.IV31=indeov.drv
	         WaveMapper=msacm.drv
	         MSACM.msadpcm=msadpcm.acm
	         MSACM.imaadpcm=imaadpcm.acm
	         VIDC.MRLE=msrle.drv
	         VIDC.YVU9=indeov.drv
	         VIDC.IV32=ir32.dll
	
	8. Add the following line to the [mci] section of SYSTEM.INI in your Windows
	  directory:
	
	         AVIVideo=mciavi.drv
	
	9. Add the following line to the [mci extensions] section of WIN.INI in your
	  Windows directory:
	
	         avi=AVIVideo
	
	10. Add the following lines to the [drivers.desc] section of CONTROL.INI in your
	  Windows directory:
	
	         msacm.drv=Microsoft Sound Mapper V2.00
	         msadpcm.acm=Microsoft ADPCM Codec V2.00
	         imaadpcm.acm=Microsoft IMA ADPCM Codec V2.00
	
	11. From the File menu in File Manager, choose Run.
	
	12. Type each of the following lines and press ENTER after each line:
	
	  "REGEDIT OLE2.REG" (without the quotation marks)
	  "REGEDIT MPLAYER.REG" (without the quotation marks)
	  "REGEDIT CLEANUP.REG" (without the quotation marks)
	
	  The following message appears:
	
	  Information in <filename> has been successfully registered in the
	  registration database.
	
	13. From the File menu in Program Manager, choose New and select Program Item.
	
	14. Type the following information in the fields listed in the Program Item
	  Properties dialog box
	
	      Description:      Read Me: Cinemania '95 Tips
	      Command:          notepad c:\cin95\trd.txt
	      Working Directory:   c:\cin95
	
	  where your hard drive is drive C and CIN95 is your Cinemania directory. If
	  your hard drive is a different letter or Cinemania is in a different
	  directory, replace this with the correct drive letter and directory name.
	
	15. Repeat step 13 and type the following information in the fields listed in
	  the Program Item Properties dialog box:
	
	      Description:      Cinemania '95
	      Command:          c:\cin95\cnmnia95.exe d:\cnmnia95.m12
	      Working Directory:   c:\cin95
	
	  where your hard drive is drive C, CIN95 is your Cinemania directory, and your
	  CD-ROM drive is drive D.
	
	Additional query words: kbhowto Ed multi media multimedia multi-media set up set-up setup install installs err msg error problem prog ver 95 '95
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbCineManiaSearch kbCinemania1995
	Version           : :1995 edition
	
	=============================================================================
	

{% endraw %}
