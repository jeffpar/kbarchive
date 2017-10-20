---
layout: page
title: "Q135696: FAX: Configuring PureData SatisFAXtion Fax Modems"
permalink: /kb/135/Q135696/
---

## Q135696: FAX: Configuring PureData SatisFAXtion Fax Modems

{% raw %}

	Article: Q135696
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on how to configure PureData SatisFAXtion
	Modem 400i or 200i with Microsoft Mail Gateway to FAX running on a MS-DOS
	gateway computer.
	
	The steps required to properly set up the SatisFAXtion Modem 400i and 200i fax
	devices and an installation overview of the Mail Gateway to FAX have been
	included.
	
	NOTE: This article assumes that version 3.x of Microsoft Mail for PC Networks has
	been installed.
	
	PUREDATA SATISFAXTION MODEM 400I AND 200I BOARDS
	
	The PureData SatisFAXtion Modem 400i and 200i boards are internal facsimile
	modems; they function as both a fax and a data modem. These devices can be
	operated in the following modes:
	
	- Command mode (+++). This is also called terminal mode. This mode interprets
	  any data sent to it as one or more modem commands.
	
	- Data mode (AT0). This is also called on-line mode. After a connection is made
	  to the remote computer, this mode will relay the data you send it.
	
	The SatisFAXtion Modems interface with the gateway computer system to function as
	independent computer-based facsimile sub-systems equipped with the ability to
	invoke background operations and broadcasting (group sends of one to many
	faxes).
	
	The differences between the two models of SatisFAXtion cards are reflected by
	their transmission rates: SatisFAXtion Modem 400i transfers at a rate of 14400
	bits per second (bps) and the SatisFAXtion Modem 200i transfers at the rate of
	9600 bps and has a slight variance in the extended fax protocols supported.
	
	To get the PureDATA SatisFAXtion hardware
	-----------------------------------------
	
	PureData fax boards are available from computer dealers and distributors in
	several countries. You can get product availability and additional information
	from PureData at (800) 661-8210.
	
	SATISFAXTION MODEM 400i/200i HARDWARE
	
	To install SatisFAXtion modem boards
	------------------------------------
	
	1. Turn off the power to the gateway computer. Remove the cover, and touch the
	  power supply to dissipate built-up static charge. Install the card into an
	  available (preferably 16-bit) slot.
	
	2. With the board level in hand, guide it into the add-in slot. The metal
	  bracket on the board fits into the area formerly occupied by a blank plate.
	  Ensure that the phone connector on the board is not obstructed. It may be
	  necessary to loosen the fax card's mounting screw and reposition it if the
	  telephone jack cannot be easily inserted.
	
	To check the telephone line
	---------------------------
	
	1. Locate an available telephone. Remove the cord from the wall and insert it
	  into the jack you intend to use for the Fax Gateway. Pick up the receiver,
	  and after you check for normal dial-tone, dial the number of another fax
	  device. If the remote device answers the telephone, you should hear the
	  standard modem handshake. After you receive the handshake tone, hang up the
	  telephone.
	
	2. With the telephone still connected to the Fax Gateway's telephone jack, call
	  the fax number from another telephone; if it rings, the number for the board
	  is correct.
	
	SATISFAXTION SOFTWARE
	
	When the SatisFAXtion board and telephone connections are properly installed, you
	are ready to install the SatisFAXtion software.
	
	To install the SatisFAXtion software
	------------------------------------
	
	NOTE: The Setup program copies files you need to fax. When you are prompted,
	direct these files to a subdirectory called PUREDATA of your postoffice located
	on the server. Create this directory prior to beginning the Setup program.
	
	1. Turn on your computer. Make a net connection to the network server where the
	  Microsoft Mail for PC Networks postoffice is located. This subdirectory is
	  commonly named \MAILDATA. Your command prompt should be at the root of this
	  share or subdirectory.
	
	2. From the \MAILDATA directory create a subdirectory called PUREDATA. This
	  directory will be used to copy the SatisFAXtion installation files to as part
	  of the initial stage of the SatisFAXtion board setup process.
	
	3. Insert the PureData SatisFAXtion software Disk 1 into the appropriate disk
	  drive. At the MS-DOS command prompt, type the following and press ENTER:
	
	  " *:setup " (without the quotation marks)
	
	4. Press any key to leave the title screen, then select Continue. Questions
	  about specific field definitions can be addressed by using Help.
	
	5. From the Options menu, choose Copy SatisFAXtion software. Press ENTER.
	
	  NOTE: The Setup program will assume a local destination PATH that you may need
	  to override to point to the correct subdirectory on the Mail server, (for
	  example, M:\MAILDATA\ PUREDATA). On screen instructions will prompt you
	  through the installation process.
	
	6. Press the F10 key to accept the user preferences. When all the files have
	  been copied from the disks, the Options menu will be displayed once again.
	
	First-time Setup:
	
	Set the COM port and interrupt (IRQ) setting using the First-time Setup option.
	If the installation program is unable to select a COM port and an IRQ setting,
	the selection of an invalid I/O and IRQ will cause the machine to hang.
	
	If you experience conflicts, consult the SatisFAXtion "Installation and Setup
	Guide."
	
	1. From the Options menu, choose First-time Setup. As prompted, fill in the
	  requested information.
	
	2. Press the F10 key to accept the First-time Setup options when you are done.
	  If there are any problems during the Setup process, consult the SatisFAXtion
	  "Installation and Setup Guide."
	
	Notes:
	
	- To view the available options, highlight Set up Standard Software Options and
	  press ENTER. This option will configure the COM and IRQ settings of the
	  board. If you experience conflicts when you accept the settings, consult the
	  "Installation Guide."
	
	- After you have installed the software, refer to the "To set up the hardware"
	  section below to manually set the COM ports and IRQs for the modem and fax.
	
	- After you exit the Set Up Hardware option, do not re-select the First- time
	  Setup option because the Setup program will try to reassign the same invalid
	  I/O settings you are trying to change.
	
	To complete the registration form
	---------------------------------
	
	The Setup program gives you the option to register your hardware.
	
	1. From the Options menu, choose Register Your SatisFAXtion FaxModem.
	
	2. Complete the registration form as prompted, and press the F10 key to accept
	  it.
	
	Advanced Setup:
	
	Advanced Setup is a quick way to confirm or change the current settings of your
	FaxModem. When you run Advanced Setup, the following sub-menu configuration
	options are displayed:
	
	- Set up hardware.
	
	- Setup options for answering incoming calls.
	
	- Set up standard software options.
	
	- Set-up pop-up options.
	
	- Set-up technical software options.
	
	Below are the steps and modifications required to correctly configure
	SatisFAXtion Modem 400i and 200i boards to run with Mail Gateway to FAX:
	
	1. Do not use the Set up Hardware option. You should only use this option when
	  you want to ensure that original settings allow proper FaxModem operations or
	  to change the settings that conflict when they were auto assigned when you
	  exited First-time Setup.
	
	2. From the Options for Incoming Calls option, designate whether your FaxModem
	  will share its telephone line. Next, determine the number of rings before
	  pick-up, and set the Fax Auto Answer option to On.
	
	  NOTE: It is recommended that the telephone line be dedicated.
	
	3. From the Set Up Standard Software option, select No for Cover Page, and set
	  the Fax Resolution to Standard.
	
	4. From the Set Up Pop-up Options option, set the Fax Capture Pop-up Port to
	  Off.
	
	5. From Set Up Technical Software Options option, set the Number (#) of Redial
	  Retries to three (3). Set the Line Compensation to zero (0) and the Default
	  Dial Mode to Tone.
	
	  Notes:
	
	   - The default Number of Redial Retries is three.
	
	   - When you optimize performance of gateway machine, set the option CASMGR
	     EMS Usage to use EMS, if available.
	
	To update the gateway computer and exit
	---------------------------------------
	
	1. From the Options screen, choose Exit Setup, and confirm the action. If the
	  focus of the screen is not at the Options menu, press the ESC key to return
	  to the menu.
	
	2. The Setup program should now display a prompt with the option to update the
	  configuration files of the gateway computer by suggesting that the following
	  lines be added to the AUTOEXEC.BAT file:
	
	  " M:\MAILDATA\PUREDATA\CASMGR.EXE
	  M:\MAILDTAT\PUREDATA\CASMGR.CFG
	  M:\MAILDATA\PUREDATA\FAXTSR.EXE " (without the quotation marks)
	
	  It will also suggest the following lines be added to the CONFIG.SYS file:
	
	  " DEVICE= M:\MAILDATA\ PUREDATA\SATISFAX.SYS IOADDR=0350 BUFFERS=15 and
	  FILES=20. " (without the quotation marks)
	
	  NOTE: The modifications to these files are detailed in the next section and
	  need to be made prior to testing the operation state of the SatisFAXtion
	  board.
	
	3. Underneath the suggested file modifications, you will be prompted to choose
	  Update to update the files automatically or Quit to exit without updating.
	  Select the Quit option to return to the command prompt.
	
	To modify the startup files
	---------------------------
	
	After you install the SatisFAXtion software, you will need to modify the startup
	files of the gateway computer. The following steps will allow you to load CASMGR
	when the gateway computer is turned on or rebooted.
	
	1. At the MS-DOS command prompt, change to the root of the local drive of the
	  gateway computer, and create a subdirectory called FAX. Change to this
	  directory, which should appear as C:\FAX.
	
	2. Copy the following files from the M:\..\MAILDATA\SATISFAX suddirectory:
	
	   - SATISFAX.SYS
	
	   - CASMGR.CFG
	
	   - DOWNLOAD.402 (or DOWNLOAD.200 for SatisFAXtion Modem 200i)
	
	   - LOADER.402 (or LOADER.200 for SatisFAXtion Modem 200i)
	
	  NOTE: Any subsequent changes made when you run the SatisFAXtion Setup program
	  from the network drive will not be reflected until the newly updated file
	  CASMGR.CFG is copied from the network to the local C\:FAX subdirectory.
	
	3. Change back to the root drive of the gateway computer.
	
	4. Edit the configuration files of the gateway computer, and add the following
	  lines to the AUTOEXEC.BAT file:
	
	  " M:\MAILDATA\PUREDATA\CASMGR.EXE C:\FAX\CASMGR.CFG rem M:\MAILDATA\ PUREDATA
	  \FAXTSR.EXE " (without the quotation marks)
	
	  Add the following lines to the CONFIG.SYS file:
	
	  " DEVICE= C:\FAX\SATISFAX.SYS IOADDR=0350 " (without the quotation marks)
	
	  NOTE: In some cases, if the gateway computer was previously configured with
	  SatisFAXtion software, there may be older versions of the software configured
	  on the gateway computer. The older versions will be called from the
	  AUTOEXEC.BAT file. You should REMark out the line below, if encountered:
	
	  (drive):\..\SATISFAX\FAXPOPUP.EXE
	
	5. Save these changes and exit from the editing program.
	
	To check the hardware
	---------------------
	
	PureData supplies a utility called TESTCOM.EXE. This program allows you to run
	diagnostic tests on COM ports (I/O address) or IRQs (interrupts) that are in
	use. After you install the SatisFAXtion software, this utility will be located
	on the postoffice in the SaitisFAXtion directory.
	
	NOTE: TESTCOM should only be run after you have installed the SatisFAXtion
	software. TESTCOM will not run unless the COM ports and IRQs are set for both
	the modem and the fax.
	
	To run TESTCOM
	--------------
	
	1. Turn on gateway computer and establish or wait for a connection to network
	  share of \MAILDATA (the postoffice) to be restored.
	
	2. Change to the M:\..\MAILDATA directory, and change to the SatisFAX
	  subdirectory.
	
	3. To run TESTCOM, type the following and press ENTER:
	
	  " testcom " (without the quotation marks)
	
	4. The utility will initially try to locate the FaxModem. If it is successful,
	  it will display a menu with more in-depth diagnosis options.
	
	  The diagnostic choices listed vary, and some can be ran multiple times.
	  Execute the options, as needed. If problems occur, please refer to the
	  troubleshooting section of the SatisFAXtion "Installation and Setup Guide."
	
	To test with the FAXability software
	------------------------------------
	
	1. Turn on gateway computer and establish or wait for a connection to network
	  share of \MAILDATA (the postoffice) to be restored.
	
	2. Change to the M:\..\MAILDATA directory, and change to the SatisFAX
	  subdirectory.
	
	3. To run the FAXability software, type the following and press ENTER:
	
	  " fax " (without the quotation marks)
	
	4. For the SatisFAXtion 200i boards:
	
	  a. Select Send, and press ENTER.
	
	  b. Press / to highlight the upper menu bar, and select the telephone number.
	     Press ENTER.
	
	  c. Enter the name, fax number, and check the hardware type. The hardware type
	     should be Fax Machine.
	
	  d. Press the F10 key to accept the information.
	
	  e. At the next prompt, you can add this above information to the telephone
	     book if you answer Yes.
	
	  f. Press the F10 key to accept the telephone number.
	
	  g. Press / to go to the upper menu bar, and select the Change Directory.
	
	  h. Enter a valid path to the ASCII, PCX, or DCX files, and press ENTER.
	
	  i. Use the arrow keys to highlight a file, and press ENTER to select the
	     file. The file should appear in the Selected category on the right of the
	     screen.
	
	  j. Press the F10 key to accept.
	
	  k. Highlight Send!, and press ENTER to send the file via the FaxModem.
	
	For additional information regarding sending faxes with the SatisFAXtion Modem
	200i, refer to the "Getting Started" section in the SatisFAXtion Software
	"User[ASCII 146]s Guide" (MS-DOS Version).
	
	1. For the SatisFAXtion 400i boards:
	
	  a. Select Transmit, and select the subcategory Fax Files...
	
	  b. Select directories, and select a directory containing ASCII, PCX, or DCX
	     files. Press ENTER.
	
	  c. Select the files. Use the arrow keys to select a file. Press ENTER to
	     select the file.
	
	  d. Select OK. This will return you to the Send Fax Screen.
	
	  e. Fill in the To: field, and press TAB.
	
	  f. Fill in the Fax #, and press ENTER. The entered information should be
	     added to the Send List.
	
	  g. Select Send to send the file via fax.
	
	For additional information regarding sending faxes with the SatisFAXtion Modem
	400i, refer to the sections "Starting" and "Tasks and Topics" in the "Faxability
	for MS-DOS Guide."
	
	PUREDATA MAINTENANCE AND TROUBLESHOOTING
	
	To ensure that disk space is available and to optimize overall performance, you
	will need to periodically do file maintenance on the gateway computer.
	
	The PureDATA CAS drivers will generate concurrent log file entries to track
	activity for each send or receive fax transmission. These files are created in
	the \..\PUREDATA directory, and you can view the log files by running the fax
	from the directory.
	
	You can also delete the entries by selecting the Events Status option, then
	select the Logged Events and delete a single entry or Purge All.
	
	MICROSOFT MAIL GATEWAY TO FAX (VERSION 3.X)
	
	After you have completed the steps above, you can install the Microsoft Mail
	Gateway to FAX and Gateway Access components. The gateway postoffice requires
	both the Gateway and Gateway Access component of the Mail Gateway to FAX. A
	postoffice forwarding and receiving faxes from a gateway postoffice is
	considered to be a downstream; thus, it only requires the Mail Gateway Access to
	FAX component.
	
	To install the Mail Gateway to FAX and Access Component
	-------------------------------------------------------
	
	1. Insert the Gateway Component disk into the disk drive, and run the
	  INSTALL.EXE program. Follow the screen prompts to complete the installation.
	
	2. Insert the Gateway Access Component disk into the disk drive, and run the
	  INSTALL.EXE program. Follow the screen prompts to complete the installation.
	
	To configure Mail Gateway to FAX with PROFILE.EXE
	-------------------------------------------------
	
	NOTE: It is crucial to run PROFILE.EXE, and edit a file named PROFILE.GLB in
	order to match your network environment.
	
	1. Type the following command and press ENTER to run the PROFILE.EXE from the
	  \MAILEXE directory:
	
	  " profile -d<m> " (without the quotation marks)
	
	  where <m> represents the network drive of the postoffice.
	
	You will need to select the following options that correspond directly to
	previous configuration choices you made when you installed the SatisFAXtion
	software earlier:
	
	- Set the Redial Times to 3. The default value is 3.
	
	- For the Logo File option, ensure the physical location of FAXLOGO3.PCX (the
	  default name) is correct, or enter an alternative path to a different logo,
	  PCX image, or file of your choice.
	
	- Ensure that the physical Printer Path is present and correct. This entry
	  should point to the drive or directory location of PPB.EXE, a spooler program
	  associated with the Microsoft Mail for PC Networks, MS-DOS workstation. It
	  spools incoming faxes to a local or redirected printer when FAXin Mode is set
	  to spool or view and spool
	
	  NOTE: At this time, you may need to install the Mail for PC Networks, MS-DOS
	  workstation.
	
	- Set the Printer Port option to point to the correct local or redirected
	  printer port, for example, LPT1: or LPT2:.
	
	- Set the Fax Resolution to normal, not fine.
	
	- Set the Attachment Check to Yes.
	
	- Select Intel as the Fax Board type.
	
	  NOTE: This setting is towards the bottom of the configuration file,
	  PROFILE.GLB.
	
	All remaining options in this Setup screen are optional, and you should proceed
	to complete the installation.
	
	For additional information on installing the Microsoft Mail Gateway and Gateway
	Access to Fax and configuring PROFILE.GLB using PROFILE.EXE, please refer to the
	chapters entitled, "Installing the Gateway" and "Setting Up the Gateway" in the
	"Administrator[ASCII 146]s Guide" for Microsoft Mail Gateway to FAX.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
