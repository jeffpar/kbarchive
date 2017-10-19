---
layout: page
title: "Q178124: XCLN: Microsoft Outlook for Windows 3.1x"
permalink: /kb/178/Q178124/
---

## Q178124: XCLN: Microsoft Outlook for Windows 3.1x

	Article: Q178124
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:8.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Outlook 8.0 client for the Windows 3.1x operating system improves
	messaging and group scheduling interoperability with Microsoft Outlook (for
	Windows) without requiring new hardware for users of Windows 3.1x.
	
	Customers committed to staying on the Windows 3.1x platform for the long term may
	want to consider using Microsoft Outlook Express for messaging and the Microsoft
	Outlook Web Access (OWA) client for scheduling. Microsoft will continue to
	support the Windows 3.1x version of the Microsoft Exchange and Microsoft
	Schedule+ 7.x clients.
	
	MORE INFORMATION
	================
	
	The Microsoft Outlook client for Windows 3.1x includes all the features of the
	existing Microsoft Exchange and Schedule+ clients, plus new features to smooth
	interoperability with existing versions of Microsoft Outlook. Because of the
	operating system and hardware limitations of typical computers based on Windows
	3.1x, this client continues to provide only a subset of the features found in
	the 32-bit version of Microsoft Outlook. Please note that this client does not
	support connectivity to Internet mail, Microsoft Mail for PC Networks, or Lotus
	cc:Mail.
	
	FEATURES
	
	The following new features are included in the Microsoft Outlook 8.x for Windows
	3.1x client:
	
	E-mail Interoperability Improvements
	------------------------------------
	
	Users can now send and receive flagged messages, recall messages, and respond to
	(but not send) voting messages. This client is intended for Microsoft Exchange
	Server integration only and does not include the Internet mail (POP, IMAP4)
	support required to directly connect to an Internet service provider. Users of
	Windows 3.x who require POP3 support are encouraged to evaluate the Microsoft
	Outlook Express client that is available with Microsoft Internet Explorer.
	
	Calendar and Group Scheduling
	-----------------------------
	
	By default, the Windows 3.x version of Outlook can only view Microsoft Schedule+
	7.x data of other users. However, a client extension is available for the
	Outlook Windows 3.x client that provides the ability to view the details of a
	Windows Outlook user's Calendar folder. This add-on, called the Schedule+
	Exchange Transport DLL, is located on the Microsoft Exchange Server 5.5 Client
	Pack CD in the following directory:
	
	  Support\MSOUTL\Win16
	
	The client continues to have exactly the same Calendar, Contacts, and Task
	features that are available in Schedule+ version 7.0, and the client continues
	to display Calendar, Contacts, and Task information in a separate window,
	accessible through the Calendar icon on the Outlook Bar.
	
	Opening Exchange Server HTML Forms
	----------------------------------
	
	Outlook electronic forms created using the built-in Outlook forms design tool can
	only be used on Windows desktops where Outlook is installed. However, Exchange
	Server provides an alternative way to create forms for use in collaborative
	applications - using Active Server Pages and the Microsoft Exchange
	Collaboration Data Objects (CDO) interface to script forms that are displayed as
	HTML in a Web browser. All three versions of Outlook in Exchange Server 5.5
	(32-bit Outlook, Outlook for Windows 3.1x, and Outlook for Macintosh) have been
	extended to support Exchange Server HTML forms. These features provide Exchange
	Server sites with more options for developing and deploying electronic forms.
	
	All three versions of Outlook in Exchange Server 5.5 contain a new menu item on
	the Compose menu, Open Web Form, that lets users invoke an Exchange Server HTML
	form. When a user selects this menu item, the Web browser registered on the
	user's computer is automatically opened and directed to an internal Web site
	containing a directory of HTML forms. The URL that locates the directory of HTML
	forms can be set as an option and can be set in registry keys by the system
	administrator.
	
	Currently, when an Outlook form is sent to the Windows 3.x client, it is
	essentially unusable - opening the item in the Windows 3.x Inbox does not
	display the actual form, as the form designer intended. However, with Exchange
	Server 5.5, the Windows 3.x client automatically starts an associated HTML form
	through the browser when a user opens an Outlook form from the Inbox, provided
	Outlook Web Access is installed and enabled on the server. This HTML form is
	created as an additional design step and is not automatically generated during
	the design of the Outlook form. The Exchange Server administrator associates the
	HTML form with the appropriate Outlook form message class.
	
	Improved User Interface
	-----------------------
	
	Outlook for Windows 3.1x includes a partially customizable Outlook Bar and a
	Folder Banner consistent with Outlook for Windows. Menu and toolbar commands are
	now arranged to more closely match Outlook for Windows.
	
	ARCHITECTURE AND SYSTEM REQUIREMENTS
	
	Server Requirements
	-------------------
	
	Standard e-mail and group scheduling requires Exchange Server 4.0 or later. To
	implement custom forms using HTML and Exchange Server CDO requires Exchange
	Server 5.0 Service Pack 1 or later, and Microsoft Internet Information Server
	3.0 with Active Server Pages (renamed to Outlook Web Access in Exchange Server
	5.5) or later installed.
	
	Client Requirements
	-------------------
	
	Windows 3.1x:
	
	- 8 MB of RAM minimum (12 MB or more recommended)
	
	- 12 MB of hard-disk space (22 MB or more recommended)
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch
	Version           : WINDOWS:8.0
	Issue type        : kbinfo
	
	=============================================================================
	
