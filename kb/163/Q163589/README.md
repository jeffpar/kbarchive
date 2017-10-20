---
layout: page
title: "Q163589: XCLN: Restoring from an OST after Deleting the Mailbox"
permalink: /kb/163/Q163589/
---

## Q163589: XCLN: Restoring from an OST after Deleting the Mailbox

{% raw %}

	Article: Q163589
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Offline Folder files (OSTs) are considered slave replicas of the server- based
	folders. If you delete the master, the slave is orphaned.
	
	If the original Microsoft Exchange profile was not modified, you can still start
	the Microsoft Exchange client offline with the old OST and recover the data by
	moving the messages from the OST to a PST file. However, if the old profile was
	deleted or modified (by using it to log onto a different mailbox) then the data
	in the OST is lost.
	
	MORE INFORMATION
	================
	
	You can recover mail stored in an OST, provided that you have not tried to
	modify the profile that was used to create the OST file. If the profile used to
	create the OST file has been modified to point to a new mailbox, the information
	contained in the OST file may be lost.
	
	This is because security on an OST works so that Windows NT authentication cannot
	be used when you work offline. Therefore, you must "prove" that you're allowed
	to log onto the server-based master before the OST file gives you local access.
	To do this, Exchange Server creates an encrypted "cookie" from your mailbox's
	unique entry ID while you are successfully logged into the Exchange Server
	computer. This cookie is securely stored in your Exchange Server profile.
	Essentially, your profile stores this key for the OST. Every time you try to
	access the OST file it checks your profile for the existence of this key.
	
	If you modify the profile or try to connect to a new mailbox or new server with
	the current profile, Microsoft Exchange replaces this key with a new value from
	the mailbox that was created. At this point, you cannot access the data that was
	contained in the OST created against the first mailbox.
	
	For more information, see the Microsoft Exchange Disaster Recovery Document on
	Microsoft TechNet or on the Internet at:
	
	  http://www.microsoft.com/exchange/techinfo/administration/55/BackupRestore.asp
	
	Steps to Recover
	----------------
	
	If you have not modified your profile or attempted to log on to the new mailbox,
	use the following steps to copy the offline messages to a PST:
	
	1. Start the Exchange Client OFFLINE.
	
	2. On the Tools menu, click Services.
	
	3. Click Add.
	
	4. Add a Personal Folders (PST) service.
	
	5. Select the messages that you want to copy.
	
	6. On the File menu, click Copy.
	
	7. In the Copy to dialog box, select the personal folders (PST) that you created
	  in step 4.
	
	8. Click OK.
	
	9. Repeat steps 5 through 8 for each folder that contains messages.
	
	At this point, the messages are copied to a PST. You can create a new profile and
	you can log on to the new server-based mailbox. After you complete this
	successfully, you can add a Personal Folders service (by referencing the PST
	created above), and you can copy the messages from the PST back to the
	server-based mailbox.
	
	NOTE: offline folders (OSTs) should not be considered as backups of your server
	based store. For more information on proper server backups, refer to the
	Microsoft Exchange Server Administrator's Guide, Chapter 15.
	
	
	Additional query words: exclnfaq 8.5
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbOutlook97 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT
	Version           : :4.0,5.0,8.0,8.01,8.02,8.03
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
