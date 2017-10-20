---
layout: page
title: "Q155920: XFOR: Setting Accept/Reject by Host in IMC Connection Settings"
permalink: /kb/155/Q155920/
---

## Q155920: XFOR: Setting Accept/Reject by Host in IMC Connection Settings

{% raw %}

	Article: Q155920
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Server Administrator's Guide, pages 332-338, explains how
	to set up the Connections Property page for the Internet Mail Connector (IMC).
	However, the documentation on Accepting or Rejecting by Host setting does not
	state the effect of setting this feature, that is, whether a Non-Delivery Report
	is sent or connections are simply refused.
	
	If you set the Reject by Host setting, all hosts that fit that masked IP range
	will get the following error when attempting a connection:
	
	  521 <Domain Name of Server you are connecting to> access denied
	
	If you set the Accept by Host setting for a Masked IP range that falls under an
	entry for a Reject by Host, the Accept by Host will override and allow a
	connection.
	
	MORE INFORMATION
	================
	
	On the Internet Mail Connector property page, on the Connections tab, under
	Accept or Reject by Host, you see the following items:
	
	  First Entry:
	  IP Address = 157.57.10.0
	  Mask = 255.255.0.0
	  Action = Reject connection from this Host
	
	This first entry will reject all connections from class B domain 157.57.
	
	  Second Entry:
	  IP Address = 157.57.10.0
	  Mask = 255.255.255.0
	  Action = Accept connection from this Host
	
	This second entry will accept a connection from class C domain 157.57.10,
	regardless of the restriction set in the first entry. Host 157.57.10.25 will be
	granted access. Host 157.57.15.2 will be denied access.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
