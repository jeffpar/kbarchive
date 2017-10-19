---
layout: page
title: "Q138548: FAX: Configuring GammaLink GammaFax with i3CAS Drivers"
permalink: /kb/138/Q138548/
---

## Q138548: FAX: Configuring GammaLink GammaFax with i3CAS Drivers

	Article: Q138548
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can configure the Mail Gateway to Fax on a machine running the Microsoft
	MS-DOS operating system and version 1.08 of i3CAS drivers.
	
	NOTE: The i3CAS drivers are provided by Instant Information Inc. as an alternate
	to the CAS API originally shipped with GammaLink GammaFax fax cards.
	
	The original documentation included with the Fax Gateway contains instructions on
	how to configure the gateway with the GammaLink GammaFAX CP fax card, which is
	no longer manufactured. When you install the newer drivers, the Fax Gateway can
	effectively use the discontinued CP and the current XP, CPi, and XPi versions of
	the GammaFax cards.
	
	When you install the i3CAS drivers, the performance limitations of GCAS.EXE are
	replaced with a new level of product stability and features that include:
	
	- The ability to suppress the cover page.
	
	- The ability to load and unload the i3CAS drivers without logging off the
	  gateway server or stopping the services.
	
	GammaLink GammaFAX boards are available worldwide. You can find the product
	availability and additional information regarding GammaLink boards at the
	following locations:
	
	- Dialogic World Headquarters, New Jersey, U.S.A.: (800) 755-4444
	
	- Dialogic Telecom Europe, Brussels, Belgium: (32) 2-715-0890
	
	- Dialogic Latin America and Caribbean, Argentina: (541) 322-3152
	
	- Dialogic Japan and Korea, Tokyo, Japan: (81) 3-5430-3253
	
	GAMMALINK GAMMAFAX CPI AND XPI BOARDS
	
	-------------------------------------
	
	The GammaFax CPi and XPi boards are microprocessor-based facsimile modems with
	their own RAM, CPU, and telephone interface.
	
	To install the GammaFax CPi and XPi boards:
	
	NOTE: The GammaFax software version 5.2 must be installed on the local drive of
	the dedicated gateway computer.
	
	1. Turn off the power to the gateway computer. Remove the cover, and touch the
	  power supply to dissipate built-up static charge. Install the card into an
	  available (preferably 16-bit) slot.
	
	2. Ensure that the telephone connector on the board is not obstructed. It may be
	  necessary to loosen the fax card's mounting screw and reposition it if the
	  phone cord jack cannot be easily inserted.
	
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
	
	GAMMAFAX SOFTWARE
	
	When the GammaFax board and telephone connections are properly installed, you are
	ready to install the GammaFax software.
	
	NOTE: Gateway computer must have a hard disk and more than 640 kilobytes of
	available memory.
	
	To install the GammaFax software
	--------------------------------
	
	1. Start the gateway computer. Insert the GammaFax Install disk into the
	  appropriate disk drive. At the MS-DOS prompt, type the following command and
	  press ENTER:
	
	  "drive: install" (without the quotation marks)
	
	  On screen instructions will prompt you through the installation process. The
	  presence of the GammaFax card will be automatically detected. If the board
	  type and initial I/O settings are incorrect, you can use the space bar to
	  toggle through the available settings.
	
	  NOTE: The country code asked for during installation can be found in Appendix
	  A of the GammaFax "Reference Manual."
	
	2. After you install the software, verify that your Customer Subscriber
	  Identification (CSID) number is correct. This number is usually a fax number
	  proceeded by an area code.
	
	  To verify your CSID number, type the contents of the GFAX.$DC configuration
	  file, or view it in your preferred text editor.
	
	To check the hardware
	---------------------
	
	GammaLink provides a utility called GFCPTST.EXE that will allow you to confirm
	that the I/O address settings are correct and that the board is properly
	installed. This utility will be located in the GammaFax directory that was
	created when the GammaFAX software was installed. You run the GFCPTST.EXE
	utility from the MS-DOS prompt or a batch file runs a diagnostic test and
	displays the board model, channel assignments, ROM version, and the amount of
	the RAM on the board.
	
	CAUTION: Do not run GFCPTST.EXE when the dispatcher is running. The results from
	GFCPTST will not be correct; transmissions in progress will be disrupted, and
	the system may have to be reset. On the gateway computer, run the following
	command to ensuring that GFDCP is not loaded:
	
	  "mem /c | more" (without the quotation marks)
	
	NOTE: You will need to follow the steps to install the GammaFax software in the
	previous section before testing the hardware. GFCPTST should be run after the
	GammaFax software is installed.
	
	To check the hardware after you install the GammaFax software:
	
	At the MS-DOS prompt, change to the local GammaFax install directory, and type
	the following command and press ENTER:
	
	  "\ gfcptst" (without the quotation marks)
	
	The displayed settings should be checked against the physical channels and
	equivalent I/O addresses listed in the GammaFax CPi/XPi "Installation and
	Reference Manual." Modify incorrect settings and repeat this procedure.
	
	For additional information on installing and configuring the hardware, refer to
	the GammaFax "Installation and Reference Manual."
	
	To verify the GammaFax board I/O address:
	
	After you have installed the GammaFax software, the utility GFSETUP can be used
	to change or verify the physical channel and I/O address of the fax card. When
	you run this utility from the MS-DOS command prompt, the following options will
	be displayed:
	
	- System setup.
	
	- Board setup.
	
	- Cover setup.
	
	You can select the Board Setup option to modify the GammaFax hardware settings.
	
	To send a test fax
	------------------
	
	To ensure the GammaFax card is operating correctly, send a test fax with the Fax
	menu utility program, FAXM.EXE, included with the software. This utility is
	called from the batch file named GF.BAT located in the GammaFAX directory.
	
	Below are the steps to initialize the GammaFax card, and start the fax menu
	utility program:
	
	1. At the MS-DOS command prompt on the gateway computer, change to the GammaFax
	  directory.
	
	2. Run GFCPTST.EXE to test the current state of the fax card. If the card is
	  operating properly, the test should complete with no errors.
	
	3. Start the GammaFax dispatcher by running the batch file called GFQM.BAT that
	  initially sets the environment parameter, SET GFAX= to the Fax Queue. Then it
	  runs the dispatcher.
	
	4. To run the Fax menu utility program, type the following and press ENTER:
	
	  "gf.bat" (without the quotation marks)
	
	  For more information on sending faxes with the GammaFax Menus Utility
	  (FAXM.EXE) or to resolve any problems when you run the diagnostics, refer to
	  the GammaFax "Utilities Manual."
	
	MICROSOFT MAIL GATEWAY TO FAX (VERSION 3.X)
	
	You can now Install the Mail Gateway to FAX and Gateway Access components. The
	gateway postoffice requires both the Gateway and Gateway Access component of the
	Mail Gateway to FAX. A postoffice forwarding and receiving faxes from a gateway
	postoffice is considered to be a downstream; thus, it only requires the Mail
	Gateway Access to FAX component.
	
	To install the Mail Gateway to FAX and Access Component
	-------------------------------------------------------
	
	CAUTION: On the gateway computer, type the following command to ensure that the
	GFDCP is not loaded:
	
	  "mem/c | more" (without the quotation marks)
	
	If it is loaded, reboot the gateway computer before you install the gateway
	components.
	
	1. Insert the Gateway Component disk into the disk drive, and run the
	  INSTALL.EXE program. Follow the screen prompts to complete the installation.
	
	2. Insert the Gateway Access Component disk into the disk drive, and run the
	  INSTALL.EXE program. Follow the screen prompts to complete the installation.
	
	  For more information on configuring or installing Microsoft Mail Gateway to
	  FAX or Gateway Access to FAX components, please refer to the chapters
	  entitled: "Installing the Gateway" and "Setting Up the Gateway" in the
	  "Administrator's Guide" for Microsoft Mail Gateway to FAX.
	
	To configure Mail Gateway to FAX with PROFILE.EXE
	-------------------------------------------------
	
	NOTE: It is crucial to run PROFILE.EXE, and edit a file named PROFILE.GLB in
	order to match your network environment.
	
	1. Type the following command and press ENTER to run the PROFILE.EXE from the
	  \MAILEXE directory:
	
	  "profile -d<m>" (without the quotation marks)
	
	  where <m> represents the network drive of the postoffice.
	
	2. Select the 100% CAS-compatible option as the fax board type.
	
	For more information on installing the Microsoft Mail Gateway to FAX or
	configuring the gateway with PROFILE.EXE, refer to the chapters entitled:
	"Installing the Gateway" and "Setting Up the Gateway" in the "Administrator's
	Guide" for Microsoft Mail Gateway to FAX.
	
	OVERVIEW OF I3CAS (VERSION 1.08)
	
	--------------------------------
	
	The i3CAS drivers for GammaFax offer extended features that were not available
	when the original GCAS drivers shipped with the Microsoft Mail Gateway to FAX.
	Most of these extended features are configured through settings within the
	I3CAS.INI file that is read each time the i3CAS drivers are loaded.
	
	NOTE: In order to use the extended faxing features provided by using the i3CAS
	drivers, all current GammaFAX CAS API calls, GFDCP.EXE or GCAS.EXE, must be
	disabled. Use a REMark statement or remove the .EXE programs from the
	AUTOEXEC.BAT of the gateway computer.
	
	For additional information on removing or disabling your current CAS driver
	configurations, please refer to your software documentation. If you do not have
	the documentation, consult your vendor.
	
	The i3CAS driver toolkit supports the following GammaFax models: CP, CPi, XP,
	XPi, CPMC, CPiMC, XPMC, CPD, CP4/LSI. However, for use with the Fax Gateway,
	only the CP, CPi, XP, and XPi drivers should be used.
	
	To get the i3CAS drivers
	------------------------
	
	If the current i3CAS drivers were not packaged with your GammaFax hardware, you
	can download ICAS.EXE, a self-extracting file, from the GammaLink BBS at (408)
	745-2216.
	
	The GammLink BBS supports the following communication options:
	
	  Data bits     Parity     Stop Bits     Transfer rates (BPS)
	
	----------------------------------------------------------------------
	
	  8             N          1             1200, 2400, 9600, and 14400
	  7             E          1             1200, 2400, 9600, and 14400
	
	To install the i3CAS drivers
	----------------------------
	
	1. After you download I3CAS.EXE to a clean directory, run it (type "i3cas" at
	  the MS-DOS command prompt) to extract the contents of the file. You should
	  receive the following files:
	
	  I3CAS.EXE (339,328 bytes, dated 07-03-95, 4:57 P.M.)
	  I3_108.EXE (325,592 bytes, dated 04-14-95, 3:14 P.M.)
	  READ_1ST.TXT ( 274 bytes, dated 04-14-95, 3:14 P.M.)
	  READ_2ND.TXT ( 11,380 bytes, dated 04-14-95, 4:23 P.M.)
	
	2. Copy the I3_108.EXE to the same directory as your Microsoft Mail for PC
	  Networks or Microsoft Mail Gateway to FAX executables, usually the \MAILEXE
	  subdirectory.
	
	3. From the executables directory, to extract the i3CAS drivers from this file,
	  type the following command and press ENTER:
	
	  "i3_108 -d" (without the quotation marks)
	
	where the -d parameter will create a subdirectory.
	
	After you extract the I3_108.EXE file, the extracted files should be in a new
	subdirectory, \MAILEXE\ICAS.
	
	Additional directories will appear similar to the directory view below:
	
	     Directory of D:\MAILEXE\ICAS
	----------------------------------------------------------------------
	
	  08/07/95  09:13a   <DIR>
	  08/07/95  09:13a   <DIR>
	  08/07/95  09:13a   <DIR>   BIN
	  08/07/95  09:13a   <DIR>   SAMPLES
	    4 File(s)  0 bytes
	    216,790,528 bytes free
	
	Directory of D:\MAILEXE\ICAS\BIN
	----------------------------------------------------------------------
	
	08/07/95  09:13a   <DIR>
	08/07/95  09:13a   <DIR>   ....
	08/07/95  09:13a   <DIR>   FONTS
	08/07/95  09:13a   <DIR>   MODEM
	08/07/95  09:13a   <DIR>   QUEUE
	  5 File(s)  0 bytes
	
	To configure the i3CAS drivers
	------------------------------
	
	Before you try to load the i3CAS drivers, use a text editor to modify the
	I3LOAD.INI file to reflect your current directory structure.
	
	NOTE: In some cases, if the gateway computer was previously configured for GCAS,
	older versions of GammaFax software may be configured on the gateway computer
	and may be called from the AUTOEXEC.BAT. Replace or REMark out the following
	lines, if encountered:
	
	  \GammaFax       in PATH statement
	  SET GFAX        = <local drive>:\GammaFax
	  GFQM            loads the GammaFax software (dispatcher)
	  GF              sets the environment variable, then loads FAXM.EXE
	
	EXTENDED FEATURES OF I3CAS
	--------------------------
	
	Users of the Mail Gateway to FAX will be able to benefit from extended faxing
	features when you modify specific line settings within the I3LOAD.INI file.
	
	Notes:
	
	- The I3LOAD.INI file is read each time the i3CAS drivers are loaded to reflect
	  current configuration preferences.
	
	- Each line in this ASCII file cannot exceed 128 characters and must end with a
	  carriage return and line feed.
	
	Before you can use the gateway, you must first load the i3CAS drivers. It is
	recommended that you add an I3LOAD statement to the AUTOEXEC.BAT file of your
	gateway computer. This is optional and can be added later, if desired.
	
	To dynamically load and unload i3CAS drivers
	--------------------------------------------
	
	To load the CAS drivers, type the following on the command line:
	
	  "i3load" (without the quotation marks)
	
	To unload the CAS drivers, type the following command line:
	
	  "i3load /u" (without the quotation marks)
	
	The i3LOAD program can use additional command line switches:
	
	     i3load [/s]  [/f<filespec>] [/d<filespec>] [/u] [ini_file]
	
	where:
	  /s             Suppress all beeps and screen messages, returning
	                 only an error class indicating which driver
	                 failed to load. Default: Display complete error #s.
	
	  /f<filespec>   Specifies an MS-DOS file to route error information
	                 to including drive and path, if desired.
	
	  ini-file       Name of the INI configuration for i3LOAD to use
	                 for initialization. If the INI file is not
	                 specified, the default search points to the ICAS\BIN
	                 subdirectory of \MAILEXE or alternate directory
	                 location of executables.
	
	To enable/disable the cover/second page
	---------------------------------------
	
	To globally disable the cover page, change the following setting in the
	I3LOAD.INI file:
	
	  [ICANFAX]
	  ignore_mail_pages=No
	
	NOTE: The default value of this option is No.
	
	If you change this option to Yes, the gateway can receive the actual faxed
	document with no cover or mail window compose pages sent beforehand.
	
	To control failed transmissions (retry attempts)
	------------------------------------------------
	
	The retry attempts of fax transmissions are necessary when the gateway encounters
	send failures.
	
	To set the number of times the gateway will retry, change the following setting
	in the I3LOAD.INI file:
	
	  [ICANFAX]
	  failed_send_retry_attempts=3
	
	NOTE: The default value of this option is 3.
	
	You can set this option to any number, or to eliminate the retry attempts make
	the option equal 0 (zero).
	
	Additional .INI file setting in this section are listed below:
	
	  use_ems=Yes
	  use_high=Yes
	  busy_call_send_retry_seconds=20
	  queues_path=c:\mail35xs\ICAS\BIN\QUEUE
	  send_all_pages_on_retry=Yes
	
	MEMORY CONSIDERATIONS
	---------------------
	
	After you load the network drivers and i3CAS drivers, at least 350K of
	conventional memory will be needed to run the gateway. If the gateway machine
	uses a network interface card (NIC) that does not have its own memory cache,
	ensure that this amount of memory is actually available.
	
	I3CAS MAINTENANCE AND TROUBLESHOOTING
	-------------------------------------
	
	Periodically, it may be necessary to remove files with the following extensions
	from the i3CAS Install directory, \[ASCII 133]\ICAS\BIN:
	
	  *.CVR     Contains selected cover page.
	
	  *.LST     Contains received fax content.
	
	  *.TCF     Contains incoming TIF image to be converted.
	
	These files can accumulate on the hard drive of the gateway computer. The gateway
	does not have a menu driven program or automated way to remove these files. To
	ensure stable operation of the gateway, periodically delete these files from the
	i3CAS install directory. You can also create a batch file to delete the files.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
