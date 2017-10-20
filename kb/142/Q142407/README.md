---
layout: page
title: "Q142407: Using the CompuServe Address Book in Microsoft Exchange"
permalink: /kb/142/Q142407/
---

## Q142407: Using the CompuServe Address Book in Microsoft Exchange

{% raw %}

	Article: Q142407
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you add the CompuServe address book to the list of available address books in
	Microsoft Exchange and then try to use a name from the CompuServe address book
	when you compose a new message, Microsoft Exchange may not recognize the name.
	When you click Check Names or send the message, you may be prompted to create a
	new address for the name or to choose a different name from the available
	address books.
	
	RESOLUTION
	==========
	
	To work around this problem, use one of the following methods:
	
	- When the Check Names dialog box appears, choose the name you want from the
	  list of names in the CompuServe address book. To do so, click Show More
	  Names, click CompuServe Address Book in the list of available address books,
	  click the name you want, and then click OK.
	
	- Before you click Check Names or try to send the message, select the name you
	  want in the CompuServe address book. To do so, click the To button, click
	  CompuServe Address Book in the list of available address books, click the
	  name you want, and then click OK.
	
	- Before you compose the new message, add the name you want from the CompuServe
	  address book to your personal address book, which is automatically checked
	  each time you send a message. To do so, click Address Book on the Tools menu,
	  click CompuServe Address Book in the list of address books, double-click the
	  name you want, click Personal Address Book, and then click OK.
	
	MORE INFORMATION
	================
	
	The CompuServe address book is not added to the list of available address books
	in Microsoft Exchange by default. To add the CompuServe address book, follow
	these steps:
	
	1. Add the CompuServe Mail information service to your current Microsoft
	  Exchange profile. To do so, double-click the Setup.exe file in the
	  Drivers\Other\Exchange\Compusrv folder on the Windows 95 CD-ROM. When you are
	  prompted to add CompuServe Mail for Microsoft Exchange to your default
	  profile, click Yes. When you are prompted for the location of the common
	  CompuServe folder, select the folder in which the Compu- Serve files are
	  located (if you have a CompuServe information manager installed on your
	  computer). If you do not have a CompuServe information manager installed on
	  your computer, accept the default folder selected by Windows 95.
	
	  NOTE: The CompuServe Mail information service is included in the CD-ROM
	  version of Windows 95, but not in the floppy disk version. To use the
	  CompuServe Mail information service, you must have the CD-ROM version of
	  Windows 95.
	
	
	1. Double-click the Inbox icon on the desktop to start Microsoft Exchange.
	
	2. On the Tools menu, click Options, and then click the Addressing tab.
	
	3. Click Add, click CompuServe Address Book, click Add, and then click Close.
	
	The CompuServe address book is stored in a file called Addrbook.dat. When you are
	using a CompuServe information manager, such as WinCIM, this file is located in
	the <cserve>\Support folder, where <cserve> is the folder containing
	the CompuServe information manager. If you are not using a CompuServe
	information manager, this file is created by Windows 95.
	
	When you add a new address after you install the CompuServe address book, you
	must specify whether the address should be added to the CompuServe address book
	or the Microsoft Exchange personal address book. When you add an address to the
	CompuServe address book, the address is added to the Addrbook.dat file, not the
	Microsoft Exchange personal address book (.pab) file.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
