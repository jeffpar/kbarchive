---
layout: page
title: "Q164389: FIX: ODBC Files Get Copied to Distribution Disks in VFP 3.0"
permalink: kb/164/Q164389/
---

## Q164389: FIX: ODBC Files Get Copied to Distribution Disks in VFP 3.0

	Article: Q164389
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp300bBUG kbMDAC250kbbuglist kbfixlist
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When leaving the ODBC Drivers check box blank in step 2 of the Setup Wizard in
	Visual FoxPro 3.0, the desired effect is to avoid having the ODBC files copied
	to the disk images. The problem is that some of the ODBC files get copied to the
	disk images even if the ODBC check box is clear.
	
	There are at least seven files that get copied onto the disk images. They are
	listed below:
	
	- Odbccp32.dl_
	
	- Odbcinst.dl_
	
	- Odbcint.dl_
	
	- Odbckey.dl_
	
	- Odbcstf.dl_
	
	- Odbcstp.dl_
	
	- Odbcexec.ex_
	
	RESOLUTION
	==========
	
	To ensure that these files do not get copied onto the disk images, complete the
	following steps:
	
	1. Delete the Visual FoxPro \Distrib directory.
	
	2. Open the Compress.dbf table in the Visual FoxPro \Distrib.src directory and
	  make a backup of it.
	
	3. Create an index on the DEST field. Locate Odbc.dl_ in the DEST field. Move
	  the record pointer to that record.
	
	4. Issue the following command in the Command window:
	
	     DELETE NEXT 52
	
	  Browse the table to make sure that only names that start with OD in the DEST
	  field are marked for deletion. There might be more than 52 records that start
	  with OD. If so, mark them for deletion also.
	
	5. Now that the ODBC files are marked for deletion in the Compress table, pack
	  the table and close it.
	
	6. Delete the Compress and Disk images directories under the destination
	  directory if they have been created from an earlier session of the Setup
	  Wizard. Also delete the Dkcontrl.dbf, Dkcontrl.cdx, and Wzsetup.ini files
	  located in the directory where the source files are.
	
	7. Run the Setup Wizard to rebuild the Visual FoxPro \Distrib directory and the
	  Disk images directories. Note that opening up each of the disk images shows
	  that there are no ODBC files now.
	
	8. Open the Setup.st1 file in the DISK1 directory with Notepad and place a
	  semicolon at the beginning of any line that represents an ODBC file. The
	  semicolon acts as a remark statement allowing the setup routine to bypass
	  that line. This step has to be repeated every time the Disk images are
	  re-created.
	
	To be able to change back to checking the ODBC drivers check box in the Setup
	Wizard and loading the ODBC files into the Disk images directories, replace the
	Compress.dbf file in the Visual FoxPro \Distrib.src directory with the backup
	that was created and delete the Visual FoxPro \Distrib directory. Running the
	Setup wizard re-creates the Distrib directory and add the ODBC files to the Disk
	images.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was fixed in Visual FoxPro 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an .exe file and place it in a directory by itself.
	
	2. Run the Setup Wizard on that directory and leave the ODBC drivers check box
	  clear.
	
	3. Open each of the Disk images directories and note that the ODBC files listed
	  above are in the directories.
	
	4. Perform the steps in the WORKAROUND section to remove the ODBC files from the
	  disk images directories.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300bBUG kbMDAC250 kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b
	Version           : WINDOWS:2.5,3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
