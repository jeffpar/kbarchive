---
layout: page
title: "Q130362: How to Install and Troubleshoot the HP JetAdmin Service"
permalink: /kb/130/Q130362/
---

## Q130362: How to Install and Troubleshoot the HP JetAdmin Service

	Article: Q130362
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbprint win95 kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Hewlett-Packard (HP) JetAdmin service is an administrative tool you can use
	to install and configure HP printers connected to a network using an HP
	JetDirect print server. This article describes how to install and troubleshoot
	the HP JetAdmin service.
	
	Note that the HP JetAdmin service included with Windows 95 was written by
	Hewlett-Packard. If you need further information about this service, please
	contact Hewlett-Packard or consult the online Help system.
	
	
	NOTE: JetDirect is no longer supported by HP. SDI (Simple Device Installation) is
	now used to install network printers. For more information on this, see:
	
	  http://www.hp.com/cgi-bin/cposupport /ccsearch/getdoc?doc=bpj05973
	
	  or
	
	  http://www.hp.com/cposupport/network ing/support_doc/bpj06765.html
	
	HP recommends a new software admin package (TCP/IP / IPX/SPX based). For further
	information see:
	
	  http://www.hp.com/cgi-bin/cposupport /ccsearch/getdoc?doc=bpj06723
	
	  or
	
	  http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc? doc=bpj06724
	
	MORE INFORMATION
	================
	
	Installation
	------------
	
	Before you install the HP JetAdmin service, print a self-test page. Please see
	the printer documentation for information about how to print a self- test page.
	
	NOTE: Many external HP JetDirect devices have a Test Page button.
	
	The test page contains two pertinent pieces of information:
	
	- The firmware revision number. The firmware revision number for the JetDirect
	  card must be 3.06a or higher to work with Windows 95. If the firmware
	  revision number is not 3.06a or higher, contact Hewlett- Packard for an
	  update.
	
	- The network node address of the JetDirect card. 0800092AABFE is an example of
	  a network node address.
	
	To install the HP JetAdmin service, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double click the Network icon.
	
	3. Click the Add button, double-click Service, click Hewlett-Packard, and then
	  double-click the HP JetAdmin service you want to install.
	
	  NOTE: If you use Direct mode, you must install the HP JetAdmin service on
	  every computer that will print to the JetDirect printer. This mode is not
	  recommended for large networks because only one workstation can print at a
	  time.
	
	4. Click OK and then restart your computer when you are prompted to do so.
	
	  When Windows 95 restarts, an icon for the HP JetAdmin service appears in
	  Control Panel and an HP Network Printers folder appears in Network
	  Neighborhood.
	
	5. Double-click the HP JetAdmin icon in Control Panel.
	
	6. On the Printer menu, click New, and then follow the tips in the Network
	  Browser window.
	
	  If the JetDirect card has never been configured, its node address appears in
	  the Unconfigured Printers list as the specific printer model that it is
	  installed in or as Unknown Printer.
	
	7. Type a name for the printer, and then click Continue.
	
	8. Double-click the Network Neighborhood icon, and then double-click the
	  HP_Network_Printers folder.
	
	9. Double-click the printer icon and answer all the questions in the Printer
	  Install Wizard to complete the installation.
	
	NOTE: To print directly to a HP JetDirect printer, you must install the IPX/SPX
	protocol in Windows 95. With this protocol installed, you can install support
	for a HP JetDirect printer as if it were a networked printer. The port
	designation is \\HP_Network_Printers\<xxxxxx>, as if it were a networked
	printer.
	
	If the Hewlett-Packard JetDirect services are not listed in the Select Network
	Service dialog box, the driver information database may need to be rebuilt. The
	primary .inf file used to install HP JetDirect is the Hpnetprn.inf file in the
	Windows\Inf folder (in a local installation).
	
	For information about rebuilding the driver information database, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q137377 Removing Drivers from Wizard Hardware Lists
	
	  Q139206 Hardware List Not Updated After Installing New .inf File
	
	Troubleshooting
	---------------
	
	If you cannot access the JetDirect printer, try the following steps:
	
	1. Verify that you have network connectivity by connecting to other computers
	  using Network Neighborhood.
	
	  For more information about network troubleshooting, see the "If you have
	  trouble using the network" topic in online Help.
	
	2. Remove all networking components, restart your computer, and then reinstall
	  the networking components (including the HP JetAdmin service).
	
	3. Set the JetDirect card back to the factory default settings. For example, to
	  set a JetDirect card in an HP 4 Plus printer to the factory default settings,
	  press down and hold the Online button on the printer while you turn the
	  printer on. For an external JetDirect device, press down and hold the Test
	  Page button while you plug in the power cord.
	
	  For additional information about setting a JetDirect device back to the
	  factory default settings, please contact Hewlett-Packard.
	
	4. After you reset the JetDirect card, double-click the HP JetAdmin icon in
	  Control Panel, and then click New on the Printer menu. The JetDirect card's
	  node address should appear in the Unconfigured Printers list.
	
	
	Additional query words: tshoot w95printfaq
	
	======================================================================
	Keywords          : kb3rdparty kbprint win95 kbPrinting 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
