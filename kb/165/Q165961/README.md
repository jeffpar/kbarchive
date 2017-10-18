---
layout: page
title: "Q165961: XCLN: How to Fully Remove the Windows 95 and Windows NT Clients"
permalink: kb/165/Q165961/
---

## Q165961: XCLN: How to Fully Remove the Windows 95 and Windows NT Clients

	Article: Q165961
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0;Win95:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbtshoot
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you attempt to remove Microsoft Exchange Client by clicking the Add/Remove
	in Control Panel or clicking Add/Remove in Exchange Client Setup, Exchange
	Client does not seem to be removed.
	
	CAUSE
	=====
	
	Several registry keys and files remain.
	
	WORKAROUND
	==========
	
	To remove Microsoft Exchange Windows 95 and Windows NT clients from a computer
	that does not also have Microsoft Exchange Server installed on it, follow these
	steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. If you plan to reinstall the client later, synchronize any .ost files, and
	  back up any .pst and .pab files. (This assumes there is no corruption in the
	  files.)
	
	  NOTE: Backing up .ost files will not work. That information will NOT be
	  recoverable! Only a synchronization with the Exchange Server Mailbox will
	  ensure there is no loss of information.
	
	2. Log out of any applications.
	
	3. Back up the entire client computer. (Later, registry keys will be removed.
	  Full backup is required unless recovery does not matter.)
	
	4. In Control Panel, click Add/Remove Software. Remove any Exchange and
	  messaging options.
	
	5. Go to the latest exchange Setup and click Remove All. ("Latest" Setup means
	  the highest version installed on this computer.)
	
	6. Start Registry Editor.
	
	7. Go to the following key in the registry:
	
	  HKEY_LOCAL_ MACHINE\Software\Microsoft...
	
	8. Delete the Exchange and Windows Messaging folders and subkeys.
	
	9. Exit Registry Editor.
	
	10. Do a search on *exch* and remove all remaining files.
	
	11. Remove the <system root>\<windows>\system32\Msremind.wav file.
	
	12. Restart the computer.
	
	To reinstall Exchange Client:
	
	1. Rename the Mapi.dll, Mapi32.dll, and Mfcans32.dll to *.old. These files are
	  usually located in the <system root>\<windows>\system32\
	  directory.
	
	2. Restart the computer.
	
	3. Reinstall Exchange Client.
	
	4. You can point the client to the "old" .pab and .pst files. However, if you
	  are reinstalling due to corruption issues, it's best to test the client with
	  new files. Then, import the old information into the new files. ( On the File
	  menu, click Import, and then click .pab and so on.)
	
	5. If all is OK, remove the Mapi.old and Mapi32.old files (renamed in the step 1
	  above).
	
	To remove a Microsoft Exchange Windows NT client from a computer that also has
	Microsoft Exchange Server installed, follow these steps:
	
	1. In Control Panel Services, stop System Attendant.
	
	2. In Control Panel Add/Remove Programs, select Microsoft Exchange and then
	  click Add/Remove.
	
	3. Click Remove All.
	
	4. When asked if you want to remove all shared components, click KEEP.
	
	5. Once Setup is done, rename the Exchange directory where Exchange Client was
	  installed.
	
	6. Start Registry Editor . Export the the following keys and then delete them:
	
	  NOTE: Make sure you export the keys prior to deleting them, in case of error.
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Exchange\Client
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Exchange\Forms Registry
	
	  Delete the following String Value:
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Exchange\Exchange Provider
	     "Rpc_Binding_Order"
	
	7. Restart the computer.
	
	To reinstall Exchange Client on the computer running Exchange Server:
	
	1. In Control Panel Services, stop System Attendant.
	
	2. Reinstall Exchange Client.
	
	3. Restart computer and make sure all Exchange Server Services and the Exchange
	  Client function properly.
	
	
	======================================================================
	Keywords          : kbsetup kbtshoot 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WinNT:4.0;Win95:4.0
	Issue type        : kbbug
	
	=============================================================================
	
