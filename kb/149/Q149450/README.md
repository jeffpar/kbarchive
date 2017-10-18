---
layout: page
title: "Q149450: IR Communications Driver 2.0 Relnotes.doc (Part 2 of 2)"
permalink: kb/149/Q149450/
---

## Q149450: IR Communications Driver 2.0 Relnotes.doc (Part 2 of 2)

	Article: Q149450
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information is a copy of the information in the Relnotes.doc file included
	with the Microsoft Windows 95 Infrared Communications Driver version 2.0.
	
	MORE INFORMATION
	================
	
	Microsoft Windows 95
	Infrared Communications Driver
	Version 2.0
	Release Notes
	10 May 1996
	
	Copyright Microsoft Corporation 1996.   All Rights Reserved.
	
	Contents
	  Installing and Using the IR Communications Driver
	     Step 1.  Installing the IR Communications Driver
	     Step 2.  Validating the IR Communications Driver Installation
	       Printing to an IR-Capable Printer
	       Exchanging Data Between Two Computers
	       Viewing the Network Neighborhood Over an IR Link
	     Step 3.  Running Other IR-Capable Applications
	     An Optional Step: Removing the IR Communications Driver
	     Notes on Running the Direct Cable Connection Application Over an IR
	        Link
	     Preparing to Use DCC
	        Making Sure DCC Is Installed on Both Computers
	        An Optional Step: Installing DCC
	        Establishing and Using the DCC IR Link Between Host and Guest
	  IR Communications Driver Components
	  IR Adapter Manufacturer Names and Addresses
	
	INSTALLING AND USING THE IR COMMUNICATIONS DRIVER
	=================================================
	A recommended three-step process for installing and using the IR
	communications driver is:
	
	1. Install the Windows 95 IR Communications driver.
	2. Validate the installation by printing over the IR link, using an
	  application to transfer data over the IR link, and/or using a local area
	  network (LAN) over the IR link.
	3. Start using the IR link on a daily basis.
	
	After a user installs the driver, it can be removed at any time (for more
	information, see "An Optional Step: Removing the IR Communications
	Driver").
	
	Step 1. Installing the IR Communications Driver
	-----------------------------------------------
	
	Note
	A user must always remove any previously installed version of the IR
	communications driver every time the driver is installed. If Version 1.0 of
	the driver is installed, it must be removed before installing Version 2.0.
	If an early Beta release of the Version 2.0 driver is installed, it must be
	removed before installing the current Version 2.0 release. Instructions for
	removing an IR device and driver installation are documented in "An
	Optional Step: Removing the IR Communications Driver."
	
	1. For first-time installation of the IR communications driver, run
	  Setup.exe as downloaded from the Microsoft web-site.
	2. When the Add Infrared Device Wizard prompts to choose a manufacturer's
	  name for the IR device, choose "(Standard Infrared Devices)" if the
	  computer has a built-in device, or choose the name of the manufacturer
	  and the model of the adapter if an IR adapter is attached to the
	  computer. Then click the Next button.
	3. When the Add Infrared Device Wizard prompts to choose the
	  communications port that the IR device is physically connected to,
	  click the port from the list. If uncertain which physical
	  communications port the IR device is using, select the first COM port
	  in the list (for example, COM1). Then click the Next button.
	4. When the Add Infrared Device Wizard prompts to select the virtual COM
	  and LPT ports, accept the default values by clicking the Next button.
	  After the wizard copies the IR communications driver files to the hard
	  disk, watch for the wizard to display two New Hardware Found messages.
	5. When prompted by the Add Infrared Device Wizard, click the Finish
	  button to complete the IR device installation. If the wizard did not
	  display New Hardware Found messages as it carried out step 4, then
	  restart the computer. (If the New Hardware Found messages were
	  displayed, there is no need to restart the computer).
	6. Activate the IR device by double-clicking the Infrared icon in the
	  Control Panel. If there is no Infrared icon in the Control Panel, then
	  either select the Refresh option from the Control Panel View menu or
	  press the F5 function key to make the Infrared icon appear.
	
	For general information about how to use the Infrared Monitor, click the
	Help button in the lower-right corner of the Infrared Monitor interface
	screen. To get information about individual items in the Infrared Monitor
	interface, such as check boxes, move the mouse cursor over the on-screen
	interface item and click the right-button on the mouse.
	.
	The Options tab of the Infrared Monitor interface contains the following
	two particularly useful items:
	- The Enable Infrared Communication On check box, which enables and
	  disables the IR device.
	- The Limit Connection Speed To option, which limits the link speed the
	  IR device can negotiate.
	
	The Limit Connection Speed To option might be used if an adapter is
	attached to a COM port that is using an 8250 UART instead of a 16550 UART,
	or if an adapter is connected to a relatively slow computer (such as a 386
	running at 20 MHz). In these cases, this option can be used to limit the
	connection speed to 19.2 kbps.
	
	Step 2. Validating the IR Communications Driver Installation
	------------------------------------------------------------
	To validate the IR communications driver installation, either:
	
	- Print from an application over an IR link to the printer (if an IR-
	  capable printer is available).
	- Exchange data between two IR-capable computers over an IR link, using a
	  communications application.
	- View the computer's Network Neighborhood over an IR link (if an IrLan
	  access point device is available).
	
	Printing to an IR-Capable Printer:
	
	To test the printing capability of a Windows 95 application over an IR link
	to an IrDA-compliant printer such as the HP 5P, carry out the installation
	step for the IR communications driver on one computer and then try the
	Print option in an application.
	
	Printers without built-in IR ports can be made IR-capable by connecting an
	IR adapter made for printers into the printer's parallel port. An example
	of an IR adapter for printers is the Extended Systems JetEye Infrared
	Printer Port ESI-9580. If a parallel cable is also used to connect the PC
	to the IR printer adapter, a user can use either the IR link or the
	parallel cable to print. The IR link is used when the user selects the
	virtual parallel port and the cable is used when the user selects the
	physical parallel port.
	
	To validate the IR link to the printer, make sure the correct printer
	driver is installed for the IR-capable printer (most printers with built-in
	IR ports are Plug and Play devices and the installation for these devices
	will be automatically carried out). Then use an application to print over
	the IR link.
	
	If the application prints on the IR-capable printer, the IR driver
	installation is validated. If there is trouble printing, see
	"Troubleshooting" for more information.
	
	Exchanging Data Between Two Computers:
	
	To validate a link between two computers running Windows 95, install the IR
	communications driver on both computers. To do this, carry out the
	procedure in "Step 1. Installing the IR Communications Driver" earlier in
	this document.
	
	Note that the IR devices on the two computers do not have to be made by the
	same manufacturer as long as both devices are IrDA-compliant. For example,
	the IR link will work with a JetEye PC Infrared PC Interface (ESI-9680)
	attached to one desktop computer and an Adaptec AIRport APA-9320 External
	Infrared Adapter attached to the other desktop.
	
	One way to validate an IR link is to run the HyperTerminal application on
	both computers and send characters from the keyboard of each computer over
	the IR link. HyperTerminal is installed on a Windows 95 computer as part of
	the typical installation that is recommended for most computers. To
	validate the IR driver installation of the IR driver on both computers,
	carry out the following procedure:
	
	1. On both computers, click the Start button, point to Settings, and then
	  click the Control Panel. Double-click the Infrared icon. Then move the
	  IR devices within 3 feet of each other, and make sure they're pointing
	  at each other. When the two IR devices discover each other, the message
	  "Available infrared devices in range" will appear on the Status tab of
	  the Infrared Monitor interface screen. Make sure Infrared Monitor
	  reports both IR devices have the appropriate infrared device within
	  range before proceeding. It might be necessary to realign the IR
	  devices so they point right at each other, move them closer together,
	  and/or change the batteries in an IR adapter or plug the AC power into
	  an IR adapter. For more information, see "Troubleshooting" earlier in
	  the document.
	2. On one of the computers, click the Options tab in the Infrared Monitor
	  interface and find the information that starts with "Providing
	  application support on ...". Write down the name of the COM port found
	  there. This is the name of the virtual serial port that the IR link
	  using. The name of this virtual serial port might be COM4 or COM5 and
	  it will differ from the name of the physical communications port the IR
	  device is running on (which is typically named COM1 or COM2).
	3. Run HyperTerminal on the computer with the virtual serial port name by
	  clicking the Start button, pointing to Programs, pointing to
	  Accessories, and then clicking the HyperTerminal folder. In the window
	  that appears, double-click the Hypertrm.exe icon.
	4. In the Connection Description dialog box, type a descriptive name (such
	  as "Direct IR") for the new connection, and then click OK.
	5. In the Phone Number dialog box, use the Connect Using drop-down list to
	  click the "Direct to Comx" entry, where x is the number of the virtual
	  COM port written down in step 2. Then click OK. It is now possible to
	  start using HyperTerminal on one of the computers.
	6. Repeat steps 2. through 5. for the other computer.
	7. In HyperTerminal on either computer, type any characters at the
	  keyboard. If the typed characters appear in the HyperTerminal window on
	  the other computer, then it is confirmed that the IR link works in that
	  direction. Repeat this step on the other computer. If the IR link works
	  in both directions using HyperTerminal, the successful installation of
	  the IR communications driver on the two computers has been confirmed.
	
	  NOTE: The changes in status are displayed in the Status tab of the
	  Infrared Monitor interface while typing characters in HyperTerminal.
	
	8. Disconnect the HyperTerminal direct IR connection by exiting the
	  HyperTerminal application on both computers. When prompted to save the
	  session, click Yes. This saves the direct IR connection setup
	  information as an icon in the HyperTerminal main folder, enabling a
	  user to double-click this icon to restart one side of the HyperTerminal
	  direct IR connection.
	
	Viewing the Network Neighborhood Over an IR Link:
	
	The Version 2.0 IR communications driver enables a computer with an IR
	device (either a built-in device or an adapter) to connect to a local area
	network (LAN) through an IrLan access point device acting as the network
	adapter for the computer. An IrLan access point device is hardware that
	supports both a LAN network interface controller (NIC) and an infrared
	transceiver. Local area network access over an IR link has been tested with
	the following IrLan access point devices: the Extended Systems ESI-9910
	JetEye Net Plus and the Hewlett-Packard NetBeam IR Infrared LAN Adapter.
	
	To test a computer's ability to use a local area network (LAN) over an IR
	link, first install the IR communications driver on the computer. Then do
	the following:
	
	1. Run IR Monitor.
	2. Power on the IrLan access point device, such as the Extended Systems
	  ESI-9910 JetEye Net Plus,  and place the infrared receiver/transmitter
	  of the IrLan access point device  within range of the computer's
	  infrared device.
	3. When the computer infrared device and the IrLan access point infrared
	  device discover each other, the Infrared Monitor interface indicates
	  "Infrared communication in progress."
	4. When the Infrared Monitor interface shows that the IR link has been
	  established, click on the Network Neighborhood icon to display the
	  icons of the remote machines that can be accessed through the IrLan
	  access point device. There can be a delay of some seconds before the
	  remote machine icons are displayed.
	
	If there is trouble accessing the LAN, see "Troubleshooting" for more
	information.
	
	Step 3. Running Other IR-capable Applications
	---------------------------------------------
	Most applications that can communicate over a null modem cable that
	connects serial ports on two Windows 95 computers should also be able to
	communicate over an IR link. The procedure for setting up and using the IR
	link with these other communicating applications will probably be similar
	to the procedure used in "Exchanging Data Between Two Computers," which
	uses the HyperTerminal application to validate the installation of the IR
	communications driver. The procedure for running the Windows 95 Direct
	Cable Connection application is given in detail in "Notes on Running the
	Direct Cable Connection Application Over an IR Link."
	
	An Optional Step: Removing the IR Communications Driver
	-------------------------------------------------------
	The IR communications driver can be removed either by using Add/Remove
	Programs in the Control Panel or by using the Device Manager. Both methods
	are documented in these Release Notes, but using Add/Remove Programs is the
	preferred method.
	
	Using Add/Remove Programs in the Control Panel:
	
	To carry out the preferred way of removing the IR communications driver, do
	the following:
	
	1. Click the Start button and select the Settings option. Then select the
	  Control Panel option.
	2. Double-click Add/Remove Programs in the Control panel.
	3. When a list of software components is displayed, select the Infrared
	  Support for Windows 95 entry and click the Add/Remove button.
	4. When the system prompts you to restart, do so.
	
	Using the Device Manager:
	
	To remove the IR communications driver using the Device Manager, do the
	following:
	
	1. To run the Device Manager, right-click on the My Computer icon, select
	  the Properties option from the popup menu, and then click the Device
	  Manager tab in the System Properties dialog.
	2. To display the name of the infrared device installed on the computer,
	  in the System Properties dialog, make sure the View devices by type
	  option is selected. Then click the plus sign to the left of the
	  Infrared device class label. Select the infrared device name and click
	  the Remove button.
	3. When prompted, click OK to confirm the device removal. After the Device
	  Manager has successfully removed the infrared device installation
	  information from the computer, the Infrared device class label will
	  disappear from the System Properties dialog. Click the Close button.
	
	  NOTE: The Infrared Monitor icon may still be displayed in the Windows
	  95 status bar, even after the infrared device is removed. Ignore it;
	  the Infrared Monitor cannot be used to establish an IR link after the
	  infrared device is removed.
	
	Notes on Running the Direct Cable Connection Application Over an IR Link
	------------------------------------------------------------------------
	With Direct Cable Connection (DCC), a direct serial or parallel cable
	connection can be established between two computers to share the resources
	of the computer designated as the host. DCC can also be used over an IR
	link connecting the host and a guest computer. If the host is connected to
	a LAN, the host can also be used as a gateway to the LAN for the guest.
	
	Preparing to Use DCC
	--------------------
	The computer that contains the folder to be shared is the host, and the
	other computer is the guest. Share a folder on the host, granting access
	rights to anyone using the guest computer, by carrying out the procedure
	given below.
	
	NOTE: The following procedure is just one of many that could be used to
	share files in a folder on the host computer. For example, there is user-
	level access control as well as share-level access control. The following
	procedure is one of the simplest access control procedures, which is all
	that is needed to get started using DCC. To get information about all the
	ways files, folders, and printers can be shared, use the Windows 95 Help.
	
	1. Double-click on the My Computer icon.
	2. Double-click on the icon of the drive that contains the folder to share
	  (for example, double-click on the icon for the C: drive).
	3. Right-click on the icon of the folder to share and then select
	  Properties.
	4. In the folder properties dialog, select the Sharing tab and then select
	  the Shared As option, enter a share name, enter a comment, and add user
	  access rights (Full or Read-Only).
	5. The picture of a hand is added to the folder icon to indicate the
	  selected folder is now a shared resource.
	
	Making Sure DCC Is Installed on Both Computers:
	
	DCC is not installed with the typical Windows 95 installation recommended
	for most computers. Check whether DCC is installed on both of the two
	computers that will be using the IR link. To do this, click the Start
	button, point to Programs, and then point to Accessories. Direct Cable
	Connection appears in this menu of it is installed on the computer being
	checked.
	
	If DCC is installed on the host and DCC is installed on the guest, then
	skip the next step.
	
	An Optional Step: Installing DCC:
	
	Before establishing a DCC connection, DCC must be installed on both the
	host and guest. The procedure for installing DCC on either the host or the
	guest is given below. If DCC is not installed on the host and is also not
	installed on the guest, the following procedure must be run on each
	machine.
	
	1. Click the Start button, point to Settings, and then click the Control
	  Panel. Double-click the Add/Remove Programs icon.
	2. In the Add/Remove Program Properties, click the Windows Setup tab.
	3. In the Components list, click Communications, and then click the
	  Details button.
	4. In the Communications dialog box, make sure Direct Cable Connection is
	  checked and then click OK.
	
	Establishing and Using the DCC IR Link Between Host and Guest:
	
	To run DCC over an IR link, carry out the following procedure:
	
	1. Make sure the IR communications driver is properly installed and the IR
	  devices are enabled by carrying out the procedures in "Step 1.
	  Installing the IR Communications Driver" and "Step 2. Validating the IR
	  Communications Driver Installation" earlier in this document.
	
	  NOTE: To increase the likelihood of success with DCC over an IR link,
	  use the Limit Connection Speed To option on the Infrared Monitor
	  Options tab to limit the IR connection speed to 9600 bps for the first
	  test of DCC over the IR link (and then increase the speed later).
	
	2. On the host computer, click the Start button, point to Accessories, and
	  then click Direct Cable  Connection.
	3. Follow the steps in the Direct Cable Connection Wizard to set up the
	  host computer. When the wizard prompts for it, select the Host option.
	  When the wizard prompts to choose a port, use the same virtual port
	  used in the procedure "Step 2. Validating the IR Communications Driver
	  Installation" earlier in this document. The wizard will also offer
	  password protection. It is not necessary to establish password
	  protection on the host for this test of the IR link. When done with the
	  wizard, click the Finish button. DCC will start running on the IR link
	  and display the message "Status: Waiting to connect via Serial cable on
	  Comx," where Comx is the name of the virtual port the IR link is using.
	4. Repeat steps 2 and 3 for the guest computer, except select the Guest
	  option instead of the Host option. When done with the wizard, click the
	  Finish button. The DCC connection is automatically made over the IR
	  link, and all the shared folders on the host are displayed on the
	  guest's screen.
	5. Working on the guest computer, to copy a shared folder from the host to
	  the guest over the IR link select the folder's icon in the window that
	  displays all the shared folders that are on the host and drag the icon
	  to the desktop. To work on a shared folder on the host without copying
	  it to the guest, double-click on the folder in the display on the
	  guest. Note that if the host is connected to a network, the guest can
	  reach shared resources on the network through the DCC connection to the
	  host.
	
	IR COMMUNICATIONS DRIVER COMPONENTS
	===================================
	The files that make up the IR communications driver are:
	
	Filename      Description
	-------------------------
	ACT200L.VXD   Support for the ACTiSYS ACT-IR200L IR adapter.
	ACT220L.VXD   Support for the ACTiSYS ACT-IR220L IR adapter.
	ADAPTEC.VXD   Support for Adaptec IR adapter.
	CRYSTAL.VXD   Support for AMP PhasIR Serial Adapter.
	ESI.VXD       Support for Extended Systems JetEye PC Infrared Interface
	             (ESI9680).
	INFRARED.CPL  Infrared device in the Windows 95 Control Panel.
	INFRARED.DLL  Infrared device class installer.
	INFRARED.INF  IR device information file for Windows 95 Setup.
	INFRARED.HLP  On-line help topics for Infrared Monitor.
	IRCOMM.VXD    Top layer of IR communications for Windows 95.
	IRDALAN.INF   IrLan device information file for Windows 95 Setup.
	IRDALAN.SYS   IrLan driver.
	IRENUM.VXD    Enumerator for the "IR bus."
	IRLAMP.VXD    Generic infrared framer, lower layer of IR communications
	             for Windows 95.
	IRLAPFRM.VXD
	IRMON.EXE     Infrared Monitor.
	IRMONHLP.EXE  IR Monitor on-line help utility.
	IR_BEGIN.WAV  Sound for Infrared Monitor user interface.
	IR_END.WAV    Sound for Infrared Monitor user interface.
	IR_INTER.WAV  Sound for Infrared Monitor user interface.
	MSPORTS.INF   IR port information file for Windows 95 Setup.
	PARALLAX.VXD  Support for Parallax IR Adapter, LiteLink PRA9500A.
	W_IR.CNT      Table of contents for Infrared Monitor on-line help.
	
	The documentation files supplied with the IR device driver are:
	
	Filename      Description
	-------------------------
	RELNOTES.DOC  This document.
	
	IR ADAPTER MANUFACTURER NAMES AND ADDRESSES
	===========================================
	The names and addresses of IR adapter manufacturers that have been
	successfully tested with the IR driver in the Windows 95 IR Communications
	DDK are:
	
	ActiSys, Inc.
	1507 Fulton Place
	Fremont CA 94539
	tel: 510-490-8024
	fax: 510-623-7268
	email: corp@actisys.com
	
	Adaptec, Inc.
	691 South Milpitas Blvd,
	Milpitas CA 95035
	tel: 1-800-959-7274
	fax: 1-408-957-7223
	
	AMP Product Information Center
	AMP Incorporated
	Harrisburg PA 17105
	tel: 1-800-522-6752
	
	Extended Systems, Inc.
	5777 North Meeker Ave
	Boise ID 83704-1520
	tel: 208-322-7575
	fax: 208-377-1906
	
	The Parallax IR adapter distributor in North America is:
	TSC Electronics
	1610 Lockness Place
	Torrance CA 90501
	tel: 310 534 2738
	fax: 310 534 3216
	email: dtsaitsc@aol.com
	contact person: Daniel Tsai
	
	The Parallax IR adapter distributor outside North America is:
	Parallax Research
	201 Innovation Centre
	NTU
	Nanyang Drive
	Singapore 639798
	Republic of Singapore
	tel: +65 793 0855
	fax: +65 793 0775
	email: parallax@technet.sg
	
	Additional query words: irda irda2 ir w95ir.exe
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
