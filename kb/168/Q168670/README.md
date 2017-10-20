---
layout: page
title: "Q168670: XFOR: Err Msg: cc:Mail Connector Event ID 59"
permalink: /kb/168/Q168670/
---

## Q168670: XFOR: Err Msg: cc:Mail Connector Event ID 59

{% raw %}

	Article: Q168670
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running the Microsoft Exchange Connector for Lotus cc:Mail, you may
	find that messages are stuck in MTS-OUT queue of the connector store. As a
	result, messages destined to cc:Mail do not go through, but messages flow fine
	from cc:Mail to Exchange Server. In the application log, you receive the
	following error message:
	
	  Event ID: 59 Source: MSExchangeCCMC Category: General
	  Lotus cc:Mail IMPORT from file *.ccm returned result code 1. Program
	  did not complete successfully.
	
	This is a generic error message from the cc:Mail import program. You may notice
	there are files in the Exchsrvr\Ccmcdata\Submit directory.
	
	CAUSE
	=====
	
	The Exchange service account does not have sufficient permission to access the
	cc:Mail Post Office database. If the cc:Mail Post Office database is located on
	a Novell NetWare server and Microsoft Gateway Services for NetWare (GSNW) is not
	enabled, you must created service account on the NetWare server with the
	identical account information and password. The service account should also has
	supervisor equivalent right on the database.
	
	To verify whether the issue is due to permission, you can move the cc:Mail Post
	Office database to the Windows NT computer where Exchange Server is running.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Grant appropriate trustee right for Exchange Service Account from NetWare.
	
	MORE INFORMATION
	================
	
	Inbound mail (from cc:MAIL to Exchange) works fine because Exchange Server only
	reads files and writes to Windows NT. But for outbound mail (when Exchange
	Server writes to cc:Mail on netWare), the service account does not have
	sufficient rights.
	
	cc:Mail is manufactured by Lotus, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
