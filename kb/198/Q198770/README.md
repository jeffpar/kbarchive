---
layout: page
title: "Q198770: SMS: Floppy Drive Spins During Hardware Inventory Scans"
permalink: kb/198/Q198770/
---

## Q198770: SMS: Floppy Drive Spins During Hardware Inventory Scans

	Article: Q198770
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Systems Management Server version 2.0, normal hardware scans may
	cause constant scanning of the drive A diskette. An Event ID 115 may also be
	observed on Microsoft Windows NT clients.
	
	MORE INFORMATION
	================
	
	During a hardware inventory of a client, the constant scanning of drive A is not
	a problem if the inventory is set to run when the computer is not in use. The
	hardware inventory is performed using file Hinv32.exe on 32-bit clients.
	Hinv32.exe enumerates all instances specified in the local Managed Object Format
	(MOF) file.
	
	This information is specified in the client's MOF file and is called SMS_DEF.MOF.
	This file can be found at <X>:\%windir%\MS\SMS\Clicomp\Hinv.
	
	To disable the constant scanning of drive A during a hardware inventory, use
	either of the following options:
	
	- Modify the SMS_DEF.MOF file on the primary site system in the file
	  <X>:\SMS\Inboxes\Clifiles.src\Hinv. To do so, follow these steps:
	
	  a. Open the file in Microsoft WordPad or Notepad.
	
	  b. Locate the following entry in the MOF file:
	
	  [SMS_Report (TRUE),SMS_Group_Name ("Logical Disk"),
	  ResID(2100),ResDLL("SMS_RXPL.dll"),SMS_Class_ID("MICROSOFT|LOGICAL_DISK|1.0")]class
	  Win32_LogicalDisk : SMS_Class_Template
	
	  c. Change the line [SMS_Report (TRUE) to [SMS_Report (FALSE).
	
	     NOTE: Disabling the individual settings in this class is not sufficient.
	
	  d. Run the MOF Compiler and allow it to transfer copies to clients.
	
	CAUTION: When the MOF Compiler is run, misplaced white space in the SMS_DEF.MOF
	file may cause the MOF file to compile unsuccessfully. Avoid adding white space
	while editing in WordPad or Notepad.
	
	- Change the MOF Manager utility that comes with the Systems Management Server
	  product. To do so, follow these steps:
	
	  a. Open the MOF Manager utility, and then click the Open icon (the icon is a
	     drive with an arrow pointed to a blue document).
	
	  b. Navigate to the file <X>:\SMS\Inboxes\Clifiles.src\Hinv\SMS_DEF.MOF.
	
	  c. Scroll through the Class List on the left, and then double-click
	     Win32_LogicalDisk.
	
	  d. In the area preceding the Class List, locate Group Name: Logical Disk,
	     change the Report option button selection to No, and then click Save.
	
	  e. Run the MOF Compiler and allow it to transfer copies to clients.
	
	Installing the MOF Manager with the Initial Systems Management Server 2.0 Release CD-ROM
	----------------------------------------------------------------------------------------
	
	Specify the directory in which to install the MOF Manager utility, locate the
	file Support\Reskit\Bin\<platform>\Mofman\Setup.exe, and then run Setup.
	
	Service Pack 1 Source Files::
	
	If you are using the files from the Service Pack 1 release and have already run
	Support.exe and extracted the files, there is no need to run Setup. The MOF
	Manager executable file is in the following location:
	
	  SMS 2.0 Supportability Tools\Bin\<platform>\Discovery and Inventory
	  Tools\Mofman.exe
	
	Service Pack Two Source Files::
	
	If you are using the files from the Service Pack 2 release and have already run
	the Support.exe and extracted the files, there is no need to run Setup. The MOF
	Manager executable file is in the following location:
	
	  SMS 2.0 Supportability Tools\Bin\<platform>\Discovery and Inventory
	  Tools\Mofman.exe
	
	After you complete the installation, the MOF Manager is ready to run.
	
	NOTE: Running a version of the MOF Manager earlier than Service Pack 2 may cause
	MOF compilation failures when Systems Management Server attempts to process the
	MOF file.
	
	After you save the edits to the MOF, the file is automatically transferred to
	each client access point (CAP). Client Component Installation Manager (CCIM)
	transfers it to the client during its regular maintenance cycle and places it in
	the following location:
	
	  %Windir%\MS\SMS\Sitefile\<site code>\Hinv
	
	The next time the hardware inventory agent on the client runs, it detects the
	newer version in this location (immediately above) and copies it to the
	following location to be compiled:
	
	  %Windir%\MS\SMS\Clicomp\Hinv
	
	To expedite your testing, copy the SMS_DEF.MOF file to
	<X>:\%Windir%\MS\SMS\Clicomp\Hinv. Then, in Control Panel, run the Systems
	Management utility. Display the contents under the Components tab, highlight
	Hardware Inventory Agent, and then click Start Component. This action forces a
	hardware inventory of the client using the new modified MOF. If drive A does not
	constantly scan, the change has been successfully executed.
	
	Additional query words: prodsms hw32
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
