---
layout: page
title: "Q93438: Installing XNS on LAN Man Workstation from a 3Server"
permalink: /kb/093/Q93438/
---

## Q93438: Installing XNS on LAN Man Workstation from a 3Server

{% raw %}

	Article: Q93438
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Microsoft LAN Manager 2.1 for 3Com 3Servers contains versions of 3Com XNS that
	can be installed on any DOS or OS/2 workstation. This article details the steps
	that must be taken to prepare a protocol installation disk required for this
	installation. It also explains how to actually install the protocol on the
	workstation.
	
	MORE INFORMATION
	================
	
	Over-the-Net installation of the 3Server 2.1 Tape requires that XNS be installed
	on an OS/2 workstation. See page 5-4, step 7, of the "Install Guide" for more
	information on Over-the-Net installation. The main source of XNS for LAN Manager
	workstations is the Microsoft Upgrade Toolkit for 3Com Networks. If you do not
	have this Toolkit, you can use these instructions to create an XNS protocol
	installation disk from the files on the LAN Man 2.1 3Server. However, keep in
	mind that these instructions can be used to install XNS for any purpose.
	
	OS/2 XNS Protocol Disk Preparation
	----------------------------------
	
	Requirements:
	
	- You must have LAN Manager 2.1 already installed on at least one 3Server.
	
	- The 3Server must be running at least NetBEUI that is installed by default.
	
	1. From your workstation running NetBEUI, login as admin for the 3Server running
	  2.1. For example:
	
	  net logon admin password
	
	2. Make a connection to the root of your 3Server. The source files will be
	  copied from this connection. For example:
	
	  net use x: \\3server\c$
	
	  (where \\3server is the name of your 3Server computer name).
	
	3. To create an XNS Protocol Installation disk, insert a blank high density
	  floppy in drive A.
	
	4. On the floppy disk, make a directory for \MSLANMAN.OS2\DRIVERS. For example:
	
	  a:
	  md\mslanman.os2
	  md\mslanman.os2\drivers
	
	5. Set up the \MSLANMAN.OS2\DRIVERS\PROTMAN subdirectory. This subdirectory
	  contains the utility needed to bind the protocol driver to the MAC driver.
	  For example:
	
	  md\mslanman.os2\drivers\protman
	  cd\mslanman.os2\drivers\protman
	  copy x:\lanman\drivers\protman\netbind.exe
	
	6. Set up the \MSLANMAN.OS2\DRIVERS\PROTOCOL\XNSNB254 subdirectory. This
	  subdirectory contains the actual 3Com XNS drivers. For example:
	
	  md\mslanman.os2\drivers\protocol
	  md\mslanman.os2\drivers\protocol\xnsnbs54
	  cd\mslanman.os2\drivers\protocol\xnsnb254
	  xcopy x:\lanman\drivers\protocol\xnsnb254\*.*
	
	7. Set up the \MSLANMAN.OS2\DRIVERS\XIF\XNSNB254.XIF file. This file contains
	  the transport installation information. For example:
	
	  md\mslanman.os2\drivers\xif
	  cd\mslanman.os2\drivers\xif
	  copy x:\lanman\drivers\xif\xnsnb254.xif
	
	8. Set up the \MSLANMAN.OS2\SERVICES subdirectory. (Note: The LOCATOR2.EXE is
	  only needed if you intend to run the Locator service on this workstation.
	  However, the installation program will complain if it is not present unless
	  you also edit the XIF file. See the 3Com Upgrade Toolkit for more information
	  on Locator.) For example:
	
	  md\mslanman.os2\services
	  cd\mslanman.os2\services
	  copy x:\lanman\services\locator2.exe
	
	9. Set up the \MSLANMAN.OS2\NETPROG subdirectory. (Note: These files are only
	  needed if you plan to connect to 3Com 3+Share or 3+Open network servers.
	  However, the installation program will complain if they are not present
	  unless you also edit the XIF file. See the 3Com Upgrade Toolkit for more
	  information on these commands.) For example:
	
	  md\mslanman.os2\netprog
	  cd\mslanman.os2\netprog
	  copy x:\lanman\netprog\3f2.exe
	  copy x:\lanman\netprog\3p2.exe
	  copy x:\lanman\netprog\3nb2.exe
	  copy x:\lanman\netprog\login2.exe
	  copy x:\lanman\netprog\logout2.exe
	  copy x:\lanman\netprog\logon2.exe
	  copy x:\lanman\netprog\logoff2.exe
	  copy x:\lanman\netprog\remserv.cmd
	
	DOS XNS Protocol Disk Preparation
	---------------------------------
	
	- Review the requirements listed above in the OS/2 section.
	
	- Follow steps 1-3 above. You may use the same disk prepared in the OS/2
	  section if you want.
	
	1. Set up the DOS installation section on the disk. For example:
	
	  a:
	  md\mslanman.dos
	  md\mslanman.dos\drivers
	
	2. Set up the \MSLANMAN.DOS\DRIVERS\XIF\XNSNB.XIF file. This file contains the
	  transport installation information. For example:
	
	  md\mslanman.dos\drivers\xif
	  cd\mslanman.dos\drivers\xif
	  copy x:\lanman\ninstall\drivers\xif\xnsnb.xif
	
	3. Set up the \MSLANMAN.DOS\DRIVERS\PROTOCOL\XNSNB subdirectory. This
	  subdirectory contains the actual protocol drivers and the PROTOCOL.INI
	  installation template stub. For example:
	
	  md\mslanman.dos\drivers\protocol
	  md\mslanman.dos\drivers\protocol\xnsnb
	  cd\mslanman.dos\drivers\protocol\xnsnb
	  xcopy x:\lanman\ninstall\drivers\protocol\xnsnb\*.*
	
	How to Install XNS from the New Install Disk
	--------------------------------------------
	
	To install 3Com XNS on your DOS or OS/2 workstation, refer to the section titled
	"To change the protocol(s) bound to a network adapter card driver" on page 126
	of the "Installation and Configuration Guide." When you select "Other
	Protocols," use the installation disk that you just created in the previous
	steps.
	
	Reference(s):
	
	The part number for the Microsoft Upgrade Toolkit for 3Com Networks is
	0960544-200. KBCategory: kbnetwork
	KBSubcategory:
	Additional reference words: 2.10 3Com XNS 3Server 400 500 600
	
	
	Additional query words: 2.10 3Com XNS 3Server 400 500 600
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
