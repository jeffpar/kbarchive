---
layout: page
title: "Q71872: MS-DOS 5 Upgrade README.TXT: Network Compatibility"
permalink: /kb/071/Q71872/
---

## Q71872: MS-DOS 5 Upgrade README.TXT: Network Compatibility

{% raw %}

	Article: Q71872
	Product(s): Microsoft Disk Operating System
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 31-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft MS-DOS 5 Upgrade
	README.TXT file.
	
	MORE INFORMATION
	================
	
	6. MAKING YOUR NETWORK COMPATIBLE WITH MS-DOS 5.0
	-------------------------------------------------
	
	6.1 MS-DOS Shell and Networks:
	
	Most network software won't work correctly if you start it from a MS-DOS Shell
	command prompt. Start your network before starting MS-DOS Shell.
	
	6.2 3+Share:
	
	If you installed 3Com 3+Share with minimal NetBIOS implementation, do one of the
	following:
	
	- Reinstall with a complete NetBIOS implementation.
	
	- Use the REDIR.400 file to replace the MSREDIR.EXE file on your hard disk.
	
	- Call Microsoft Sales Information Center (MSIC) and request the LAN Manager
	  2.0 supplemental disk; see your registration card for the phone number.
	
	6.3 AT&T StarGROUP:
	
	If your AT&T StarGROUP version does not support MS-DOS 5.0, contact your
	AT&T representative or the AT&T National Systems Support Hotline for
	information about required modifications or upgrades.
	
	6.4 Microsoft LAN Manager 2.0 Enhanced:
	
	If you are running Microsoft LAN Manager 2.0 Enhanced or an OEM version of LAN
	Manager 2.0 Enhanced, you may want to take advantage of any remaining space in
	the upper memory area to load LAN Manager services such as NETPOPUP in this
	area. Call Microsoft Customer Service to request the LAN Manager 2.0
	supplemental disk and technical notes. See your registration card for the phone
	number.
	
	************************************************************
	*                                                          *
	*   the Lan Manager 2.0 supplemental disk can be obtained  *
	*        by calling:   800-426-9400                        *
	*                                                          *
	************************************************************
	
	If you are running Microsoft LAN Manager 2.0 Enhanced and get a "NET3055"
	message, do one of the following:
	
	- Use the EMM386 /ram switch and the LIM=YES command in the [workstation]
	  section of your LANMAN.INI file.
	
	- or -
	
	- If you use the EMM386 /noems switch, use the LIM=NO command in the
	  [workstation] section of your LANMAN.INI file.
	
	6.5 Net/One PC:
	
	If Ungermann-Bass Net/One PC does not load with MS-DOS 5.0, do one of the
	following:
	
	- Contact your vendor to get an updated LOADNIU.EXE file.
	
	- Put a UBPAUSE command between the LOADNIU and XNSBIOS lines of the MSNET.INI
	  file.
	
	- Issue network commands from a batch file that includes a PAUSE command
	  between the LOADNIU and XNSBIOS lines.
	
	6.6 Novell Networks:
	
	NetWare Shell Version:
	
	  The NetWare workstation shell software is Novell's basic DOS shell and is
	  included with MS-DOS 5.0. You may require a different shell for a specific
	  application. Contact your authorized Novell reseller if you believe another
	  shell may be needed. EMSNET5.EXE and XMSNET5.EXE, alternate shells, are
	  available from Novell.
	
	Novell Remote Workstations (RPLFIX.COM):
	
	  If you can't load MS-DOS 5.0 on your remote-boot workstation, contact Novell
	  for an upgrade of your remote-boot software.
	
	Drive Mapping Utilities:
	
	  If you run LOGIN.EXE, MAP.EXE, and SESSION.EXE from MS-DOS Shell or while
	  MS-DOS Shell is running, a search path is not added to the existing path. Use
	  these programs before starting MS-DOS Shell.
	
	COMSPEC Variable:
	
	  If you use the Novell login program to set the COMSPEC variable after
	  starting MS-DOS 5.0, and you can't reload the COMMAND.COM file, remove the
	  c:\dos\ entry from the SHELL= command in your CONFIG.SYS file or contact your
	  Novell vendor to get a new login program.
	
	TBMI2.COM and Task Swapper:
	
	  If you can't use Task Swapper in MS-DOS Shell when running a Novell network,
	  do the following:
	
	  1. Expand and copy the IPX.OB_ and TBMI2.CO_ files from Disk 6 for 5.25" disks
	  or from Disk 3 for 3.5" disks.
	
	  2. Rename the files IPX.OBJ and TBMI2.COM.
	
	  3. Use the IPX.OBJ file to create a new IPX.COM file. For information about
	  creating an IPX.COM file, see your Novell documentation.
	
	  4. Start your network, using the new IPX.COM and NET5.COM files.
	
	  5. Start TBMI2.COM.
	
	  6. Start the application that may be causing problems with Task Swapper. Run the
	  application and then exit.
	
	  7. Display diagnostic information by typing the following:
	
	  " tbmi2 /d" (without the quotation marks)
	
	  8. If the value in the field named Far Call Usage is not 0, you need to run
	  TBMI2.COM before using Task Swapper.
	
	  To get help with TBMI2.COM, type the following:
	
	  " tbmi2 /?" (without the quotation marks)
	
	  The default configuration for TBMI2.COM is correct for most applications. If
	  you need help configuring the program, contact Novell.
	
	TBMI2.COM and Windows:
	
	  Don't run TBMI2.COM if you are using Windows 3.0.
	
	6.7 PC-NFS 3.0:
	
	If you use PC-NFS 3.0 with MS-DOS Shell, MS-DOS Shell may display more drives
	than you have currently enabled. To prevent this, use the PC-NFS /d switch to
	specify the number of drives you are using. For more information, see your
	PC-NFS documentation.
	
	If you can't use the COPY or XCOPY command on PC-NFS 3.01, contact your vendor to
	get an updated version of the PCNFS.SYS device driver.
	
	6.8 TOPS Network:
	
	If your system is a TOPS workstation, the MS-DOS Shell MOVE command may not
	work.
	
	Don't use the LOADHIGH command with a TOPS network.
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : :5.0
	
	=============================================================================
	

{% endraw %}
