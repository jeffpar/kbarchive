---
layout: page
title: "Q175107: XCLN: Directory for the Local Exchange Offline Add"
permalink: kb/175/Q175107/
---

## Q175107: XCLN: Directory for the Local Exchange Offline Add

	Article: Q175107
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry  Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you try to download the Offline Address Book, the following error message
	may occur:
	
	  The directory for the local Microsoft Exchange offline address book
	  files does not exist.
	
	If you click OK, the following message occurs:
	
	  Unable to download the offline Address Book. The Microsoft Exchange Address
	  Book could not be accessed.
	
	NOTE: Only Exchange clients installed from a network share point exhibit these
	symptoms.
	
	CAUSE
	=====
	
	The Default.prf file on the network share point has the OfflineAddressBookPath
	value set incorrectly, which causes the error message for the profiles created
	from it.
	
	The location specified in the Exchange user's profile for the Offline Address
	Book files is invalid. The location of the Offline Address Book is not
	configurable through the Exchange client. By default the Offline Address Book is
	kept in the Windows directory.
	
	RESOLUTION
	==========
	
	The following method can be used to modify the Default.prf. If the Default.prf
	file is present, edit the file using a text editor such as Notepad, and complete
	these steps:
	
	1. In the [Service2] section, add this entry:
	
	     OfflineAddressBookPath= <path to the offline Address Book>
	
	  If this entry already exists, modify the path to what you want.
	
	2. Save the file, and exit out of the text editor.
	
	New profiles created using this Default.prf will now point to the correct
	location for the Offline Address Book files.
	
	To modify an existing profile, perform the following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	Assuming that the Offline Address Book location needs to be modified for a
	profile with the name "Default Exchange Profile," use the procedure that is
	appropriate for your operating system to change it.
	
	For Windows NT:
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key:
	
	  HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows NT\Currentversion
	  \Windows Messaging Subsystem\Profiles\Default Exchange Profile
	
	3. Open the following key:
	
	  13dbb0c8aa05101a9bb000aa002fc45a
	
	4. Now look for the value: 001e660e This should be type REG_SZ and should
	  contain the path to OAB files. Modify the string associated with this value
	  to be the new directory for the OAB files. If this value does not exist, then
	  add a new value with the following information:
	
	     Value Name: 001e660e
	     Data Type: REG_SZ
	     String: <Location of the OAB Files>
	
	For Windows 95:
	
	1. Run Registry Editor (Regedit.exe).
	
	2. Go to the following key:
	
	  HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows Messaging
	  Subsystem\Profiles\Default Exchange Profile
	
	3. Open the following key:
	
	  13dbb0c8aa05101a9bb000aa002fc45a
	
	4. Now look for the value: 001e660e This should be type REG_SZ and should
	  contain the path to OAB files. Modify the string associated with this value
	  to be the new directory for the OAB files. If this value does not exist, then
	  add a new value with the following information:
	
	     Value Name: 001e660e
	     Data Type: REG_SZ
	     String: <Location of the OAB Files>
	
	For Windows 3.x:
	
	1. Open the Profiles.ini file and find the filename for the profile "Default
	  Exchange Profile." The file name could be 5d630a00 or something similar.
	
	2. Exit the editor and open the 5d630a00.ini file.
	
	3. Locate the section with the heading [13dbb0c8aa05101a9bb000aa002fc45a]. Look
	  for an entry with the name, 001e660e. The value of this entry is the path to
	  the OAB files. Modify the value to the location you prefer.
	
	  If this entry does not exist, locate the section with the heading
	  13dbb0c8aa05101a9bb000aa002fc45a] and add the following line to it:
	
	       001e660e=<path to OAB files>
	
	4. Open the client again and download the Offline Address Book.
	
	Additional query words: 8.0 8.01 8.02 8.03 8.04
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0,97
	Issue type        : kbprb
	
	=============================================================================
	
