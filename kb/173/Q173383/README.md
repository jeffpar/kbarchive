---
layout: page
title: "Q173383: XCLN: New Mail Notification To &quot;Play a Sound&quot; Does Not Work"
permalink: kb/173/Q173383/
---

## Q173383: XCLN: New Mail Notification To &quot;Play a Sound&quot; Does Not Work

	Article: Q173383
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IMPORTANT: This article contains information about editing the registry. Before
	you edit the registry, make sure you understand how to restore it if a problem
	occurs. For information about how to do this, view the "Restoring the Registry"
	Help topic in Regedit.exe or the "Restoring a Registry Key" Help topic in
	Regedt32.exe.
	
	To hear a sound when new mail arrives, do the following:
	
	1. From the Tools menu, select Options.
	
	2. Click the General tab in the Microsoft Exchange Client, or click the E-mail
	  tab in the Microsoft Outlook Client.
	
	3. Select the Play a Sound check box.
	
	If the Play a Sound option still does not work, check to make sure the New Mail
	Notification event is listed in the Control Panel Sounds dialog box. To do this,
	run Control Panel and click the Sounds icon.
	
	The New Mail Notification event will not be listed if the appropriate entries for
	Mailbeep are missing from the registry.
	
	MORE INFORMATION
	================
	
	To add the New Mail Notification event, you need to make changes to the
	registry.
	
	WARNING: Using the Registry Editor incorrectly can cause serious problems that
	may require you to reinstall Windows 95 or Windows NT. Microsoft cannot
	guarantee that problems resulting from the incorrect use of the Registry Editor
	can be solved. Use the Registry Editor at your own risk. You should make a
	backup copy of the registry files System.dat and User.dat before you edit the
	registry.
	
	Follow these steps to add the Mailbeep setting and associated sound for
	mailbeep:
	
	1. Close any programs that are running.
	
	2. On the Start menu, click Run. Type "regedit" (without the quotation marks)
	  and click OK.
	
	3. In the Registry Editor, expand the following key:
	
	     HKEY_USERS\<UserID>\AppEvents\EventLabels
	
	4. On the Edit menu, click New and select Key.
	
	5. With New Key #1 selected, type "Mailbeep" (without the quotation marks), and
	  then press ENTER.
	
	6. With the Key Mailbeep selected, on the Edit menu, click New and select String
	  Value.
	
	7. With New String Value #1 selected, type "(Default)" (without the quotation
	  marks), and then press ENTER.
	
	8. With the (Default) entry selected, click Edit and Modify, and type in the
	  value data "New Mail Notification" (without the quotation marks), and then
	  press ENTER.
	
	To add a sound for the Mailbeep event, follow these steps:
	
	1. In the Registry Editor, expand the following key:
	
	     HKEY_USERS\<UserID>\AppEvents\Schemes\Apps\.Default\MailBeep
	
	2. On the Edit menu, click New and select String Value.
	
	3. With New String Value #1 selected, type "(Default)" (without the quotation
	  marks), and then press ENTER.
	
	4. With the (Default) entry selected, click Edit and Modify and type the value
	  data "ding.wav" (without the quotation marks), and then press ENTER.
	
	5. Click OK and exit the Registry Editor.
	
	6. Shut down and restart your computer.
	
	For information about how to edit the registry, see the Changing Keys and Values
	topic in the Registry Editor Help file.
	
	Additional query words: New regedit wav cpl notify
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT
	Version           : WINDOWS:5.0
	
	=============================================================================
	
