---
layout: page
title: "Q79254: Creating a Bootable LM 2.1 Enhanced RAS Workstation Disk"
permalink: /kb/079/Q79254/
---

## Q79254: Creating a Bootable LM 2.1 Enhanced RAS Workstation Disk

{% raw %}

	Article: Q79254
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	SUMMARY
	=======
	
	LAN Manager version 2.1 with the Remote Access Service (RAS) is primarily
	intended to run on machines with a hard disk drive. However, it is possible to
	create a high-density, bootable LAN Manager 2.1 Enhanced RAS MS-DOS workstation
	floppy disk. The following steps describe the procedures and directory
	structures required.
	
	MORE INFORMATION
	================
	
	NOTES
	-----
	
	Because RAS cannot be installed to a floppy disk, it is necessary to first
	install a LAN Manager 2.1 enhanced workstation with the Remote Access Service
	(RAS) to a workstation with a hard disk drive. Additionally, RAS must be
	configured for the modem type found on the machine for which this disk is being
	prepared.
	
	Also, this article assumes that LAN Manager will be installed to the
	C:\LANMAN.DOS directory. If this is not the case, substitute the appropriate
	directory.
	
	INSTALLATION STEPS
	------------------
	
	Create a bootable high-density floppy disk (FORMAT A: /S), using either a
	3.5-inch (1.44 MB) or 5.25-inch (1.2 MB) disk. Once the disk is formatted, copy
	the files listed below to the same directory on the floppy disk. The tree
	structure of this disk is as follows:
	
	A:\ 
	   COMMAND  COM
	   CONFIG   SYS
	   AUTOEXEC BAT
	
	A:\LANMAN.DOS\ 
	             LANMAN   INI
	             MODEMS   INF
	             RASPHONE MSG
	             RASDIAL  MSG
	             RASHELP  MSG
	             COMDEV   INI
	             PHONE    INF
	             PROTOCOL INI
	
	A:\LANMAN.DOS\NETPROG\ 
	                     CHKNET   EXE
	                     MINSES   EXE
	                     NETBIND  COM
	                     LOAD     COM
	                     OSO001   MSG
	                     NET      MSG
	                     NET      HLP
	                     NET      EXE
	                     NETWKSTA EXE
	                     RASLOAD  BAT
	                     RASPHONE EXE
	                     VCOMMIOD EXE
	                     WANTSR   EXE
	
	A:\LANMAN.DOS\DRIVERS\PROTMAN\ 
	                             PRO     MSG
	                             PROTMAN DOS
	                             PROTMAN EXE
	
	A:\LANMAN.DOS\DRIVERS\PROTOCOL\ASYBEUI\ 
	                                      ASYBEUI EXE
	
	A:\LANMAN.DOS\DRIVERS\ASYNC\ 
	                           ASYMAC DOS
	
	A:\LANMAN.DOS\SERVICES\ 
	                      MSRV     EXE
	                      ENCRYPT  EXE
	                      NETPOPUP EXE
	
	A:\LANMAN.DOS\LOGS\ 
	                  MESSAGES LOG
	
	In all cases, the files listed are copied from the hard disk directory to the
	identical directory on drive A.
	
	There is an alternative to copying the files directly from the hard disk to the
	floppy disk that involves deleting files from the hard disk installation before
	copying to the floppy disk. In this circumstance, all files in the LAN Manager
	tree not listed in the above description are deleted, leaving only the structure
	as listed. At that point, XCOPY the structure to a formatted system floppy disk
	(note: include the subdirectory switch with XCOPY). For example:
	
	  " xcopy c:\lanman.dos a:\lanman.dos /s" (without the quotation marks)
	
	The disadvantage of the installation technique just described is that it will
	leave the LAN Manager tree on the hard disk workstation without all of the
	functionality of the original installation.
	
	MODIFICATIONS TO SYSTEM FILES
	-----------------------------
	
	Once the files have been copied to the appropriate directories, make the
	following modification to the lanroot entry in the [workstation] section of
	LANMAN.INI:
	
	  lanroot = A:\LANMAN.DOS
	
	Modify CONFIG.SYS to update the LAN Manager driver devices to look to drive A, as
	well as set the location of the shell to A:\. For example:
	
	  FILES= 30
	  BUFFERS=10
	  SHELL=A:\COMMAND.COM /P /e:256
	  DEVICE=A:\LANMAN.DOS\DRIVERS\PROTMAN\PROTMAN.DOS /i:A:\LANMAN.DOS
	  DEVICE=A:\LANMAN.DOS\DRIVERS\ASYNC\ASYMAC.DOS
	
	It is also necessary to modify AUTOEXEC.BAT by setting the comspec, path, and LAN
	Manager path extension to point to drive A. It is also possible to autostart
	RASPHONE by including it at the end of the AUTOEXEC.BAT file, after calling
	RASLOAD. For example:
	
	@ECHO OFF
	PROMPT $P$G
	SET COMSPEC=A:\COMMAND.COM
	PATH A:\;
	REM ====== LANMAN 2.1 === DO NOT MODIFY BETWEEN THESE LINES ===== LANMAN 2.
	===
	SET PATH=A:\LANMAN.DOS\NETPROG;%PATH%
	NET START WORKSTATION
	CALL RASLOAD
	REM ====== LANMAN 2.1 === DO NOT MODIFY BETWEEN THESE LINES ===== LANMAN 2.
	===
	
	Note: The above are minimal configurations. Options can be added at any time, and
	are limited only by available disk space.
	
	OPTIONS
	-------
	
	If the modem is sufficiently fast, it is possible to locate the majority of the
	MS-DOS and network executables on the network, and allow them to be accessed
	across the modem connection. Please note that even with the fastest of modems,
	workstation performance will be seriously degraded. The steps necessary for
	creating this situation include the following:
	
	- Create a share on the server that contains MS-DOS and a full LAN Manager 2.1
	  Enhanced MS-DOS RAS workstation.
	
	- Create a batch file, called LOGON.BAT, to log on to the server. The usage is
	  identical to the NET LOGON command currently used. The batch file (LOGON.BAT)
	  will resemble the following:
	
	     @ECHO OFF
	     REM  Logon to server and transfer control to the LM share
	     net logon %1 %2 /y
	     net use A: \\<servername>\<share>
	     REM  This connects us to the LM share
	
	- The structure of the directories on this share should be identical to that
	  listed above.
	
	- Access to the boot floppy will be disallowed. However, on a machine with only
	  one floppy disk drive, the boot floppy disk can still be accessed via the
	  MS-DOS drive mapping capabilities. Therefore, the disk drive can be
	  referenced by accessing B:. MS-DOS will map this to the one physical floppy
	  disk, allowing access.
	
	- Similarly, a batch file for logging off must be constructed. It should
	  resemble the following:
	
	     @ECHO OFF
	     REM Logoff from server
	     B:
	     NET LOGOFF /Y
	     A:
	
	  Using this method may result in some harmless error messages of missing batch
	  files and possibly a missing NET.MSG at log off time. This is to be expected
	  and the messages can be ignored.
	
	Given this configuration, it is possible to create a bootable LAN Manager 2.1
	Enhanced MS-DOS RAS floppy disk. The important points to note are that it is
	required to first install the configuration to a workstation with a hard disk.
	The installation must be made for the hardware that is to be booted from the
	floppy disk, regardless of what is on the hard disked workstation. There should
	be sufficient room on the floppy disk for the most commonly used MS-DOS
	utilities.
	
	Additional query words: 2.10 2.10a 2.20 1.00
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
