---
layout: page
title: "Q89410: PC Win: Mailing to an Address Not Found in the Address List"
permalink: /kb/089/Q89410/
---

## Q89410: PC Win: Mailing to an Address Not Found in the Address List

	Article: Q89410
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Mail Windows client, you can send mail to users not found in
	the Postoffice Address List in one of two ways:
	
	- By enclosing the address in square brackets, [address], mail will not search
	  the address list for a match. If the brackets are not used, the following
	  error message is returned by mail when the names are checked:
	
	  Some names could not be matched to names in the address list. Try correcting
	  the names or choose Address to select names from the address list.
	  Successfully matched names are underlined.
	
	  These addresses must be enclosed in brackets and have a leading address type
	  specified. Microsoft Mail is the default type used.
	
	  Examples:
	
	     MS Mail            [MS:Network/Postoffice/UserID]
	     SMTP:              [SMTP:User@Host.Domain]
	     Mail Connection    [MSMAIL:user@postoffice]
	     X.400:             [X.400:/C=us/ADMD=mci/PRMD=widgits/PN=JohnDoe]
	                  or    [X.400:/C=us/A=mci/P=widgits/S=JohnDoe]
	
	  Note: Follow the steps below to see a sample of the address you are sending
	  to. After creating the address into the mail message, double-click the name
	  to see the actual address. You can also click the name in the Address window
	  and click the Details button.
	
	- The names can also be manually entered by using the address windows, as
	  follows:
	
	  1. Select Compose Note.
	
	  2. From the message toolbar, select the Address button.
	
	  3. From the Address window, select the New Address icon. It is the blank card
	     on the left of the address list.
	
	  4. This brings up the New address window. Select the appropriate address type
	     from the list and click the OK button.
	
	  5. This brings up the New User dialog box. Fill in each box according to the
	     requested information. The Alias is how it will look on the To line of the
	     Mail message.
	
	  6. Click the To button to add this name to the To: box of the Address window.
	
	  7. Click the OK button when done adding in addresses and the names are added
	     to the To: line of the message.
	
	REFERENCES
	==========
	
	Refer to page 277 of the 3.0 Administrator's Guide for a listing of many of the
	address types supported my Microsoft Mail for PC Networks.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
