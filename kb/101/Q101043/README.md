---
layout: page
title: "Q101043: Comprehensive List of WFWG Resource Kit 3.1 Doc Errs"
permalink: /kb/101/Q101043/
---

## Q101043: Comprehensive List of WFWG Resource Kit 3.1 Doc Errs

{% raw %}

	Article: Q101043
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on the documentation errors in the "Microsoft
	Windows for Workgroups Resource Kit" for version 3.1.
	
	The following topics are covered:
	
	- Page 1-33: WFWG Resource Kit States Incorrect Protocol Support
	
	- Page 1-36: Incorrect Definition of Server Message Block (SMB)
	
	- Page 22 (Index): Incorrect Page for WINFILE.INI Section
	
	- Page 3-12: Windows Setup: Transition from MS-DOS to Graphical Portion
	
	- Page 3-13: Location of Serial Number
	
	- Page E-5: WFWG Err Msg: DOS -- TCP/IP Resident Driver Initialization...
	
	- Page E-10: MaintainServerList=No in [network] Section of SYSTEM.INI File
	
	- Page E-10: No HP StarLAN Adapter in Windows for Workgroups
	
	- Pages E-16 and E-18: Configuring Microsoft DLC
	
	- README.WRI File: Incorrect Reference to SmartMon utility
	
	MORE INFORMATION
	================
	
	Page 1-33: WFWG Resource Kit States Incorrect Protocol Support
	--------------------------------------------------------------
	
	The "Microsoft Windows for Workgroups Resource Kit" for version 3.1 incorrectly
	states the number of protocol stacks that Windows for Workgroups supports.
	
	The resource kit states on page 1-33:
	
	  Windows for Workgroups supports up to four protocol stacks.
	
	This statement is misleading. Windows for Workgroups version 3.1 supports up to
	four protocol stacks per network interface card. Although there is a maximum of
	four network interface cards per system, you cannot have more than eight
	protocol stacks per system, regardless of the number of network interface cards
	installed.
	
	Page 1-36: Incorrect Definition of Server Message Block (SMB)
	-------------------------------------------------------------
	
	Page 1-36 of the Resource Kit incorrectly defines the functionality of a Server
	Message Block (SMB) as it pertains to networking architecture. It states:
	
	  The redirector packages SMB requests meant for remote computers in a
	  structure known as a Network Control Block (NCB). NCBs can be sent over the
	  network to a remote device.
	
	NCBs are never sent over the wire. Rather, SMBs are transmitted over the physical
	media instead.
	
	Page 22 (Index): Incorrect Page for WINFILE.INI Section
	-------------------------------------------------------
	
	The "Microsoft Windows for Workgroups Resource Kit" version 3.1 contains a
	documentation error on page 22 of the index. The page listing for the
	WINFILE.INI section incorrectly states the following:
	
	  sections 6-73--74
	
	The statement should read as follows:
	
	  WINFILE.INI
	  sections 6-80--81
	
	Page 3-12: Windows Setup: Transition from MS-DOS to Graphical Portion
	---------------------------------------------------------------------
	
	The "Microsoft Windows Resource Kit" for version 3.1 (page 68) and "Microsoft
	Windows for Workgroups Resource Kit" for version 3.1 (page 3-12) incorrectly
	describe the transition from the MS-DOS portion of Setup to the graphical
	portion of Setup.
	
	The resource kit states that the final step for the MS-DOS portion of Setup is to
	use the MS-DOS EXEC command to call WIN.COM, which first displays the logo
	screen and then starts Windows in standard mode. This statement is incorrect.
	
	After building the WIN.COM file and setting the shell statement in the SYSTEM.INI
	file equal to SETUP.EXE (SHELL=SETUP.EXE), the MS-DOS EXEC command is called to
	start DOSX.EXE, the standard mode MS-DOS extender. This causes Windows to start
	in standard mode. No logo is displayed during the Windows Setup process.
	
	Page 3-13: Location of Serial Number
	------------------------------------
	
	The "Microsoft Windows or Workgroups Resource Kit," version 3.1 states the
	following on page 3-13:
	
	  Next setup prompts you for a user name and a company name, which is the
	  identifying name that will appear with the registration serial number in the
	  About Program Manager dialog box.
	
	The serial number is not listed in the About Program manager dialog box. The
	serial number is listed in the back of the "Getting Started" manual. Only the
	user name and the company name are listed in the About Program dialog box.
	
	Page E-5: WFWG Err Msg: DOS -- TCP/IP Resident Driver Initialization...
	-----------------------------------------------------------------------
	
	The "Microsoft Windows for Workgroups Resource Kit" for version 3.1 contains an
	error in Appendix E, page 5, under "Configuring the Microsoft TCP/IP Protocol."
	
	The setting that shows drivername=tcpip$, under the [ms$tcp] section, is in
	lowercase. The driver name should be in all uppercase (capital) letters, such as
	Drivername=TCPIP$.
	
	The PROTOCOL.INI file for Windows for Workgroups can contain case-sensitive text.
	If this driver name is in lowercase in the PROTOCOL.INI file, the following
	error message is displayed during startup:
	
	  DOS -- TCP/IP Resident Driver Initialization failed.
	
	To correct this problem, change the name of the driver to all capital letters.
	
	Page E-10: MaintainServerList=No in [network] Section of SYSTEM.INI File
	------------------------------------------------------------------------
	
	The "Microsoft Windows for Workgroups Resource Kit" for version 3.1 incorrectly
	states on page E-10 that the MaintainServerList=No line should be added to the
	[386enh] section. It should be added to the [network] section.
	
	Page E-10: No HP StarLAN Adapter in Windows for Workgroups
	----------------------------------------------------------
	
	On page 19 of Appendix E of the "Windows for Workgroups Resource Kit" for version
	3.1, step 6 reads as follows:
	
	  When prompted for your network adapter, choose HP StarLAN network adapter.
	
	There is no Hewlett-Packard (HP) StarLAN network adapter available in version 3.1
	of Windows for Workgroups. For this step, substitute any network adapter and
	continue as directed. In this procedure, configuring the AT&T StarLAN ISO
	Stack, the network adapter you choose is not important because the network
	information is manually modified in subsequent steps.
	
	Pages E-16 and E-18: Configuring Microsoft DLC
	----------------------------------------------
	
	The "Microsoft Windows for Workgroups Resource Kit" for version 3.1 contains a
	documentation error in Appendix E, pages E-16 and E-18, under Configuring
	Microsoft DLC. The setting ti_tick_one=255, under the [dlcxif] section, is
	repeated and incorrect. The setting should be ti_tick_two=255. For example, a
	correct [dlcxif] section will contain:
	
	     [dlcxif]
	     drivername=msdlc$
	     bindings=ms$elnkii
	     commands=24
	     saps=8
	     stations=20
	     timers=12
	     bufqelements=512
	     t1_tick_one=10
	     t1_tick_two=50
	     ti_tick_one=255
	     ti_tick_two=255
	
	This error is repeated again on page E-18, were a sample PROTOCOL.INI file is
	shown.
	
	README.WRI File: Incorrect Reference to SmartMon utility
	--------------------------------------------------------
	
	The Windows for Workgroups version 3.1 README.WRI file contains the following
	incorrect statement in Section 9.0, "Running Communications Applications":
	
	  SMARTDrive may cause download errors when it clears the write-behind cache.
	  If this happens, disable the SMARTDrive write-behind cache during high-speed
	  downloads. This can be done easily using the SmartMon utility included in the
	  Windows for Workgroups Resource Kit.
	
	This is incorrect. The SmartMon utility is included with the "Microsoft Windows
	Resource Kit" for Windows 3.1, not the "Windows for Workgroups Resource Kit."
	
	For information about obtaining the "Microsoft Windows Resource Kit" for version
	3.1, call the Microsoft Sales Information Center (MSIC) at (800) 426-9400.
	
	Additional query words: 3.1 3.10 6.0 6.00 lanman bootup boot up upper lower case uppercase lowercase dlc nic protocol number guide smartdrive monitor
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
