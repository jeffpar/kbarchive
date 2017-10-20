---
layout: page
title: "Q157740: XCLN: Using ShivaRemote w/ Exchange (MS-DOS/LanMan TCP/IP)"
permalink: /kb/157/Q157740/
---

## Q157740: XCLN: Using ShivaRemote w/ Exchange (MS-DOS/LanMan TCP/IP)

{% raw %}

	Article: Q157740
	Product(s): Microsoft Exchange
	Version(s): MS-DOS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup kbusage
	Last Modified: 14-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A white paper on ShivaRemote is located on Microsoft TechNet and can also be
	found on the following World Wide Web location:
	
	  http://www.microsoft.com/ExchangeSupport/
	
	This article shows you how to use ShivaRemote 3.59 with the Microsoft Exchange
	MS-DOS client and LAN Manager version 2.2c with TCP/IP.
	
	Note that because the Microsoft Exchange MS-DOS client does not provide remote
	functionality, you have to run Connect.exe first to establish the connection
	before starting Microsoft Exchange Server or accessing network resources.
	
	Conventional memory must be optimized in order for the configuration in this
	article to work (with LanMan TCP). This configuration will not work if
	Doublespace/Drvspace is implemented, because of the additional conventional
	memory requirements for the compression drivers. Use the Config.sys,
	Autoexec.bat, and Protcol.ini files shown at the end of this article as models.
	
	MORE INFORMATION
	================
	
	Server Considerations
	---------------------
	
	Configure the Remote Access Server (either Windows NT or a Shiva LanRover) to
	allow remote clients to request a predetermined IP address. To use this option
	in Windows NT:
	
	1. In Control Panel, click the Network icon.
	
	2. Click RAS, click Network, and click Server Settings.
	
	3. Click TCP, and select the "Allow remote clients to request a predetermined IP
	  address" check box.
	
	Client Configuration
	--------------------
	
	Install LAN Manager version 2.2c software on the client computer. This is located
	on the Windows NT 3.51 Server compact disc in the
	Clients\Lanman\Disks\Disk1\Setup directory.
	
	NOTE: If Lanman has already been installed, run Setup.exe from the LanMan
	installation directory (Lanman.dos by default).
	
	1. Configure Lanman with the following options:
	
	   - TCP/IP (only) bound to the network card driver
	
	   - A static IP address, subnet mask, and default gateway
	
	   - DHCP disabled
	
	2. Manually add entries for the Microsoft Exchange Server computer name and IP
	  address in the HOSTS file. This file is located in the
	  <drive>:\Lanman.dos\Etc directory, where <drive> is the letter of
	  the local hard disk drive where LanMan is installed.
	
	3. Configure Lanman with the following options:
	
	   - Username and HostName in the Advanced dialog box
	
	   - Windows Sockets enabled in the Advanced dialog box
	
	   - Computername, Username, and Domain in the Workstation Settings dialog box
	
	4. Install the Microsoft Exchange client for MS-DOS. By default, the
	  installation will install the ShivaRemote files in the same directory that
	  the Microsoft Exchange client for MS-DOS is installed in.
	
	5. In the Config.sys file, manually add the following line:
	
	  " DEVICE=C:\EXCHANGE\DIALNDIS.EXE(after DEVICE=...\PROTMAN.DOS
	  /i:C:\LANMAN.DOS)" (without the quotation marks)
	
	6. In the Config.sys file, remark out or remove the line that loads the network
	  card driver.
	
	7. In the \Lanman.Dos\Protocol.ini file, manually edit the following:
	
	     [TCPIP_XIF]
	     ;BINDINGS = "LAN Card Driver"     Remark out this line
	     BINDINGS = SDIALIN$               Add this line
	
	     [SDIALIN$]                        Add this line
	     DriverName = SDIALIN$             Add this line
	
	8. Restart the computer and press F5 when the "Starting MS-DOS" text message is
	  displayed. This will bypass the Config.sys and Autoexec.bat files if you are
	  using MS-DOS 6.xx.
	
	9. Run Connect.exe from the Microsoft Exchange client installation directory to
	  bring up the ShivaRemote Connect window.
	
	10. On the Tools menu, click Port Setup to configure the modem port. (You may
	  receive an Out of Memory message if you attempt to select a port/modem
	  without first booting with an F5.)
	
	11. Click the Options button to select the IP protocol and type the static IP
	  address of the client computer. For more information on creating and saving
	  a connection file, refer to the ShivaRemote Online Guide.
	
	12. Save the new connection information and quit the Connect.exe utility.
	
	13. Restart the computer again. If you receive any error messages during
	  startup, resolve these before continuing.
	
	14. Open the connection file you want and click the Connect button. After the
	  connection has been established, quit the Connect program. You should see
	  the message regarding the static IP address. Make sure this is the same IP
	  address which is statically assigned to the client computer.
	
	15. Next, attempt to PING the Microsoft Exchange server computer's IP address
	  and host name. The PING.EXE utility is located in the \LANMAN.DOS\NETPROG
	  directory. If PINGing the host name fails, but PINGing the IP address works,
	  the HOSTS file must be modified (see Step 2 above). This step is necessary
	  for the Microsoft Exchange client to connect to the server.
	
	16. Start the Microsoft Exchange client.
	
	NOTE: To disconnect, either run Connect.exe again and select Disconnect or type
	"connect /d" (without the quotation marks) from the command line.
	
	Updated modem scripts for use with ShivaRemote can be found on Shiva's web page
	at www.shiva.com under "support"/modem scripts.
	
	Additional configuration information can also be found in the Config.hlp file
	installed during installation of the ShivaRemote software.
	
	Sample Configuration Files
	--------------------------
	
	NOTE: In order to format these samples for the Web, some line breaks had to be
	changed. In the Config.sys example, the following line should be part of the
	line that preceded it (this occurs twice):
	
	  /i:C:\LANMAN.DOS
	
	In the Autoexec.bat example, the following line should be part of the line that
	preceded it:
	
	  2.2a
	
	Use these Config.sys, Autoexec.bat, and Protcol.ini files as models.
	
	  Config.sys
	  ----------
	
	  device=c:\dos\himem.sys /testmem:off
	  device=c:\dos\emm386.exe noems
	  devicehigh=c:\win95\command\drvspace.sys /move
	  LASTDRIVE=Z
	  DOS=HIGH,UMB
	  DEVICEhigh=C:\LANMAN.DOS\DRIVERS\PROTMAN\PROTMAN.DOS /i:C:\LANMAN.DOS
	  devicehigh=c:\doscln\dialndis.exe
	  rem DEVICE=C:\LANMAN.DOS\DRIVERS\ETHERNET\DEPCA\DEPCA.DOS
	  DEVICEhigh=C:\LANMAN.DOS\DRIVERS\PROTOCOL\tcpip\tcpdrv.dos
	     /i:C:\LANMAN.DOS
	  DEVICEhigh=C:\LANMAN.DOS\DRIVERS\PROTOCOL\tcpip\nemm.dos
	
	  Autoexec.bat
	  ------------
	
	  @REM ==== LANMAN 2.2a == DO NOT MODIFY BETWEEN THESE LINES == LANMAN
	     2.2a
	  ====
	  SET PATH=C:\LANMAN.DOS\NETPROG;%PATH%
	  C:\LANMAN.DOS\DRIVERS\PROTOCOL\tcpip\umb.com
	  NET START WORKSTATION
	  LOAD TCPIP
	  SOCKETS
	  rem NET LOGON shivat *
	  @REM ==== LANMAN 2.2a == DO NOT MODIFY BETWEEN THESE LINES == LANMAN
	     2.2a
	  ====
	  set EXCHANGE=C:\DOSCLN
	  set RPC_BINDING_ORDER=ncalrpc,ncacn_np,ncacn_spx,ncacn_ip_tcp,netbios
	
	  Protocol.ini
	  ------------
	
	  [PROTMAN]
	    DRIVERNAME = PROTMAN$
	    DYNAMIC = YES
	    PRIORITY = NETBEUI
	
	  [TCPIP_XIF]
	    DRIVERNAME      = TCPIP$
	    IPADDRESS0 = 200 200 200 201
	    SUBNETMASK0 = 255 255 255 0
	    DEFAULTGATEWAY0 =
	    NBSESSIONS = 6
	  ; the following two parameters added after documentation was completed
	    TCPSEGMENTSIZE  = 1450
	    TCPWINDOWSIZE   = 1450
	    LOAD            = tcptsr[c],tinyrfc[c],emsbfr[cr]
	    UNLOAD          = "unloadt /notsr[dc]"
	  ;  BINDINGS = "DEPCA_NIF"
	    BINDINGS = SDIALIN$
	    NETFILES = C:\LANMAN.DOS\ETC
	    DISABLEDHCP = 1
	    LANABASE = 0
	
	  [SDIALIN$]
	  DRIVERNAME=SDIALIN$
	
	  [DEPCA_NIF]
	
	  ; protocol.ini section for the DEC EtherWORKS (MC, LC, Turbo & DEPCA)
	  Adapters
	
	      DriverName  = DEPCA$
	      MaxMulticast = 12
	      MaxTransmits = 32
	      AdapterName  = DE200
	      RamAddress   = 0xD000
	      Interrupt   = 3
	   ;  use Interupt = 5 for turbo board
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	REFERENCES
	==========
	
	For additional information on supported Shiva configurations for use with the
	Microsoft Exchange Server, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q158124 XCLN: ShivaRemote with Exchange - RAS Server Considerations
	
	  Q158074 XCLN: Using ShivaRemote with Exchange (DOS/real-mode IPX)
	
	  Q158095 Using ShivaRemote with Exchange (Windows 3.x/LanMan NetBEUI)
	
	  Q158077 Using ShivaRemote with Exchange (Windows 3.x/real-mode IPX)
	
	  Q158111 ShivaRemote with Exchange (WFW 3.11/WFW TCP/IP or NetBEUI)
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbsetup kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword3 kbExchange400DOS kbExchange500DOS
	Version           : MS-DOS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
