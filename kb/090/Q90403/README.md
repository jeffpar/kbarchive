---
layout: page
title: "Q90403: PC Win: Send Mail Feature and Microsoft Word for Windows"
permalink: kb/090/Q90403/
---

## Q90403: PC Win: Send Mail Feature and Microsoft Word for Windows

	Article: Q90403
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 2.0 of Microsoft Word for Windows uses a SendMail macro to enable the
	Send Mail menu selection. This macro ships with version 3.0 of Microsoft Mail.
	You are given the option to install the macro only for Word versions 2.0 and
	2.0a for Windows, not for version 2.0b. When you use Word for Windows with this
	macro installed, you will see the Send option on the File menu.
	
	Word 2.0b for Windows has support for Simple MAPI built in (that is, a macro is
	not necessary), and displays the Send option on the File menu if the WIN.INI
	file contains the following setting:
	
	  [Mail]
	  MAPI=1
	
	Unfortunately, Word 2.0b for Windows does not check for the existence of the old
	SendMail macro when it upgrades a version 2.0 installation, so if you installed
	your products in the following order, you may see duplicate Send menu options:
	
	1. Microsoft Word version 2.0 or 2.0a for Windows
	
	2. Microsoft Mail for Windows, version 3.0
	
	3. Microsoft Word version 2.0b for Windows
	
	Although this duplication may be confusing, it will not cause any functionality
	problems.
	
	If you are using Word 2.0b for Windows, you can eliminate the duplicate Send menu
	option selection by simply deleting the SendMail macro. To do this, choose Macro
	from the Tools menu, select SendMail, and then choose Delete.
	
	Additional query words: 3.00 2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
