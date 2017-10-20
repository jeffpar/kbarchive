---
layout: page
title: "Q87097: Content of CHANGES.TXT from Multimedia OEM Supplemental Kit"
permalink: /kb/087/Q87097/
---

## Q87097: Content of CHANGES.TXT from Multimedia OEM Supplemental Kit

{% raw %}

	Article: Q87097
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is the content of the CHANGES.TXT file included with the
	Multimedia OEM supplemental kit. These are the necessary changes that must be
	made to the SETUP.INF file for it to install the supplemental Windows
	applications during the Windows 3.1 installation.
	
	MORE INFORMATION
	================
	
	;*************************************************************
	;CHANGES TO SETUP.INF FOR MULTIMEDIA SUPPLEMENTAL DISK
	
	; use the following [disks] section for 1.2MB floppies
	[disks]
	   1 =. ,"Microsoft Windows 3.1 Disk #1",disk1
	   2 =. ,"Microsoft Windows 3.1 Disk #2",disk2
	   3 =. ,"Microsoft Windows 3.1 Disk #3",disk3
	   4 =. ,"Microsoft Windows 3.1 Disk #4",disk4
	   5 =. ,"Microsoft Windows 3.1 Disk #5",disk5
	   6 =. ,"Microsoft Windows 3.1 Disk #6",disk6
	   7 =. ,"Microsoft Windows 3.1 Disk #7",disk7
	       m =. ,"Multimedia Supplemental Disk",mmsupp
	
	; use the following [disks] section for 1.44MB floppies
	[disks]
	   1 =. ,"Microsoft Windows 3.1 Disk #1",disk1
	   2 =. ,"Microsoft Windows 3.1 Disk #2",disk2
	   3 =. ,"Microsoft Windows 3.1 Disk #3",disk3
	   4 =. ,"Microsoft Windows 3.1 Disk #4",disk4
	   5 =. ,"Microsoft Windows 3.1 Disk #5",disk5
	   6 =. ,"Microsoft Windows 3.1 Disk #6",disk6
	       m =. ,"Multimedia Supplemental Disk",mmsupp
	
	; use the following [disks] section for CD-ROM
	[disks]
	   1 =. ,"Microsoft Windows 3.1 CD",disk1
	   2 =. ,"Microsoft Windows 3.1 CD",disk2
	   3 =. ,"Microsoft Windows 3.1 CD",disk3
	   4 =. ,"Microsoft Windows 3.1 CD",disk4
	   5 =. ,"Microsoft Windows 3.1 CD",disk5
	   6 =. ,"Microsoft Windows 3.1 CD",disk6
	       m =. ,"Microsoft Windows 3.1 CD",mmsupp
	
	[display]
	vgagray  = m:vgagray.drv,  "VGA (640x480, 16 grays)",
	"100,96,96",  m:vgacolor.2gr, m:vgalogo.lgo, m:vddvga30.386,
	m:vga30.3gr,,              m:vgalogo.rle
	vgapal   = m:vgapal.drv,   "VGA (640x480, palettized 16 colors)",
	"100,96,96",  m:vgacolor.2gr, m:vgalogo.lgo, m:vddvga30.386,
	m:vga30.3gr,,              m:vgalogo.rle
	mcga256  = m:mcga256.drv,  "VGA (320x200, 256 colors)",
	"100,43,43",  m:vgacolor.2gr, m:vgalogo.lgo, m:vddvga30.386,
	m:vga30.3gr,,              m:vgalogo.rle
	
	[sysfonts]
	m:lrsys.fon,"VGA (320x200) resolution System Font", "100,43,43"
	
	[fixedfonts]
	m:lrfix.fon,"VGA (320x200) resolution Fixed System Font", "100,43,43"
	
	[oemfonts]
	m:lroem.fon,"VGA (320x200) resolution Terminal Font
	(USA/Europe)","100,43,43"
	
	[fonts]
	  m:LRHELVB.FON, "MS Sans Serif 5 (320x200 bold low res)",
	"100,43,43"
	  m:LRHELV.FON,  "MS Sans Serif 5 (320x200 low res)", "100,43,43"
	
	; use the following [win.other] section for 1.2MB floppies or CD-ROM
	[win.other]
	  m:DIB.DRV
	  m:DISPDIB.DLL
	  5:MCICDA.DRV
	
	; use the following [win.other] section for 1.44MB floppies
	[win.other]
	  m:DIB.DRV
	  m:DISPDIB.DLL
	  4:MCICDA.DRV
	
	; replace the existing line for CLOCK.EXE with the line below in
	; addition to adding the other lines and modifying the diskspace=
	; line.
	[win.apps]
	  m:CLOCK.EXE,    "Clock"                     ,  17248, clock
	  m:MUSICBOX.EXE, "Music Box"                 ,  61872, musicbox
	  m:MUSICBOX.HLP, "Music Box Help"            ,  29634
	  diskspace=1599814
	
	[Installable.Drivers]
	pioneer       = m:mcipionr.drv, "Videodisc", "[MCI] Pioneer
	Videodisc",,
	
	[Update.Files]
	0:system,m:mcipionr.drv
	
	[group4]
	"Music Box",        MUSICBOX.EXE,,,
	musicbox
	
	[group2]
	"Clock",            CLOCK.EXE,,,                               clock
	""Music Box",        MUSICBOX.EXE,,,
	musicbox
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
