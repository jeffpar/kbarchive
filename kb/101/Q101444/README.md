---
layout: page
title: "Q101444: Mac Wkst: Unable to Access Local Mail File"
permalink: /kb/101/Q101444/
---

## Q101444: Mac Wkst: Unable to Access Local Mail File

	Article: Q101444
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to sign into a mail account with version 3.1 of Microsoft Mail
	for AppleTalk Networks, the following alert dialog may be displayed:
	
	  This account is unable to access its local Mail file. Please enter the
	  password of the last account to use the Local Mail File. To work without a
	  Local Mail file, select Cancel.
	
	CAUSE
	=====
	
	Microsoft Mail writes a file to the Preferences folder on the local user's hard
	drive. This file can store mail locally. This file follows the naming convention
	of the user login to the server. Additionally, for security reasons, this file
	contains a copy of the user password used when logging into the mail server.
	
	The above alert is most commonly displayed when a user has forgotten the password
	to his or her mail account. The Network Manager can reset the password from the
	mail server; however, this interface does not allow the Network Manager the
	remote capability to reset the password of the local data file.
	
	This alert message can also be displayed if the user has multiple accounts such
	as "Network Manager" with different passwords assigned. As the network manager
	signs into different servers, the password he or she enters to log in to the
	server is also being checked against the password stored in the local mail file.
	If the passwords do not match, the above message will be displayed.
	
	RESOLUTION
	==========
	
	If the alert message is displayed as a result of the user forgetting their
	password and the Network Manager resetting the server-based password, the
	resolution is to rebuild the local data file with the Mail Tools application.
	For security reasons, Microsoft recommends only the Network Manager perform this
	function.
	
	If the alert message is displayed as a result of multiple accounts and different
	passwords, simply enter the password that was used last or click Cancel. If you
	choose Cancel, any mail stored locally will not be available.
	
	MORE INFORMATION
	================
	
	In addition to the resolutions listed above, the user can simply delete the
	Local Data File from his or her machine if no mail has been stored locally. Mail
	stored locally is identified by folders with black tabs across the top of the
	folder. If you are not sure whether local folders have been used, it is best to
	rebuild the Local Data File to reduce the risk of deleting mail.
	
	To delete the Local Data File, open the System folder, then the Preferences
	folder. Within that folder, another folder titled MS Mail Local Folders appears.
	Open that folder and drag the file that corresponds to the user to the Trash.
	
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
