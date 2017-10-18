---
layout: page
title: "Q107443: PC Adm: Microsoft Mail ADMIN.EXE 3.2.17 Update"
permalink: kb/107/Q107443/
---

## Q107443: PC Adm: Microsoft Mail ADMIN.EXE 3.2.17 Update

	Article: Q107443
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the ADMIN.EXE file included with versions
	3.2 and 3.2a of Microsoft Mail for PC Networks.
	
	For complete information about obtaining and installing the ADMIN.EXE file, see
	the following sections:
	
	- To download the updated file
	
	- To update your ADMIN.EXE file
	
	MORE INFORMATION
	================
	
	This update contains ADMIN.EXE, a replacement file for the ADMIN.EXE file
	included with versions 3.2 and 3.2a of Microsoft Mail for PC Networks. This
	update includes the following modifications:
	
	- With the earlier version of this file, a corrupt .MAI file could be created
	  when you export the address list to a large number of postoffices. ADMIN.EXE
	  has been modified so that the correct .MAI file is created when address lists
	  are exported.
	
	- With the earlier version of this file, a corrupt SRVCONF.GLB file could be
	  created when you add a directory synchronization (Dir- Sync) requestor on a
	  computer that has an EtherExpress(TM) 16 network card and is running the
	  Ethernet_II protocol. ADMIN.EXE has been modified so that it uses a buffer
	  size of 512 bytes instead of 1K for its buffered I/O.
	
	- If a Mail Remote for Windows user forgets his or her password or if the
	  password is changed while the remote driver is in use, the password can now
	  be reset.
	
	  NOTE: This password reset only applies to the server files. Local .MMF files
	  will not be affected by this change.
	
	
	Notes:
	
	- To resolve this problem, two files must be updated: the ADMIN.EXE file
	  (included in this update) and the MSRMTUI.DLL file (update included in
	  MSRMTUI.EXE on the MSL).
	
	- To reset the password, you must ensure that the user's data disk was created
	  using ADMIN.EXE version 3.2.12.
	
	- Local postoffice users added with the ADMIN.EXE utility will no longer be
	  assigned an invalid identification number if the TID.GLB file is locked open.
	  Also, batch creation of local postoffice users with the ADMIN.EXE utility
	  while the TID.GLB file is locked open no longer results in the same invalid
	  identification number being assigned to multiple users.
	
	- When you use ADMIN.EXE to change the routing type defined for a hub
	  postoffice, the routing type definition for any downstream postoffice is also
	  updated to match the routing type of the hub postoffice.
	
	- When you use ADMIN.EXE to remove users from a global group, access to group
	  folders associated with that global group is also removed.
	
	- Correct figures are now reported when you use the Mail Administrator program
	  to create reports that involve multiple postoffices with more than 32,768
	  users.
	
	This replacement file also resolves the following problems that can occur when
	you use version 3.2 or 3.2a of Microsoft Mail for PC Networks:
	
	- Groups with names 10 characters long can now be deleted successfully on other
	  postoffices. With versions of ADMIN.EXE earlier than 3.2.12, if a group was
	  deleted from a postoffice participating in Dir-Sync and its name was 10
	  characters long, other postoffices, including the Dir-Sync server, were
	  unable to delete the group from their .USR files.
	
	
	- When the Admin account mailbox is greater than eight characters in length,
	  the Keep Updates number will no longer change when you change the
	  Administrator's Name in Config, DirSync, Server, Options.
	
	  NOTE: To fix this problem, you need ADMIN.EXE version 3.2.13 or later
	  (included in this update) and SRVMAIN.EXE version 3.2.13 or later, LISTDS.EXE
	  version 3.2.1, and SCONFIX.EXE (updates included in SRVUPD.EXE on the MSL).
	
	
	- When you modify a remote client's account using Admin, Local Admin, Modify,
	  the remote user's Custom View is no longer reset to the Default view.
	
	
	- ADMIN.EXE will now report an error writing to nnnnnnnn.XTN file, if locked
	  open by another process.
	
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Admupd.exe now
	  (http://download.microsoft.com/download/mail35pcnet/Update/1/WIN98/EN-US/Admupd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After you download ADMUPD.EXE to a clean directory, run it (by typing "admupd"
	(without the quotation marks) at the MS-DOS prompt) to extract the contents of
	the file. You should receive the following files:
	
	  ADMIN.EXE (534,141 bytes, dated 04-13-95, 4:02 P.M.)
	  README.TXT
	
	To update your ADMIN.EXE file
	-----------------------------
	
	At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <path>:\admin.exe <destination>" (without the quotation
	  marks)
	
	where <path> is the drive and directory where you ran the self- extracting
	ADMUPD.EXE file and <destination> is the drive and directory where your
	ADMIN.EXE file currently resides. For example, if you ran the self-extracting
	file from the TEST directory on drive D, and your ADMIN.EXE file is located in
	the MAILEXE directory on drive C, type the following command:
	
	  " copy d:\test\admin.exe c:\mailexe" (without the quotation marks)
	
	Additional query words: 3.20 admin
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
