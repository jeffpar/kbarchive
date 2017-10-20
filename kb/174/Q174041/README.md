---
layout: page
title: "Q174041: XADM: Error Installing Microsoft Exchange Eximwiz Utility"
permalink: /kb/174/Q174041/
---

## Q174041: XADM: Error Installing Microsoft Exchange Eximwiz Utility

{% raw %}

	Article: Q174041
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	After you download the Microsoft Exchange Eximwiz utility from the Microsoft Web
	site and attempt to install it on a computer running either Windows 95 or
	Windows NT Server version 4.0 Service Pack 2 (SP2), you may receive the
	following error message:
	
	  Cannot open the file named: \eximwiz.zip
	
	The file specified in the error message is not found in the directory. Clicking
	Abort cancels setup; clicking Ignore allows setup to complete. When you attempt
	to run Microsoft Exchange Eximwiz utility from the shortcut (clicking the icon)
	or by using the Eximwiza.exe executable file in the installation directory on an
	Exchange Server version 5.0 computer, you receive the following error message:
	
	  Expired Dialog Box: Sorry, the control has expired. Please obtain a newer
	  version.
	
	This error appear several times after you click OK.
	
	The next error that you receive may be:
	
	  Run-time error '429' You do not have the appropriate license to use this
	  functionality.
	
	After you download the Microsoft Exchange Eximwiz utility from the Microsoft Web
	site and attempt to install it on a computer running Windows NT Server version
	4.0 with no service pack installed, you may receive the following error
	message:
	
	  Cannot open the file named: \eximwiz.zip
	
	The file specified in the error message is not found in the directory. Clicking
	Abort cancels setup. Clicking Ignore allows setup to complete. When you attempt
	to run Microsoft Exchange Eximwiz utility from the shortcut (clicking the icon)
	or by using the Eximwiza.exe executable file in the installation directory on an
	Exchange Server version 5.0 computer, you will receive the following error
	message:
	
	  Microsoft Exchange Eximwiz utility dialog box:
	  Run-time error '367' Can't load (or register) custom control comdlg32.ocx.
	
	RESOLUTION
	==========
	
	Remove the Microsoft Exchange Eximwiz utility by starting Control Panel and
	double-clicking the Add/Remove Programs icon.
	
	Download the Readme.txt file and follow instructions it contains to download and
	install the Eximwiz utility fix from the Microsoft anonymous ftp server:
	
	  ftp://ftp.microsoft.com/bussys/backoffice/reskit/i386/eximwiz/
	
	MORE INFORMATION
	================
	
	This problem has been seen using the following compressed files from the Web
	site:
	
	  Eximwiz.exe
	  Adminnt.exe
	  Admin95.exe
	  Rkintel.exe
	  Rkwin95.exe
	
	Eximwiz.exe converts Microsoft Exchange bulk export format (.csv) files to
	Microsoft Mail import format. After creating the output file, you can use the
	tool to interactively import addresses into a Microsoft Mail postoffice on the
	network, or you can send e-mail with the import file to external recipients. In
	addition, new functionality allows you to export from Microsoft Mail and create
	a .csv file to add Microsoft Mail recipients as Microsoft Exchange custom
	recipients.
	
	Eximwiz is useful when directory synchronization between a Microsoft Exchange
	Server implementation and Microsoft Mail is not a viable option (if, for
	example, you are trying to populate a trading partner's Microsoft Mail system
	with relevant addresses, such as purchasing agents, from your global address
	list). Eximwiz can also be used to manually perform directory synchronization
	between a Microsoft Exchange Server computer and a foreign mail switch that does
	not support the Microsoft Mail Dirsync protocol.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
