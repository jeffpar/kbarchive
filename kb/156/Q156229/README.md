---
layout: page
title: "Q156229: XFOR: Errors 2140 and 4074 When Starting the IMC"
permalink: /kb/156/Q156229/
---

## Q156229: XFOR: Errors 2140 and 4074 When Starting the IMC

{% raw %}

	Article: Q156229
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
	
	When starting the IMC you may receive a 2140 error. If you look in the
	application event log you may also see event 4074 with MSExchangeIMC as the
	source. The text of event 4074 reads as follows:
	
	  Unable to start the Internet Mail Connector because the routing table could
	  not be read. Wait a few minutes to allow any routing table updates to
	  complete and then try to start it again. If this problem persists, check the
	  configuration on the Connections and Address Space pages of the Internet Mail
	  Connector properties.
	
	MORE INFORMATION
	================
	
	The most likely cause of this error is that there is a value other than SMTP in
	the Address Type field on the Internet Mail tab of the IMC properties.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Change the Address Type field on the Internet Mail tab of the IMC properties
	  to SMTP.
	
	  -or-
	
	- Add a proxy address of desired type.
	
	  -or-
	
	- Remove any SMTP address type entered on the Address Tab of the Internet Mail
	  Connector properties.
	
	  -or-
	
	- Modify a key in the registry, according to the following steps:
	
	  WARNING: Using Registry Editor can cause serious, system-wide errors that may
	  require you to reinstall Windows. Microsoft cannot guarantee that problems
	  resulting from the incorrect use of Registry Editor can be solved. Use
	  Registry Editor at your own risk.
	
	  1. Start Registry Editor (Regedt32.exe).
	
	  2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     SYSTEM\CurrentControlSet\Services\MSExchangeIMC\Parameters
	
	  3. Add the value SiteDomain to this key. Make the data type REG_SZ, and make
	     the string the address type you want to use.
	
	  For more information on modifying this key, see section 7.3.4 in the
	  Readme.wri on the Microsoft Exchange Server 4.0 compact disc, or section
	  8.3.4 in the Readme.wri on the Microsoft Exchange Server 4.0a compact disc.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
