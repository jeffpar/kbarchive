---
layout: page
title: "Q119415: PC WRmt: How the System Selector Works"
permalink: kb/119/Q119415/
---

## Q119415: PC WRmt: How the System Selector Works

	Article: Q119415
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Mail System Selector (MAILDRV.EXE) is a program provided with version 3.2 of
	Microsoft Mail Remote for Windows. In Windows, the user selects the Mail System
	Selector icon to switch to a different mail service, such as AT&T. These
	mail services are called drivers in the program. You can also use this program
	to remove a driver you no longer use.
	
	MORE INFORMATION
	================
	
	What Happens When the User Changes the Current Mail Driver?
	-----------------------------------------------------------
	
	1. The System Selector determines whether any of the mail driver DLLs are
	  currently loaded, by examining the entries in the [Providers] section of the
	  user's MSMAIL.INI.
	
	  The System Selector interprets the entries in the [Providers] section as
	  module names for driver DLLs. If one or more DLLs are loaded, the System
	  Selector assumes a mail-enabled application is running.
	
	2. If a mail-enabled application is running, the System Selector asks you if you
	  want to sign out immediately.
	
	  After your confirmation, the System Selector attempts to sign you out. This
	  may fail in some cases if, for example, Mail or Schedule+ are displaying
	  modal dialogs. If sign-out fails, the System Selector tells the you that they
	  must be signed off before changing the mail driver, and then it displays the
	  main dialog.
	
	3. The System Selector deactivates the current mail driver.
	
	  NOTE: In this section of the README file, PROVIDER is a placeholder for the
	  specific mail driver subdirectory name. For example, the driver subdirectory
	  for Microsoft Mail is \WINDOWS\MSMAIL\MSMAIL.)
	
	  a. If DEACTIVATE= is defined in \WINDOWS\MSMAIL\PROVIDER\FILES.INI, the named
	     DLL is loaded and functions in it are called so that specific environment
	     changes can be properly cleaned up after the provider has run.
	
	  b. Entries are removed from the user's .INI files as follows:
	
	     The INI= entry in the [Transport] section of the
	     WINDOWS\MSMAIL\PROVIDER\FILES.INI file determines which .INI files will be
	     modified. If this entry is missing, only MSMAIL.INI will be modified. The
	     [XXX - Deactivate] sections of the .INI files in the
	     WINDOWS\MSMAIL\PROVIDER list which entries will be removed from the user's
	     .INI files.
	
	  c. The mail driver's DLLs and other files are returned to
	     WINDOWS\MSMAIL\PROVIDER. The Files= entry of the [Transport] section in
	     FILES.INI lists which files will be moved.
	
	4. The System Selector activates the selected new driver.
	
	  a. The mail driver's DLLs and other files are moved from
	     WINDOWS\MSMAIL\PROVIDER to WINDOWS\SYSTEM. The new driver's FILES.INI file
	     list which files will be moved.
	
	  b. Entries are merged into the user's .INI files. The INI= entry in the
	     [Transport] section of WINDOWS\MSMAIL\PROVIDER\FILES.INI determines which
	     .INI files will be modified. If this entry is missing, only MSMAIL.INI
	     will be modified.
	
	     Sections that do NOT have the " - Deactivate" string as part of the section
	     name list which entries will be added.
	
	  c. If ACTIVATE= is defined in WINDOWS\MSMAIL\PROVIDER\FILES.INI, the named
	     DLL is loaded and functions in it are called so that specific environment
	     changes can be properly set up by the provider.
	
	5. The System Selector updates its display and the contents of MSMAILPV.INI to
	  reflect the switch.
	
	  If there is a failure anywhere along the way, the System Selector backs out
	  changes by first undoing whatever steps were taken in the activation step,
	  and then re-activating the original driver.
	
	Please see SWITCHER.TXT for additional information.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
