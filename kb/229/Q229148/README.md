---
layout: page
title: "Q229148: XADM: (N-)DR and (N-)RR Display in Mixed Languages"
permalink: /kb/229/Q229148/
---

## Q229148: XADM: (N-)DR and (N-)RR Display in Mixed Languages

{% raw %}

	Article: Q229148
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:8.0,8.01,8.02,8.03,8.04,8.5; winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, 8.04, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are running Exchange Server, U.S. version, on a computer running Windows NT
	4.0 Service Pack 3, U.S. version. Your clients are Windows NT 4.0 Workstation
	Service Pack 3, German version, and they work with Outlook 97/98, German
	version.
	
	When users send a message to local recipients with Delivery Report and Read
	Receipt options selected, they get (Non-)Delivery Reports or (Non-)Read Receipts
	in mixed languages (U.S./German). See the following example:
	
	Delivery Report in Mixed Languages
	----------------------------------
	
	Sponheimer, Rolf
	Von: System Administrator <<---- (in English)
	An: Sponheimer, Rolf
	Gesendet: Freitag, 21.August 1998 16:13
	Betreff: Delivered: Testmail <<--- (in English)
	-------------------------------------
	Ihre Nachricht
	
	An: Sponheimer, Rolf
	Betreff: Testmail
	Gesendet am: 21,08.98 16:13
	
	wurde an folgenden Empf?nger <81>bermittelt:
	
	Sponheimer, Rolf am 21.08.98 16:13
	
	Read Receipt in Mixed Languages
	-------------------------------
	
	Sponheimer, Rolf
	Von: System Administrator
	An: Eppelmann, Uwe
	Gesendet: Freitag 21.August 1998 16:32
	Betreff: Undeliverable: Test <<--- (in English)
	------------------------------------------------------
	Ihre Nachricht hat einige oder alle Empf?nger nicht erreicht.
	 Betreff: Test
	 Gesendet am: 21.08.98 16:32
	
	Folgende Empf?nger konnten nicht erreicht werden:
	Eppelmann, Uwe am 21.08.98 16:32
	A restriction in the system prevented delivery of the message. 
	<<--- (in English)
	MSEXCH:MSExchangeMTA:HAY:HAY04
	
	This behavior is not systematic, but occurs very often.
	
	CAUSE
	=====
	
	Groupshield software from McAffee is installed on the server and is the origin
	of this behavior. However, when you uninstall this groupware software, (N-)DR
	and (N-)RR are all in German. McAffee is running on its own account, which is
	the last account connected to the mailboxes.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:8.0,8.01,8.02,8.03,8.04,8.5; winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
