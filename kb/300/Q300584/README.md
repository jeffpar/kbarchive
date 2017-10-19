---
layout: page
title: "Q300584: Deleting a cancelled user tile in MSN Explorer 6.0"
permalink: /kb/300/Q300584/
---

## Q300584: Deleting a cancelled user tile in MSN Explorer 6.0

	Article: Q300584
	Product(s): The Microsoft Network
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user installs MSN Explorer and sets up an MSN Internet Access account. The
	user cancels the original MSN Internet Access account through Customer Service,
	and then wants to set up another MSN Internet Access account in MSN Explorer. As
	the first account has been cancelled, the user cannot sign in to an account in
	order to delete it. In addition, the auto-dialer is still set to connect the
	user to the cancelled MSN Internet Access account.
	
	CAUSE
	=====
	
	A user has a new account set up at a retail store, comes home, and sets up a
	different account.
	
	RESOLUTION
	==========
	
	In MSN Explorer version 6.00.0010.0912, you can remove any user tile without
	being signed in to that particular account.
	You will need to open MSN Explorer and sign in to the account you want to keep.
	If you did not add a user tile before cancelling the second account, you will
	need to create a manual connection to the Internet.
	
	To change connection settings
	
	- Follow the directions in KB article Q294853 to create a manual connection
	  file ("connectoid") and set this connection as the default connection.
	
	You will then need to make sure that you are using MSN Explorer version
	6.00.0010.0912.
	
	To check the version number
	
	1. In the System tray, right-click the MSN butterfly icon.
	
	2. Click System Information.
	  The version of MSN Client should 6.00.0010.0912 or greater. If not, you will
	  need to update MSN Explorer.
	
	To update MSN Explorer
	
	1. In the top right corner of MSN Explorer, click More Choices.
	
	2. Click About MSN Explorer.
	
	3. In the new dialog box, click More Info.
	
	4. Scroll to the top of the new page, and under Update Information, click the
	  Update MSN Explorer now link.
	  MSN Explorer will download the newest update information. Once the download is
	  complete, Explorer will shut down and then restart with the latest version.
	
	To add a user tile
	
	- Start MSN Explorer, clicking the Add New User link on the Welcome screen, and
	  follow the instructions to add a new user.
	
	You are now ready to delete the user tile.
	
	To delete a user tile
	
	1. Sign in to MSN Explorer with the active user tile.
	
	2. Type Support Delete User in the address bar.
	  You will now see a list of all user tiles on the machine.
	
	3. Select the user tile for the cancelled account and click "Delete Now".
	  You should see a confirmation telling you that the user tile has been deleted.
	
	4. Click Sign Out.
	
	5. Click Connection Settings.
	
	6. If you used a manually created connection to sign in, click Change How to
	  Connect to the Internet and then click MSN Internet Access and click OK.
	
	7. Click Advanced Options.
	
	8. Click Reset My Dialing Password. MSN Explorer will now dial and connect. When
	  asked for your username and password, type in the username and password of
	  the account you want to keep, and click OK.
	
	If the steps above do not resolve the issue, a registry edit is required to
	remove the HKEY_CURRENT_USER\Software\Microsoft\MSN6 Registry key.
	
	Warning: Editing the Windows registry is a delicate process that may negatively
	affect the performance of the computer if done incorrectly. If you have never
	edited your Windows registry before, do not try this procedure on your own. In
	addition, it is strongly recommended that you back up the registry before
	performing these steps.
	
	To back up the contents of the registry
	
	1. Click Start, and then click Run.
	
	2. Type regedit and click OK.
	
	3. Click Registry in the top menu.
	
	4. Click Export Registry file.
	
	5. In the menu that appears, select Desktop in the drop-down menu. In the file
	  name field, type Backup (or another name of your choosing) and click Save.
	  This will place an icon on the desktop which contains the contents of the
	  registry.
	
	To delete the HKEY_CURRENT_USER\Software\Microsoft\MSN6 Registry key and
	re-start MSN Explorer
	
	1. If MSN Explorer is running, quit MSN Explorer.
	
	2. Click Start, and then click Run.
	
	3. Type regedit, and then click OK.
	  This will start the registry editor.
	
	4. Click the plus sign next to HKEY_CURRENT_USER.
	
	5. In the expanded list, click the plus sign next to Software.
	
	6. In the expanded list, click the plus sign next to Microsoft.
	  In this list you should see MSN6.
	
	7. Right click MSN6, and then click Delete. A prompt appears asking if you are
	  sure if you want to delete a registry key.
	
	8. Click Yes, and then click x in upper right hand corner to quit Registry
	  Editor.
	
	9. Start MSN Explorer.
	  This will start the sign-up as if this is the first time MSN Explorer has been
	  used.
	
	10. Select MSN Internet Access as the connection device, and then click
	  Continue.
	  A prompt asking if you need to create a new MSN Internet Access account, or
	  if you have an existing account.
	
	11. Select Existing account, and then enter your user name and password.
	  You should now be able to complete the signup by following the directions
	  that appear.
	
	Now you need to add the account that is still active.
	
	If you find that you need to restore the registry settings to the state
	contained in the backup file, do the following:
	
	To restore the registry settings to the state contained in the backup file
	
	1. Double-click the Backup (or the name chosen earlier for the backup file)
	  icon.
	
	2. Click Yes on the box that appears asking if you are sure you want to import
	  these settings.
	
	3. A message should appear informing you the registry settings have been
	  successfully imported. Click OK.
	
	You should now be able to dial in and connect with your new account.
	
	Additional query words: kbimu MSN Explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
