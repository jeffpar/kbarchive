---
layout: page
title: "Q136453: Using MS Exchange Remotely in Windows 95 Questions and Answers"
permalink: /kb/136/Q136453/
---

## Q136453: Using MS Exchange Remotely in Windows 95 Questions and Answers

{% raw %}

	Article: Q136453
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains questions and answers about using Microsoft Exchange
	remotely in Windows 95.
	
	MORE INFORMATION
	================
	
	1. Q. Before upgrading to Windows 95, I used Microsoft Mail Remote version 3.2
	  with Windows for Workgroups. Can I dial into the Microsoft Mail 3.2 Message
	  Transfer Agent (MTA) using the Microsoft Exchange client and Dial- Up
	  Networking with Windows 95?
	
	  A. No. You cannot dial into a Microsoft Mail 3.2 MTA using the Microsoft
	  Exchange client, because Microsoft Mail Remote version 3.2 uses a unique
	  protocol that only the Microsoft Mail Remote client can understand. To dial
	  into the MTA, you must install the Microsoft Mail Remote client in Windows
	  95. If you want to use the Microsoft Exchange client, you must dial into a
	  Microsoft Windows NT Remote Access Server (RAS) or Windows 95 Dial-Up
	  Networking server instead of dialing into the MTA server.
	
	2. Q. How do I configure the Microsoft Exchange client to store my personal
	  information store (.pst file) on a network server?
	
	  A. The Microsoft Exchange client does not have an option to automatically
	  store your personal information store on a network server. However, you can
	  do so by manually moving the .pst file to a network server that you have full
	  access to, and then specifying the new location of the personal information
	  store the next time you start Microsoft Exchange.
	
	3. Q. How do I synchronize my personal information stores when I use Microsoft
	  Exchange on multiple computers (for example, on a laptop computer that
	  connects to the network using Dial-Up Networking, and another computer that
	  is physically connected to the network)?
	
	  A. To synchronize your personal information stores, use either of the
	  following methods:
	
	   - Choose one of your personal information stores to use as a starting point,
	     and then move that .pst file to a network server that you have full access
	     to. The next time you start Microsoft Exchange on each of your computers,
	     specify the location of this personal information store.
	
	   - Configure your computers to use the Remote Mail feature of Microsoft
	     Exchange. Then, when you connect to a server to download your new
	     messages, retrieve copies of the messages, rather than retrieving the
	     original messages themselves. Once you have retrieved copies of a
	     particular message on all of your computers, mark the message for deletion
	     so that it will be deleted the next time you choose the Transfer Mail
	     option.
	
	     For more information about using the Remote Mail feature of Microsoft
	     Exchange, view the Using Microsoft Exchange Remotely online Help topic in
	     Microsoft Exchange.
	
	4. Q. When I use the Remote Mail feature of Microsoft Exchange, what Microsoft
	  Exchange services can I use to preview my messages?
	
	  A. You can preview messages with the following Microsoft Exchange services:
	
	   - The Microsoft Mail service
	
	   - The Microsoft Network Online Service
	
	   - The CompuServe Mail service
	
	   - The Internet Mail service (included with Microsoft Plus! for Windows 95)
	
	5. Q. What is the difference between the Update Headers and Transfer Mail
	  options in the Remote Mail feature of Microsoft Exchange?
	
	  A. Both of these options download all new message headers from the server. The
	  Transfer Mail option also sends any mail that is currently stored in your
	  Outbox. In addition, if you have previously downloaded message headers and
	  marked some of these messages for retrieval, retrieval of a copy, or
	  deletion, the Transfer Mail option performs the appropriate action on each of
	  these messages.
	
	6. Q. Why am I unable to retrieve mail when my computer is connected to the
	  network, even though I can connect to the Microsoft Exchange server and it
	  appears that I can send mail?
	
	  A. The Remote Mail feature of Microsoft Exchange may be enabled. To disable
	  this feature, click Services on the Tools menu, click Microsoft Mail, click
	  Properties, click the LAN Configuration tab, and then click the Use Remote
	  Mail check box to clear it. When this check box is selected, you must use the
	  Remote Mail feature of Microsoft Exchange to retrieve your new mail. To
	  access the Remote Mail tool, click Remote Mail on the Tools menu.
	
	7. Q. What is the Msremote.sfs folder used for?
	
	  A. This folder is used by the Microsoft Mail service when you enable the
	  Remote Mail feature to store address information when the Use Local Copy
	  option is enabled, and to store other user account information.
	
	8. Q. How do I enable Remote Mail for the Internet Mail service that is included
	  with Microsoft Plus! for Windows 95?
	
	  A. On the Tools menu, click Services, click Internet Mail, click Properties,
	  click the Connection tab, and then click the Work Off- Line And Use Remote
	  Mail check box to select it.
	
	Additional query words: win95q a win95faq msexchange po wgpo
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

{% endraw %}
