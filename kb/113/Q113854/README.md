---
layout: page
title: "Q113854: PC WRmt: README.TXT: Microsoft Mail Remote for Windows 3.2"
permalink: kb/113/Q113854/
---

## Q113854: PC WRmt: README.TXT: Microsoft Mail Remote for Windows 3.2

	Article: Q113854
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	The following is the text of the Microsoft Mail Remote for Windows
	README.TXT file:
	
	************************************************************************
	
	  RELEASE NOTES FOR MICROSOFT MAIL REMOTE FOR WINDOWS, VERSION 3.2
	
	************************************************************************
	
	This document contains important information that supplements the
	documentation and online help for Microsoft Mail Remote for Windows,
	version 3.2.
	
	This document covers the following topics:
	
	Section 1: Mail
	
	  A. Recovering from Mistyping Your Password the First Time
	  B. Password Problems and Switching Mail Drivers
	  C. Do Not Export Directly to a Transport Message File
	  D. Setting Up Mail Remote Across a Network
	  E. Multiple MSMAIL.INI Files
	  F. LAN Card Installation
	  G. Mail and SHARE.EXE
	  H. Entering Addresses Directly on the TO: Line
	  I. Installing Over Another Copy of the Windows Mail Client
	  J. Using Mail Remote with Schedule+
	
	Section 2: Mail Remote Driver
	
	  A. Using Extended Characters in Scripts
	  B. Sending Messages to Postoffice Groups
	  C. Mixing Mail Remote and Postoffice Language Versions
	  D. Using Gateway Address Lists
	  E. Changing the Data Files
	  F. Carrier Detection and Serial Cables
	  G. Receiving Mail from *SPECIAL
	  H. Connection Time-Outs Between Sending and Retrieving Messages
	  I. Modem Script Files
	  J. Connect on Exit option leads to misleading error message
	
	Section 3: AT&T Mail Driver
	
	  A. Entering Addresses for AT&T Users, Mailing Lists, and Shared Folders
	  B. Changing the AT&T User ID You Sign in with
	  C. Sharing the AT&T Message File with Microsoft Mail
	  D. Reducing the Time for Connection Time-Outs
	  E. Possible GP-Fault in Mailing Lists Dialog with Slow Video Systems
	
	=================
	
	SECTION 1 : MAIL
	
	A. RECOVERING FROM MISTYPING YOUR PASSWORD THE FIRST TIME
	
	If you mistype your password when signing in for the first time, you
	need to delete the message file (.MMF) and try again. If you are using
	the Mail Remote driver, delete the file [windows_directory]\MSMAIL.MMF.
	If you are using the AT&T driver, delete the file
	[windows_directory]\MS_ATT.MMF.
	
	B. PASSWORD PROBLEMS AND SWITCHING MAIL DRIVERS
	
	When using AT&T, the password for your .MMF file must be the same
	as the primary AT&T password. Do not change this password without
	first requesting a new password from AT&T. If you are using the
	Mail Remote driver, the password is the same as the password set
	for the .MMF file. For the LAN driver, the password must be the
	same as the mailbox postoffice password.
	
	C. DO NOT EXPORT DIRECTLY TO A TRANSPORT MESSAGE FILE
	
	Do not use the Export command on the File menu to copy folders between
	the primary transport message files (e.g. MSMAIL.MMF and MS_ATT.MMF).
	If you do, the Personal Address Book (PAB) is cleared in the destination
	message file. The PAB associated with the current driver is copied to the
	destination message file.
	
	D. SETTING UP MAIL REMOTE ACROSS A NETWORK
	
	You can set up Mail Remote across a network by copying Disk 1 to a
	directory called \DISK1, Disk 2 to \DISK2, and Disk 3 to \DISK3.
	Then run SETUP.EXE, located in the \DISK1 directory.
	
	E. MULTIPLE MSMAIL.INI FILES
	
	Do not store an MSMAIL.INI file in the same directory as the MSMAIL.EXE
	file unless you use the Windows directory. If you store these files in
	the same directory (other than the Windows directory), Mail will not find
	the correct INI settings.
	
	F. LAN CARD INSTALLATION
	
	If you're running MS-DOS and have a LAN card installed, it's best not to
	configure it to use IRQ2. Instead, use IRQ5 to avoid losing serial port
	interrupts.
	
	G. MAIL AND SHARE.EXE
	
	If your message file (.MMF) is on your local hard disk, you must run
	SHARE.EXE before starting Windows and running Microsoft Mail for Windows.
	If you don't, Mail will not start, and the file that contains your messages
	might be accessed by other mail-related applications. SHARE.EXE enables
	each program that accesses your messages to lock portions of the file
	and protect the other mail-related applications from overwriting
	information in the file.
	
	If you are running Mail in Windows for Workgroups version 3.1
	in 386-enhanced mode, VSHARE.386 is loaded automatically. SHARE.EXE
	is not needed.
	
	Setup installs SHARE.EXE if it detects that it is needed. You need to
	restart your computer for it to take effect.
	
	H. ENTERING ADDRESSES DIRECTLY ON THE TO: LINE
	
	To enter addresses directly on the TO: line without first adding them
	to the PAB, enclose the address in square brackets. For example, type
	[MS:network/postoffice/user] to send mail to a Microsoft Mail user.
	Type [AT&T:!user] to send mail to an AT&T user.
	
	I. INSTALLING OVER ANOTHER COPY OF THE WINDOWS MAIL CLIENT
	
	Installing Mail Remote over version 3.0 of Microsoft Mail for Windows
	replaces the version 3.0 Help file and removes all embedded Help links
	to the Demos. To prevent this, rename the MSMAIL.HLP file before you
	install Mail Remote, and restore it after installation.
	
	If you install Mail Remote over Microsoft Mail for Windows, the current
	mail driver does not change. To change to the Mail Remote driver, use
	the Microsoft Mail System Selector.
	
	J. USING MAIL REMOTE WITH SCHEDULE+
	
	When your computer is disconnected from the LAN, you cannot initiate a
	meeting request with Schedule+. You can receive and respond to meeting
	requests but they will not be automatically booked in your calendar file.
	If you use the Schedule+ Reminder utility with multiple mail drivers, you
	may be prompted twice to sign in.
	
	===============================
	
	SECTION 2 : MAIL REMOTE DRIVER
	
	A. USING EXTENDED CHARACTERS IN SCRIPTS
	
	If you want to use extended characters in scripts, you must use a Windows
	text editor (for example, Notepad) to enter ANSI characters. If you
	use an MS-DOS editor, the characters are entered with the wrong code page
	and do not appear properly.
	
	B. SENDING MESSAGES TO POSTOFFICE GROUPS
	
	Do not address a message to a postoffice group if that postoffice group
	contains addresses that are not local to that postoffice. If you do, your
	message is delivered to the local addresses but not to any of the
	others.
	
	C. MIXING MAIL REMOTE AND POSTOFFICE LANGUAGE VERSIONS
	
	To use Mail Remote with a postoffice in a different language, the foreign
	postoffice must first install Microsoft Mail for MS-DOS in the same
	language as Mail Remote. For example, to use the French version of Mail
	Remote on a German postoffice, the French version of Microsoft Mail for MS-
	DOS must first be installed on the German postoffice. Then use the
	Regenerate command on the Remote menu before issuing the data disk for the
	French version of Mail Remote. This is required in order for Mail Remote to
	find the correct template files.
	
	D. USING GATEWAY ADDRESS LISTS
	
	Mail Remote does not provide remote access to gateway address lists.
	
	To access SMTP, X400, FAX, MHS and MCI gateways:
	
	From the postoffice, copy to the data disk the .NME and .GLB files that
	have the same name as the gateway. Setup will then install the files in
	the directories with the same name as those file types found in
	[windows_directory]\MSMAIL\MSRMT. The gateway appears in the address book.
	
	This procedure does not work for OfficeVision, PROFS, or SNADS gateways;
	however, it is possible to add all PROFS or SNADS users to a custom view.
	To do this, use the following procedure when you create the custom view
	with ADMIN:
	
	1. Highlight the gateway (PROFS or SNADS) with the spacebar.
	
	2. Press ESC (rather than ENTER to choose individual names).
	
	E. CHANGING THE DATA FILES
	
	You can change the data files by selecting Options on the Mail menu, then
	choosing the Server button. To change the data files without running Mail,
	copy them to the [windows_directory]\MSMAIL\MSRMT\USERINFO directory. The
	data files are installed when you start Mail. To disable the data files:
	
	1. Delete the .GLB files in [windows_directory]\MSMAIL\MSRMT\GLB.
	
	2. Delete all files in [windows_directory]\MSMAIL\MSRMT\MBG.
	
	3. Delete all files in [windows_directory]\MSMAIL\MSRMT\KEY.
	
	When you start Mail, you are prompted for new data files.
	
	F. CARRIER DETECTION AND SERIAL CABLES
	
	If you continually get "Carrier Lost" messages when you connect, you may
	be using an incorrect serial cable. Many printer serial cables only hook up
	a subset of the connection pins and exclude the DCD pin which Mail Remote
	needs to detect the carrier. Use a serial cable that has the following pins
	connected:
	
	2     TD      Transfer data
	3     RD      RCV data
	4     RTS     Request to send
	5     CTS     Clear to send
	6     DSR     Data set ready
	7     SG      Signal ground
	8     DCD     Data carrier detect
	20     DTR     Data terminal ready
	22     RI      Ring indicator
	
	G. RECEIVING MAIL FROM *SPECIAL
	
	Do not sign in to Microsoft Mail for Windows and leave it running, and then
	use Mail Remote to access mail. The LAN client will intercept system mail
	(from *SPECIAL) and interfere with remote access.
	
	H. CONNECTION TIME-OUTS BETWEEN SENDING AND RETRIEVING MESSAGES
	
	If you have a lot of headers in your mailbox, the connection may time-out
	while External prepares to transmit the headers list. to increase the
	time-out time limit, first make sure that Mail Remote is the current
	driver.
	
	Then increase the value for ConnectTimeOut in the MSMAIL.INI file, located
	in the Windows directory.
	
	I. MODEM SCRIPT FILES
	
	Script files developed for Microsoft Mail Remote for MS-DOS should work
	unmodified with Mail Remote for Windows. If a script doesn't work, it may
	be because of a timing problem in the script.
	
	General Purpose Modem Script Files
	----------------------------------
	
	- Null Modem NULMODM.SCR
	
	- Generic 1200 & 2400 bps Modems DEFAULT.SCR
	
	Modem Script Files for North America
	------------------------------------
	
	- Hayes Optima 2400 USOPTM24.SCR
	
	- Hayes Optima 9600 USOPTM96.SCR
	
	- Hayes Smartmodem 1200 USHAYS12.SCR
	
	- Hayes Smartmodem 2400 USHAYS24.SCR
	
	- Hayes V-series Smart 9600 USVSER96.SCR
	
	- Hayes V-series Ultra 9600 USULTR96.SCR
	
	- IBM 5853 2400 bps Modem USIBM524.SCR
	
	- Microcom AX Series Modems USMRCM96.SCR
	
	- Multitech MultiMdm 224E/V32 USMLTC96.SCR
	
	- Practical Peripherals 9600SA USPPER96.SCR
	
	- Telebit TrailBlazer 9600 bps USTLBT96.SCR
	
	- Motorola UDS 2400 USMTRL24.SCR
	
	- Motorola UDS V.3225 USMTRL96.SCR
	
	- Generic Modem USGNERIC.SCR
	
	NOTES:
	
	* If your modem does not appear on the list, try using the "US-Generic
	  modem" script (for example, it can be used for Compaq 9600 internal
	  modems).
	
	* The Hayes V-series Smart 9600 script also supports the Compaq internal
	  9600 modem.
	
	* The following source files for scripts added after MS Mail 3.0 shipped
	  are included on the distribution disks for Microsoft Mail Remote:
	
	  USOPTM24.MDM, USOPTM96.MDM, USMTRL24.MDM, USMTRL96.MDM, USPPER24.MDM,
	  USPPER96.MDM, and USGNERIC.MDM.
	
	Modem Script Files for France
	-----------------------------
	
	- Andrsn/Jacbsn 9634 @2400b FRANJA96.SCR
	
	- Compaq Internal 2400 bps FRCMPQ24.SCR
	
	- Kortex 1200 bps Modems FRKRTX12.SCR
	
	- Kortex 2400 bps Modems FRKRTX24.SCR
	
	- PNB Amazone 2400 bps FRPNBA24.SCR
	
	- PNB Niagara 2400 bps FRPNBN24.SCR
	
	- PNB Amazone Pocket 2400 bps FRPNBP24.SCR
	
	- Quadri Campouce 2400 bps FRCAMP24.SCR
	
	- Quattro TM2496 2400 bps FRQUAT24.SCR
	
	- US Robotics Courier HST USRCRHST.SCR
	
	- US Robotics Courier V32 USRCRV32.SCR
	
	Modem Script Files for Central Europe
	-------------------------------------
	
	- Digitec ALF 2400 II GEALF24.SCR
	
	- Digitec ALF 2400 MNP GEALFM24.SCR
	
	- Digitec Dialog 2400 GEDILG24.SCR
	
	- Digitec Dialog 2400 MNP GEDLGM24.SCR
	
	- Digitec Dialog 2400 Pro. GEDLGP24.SCR
	
	- Digitec Personal Line 2400 GEDIGP24.SCR
	
	- Digitec Prs. Line 2400 MNP GEDIGM24.SCR
	
	- Fury 2402 TI 2400 bps GEFURY24.SCR
	
	- Longshine Shine 2400 GESHIN24.SCR
	
	- MicroLink 2410T2 2400 bps GEMCLK24.SCR
	
	- MicroLink 9624T2V 2400 bps GEML9624.SCR
	
	- Toshiba Laptop int. 2400 GETOSH24.SCR
	
	Modem Script Files for Sweden
	-----------------------------
	
	- DiCom 9600 V42 Modem SWDICM96.SCR
	
	- Motorola Codex-series 9600 SWMCDX96.SCR
	
	- Multitech MultiModem V32 SWMTMM96.SCR
	
	- US Robotics HST Courier V32 SWUSRHST.SCR
	
	Modem Script Files for the United Kingdom
	-----------------------------------------
	
	- BT NS 2232B 9600 bps UKBTNS96.SCR
	
	- Dowty Mayze & Quattro 96 UKMAZQAT.SCR
	
	- Hayes 2400bps Modems UKHAYS24.SCR
	
	- Hayes Ultra & VSeries UKULTRAV.SCR
	
	- Miracom V32 & Courier HST UKMRCMCR.SCR
	
	- Quattro 2400 bps Modem UKQUAT24.SCR
	
	These six script files support the following set of modems:
	
	* The British Telecomm NS 2322B modem.
	
	* The Dowty set of modems including Quattro24, Mayze 24, Mayze 96, and
	  Quattro 96.
	
	* The Hayes and Ultra set of modems including Ultra 96, V series 9600,
	  V series 2400 and the Hayes 24 Smartmodem.
	
	* The Miracom (US Robotics) set of modems including V.32, Courier HST, and
	  Dual Standard.
	
	J. CONNECT ON EXIT OPTION LEADS TO MISLEADING ERROR MESSAGE
	
	If you select the "Connect on Exit" option in the Session Setup dialog
	and Exit Mail when there are no messages in the outbox, you will get
	an error message about driver incompatibility. This is a false error
	message and can be ignored. We recommend that you do not use this option
	since Mail will warn you if you have any mail in the outbox when you Exit
	and give you the option to send it.
	
	=============================
	
	SECTION 3 : AT&T MAIL DRIVER
	
	A. ENTERING ADDRESSES FOR AT&T USERS, MAILING LISTS, AND SHARED FOLDERS
	
	Do not enter non-alphanumeric characters (for example !, :, ~) in the
	address templates for AT&T users, mailing lists, and shared folders. These
	characters are added by the AT&T Mail driver. If they are entered into
	the address template, messages will fail with incorrect addressing.
	
	B. CHANGING THE AT&T USER ID YOU SIGN IN WITH
	
	The AT&T User ID you use to first sign in is permanently associated with
	the message file ([windows_directory]\MS_ATT.MMF) that gets created. To
	change the ID and the password associated with it, you must create a new
	AT&T message file as follows:
	
	1. Exit and sign out of Mail Remote.
	
	2. Use Notepad or another text editor to open the file
	  [windows_directory]\MSMAIL.INI.
	
	3. Find the [ATTTransport] section. Delete any entries in this section that
	  begin with Password= and SecondaryPassword=.
	
	4. Find the "MMFStoreName=" INI variable in the [ATTDefaults] section.
	
	5. Change the variable to a new message file name.
	
	6. Save the change and exit Notepad.
	
	7. Start Mail Remote and enter the new User ID and Password.
	
	8. When the Open Message File dialog box appears, select New.
	
	C. SHARING THE AT&T MESSAGE FILE WITH MICROSOFT MAIL
	
	The AT&T Mail driver creates its own message file, called MS_ATT.MMF,
	in the Windows directory. If you are using the Microsoft Mail for PC
	Networks or the Mail Remote driver, you can share the AT&T message file.
	
	CAUTION: This procedure copies the Personal Address Book to the AT&T
	message file. It's best to use this procedure only after you've run Mail
	Remote with the AT&T driver the first time, since copying the Personal
	Address Book to the AT&T message file overwrites existing addresses.
	
	To share the AT&T message file with Microsoft Mail:
	
	1. If you haven't already run Mail Remote with the AT&T Mail driver, do so.
	
	2. Exit and sign out.
	
	3. Use the Microsoft Mail System Selector to change the current driver to
	  Microsoft Mail for PC Networks.
	
	4. Start Mail Remote.
	
	5. Choose Export Folder from the File menu. Select
	  [windows_directory]\MS_ATT.MMF as the destination file name.
	
	6. Exit and sign out.
	
	7. Rename the original local message store used by the LAN and Remote drivers.
	
	8. Start Mail Remote again (make sure the Mail Remote or Microsoft Mail for PC
	  Networks driver is current).
	
	  A message tells you that the message file could not be found, since it no
	  longer exists in the original location with the original file name. Mail
	  Remote prompts you to locate the message file or create a new one.
	
	9. Enter the name of the AT&T message file, which now contains all the
	  information from the original message file (including the Personal Address
	  Book).
	
	10. Choose the OK button.
	
	D. REDUCING THE TIME FOR CONNECTION TIME-OUTS
	
	If you interrupt the connection, and the Carrier Detect check box is
	cleared, Mail may take several minutes to time out. To make the time-out
	faster, select the Carrier Detect check box. To do this, choose
	Communications from the Mail menu, then choose the Communications button.
	The Communications dialog box appears with the Carrier Detect check box.
	Before you do this, make sure your modem cable has a data carrier detect
	pin. If it does not, and you select the Carrier Detect check box, the
	modem will not connect to the AT&T Mail Service.
	
	For more information about the carrier detect option, see section F,
	"Carrier Detection and Serial Cables" in section 2, "Mail Remote Driver."
	
	E. POSSIBLE GP-FAULT IN MAILING LIST DIALOG WITH SLOW VIDEO SYSTEMS
	
	After sending or retrieving mailing lists using PCs with slow video systems
	avoid any operations before the mailing list dialog can redraw itself.
	
	Additional query words: 3.20 readme GPFault
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
