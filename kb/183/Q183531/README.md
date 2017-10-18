---
layout: page
title: "Q183531: XCLN: How to Update Exchange Forms Designer Forms"
permalink: kb/183/Q183531/
---

## Q183531: XCLN: How to Update Exchange Forms Designer Forms

	Article: Q183531
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Exchange forms administrators may find it necessary at times to update an
	existing Exchange form and reinstall it to a message store (for example, a
	public folder). However, after a form has been cached locally on the Exchange
	client workstation, the Exchange client may not always download the updated
	version of the form from the message store.
	
	MORE INFORMATION
	================
	
	There are two ways to ensure that the updated version of a form will be used on
	the client:
	
	Method 1:
	
	From the Exchange client, select Tools, Options, Exchange Server page, Manage
	Forms button. From the Forms Manager, select the folder by clicking the Set
	button located in the right-pane list box. Choose the folder in which the
	updated form is installed. Click the Update button.
	
	For this method some type of notification is required, so that the user knows to
	perform the above steps. One recommendation is to send a detailed message to all
	those affected after a form has been updated.
	
	Method 2:
	
	From the Microsoft Exchange Electronic Forms Designer, load the form that is to
	be updated. Select View, Form properties. From the General page, change the Item
	Type to a unique name, different from the original. (Note: The item type must
	remain in the form IPM.Vendorname or IPM.Vendorname.Subclass.)
	
	For this method, the form is automatically downloaded, because this is a new item
	type. However, unless the display name has been changed on the form, the
	Exchange client's Compose menu will list multiple forms with the same display
	name.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
