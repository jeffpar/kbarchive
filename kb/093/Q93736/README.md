---
layout: page
title: "Q93736: Enabling the Microsoft TCP/IP Protocol with WFWG 3.1"
permalink: /kb/093/Q93736/
---

## Q93736: Enabling the Microsoft TCP/IP Protocol with WFWG 3.1

	Article: Q93736
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 16-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows for Workgroups fully supports connectivity with Microsoft LAN
	Manager (using NetBEUI protocol) and Novell NetWare (using MSIPX protocol).
	
	This article contains information on enabling the Microsoft TCP/IP protocol
	included with Microsoft LAN Manager for use with Windows for Workgroups version
	3.1.
	
	NOTE: This article applies to Windows for Workgroups version 3.1 only; it does
	not apply to later versions of the product.
	
	MORE INFORMATION
	================
	
	The information in this article was taken from the "Windows for Workgroups
	Resource Kit" manual, Appendix E, page E3. For more information concerning
	enabling additional protocols with Windows for Workgroups, please refer to that
	manual.
	
	Configuring the Microsoft TCP/IP Protocol
	-----------------------------------------
	
	Installation of the TCP/IP protocol stack requires the manipulation of the
	CONFIG.SYS, AUTOEXEC.BAT, PROTOCOL.INI, and SYSTEM.INI files on Windows for
	Workgroups computers. The following steps were prepared to make the task easier.
	A completed example of each of these files has been provided at the end of this
	section for reference.
	
	NOTE: The following steps discuss the installation of the basic TCP/IP protocol
	stack. These procedures do not discuss the installation of the TCP/IP Utility
	pack. Thus, this installation won't permit the use of the sockets library.
	
	1. Install MS-DOS LAN Manager on a computer.
	
	  Before installing TCP/IP, you must first get a copy of the files. To do this,
	  install MS-DOS LAN Manager on a single computer, then copy the files on a
	  floppy disk or a file share point for distribution to Windows for Workgroups
	  computers.
	
	  NOTE: Please follow the procedures and installation prompts for installing the
	  TCP/IP protocol stack. When prompted for the IP address, sub-net mask, and
	  the default gateway address, you may want to use information for one of the
	  workstations you will be installing. You will be adding this information
	  manually to the PROTOCOL.INI file during the actual installation.
	
	2. Copy the following files to a floppy disk:
	
	        C:\LANMAN.DOS\DRIVERS\PROTOCOL\TCPIP\EMSBFR.EXE
	        C:\LANMAN.DOS\DRIVERS\PROTOCOL\TCPIP\NEMM.DOS
	        C:\LANMAN.DOS\DRIVERS\PROTOCOL\TCPIP\TCPTSR.EXE
	        C:\LANMAN.DOS\DRIVERS\PROTOCOL\TCPIP\TCPDRV.DOS
	        C:\LANMAN.DOS\DRIVERS\PROTOCOL\TCPIP\TINYRFC.EXE
	        C:\LANMAN.DOS\DRIVERS\PROTOCOL\TCPIP\UMB.COM
	        C:\LANMAN.DOS\DRIVERS\PROTOCOL\TCPIP\NMTSR.EXE
	        C:\LANMAN.DOS\TCPUTILS.INI
	        C:\LANMAN.DOS\NETPROG\PING.EXE
	
	3. Install Windows for Workgroups on a computer.
	
	4. Copy the TCP/IP files from the floppy disk in step 2 on the Windows directory
	  of the Windows for Workgroups computer. (If Windows for Workgroups was
	  installed in a directory besides Windows, copy these files to that
	  directory.)
	
	5. In the CONFIG.SYS file, insert the following lines immediately after the line
	  that installs PROTMAN.DOS (before WORKGRP.SYS is referenced):
	
	        device=c:\Windows\nemm.DOS
	        device=c:\Windows\tcpdrv.DOS /i:c:\Windows
	
	  NOTE: The directories for the device drivers and the information pointer for
	  the TCPUTILS.INI file (/i:c:\Windows) may be different if Windows for
	  Workgroups was installed in a directory other than that referenced in these
	  procedures. Refer to the directory discussion in step 4.
	
	6. Make the following modifications to the AUTOEXEC.BAT file:
	
	   - Immediately before the net start line, add the following line:
	
	           c:\Windows\umb.com
	         
	
	   - Immediately after the net start line, add the following lines:
	
	           c:\windows\emsbfr
	           c:\windows\tcptsr
	           c:\windows\tinyrfc
	           c:\windows\nmtsr
	
	7. Make the following modifications to the \WINDOWS\PROTOCOL.INI file:
	
	   - After the last existing transport line in the [network.setup] section, add
	     the following line:
	
	           transport=ms$tcp,ms$tcp
	         
	
	   - After the last existing LANA number line in the [network.setup] section,
	     add the following line:
	
	        lana1=ms$elnkii,1,ms$tcp
	      
	
	     NOTE: The LANA number may be different if other protocols are being loaded
	     before the TCP/IP stack. Also, the device driver identifier (shown as
	     MS$ELNKII in these steps) is dependent on the type of network interface
	     card you are using.
	
	   - Add the following lines to the end of the PROTOCOL.INI file:
	
	           [ms$tcp]
	           drivername=TCPIP$
	           nbsessions=10
	           bindings=ms$elnkii
	           lanabase=1
	           ipaddress0=11 1 7 99
	           subnetmask0=255 255 0 0
	           defaultgateway0=11 1 0 1
	
	  NOTE: The resource kit has a documentation error in the steps for installing
	  the TCP/IP Protocol Stack on Windows for Workgroups. On page E-8, the
	  instruction drivername=tcpip$ should read as follows: drivername=TCPIP$
	
	NOTES
	   - The lanabase= value must match the lanax= entry in the [network. setup]
	     section. The bindings= entry is the section name ( [xxxxxx] ) of the
	     device driver to which the TCP/IP stack will be bound. This value is
	     dependent on the type of network interface card used. The ipaddress0,
	     subnetmask0, and defaultgateway0 values are computer-and site-dependent.
	     These values are provided as an example. Of special interest is that
	     spaces are used as separators in the numbers instead of the more
	     traditional periods.
	
	   - Notice the nbsessions value was increased from its LAN Manager default
	     value of 6, to increase the number of sessions supported by the TCP/IP
	     device driver.
	
	8. In the \Windows\SYSTEM.INI file, increase the netheapsize= parameter in the
	  [386Enh] section from its default value of 20 to 60.
	
	  NOTE: The additional memory is needed as buffer space for passing network
	  frames between real and protected mode.
	
	9. Restart the target computer. Once all steps are completed and verified,
	  restart the computer to load the needed device drivers and TSRs.
	
	  Notice that NMTSR.EXE is an optional component and is used only with the PING
	  utility. The following are the final installation images of CONFIG.SYS,
	  AUTOEXEC.BAT, and PROTOCOL.INI.
	
	  The following is an example of a CONFIG.SYS file image:
	
	        device=c:\dos\setver.exe
	        device=c:\windows\himem.sys
	        device=c:\windows\emm386.exe noems x=b800-c800
	        dos=high,umb
	        files=30
	        buffers=10
	        lastdrive=z
	        device=c:\windows\protman.dos /i:c:\windows
	        device=c:\windows\nemm.dos
	        device=c:\windows\tcpdrv.dos /i:c:\windows
	        device=c:\windows\workgrp.sys
	        device=c:\windows\elnkii.dos
	        stacks=9,256
	
	  The following is an example of a AUTOEXEC.BAT file image:
	
	        c:\windows\smartdrv.exe
	        c:\windows\umb.com
	        c:\windows\net start
	        c:\windows\emsbfr
	        c:\windows\tcptsr
	        c:\windows\tinyrfc
	        c:\windows\nmtsr
	        @echo off
	        prompt $p$g
	        path c:\windows;c:\dos
	        set temp=c:\dos
	
	  The following is an example of a PROTOCOL.INI file image:
	
	  NOTE: The ms$elnkii keyname used in the following example specifies the use of
	  the 3Com EtherLink II network adapter card driver. Use the name of the
	  network adapter card driver that is present in your existing PROTOCOL.INI
	  file.
	
	  [network.setup]
	        version=0x3100
	        netcard=ms$elnkii,1,ms$elnkii
	        transport=ms$netbeui,ms$netbeui
	        transport=ms$tcp,ms$tcp
	        lana0=ms$elnkii,1,ms$netbeui
	        lana1=ms$elnkii,1,ms$tcp
	
	        [protman]
	        drivername=protman$
	        priority=ms$netbeui
	
	        [ms$elnkii]
	        drivername=elnkii$
	        interrupt=5
	        ioaddress=0x300
	        maxtransmits=40
	        transceiver=external
	
	        [ms$netbeui]
	        drivername=netbeui$
	        sessions=6
	        ncbs=12
	        bindings=ms$elnkii
	        lanabase=0
	
	        [ms$tcp]
	        drivername=tcpip$
	        nbsessions=10
	        bindings=ms$elnkii
	        lanabase=1
	        ipaddress0=11 1 7 99
	        subnetmask0=255 255 00
	        defaultgateway0=11 1 0 1
	
	Additional Information About TCP/IP Installation:
	-------------------------------------------------
	
	WORKGRP.SYS gives a diagnostic error at startup (No NETBEUI section found in
	configuration information) if you do not have NetBEUI as an additional protocol.
	This is expected and harmless.
	
	REFERENCES
	==========
	
	"Windows for Workgroups Resource Kit" for version 3.1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbWFWSearch
	Version           : WINDOWS:
	
	=============================================================================
	
