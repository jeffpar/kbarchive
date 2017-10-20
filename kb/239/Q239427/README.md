---
layout: page
title: "Q239427: XADM: How to Enable Message Journaling in Exchange Server 5.5"
permalink: /kb/239/Q239427/
---

## Q239427: XADM: How to Enable Message Journaling in Exchange Server 5.5

{% raw %}

	Article: Q239427
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp1 exc55sp2 exc55sp3
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article provides detailed instructions on how to implement Message
	Journaling, a new feature introduced in Microsoft Exchange Server version 5.5
	Service Pack 1, on an Exchange Server computer or computers.
	
	MORE INFORMATION
	================
	
	To enable Message Journaling throughout an Exchange Server site or organization,
	each server must be running Microsoft Exchange Server version 5.5 Service Pack 1
	or later, and each server must be configured for Message Journaling.
	
	You can configure Message Journaling at the server level, site level, or
	organization level. If you configure it at the site level, a message that is
	sent between two sites in the organization is saved twice: once at the sending
	site and once at the receiving site.
	
	You enable and configure message journaling using Microsoft Windows NT Server
	registry settings. To enable Message Journaling, you must complete the following
	steps on each server. Each step is described in detail later in this document.
	
	1. Specify where messages are saved.
	
	2. Specify Message Journaling at the server, site, or organization level.
	
	3. Route all Internet Mail Service messages through the private information
	  store.
	
	4. Route local messages through the message transfer agent (MTA).
	
	IMPORTANT NOTE: Before you enable Message Journaling on your Exchange Server
	computer, please click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q198783 XCON: Receipt Behavior with Message Journaling
	
	  Q199325 XCON: MTA Size Restrictions Affect Local Delivery with Message
	  Journaling
	
	Specifying Where Messages Are Saved 
	-----------------------------------
	
	Specify where messages are saved by adding a registry key with the Distinguished
	Name (DN) of a mailbox, public folder, or custom recipient.
	
	To view the Distinguished Name of a recipient:
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. In the appropriate Recipients container, select the recipient object.
	
	3. On the File menu, click Raw Properties.
	
	4. In the Objects Attributes list, select Obj-Dist-Name. The Distinguished Name
	  of the object is displayed in the Edit Value box.
	
	5. In the Edit Value box, select the Distinguished Name of the object, copy it,
	  and paste it in a clipboard; you need to use it in the next section.
	
	To specify the recipient:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	NOTE: Regedit.exe is recommended for editing the registry entries in this
	article.
	
	1. Open the following registry key:
	
	  HKEY_LOCAL_MACHINE \SYSTEM \CurrentControlSet \Services \MSExchangeMTA
	  \Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Add a new string value named Journal Recipient Name.
	
	3. Set the value of Journal Recipient Name to the Distinguished Name of the
	  mailbox, public folder, or custom recipient using the Distinguished Name from
	  the previous section.
	
	Specifying Message Journaling at the Server, Site, or Organization Level
	------------------------------------------------------------------------
	
	You can specify that Message Journaling be done at the server level, site level,
	or organization level. By default, Message Journaling is done at the
	organization level.
	
	1. Open the following registry key:
	
	  HKEY_LOCAL_MACHINE \SYSTEM \CurrentControlSet \Services \MSExchangeMTA
	  \Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Add a new DWORD value named Per-Site Journal Required.
	
	3. For Message Journaling at the server level, set the value of Per-Site Journal
	  Required to 2. For journaling at the site level, set the value of Per-Site
	  Journal Required to 1.
	
	NOTE: To return to organization level Message Journaling, set the value of
	Per-Site Journal Required to 0.
	
	Routing Internet Mail Service Messages Through the Private Information Store
	----------------------------------------------------------------------------
	
	NOTE: The following steps are not necessary if you do not have an Internet Mail
	Service on this server.
	
	To be copied correctly, all Internet Mail Service messages must be routed through
	the private information store.
	
	1. Open the following registry key:
	
	  HKEY_LOCAL_MACHINE \SYSTEM \CurrentControlSet \Services \MSExchangeIMC
	  \Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Add a new DWORD value named RerouteViaStore.
	
	3. Set the value of RerouteViaStore to 1.
	
	Routing Local Messages Through the MTA
	--------------------------------------
	
	To be copied correctly, local messages must be routed through the MTA instead of
	being delivered directly by the private information store.
	
	1. Open the following registry key:
	
	  HKEY_LOCAL_MACHINE \SYSTEM \CurrentControlSet \Services \MSExchangeIS
	  \ParametersSystem
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Add a new DWORD value named No Local Delivery.
	
	3. Set the value of No Local Delivery to 1.
	
	Security
	--------
	
	There are two primary security issues with Message Journaling:
	
	- Unauthorized disabling of Message Journaling when it needs to be used.
	
	- Unauthorized use of Message Journaling to intercept messages.
	
	In both cases, you must limit the number of users who can change the registry
	entries that control Message Journaling. By default, all users with Windows NT
	Server administrator permissions can change these registry entries.
	
	You must secure the mailbox, public folder, or custom recipient that receives the
	message copies. Hide this recipient from the directory. If the recipient is a
	public folder, on the Permissions tab for the public folder, set the Roles for
	the default user to Contributor, and then click to clear all permissions check
	boxes except Create items, and click to select the Create Items check box.
	
	Copies of encrypted messages are saved the same way other messages are, but they
	are not decrypted.
	
	Performance
	-----------
	
	Message Journaling adds processing overhead to the Exchange Server computer and
	increases network traffic. Use Windows NT Performance Monitor after you enable
	Message Journaling to ensure that your system can handle the additional load.
	You may need to upgrade your hardware or balance system resources.
	
	NOTE: The performance enhancements in the MTA in these service packs help balance
	the processing overhead of Message Journaling.
	
	The mailbox, public folder, or custom recipient that receives the message copies
	must always be available, or message journaling fails. Depending on message
	volume, you may need to set up the mailbox or public folder on a dedicated
	Exchange Server computer within the site.
	
	Additional Considerations
	-------------------------
	
	- If you need to archive message tracking data with the message copies, on the
	  General property page of the MTA Site Configuration object, select Enable
	  Message Tracking. Then copy the daily log files from the
	  Exchsrvr\Tracking.log directory to your archive location.
	
	- Do not disable per-domain bilateral information if you are using Message
	  Journaling. Per-domain bilateral information is disabled when the following
	  registry key is set to 1:
	
	  HKEY_LOCAL_MACHINE \SYSTEM \CurrentControlSet \Services \MSExchangeMTA
	  \Parameters \Do not generate Bilateral Info
	
	  NOTE: The above registry key is one path; it has been wrapped for
	  readability.
	
	  For additional information on per-domain bilateral information, please click
	  the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q157358 XCON: Per-Domain-Bilateral-Info and Third Party Systems
	
	- Message Journaling can only capture messages that pass through the Exchange
	  Server MTA. If a user connects to an external mail server using a client that
	  submits e-mail through SMTP (POP3 and IMAP4 clients) without passing through
	  Exchange Server, the messages are not captured. Likewise, messages sent using
	  other mail systems that do not pass through an Exchange Server computer, such
	  as Microsoft Mail for PC Networks, cannot be captured, even if the other mail
	  system has a connector to an Exchange Server computer.
	
	Additional query words: Journal
	
	======================================================================
	Keywords          : exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
