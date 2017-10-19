---
layout: page
title: "Q192595: XFOR: Incorrect Date on Message Sent Through cc:Mail Connector"
permalink: /kb/192/Q192595/
---

## Q192595: XFOR: Incorrect Date on Message Sent Through cc:Mail Connector

	Article: Q192595
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix exc5 exc55
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message through the Microsoft Exchange Connector for Lotus
	cc:Mail and the cc:Mail recipient views the message, the date on the message may
	be incorrect.
	
	For example, if you sent the message on January 1, 2000, the date is displayed as
	"1/1/1900" (without quotation marks) instead of "1/1/2000." Note that this
	problem also occurs when an Exchange Server recipient receives a message through
	the Exchange Connector for Lotus cc:Mail, and then views the message in an
	e-mail client.
	
	This problem only occurs when you use Import.exe version 8.0 and a DB8 cc:Mail
	post office.
	
	RESOLUTION
	==========
	
	Exchange Server 5.0
	-------------------
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Microsoft
	Exchange Server version 5.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Exchange Connector for Lotus cc:Mail
	
	  File Name   Version
	  -----------------------
	  Ccmc.exe    5.0.1461.66
	  Ccmsg.dll   5.0.1461.66
	
	This hotfix has been posted to the following Internet location as Psp2ccma.exe
	and Psp2ccmi.exe:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-CCM
	
	
	Exchange Server 5.5
	-------------------
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Exchange Connector for Lotus cc:Mail
	
	  File Name   Version
	  ----------------------
	  Ccmc.exe    5.5.2408.0
	  Ccmsg.dll   5.5.2408.0
	
	
	
	Also make sure that you have the updated versions (version 8.3 or later) of the
	Import.exe, Export.exe, and Impexp.ri files. If you do not have version 8.3 of
	these files, download them from the following Web site:
	
	  http://www.support.lotus.com/lshome.nsf
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
