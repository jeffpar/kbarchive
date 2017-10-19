---
layout: page
title: "Q104249: PC WSPlus: Setting Up Schedule Distribution"
permalink: /kb/104/Q104249/
---

## Q104249: PC WSPlus: Setting Up Schedule Distribution

	Article: Q104249
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-SEP-1999
	
	1.00 1.00a
	WINDOWS
	kbenv kbtlc
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	This article describes the steps necessary to set up and run Schedule
	Distribution for versions 1.0 and 1.0a of Microsoft Schedule+ for Windows.
	
	To set up Schedule Distribution
	-------------------------------
	
	1. In the Microsoft Mail Administrator program, create an Adminsch account on
	  each postoffice that is to participates in Schedule Distribution.
	
	2. The Adminsch account must be included in Directory Synchronization
	  (Dir-Sync).
	
	3. In the Mail Administrator program (ADMIN.EXE), select External-Admin, Export,
	  then select All.
	
	  NOTE: You can either export all as suggested above, or wait for Directory
	  Synchronization to take place.
	
	4. In the Windows File Manager, connect drive M to one of the postoffices that
	  is participating in Schedule Distribution.
	
	5. Start the Schedule+ Admin program. When you install this program from the
	  Network Install disk (disk 1), it creates a directory called ADMINSCH and
	  installs the SCHDIST.EXE, MVCAL.EXE, and ADMINSCH.EXE programs. Except for
	  the ADMINSCH.EXE program, all these programs run in MS-DOS. The installation
	  program will create an Adminsch icon for use in Windows.
	
	  NOTE: You do not need to reinstall the Schedule+ Admin program for each
	  postoffice; the one program will be adequate for multiple postoffices.
	
	6. From the Administration menu, choose Distribution Settings.
	
	7. Choose the Add Postoffice or Add Gateway button (this depends on where the
	  postoffice exists).
	
	8. In the postoffice list, double-click the name of the postoffice you want to
	  add. If no postoffices appear on this list, then either the Adminsch accounts
	  created in step 1 were not created correctly or step 3 was not completed
	  correctly. In either case, start again from step 1.
	
	9. In the Distribution Settings dialog box, select the new postoffice in the
	  Postoffices list, then choose the Settings button.
	
	10. Specify the sending times for the new postoffice, if you want times other
	  than the default.
	
	11. Repeat steps 9 through 11 if there are still more postoffices you want to
	  participate in Schedule Distribution.
	
	12. Once all the postoffices have been registered, exit the Schedule+ Admin
	  program.
	
	13. From the Windows File Manager, disconnect drive M and connect to a different
	  postoffice you want to configure for Schedule Distribution. This new
	  postoffice must still be connected in File Manager as drive M.
	
	14. Repeat steps 5 through 13.
	
	15. Once all postoffices have been added, exit to MS-DOS.
	
	16. From the ADMINSCH directory in MS-DOS, connect a drive letter to the
	  postoffice to which you want to distribute schedule information.
	
	17. Repeat step 16 for each postoffice to which you want to distribute schedule
	  information.
	
	  NOTE: When you exchange information with multiple postoffices, you should
	  assign consecutive drive letters.
	
	18. At the MS-DOS prompt, type the following:
	
	  schdist.exe -dxy
	
	  The -D option specifies the drive letter or range of drive letters assigned
	  to the postoffices with which you want to distribute schedule information.
	
	MORE INFORMATION
	================
	
	If this is not the first time you are trying to set up and run Schedule
	Distribution, please do the following to help eliminate and facilitate running
	and configuring Schedule Distribution:
	
	1. On each postoffice, change to the MAILDATA\CAL directory.
	
	2. Delete the following files:
	
	   - ADMIN.PRF
	
	   - Any *.POF files that may exist
	
	  The ADMIN.PRF (administrator preference) file includes information on other
	  postoffices and the Default Sending Times. This file will be re-created the
	  first time you run the Adminsch program and reregister other postoffices.
	
	  The 00000000.POF contains free/busy times for users on the local postoffice.
	  The local postoffice is 00000000.POF. All external postoffices will be
	  0000000n.POF, where n= >0. The 00000000.POF file will be recreated when
	  the first client logs into Schedule Plus, makes a change to their schedule
	  and logs out.
	
	  More importantly, the POF file will be empty at this point except for the one
	  user's schedule who logged in to create it. In order to get all users'
	  schedule information into the file, ALL users must log in and make changes to
	  their schedule. While this is bound to happen eventually, the file will have
	  incomplete information until the last user finally logs in and makes some
	  changes to their schedule.
	
	  The same holds true for resources. Someone must log into them and make a
	  change in order for the 00000000.POF file to be updated with the resource's
	  schedule.
	
	  POF files also contain flags specifying which accounts are resources, lists of
	  assistants as well as related options (including whether the assistant should
	  only receive meeting responses), and access rights information. All of this
	  will not be updated in the POF until the users have logged in to Schedule
	  Plus and a change is made.
	
	3. Follow steps 1 through 18 above.
	
	NOTE: You can only run Schedule Distribution with the retail version of Microsoft
	Schedule+. Windows for Workgroups Schedule+ does not allow the capability to
	share scheduling information with other postoffices, and therefore, it does not
	come with the Schedule+ Admin utility.
	
	The MVCAL utility is included with Application Note WA0641, "Database Maintenance
	Utilities." You can have this Application Note mailed or faxed to you by
	contacting Microsoft Product Support Services.
	
	Additional query words: schedule plus 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
