---
layout: page
title: "Q145741: Cannot Specify Font for Fax Using Compose New Fax Wizard"
permalink: /kb/145/Q145741/
---

## Q145741: Cannot Specify Font for Fax Using Compose New Fax Wizard

	Article: Q145741
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Compose New Fax Wizard to send a fax, you cannot specify the
	font that is used when the fax is sent. The system font that Windows 95 uses to
	display text in menus, title bars, and dialog boxes is always used when a fax is
	sent, even if you specify that a different font should be used when sending mail
	with Microsoft Exchange.
	
	MORE INFORMATION
	================
	
	You can specify the font that you want Microsoft Exchange to use when sending
	mail by clicking Options on the Tools menu in Microsoft Exchange, clicking the
	Send tab, and then clicking Font. The font you specify is used by default when
	you compose a new message in Microsoft Exchange, but not when you run the
	Compose New Fax Wizard from the Start menu or from Microsoft Exchange.
	
	To start the Compose New Fax Wizard from the Start menu, click the Start button,
	point to Programs, point to Accessories, point to Fax, and then click Compose
	New Fax. To start the Compose New Fax Wizard from Microsoft Exchange, click New
	Fax on the Compose menu.
	
	To specify the font that you want Microsoft Exchange to use when sending a fax,
	you must compose the fax using the New Message command on the Compose menu
	instead of the New Fax command. To change the font when you are composing a new
	message, click Font on the Format menu.
	
	If you have sent a fax to the recipient previously, you can select that recipient
	from your personal address book by clicking Address Book on the Tools menu, and
	then clicking Personal Address Book in the Show Names From The box.
	
	If you have not sent a fax to the recipient previously, you must specify the
	recipient's address. Use the following syntax for the address
	
	  [fax:<nnnnnnn>]
	
	where <nnnnnnn> is the recipient's fax number.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
