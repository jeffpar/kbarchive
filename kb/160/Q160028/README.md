---
layout: page
title: "Q160028: XADM: Adding Code Pages to Windows NT Server 4.0"
permalink: /kb/160/Q160028/
---

## Q160028: XADM: Adding Code Pages to Windows NT Server 4.0

{% raw %}

	Article: Q160028
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbsetup kbusage exc4 exc5 exc55
	Last Modified: 17-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT Server 4.0 does not install all the code pages that may be required
	by Microsoft Exchange Server in order to support message traffic and client
	connectivity.
	
	MORE INFORMATION
	================
	
	To add the code page(s):
	
	1. Use Windows Explorer to browse the Windows NT Server 4.0 compact disc.
	
	2. View the Langpack subdirectory.
	
	3. Select and right-click any of the available .inf files.
	
	4. Click Install.
	
	5. To verify that the code page has been successfully installed, in Control
	  Panel Keyboard, click Input Locales, or click the Locales tab on the Exchange
	  Server properties page.
	
	The following Readme.txt is included in the Langpack subdirectory.
	
	This directory contains files to add additional language support for Internet
	Explorer version 3.0 and Exchange Server version 4.0. To install these files,
	log on to an account with Administrator privilege, start the Windows NT Explorer
	and right-click on the .inf file named appropriately for the language or group
	of languages that you want to add support for. Then select the "Install" option
	from the menu. You will be prompted for your Windows NT CD. Some of the
	necessary files are in this directory (Langpack) and the remaining files are in
	the normal Windows NT distribution directories, I386.
	
	The following is a list of the .inf files and a brief explanation of the language
	support that they include.
	
	  Arabic.inf - Arabic code page conversion and NLS API support (No IE3 viewer
	  support)
	  Cyrillic.inf - Cyrillic based language support
	  European.inf - Latin based European language support
	  ExchSrvr.inf - All code page conversion tables for Exchange Server
	  Greek.inf - Greek language support
	  Hebrew.inf - Hebrew code page conversion and NLS API support (No IE3 viewer
	  support)
	  Japanese.inf - Japanese code page conversion, NLS API support and font
	  Korean.inf - Korean code page conversion, NLS API support and font
	  TChinese.inf - Traditional Chinese code page conversion, NLS API support and
	  font
	  Thai.inf - Thai code page conversions and NLS API support (No IE3 viewer
	  support)
	  Turkish.inf - Turkish language support
	  US_Eng.inf - US English language support
	  Vietnam.inf - Vietnamese code page conversions and NLS API support (No IE3
	  viewer support)
	
	You need to restart following installation of Japanese, Korean, and Traditional
	Chinese.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
