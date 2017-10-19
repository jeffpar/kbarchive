---
layout: page
title: "Q153873: HOWTO: Upgrade from SourceSafe 3.x to Visual SourceSafe 4.0"
permalink: /kb/153/Q153873/
---

## Q153873: HOWTO: Upgrade from SourceSafe 3.x to Visual SourceSafe 4.0

	Article: Q153873
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup kbSSafe400 kbSSafe500
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 5.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Due to the change in structure of the database from SourceSafe 3.x to Visual
	SourceSafe 4.0, there are several steps that would be beneficial to take when
	upgrading.
	
	MORE INFORMATION
	================
	
	1. Purge\Destroy all unneeded files and projects from the 3.1 database. First,
	  understand the difference between a deleted and a destroyed file/project: A
	  deleted file/project is recoverable, destroyed files are not. If a deleted
	  file existed in an earlier version of a project, it will reappear when a Get
	  is done on that earlier version of the project. If the file is destroyed, it
	  will not reappear.
	
	  To destroy a file or project that is active, highlight the file, hit the
	  delete key, make sure the "Destroy permanently" checkbox is checked, and
	  click the OK button.
	
	  To destroy a file or project that has been deleted, highlight the parent
	  project, access the Info menu, chose the Removed... option. You will be
	  presented with a list of files and projects that used to exist in the parent
	  project but have been deleted. This is a multiselect listbox. Select the
	  files/projects you want to destroy, and click the Purge button.
	
	  If you have a deleted file or project with the same name as an active file and
	  want to keep both versions, it is recommended that you temporarily rename the
	  active file/project. To rename a file, highlight the file, access the File
	  menu, and choose the Rename... option.
	
	2. Tell all users to exit any SourceSafe executables. Users can have files
	  checked out, but they cannot be running any of the executables.
	
	3. Check to make sure there is no detectable corruption in the 3.1 database.
	  This can be done by running the 3.x version of Analyze.exe on the 3.1 data.
	  Analyze.exe can be found in the ADMIN and the WINNT subdirectories of the
	  SourceSafe 3.x installation. This process can take anywhere from 5 seconds to
	  7 hours depending on the complexity of the database and the size of the
	  SS\DATA subdirectory. Given operating system permissions and correct login
	  information, Analyze.exe can be run in an overnight process.
	
	  To run Analyze.exe, type the following in a Command box:
	
	  analyze -I- <path to data directory> >analyze.log
	
	  This command runs the Analyze executable on your data without prompting you
	  for input, and then outputs the results to the Analyze.log file.
	
	  Look at the Analyze.log file. If it says: "Analysis Complete No Errors Found"
	  move on to the next step. If it says anything else, correct those error
	  messages before trying the upgrade.
	
	  For more information, please see the following articles in the Microsoft
	  Knowledge Base:
	
	  Q133054 HOWTO: Detecting and Fixing Database Corruption Errors in SourceSafe
	
	  Q131447 HOWTO: Use PHYSICAL Command to Find SourceSafe Database File
	
	4. Make a full backup of your 3.1 SS\DATA subdirectory and all its
	  subdirectories.
	
	5. Create an empty subdirectory on a 32-bit operating system (Windows 95 or
	  Windows NT). Download Analyze6.exe from one of the Microsoft download sites
	  into this subdirectory. Run the file to extract its contents. For more
	  details on how to obtain this self-extracting executable, please refer to the
	  following article in the Microsoft Knowledge Base:
	
	  Q190881 SAMPLE: Analyze6.exe Utility for Visual SourceSafe
	
	6. Install Visual SourceSafe version 4.x or greater into a new directory.
	
	7. At that 32-bit operating system, unload anything that might be in memory,
	  especially virus protection programs. Then open a Command prompt, change to
	  the newly created subdirectory, and run the following:
	
	  ddconv <path to data directory>
	
	8. When the process completes, open the Ddcerr.log file that was created in the
	  SS\DATA subdirectory. If the process doesn't complete, contact Visual
	  SourceSafe product support. In the United States and Canada, the phone number
	  is 425-635-7014.
	
	9. If any messages except the following appear, there was corruption in the 3.1
	  database that caused a problem in the conversion:
	
	  DDCONV initializing
	  Creating subfolders
	  Moving files
	  Creating rights DB
	  Building project list
	  Creating names DB
	  Converting log files
	  <Logfile> Parent count in old DB #, correcting to actual count #.
	  <Logfile> parent project <Project path> not found, skipping parent
	  record.
	  <Logfile> Project entry count in old DB #, correcting to actual count
	  #.
	  <Logfile> Format record, invalid, correcting.
	  Adding project rights
	  Converting users
	  DDCONV finished
	
	  If a problem occurs, refer to the following article in the Microsoft Knowledge
	  Base:
	
	  Q153872 DDConv Messages of Visual SourceSafe 4.0
	
	10. Insert the Visual SourceSafe CD-ROM, and run Setup.exe. Choose the server
	  install, and point to the 3.1 installation. If SourceSafe is on a Novell
	  Netware server, install won't work from a Windows 95 computer. See the
	  following KB article:
	
	  Q153873 How to Install When Setup Fails on Novell
	
	  As a workaround, you can run the install from a Windows 3.1, Windows for
	  Workgroups 3.11, or Windows NT 3.51 workstation. If you only have Windows 95
	  workstations, install the server copy locally, drag and drop it to the
	  Novell Netware server, and then copy the following from the SourceSafe 3.1
	  installation to the 4.0 installation:
	
	  SS\USERS and all subdirectories
	  SS\DATA and all subdirectories
	  SS\srcsafe.ini
	  SS\users.txt
	
	11. Test the installation. While connected to the server copy of Visual
	  SourceSafe, go to the appropriate subdirectory for the platform of your
	  local operating system and run SSEXP. If it comes up, your installation and
	  conversion was successful. If it doesn't come up or looks wrong, call
	  Microsoft Visual SourceSafe technical support.
	
	12. Rename any active files or projects that you renamed before the conversion
	  (see Step 1) back to their original names.
	
	13. After the server copy is installed, you will want to have users connect to
	  the server copy of Visual SourceSafe and run Netsetup.exe to install the
	  client copy of Visual SourceSafe. Your users can now use Visual SourceSafe.
	
	14. Although not required, it is recommended that you run the analyze that was
	  downloaded in step 5 on the 4.0 database. See the readme.txt file that came
	  from the analyze4.exe self-extracting executable. See the following
	  Microsoft Knowledge Base article for information about analyze messages:
	
	  Q152807 Error Messages from the Analyze Tool of Visual SourceSafe
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbsetup kbSSafe400 kbSSafe500 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	
