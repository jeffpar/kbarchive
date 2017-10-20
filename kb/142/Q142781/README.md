---
layout: page
title: "Q142781: XCLN: Mailing to Recipients Hidden from the Address Book"
permalink: /kb/142/Q142781/
---

## Q142781: XCLN: Mailing to Recipients Hidden from the Address Book

{% raw %}

	Article: Q142781
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you use the Microsoft Exchange Server Administrator program, you can hide a
	recipient mailbox from the Address Book. If this is done, the mailbox will not
	show up in any Microsoft Exchange database table. This means the mailbox will
	not appear in the Global Address List, in any hierarchy container, as a member
	of a Distribution List, or as a manager or direct report. Also, except in the
	case when the Distinguished Name (DN) of the mailbox is used, the mailbox will
	not be suggested as a possible Ambiguous Name Resolution match.
	
	MORE INFORMATION
	================
	
	The only way to select a hidden mailbox is to use the Distinguished Name (DN)
	for that mailbox. The DN is an address that is unique in the entire
	organization. The following is an example of a DN:
	
	  /o=EXCHNG_ORG/ou=EXCHNG_SITE/cn=Container1/cn=Container2/cn=Alias
	
	In the above example:
	
	- EXCHNG_ORG is the Exchange Organization Name.
	
	- EXCHNG_SITE is the Exchange Site Name.
	
	- Container1 and Container2 are Container names with Container2 being a
	  subcontainer of Container1.
	
	- Alias is the mailbox alias name and is present in Container2.
	
	The DN can be constructed if the above pieces of information are known.
	
	The DN for a mailbox can also be obtained from the Raw Properties of the
	mailbox.
	
	WARNING: Using the Microsoft Exchange Administrator program in raw mode should
	only be done under the direction of a Microsoft Exchange Support Engineer.
	Incorrectly configuring the Administrator properties in raw mode can cause
	serious, system-wide problems that may require you to reinstall Microsoft
	Exchange Server to correct them. Microsoft cannot guarantee that any problems
	resulting from the incorrect use of the Administrator program in raw mode can be
	solved. Use this tool at your own risk.
	
	To obtain the Raw Properties, follow the steps below:
	
	1. Run the Exchange Administrator Program using the /raw command line option.
	
	2. Select the mailbox whose Raw Properties you want to obtain and then choose
	  the Raw Properties command from the File menu. This will bring up a dialog
	  box displaying the Raw Properties for that mailbox.
	
	3. From the Object Attributes listbox, select the item called Obj-Dist-Name.
	
	4. The DN for that mailbox should now be displayed in the field labeled
	  Attribute Value.
	
	Mailing to a Hidden Recipient
	-----------------------------
	
	In the Compose New Message To: box, type the DN for the recipient of the message.
	On the Tools menu, click Check Names (or press CTRL+K). If the DN corresponds to
	a valid mailbox, the DN will be replaced by the underlined Display Name of the
	mailbox.
	
	To add this address to the Personal Address Book, double-click the underlined
	Display Name. This will bring up the Properties of the mailbox in question. On
	the General Page of the Properties, click Personal Address Book, which will add
	the address to the Personal Address Book. In the future, the address can be
	selected from the Personal Address Book, instead of typing in the DN for the
	mailbox.
	
	The above procedure can also be used when you create an Inbox Assistant or Public
	Folder rule involving a mailbox hidden from the Address Book.
	
	Additional query words: hidden names
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange500DOS kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
