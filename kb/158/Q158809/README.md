---
layout: page
title: "Q158809: XCLN: NDR When Sending or Posting to a Folder"
permalink: kb/158/Q158809/
---

## Q158809: XCLN: NDR When Sending or Posting to a Folder

	Article: Q158809
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Macintosh client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you send or post to a public folder with a form that is not allowed in the
	public folder, you may receive the following error message:
	
	  Changes to the item could not be saved. You cannot post this form to this
	  public folder. See the public folder contact.
	
	You may also receive a Non-Delivery Report similar to the following:
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: Unknown
	  Sent: 11/5/96 11:12:37 AM
	
	  The following recipient(s) could not be reached:
	
	  PublicFolder1 on 11/5/96 11:12:38 AM
	  The message could not be delivered because the folder does not accept this
	  form.
	  MSEXCH:MSExchangeMTA:MYSITE:MYEXCHANGESERVER
	
	
	MORE INFORMATION
	================
	
	When working with public, mailbox, or personal folders, a user with Owner
	permissions can modify the forms associated with that folder by specifying
	information on the Forms Tab of the Properties Dialog for that folder.
	
	The Forms Tab can be used to copy or install a custom form into the selected
	folder. Forms that you have copied or installed in a folder are listed on the
	Compose menu when that folder is open. The Forms Tab also allows you to specify
	what forms are allowed in the folder with the following options:
	
	  Only Forms Listed Above
	  -----------------------
	  Allows only those forms that are listed under Forms Associated
	  With This Folder.
	
	  Forms Listed Above And The Standard Forms
	  -----------------------------------------
	  Allows forms that are listed under Forms Associated With This
	  Folder, New Message forms, New Post forms, and files such as
	  documents and spreadsheets.
	
	  Any Form
	  --------
	  Allows any form.
	
	If you attempt to post or send to the folder with a form that is not allowed, you
	will receive the error message or Non-Delivery Report mentioned above.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Mac kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
