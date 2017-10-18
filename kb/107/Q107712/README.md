---
layout: page
title: "Q107712: Files Needed to Manually Install MS-DOS 6.0/6.2 Utilities"
permalink: kb/107/Q107712/
---

## Q107712: Files Needed to Manually Install MS-DOS 6.0/6.2 Utilities

	Article: Q107712
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some situations, SETUP /E may fail, making a manual installation of the
	MS-DOS utilities (Microsoft Backup, Microsoft Anti-Virus and Microsoft Undelete)
	necessary.
	
	WORKAROUND
	==========
	
	To work around this problem, you must manually install the MS-DOS Utilities
	using the COPY and EXPAND commands.
	
	The files to be expanded are shown with the destination filename to the right;
	all other files simply need to be copied from the MS-DOS Upgrade disks to the
	hard disk drive. All the files should be placed in the directory containing your
	MS-DOS files (usually C:\DOS).
	
	Files required for the MS-DOS utilities:
	
	  MSBACKDB.OVL
	  MSBACKDR.OVL
	  MSBACKFB.OVL
	  MSBACKFR.OVL
	  MSBACKUP.EX_    MSBACKUP.EXE
	  MSBACKUP.HL_    MSBACKUP.HLP
	  MSBACKUP.OVL
	  MSBCONFG.HL_    MSBCONFG.HLP
	  MSBCONFG.OVL
	
	  UNDELETE.EXE
	
	  MSAV.EXE
	  MSAV.HL_        MSAV.HLP
	  MSAVHELP.OV_    MSAVHELP.OVL
	  MSAVIRUS.LS_    MSAVIRUS.LST
	  VSAFE.CO_       VSAFE.COM
	
	Files required for the Windows-based utilities:
	
	  AV.GR_          AV.GRP
	  BK.GR_          BK.GRP
	  BKAV.GR_        BKAV.GRP
	  BKUD.GR_        BKUD.GRP
	  BKUDAV.GR_      BKUDAV.GRP
	  WNTOOLS.GR_     WNTOOLS.GRP
	  MWGRAFIC.DL_    MWGRAFIC.DLL
	
	  MWBACKF.DL_     MWBACKF.DLL
	  MWBACKR.DL_     MWBACKR.DLL
	  MWBACKUP.EX_    MWBACKUP.EXE
	  MWBACKUP.HL_    MWBACKUP.HLP
	  VFINTD.38_      VFINTD.386
	
	  MWUNDEL.EX_     MWUNDEL.EXE
	  MWUNDEL.HL_     MWUNDEL.HLP
	
	  MWAV.EX_        MWAV.EXE
	  MWAVABSI.DL_    MWAVABSI.DLL
	  MWAVDLG.DL_     MWAVDLG.DLL
	  MWAVDOSL.DL_    MWAVDOSL.DLL
	  MWAVDRVL.DL_    MWAVDRVL.DLL
	  MWAVMGR.DL_     MWAVMGR.DLL
	  MWAVSCAN.DL_    MWAVSCAN.DLL
	  MWAVSOS.DL_     MWAVSOS.DLL
	  MWAVTSR.EX_     MWAVTSR.EXE
	
	  VSAFE.CO_       VSAFE.COM
	
	To use the Windows utilities, you must add the following line to the [386Enh]
	section of the SYSTEM.INI file:
	
	  " Device=C:\DOS\VFINTD.386 " (without the quotation marks)
	
	Use the following steps to manually create the Microsoft Tools program group and
	each of the three program items:
	
	1. In Program Manager (be sure no other groups are open), choose New from the
	  File menu, select Program Group, and choose OK.
	
	2. In the Program Group Properties dialog box, type "Microsoft Tools" (without
	  the quotation marks) in the Description box, leave the Group File box can
	  empty, and then choose OK.
	
	3. With the new Microsoft Tools group open, manually create the three utilities
	  program items by choosing New from the File menu. For Program Item
	  Properties, enter the following for each utility:
	
	  Microsoft Backup for Windows (MWBACKUP.EXE):
	
	        DESCRIPTION           Microsoft Backup for Windows
	        COMMAND LINE          C:\DOS\MWBACKUP.EXE
	        WORKING DIRECTORY     C:\DOS
	        SHORTCUT KEY          None
	
	  Microsoft Anti-Virus for Windows:
	
	        DESCRIPTION           Microsoft Anti-Virus for Windows
	        COMMAND LINE          C:\DOS\MWAV.EXE
	        WORKING DIRECTORY     C:\DOS
	        SHORTCUT KEY          None
	
	  Microsoft Undelete for Windows:
	
	        DESCRIPTION           Microsoft Undelete for Windows
	        COMMAND LINE          C:\DOS\MWUNDEL.EXE
	        WORKING DIRECTORY     C:\DOS
	        SHORTCUT KEY          None
	
	Additional query words: 6.22 6.00 6.20 Manual
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
