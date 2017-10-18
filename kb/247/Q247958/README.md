---
layout: page
title: "Q247958: How to Change the Path Used by the SMTP Service for the NTOP"
permalink: kb/247/Q247958/
---

## Q247958: How to Change the Path Used by the SMTP Service for the NTOP

	Article: Q247958
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install the Windows NT 4.0 Option Pack (NTOP), the root directory of
	the Default Web Site is Inetpub\Wwwroot. During setup, in the Inetpub folder,
	the Mailroot subdirectory is created with the following subfolders used by the
	SMTP service:
	
	   - BadMail
	
	- Drop
	
	- MailBox
	
	- PickUp
	
	- Queue
	
	- Route
	
	- SortTemp
	
	If you move the Inetpub directory to another drive or folder and delete the
	original Inetpub directory, when you restart your Web server, the folders for
	the SMTP Service are re-created in the Inetpub directory.
	
	MORE INFORMATION
	================
	
	To configure the SMTP service to use the new root directory, you must change the
	path information in the metabase. To manually make the changes necessary to the
	metabase, use MetaEdit from the IIS Resource Kit or programmatically use ADSI
	APIs. To do this, perform the following steps:
	
	1. Edit the metabase and open LM/SMTPSVC.
	
	2. Edit ID 36930 to reference the new SortTemp directory.
	
	3. Open LM/SMTPSVC/1/QueueDirectory and edit the string to reference the new
	  folder.
	
	4. Open LM/SMTPSVC/1/PickupDirectory and edit the string to reference the new
	  folder.
	
	5. Open LM/SMTPSVC/1/DropDirectory and edit the string to reference the new
	  folder
	
	6. Open LM/SMTPSVC/1/BadMailDirectory and edit the string to reference the new
	  folder.
	
	7. Open LM/SMTPSVC/1/RoutingSources and edit the multisz to reference the new
	  folder.
	
	8. Open LM/SMTPSVC/1/Root/MailBox/Path and edit the string to reference the new
	  folder.
	
	9. From the command prompt or services, stop the IIS Admin Service using the
	  following command:
	
	  net stop IISADMIN
	
	10. For the changes to take effect, restart the Web Publishing Service using the
	  following command:
	
	  net start W3SVC
	
	REFERENCES
	==========
	
	For additional information on the metabase and the utilities used for modifying
	the metabase, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q240941 An Introduction to the IIS Metabase
	
	  Q240225 Description of Adsutil and MetaEdit Used to Modify the Metabase
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
