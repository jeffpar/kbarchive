---
layout: page
title: "Q126925: PC Win: How to Create a New MMF (Stored Locally)"
permalink: /kb/126/Q126925/
---

## Q126925: PC Win: How to Create a New MMF (Stored Locally)

	Article: Q126925
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use version 3.2 of Microsoft Mail for Windows, there are times when it
	may become necessary to create a new mail message file (MMF) for a specific
	user, such as if a corrupt MMF is suspected.
	
	The MMF can be stored either on the postoffice or the local workstation. This
	article details steps for recreating a locally stored MMF.
	
	MORE INFORMATION
	================
	
	If you do not know where the MMF is currently being stored, start Mail using the
	Windows client. From the Mail menu, choose Options. Then select Server.
	
	If the Storage location is Postoffice, then select the Local button, and provide
	a file name.
	
	NOTE: The Personal Address Book (PAB) and any personal groups created by the user
	will be lost when you perform process below. For information on how to retain
	the PAB, please see the following article in the Microsoft Knowledge Base:
	
	  Q134204 How to Export a Personal Address Book to a New MMF
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q104359 PC Win: Sharing PAB with Other Users
	
	Steps for Creating a New MMF
	----------------------------
	
	1. From the File menu, choose Export Folder... You can either accept the default
	  Export file name or create a new export file. The first time you use a given
	  export file, you will be prompted by the Mail system to create it.
	
	2. Decide if you want to copy or move the folders from the existing MMF.
	
	3. Once the export is complete, Exit & Sign Out of Mail.
	
	4. From File Manager, rename the export MMF.
	
	5. Start Mail. You will be prompted for a user name and password. You will see
	  the following message:
	
	  Your message file could not be found.
	
	  Click OK. Select the New button. You will receive the following warning:
	
	  The existence of multiple message files can result in a loss of database
	  integrity. Delete all other message files. Your message file can be found in
	  <path>.
	
	6. Once Mail has started and created the new MMF, from the File menu, choose
	  Import Folder to import the messages from the export file.
	
	7. If you need to return the MMF to the postoffice, from the Mail menu, choose
	  Options. Select the Server button and move the MMF back to the postoffice.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
