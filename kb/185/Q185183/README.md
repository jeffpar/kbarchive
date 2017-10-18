---
layout: page
title: "Q185183: XADM: Administering Alpha-based Servers from Intel Workstations"
permalink: kb/185/Q185183/
---

## Q185183: XADM: Administering Alpha-based Servers from Intel Workstations

	Article: Q185183
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): exc4 exc5
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to administer Alpha-based Microsoft Exchange Servers
	from Intel-based workstations.
	
	MORE INFORMATION
	================
	
	When using a DEC Alpha Server for Microsoft Exchange Server, you will receive
	the following error when administering certain objects from an Intel-based
	workstation or server:
	
	  Extension "SMTP" (or "MS") could not be loaded. The extension for the
	  Microsoft Exchange Administrator's CPU type has not been installed in the
	  site. ID no:c1031667
	
	There are some administrative extensions (.dlls) that have to be available on the
	Microsoft Exchange Server computer for the Microsoft Exchange Administrator
	program. The objects involved are the following:
	
	- MS Mail Connector
	
	- Internet Mail Connector
	
	- Address generators
	
	The problem occurs when there are no Intel-based servers in the site to which the
	workstation belongs. The problem may also be reversed when trying to administer
	an Alpha-based server from a site with only Intel-based servers.
	
	One method of working around this problem is to install a second server in the
	site. That is, install an Intel-based server in an Alpha-based site or vice
	versa.
	
	The following is a second method for an Alpha-based server installation. This
	same procedure applies in the reverse situation.
	
	First copy the Intel version of the .dll files to their proper locations. If one
	or more of the directories does not exist, create it. Be sure to use the same
	version of the Intel files as the version running on the Alpha- based server.
	That is, if the Alpha-based Microsoft Exchange Server computer is running
	Microsoft Exchange Server version 4.0 with Microsoft Exchange Server Service
	Pack 2 (SP2), use the SP2 Intel version of the .dll.
	
	  Imcadmin.dll   <drive>:\Exchsrvr\Add-ins\Smtp\i386
	  Conadmin.dll   <drive>:\Exchsrvr\Add-ins\Ms\i386
	  Inproxy.dll    <drive>:\Exchsrvr\Address\Smtp\i386
	  Pcproxy.dll    <drive>:\Exchsrvr\Address\Ms\i386
	  X400prox.dll   <drive>:\Exchsrvr\Address\X400\i386
	
	For the Internet Mail Connector
	-------------------------------
	
	1. Start the Microsoft Exchange Administrator program in raw mode (ADMIN /R).
	
	2. In the container area (left pane), go to the Configuration container and
	  select the Add-Ins container. The current set of Add-Ins objects will be
	  displayed in the right pane. There will only be Add-Ins for Alpha.
	
	3. On the File menu, click New Other, and then click Raw Object.
	
	4. In the New Raw Object dialog box, select Admin-Extension.
	
	5. Enter the following information in the Properties page that will appear. Be
	  sure to click Set after entering each value. When you are finished, click
	  Apply.
	
	     Directory Name:        SMTP:i386
	     Admin-Extension-DLL:   imcadmin.dll
	     File-Version:          0000E10300000400 (MSX 4.0 SP3)
	
	
	  Note that the file version above is for Microsoft Exchange Server version 4.0
	  with SP3. To obtain File-Versions for other SPs or Microsoft Exchange Server
	  version 5.0, examine the value in the raw properties on an Intel-based Server
	  running that version.
	
	6. Click OK to return to the main screen. The will (by default) be named
	  SMTP:i386, which is the directory name. Double-click it to open the ordinary
	  properties page, and change the display name to: "Extension for Internet Mail
	  Connector for i386" (without the quotation marks)
	
	7. Click OK to return to the main screen. The Internet Mail Connector can now be
	  administered from an Intel-based workstation.
	
	For the MS Mail Connector
	-------------------------
	
	The procedure is similar to the one for the Internet Mail Connector (above). The
	only differences are the values entered and the display name. Use the following
	values in step 5:
	
	  Directory Name:        MS:i386
	  Admin-Extension-DLL:   conadmin.dll
	  File-Version:          3700E20300000400 (MSX 4.0 SP3)
	  Display Name:          Extension for MS Mail Connector for i386
	
	For the Address Generators
	--------------------------
	
	The procedure is similar to that of adding the connectors. The difference besides
	that of the values and display name is that the Addressing > E-mail Address
	Generators container should be highlighted instead of the Add-Ins container
	before you create the new raw object (on the File menu, click New Other, and
	then click Raw Object).
	
	  SMTP addresses:
	
	     Directory Name:        SMTP:i386
	     Admin-Extension-DLL:   inproxy.dll
	     File-Version:          3F00E20300000400 (MSX 4.0 SP3)
	     Display Name:          Internet E-mail Address Generator for i386
	
	  MS Mail addresses:
	
	     Directory Name:        MS:i386
	     Admin-Extension-DLL:   pcproxy.dll
	     File-Version:          0400E10300000400 (MSX 4.0 SP3)
	     Display Name:          MS Mail E-mail Address Generator for i386
	
	  X.400 addresses:
	
	     Directory Name:        X400:i386
	     Admin-Extension-DLL:   x400prox.dll
	     File-Version:          0400E10300000400 (MSX 4.0 SP3)
	     Display Name:          X.400 E-mail Address Generator for i386
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
