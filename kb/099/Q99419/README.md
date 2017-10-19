---
layout: page
title: "Q99419: PC DB: Database Maintenance Utilities &#91;Complete&#93;"
permalink: /kb/099/Q99419/
---

## Q99419: PC DB: Database Maintenance Utilities &#91;Complete&#93;

	Article: Q99419
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0,3.2
	Operating System(s): 
	Keyword(s): kbenv kbfile
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 2.1x, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This document describes operational details for utilities used to repair and
	maintain the database for Microsoft Mail for PC Networks. We recommend that the
	use of these programs be restricted to Mail administrators. The procedures
	described apply to versions 2.1 and later of Microsoft Mail, except where
	noted.
	
	To prevent the possibility of data loss, always back up the Mail database before
	you use any of the utilities included with this document and described below:
	
	    Utility name    Description
	    --------------------------------------------------------------
	    ACCTONME.EXE    Creates an ADMIN.NME file from the existing
	                    ACCESS files (ACCESS.GLB, ACCESS2.GLB, and
	                    ACCESS3.GLB).
	    DUMPFLD.EXE     Displays the contents of a folder (.FLD)
	                    file.
	    DUMPIDX.EXE     Displays the contents of a folder index file
	                    (.IDX files, including FOLDROOT.IDX).
	    DUMPKEY.EXE     Lists owners for calendar files.
	    ESCNTLR.EXE     Removes, installs, and displays the status
	                    of enhanced security on a version 3.0 or 3.2
	                    postoffice.
	    FIXFLD.EXE      Recovers corrupted folder (.FLD) files.
	    FIXIDX.EXE      Re-creates a user's folder index (.IDX)
	                    file.
	    GIMPORT.EXE     Creates a group from a file.
	    LISTUSER.EXE    Displays the mailbox names and their
	                    associated eight-digit ID numbers.
	    MOVEFOLD.EXE    Allows a user's folders to be transferred to
	                    another postoffice.
	    MVCAL.EXE       Renames a corrupted calendar file located on
	                    the server.
	    NETDUMP.EXE     Displays the external postoffice and gateway
	                    routing files.
	    REVERT.EXE      Resets the unread count for the Mail message
	                    file (MMF).
	
	ACCTONME.EXE
	------------
	
	Summary
	-------
	
	The ACCTONME utility rebuilds the postoffice address list (POL) from scratch and
	works on Mail 2.1 and later postoffices. ACCTONME does not directly access the
	global address list (GAL) in versions 3.0 and 3.2, but because the GAL contains
	the names from the local postoffice, it will require rebuilding after this
	process is complete. See the Microsoft Mail" Administrator's Guide" for
	assistance with rebuilding the GAL.
	
	When to Use
	-----------
	
	Use this utility only when both the ADMIN.NME and ADMINSHD.NME files are deleted
	or irrevocably damaged. If only one of the files is damaged or missing, you can
	replace the damaged file with a copy of the undamaged file.
	
	For more information on recovering the POL, see the "Alternatives" section below.
	You can use this information if running ACCTONME is not possible or practical.
	
	Side Effects
	------------
	
	Running this utility will result in the loss of all external postoffice names,
	gateway names, and local group names in the POL. Because of the structure of the
	address list file and its connection to the group subsystem of the database, you
	must delete all postoffice groups before proceeding.
	
	Syntax
	------
	
	acctonme
	
	Procedures
	----------
	
	As with all Microsoft Mail utilities, we highly recommend that you back up your
	Mail database before running ACCTONME. You must also back up the ADMIN.NME file
	in the NME subdirectory using the following command from the root of the Mail
	database:
	
	  copy \nme\admin.nme \nme\admin.old
	
	1. Use the GIMPORT utility included with this document to extract the list of
	  groups and the group's users. GIMPORT can then use the file to recreate the
	  groups. See the section on GIMPORT in this document for more information
	  about using GIMPORT.
	
	  As an alternative, print a report of all postoffice groups by starting the
	  Mail Administrator program (ADMIN.EXE) and selecting Local-Admin, Group,
	  Print, <File or Printer>. This list will be used later to help you
	  re-create the groups.
	
	2. Delete all postoffice groups by starting the Mail Administrator program (if
	  you haven't already) and selecting Local-Admin, Group, Delete for each group
	  on the postoffice. If the group has an associated group folder, you will be
	  prompted to delete the folder.
	
	3. Go to the drive where the Mail database is located and set the ADMIN.NME file
	  in the NME subdirectory to zero bytes by using the following MS-DOS command:
	  (When you use this command, you may receive a "File not found" error from
	  MS-DOS. Disregard this error message.)
	
	  type "nul > \nme\admin.nme" (without the quotation marks)
	
	4. From the root of the Mail database, run the ACCTONME utility. It will rebuild
	  the POL so that it contains only local mailbox names (no messages are
	  generated upon completion).
	
	5. Copy the ADMIN.NME file to ADMINSHD.NME by typing the following command from
	  the root of the Mail database:
	
	  " copy \nme\admin.nme \nme\adminshd.nme" (without the quotation marks)
	
	6. To re-create the postoffice groups, select Local-Admin, Group, Create in the
	  Mail Administrator program. Use the list generated in step 1 as a guide to
	  help you in re-creating the postoffice groups.
	
	7. To re-create the lost external user names, use the Address menu option in the
	  Mail Administrator program or use the Import utility.
	
	8. Run REBUILD.EXE to re-create the GAL if you are using Mail 3.0 or 3.2.
	  REBUILD can be found in the executables directory.
	
	Alternatives
	------------
	
	1. Restore the ADMIN.NME, ADMINSHD.NME, ACCESS.GLB, ACCESS2.GLB, and ACCESS3.GLB
	  files from the backup files. (Any changes in the POL since the backup, such
	  as new users, will be lost.)
	
	2. If you are rebuilding the ADMIN.NME file because a record is missing (for
	  example, you see a particular user from the Mail Administrator program, but
	  you do not see the user when you try to compose a message), use the following
	  procedure to add the name back into the address list:
	
	3. If you are rebuilding the ADMIN.NME file because you are trying to remove a
	  record (for example, you see a particular user when you try to compose a
	  message, but you do not see the user from the Mail Administrator program),
	  use the following procedure:
	
	  a. If there is not a 00000000.NME file in the NME subdirectory of the Mail
	     database, create a new user and substitute that user's eight-digit ID
	     number for 00000000 in the following procedure. You can use LISTUSER.EXE
	     located on the database utilities disk to determine the ID number for that
	     user.
	
	  b. In the NME subdirectory of the Mail database, copy 00000000.NME to
	     00000000.OLD. (If the file is zero bytes long, do not perform this step.)
	
	  c. In the same directory, copy ADMIN.NME to 00000000.NME, then make the
	     current directory the root of the Mail database.
	
	  d. Run the Mail program and log on as the Admin user (or as the new user
	     created in step 3a).
	
	  e. To remove the record, select Address, Delete (Remove for Mail 2.x users),
	     select the user, and press ENTER.
	
	  f. Quit Mail, go to the drive where the Mail database is located, go to the
	     NME subdirectory, and copy 00000000.NME to ADMIN.NME and ADMINSHD.NME.
	
	  g. Restore 00000000.NME from 00000000.OLD, or if the file was zero bytes
	     long, you can zero out the file by using the following command:
	
	  type "aaa > 00000000.nme" (without the quotation marks)
	
	DUMPFLD.EXE
	-----------
	
	Summary
	-------
	
	The DUMPFLD utility generates a diagnostic dump of a folder file. DUMPFLD will
	work with version 2.1 and later postoffices. It will not dump information from
	Microsoft Mail 3.0 or 3.2 Mail message files (MMFs).
	
	When to Use
	-----------
	
	Use this utility to verify the contents and/or the integrity of a folder file.
	
	Side Effects
	------------
	
	None; this utility performs a read-only function on the folder file.
	
	Syntax
	------
	
	  dumpfld [-ml] <folder_filename>
	
	Where:
	
	  -m                   Tells the utility to display all items in
	                      the folder file, including deleted items.
	  l                   Tells the utility to print extended record
	                      information.
	 <folder_filename>    Is the folder file in the current directory
	                      for which information is to be dumped.
	
	Example
	-------
	
	The following command dumps all information about all items in the folder file
	00000002.FLD to the computer screen. Typically, .FLD files are stored in the
	FOLDERS subdirectory. Private folders are stored in the LOC\000xxxxx directory,
	where 000xxxxx is the ID number for that user. Public, group, and shared folders
	are stored in the PUB subdirectory. Folder files can also be stored locally on a
	user's hard disk drive or on an alternate network location.
	
	  dumpfld -ml 00000002.fld
	
	To direct the output to a file, use the MS-DOS redirection symbol ">" and a
	filename. The following command will direct the output of DUMPFLD to the file
	RESULTS.TXT:
	
	  dumpfld -ml 00000002.fld > results.txt
	
	Other Notes
	-----------
	
	When you use the -m option, you may receive the error message "Error: Failure to
	read record." Disregard this error message.
	
	DUMPIDX.EXE
	-----------
	
	Summary
	-------
	
	The DUMPIDX utility generates a diagnostic dump of a folder index file. DUMPIDX
	will work with Mail 2.1 and later postoffices. It will not dump information from
	Microsoft Mail 3.0 or 3.2 Mail message files (MMFs).
	
	When to Use
	-----------
	
	Use this utility to verify the contents and/or the integrity of a folder index
	file.
	
	Side Effects
	------------
	
	None; this utility performs a read-only function on the folder index file.
	
	Syntax
	------
	
	  dumpidx -[ecpns] <index_filename>
	
	Where:
	
	 -e                 Displays the same information as the -c
	                    option, along with information about the
	                    associated folder file. This includes the
	                    name of the folder, access rights, and the
	                    number of items in the folder.
	
	 -c                 Displays the header information for the
	                    selected file. This includes the location
	                    in the file, attributes, and name, comment,
	                    and owner fields for each record in the
	                    index file.
	
	 -p                 Displays the folder names for each of the
	                    records in the index file.
	
	 -n                 Displays the folder filenames associated
	                    with each record in the index file.
	
	 -s                 Displays the same information as the -c
	                    option, along with size information for
	                    each folder file.
	
	<index_filename>    Is the index file in the current directory
	                   for which information is to be dumped.
	
	Example
	-------
	
	The following command will dump folder size information about all items in the
	index file 00000002.IDX to the computer screen. Typically, .IDX files are stored
	in the FOLDERS subdirectory. Private folder indexes are stored in the
	LOC\000xxxxx directory, where 000xxxxx is the ID number for that user. Public,
	group, and shared folders are stored in the PUB subdirectory. Index files can
	also be stored locally on a user's hard disk drive or on an alternate network
	location.
	
	  dumpidx -s 00000002.idx
	
	To direct the output to a file, use the MS-DOS redirection symbol ">" and a
	filename. The following command will direct the output of DUMPIDX to the file
	RESULTS.TXT:
	
	  dumpidx -s 00000002.idx > results.txt
	
	DUMPKEY.EXE
	-----------
	
	Summary
	-------
	
	A user's online calendar file is not named with the same eight-digit ID number as
	the user's mail message file (MMF), nor is it named with the user's name (for
	security reasons). You can use the DUMPKEY utility to find out which online
	calendar files belong to which users.
	
	To use this utility, use the following MS-DOS command to copy the DUMPKEY.EXE
	file to the CAL subdirectory of the postoffice (this example assumes that the
	Mail database is located on drive M):
	
	  copy dumpkey.exe m:\cal\dumpkey.exe
	
	When to Use
	-----------
	
	Use this program if you want to find the owner of a particular calendar (.CAL)
	file on the server.
	
	Side Effects
	------------
	
	None; this is a read-only utility.
	
	Syntax
	------
	
	dumpkey schedule.key
	
	ESCNTLR.EXE
	-----------
	
	Summary
	-------
	
	The ESCNTLR utility allows you to turn enhanced security off and on for the
	postoffice. This utility only works on Mail 3.0 and 3.2 postoffices. Enhanced
	security is a double-encrypted password that stops Mail 2.x clients from
	accessing the postoffice and is unrelated to Advanced Security, which is a
	method of creating a connection to the postoffice that the user cannot access.
	
	When to Use
	-----------
	
	Use this program to display or change the status of enhanced security.
	
	Side Effects
	------------
	
	Enhanced security will be added or removed, and the files containing the user
	accounts will be modified.
	
	Syntax
	------
	
	  escntlr <admin> -p<password> [-s] [-r or -i] [-d<drive>]
	  [-?]
	
	Where:
	
	 <admin>            Is the name of the administrator for this
	                    postoffice [required].
	
	 -p<password>       Specifies the password for the Admin
	                    account [required].
	
	 -s                 Shows status of Enhanced Security only.
	                    This overrides all other options, except
	                    the drive option (-d).
	
	 -r                 Removes enhanced security if installed.
	 -i                 Installs enhanced security if not installed.
	
	 -d<drive>          Is the drive where the Mail database is
	                    located (the default is drive M).
	
	 -?                 Shows the usage screen.
	
	Procedures
	----------
	
	As with all Microsoft Mail utilities, we highly recommend that you back up your
	Mail database before running ESCNTLR. As a minimum, you should back up the GLB
	subdirectory by typing the following command from the root of the Mail
	database:
	
	  xcopy \glb \bak\ /s /v
	
	This command copies the entire GLB subdirectory to a new directory called BAK.
	
	Alternatives
	------------
	
	The setup program for Mail 3.2 removes or adds enhanced security to the
	postoffice.
	
	Examples
	--------
	
	To remove enhanced security, type the following command:
	
	  " escntlr admin -p<password> -r;" (without the quotation marks)
	
	To install enhanced security on drive N, type the following command:
	
	  " escntlr admin -p<password> -i -dn" (without the quotation marks)
	
	To view the status of enhanced security on drive N, type the following command:
	
	  " escntlr -dn -s" (without the quotation marks)
	
	FIXFLD.EXE
	----------
	
	Summary
	-------
	
	The FIXFLD utility attempts to rebuild folder files from their current contents.
	FIXFLD will work with Mail 2.1 and later postoffices. It has no effect on Mail
	3.0 or 3.2 Mail message files (MMFs).
	
	When to Use
	-----------
	
	Use this utility only when a public or private folder is corrupted.
	
	For more information about recovering folders, see the "Alternatives" section
	below. You can use this information if running FIXFLD is not possible or
	practical.
	
	Side Effects
	------------
	
	None; this utility affects only the file specified on the command line.
	
	Syntax
	------
	
	  fixfld <saved_folder_file new_folder_file>
	
	Where:
	
	 <saved_folder_file>   Is the file where the copy of the old
	                       folder file was saved.
	
	 <new_folder_file>     Is the name of the newly created folder
	                       file.
	
	Procedures
	----------
	
	As with all Microsoft Mail utilities, we highly recommend that you back up your
	Mail database before running FIXFLD. Typically, .FLD files are stored in the
	FOLDERS subdirectory. Private folders are stored in the LOC\000xxxxx directory,
	where 000xxxxx is the ID number for that user. Public, group, and shared folders
	are stored in the PUB subdirectory. Folder files can also be stored locally on a
	user's hard disk drive or on an alternate network location.
	
	1. Make a backup of the folder file by typing:
	
	  " copy <filename>.fld <filename>.old" (without the quotation
	  marks)
	
	2. Rename the folder file by typing:
	
	  " ren <filename>.fld <filename>.sav" (without the quotation
	  marks)
	
	3. Build a new copy of the folder file from the FOLDERS\PUB subdirectory by
	  typing:
	
	  " fixfld <filename>.sav <filename>.fld" (without the quotation
	  marks)
	
	4. Start the Mail Administrator program and select Local-Admin, Folders,
	  Compress. This is necessary to ensure that the changes are stored.
	
	Additional Information
	----------------------
	
	You only need to perform one folder-compress step for multiple folder rebuilds.
	If a folder is no longer referenced by its corresponding index file, it is safe
	to delete the folder file.
	
	Alternatives
	------------
	
	The following procedures assume the Mail user is not running version 3.0 or 3.2
	of the Microsoft Mail Windows client software because this program handles
	folders differently than other clients.
	
	1. If you are trying to rebuild a user's private folder, you can restore the
	  corrupted folder from the backup copy in one of three ways:
	
	  a. Restore the entire private folder subdirectory, in which case all
	     information placed in any folder since the last backup will be lost.
	
	  b. Restore the corrupted folder file and run FIXIDX to rebuild the index file
	     (see the "FIXIDX.EXE" section for details), in which case you will lose
	     only the information placed in the corrupted folder since the last backup.
	
	  c. You can recover the folders from a backup copy by using the following
	     procedure:
	
	     1. Restore a backup of the entire Mail database to a different location on
	        the server or to a local hard disk.
	
	     2. Run the Mail program with the -d option to specify where the restored
	        database is located. (If Mail is located on the local hard disk, use
	        the SUBST command. For example, type SUBST P: C:\MAILDB, then type MAIL
	        -DP.)
	
	     3. Log on to Mail as the user with the corrupted folder files. Archive all
	        of the user's folders by selecting Options, Folders, Folders, Archive.
	
	     4. On the production postoffice, reset the user's folders (see alternative
	        2 below), de-archive the folders into the user's active mailbox by
	        selecting Options, Folders, Folders, De- Archive from the Mail program,
	        and then remove the restored copy of the Mail database.
	
	2. If none of the user's private folders are accessible, you can reset that
	  user's folder from the Mail Administrator program by selecting Local-Admin,
	  Folders, Reset, selecting the user, and pressing ENTER. This will move the
	  folder location back to the postoffice and create a new .IDX file with no
	  folders existing.
	
	3. If you are trying to rebuild a shared folder, you can restore the folder from
	  the backup copy in one of two ways:
	
	  a. Restore the entire shared folder subdirectory, in which case all
	     information placed in any shared folder since the last backup will be
	     lost.
	
	  b. Restore the corrupted folder file and run FIXIDX to rebuild the index file
	     (see the "FIXIDX.EXE" section below for details), in which case you will
	     lose only the information placed in the corrupted folder since the last
	     backup.
	
	FIXIDX.EXE
	----------
	
	Summary
	-------
	
	The FIXIDX utility rebuilds the folder index file from records of all of the
	folders in a subdirectory. FIXIDX will work with version 2.1 and later
	postoffices. It has no effect on Microsoft Mail version 3.0 or 3.2 Mail message
	files (MMFs).
	
	When to Use
	-----------
	
	Use this utility only when a folder index is deleted or irrevocably damaged.
	
	For more information on recovering folders, see the "Alternatives" section below.
	You can use this information if running FIXIDX is not possible or practical.
	
	Side Effects
	------------
	
	Running this program will result in the loss of all folder names. Rebuilding
	FOLDROOT.IDX when there are group folders on that postoffice will make the group
	folders inaccessible because FIXIDX resets the group folder type to be that of a
	shared folder. See the procedure below on how to repair this damage when it
	occurs.
	
	Syntax
	------
	
	  fixidx< fld_dir idx_file owner>
	
	Where:
	
	 <fld_dir>       Indicates the directory that contains the
	                 folder (.FLD) files that should be used to
	                 build the new index file. For example, to
	                 rebuild the index (.IDX) file for the public
	                 folders system and the Mail database stored on
	                 drive M, use M:\FOLDERS\PUB.
	
	 <idx_file>      Indicates that the file will be used to store
	                 the new index file. This can be any name but
	                 should be the name of the index file for the
	                 directory you are dealing with. For example,
	                 with the prior example (for <fld_dir>), use
	                 M:\FOLDERS\PUB\FOLDROOT.IDX.
	
	 <owner>         Is the name of the person who will get
	                 ownership of all the folders in the index that
	                 is created. This parameter is necessary if you
	                 want to allow folders to be modified (using
	                 the Options, Folders, Modify command). Other
	                 users are given Read, Write, Delete
	                 privileges. For example, to give admin access
	                 to these folders, this field should be
	                 00000000. If you are giving access to a
	                 different user, you must know that user's
	                 eight-digit Mail ID number.
	
	Procedures
	----------
	
	As with all Microsoft Mail utilities, we highly recommend that you back up your
	Mail database before running FIXIDX. You must also back up the folder
	subdirectory you will be working with.
	
	1. To rebuild the index file for the public folders (assuming your Mail database
	  is on drive M), use the following command:
	
	  fixidx m:\folders\pub m:\folders\pub\foldroot.idx 00000000
	
	2. To rebuild the index file for a user's private folders, you will need to
	  determine the eight-digit ID number for that user by using the LISTUSER
	  utility included on the database utilities disk.
	
	  Once you know the ID number, type the following command (assuming your Mail
	  database is on drive M), substituting the user's eight- digit ID number for
	  <hexid>:
	
	  fixidx m:\folders\loc\<hexid> m:\folders\loc\<hexid>.idx
	  <hexid>
	
	Alternatives
	------------
	
	If the index file for a user's private folders is corrupted or missing, you can
	reset that user's folder from the Mail Administrator program by selecting
	Local-Admin, Folders, Reset, selecting the user, and pressing ENTER.
	
	Repair Procedure for Group Folders
	----------------------------------
	
	The following steps describe how to change the byte to indicate the current
	status of the folder to be a shared folder. It is not possible to directly
	change the folder back to a group folder; instead, the folder is designated as a
	shared folder:
	
	1. Before you run DEBUG on the .FLD file, you must run FIXFLD on that folder.
	
	2. Run DEBUG on the folder in question and change the 49th byte from 02 to 03.
	  For example:
	
	  a. Type the following and press ENTER:
	
	  " debug 00000003.fld" (without the quotation marks)
	
	  b. At the hyphen ( - ) prompt, type the following and press ENTER:
	
	  " e0131" (without the quotation marks)
	
	     DEBUG displays the following
	
	  xxxx:0131 02
	
	     where XXXX will vary from machine to machine.
	
	  c. Type the following lines and press ENTER after each line (for clarity, the
	     hyphen prompt is not shown):
	
	  " 03
	  w
	  q" (without the quotation marks)
	
	     This will reset the folder's internal definition to be that of a shared
	     folder. The administrator must then create a new group folder, move the
	     messages from the old folder to the new folder, and then delete the old
	     folder to restore group access.
	
	GIMPORT.EXE
	-----------
	
	Summary
	-------
	
	The GIMPORT utility creates, deletes, and modifies postoffice address list (POL)
	groups that contain Microsoft Mail users and X.400, FAX, SMTP, SNADS, PROFS, and
	MHS gateway users.
	
	GIMPORT.EXE requires that the users being added to a group be present in the POL
	prior to running GIMPORT. You can automatically add users to the POL by using
	the IMPORT.EXE utility with the [ASCII 150]a option. IMPORT.EXE ships with
	Microsoft Mail and is present in the MAILEXE subdirectory. Please refer to the
	Microsoft Mail Administrator[ASCII 146]s Guide for more information on the
	IMPORT.EXE program.
	
	Purpose
	-------
	
	The administrator can create groups in the POL that contain users defined on the
	local postoffice as well as users defined on external postoffices or as gateway
	addresses. Microsoft Mail has a limitation that any groups that contain external
	users cannot be exported to other Microsoft Mail postoffices, and these groups
	cannot be included in directory synchronization. This poses a problem in many
	organizations that have several Microsoft Mail postoffices and need all their
	users to be able to send mail to groups containing users on several different
	postoffices.
	
	There is no method for creating such cross-postoffice groups only once and then
	exporting these groups to other postoffices. The groups can be exported through
	the Mail Administrator program, and when a user on the postoffice where the
	group was created sends mail to the group, all users (local and external)
	receive the message. However, when a user on another postoffice sends mail to an
	exported group, only those users defined on the postoffice where the group was
	created receive the mail message; external users in that group do not. Hence,
	the only way to allow all users on all postoffices to successfully send mail to
	the same group of users is to create that group on all postoffices. For large
	organizations with several postoffices and thousands of users, this process of
	can be very time consuming and prone to error.
	
	GIMPORT.EXE makes this process easier. Although you still need to create the
	groups on every postoffice, you can automate this task to a certain degree. To
	use GIMPORT, manually create the group on one postoffice, and then extract the
	group information to a text file. The information in the text file can then be
	imported to other postoffices.
	
	System Requirements
	-------------------
	
	GIMPORT requires the following system hardware and software:
	
	- An 80286 or higher computer with a minimum of 500K of extended or expanded
	  memory. The actual amount of extended or expanded memory required may be
	  greater than 500K, depending on the number of entries in the POL
	  (ADMINSHD.NME).
	
	- MS-DOS version 3.3 or later.
	
	When to Use
	-----------
	
	Use this utility to create, delete, or modify groups on the postoffice. If the
	group is small (fewer than 20 users), contains only local users, or if the
	number of groups is small (fewer than 5 groups), the Mail Administrator program
	can be more efficient in creating and maintaining the group.
	
	Side Effects
	------------
	
	New groups are deleted or created, and existing groups are modified.
	
	Syntax
	------
	
	  gimport admin [-d[drive|path]] [-ffilename] [-i[filename]] [-llogfile] -
	  ppassword [-r] [-s] [-v] [-x[filename]] [-y] [-?]
	
	Where:
	
	  admin          Is the mailbox sign-on ID of a Mail
	                 administrator (required).
	
	-d[drive|path] Specifies the location of the Mail data files. Drive
	                 specifies the drive on which the Mail
	                 data files reside (the default is drive M), and path
	                 specifies the path to the Mail database files.
	
	 -ffilename     Specifies the output file that contains the
	                 group definition and the group users. This file is not
	                 compatible with the IMPORT.EXE utility.
	
	  -i[filename]   Specifies an output file that does not contain
	                 the group definition. This file is compatible with the
	                 IMPORT.EXE utility. The default name for this file is
	                 GRPUSERS.DAT.
	
	  -llogfile      Specifies the location of the log file.
	
	  -ppassword     Specifies the mailbox password of the Mail
	                 administrator (required).
	
	  -r             Removes all postoffice address list groups and
	                 resets all the group files to default values. The
	                 following files are reset: ADMIN.GRP, ADMINSHD.GRP,
	                 GROUP.GLB, GRPMEM.GLB. In addition, the groups are
	                 removed from the ADMIN.NME and ADMINSHD.NME. The records
	                 in the ACCESS.GLB file are modified to reset the pointer
	                 into the GRPMEM.GLB. All the .MEM files are removed from
	                 the .MEM directory.
	
	  -s             Prevents name sorting of the members of the
	                 groups extracted from the postoffice. By default, sorting
	                 is turned on. This option can be used to speed up
	                 execution of the program when you extract extremely large
	                 groups.
	
	  -v             Displays/logs detailed logging information.
	
	  -x[filename]   Specifies which groups are to be extracted. If no
	                 filename is specified, all groups are extracted.
	
	  -y             Overrides the confirmation message.
	
	  -?             Shows the Help screen.
	
	File Formats
	------------
	
	The output file created with the -f option is a text file containing the group
	transactions, which consists of the group name, followed by the group members.
	The format of the IMPORT-compatible file created with the -i option is the same,
	except the group name is not present. The format of the file used by the extract
	option (-x) is only the alias of the group, with each alias on a separate line.
	
	Group Transaction File
	----------------------
	
	Each group transaction is on a separate line. Each of these lines contains four
	mandatory entries.
	
	  First Entry
	
	  The transaction type: G, A, D, R, P, or #.
	
	  Note: This transaction type must appear in column 1.
	
	    Transaction      Meaning
	    Type Code
	    --------------------------------------------------------------
	        G      Add/modify the following group to the POL. The list
	               of members should follow this line. If the group
	               does not exist in the POL, it is assumed to be a
	               new group and is created. If the group does exist,
	               the transactions following this line are assumed to
	               be modifications to the existing group.
	
	        A      Add the following address to the last group defined
	               by the last G transaction type.
	
	        D      Delete the following address from the last group
	               defined by the last G transaction.
	
	        R      Replace the following group with the users defined
	               in following transactions. All transactions for this
	               group can only be of type A.
	
	        P      Purge (delete) the following group from the POL.
	
	        #      Comment line. Ignored.
	
	  Second Entry
	
	  The alias. This can be from 1 to 30 characters long. Aliases must start in
	  column 3 or be separated from the first entry by a tab.
	
	  Third Entry
	
	  The address type. Follow it with a colon (:). This address type must start in
	  column 34 or be separated from the second entry by a tab. Only the following
	  address types are supported: PCM, X400, FAX, SMTP, SNADS, and PROFS.
	
	  Fourth Entry
	
	  The address. It immediately follows the address type and must be that type of
	  address. For more information about the proper address format, see the "The
	  Import Utility" section in Appendix A of the Microsoft Mail
	  Administrator[ASCII 146]s Guide.
	
	Sample Input File
	-----------------
	
	  # New group to be created
	  G Group 1                        PCM:network1/30po1/trial
	  A User 0                         PCM:network1/30po1/auto0
	  A User 1                         PCM:network1/30po1/auto1
	
	  # Group to be deleted
	  P Trial Group                    PCM:network1/30po1/trial
	
	  # New group with gateway addresses
	  G Gateway Group 1                PCM:network1/30po1/gtwygrp
	  A Sample User 0                  SMTP:user0@dummy.host.edu
	  A Sample User 1                  SNADS:SNADSNET/DGN1/user1
	  A Sample User 2                  PROFS:VMGATE/NODE1/user2
	
	Procedures
	----------
	
	As with all Microsoft Mail utilities, we highly recommend that you back up your
	Mail database before you run GIMPORT.EXE. As a minimum, you should back up the
	following directories.
	
	  - GLB
	  - NME
	  - GRP
	  - MEM
	
	The following examples describe how GIMPORT.EXE can be used.
	
	Example 1 - Automatically copying a
	group from one postoffice to another.
	-------------------------------------------------------------------------
	
	This example assumes you have created a group named "Test Group" on Postoffice 1
	(on drive M) that contains only the user "Administrator" for Postoffice 1 and
	you want to create this group on Postoffice 2 (on drive N). Run the following
	command at the MS-DOS prompt:
	
	  gimport -dm admin -ppassword -xgrpext.inf -fgroups.ext -igrpusers.dat
	
	GRPEXT.INF is a text file that contains the name of the group to be extracted.
	For this example, the GRPEXT.INF file contains the following text:
	
	  Test Group
	
	GROUPS.EXT is the file to which the group information is written out. The
	following is the contents of GROUPS.EXT after the above command is executed:
	
	  # - Microsoft Mail Group Import Program v3.0b
	  # - Started: 05/13/94  07:49
	
	  G Test Group                     PCM:NET/PO/TestGroup
	  A Administrator                  PCM:NET/PO/Admin
	
	GRPUSERS.DAT is the file to which only user information and not group information
	is written to. The following is the contents of the GRPUSERS.DAT after the above
	command is executed:
	
	   # - Microsoft(R) Mail Group Import Program v3.0b
	   # - Started: 05/13/94  07:55
	
	   # The data in this file is for use with the Microsoft Mail Import.exe
	     Utility
	
	   A Administrator                  PCM:NET/PO/TestGroup
	
	To import the group into Postoffice 2, all the users in the group must be present
	in the POL on Postoffice 2. To add these names to the POL on Postoffice 2 run
	the following command:
	
	  import -dn admin -ppassword -a -fgrpusers.dat
	
	After executing this command, you will see warning messages for those users that
	already exist on the Postoffice 2. These messages can be ignored.
	
	To create the group on Postoffice 2 and add the users to it, use the GROUPS.EXT
	file (containing the G transaction type) and run the following command:
	
	  gimport -dn admin -ppassword -fgroups.ext
	
	Example 2 - Resetting all group files on a postoffice.
	------------------------------------------------------
	
	In certain cases, it may be necessary to reset all the group files on a Microsoft
	Mail postoffice. This can be done using GIMPORT.EXE with the following command:
	
	  gimport -dm admin -ppassword -r
	
	The above example assumes that the postoffice on which you wish to reset all the
	group files, exists on drive m.
	
	In the above examples, a log file can be created by using the -l<log file>
	option. Verbose logging can be turned on by the -v command line option.
	
	LISTUSER.EXE
	------------
	
	Summary
	-------
	
	The LISTUSER utility displays a list of all users on a given postoffice,
	including their associated eight-digit user ID numbers (these numbers are used
	by the Mail system to identify each individual user). LISTUSER will work with
	version 2.1 and later postoffices. LISTUSER also shows the size of the .MMF
	files on the server, and can search for a specific name on the postoffice.
	
	When to Use
	-----------
	
	Use this program whenever you need to know the ID number associated with any of
	your users.
	
	Side Effects
	------------
	
	None; this is a read-only utility.
	
	Syntax
	------
	
	  listuser <admin> -p<password> [-d<drive>] [-f] [-x]
	  [-n<name>] [-s] [-?]
	
	Where:
	
	 <drive>         Is the drive where the Mail database is
	                 located (the default is m).
	
	 -f              Shows the user's full name in addition to the
	                 alias [optional].
	
	 -x              Shows the delete status of the users and any
	                 deleted users [optional].
	
	 -n<name>        Displays only those names that match the
	                 <name> parameter. This option by itself will
	                 search the alias and the hex ID. If the f
	                 option is specified, the full name field is
	                 searched.
	
	 -s              Shows the size of any .MMF files that are on
	                 the server.
	
	 -?              Shows the usage screen.
	
	Alternatives
	------------
	
	You can also determine a user's ID number by performing the following steps:
	
	1. Run Mail and log on as the user.
	
	2. Select Options, Folders, Private Storage.
	
	3. Select Local-Storage.
	
	4. Type c:\ (or whichever local drive is available).
	
	5. Quit Mail.
	
	6. Type DIR C:\*.IDX.
	
	  The filename you see is that user's ID number.
	
	7. To return the folders back to the server, re-run Mail, select Options,
	  Folders, Private Storage, and then select Server.
	
	MOVEFOLD.EXE
	------------
	
	Summary
	-------
	
	The MOVEFOLD utility allows a user's private folders to be moved to another
	postoffice. This utility is typically required when a user is changing physical
	locations and becomes a member of a new Microsoft Mail postoffice. MOVEFOLD will
	work only with Mail 2.1x postoffices and Mail 3.0 or 3.2 postoffices that do not
	have enhanced security enabled, and only affects the MS-DOS client's private
	folders.
	
	When to Use
	-----------
	
	You can use this program whenever you move a user's folders from one postoffice
	to another.
	
	For more information on moving folders, see the "Alternatives" section below. You
	can use this information if running MOVEFOLD is not possible or practical.
	
	Side Effects
	------------
	
	None; this program performs read-only operations on the Mail database files.
	
	Syntax
	------
	
	  movefold <mailbox> -p<password> -d<drive>
	  [-e<exportfile> | -i<importfile>]
	
	Where:
	
	 <mailbox>       Is the user's current mailbox name.
	 <password>      Is the user's current password.
	 <drive>         Is the drive where the Mail database is
	                 located.
	 <exportfile>    Is the export filename.
	 <importfile>    Is the import filename.
	
	Procedures
	----------
	
	As with all Microsoft Mail utilities, we highly recommend that you back up your
	Mail database before running MOVEFOLD; you must also make a backup of the folder
	subdirectory you will be working with.
	
	1. Make sure each Mail user moves his or her private folders back to the server
	  by running the MS-DOS Mail client and selecting Options, Folders,
	  Private-Storage, Server. Do not proceed until all private folders have been
	  moved back to the file server postoffice.
	
	  Because the MOVEFOLD utility must use the user's password, the Mail system
	  administrator may have to use the Mail Administrator program to use the
	  Local-Admin, Recover command to recover all of the passwords back to the
	  global default password.
	
	2. The MOVEFOLD utility must be run from a drive where there is enough disk
	  space to store all of an individual's private folders.
	
	3. All the parameters of the MOVEFOLD utility must be used to guarantee its
	  performance.
	
	Example
	-------
	
	To move the folders of a user called Chris, use the following command to export
	the folders from Chris's user account on the postoffice on drive M to the file
	CHRFOLD.ARC.
	
	  movefold chris -ppassword -dm -echrfold.arc
	
	The following command imports the CHRFOLD.ARC file into Chris's user account on
	drive N:
	
	  movefold chris -ppassword -dn -ichrfold.arc
	
	NOTE: If the destination postoffice is not currently available, the MOVEFOLD
	import command can be run at a different time.
	
	Alternatives
	------------
	
	Folders can also be moved by the owner of the folders using the following
	procedure:
	
	1. Run the MS-DOS Mail client and log on to the user's current mailbox.
	
	2. Select Options, Folders, Folders, Archive. Select each folder and select a
	  filename to store it as, and make a note of the folder name.
	
	3. Run the MS-DOS Mail client and log on to the user's new mailbox.
	
	4. To re-create each folder, select Option, Folders, Create, and enter the
	  folder name and the access rights you want associated with that folder.
	
	5. To restore folders to the archived folders, select Options, Folders, Folders,
	  De-Archive, and then select each folder and select the filename.
	
	MVCAL.EXE
	---------
	
	Summary
	-------
	
	A user's online calendar file is not named with the same eight-digit ID number as
	the user's Mail message file (MMF), nor is it named with the user's name for
	security reasons. You can use the MVCAL utility to locate a specific user's
	online calendar file (if the file is damaged, for example).
	
	When to Use
	-----------
	
	Use this program if you want to find the owner of a particular calendar (.CAL)
	file on the server if that CAL file is corrupted or damaged in some way.
	
	Side Effects
	------------
	
	This utility will find the calendar file for the user name specified and rename
	it <username>.BAD. After the calendar file is renamed, a new file will be
	created the next time the user signs in. This new calendar file will be created
	from the user's local calendar file.
	
	Syntax
	------
	
	  mvcal <username> [-d<drive> -p<password>]
	
	Where:
	
	 <username>      Is the user with the corrupted calendar file.
	 <drive>         Is the path to the Mail database (the default
	                 is m).
	
	 <password>      Is the password for the Schedule+
	                 administrator (not the Mail administrator).
	
	Example
	-------
	
	To rename JohnDoe's calendar file on drive N, where the Schedule+ administrator's
	password is "password":
	
	  mvcal JohnDoe -dn -ppassword
	
	NETDUMP.EXE
	-----------
	
	Summary
	-------
	
	The NETDUMP utility displays information for all external postoffices and
	gateways defined on the given postoffice. The utility displays the
	network/postoffice names, the mailbag (.MBG) file for the external postoffice,
	whether the postoffice is routed indirectly via another postoffice, the
	definition (.XTN) file where the external postoffice is located, and the
	connection type (LAN, modem, or X.25) for the postoffice.
	
	For gateways, the NETDUMP utility displays (1) the gateway name; (2) the gateway
	postoffice if the given postoffice is a downstream postoffice; (3) the mailbag
	for the gateway; (4) the definition (.XTN) file for the gateway; and (5) for
	FFAPI, PROFS, and SNADS gateways, the node name and node mailbag.
	
	The current version of NETDUMP recognizes the PROFS, SNADS, MCI, X.400, MSMAIL
	(Mail Connection), FAX, SMTP, AT&T, MHS, and FFAPI gateways.
	
	When to Use
	-----------
	
	Use this program to display the external postoffice and the gateway routing and
	definition information.
	
	Side Effects
	------------
	
	None; this is a read-only utility.
	
	Syntax
	------
	
	  netdump <admin> [-d[<drive>|<path>]] [-f<filename>]
	  [-l<logfile>] -p<password>[-v] [-?]
	
	Where:
	
	 <admin>             Is the mailbox sign-on ID of a Mail administrator
	                     (required).
	
	 -d[<drive|path>]    Specifies the location of the Mail data files.
	                     <Drive> specifies the drive on which the Mail data
	                     files reside (the default is drive M), and <path>
	                     specifies the path to the Mail database files.
	
	 -f<filename>        Specifies the file in which to save the
	                     network/postoffice information that is displayed.
	
	 -l<logfile>         Specifies the file to which logging information is
	                     written (optional).
	
	 -p<password>        Specifies the mailbox password of the administrator
	                     ID used (required).
	
	 -v                  Displays/logs detailed logging information.
	 -y                  Suppresses video output.
	 -?                  Displays the help menu.
	
	Example
	-------
	
	To display the information for a postoffice located on drive M:
	
	  netdump admin -ppassword -dm
	
	REVERT.EXE
	----------
	
	Summary
	-------
	
	The REVERT utility resets the "read"and "new" counters in the Mail Message File
	(MMF). At times corruption in the MMF can make these counters indicate that a
	message has not been read, when in fact there are no new or unread messages. The
	CheckMMF utility that is part of version 3.0b or later of Microsoft Mail for
	Windows can also reset these numbers, but this method can cause other corruption
	if the MMF file is not otherwise damaged.
	
	Once these counters are reset, the Microsoft Mail for Windows client will
	recalculate and display the correct values.
	
	When to Use
	-----------
	
	Use this program when the "new" or "unread" counters displayed by the Microsoft
	Mail for Windows client in the MMF are not correct.
	
	Use the LISTUSER utility to determine the hexadecimal ID of the user whose MMF
	needs to be reset.
	
	Side Effects
	------------
	
	None.
	
	Syntax
	------
	
	  revert <filename>
	
	Where:
	
	 <filename>     Is the path to the MMF that is to be reset. The full
	                path must be specified.
	
	Example
	-------
	
	To reset the counter values in the 00000000.MMF file on drive P:
	
	  revert p:\mmf\00000000.mmf
	
	TO OBTAIN THIS DOCUMENT
	-----------------------
	
	This document has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/WA0641/
	
	
	Additional query words: 2.1x 3.00 3.20 dbutils
	
	======================================================================
	Keywords          : kbenv kbfile 
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail21xSearch
	Version           : WINDOWS:2.1x,3.0,3.2
	
	=============================================================================
	
