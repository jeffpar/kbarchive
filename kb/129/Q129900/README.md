---
layout: page
title: "Q129900: PC Win: Can Not Store Folders Separate from MMF"
permalink: /kb/129/Q129900/
---

## Q129900: PC Win: Can Not Store Folders Separate from MMF

	Article: Q129900
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "User's Guide" for Microsoft Mail Windows and Presentation Manager states
	the following on page 29:
	
	  You can store your messages in folders that you keep on your hard disk or on
	  the postoffice. Folders kept on your hard disk are private, whereas folders
	  kept on your postoffice can be private or shared with other users on your
	  postoffice.
	
	This incorrectly implies that you can store private folders on your local hard
	drive separate from the Mail message file(MMF).
	
	MORE INFORMATION
	================
	
	Shared Folders
	--------------
	
	Shared folders created with the Windows client will always be stored on the
	postoffice. You cannot store shared folders on your local hard drive.
	
	Private Folders
	---------------
	
	Private folders are always stored inside the MMF. If your MMF is stored on the
	postoffice, your private folders will be kept inside the MMF on the postoffice.
	If your MMF is stored on your hard disk, your private folders will be stored
	inside your local MMF.
	
	You cannot store your private folders outside of your MMF; therefore, you cannot
	choose where your private folders will be stored independently of the MMF.
	
	
	Additional query words: 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
