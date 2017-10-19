---
layout: page
title: "Q103946: PC WRmt: Mail Remote MSRMTUI.DLL Version 3.2.0.4013 Update"
permalink: /kb/103/Q103946/
---

## Q103946: PC WRmt: Mail Remote MSRMTUI.DLL Version 3.2.0.4013 Update

	Article: Q103946
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the MSRMTUI.DLL that is included with
	version 3.2 of Microsoft Mail Remote for Windows.
	
	For complete information about obtaining and installing the MSRMTUI.DLL file, see
	the following sections:
	
	- To download the updated file
	
	- To update your MSRMTUI.DLL file
	
	MORE INFORMATION
	================
	
	This update contains MSRMTUI.DLL, a replacement for the MSRMTUI.DLL file that is
	included with version 3.2 of Microsoft Mail Remote for Windows. This replacement
	file provides additional enhancements to the original MSRMTUI.DLL file that
	resolve the following problems:
	
	- The address list becomes corrupted when it is updated twice in the same
	  session of Mail Remote for Windows.
	
	- If the user forgets his or her password or if the password is changed while
	  the remote driver is in use, the password cannot be reset.
	
	  NOTE: To resolve this problem, two files must be updated: the MSRMTUI.DLL file
	  (included in this update) and the ADMIN.EXE file provided in the Microsoft
	  Mail for PC Networks version 3.2a Update. For details on this procedure
	  please see the "To reset the password for a Mail Remote for Windows user"
	  section below.
	
	- Invalid extended information may be displayed when you are obtaining details
	  on a user from the Global Address List. The invalid information consists of
	  default template fields associated with a postoffice other than the one on
	  which the user's account resides. This condition can occur if customized user
	  template *.TPL files are present on the remote user's workstation. Another
	  possible symptom of this condition is receiving one of these messages when
	  you are obtaining details on users from the GAL: "A GLB file on your server
	  is corrupt" or "Address is no longer valid." The updated MSRMTUI.DLL file
	  (included in this update) will prevent the customized user template *.TPL
	  files from being copied to the remote user's workstation.
	
	  NOTE: To remove the customized user template *.TPL files from an existing
	  installation of Mail Remote for Windows, the user must first follow the "To
	  replace your MSRMTUI.DLL file" procedure outlined below to install the
	  updated MSRMTUI.DLL file, and then follow one of the procedures outlined in
	  the "To update your address lists" section to obtain new address lists from
	  the postoffice.
	
	- A message remaining in the Outbox could be misdirected if the remote address
	  book was updated without uploading messages. The client will now check for
	  the outbound messages prior to updating the address book. To ensure this fix
	  works correctly, the following DLLs must be upgraded in conjunction with this
	  DLL:
	
	     MSRMT.DLL    version 3.2.4013
	     MSRMTCN.DLL  version 3.2.4013
	     MSRMTSU.DLL  version 3.2.4013
	     MSRMTTR.DLL  version 3.2.4013
	
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Msrmtui.exe now
	  (http://download.microsoft.com/download/pcmail/Update/11/WIN/EN-US/Msrmtui.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After you download MSRMTUI.EXE to a clean directory, run it (by typing "msrmtui"
	(without the quotation marks) at the MS-DOS prompt) to extract the contents of
	the file. You should receive the following files:
	
	  MSRMTUI.DLL (165,136 bytes, dated 06-15-95, 6:36 P.M.)
	  README.TXT
	
	To replace your MSRMTUI.DLL file
	--------------------------------
	
	1. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <path>:\msrmtui.dll <destination> " (without the quotation
	  marks)
	
	  where <path> is the drive and directory where you ran the self-
	  extracting MSRMTUI.EXE file and <destination> is the drive and
	  directory where your MSRMTUI.DLL file currently resides. For example, if you
	  ran the self-extracting file from the TEST directory on drive D, and your
	  MSRMTUI.DLL file is located in the Windows SYSTEM subdirectory on drive C,
	  type the following command:
	
	  " copy d:\test\msrmtui.dll c:\windows\system " (without the quotation marks)
	
	To update your address lists
	----------------------------
	
	Perform one of these procedures if you want to remove the customized user
	template *.TPL files from an existing installation of Mail Remote for Windows:
	
	- Update the address lists by using a modem connection to the postoffice
	  established through the Mail Remote user interface:
	
	  1. From the View menu, choose Connect Now.
	
	  2. Select the Update Address Lists option.
	
	  3. Choose the OK button.
	
	- Update the address lists by using a LAN connection to the postoffice and the
	  Mail System Selector:
	
	  1. Obtain a network connection to the postoffice and edit the [Microsoft
	     Mail] section of your MSMAIL.INI file to add a ServerPath= line with the
	     actual location of the Mail data files.
	
	  2. With the Microsoft Mail for PC Networks driver current, exit and sign out
	     of Mail.
	
	  3. Use the Microsoft Mail System Selector to switch from the Microsoft Mail
	     for PC Networks driver to the Mail Remote driver. The Mail Remote dialog
	     box appears.
	
	  4. To copy the address lists from the postoffice to your remote computer,
	     select the Copy Address List From Postoffice option.
	
	  5. Choose the OK button.
	
	- Update the address lists by using a new data disk:
	
	  1. Obtain a new data disk from the Mail Administrator.
	
	  2. Copy the files from the new data disk to the
	     <drive>:\<Windows_dir>\MSMAIL\MSRMT\USERINFO subdirectory.
	
	  3. Launch Mail Remote for Windows to expand the address lists.
	
	To reset the password for a Mail Remote for Windows user
	--------------------------------------------------------
	
	To reset the password, you must ensure that the user's data disk was created
	using the version of ADMIN.EXE provided in the Microsoft Mail for PC Networks
	version 3.2a Update.
	
	Have the user do the following:
	
	1. Connect to the network on which his or her postoffice resides.
	
	2. Use the Mail Selector to change to the PC Mail LAN driver.
	
	You can then use ADMIN.EXE to reset the user's password. Once this is done, have
	the user do the following:
	
	1. Log in to Mail using the reset password.
	
	2. After successfully logging in, the user can change the password.
	
	3. Use the Mail Selector to switch back to the remote driver.
	
	Additional query words: 3.20 wga
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
