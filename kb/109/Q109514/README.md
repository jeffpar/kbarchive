---
layout: page
title: "Q109514: README.WRI from Windows for Workgroups 3.11 (Part 4 of 4)"
permalink: /kb/109/Q109514/
---

## Q109514: README.WRI from Windows for Workgroups 3.11 (Part 4 of 4)

	Article: Q109514
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft Windows for Workgroups
	version 3.11 README.WRI file.
	
	MORE INFORMATION
	================
	
	12.2  EISA Systems with More Than 16 Megabytes of Extended Memory
	
	On some EISA (Extended Industry Standard Architecture) computers,
	there may be more extended memory available than the system's Int
	15h/88h BIOS call can detect. On these computers, HIMEM.SYS uses only
	the amount of extended memory detected. This can result in a large
	amount of unused memory.
	
	You can have HIMEM.SYS use all available extended memory by using the
	/EISA option in the CONFIG.SYS file. For example, if HIMEM.SYS is
	located in your WINDOWS directory, you would use the following
	command line in the CONFIG.SYS file to take advantage of all
	available extended memory:
	
	device=c:\windows\himem.sys  /EISA
	
	If you use the /EISA option, do not load any device drivers that use
	the Int 15h/88h BIOS call to allocate extended memory before loading
	HIMEM.SYS. If you do, your system may not work properly. If you must
	reserve some extended memory for device drivers or applications that
	use the Int 15h/88h BIOS call, you can specify the amount of memory
	in kilobytes that you want to reserve by using the /INT15= option.
	For example, if you want to reserve 128 kilobytes of extended memory,
	you would use the following command line in the CONFIG.SYS file:
	
	device=c:\windows\himem.sys  /EISA  /INT15=128
	
	HIMEM.SYS must still be loaded before other device drivers in the
	CONFIG.SYS file.
	
	To determine if your device driver or application uses the Int15h/88h
	BIOS call, see the documentation for your device or contact your
	device dealer. For more information about using HIMEM.SYS with the
	INT15 option, see "Managing Memory and Performance" in your Windows
	or Windows for Workgroups user's guide.
	
	12.3  Epson Screen Savers
	
	Some Epson computers have screen-saver utilities that clear the
	screen after a specified period of inactivity. With Windows for
	Workgroups, the screen saver might detect that the system is idle
	when it is not. Windows will function properly even though the screen
	is blank, but nothing will be displayed until you quit Windows and
	then restart it.
	
	See the documentation that you received with your Epson computer for
	instructions on how to turn off the screen saver.
	
	12.4  NCR 925 with EMM386.EXE
	
	If you are using an NCR 925 with EMM386.EXE, include the following
	option on the device=EMM386.EXE command line in your CONFIG.SYS file:
	
	device=EMM386.EXE  X=E000-EFFF
	
	12.5  Non-US Keyboard Layouts: Using Application Shortcut Keys
	
	Some non-US keyboards show two characters per alphabet key and three
	characters per alphanumeric key. To type the second or third
	character, you must press and hold down CTRL+ALT or ALTGR before
	pressing the key. If you are using such a keyboard layout, do not use
	keys that show two or three characters as application shortcut keys.
	
	12.6  Plus Hardcard
	
	<B7> To run Windows for Workgroups with a Hardcard, you must include the
	following line in the [386Enh] section in the SYSTEM.INI file:
	
	VirtualHDIRQ=OFF
	
	For information on how to modify the SYSTEM.INI file, see the
	SYSINI.WRI online document.
	
	Note:  This procedure is not necessary if you are using a Hardcard II
	or a Hardcard II XL.
	
	<B7> It is also recommended that you use SMARTDrive double-buffering
	with a Hardcard. For more information about using SMARTDrive, see
	"Managing Memory and Performance" in your Windows or Windows for
	Workgroups user's guide.
	
	12.7  SCSI(r) Hard Disk Using DMA
	
	If your computer has an SCSI hard disk that uses Direct Memory Access
	(DMA), you must include the following entry in the [386Enh] section
	of the SYSTEM.INI file:
	
	VirtualHDIRQ=OFF
	
	In addition, you must have SMARTDrive installed and you must NOT
	disable double-buffering by removing or remarking out the \D option
	in the CONFIG.SYS file.
	
	For information on how to modify the SYSTEM.INI file, see the
	SYSINI.WRI online document.
	
	12.8 Columbia Data Products SCSI Hard-Disk Controller
	
	To use the Columbia Data Products SCSI hard-disk controller with
	Windows for Workgroups, you must update the Columbia Data Products
	SCSI driver to version 3.35 or higher.
	
	12.9 Sound Blaster Audio Card
	
	If you are using a Sound Blaster audio card that includes a Digital
	Signal Processor (DSP) chip earlier than version 2.0, you may want to
	upgrade to version 2.0 to improve audio performance. To find out
	which version of the DSP chip you currently have, run the
	TEST-SBC.EXE utility included in your Sound Blaster package. To
	receive version 2.0 of the DSP chip, contact Creative Technology Ltd.
	
	12.10  Tandy 2500 XL with MS-DOS in ROM
	
	The Tandy 2500 XL can be configured to use MS-DOS in read-only memory
	(ROM). If you want to use this feature, after you run Windows Setup
	you must run the Tandy setup program (SETUPXL). Modify your
	configuration so that your AUTOEXEC.BAT and CONFIG.SYS files are read
	from drive C.
	
	12.11  Wyse Computers
	
	If you are using a Wyse computer to run Windows, you might need to
	modify the device=HIMEM.SYS line in your CONFIG.SYS file to read:
	
	device=[path]HIMEM.SYS  /M:WYSE
	
	13.0 Using Microsoft At Work PC Fax
	
	This section contains information about using Microsoft At Work PC
	Fax to send and receive faxes.
	
	13.1 Sending Faxes from Applications
	
	If you are sending messages to a non-At Work recipient, the message
	format should be set to Facsimile Format or Email If Available in the
	send message Options dialog box. You must be running Mail in order
	for Microsoft At Work PC Fax to create an image of the message being
	sent and its document attachments when facsimile format faxes are
	sent.  Typically, messages are composed and sent using Mail, so this
	will not be a problem.  However, some applications provide a File
	Send command that allows you to create messages outside of Mail.  If
	Mail is not running, the delivery format option of these messages
	must be set to Email Format in the send message Options dialog box.
	Otherwise, you should start Mail before sending the fax.
	
	You can also print from an application directly to the Microsoft At
	Work PC Fax printer driver.  Use the Printer Setup command to specify
	printing to the Microsoft At Work PC Fax printer driver, and then use
	Print to send the Fax.  If you use this method, you will need to
	start Mail to see if the message was transmitted.  If the message was
	not able to be transmitted, an undeliverable message will appear in
	your Mail Inbox.
	
	13.2 Cancelling a Fax
	
	To cancel a fax transmission, use the Fax Queue command in Mail.  To
	generate fax images for transmission, Microsoft At Work PC Fax causes
	applications to print the document attachments of the message to the
	Microsoft At Work PC Fax printer driver.  Some applications display a
	dialog box that allows you to cancel printing the attachment.  Never
	cancel the print job at this point.  Choose OK to continue the print
	job, if needed.
	
	Do not delete messages to fax recipients from the Outbox in Mail.
	This causes fax transmissions to remain in the fax queue until you
	delete them by using the Fax Queue command.
	
	13.3 Different Fax Appearance
	
	The Microsoft At Work PC Fax printer driver is used to create images
	of documents for transmission.  This printer driver may support a
	different set of fonts than the printer driver you usually use.  This
	can cause fonts, line breaks, and page breaks to be different in the
	transmitted document than appear when the document was created.
	
	To help reduce this problem, it is best to use only True Type fonts
	in your document.  You can also use the Printer Setup to change the
	default printer driver to the Microsoft At Work PC Fax printer driver
	before you send the document as a fax.  This will cause the
	application to repaginate the document according to the fonts
	supported by the Microsoft At Work PC Fax printer driver.
	
	13.4 Use Correct Image Quality When Sending Faxes
	
	If you choose to send a fax using an image quality that isn't
	supported on the destination machine, the message will be returned as
	undeliverable mail in your Mail Inbox with the message, "Error:
	Resolution not supported by receiver. Transmission failed - Not all
	pages sent."  To ensure that only resolutions supported by the
	destination fax machine will be sent, set the image quality to Best
	available.
	
	Faxes with 300 dpi resolution can be sent only to Microsoft At Work
	PC Fax recipients.
	
	13.5 Working Offline When Fax Transport Can't Be Started
	
	You may find that the fax transport can't be loaded when you start
	Mail or send a message from an application.  This can be caused by
	problems such as being disconnected from the modem, or not being able
	to establish a network connection with a shared modem.  When this
	occurs, you are given the option of working with Microsoft At Work PC
	Fax offline.  This allows you to create and send faxes as usual, but
	the faxes will remain in the Outbox and won't be transmitted.  To
	transmit the fax messages once the fax transport becomes available,
	select the Mode command from Mail's Fax menu and clear the Work
	Offline check box. The faxes will not be transmitted until the Work
	Offline check box is cleared.
	
	13.6 CPU-Intensive Operations Can Cause Transmission Failures
	
	Some operations during a fax transmission can cause the transmission
	to fail.  This includes some MS-DOS operations, such as formatting a
	floppy disk, copying files, or making file transfers across a
	network.  You should avoid CPU-intensive operations such as these
	when a fax transmission is occurring.  The Microsoft At Work PC Fax
	icon displays information regarding fax transmissions that are
	currently in progress. To always display fax status, choose the Fax
	icon from the Control Panel group, and check the Always Display Fax
	Status check box.
	
	13.7 Binary File Transfer
	
	Only Class 1 fax modems can be used for binary file transfers.
	
	13.8 Fax Modem Information
	
	The following fax modems may not be compatible with Microsoft At Work PC
	Fax.
	
	NOTE: BPS stands for "bits per second."
	
	Manufacturer               Modem        Class        Location
	-------------------------------------------------------------
	
	Cardinal                   MB2296SR     Class 2      internal
	Practical Peripheral       PM2400FXSA   Class 2      external
	Zoom                       FX9624       Class 2      external
	Zoom                       FC96/24      Class 2      internal
	Macronix                   VOMAX 2000   Class 2      external
	Macronix                   MaxFax9624   Class 2      internal
	MegaHertz Pocket Fax Modem
	2400 BPS P224              FMV          Class 1      external
	National TyIN 2000                      Class 2      external
	
	The following international fax modems may not be compatible with
	Microsoft At Work PC Fax.
	
	Country   Manufacturer     Modem             Class         Location
	-------------------------------------------------------------------
	
	 UK      Cray Comm        Quantum 144       Class 1      external
	 GER     Dr. Neuhaus      Fury 241          Class 2      internal
	 GER     ELSA             Mikrolink 14.4PC  Class 2      internal
	 SWE     Multitech        Mt932Ba           Class 2      external
	                         (US version OK)
	 AUS     BIT Blitzer      MX-6              Class 1      external
	 AUS     BIT Blitzer      XM124S-RFAX       Class 2      external
	 AUS     Microfax                           Class 2      external
	                                                         pocket
	 FRA     Kortex           KX PRO 2400       CAS          internal
	 FRA     La Commande      LCE Minifax       Class 1      external
	         Electronique
	 ITA     Digicomm         SNM28 SR          Class 2      internal
	 ITA     Sysnet           SMF 04FAX         Class 1      internal
	
	14.0 Security
	
	An administrator configuration utility, ADMINCFG.EXE, is available to
	simplify the task of administering network security privileges. For
	more information and for this utility, see the Windows for Workgroups
	Resource Kit Addendum. For information about how to order the
	Resource Kit Addendum, see section 17 of this file.
	
	15.0 Using the Real-Mode Redirector
	
	You can connect to shared resources from MS-DOS by using the
	real-mode redirector. The real-mode redirector commands all begin
	with the word NET. For information about using NET commands, type NET
	HELP at an MS-DOS prompt.
	
	If you are using a multi-network configuration, the NET commands may
	only work on other machines with the same network. See your Workgroup
	Add-On User's Guide, and the on-line document NETWORKS.WRI for more
	information about using multiple networks.
	
	16.0 Quitting Windows for Workgroups When Microsoft Mail is Still Running
	
	If you have Mail in your Startup group and it is set up to be
	minimized when it starts, you will experience a long delay when you
	quit Windows. In addition, you will see the following message:
	
	This application was communicating on the network when you terminated
	it. Although Windows attempted to restore the state of the network,
	you may have problems with network communications until you restart
	your computer.
	
	The same problem may occur if you have Mail running in a window (not
	minimized) when you quit Windows.
	
	To correct this problem, edit your MSMAIL.INI file (located in your
	Windows directory). In the [Microsoft Mail] section, change the
	NetBios= entry to the following:
	
	    NetBios=0
	
	After saving the change to the file, restart Windows.
	
	17.0  Other Online Documents
	
	The following table describes other online documents that contain
	important information about Windows for Workgroups that is not
	included in the printed documentation or in Help:
	
	Document     Contains
	________________________________________________________
	
	SETUP.TXT - Information about problems that may occur when you
	           set up Windows for Workgroups.
	
	MAIL.WRI - Information about the MSMAIL.INI file and other Mail
	          administration information.
	
	PRINTERS.WRI - Information about specific printers and fonts.
	
	NETWORKS.WRI - Information about running Windows for Workgroups with
	              specific network configurations.
	
	SYSINI.WRI - Information about the settings in the SYSTEM.INI file.
	
	WININI.WRI - Information about the settings in the WIN.INI file.
	
	18.0  Ordering the Resource Kits
	
	Two resource kits are available:
	
	<B7>  Microsoft Windows for Workgroups 3.11 Resource Kit
	
	This kit provides complete technical information about Windows for
	Workgroups version 3.1 for the support professional. It includes a
	technical reference manual and a disk containing helpful utilities,
	system-resource viewers, drivers, and accessories.
	
	<B7>  Microsoft Windows for Workgroups Resource Kit Addendum for Version 3.11
	
	If you already have a copy of the Windows for Workgroups 3.1 Resource
	Kit, this addendum kit provides technical information about new
	features of Windows for Workgroups version 3.11. It includes a
	technical reference manual and a disk containing helpful utilities.
	
	To order the resource kits within the United States, dial:
	
	1-800-642-7676
	
	To order outside of the United States, dial the phone number for your
	area. You can find this number on the International Subsidiary card.
	
	19.0  Getting Drivers from the Windows Driver Library
	
	If you need to get updated copies of drivers, or drivers that do not
	come with Windows for Workgroups version 3.11, you can get them from
	Microsoft Product Support Services at (425) 637-7098 or (425) 635-4948
	(text telephone).
	
	Additional query words: wfw wfwg 3.11 awfax
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
