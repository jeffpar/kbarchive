---
layout: page
title: "Q150811: XADM: Explanation of Exchange PCMTA's /Z Parameter"
permalink: /kb/150/Q150811/
---

## Q150811: XADM: Explanation of Exchange PCMTA's /Z Parameter

{% raw %}

	Article: Q150811
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange PCMTA service uses a /Z parameter to indicate that the
	Microsoft Exchange Server service account should be used to validate the
	connection to a MSMail postoffice share. This parameter is stored in the Windows
	NT registry.
	
	MORE INFORMATION
	================
	
	This parameter is stored in the Registry under the PCMTA instance created by the
	administrator:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	                           \<PCMTAinstance>\Parameters
	
	The values DrivesUNC and DrivesWAN hold the connection information for the MSMail
	postoffices. The format is as follows:
	
	  DrivesUNC:REG_MULTI_SZ:\\serverA\share1 /Z \\serverB\share2 /Z ...
	  DrivesWAN:REG_MULTI_SZ:\\serverC\share3 /Z \\serverD\share4 /Z ...
	
	Note: DrivesWAN connections are set by either disabling dispatch on the instance
	of PCMTA or selecting not to pick up mail for a particular postoffice.
	
	When connection information is required, the /Z parameter will be followed by the
	encrypted Connect As information. For example:
	
	  DrivesUNC:REG_MULTI_SZ:\\serverA\share1 /Z DOMAIN\user 742SF32JA234
	  234J53AA001
	
	Because all these parameters are automatically entered by the Microsoft Exchange
	Administrator program, there is no need to manually edit the Registry with this
	information.
	
	Additional query words: command line novell lanman connector mta
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
