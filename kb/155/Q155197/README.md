---
layout: page
title: "Q155197: HOWTO: Unattended Setup Parameters for Unattend.txt File"
permalink: /kb/155/Q155197/
---

## Q155197: HOWTO: Unattended Setup Parameters for Unattend.txt File

{% raw %}

	Article: Q155197
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbOPK kbSBKkbfaq
	Last Modified: 28-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation 
	- Microsoft Windows NT Server 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Unattended Setup is the method by which original equipment manufacturers (OEMs),
	corporations, and other users install Windows NT in unattended mode. To start
	Windows NT Setup in unattended mode, you must specify the following command:
	
	  winnt[32] /u:<answer file> /s:<install source>
	
	where <answer file> is a file containing information to automate the
	installation process and <install source> is the location of the Windows
	NT installation files. In this article, <answer file> is referred to as
	the Unattend.txt file.
	
	MORE INFORMATION
	================
	
	Unattend.txt File Format
	------------------------
	
	In general, an answer file consists of section headers, parameters, and values
	for those parameters. Most of the section headers are predefined (although some
	may be user-defined). It is not necessary to specify all the possible parameters
	and keys in the Unattend.txt file if the installation does not require them. The
	file format is as follows:
	
	  [section1]
	  ;
	  ; Section contains keys and the corresponding
	  ; values for those keys/parameters.
	  ; keys and values are separated by "=" signs
	  ; Values usually require double quotes "" around them
	  ;
	  key = value
	  .
	  .
	
	  [section2]
	  key = value
	  .
	  .
	
	Description of Unattend.txt File Parameters
	-------------------------------------------
	
	[Unattended]
	
	This section header is used to identify whether an unattended installation is
	being performed or not. It should exist or the Unattend.txt file may be ignored.
	Parameters that can exist in this section are discussed below.
	
	OemPreinstall
	Value: Yes | No
	
	Determines whether an OEM pre-installation is being performed or not. When the
	value is Yes, other subdirectories may be copied if they exist. No means a
	regular unattended Setup is being performed copying only the Inetsrv, System32
	and Drvlib.nic subdirectories. If using sysdiff and you performed a sysdiff
	/inf, this value must be set to Yes.
	
	
	NoWaitAfterTextMode
	Value: 0 | 1
	
	This key determines whether the text mode portion of Setup should automatically
	start into GUI mode or not. It is only valid when OemPreinstall = Yes. The
	default behavior is to halt after text mode during a preinstallation. 0
	indicates that Setup should halt after text mode and 1 indicates that Setup
	should automatically restart into GUI mode after text mode is complete.
	
	NoWaitAfterGuiMode
	Value: 0 | 1
	
	This key determines whether the GUI mode portion of Setup should automatically
	restart to the logon screen or not. It is only valid when OemPreinstall = Yes.
	The default behavior is to halt at the end of GUI mode Setup. 0 indicates that
	Setup should halt after GUI mode and 1 indicates that Setup should automatically
	reboot after GUI mode is complete.
	
	FileSystem
	Value: ConvertNTFS | LeaveAlone
	
	This key specifies whether the primary partition should be converted to NTFS or
	left alone. In general, partitions greater than 512 megabyte (MB) should be
	converted to NTFS. If this value is set to "CovertNTFS" it is done after the
	first restart of unattended setup.
	
	ExtendOemPartition
	Value: 0 | 1
	
	The ExtendOemPartition key is used to install Windows NT on a disk that is larger
	than 2 gigabytes (GB) in size. This key causes text-mode Setup to extend the
	partition on which the temporary Windows NT sources are located into any
	available unpartitioned space that physically follows it on the disk. The
	temporary install source must be a primary partition and limited to 1024
	cylinders only. Writing beyond the 1024th cylinder may cause the installation to
	stop responding. 0 implies that the partition may not be extended and 1
	indicates that it must be extended. When the value is 1, the FileSystem key must
	be set to ConvertNTFS. When the value is set to 1, oempreinstall must be equal
	to yes.
	
	For example if you have a 10 GB hard disk, most MS-DOS based partitioning tools
	only allow you to create a 2GB partition. When you have this value set to "1",
	setup extends the drive out to the maximum of 7.8GB.
	
	This is based on how the drive is translated by the system / controller BIOS, and
	may be less than the maximum of 7.8GB. If the drive is being translated using
	CHS values of 1024 cylinders, 255 heads, 63 sectors per track, then you can
	extend to volume to the 7.8GB limit, however, if the Sectors per track is only
	32, the maximum partition size will be reduced in half or approximately 4GB. The
	same holds true if the number if heads is reduced. Make sure you have drive
	translation "enabled" in the system/controller bios to make sure you can grow
	the partition to the maximum permitted size of 7.8GB.
	
	ConfirmHardware
	Value: Yes | No
	
	This key determines whether a user should manually confirm hardware and mass
	storage devices detected by the Setup program. Yes indicates that a user must
	manually confirm the hardware detected and No implies Setup should install the
	detected devices. For a complete unattended installation, this key should be set
	to No.
	
	NtUpgrade
	Values: Yes | No | Manual | Single
	
	This key determines whether a previous version of Windows NT Workstation or
	Server should be upgraded or not. It should be set in order to perform an
	upgrade. Yes indicates that the detected Windows NT installation should be
	upgraded. If multiple installations are detected, the first installation found
	is upgraded. No implies that the upgrade should be aborted if a Windows NT
	installation is found. This is the appropriate value when OemPreinstall = Yes.
	Manual implies that the user must specify which previous installation should be
	upgraded. Single indicates that the upgrade should continue only if a single
	Windows NT installation is found. If multiple installations are found, the user
	must manually select which installation to upgrade.
	
	Win31Upgrade
	Values: Yes | No
	
	The Win31Upgrade key determines whether previous installations of Windows or
	Windows for Workgroups 3.x should be upgraded to Windows NT. Yes indicates that
	the Windows installation should be upgraded and No means do not upgrade the
	installation if found.
	
	OverwriteOemFilesOnUpgrade
	Values: Yes | No
	
	This key determines whether OEM-supplied files that have the same name as Windows
	NT system files should be overwritten during an unattended upgrade or not. Yes
	means overwrite the files and No means do not overwrite if found. The default
	behavior is to overwrite OEM-supplied files.
	
	TargetPath
	Values: * | <path name> | Manual
	
	This key determines the installation directory in which Windows NT should be
	installed, and implies that Setup should generate a unique directory name for
	the installation. This is usually WINNT.x where x is 0, 1, and so on. <path
	name> is user-defined installation directory. Manual indicates that Setup
	should prompt the user to enter the installation path. Note, do not use drive
	letters in this value. For example if you want to have Windows NT installed to
	winnt40, your unattend.txt should have the value:
	
	 TargetPath = \winnt40
	
	NOTE: Do not use drive letters such as c:\winnt or d:\winntws. To specify a drive
	other than the boot partition, you must use the commandline switch /t: with your
	setup command. For example, "winnt32.exe /t:d:" (without the quotation marks) to
	install Windows NT to the D drive.
	
	ComputerType
	Values: <hal description> [, Retail | OEM]
	
	This key indicates the type of Hardware Abstraction Layer (HAL) to be loaded by
	the Setup Loader, and installed by text-mode Setup. If this key is not present,
	Setup attempts to detect the type of computer and install the appropriate retail
	HAL. It is only valid when OemPreinstall = Yes. The <hal description>
	string identifies the HAL to be installed. It must match one of the strings in
	the [Computer] section of the Txtsetup.sif file (for a retail HAL), or the
	Txtsetup.oem file (for an OEM HAL). Retail informs Setup that the HAL to be
	installed is part of the Windows NT product. OEM indicates that the HAL to be
	loaded is OEM- supplied. If the HAL is OEM-supplied, the driver name must also
	be listed in the [OemBootFiles] section of the Unattend.txt file. Listed below
	are some examples of these values:
	
	  Descriptions are from the COMPUTER Section of TXTSETUP.SIF
	  ----------------------------------------------------------
	  ComputerType = "AST Manhattan SMP","RETAIL"
	  ComputerType = "Compaq SystemPro Multiprocessor or 100% Compatible","RETAIL"
	  ComputerType = "Corollary C-bus Architecture","RETAIL"
	  ComputerType = "Corollary C-bus Micro Channel Architecture","RETAIL"
	  ComputerType = "IBM PS/2 or other Micro Channel-based PC","RETAIL"
	  ComputerType = "MPS Uniprocessor PC","RETAIL"
	  ComputerType = "MPS Multiprocessor PC","RETAIL"
	  ComputerType = "MPS Multiprocessor Micro Channel PC","RETAIL"
	  ComputerType = "NCR System 3000 Model 3360/3450/3550","RETAIL"
	  ComputerType = "Olivetti LSX5030/40","RETAIL"
	  ComputerType = "Standard PC","RETAIL"
	  ComputerType = "Standard PC with C-Step i486","RETAIL"
	  ComputerType = "Wyse Series 7000i Model 740MP/760MP","RETAIL"
	
	If you have your own special HAL, your line should read as follows:
	
	  ComputerType = "This is my special HAL","OEM"
	
	Remember that when you use an OEM supplied HAL, the driver name must also exist
	in the [OemBootFiles] section.
	
	KeyboardLayout
	Value: <layout description>
	
	This key indicates the type of keyboard layout to install. If this key does not
	exist, Setup detects and install a keyboard layout. <layout description>
	must match one of the right hand strings (in "") in the ["Keyboard Layout"]
	section of the Txtsetup.sif file.
	
	Example:
	
	  KeyBoardLayout = "US-International"
	
	NOTE: If you are using a localized version of Windows NT, refer to the
	Txtsetup.sif file located on the second installation floppy disk for the
	appropriate string to add in the Unattend.txt file.
	
	--------------------------------------------------------------------
	
	[MassStorageDrivers]
	
	This section contains a list of SCSI drivers to be loaded by the Setup Loader,
	and installed during text-mode Setup. If this section is absent or empty, Setup
	attempts to detect the SCSI devices on the computer, and install the
	corresponding retail drivers.
	
	<mass storage driver description>
	Value: RETAIL | OEM
	
	This is a string that identifies the driver to be installed. It must match one of
	the strings defined in the right-hand side of the[SCSI] section of the
	Txtsetup.sif file (for a retail driver), or the Txtsetup.oem file (for an OEM
	driver). Multiple <mass storage driver description>s can be specified.
	RETAIL indicates that the driver is part of the retail Windows NT product. OEM
	indicates that the driver is OEM- supplied. If the value is OEM, the driver must
	also be listed in the [OemBootFiles] section of the Unattend.txt file. Listed
	below are some examples of some values:
	
	  Descriptions are from the SCSI Section of TXTSETUP.SIF
	  ======================================================
	  "Adaptec AHA-151X/AHA-152X or AIC-6260/AIC-6360 SCSI Host Adapter" = "RETAIL"
	  "Adaptec AHA-154X/AHA-164X SCSI Host Adapter" = "RETAIL"
	  "Adaptec AHA-174X EISA SCSI Host Adapter" = "RETAIL"
	  "Adaptec AHA-274X/AHA-284X/AIC-777X SCSI Host Adapter" = "RETAIL"
	  "Adaptec AHA-294X/AHA-394X or AIC-78XX PCI SCSI Controller" = "RETAIL"
	  "Adaptec AHA-2920 or Future Domain 16XX/PCI/SCSI2Go SCSI Host Adapter" = "RETAIL"
	  "AMD PCI SCSI Controller/Ethernet Adapter" = "RETAIL"
	  "AMIscsi SCSI Host Adapter" = "RETAIL"
	  "BusLogic SCSI Host Adapter" = "RETAIL"
	
	--------------------------------------------------------------------
	
	[DisplayDrivers]
	
	This section contains a list of display drivers to be loaded by the Setup Loader,
	and installed during text-mode Setup. It is only valid when OemPreinstall = Yes.
	If this section is absent or empty, Setup attempts to detect the display devices
	on the computer, and install the corresponding retail drivers. Note that you can
	get the same functionality by using the settings in the [Display] section
	described later.
	
	<display driver description>
	Value: RETAIL | OEM
	
	This is a string that identifies the driver to be installed. It must match one of
	the strings defined in the right-hand side of the [Display] section of the
	Txtsetup.sif file (for a retail driver), or the Txtsetup.oem file (for an OEM
	driver). Multiple <display driver description>s can be specified. RETAIL
	indicates that the driver is part of the retail Windows NT product. OEM
	indicates that the driver is OEM- supplied.
	
	--------------------------------------------------------------------
	
	[KeyboardDrivers]
	
	This section contains a list of Keyboard drivers to be loaded by the Setup
	Loader, and installed during text-mode Setup. It is only valid when
	OemPreinstall = Yes. If this section is absent or empty, Setup attempts to
	detect the keyboard devices on the computer, and install the corresponding
	retail drivers.
	
	<keyboard driver description>
	Value: RETAIL | OEM
	
	This is a string that identifies the driver to be installed. It must match one of
	the strings defined in the right-hand side of the[Keyboard] section of the
	Txtsetup.sif file (for a retail driver), or the Txtsetup.oem file (for an OEM
	driver). Multiple <keyboard driver description>s can be specified. RETAIL
	indicates that the driver is part of the retail Windows NT product. OEM
	indicates that the driver is OEM- supplied. Below is an example:
	
	  [KeyBoardDrivers]
	  "XT, AT, or Enhanced Keyboard (83-104 keys)" = "RETAIL"
	
	--------------------------------------------------------------------
	
	[PointingDeviceDrivers]
	
	This section contains a list of pointing device drivers to be loaded by the Setup
	Loader, and installed during text-mode Setup. It is only valid when
	OemPreinstall = Yes. If this section is absent or empty, Setup attempts to
	detect the pointing devices on the computer, and install the corresponding
	retail drivers.
	
	<pointing device driver description>
	Value: RETAIL | OEM
	
	This is a string that identifies the driver to be installed. It must match one of
	the strings defined in the right-hand side of the[Mouse] section of the
	Txtsetup.sif file (for a retail driver), or the Txtsetup.oem file (for an OEM
	driver). Multiple <pointing device driver description>s can be specified.
	RETAIL indicates that the driver is part of the retail Windows NT product. OEM
	indicates that the driver is OEM- supplied. Below are some examples of these
	values:
	
	  Descriptions are from the MOUSE Section of TXTSETUP.SIF
	  ======================================================
	  "Microsoft Mouse Port Mouse (includes BallPoint)" = "RETAIL"
	  "Logitech Mouse Port Mouse" = "RETAIL"
	  "Microsoft InPort Bus Mouse" = "RETAIL"
	  "Microsoft Serial Mouse" = "RETAIL"
	  "Microsoft BallPoint Serial Mouse" = "RETAIL"
	  "Logitech Serial Mouse" = "RETAIL"
	  "Microsoft (Green Buttons) or Logitech Bus Mouse" = "RETAIL"
	  "No Mouse or Other Pointing Device" = "RETAIL"
	  "Microsoft Mouse Port Mouse (includes BallPoint)" = "RETAIL"
	
	--------------------------------------------------------------------
	
	[OEMBootFiles]
	
	This section is used to specify OEM-supplied boot files. It is only valid if
	OemPreinstall = Yes and the files listed here have been placed in the
	$OEM$\Textmode directory of the OEM's distribution share point.
	
	Txtsetup.oem
	
	This file contains descriptions of all the OEM-supplied drivers listed in this
	section. It also includes instructions on how to install the drivers listed in
	this section. It must exist if this section is listed.
	
	<hal file name>
	
	This <hal file name> maps to a HAL description that has been defined by the
	ComputerType key in the [Unattended] section of the Unattend.txt file.
	
	<scsi driver file name>
	
	The <scsi driver file name> maps to a mass storage driver description
	defined in the [MassStorageDriver] section of the Unattend.txt file. There can
	be multiple <scsi driver file name>s listed in the [OemBootFiles]
	section.
	
	--------------------------------------------------------------------
	
	[OEM_Ads]
	
	This section instructs Setup that the default end-user interface may be modified
	by the keys below.
	
	Banner
	Values: <text string>
	
	This key specifies a text string to be displayed in the upper left corner of the
	computer screen. The text must contain the "Windows NT" sub-string or it may be
	ignored. To specify more than one line, you can separate the different lines
	using the * character. Example:
	
	  Banner = "My own Windows NT setup"
	
	Logo
	Values: <file name> [,<resource id>]
	
	This key specifies a bitmap to be displayed in the upper right corner of the
	screen. If this line has only one field, it is assumed to be a .bmp file located
	in the $OEM$ directory of the distribution share point. However if two fields
	are specified, the first field is the name of a DLL and the second is a base-10
	number that represents the resource ID of the bitmap in the DLL. The DLL
	specified should be located in the $OEM$ directory. Example:
	
	  Logo = Myown.bmp
	
	Background
	Values: <file name> [,<resource id>]
	
	This key specifies a background bitmap to be displayed. If this line has only one
	field, it is assumed to be a .bmp file located in the $OEM$ directory of the
	distribution share point. However if two fields are specified, the first field
	is the name of a DLL and the second is a base- 10 number that represents the
	resource ID of the bitmap in the DLL. The DLL specified should be located in the
	$OEM$ directory. Example:
	
	  Background = Mybackground.bmp
	
	--------------------------------------------------------------------
	
	[GuiUnattended]
	
	OemSkipWelcome
	Value: 0 | 1
	
	This key is used to specify whether the introductory "Welcome to Windows NT
	Setup" page is skipped or not. Default behavior is to show the wizard page.
	
	OEMBlankAdminPassword
	Value: 0 | 1
	
	This key is used to specify whether the user should see the Administrator
	Password Wizard page or not. Default behavior is to show the password page. In
	NT 4.0 you cannot automate the setup of the administrator password unless you
	specify it to be blank (OEMBlankAdminPassword = 1). The only way to set this is
	to either let Windows NT prompt for it during GUI mode or after install is
	complete.
	
	TimeZone
	Value: <text string>
	
	The TimeZone key determines the time zone of the computer. If the key is empty,
	the user is prompted to indicate a time zone. The list of valid TimeZone strings
	is as follows:
	
	  ; (GMT) Greenwich Mean Time; Dublin, Edinburgh, London
	  ; (GMT+01:00) Lisbon, Warsaw
	  ; (GMT+01:00) Paris, Madrid
	  ; (GMT+01:00) Berlin, Stockholm, Rome, Bern, Brussels, Vienna
	  ; (GMT+02:00) Eastern Europe
	  ; (GMT+01:00) Prague
	  ; (GMT+02:00) Athens, Helsinki, Istanbul
	  ; (GMT-03:00) Rio de Janeiro
	  ; (GMT-04:00) Atlantic Time (Canada)
	  ; (GMT-05:00) Eastern Time (US & Canada)
	  ; (GMT-06:00) Central Time (US & Canada)
	  ; (GMT-07:00) Mountain Time (US & Canada)
	  ; (GMT-08:00) Pacific Time (US & Canada); Tijuana
	  ; (GMT-09:00) Alaska
	  ; (GMT-10:00) Hawaii
	  ; (GMT-11:00) Midway Island, Samoa
	  ; (GMT+12:00) Wellington
	  ; (GMT+10:00) Brisbane, Melbourne, Sydney
	  ; (GMT+09:30) Adelaide
	  ; (GMT+09:00) Tokyo, Osaka, Sapporo, Seoul, Yakutsk
	  ; (GMT+08:00) Hong Kong, Perth, Singapore, Taipei
	  ; (GMT+07:00) Bangkok, Jakarta, Hanoi
	  ; (GMT+05:30) Bombay, Calcutta, Madras, New Delhi, Colombo
	  ; (GMT+04:00) Abu Dhabi, Muscat, Tbilisi, Kazan, Volgograd
	  ; (GMT+03:30) Tehran
	  ; (GMT+03:00) Baghdad, Kuwait, Nairobi, Riyadh
	  ; (GMT+02:00) Israel
	  ; (GMT-03:30) Newfoundland
	  ; (GMT-01:00) Azores, Cape Verde Is.
	  ; (GMT-02:00) Mid-Atlantic
	  ; (GMT) Monrovia, Casablanca
	  ; (GMT-03:00) Buenos Aires, Georgetown
	  ; (GMT-04:00) Caracas, La Paz
	  ; (GMT-05:00) Indiana (East)
	  ; (GMT-05:00) Bogota, Lima
	  ; (GMT-06:00) Saskatchewan
	  ; (GMT-06:00) Mexico City, Tegucigalpa
	  ; (GMT-07:00) Arizona
	  ; (GMT-12:00) Enewetak, Kwajalein
	  ; (GMT+12:00) Fiji Islands, Kamchatka, Marshall Is.
	  ; (GMT+11:00) Magadan, Soloman Is., New Caledonia
	  ; (GMT+10:00) Hobart
	  ; (GMT+10:00) Guam, Port Moresby, Vladivostok
	  ; (GMT+09:30) Darwin
	  ; (GMT+08:00) Beijing, Chongqing, Urumqi
	  ; (GMT+06:00) Alma Ata, Dhaka
	  ; (GMT+05:00) Islamabad, Karachi, Sverdlovsk, Tashkent
	  ; (GMT+04:30) Kabul
	  ; (GMT+02:00) Cairo
	  ; (GMT+02:00) Harare, Pretoria
	  ; (GMT+03:00) Moscow, St. Petersburg
	
	AdvServerType
	Value: SERVERNT | LANMANNT | LANSECNT
	
	This key is only valid when you install Windows NT Server. SERVERNT indicates
	that the computer may be a standalone server. LANMANNT indicates that the
	computer may serve as a primary domain controller. LANSECNT indicates that the
	computer may be a backup domain controller.
	
	DetachedProgram
	Value: <detached program string>
	
	The DetachedProgram key is used to indicate the path of the custom program that
	should run concurrently with the Setup program. If the program requires any
	arguments, the Arguments key must be specified.
	
	Arguments
	Value: <arguments string>
	
	The Arguments key indicates that arguments or parameters accompany the custom
	program that should run concurrently with the Setup program.
	
	--------------------------------------------------------------------
	
	[UserData]
	
	FullName
	Value: <string>
	
	The FullName key is used to specify the user's full name. If the key is absent or
	empty, the user is prompted to enter a name. This is not the name of the user
	that may be using the computer or user account. This should contain the name of
	the person or company to which the software is registered.
	
	OrgName
	Value: <string>
	
	Use this key specify an organization's name. If the OrgName key is empty or
	absent, the user is prompted to enter an organization name.
	
	ComputerName
	Value: <string>
	
	Use this key to specify the computer name. If the ComputerName key is empty or
	absent, the user is prompted to enter a computer name.
	
	ProductID
	Value: <string>
	
	The ProductId key specifies the Microsoft product identification (productID)
	number. This number can be found on the Jewel case of the CD-ROM.
	
	--------------------------------------------------------------------
	
	[LicenseFilePrintData]
	
	This section is only valid when you install Windows NT Server.
	
	AutoMode
	Values: PERSEAT | PERSERVER
	
	The AutoMode key determines whether Windows NT Server is installed in per- seat
	or per-server license mode. If AutoMode = PERSERVER, also specify the AutoUsers
	key. PERSEAT indicates that a client access license has been purchased for each
	computer that accesses the server. PERSERVER indicates that client access
	licenses have been purchased for the server to enable a certain number of
	concurrent connections to the server. If AutoMode is empty or absent, the user
	may be prompted to select the license mode.
	
	AutoUsers
	Value: <decimal number>
	
	This key is only valid if AutoMode = PerServer. <decimal number> indicates
	the number of client licenses purchased for the server being installed. Listed
	below is an example of this section:
	
	  [LicenseFilePrintData]
	  AutoMode = PerServer or PerSeat
	  AutoUser = xxxx or PerServer  (where XXXX is the number of licenses purchased)
	
	--------------------------------------------------------------------
	
	[Display]
	
	This section is used to specify display settings for the particular graphics
	device being installed. In order for this to work properly, the user must know
	what settings are valid for the graphics. If the pre- specified settings are not
	valid, the user may be prompted to select them.
	
	ConfigureAtLogon
	Value: 0 | 1
	
	This key is used to specify when the graphics devices are configured: During
	Setup or after the first logon by a user. 0 implies configure during Setup and 1
	indicates that the device should be configured during the first logon by the
	user. For this to be fully automated, this key should not be used at all.
	
	BitsPerPel
	Value: <valid bits per pixel>
	
	This key specifies the <valid bits per pixel> for the graphics device being
	installed.
	
	Xresolution
	Value: <valid x resolution>
	
	This key specifies a <valid x resolution> for the graphics device being
	installed.
	
	Yresolution
	Value: <valid y resolution>
	
	This key specifies a <valid y resolution> for the graphics device being
	installed.
	
	Vrefresh
	Value: <valid refresh rate>
	
	This key specifies a <valid refresh rate> for the graphics device being
	installed.
	
	Flags
	Value: <valid flags>
	
	This key specifies <valid flags> for the graphics device being installed.
	
	AutoConfirm
	Value: 0 | 1
	
	The AutoConfirm key indicates whether the graphics device should be configured
	using pre-specified display settings or not. 0 implies do not use the
	pre-specified settings and 1 indicates that the pre-defined settings should be
	used. AutoConfirm = 1 requires that all the necessary parameters have been
	pre-specified in the Unattend.txt file. Listed below is an example the [Display]
	sections settings:
	
	  [Display]
	  BitsPerPel = 8
	  XResolution = 1024
	  YResolution = 768
	  VRefresh = 70
	  Flags = 0
	  AutoConfirm = 1
	
	If the Video card installed cannot use the defined settings or are invalid,
	defaults may be used for install. You can install third party video drivers if
	your video card is not detected by Windows NT and is an OEM Video card.
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q166028 Installing 3rd-Party Video drivers with Txtsetup.oem Unattended
	
	You can use the next three parameters instead of the [DisplayDriver],
	[OemBootFiles] sections and custom Txtsetup.oem files to install third- party
	video drivers. The drivers and files required by the video adapter should exist
	in the $OEM$\Display directory on the distribution share point.
	
	InstallDriver
	Value: 0 | 1
	
	This key specifies whether a third-party driver is being installed or not. If
	value is 0, the InfFile and InfOption keys are skipped.
	
	InfFile
	Values: <inf file name 1>, <inf file name 2>, ...
	
	This key specifies a list of .inf file names for display drivers to be installed.
	You can specify only one .inf file per driver. That is, S3.inf, Matrox.inf, and
	so on.
	
	InfOption
	Values: <inf option 1>, <inf option 2>, ...
	
	Specifies a list of options that should be selected from the corresponding .inf
	files specified with the InfFile key. For example, the display tool installs the
	S3 765 entry in the S3.inf file and the Millennium 3D entry in the Matrox.inf
	file if the following keys are specified:
	
	  InfFile = s3.inf, matrox.inf
	  InfOption = S3 765, Millennium 3D
	
	--------------------------------------------------------------------
	
	[Modem]
	
	This section header is used to identify whether a modem should be installed or
	not. It is used by Remote Access Services (RAS) to install a modem if DeviceType
	= Modem in the list of RAS parameters. This section cannot be empty if you want
	to install modems using RAS in unattended mode.
	
	InstallModem
	Value: <modem parameter section>
	
	This key defines a section where modem installation parameters are defined. The
	key must exist in order to install any modems.
	
	--------------------------------------------------------------------
	
	[<modem parameter section>]
	
	The modem parameter section lists the keys and values required to install a modem
	on a particular COM port. If the [<modem parameter section>] section is
	blank, RAS performs modem detection on its preconfigured ports and install any
	modems it finds.
	
	<COM port number>
	Values: <Modem description> [, <Manufacturer>, <Provider>]
	
	The <COM port number> key specifies the COM ports on which modems are
	installed. The COM port numbers must match ports configured or to be configured
	by the RAS installation. <Modem description> must match a modem
	description in a Mdmxxxxx.inf file that corresponds to the modem to be
	installed. This string must be enclosed in quotation marks. The
	<Manufacturer> and <Provider> fields are optional fields that
	identify the manufacturer and provider of a particular modem in cases where the
	<modem description> string is not unique to a particular manufacturer.
	
	An example of the [Modem] section is listed below:
	
	  [Modem]
	  InstallModem = MyModemParameters
	
	  [MyModemParameters]
	  Com2 = "Hayes V-Series Ultra Smartmodem 9600"
	
	--------------------------------------------------------------------
	
	[Network]
	
	This section informs Setup that Networking should be installed. If empty, the
	user may be presented with various error messages. If this section header is
	absent; network installation may be skipped.
	
	Attended
	Value: Yes | No
	
	This key is specified if you want the user to install networking manually during
	an unattended installation. The value is ignored so if you want a complete
	unattended installation, this key should not be specified at all.
	
	JoinWorkgroup
	Value: <workgroup name>
	
	This key is used to define the workgroup in which the computer may participate.
	
	JoinDomain
	Value: <domain name>
	
	This key is used to define the domain in which the computer may participate.
	
	CreateComputerAccount
	Values: <username>, <password>
	
	This key enables the computer account to be created during setup. The username
	and password is for a domain account that has the right Add Workstations To
	Domain. Note that for this value to work, the network card must be able to
	contact the Domain controller. This is crucial for computers that are only using
	the TCPIP protocol and Domain controller is on a different segment. We must have
	a way to resolve the IP address. If the account does not have the privileges to
	add workstations to the domain or cannot contact the domain controller, setup
	prompts you that it is unable to create the account and bring you back to the
	Join domain dialog.
	
	InstallDC
	Value: <domain name>
	
	This key is used to specify the name of a domain to be installed. It is only
	valid when installing a primary or backup domain controller and the
	AdvServerType key has been set accordingly.
	
	DetectAdapters
	Value: <detect adapters section> | ""
	
	This key is used to detect network adapter cards installed on a computer. Either
	this key or the InstallAdapters key must exist in order to install network
	cards. If the value is "", the first card detected may be installed.
	
	InstallAdapters
	Value: <install adapters section>
	
	This key defines a section in which the network adapters to be installed are
	listed. If this key is present, the adapters listed in the section are installed
	by default, they are not detected.
	
	InstallProtocols
	Value: <protocols section>
	
	This key defines a section in which the network protocols to be installed are
	listed.
	
	InstallServices
	Value: <services section>
	
	This key defines a section in which the network services to be installed are
	listed. Listed below is a list of services that can be installed during
	unattended setup:
	
	  NWWKSTA - Client service for Netware
	  SNMP = SNMP service
	  RAS = Remote access service
	  NETMON = Network monitor
	  STCPIP = Simple TCPIP
	  TCPPRINT = TCPIP Printing service
	  INETSTP = Install internet server
	  SAP = SAP service
	
	InstallInternetServer
	Value: <internet information server parameters>
	
	This key defines a section in which parameters for installing the Internet
	Information Server(IIS) are listed. During installation on Windows NT Server,
	IIS is installed by default.
	
	
	--------------------------------------------------------------------
	
	[<Detect Adapters Section>]
	
	This section is pointed to by the DetectAdapters key described earlier.
	
	DetectCount
	Value: <number of detection attempts>
	
	Indicates the number of detection attempts Setup should make.
	
	LimitTo
	Value: <netcard inf option>
	
	This key specifies a list of netcard .inf options to which the detection should
	be limited. The netcard .inf options for particular cards can be found in the
	[Options] section of the corresponding Oemnadxx.inf file. For example:
	
	  LimitTo = AMDPCN
	
	--------------------------------------------------------------------
	
	[<Install Adapters Section>]
	<Netcard Inf option> = <netcard parameter section>, <oem path>
	
	<Netcard Inf option>
	Value: <netcard parameter section>
	
	This key points Setup to the section that contains descriptions for a particular
	network adapter card. The <netcard inf options> for particular cards can
	be found in the [Options] section of the corresponding Oemnadxx.inf files.
	Example:
	
	  [Installadapters]
	  AMDPCN = AMDPCNParameters
	
	<oem path>
	
	The oem_path points to the location of the OEM supplied files. If the path starts
	with a drive letter, then the literal path is used to find the OEM driver. If,
	however, the path starts with a backwards slash (\), then the path given may be
	appended to the path to the installation source. Example: for a driver located
	in $OEM$\NET\subdirectory_a, oem_path would be set to
	\$OEM$\NET\subdirectory_a.
	
	--------------------------------------------------------------------
	
	[<netcard parameter section>]
	
	This section contains the parameters for a particular network adapter card whose
	<netcard inf option> has been specified in the [<Detect Adapters
	Section>] or the [<Install Adapters Section>] of the Unattend.txt file.
	These values can be found by parsing the appropriate Oemnadxx.inf, or
	oemsetup.inf file for the network card. They can also be found by looking the in
	the registry of a Window NT computer with the adapter already installed and
	functioning properly. To do this, use Regedt32.exe and look in the following
	registry key:
	
	  Hkey_local_machine\system\currentcontrolset\services\<%netcardkeyname%>;X
	
	where X = 1 or ordinal of adapter installed. In this key look at the parameters
	key and note the values.
	
	NOTE: All values in the registry appear as Hex but in your unattend.txt file,
	these values must be converted to decimal. For example, the value of
	IOBaseAddress =0x300 in the registry must be set to IOBaseAddress = 768 in the
	answer file. Listed below is an example of these parameters:
	
	  [EE16Params]
	  !AutoNetInterfaceType = 1
	  Transceiver = 3
	  !AutoNetBusNumber = 0
	  IoChannelReady = 2
	  IoBaseAddress = 784
	  InterruptNumber = 10
	
	NOTE: These values differ for each type of network card but the numbers must
	always appear in decimal.
	
	--------------------------------------------------------------------
	
	[<Protocols Section>]
	
	This section contains a list of .inf file options for network protocols and the
	corresponding Unattend.txt file section in which the parameters for the
	particular protocol are listed.
	
	NBF
	Value: <Netbeui Parameters>
	
	This key indicates that NetBeui should be installed in unattended mode. The
	corresponding parameter section must exist or Setup may stop responding.
	
	NWLNKIPX
	Value: <IPX Parameters>
	
	This key indicates that IPX should be installed in unattended mode. The
	corresponding parameter section must exist or Setup may stop responding.
	
	TC
	Value: <Tcpip Parameters>
	
	This key indicates that TCP/IP should be installed in unattended mode. The
	corresponding parameter section must exist or Setup may stop responding.
	
	DLC
	Value: <DLC Parameters>
	
	This key indicates that DLC should be installed in unattended mode. The
	corresponding parameter section must exist or Setup may stop responding.
	
	RASPPTP  (Point to Point Protocol)
	Value: <Ras PTPP Parameters>
	
	This key indicates that Ras Point to Point Protocol should be installed in
	unattended mode. The corresponding parameter section must exist or Setup may
	stop responding.
	
	STREAMS
	Value: <Streams parameters>
	
	This key indicates that STREAMS should be installed in unattended mode. The
	corresponding parameter section must exist or Setup may stop responding.
	
	ATALK  (Apple talk protocol)
	Value: <ATALK parameters>
	
	This key indicates that Apple Talk Protocol should be installed in unattended
	mode. The corresponding parameter section must exist or Setup may stop
	responding.
	
	--------------------------------------------------------------------
	
	[<NetBeui Parameters>]
	
	This parameter is left empty because NetBeui does not require any extra
	parameters to be installed.
	
	--------------------------------------------------------------------
	
	[<IPX Parameters>]
	
	This parameter is left empty because IPX does not require any extra parameters to
	be installed.
	
	--------------------------------------------------------------------
	
	[<Tcpip Parameters>]
	
	DHCP
	Value: Yes | No
	
	This key is used to specify whether or not DHCP should be used.
	
	ScopeID
	Value: <scope ID>
	
	This key is used to specify the computer's scope identifier if required on a
	network that uses NetBios over TCP/IP. If DHCP = No, the following keys must be
	specified:
	
	  IPAddress
	  Value: <Ip address>
	  Used to specify the IP address for the computer.
	
	  Subnet
	  Value: <subnet address>
	  Specifies the subnet mask address.
	
	  Gateway
	  Value: <gateway address>
	  Identifies the default gateway address for the computer.
	
	  DNSServer
	  Value: <IP Addresses>
	  Used to specify up to 3 DNS servers.
	
	  WINSPrimary
	  Value: <IP Address>
	  Used to specify the IP address of the primary WINS server.
	
	  WINSSecondary
	  Value: <IP address>
	  Used to specify the IP address of the secondary WINS server.
	
	  DNSName
	  Value: <DNS domain name>
	  This key is used to specify the DNS domain name.
	
	--------------------------------------------------------------------
	
	[<Services Section>]
	
	NETMON
	Value: <Netmon Parameters section>
	Points to <Netmon Parameters>
	
	STCPIP
	Value: <Simple TCPIP parameters section>
	Points to <Simple TCPIP parameters>
	
	TCPPRINT
	Value: <TCPIP Printing Parameters section>
	Points to <TCPIP Printing Parameters>
	
	INETSTP
	Value: <Internet server parameters section>
	Points to <Internet server parameters>
	
	SAP
	Value: <SAP Prameters section>
	Points to <SAP Prameters>
	
	SNMP
	Value: <Snmp Parameters>
	Points to <Snmp Parameters>
	
	RAS
	Value: <Ras Parameters>
	Points to <Ras Parameters>
	
	NWWKSTA
	Value: <NetWare Client Parameters>
	Points to <NetWare Client Parameters>
	
	--------------------------------------------------------------------
	
	[Netmon Parameters section]
	
	No values are needed here but section header must exist for service to install.
	
	--------------------------------------------------------------------
	
	[Simple TCPIP parameters section]
	
	No values are needed here but section header must exist for service to install.
	
	--------------------------------------------------------------------
	
	[TCPIP Printing Parameters section]
	
	No values are needed here but section header must exist for service to install.
	
	--------------------------------------------------------------------
	
	[SAP Parameters section]
	
	No values are needed here but section header must exist for service to install.
	
	--------------------------------------------------------------------
	
	[<NetWare Client Parameters>]
	
	!DefaultLocation
	Value: <server_location>
	
	The !DefaultLocation key identifies the default logon server for the NetWare
	client. For NDS logins use the following syntax:
	
	!DefaultLocation = "*ABC\MARKETING.US"
	
	Where ABC is the tree name and marketing.us is the default context.
	
	!DefaultScriptOptions
	Values: 0 | 1 | 3
	
	This key defines the default action to perform with scripts. 0 implies that no
	scripts may be run, 1 indicates that only NetWare 3.x-level scripts may be run
	and 3 implies that either NetWare 3.x or NetWare 4.x- level scripts can be run.
	
	--------------------------------------------------------------------
	
	[<Snmp Parameters>]
	
	Accept_CommunityName
	Value: <community names>
	
	This key is used to specify a maximum of three community names that the computer
	on which the SNMP service is running accept traps from. The <community
	names> are separated by commas.
	
	Send_Authentication
	Value: Yes | No
	
	This key indicates whether an authentication trap should be sent when an
	unauthorized community or host requests information.
	
	Any_Host
	Value: Yes | No
	
	This key specifies whether or not the computer on which the SNMP service is being
	installed should accept SNMP packets from any host.
	
	Limit_Host
	Values: <host names>
	
	A maximum of three <host names> can be specified, separated by commas. This
	key is valid when Any_Host = No.
	
	Community_Name
	Value: <community name>
	
	Indicates the <community name> for the computer.
	
	Traps
	Values: <IP addresses> | <IPX addresses>
	
	This key is used to specify a maximum of three IP or IPX addresses to which traps
	should be sent.
	
	Contact_Name
	Value: <name>
	
	This key is used to specify the computer user's name.
	
	Location
	Value: <computer location>
	
	This key is used to specify the physical location of the computer.
	
	Service
	Values: Physical, Applications, Datalink, Internet, EndtoEnd.
	
	Any combination of the five SNMP services listed here can be specified as values.
	They must be separated by commas.
	
	--------------------------------------------------------------------
	
	[<RasParameters>]
	
	PortSections
	Values: <port section name>
	
	This key is used to define a port section name. Multiple port section names can
	be specified but they must be separated by commas. See [<port section
	names>] definition below.
	
	DialoutProtocols
	Value: TCP/IP | IPX | NETBEUI | ALL
	
	ALL implies all installed protocols.
	
	The remaining parameters in this <RasParameters> section apply only to RAS
	Server installation.
	
	DialinProtocols
	Value: TCP/IP | IPX | NETBEUI | ALL
	
	ALL implies all installed protocols.
	
	NetBEUIClientAccess
	Value: Network | ThisComputer
	
	The default is Network.
	
	TcpIpClientAccess
	Value: Network | ThisComputer
	
	The default is Network.
	
	UseDHCP
	Value: YES | NO
	
	The default is Yes.
	
	StaticAddressBegin
	Value: <IP_address>
	
	This key is required if UseDHCP = NO.
	
	StaticAddressEnd
	Value: <IP_address>
	
	This key is required if UseDHCP = NO.
	
	ExcludeAddress
	Value: <IP_address1 - IP_address2>
	
	This key is used to exclude a range of IP addresses when a range of IP addresses
	are assigned manually. It requires that StaticAddressBegin and StaticAddressEnd
	be specified already.
	
	ClientCanRequestIPAddress
	Value: YES | NO
	
	The default is No.
	
	IpxClientAccess
	Value: Network | ThisComputer
	
	The default is Network.
	
	AutomaticNetworkNumbers
	Value: YES | NO
	
	The default is YES.
	
	NetworkNumberFrom
	Value: <IPX_net_number>
	
	Valid numbers range from 1 to 0xFFFFFFFE. This key is required if
	AutomaticNetworkNumbers = NO.
	
	AssignSameNetworkNumber
	Value: YES | NO
	
	The default is YES.
	
	ClientsCanRequestIpxNodeNumber
	Value: YES | NO
	
	The default is NO.
	
	--------------------------------------------------------------------
	
	[<port section name>]
	
	PortName
	Value: COM1 | COM2 | COM3-COM25
	
	This key indicates the names of the ports to be configured in a particular port
	section.
	
	DeviceType
	Value: Modem
	
	This key indicates the type of device RAS should install. Currently, the only
	available device type is a modem.
	
	PortUsage
	Value: DialOut | DialIn | DialInOut
	
	The PortUsage key defines the dialing properties for the ports being configured.
	
	--------------------------------------------------------------------
	
	[<internet information server section>]
	
	This section contains parameters for installing Internet Information Server
	(IIS). A value of 1 for each of the parameters below implies the component
	should be installed. A value of 0 implies the component should not be
	installed.
	
	InstallINETSTP
	Value: 0 | 1
	
	Specifies whether Internet services may be installed. The default is 1.
	
	InstallADMIN
	Value: 0 | 1
	
	Specifies whether the Internet Service Manager may be installed.
	
	InstallFTP
	Value: 0 | 1
	
	Specifies whether the FTP service may be installed.
	
	FTPRoot
	Value: <ftp root directory>
	
	Specifies the virtual root for the FTP service.
	
	InstallWWW
	Value: 0 | 1
	
	Specifies whether the WWW service may be installed.
	
	WWWRoot
	Value: <www root directory>
	
	Specifies the virtual root for the WWW service.
	
	InstallGOPHER
	Value: 0 | 1
	
	Specifies whether the Gopher service may be installed.
	
	GopherRoot
	Value: <gopher root directory>
	
	Specifies the virtual root for the Gopher service.
	
	InstallDir
	Value: <internet services install directory>
	
	Specifies the installation directory for all components of Internet Services.
	
	InstallW3SAMP
	Value: 0 | 1
	
	Specifies whether or not World Wide Web sample files should be installed.
	
	InstallHTMLA
	Value: 0 | 1
	
	Specifies whether or not the HTML form of the Internet Service Manager should be
	installed.
	
	GuestAccountName
	Value: <name>
	
	This key is used to define the anonymous user name used in the WWW, FTP, and
	GOPHER services.
	
	GuestAccountPassword
	Value: <password string>
	
	This is used to create the guest account password. If it is not defined, IIS
	creates a random string for the guest account.
	
	===============================================================
	
	Sample Unattended File
	----------------------
	
	For quick reference, an sample unattended file has been created containing all
	entries and the appropriate range of values. Note, this file has entries that
	are valid for NT workstation and NT Server, this file is only meant to be used
	as reference but not an actual answer file.
	
	;[Unattended]
	;Method = Express|Custom
	;NtUpgrade = Yes|No
	;Win31Upgade = Yes|No
	;TargetPath = *|<Path Name>|Manual
	;OverwriteOemFilesOnUpgrade = Yes|No
	;ConfirmHardware = Yes|No
	;OEMPreinstall = Yes|No
	;NoWaitAfterTextMode =  (0 = stop, 1 = Reboot)
	;NoWaitAfterGuiMode = (0 = stop, 1 = Reboot)
	;FileSystem = ConvertNTFS|LeaveAlone
	;ExtendOemPartition = (0 = no, 1 = Yes)
	
	
	; Descriptions are from the COMPUTER Section of TXTSETUP.SIF
	; ======================================================
	; ComputerType = "AST Manhattan SMP","RETAIL"
	; ComputerType = "Compaq SystemPro Multiprocessor or 100%
	;    Compatible","RETAIL"
	; ComputerType = "Corollary C-bus Architecture","RETAIL"
	; ComputerType = "Corollary C-bus Micro Channel Architecture","RETAIL"
	; ComputerType = "IBM PS/2 or other Micro Channel-based PC","RETAIL"
	; ComputerType = "MPS Uniprocessor PC","RETAIL"
	; ComputerType = "MPS Multiprocessor PC","RETAIL"
	; ComputerType = "MPS Multiprocessor Micro Channel PC","RETAIL"
	; ComputerType = "NCR System 3000 Model 3360/3450/3550","RETAIL"
	; ComputerType = "Olivetti LSX5030/40","RETAIL"
	; ComputerType = "Standard PC","RETAIL"
	; ComputerType = "Standard PC with C-Step i486","RETAIL"
	; ComputerType = "Wyse Series 7000i Model 740MP/760MP","RETAIL"
	
	;KeyBoardLayout = <Layout description>
	;  Example;
	;  KeyBoardLayout = "US-International"
	
	;[GuiUnattended]========================================
	
	;[GuiUnattended]
	;OemSkipWelcome = (0 = no, 1 = Yes)
	;OemBlankadminPassword = (0 = no, 1 = Yes)
	;TimeZone = <Time Zone>
	; The following are strings for AdvServerType
	; AdvServerType = LANMANNT
	; AdvServerType = LANSECNT
	; AdvServerType = SERVERNT
	
	; Definition of Server Type
	; LANMANNT=PDC
	; LANSECNT=BDC
	; SERVERNT=Standalone
	
	;[UserData]============================================
	
	;[UserData]
	;FullName = <user name>
	;OrgName = <company name>
	;ComputerName = <computer name>
	;ProductID = <product ID> (CD-key)
	;
	; Note if PID is for an OEM version of NT the algorithm for the
	; PID is the following xxxyy-OEM-0000016-zzzzz
	;
	; x = Julian calendar date for the day
	; y = The current year (last two digits)
	; z = Any numerics combination you want
	;
	;
	;[LicenseFilePrintData]=================================
	
	;[LicenseFilePrintData]
	; AutoMode = PerServer or PerSeat
	; AutoUser = xxxx or PerServer
	
	;[NetWork]==============================================
	
	;[NetWork]
	;Attend = Yes|No
	; This value should not be specified for a complete unattended install
	;
	;JoinWorkGroup = <workgroup name>
	;JoinDomain = <Domain name>
	;CreateComputerAccount = <user_name, password>
	;InstallDC = <domain name>
	;InstallAdapters = <Install adapters section>
	;
	; If not AUTODETECTED do not use
	; this option
	;
	;DetectAdapters = <detect adapters section>|""
	;
	;InstallProtocols = <Protocol(s) list section>
	;InstallServices = <Sevices list section>
	;InstallInternetServer <internet information server parameters>
	;DoNotInstallInternetServer = Yes|No
	;[detect adapters section]
	;
	; Only used if the adapter
	; AUTODETECTED by setup.
	;
	;DetectCount = <Number of detection attempts (I believe the max is 4)>
	;LimitTo = <netcard inf option>
	;Example;
	; LimitTo = DECETHERWORKSTURBO
	
	;[Install adapters section]
	; Examples;
	;   DECETHERWORKSTURBO = DECETHERWORKSTURBOParams
	;   EE16 = EE16Params
	
	;[DECETHERWORKSTURBOParams]
	;InterruptNumber = 5
	;IOBaseAddress = 768               ;Note!! all numbers in these sections
	;MemoryMappedBaseAddress = 851968  ;are converted from hex to decimal
	;!AutoNetInterfaceType = 1         ;(768 = 300h). You can get these values
	;!AutoNetBusNumber = 0             ; from the registry of a computer with
	                                  ;the adapter installed.
	
	;[EE16Params]
	;!AutoNetInterfaceType = 1
	;Transceiver = 3
	;!AutoNetBusNumber = 0
	;IoChannelReady = 2
	;IoBaseAddress = 784
	;InterruptNumber = 10
	
	;[Protocol(s) list section]
	; OEM File listing for protocols
	;
	; TCPIP - OEMNXPTC.INF
	; NETBEUI - OEMNXPNB.INF
	; IPX - OEMNSVNW.INF
	; DLC - OEMNXPDL.INF
	; Point to Point Protocol - OEMNXPPP.INF
	; STREAMS - OEMNXPST.INF
	; Apple Talk - OEMNXPSM.INF
	;
	
	; TC = TCPIPParams
	; NBF = NetBeuiParams
	; NWLNKIPX = NWLINKIPXParams
	; DLC = DLCParams
	; RASPPTP = RASPPTPParams
	; STREAMS = STREAMSParams
	; ATALK = ATALKParams
	
	;[TCPIPParams]
	; DHCP = yes|no
	; IPAddress = www.xxx.yyy.zzz
	; Subnet = www.xxx.yyy.zzz
	; Gateway = www.xxx.yyy.zzz
	; DNSServer = www.xxx.yyy.zzz, www.xxx.yyy.zzz, www.xxx.yyy.zzz
	; WINSPrimary = www.xxx.yyy.zzz
	; WINSSecondary = www.xxx.yyy.zzz
	; DNSName = <DNS name server>
	; ScopeID = This_is_the_scope_id
	
	;[NetBeuiParams]
	; No parameters needed
	
	;[NWLINKIPXParams]
	; No parameters needed
	
	;[DLCParams]
	; No parameters needed
	
	;[RASPPTPParams]
	; No parameters needed
	
	;[STREAMSParams]
	; No parameters needed
	
	;[ATALKParams]
	; Need to figure out how to set the default zone and adapter. From
	; testing this does work once finished. Reason is for printing. Many
	; high end publishing companies used Apple printers on their networks
	; and would need this protocol to print.
	
	;[Sevices list section]
	; NWWKSTA = InstallCSNW
	; SNMP = InstallSNMP
	; RAS = InstallRemoteAccess
	; NETMON = InstallNetMon
	; STCPIP = InstallSimpleTCP
	; TCPPRINT = InstallTCPPrint
	; INETSTP = InstallInternetServer
	; SAP = InstallSAP
	
	;[InstallCSNW]
	; !DefaultLocation = <server location (usaully preferred server)>
	; !DefaultScriptOption = 0|1|3
	;   0 = No scripts will be run
	;   1 = Netware 3.X level scripts
	;   3 = Either Netware 3.X or 4.X level scripts can be run
	
	;[InstallSNMP]
	; Accept_CommunityName = Name1, Name2, Name3 (Max is 3)
	; Send_Authentication = yes | no
	; AnyHost = yes | no
	; Limit_Host = host1, host2, host3 (Max is 3)
	; Community_name = <Community name>
	; Traps = IPaddress | IPXaddress (max of 3 IP or IPX addresses)
	; Contact_Name = <user name>
	; Location = <computer location>
	; Service = Physical, Applications, Datalink, Internet, EndToEnd
	
	;[Modem]================================================
	
	;[Modem]
	;InstallModem = <Modem parameter section>
	; Example;
	;   InstallModem = MyModem
	;
	;[ModemParameterSection]
	;<Com Port Number> = <Modem description>
	; Example;
	;   Com2 = "Hayes V-Series Ultra Smartmodem 9600"
	;
	;
	;[InstallRemoteAccess]
	;
	; PortSections = <port section name>
	; DialoutProtocols = TCP/IP|IPX|NetBEUI|All
	; DialInProtocols = TCP/IP|IPX|NetBEUI|All
	; NetBEUIClientAccess = Network|ThisComputer
	; TCPIPClientAccess = Network|ThisComputer
	; IPXClientAccess = Network|ThisComputer
	; UseDHCP = Yes|No
	; StaticAddressBegin = <IP address>  (used only if UseDHCP = No)
	; StaticAddressEnd = <IP address>   (used only if UseDHCP = No)
	; ExcludeAddress = <IP address1 - IP address2>
	;    The above is used to exclude a range of addresses when a range has
	;    been assigned manually.  Requires that StaticAddressBegin and
	;    StaticAddressEnd are specified already.
	;
	; ClientCanRequestIPAddress = Yes|No
	; AutomaticNetworkNumbers = Yes|No
	; NetworkNumberFrom <IPX Net Number>
	; AssignSameNetworkNumber = Yes|No
	; ClientsCanRequestIpxNodeNumber = Yes|No
	
	; [port section name]
	; PortName = COM1|COM2|COM3-COM25
	; DeviceType = modem  (presently only value available)
	; DeviceName = "Hayes V-Series Ultra Smartmodem 9600"
	; PortUsage = DialOut|DialIn|DialInOut
	
	;[InstallNetMon]
	
	;[InstallSimpleTCP]
	
	;[InstallTCPPrint]
	
	;[<internet information server parameters>]
	;
	; (0 = do not install, 1 = install)
	; InstallINETSTP = 0|1
	; InstallFTP = 0|1
	; InstallWWW = 0|1
	; InstallGopher = 0|1
	; InstallADMIN = 0|1
	; InstallMosaic = 0|1
	; InstallGateway = 0|1
	; InstallDNS = 0|1
	; InstallHELP = 0|1
	; InstallSMALLPROX = 0|1
	; InstallCLIENTADMIN = 0|1
	; WWWRoot = <www root directory i.e.  C:\INETSRV\WWW>
	; FTPRoot = <FTP root directory i.e.  C:\ftp>
	; GopherRoot = <gopher root directory i.e  C:\INETSRV\GOPHER>
	; InstallDir = <Internet services install directory>
	; EmailName = <E-mail Name i.e. john@org.com>
	; UseGateway = 1
	; GatewayList = \\gateway1 \\gateway2 \\gateway3
	; DisableSvcLoc = 1
	; GuestAccountName <name>
	; GuestAccountPassword <password string>
	
	;[InstallSAP]
	
	;[DisplayDrivers]=======================================
	
	; [DisplayDrivers]
	; <Display driver description> = Retail|Oem
	
	;[Display]==============================================
	
	;[Display]
	;
	; For this to fully automate, the ConfigureAtLogon can not be used at all.
	;
	; ConfigureAtLogon = (0 = during setup, 1 = at first logon)
	;
	;BitsPerPel = <Valid bits per pixel>
	;XResolution = <Valid X resolution>
	;YResolution = <Valid Y resolution>
	;VRefresh = <Valid refresh rate>
	;Flags = <Valid flags>
	;AutoConfirm = (0 = do not use specified settings, 1 = use pre-defined
	;settings)
	;InstallDriver (0 = No, 1 = Yes)
	;InfFile = <inf file name 1>,<inf file name 2>,.......
	;InfOption = <inf option 1>,<inf option 2>,.........
	; Example:
	;   InstallDriver = 1
	;   InfFile = S3.inf, Matrox.inf
	;   InfOption = s3 765, Millennium 3D
	
	;[KeyBoardDrivers]======================================
	
	;[KeyBoardDrivers]
	;"XT, AT, or Enhanced Keyboard (83-104 keys)" = "RETAIL"
	
	; Descriptions are from the KEYBOARD Section of TXTSETUP.SIF
	; ======================================================
	; "XT, AT, or Enhanced Keyboard (83-104 keys)" = "RETAIL"
	
	;[PointingDeviceDrivers]================================
	
	;[PointingDeviceDrivers]
	
	; Descriptions are from the MOUSE Section of TXTSETUP.SIF
	; ======================================================
	; "Microsoft Mouse Port Mouse (includes BallPoint)" = "RETAIL"
	; "Logitech Mouse Port Mouse" = "RETAIL"
	; "Microsoft InPort Bus Mouse" = "RETAIL"
	; "Microsoft Serial Mouse" = "RETAIL"
	; "Microsoft BallPoint Serial Mouse" = "RETAIL"
	; "Logitech Serial Mouse" = "RETAIL"
	; "Microsoft (Green Buttons) or Logitech Bus Mouse" = "RETAIL"
	; "No Mouse or Other Pointing Device" = "RETAIL"
	; "Microsoft Mouse Port Mouse (includes BallPoint)" = "RETAIL"
	
	;[MassStorageDrivers]===================================
	
	;[MassStorageDrivers]
	
	; Descriptions are from the SCSI Section of TXTSETUP.SIF
	; ======================================================
	; "Adaptec AHA-151X/AHA-152X or AIC-6260/AIC-6360 SCSI Host Adapter" =
	; "RETAIL"
	; "Adaptec AHA-154X/AHA-164X SCSI Host Adapter" = "RETAIL"
	; "Adaptec AHA-174X EISA SCSI Host Adapter" = "RETAIL"
	; "Adaptec AHA-274X/AHA-284X/AIC-777X SCSI Host Adapter" = "RETAIL"
	; "Adaptec AHA-294X/AHA-394X or AIC-78XX PCI SCSI Controller" = "RETAIL"
	; "Adaptec AHA-2920 or Future Domain 16XX/PCI/SCSI2Go SCSI Host Adapter" =
	; "RETAIL"
	; "AMD PCI SCSI Controller/Ethernet Adapter" = "RETAIL"
	; "AMIscsi SCSI Host Adapter" = "RETAIL"
	; "BusLogic SCSI Host Adapter" = "RETAIL"
	; "BusLogic FlashPoint" = "RETAIL"
	; "Compaq 32-Bit Fast-Wide SCSI-2/E" = "RETAIL"
	; "Compaq Drive Array" = "RETAIL"
	; "Dell Drive Array" = "RETAIL"
	; "DPT SCSI Host Adapter" = "RETAIL"
	; "Future Domain TMC-7000EX EISA SCSI Host Adapter" = "RETAIL"
	; "Future Domain 8XX SCSI Host Adapter" = "RETAIL"
	; "IBM MCA SCSI Host Adapter" = "RETAIL"
	; "IDE CD-ROM (ATAPI 1.2)/Dual-channel PCI IDE Controller" = "RETAIL"
	; "Mitsumi CD-ROM Controller" = "RETAIL"
	; "Mylex DAC960/Digital SWXCR-Ex Raid Controller" = "RETAIL"
	; "NCR 53C9X SCSI Host Adapter" = "RETAIL"
	; "NCR C700 SCSI Host Adapter" = "RETAIL"
	; "NCR 53C710 SCSI Host Adapter" = "RETAIL"
	; "Symbios Logic C810 PCI SCSI Host Adapter" = "RETAIL"
	; "Olivetti ESC-1/ESC-2 SCSI Host Adapter" = "RETAIL"
	; "QLogic PCI SCSI Host Adapter" = "RETAIL"
	; "MKEPanasonic CD-ROM Controller" = "RETAIL"
	; "Sony Proprietary CD-ROM Controller" = "RETAIL"
	; "UltraStor 14F/14FB/34F/34FA/34FB SCSI Host Adapter" = "RETAIL"
	; "UltraStor 24F/24FA SCSI Host Adapter" = "RETAIL"
	
	;[DetectedMassStorage]==================================
	
	;[DetectedMassStorage]
	
	;[OEMAds]===============================================
	
	;[OEMAds]
	;Banner = <text string> (must be enclosed in quotes and have the string
	;'Windows NT')
	; Example;
	;  Banner = "My own Windows NT setup"
	;Logo = <file name>
	;Background = <file name>
	
	;[OEMBootFiles]=========================================
	
	;[OEMBootFiles]
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbOPK kbSBK kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTSsearch
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
