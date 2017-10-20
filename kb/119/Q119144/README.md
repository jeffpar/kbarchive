---
layout: page
title: "Q119144: PC Win: Re-Creating MMF &amp; Still Maintaining Personal Groups"
permalink: /kb/119/Q119144/
---

## Q119144: PC Win: Re-Creating MMF &amp; Still Maintaining Personal Groups

{% raw %}

	Article: Q119144
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	To salvage a message file that contains some internal corruption (folder
	problems, problems adding personal groups, and so forth), you can create a
	new Mail message file (MMF) and try to import information from the old
	message file. However, personal address names and personal groups are not
	retained.
	
	To Salvage a Message File
	-------------------------
	
	1. Locate the MMF on the file server by using the LISTUSER utility. Copy this
	  hexadecimal-numbered MMF to C:\OLD.MMF. Then rename the user's
	  hexadecimal-numbered MMF on the server to that user's number with an
	  extension of *.SAV (for example, copy 0000001A.MMF to 0000001A.SAV).
	
	2. Load Windows and start Microsoft Mail for Windows. Type your name and
	  password. A dialog box with the following message will appear:
	
	  Your message file could not be found
	
	  Choose OK.
	
	3. An Open Message File dialog box will appear. Choose New.
	
	4. The message "Warning: The existence of multiple message files can result in a
	  loss of database integrity" will appear. Delete all other message files. Your
	  new message file can be found on the postoffice server. Choose OK.
	
	5. From the File menu, choose Exit and Sign Out. You will now have an empty
	  Inbox (that is, you will have a new MMF on the server).
	
	6. Edit the MSMAIL.INI file:
	
	  a. Add "ServerPath=C:\" to the [Microsoft Mail] section. This statement
	     should point to a nonexistent directory; you can replace "C:\" with any
	     drive letter that does not contain a Mail postoffice.
	
	  b. Add "OfflineMessages=C:\OLD.MMF" to the [Microsoft Mail] section.
	
	7. Start Mail again. The following dialog box will appear:
	
	  Mail could not connect to your mail server...
	
	  Choose OK. The message "Would you like to work offline?" will appear.
	  Choose OK. Type your name and password.
	
	8. You will now see all of your old messages. From the File menu, choose Export
	  Folder. Type the path and filename of your hexadecimal-numbered MMF on the
	  file server (for example, L:\MMF\0000001A.MMF). Choose OK.
	
	9. Choose All Folders, then choose Copy.
	
	10. In the Duplicate Folder Name dialog box, select the Save All Messages option
	  and enable the Don't Prompt On Remaining Duplicate Folder Names box. After
	  all of the messages have been copied, choose Close.
	
	11. From the File menu, choose Exit and Sign Out.
	
	12. Edit the MSMAIL.INI file and do the following:
	
	  a. Either delete the "ServerPath=C:\" statement if your postoffice is on
	     drive M or change it back to the drive letter where the Microsoft Mail
	     postoffice resides.
	
	  b. Delete the "OfflineMessages=C:\OLD.MMF" statement.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
