---
layout: page
title: "Q128962: PC WSPlus: Synchronizing Calendar Files for Remote Mail Users"
permalink: kb/128/Q128962/
---

## Q128962: PC WSPlus: Synchronizing Calendar Files for Remote Mail Users

	Article: Q128962
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-SEP-1999
	
	1.00 1.00a
	WINDOWS
	kbusage kbinterop
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NOTE: Please read all the procedures prior to performing the workaround.
	
	The following steps will allow Microsoft Mail Remote for Windows users to update
	their Microsoft Schedule+ calendar files on the postoffice, because they cannot
	be synchronized using the Windows Remote Mail clients as described in
	
	  Q96531 PC WRmt: Using Mail Remote with Schedule+
	
	In order for this to work, the Remote user will have to assign Assistant access
	privileges to a user that maintains a LAN-type connection to the postoffice.
	This can be done in one of the following ways:
	
	- The Remote user is in the office attached to the network and assigns the
	  Assistant. (Easiest way.)
	
	  -or-
	
	- The Remote user passes his or her password to the designated user, allowing
	  that user to launch Schedule+ as the Remote user and assign Assistant rights
	  to the designated user.
	
	  NOTE: This will create a USERNAME.CAL for the Remote user on the designated
	  user's workstation. To prevent errors regarding MMF files maintained locally
	  on the workstation, the designated user should rename the MSMAIL.MMF to
	  USERNAME.MMF. After signing out of Schedule+ as the Remote user, the new
	  MSMAIL.MMF should be deleted and the USERNAME.MMF file should be renamed to
	  back to MSMAIL.MMF. The Remote user's USERNAME.CAL file can be deleted at
	  this time.
	
	MORE INFORMATION
	================
	
	Once the Assistant has been designated, and the Remote user is away from the
	office:
	
	1. Sign into Schedule+.
	
	2. From the File menu, choose Export. The Remote users should export the
	  appointments out to a USERNAME.SCH file.
	
	3. Sign into the Windows client.
	
	4. Create a message to the Assistant and attach the USERNAME.SCH file to the
	  message as a normal attachment. Send the message.
	
	When the Assistant receives the message from the Remote user in the Windows Mail
	client, he or she should:
	
	1. Save the attached USERNAME.SCH file.
	
	2. Login to Schedule+, if not already logged in.
	
	3. From the File menu, choose Open Other Appointment Books.
	
	  The Assistant can now open the Remote users calendar file.
	
	4. With the active window being the Remote user's calendar file, from the File
	  menu, choose Import.
	
	5. In the Import Appointments dialog box, select the saved USERNAME.SCH file,
	  and select the OK button.
	
	6. In the Import Format dialog box, select Schedule+ format and the Do Not Add
	  Duplicate Appointments button. As a precaution select the Ask About
	  Conflicting Appointments check box. Select the OK button.
	
	7. The Assistant can now close or minimize the Remote user's calendar file.
	
	Additional query words: schedule plus 1.00 1.00a 3.2 remote mail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbScheduleSearch kbZNotKeyword3 kbSchedule100 kbSchedule100a kbMailRemote320
	Version           : WINDOWS:1.0,1.0a,3.2
	
	=============================================================================
	
