---
layout: page
title: "Q98492: How to Install Intel EtherExpress Card"
permalink: kb/098/Q98492/
---

## Q98492: How to Install Intel EtherExpress Card

	Article: Q98492
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article explains how to install the Intel EtherExpress card. This article
	assumes that your RPL workstations are running MS-DOS version 5.0 or later
	(remote OS/2 workstations are not supported) and that the server is using LAN
	Manager's default file structure.
	
	MORE INFORMATION
	================
	
	Getting Started
	---------------
	
	Chapter 13 of the "Microsoft LAN Manager Administrator's Guide" discusses
	Remoteboot workstations. Follow the instructions in these three sections:
	
	- Preparing the Server, page 243
	
	- Installing LAN Manager with Remoteboot Selections, page 244
	
	- Setting up for MS-DOS and MS OS/2 Workstations, page 246
	
	Step 4 of "Setting Up for MS-DOS and MS OS/2 Workstations" refers to MSDOS.SYS,
	IO.SYS, IBMBIO.COM, and IBMDOS.COM. Use File Manager to turn off the system and
	hidden file attributes for these files. Check that these attributes are correct
	by displaying a directory listing for:
	
	  c:\lanman\rpl\rplfiles\binfiles\dos500
	
	If the MSDOS.SYS and IO.SYS files are not visible in this virtual root directory
	when you boot an RPL workstation, this message is displayed:
	
	  NON-SYSTEM DISK insert DOS disk and strike any key.
	
	The name of the server MUST conform to the MS-DOS naming convention (eight
	characters or less for the name, three characters for the extension).
	
	Be sure RPLINST runs successfully before you continue. It indicates that the
	MS-DOS directory is installed correctly.
	
	Installation Procedure
	----------------------
	
	1. Make sure the Remoteboot service is NOT running. To do this, log on as ADMIN
	  and enter the command NET STOP REMOTEBOOT at the server's OS/2 prompt.
	
	2. Remove all references to the Intel EtherExpress (EXP16) card in the RPL.MAP
	  and RPLMGR.INI files located in C:\LANMAN\RPL. (If you haven't entered any
	  references, there may not be any.) Use this procedure to find any there are:
	
	  a. Look for the lines that begin with "00AA00??????" in the RPL.MAP file.
	     Remove any you find.
	
	  b. Look for configurations that contain "bblink = RDOSIN"
	     or"adapters=00AA00??????". Remove any you find.
	
	3. In the RPL.MAP file, enter information about the EtherExpress adapter (the
	  path is \LANMAN\RPL\RPL.MAP).
	
	  Use existing entries in the RPL.MAP file. Modify them to look like the
	  examples below.
	
	  Note: The examples are broken into two lines because of display
	  restrictions--DO NOT break your entries in the RPL.MAP file. Check the syntax
	  and spacing carefully.
	
	  In the Boot Block Records
	  -------------------------
	
	  yyyyyyyyyyyy BBLOCK\NETBEUI\EXP16\DOSBB.CNF 2 6 A ~ DOS~INTEL~EXP16
	  00AA00 ~ ,,, ~  RDOSIN ~ ~ ~ ~ ~ ~
	
	  In the Workstation Records
	  --------------------------
	
	  00AA00?????? INTEL D FITS\DOS500 (RPL_SERVER_NAME) S ~ ~ ~ ,,, ~ RDOSIN
	  ~ DEFAULT *~New~Intel~Exp16~*~ ~ ~
	
	  Note: The RPL_Server_Name must conform to the MS-DOS naming convention.
	
	4. In the Configuration section of the RPLMGR.INI file, add these new sections
	  for the EtherExpress adapter:
	
	  [configuration]
	
	  name = INTEL
	  os = DOS500
	  dirname = DOS
	  dirname2 = DOS500
	  bblink = RDOSIN
	  fitfileshared = fits\DOS500
	  comment = DOS 5.00 EtherExpress card
	  adapter = 00AA00??????
	
	5. Copy the EtherExpress MS-DOS NDIS driver from the Intel disk
	  (A:\MSLANMAN.DOS\DRIVERS\ETHERNET\EXP16\EXP16.DOS) to the
	  (C:\LANMAN\RPL\BBLOCK\NDIS) directory.
	
	6. Create the directory C:\LANMAN\RPL\BBLOCK\NETBEUI\EXP16. In this directory,
	  create a PROTOCOL.INI and a DOSBB.CNF file.
	
	  Example PROTOCOL.INI File
	  -------------------------
	
	   [protman]
	   drivername = protman$
	   dynamic = yes
	   priority = netbeui
	
	   [netbeui]
	   drivername = netbeui$
	   bindings = EXP16
	   names = 5
	   ncbs = 8
	   packets = 20
	   pipeline = 10
	   sessions = 4
	   stacksize = 512
	   lanabase = 0
	
	  [EXP16]
	  IOADDRESS = 0x300
	  DRIVERNAME = EXP16$
	  RPL
	
	  Note: The IOADDRESS line should match the I/O address you chose for the
	  EtherExpress card.
	
	  Example DOSBB.CNF File
	  ----------------------
	
	  ; DOS on INTEL ETHEREXPRESS
	  RPL BBLOCK\RPLBOOT.SYS
	  LDR BBLOCK\RPLSTART.COM ~
	  DAT BBLOCK\NETBEUI\EXP16\PROTOCOL.INI
	  DRV BBLOCK\RPLDISK.SYS ~ 4 M
	  EXE BBLOCK\RPLPRO1.COM ~ 2~
	  EXE BBLOCK\RPLBIND2.EXE ~ ~
	  EXE BBLOCK\PROTMAN.EXE ~ ~
	  EXE BBLOCK\RPLBIND1.EXE ~ ~
	  DRV BBLOCK\TCPDRV.DOS /I:C:\LANMAN.DOS ~ ~
	  EXE BBLOCK\NETBEUI\NETBEUI.EXE ~ 10 ~
	  DRV BBLOCK\NDIS\EXP16.DOS ~ ~ ~
	  DRV BBLOCK\PROTMAN.DOS /I:C:\LANMAN.DOS ~ M
	
	  Note: You can copy the DOSBB.CNF file from the subdirectory of another network
	  card then modify it to match this example.
	
	7. Create this directory structure:
	
	     C:\LANMAN\RPL\RPLFILES\MACHINES\INTEL\DEFAULT\WKSTA
	
	  Copy the PROTOCOL.INI you created in the previous step to the WKSTA directory.
	
	8. Update RPLMGR.
	
	  a. Change to the C:\LANMAN\RPL and invoke RPLMGR.
	
	  b. From the Remoteboot menu, choose New Profile.
	
	  c. Enter Profile Name, comment, and configuration.
	
	  " Profile name: Intel
	  Comment: Your comment here
	  Configuration: DOS500 EtherExpress card " (without the quotation marks)
	
	     The configuration line should match the COMMENT line entry in the
	     RPLMGR.INI file.
	
	  d. Choose OK.
	
	  e. When disk activity stops, exit RPLMGR.
	
	9. Start the Remoteboot service by entering the NET START REMOTEBOOT command at
	  the OS/2 command prompt.
	
	  Note: After the RPL installation is complete, configure the server to
	  automatically start the Remoteboot service.
	
	10. Install the EtherExpress card and ROM as described in the Intel manual.
	
	11. Attach the workstation to the network and turn it on.
	
	12. The workstation will attach to the server and eventually return you to the
	  command prompt. The "C:\" prompt is a virtual link to the
	  C:\LANMAN\RPL\RPLFILES\MACHINES\INTEL\DEFAULT\WKSTA directory on the
	  server.
	
	  Note: The workstation has limited file permissions until the user executes a
	  NET LOGON command.
	
	As you can see, this is a long process. If the RPL workstation does not find the
	server (for example, the error message "Searching for a DLC RPL server" is
	displayed), go back through each step and check the syntax, spelling,
	capitalization, and directory structures. If the workstation comes up with an
	error such as "NOT USER LEVEL SECURITY," try changing the boot PROM's ROM
	address to use another.
	
	REFERENCES
	==========
	
	Intel fax on installing EtherExpress for Remoteboot (503) 629-7576 or (800)
	525-3019
	
	"Microsoft LAN Manager Administrator's Guide," Chapter 13
	
	Additional query words: 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
