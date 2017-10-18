---
layout: page
title: "Q96959: MS-DOS 6 Upgrade Supplemental Disks NET.TXT File"
permalink: kb/096/Q96959/
---

## Q96959: MS-DOS 6 Upgrade Supplemental Disks NET.TXT File

	Article: Q96959
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The NET.TXT file was not included on the original version of the MS-DOS 6
	Upgrade Supplemental disks; however, it was included on the original equipment
	manufacturer (OEM) Supplemental disks.
	
	NOTE: The Supplemental Disks have been revised to include this file. In addition,
	NET.TXT is available from the Microsoft Download Service.
	
	MORE INFORMATION
	================
	
	NET.TXT
	-------
	
	This file explains how to update network software files for the following
	networks:
	
	1. Microsoft LAN Manager Version 2.0 Enhanced and 100-Percent Compatible
	  Networks
	
	2. Microsoft LAN Manager Version 2.0 Basic and 100-Percent Compatible Networks
	
	3. Microsoft LAN Manager Version 1.x Enhanced and 100-Percent Compatible
	  Networks
	
	4. Microsoft LAN Manager Version 1.x Basic and 100-Percent Compatible Networks
	
	5. Microsoft MS-Net and 100-Percent Compatible Networks
	
	6. 3Com 3+Share Version 1.6
	
	Find the section below that corresponds to your network software.
	
	NOTE: If you have a LAN Manager or 100-percent compatible network, and you are
	unsure of which version you are using, type NET CONFIG WORKSTATION at the
	command prompt. If you see information about your configuration, you have an
	Enhanced version. This information indicates whether you have Enhanced version
	2.0 or Enhanced version 1.x.
	
	If you receive an error message when you type the command, you have a Basic
	version. To find out whether you have Basic version 2.0 or Basic version 1.x,
	check the creation dates of the files in your LAN Manager directory (typically
	C:\LANMAN.DOS\BASIC). If the files are dated before July 1990, you have version
	1.x. Files dated after July 1990 are typically version 2.0.
	
	1. Microsoft LAN Manager Version 2.0 Enhanced and 100-Percent Compatible
	  Networks
	
	  To update LAN Manager version 2.0 Enhanced, replace your current NETWKSTA.EXE
	  and NETBEUI.DOS files with the new versions included with the MS-DOS 6
	  Supplemental disks. It's a good idea to preserve your current files by
	  renaming them with a different extension, such as .OLD or .BAK.
	
	  To update LAN Manager version 2.0 Enhanced:
	
	  1. Run the Setup program from the drive and directory that contains your
	     Supplemental disk files and specify the drive and directory to which you
	     want to install your files.
	
	     For example, if your Supplemental disk is in drive A, and you want to
	     install the files on drive C in your SUPP directory, type "A:" (without
	     the quotation marks) at the command prompt, and then type the following:
	
	  " SETUP C:\SUPP " (without the quotation marks)
	
	  2. When the Setup program starts, choose A if you want install the
	     Supplemental disk files. Choose S if you want to install some of the
	     files--for example, just the network files.
	
	     If you choose to install some of the files, Setup will prompt you to
	     install groups of files, including the MS-DOS 6 Network drivers.
	
	  3. After Setup finishes installing the Network files, rename these original
	     network files to back them up:
	
	  NETWKSTA.EXE (usually in C:\LANMAN.DOS\NETPROG)
	  NETBEUI.DOS (usually in C:\LANMAN.DOS\DRIVERS\PROTOCOL\NETBEUI)
	
	  4. Copy new version of NETBEUI.DOS to the same drive and directory as the old
	     version of the file.
	
	  5. Copy the new NETWKSTA.2XE file to the same drive and directory as the old
	     NETWKSTA.EXE file. Rename the new file to NETWKSTA.EXE.
	
	  6. Restart your computer. Or, if you have not installed MS-DOS 6, run Setup
	     now.
	
	2. Microsoft LAN Manager Version 2.0 Basic and 100-Percent Compatible Networks
	
	  To update LAN Manager version 2.0 Basic, replace your current REDIR.EXE,
	  NET.EXE, and NETBEUI.DOS files with the new versions included with the MS-DOS
	  6 Supplemental disks. It's a good idea to preserve your current files by
	  renaming them with a different extension, such as .OLD or .BAK.
	
	  To update LAN Manager version 2.0 Basic:
	
	  1. Run the Setup program from the drive and directory that contains your
	     Supplemental disk files and specify the drive and directory to which you
	     want to install your files.
	
	     For example, if your Supplemental disk is in drive A, and you want to
	     install the files on drive C in your SUPP directory, type "A:" (without
	     the quotation marks) at the command prompt, and then type the following:
	
	  " SETUP C:\SUPP " (without the quotation marks)
	
	  2. When the Setup program starts, choose A if you want install the
	     Supplemental disk files. Choose S if you want to install some of the
	     files--for example, just the network files.
	
	     If you choose to install some of the files, Setup will prompt you to
	     install groups of files, including the MS-DOS 6 Network drivers.
	
	  3. After Setup finishes installing the Network files, rename these original
	     network files to back them up:
	
	  REDIR.EXE (usually in C:\LANMAN.DOS\REDIR)
	  NET.EXE (usually in C:\LANMAN.DOS\BASIC)
	  NETBEUI.DOS (usually in C:\LANMAN.DOS\DRIVERS\PROTOCOL\NETBEUI)
	
	  4. Copy new version of NETBEUI.DOS to the same drive and directory as the old
	     version of the file.
	
	  5. Copy the new REDIR.2XE file to the same drive and directory as the old
	     REDIR.EXE file. Rename the new file to REDIR.EXE.
	
	  6. Copy the new NET.1XE file to the same drive and directory as the old
	     NET.EXE file. Rename the new file to NET.EXE.
	
	  7. Restart your computer. Or, if you have not installed MS-DOS 6, run Setup
	     now.
	
	3. Microsoft LAN Manager Version 1.x Enhanced and 100-Percent Compatible
	  Networks
	
	  To update LAN Manager version 1.x Enhanced, replace your current NETWKSTA.EXE
	  file with the new version included with the MS-DOS 6 Supplemental disks. It's
	  a good idea to preserve your current file by renaming it with a different
	  extension, such as .OLD or .BAK.
	
	  To update LAN Manager version 1.x Enhanced:
	
	  1. Run the Setup program from the drive and directory that contains your
	     Supplemental disk files and specify the drive and directory to which you
	     want to install your files.
	
	     For example, if your Supplemental disk is in drive A, and you want to
	     install the files on drive C in your SUPP directory, type "A:" (without
	     the quotation marks) at the command prompt, and then type the following:
	
	  " SETUP C:\SUPP " (without the quotation marks)
	
	  2. When the Setup program starts, choose A if you want install the
	     Supplemental disk files. Choose S if you want to install some of the
	     files--for example, just the network files.
	
	     If you choose to install some of the files, Setup will prompt you to
	     install groups of files, including the MS-DOS 6 Network drivers.
	
	  3. After Setup finishes installing the Network files, rename this original
	     network file to back it up:
	
	  NETWKSTA.EXE (usually in C:\LANMAN.DOS\NETPROG)
	
	  4. Copy the new NETWKSTA.1XE file to the same drive and directory as the old
	     NETWKSTA.EXE file. Rename the new file to NETWKSTA.EXE.
	
	  5. Restart your computer. Or, if you have not installed MS-DOS 6, run Setup
	     now.
	
	4. Microsoft LAN Manager Version 1.x Basic and 100-Percent Compatible Networks
	
	  To update LAN Manager version 1.x Basic, replace your current REDIR.EXE file
	  with the new version included with the MS-DOS 6 Supplemental disks. It's a
	  good idea to preserve your current file by renaming it with a different
	  extension, such as .OLD or .BAK.
	
	  To update LAN Manager version 1.x Basic:
	
	  1. Run the Setup program from the drive and directory that contains your
	     Supplemental disk files and specify the drive and directory to which you
	     want to install your files.
	
	     For example, if your Supplemental disk is in drive A, and you want to
	     install the files on drive C in your SUPP directory, type "A:" (without
	     the quotation marks) at the command prompt, and then type the following:
	
	  " SETUP C:\SUPP " (without the quotation marks)
	
	  2. When the Setup program starts, choose A if you want install the
	     Supplemental disk files. Choose S if you want to install some of the
	     files--for example, just the network files.
	
	     If you choose to install some of the files, Setup will prompt you to
	     install groups of files, including the MS-DOS 6 Network drivers.
	
	  3. After Setup finishes installing the Network files, rename this original
	     network file to back it up:
	
	  REDIR.EXE (usually in C:\LANMAN.DOS\BASIC)
	
	  4. Copy the new REDIR.1XE file to the same drive and directory as the old
	     REDIR.EXE file. Rename the new file to REDIR.EXE.
	
	  5. Restart your computer. Or, if you have not installed MS-DOS 6, run Setup
	     now.
	
	5. Microsoft MS-Net and 100-Percent Compatible Networks
	
	  To update MS-Net or 100-percent compatible networks, replace your current
	  REDIR.EXE and SETNAME.EXE files with the new versions included with the
	  MS-DOS 6 Supplemental disks. It's a good idea to preserve your current file
	  by renaming it with a different extension, such as .OLD or .BAK.
	
	  To update MS-NET or a 100-percent compatible network:
	
	  1. Run the Setup program from the drive and directory that contains your
	     Supplemental disk files and specify the drive and directory to which you
	     want to install your files.
	
	     For example, if your Supplemental disk is in drive A, and you want to
	     install the files on drive C in your SUPP directory, type "A:" (without
	     the quotation marks) at the command prompt, and then type the following:
	
	  " SETUP C:\SUPP " (without the quotation marks)
	
	  2. When the Setup program starts, choose A if you want install the
	     Supplemental disk files. Choose S if you want to install some of the
	     files--for example, just the network files.
	
	     If you choose to install some of the files, Setup will prompt you to
	     install groups of files, including the MS-DOS 6 Network drivers.
	
	  3. After Setup finishes installing the Network files, rename these original
	     network files to back them up:
	
	     REDIR.EXE (usually in the directory that contains your network files)
	     SETNAME.EXE (usually in the directory that contains your network files)
	
	  4. Copy new version of SETNAME.EXE to the same drive and directory as the old
	     version of the file.
	
	  5. Copy the new REDIR.2XE file to the same drive and directory as the old
	     REDIR.EXE file. Rename the new file to REDIR.EXE.
	
	  6. Review your MSNET.INI file to make sure the REDIR command appears before
	     the SETNAME command when both appear in the same command set.
	
	     For example, suppose one of your command sets in MSNET.INI appears as
	     follows
	
	  start rdr $1
	     chknet
	     loadniu -r -d -m:d -i:5 exniuw.xfm stdlc
	     xnsbios -m:d -i:5
	     session
	     setname $1
	     redir /1:26 /s:9
	     prtsc
	
	     You would reverse the order of the SETNAME and REDIR commands so the
	     command set appears as follows:
	
	  start rdr $1
	     chknet
	     loadniu -r -d -m:d -i:5 exniuw.xfm stdlc
	     xnsbios -m:d -i:5
	     session
	     redir /1:26 /s:9
	     setname $1
	     prtsc
	
	  7. Restart your computer. Or, if you have not installed MS-DOS 6, run Setup
	     now.
	
	6. 3Com 3+Share Version 1.6
	
	  To update 3Com 3+Share version 1.6, replace your current MSREDIR.EXE file with
	  the new version included with the MS-DOS 6 Supplemental disks. It's a good
	  idea to preserve your current file by renaming it with a different extension,
	  such as .OLD or .BAK.
	
	  If you have 3+Share version earlier than 1.6, contact your network vendor for
	  an update.
	
	  To update 3Com 3+Share version 1.6:
	
	  1. Run the Setup program from the drive and directory that contains your
	     Supplemental disk files and specify the drive and directory to which you
	     want to install your files.
	
	     For example, if your Supplemental disk is in drive A, and you want to
	     install the files on drive C in your SUPP directory, type "A:" (without
	     the quotation marks) at the command prompt, and then type the following:
	
	  " SETUP C:\SUPP " (without the quotation marks)
	
	  2. When the Setup program starts, choose A if you want install the
	     Supplemental disk files. Choose S if you want to install some of the
	     files--for example, just the network files.
	
	     If you choose to install some of the files, Setup will prompt you to
	     install groups of files, including the MS-DOS 6 Network drivers.
	
	  3. After Setup finishes installing the Network files, rename these original
	     network files to back them up:
	
	  MSREDIR.EXE (usually in C:\3SHARE)
	
	  4. Copy the new REDIR.2XE file to the same drive and directory as the old
	     MSREDIR.EXE file. Rename the new file to MSREDIR.EXE.
	
	  5. Restart your computer. Or, if you have not installed MS-DOS 6, run Setup
	     now.
	
	Additional query words: 6.00 NOUPD
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
