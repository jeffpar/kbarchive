---
layout: page
title: "Q130971: Settings Used in the APPS.INF File"
permalink: /kb/130/Q130971/
---

## Q130971: Settings Used in the APPS.INF File

	Article: Q130971
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The APPS.INF file contains information about the manner in which MS-DOS-based
	programs are run. Each program listed in the [PIF95] section contains its own
	section, with the settings for the program listed there. This article explains
	the abbreviated codes used in these sections.
	
	MORE INFORMATION
	================
	
	Name          Key    Description                               Default
	----------------------------------------------------------------------
	WINDOWED     "win"   Open windowed instead of full-screen         Y
	BACKGROUND   "bgd"   Run in background                            Y
	EXCLUSIVE    "exc"   Exclusive mode                            Ignored
	DETECTIDLE   "dit"   Idle sensitivity                             Y
	LOWLOCKED    "lml"   Lock conventional memory                  Ignored
	EMSLOCKED    "eml"   Lock EMS memory                              N
	XMSLOCKED    "xml"   Lock XMS memory                              N
	USEHMA       "hma"   Uses HMA                                     Y
	EMULATEROM   "emt"   Fast ROM emulation                           Y
	RETAINVRAM   "rvm"   Retain video memory                       Ignored
	FASTPASTE    "afp"   Fast pasting                                 Y
	
	The following settings control which keyboard shortcuts are active when the
	MS-DOS-based program has the focus. If the key is disabled, pressing the key
	sends the keystroke to the program instead of to Windows 95.
	
	Name          Key    Description                               Default
	----------------------------------------------------------------------
	ALTTAB       "ata"   Allow ALT+TAB to switch away                 Y
	ALTESC       "aes"   Allow ALT+ESC to switch away                 Y
	CTRLESC      "ces"   Allow CTRL+ESC to switch away                Y
	PRTSCRN      "psc"   Allow PrtSc to perform screen snap           Y
	ALTPRTSCRN   "aps"   Allow ALT+PrtSc to perform screen snap       Y
	ALTSPACE     "asp"   Allow ALT+SPACE to view System menu          Y
	ALTENTER     "aen"   Allow ALT+ENTER to toggle box/full-screen    Y
	WINLIE       "lie"   Prevent MS-DOS-based programs                N
	                    from detecting Windows
	GLOBALMEM    "gmp"   Enable global memory protection              N
	REALMODE     "dos"   Run program in MS-DOS mode                   N
	
	The following settings apply only if the REALMODE flag is set. These settings
	control which MS-DOS-based TSRs should be loaded in real mode.
	
	Name            Key    Description                             Default
	----------------------------------------------------------------------
	MOUSE          "mse"   Mouse funtionality                         Y
	EMS            "ems"   EMM386                                     Y
	CDROM          "cdr"   CD-ROM driver/MSCDEX                       Y
	NETWORK        "net"   Network drivers                            Y
	DISKLOCK       "dsk"   Allow direct disk access                   N
	PRIVATECFG     "cfg"   Use custom CONFIG.SYS settings             N
	VESA           "vsa"   Extended video (VESA) support              Y
	CLOSEONEXIT    "cwe"   Close on exit                              N
	ALLOWSSAVER    "sav"   Allow screen saver to interrupt program    Y
	UNIQUESETTINGS "uus"   Run program in separate session            N
	
	
	Additional query words: dos application
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
