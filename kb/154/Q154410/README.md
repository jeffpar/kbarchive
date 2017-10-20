---
layout: page
title: "Q154410: New WINS Registry Entries In Windows NT 4.0"
permalink: /kb/154/Q154410/
---

## Q154410: New WINS Registry Entries In Windows NT 4.0

{% raw %}

	Article: Q154410
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Some new registry entries are available for Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The registry path for these entries is the following:
	
	  HKEY_LOCAL_MACHINE\ 
	  SYSTEM\ 
	  CurrentControlSet\ 
	  Services\ 
	  Wins\ 
	  Parameters
	
	     BurstHandling
	     Type = REG_DWORD
	     Value: 0 or 1
	     Default = 0
	
	This parameter is used to temporarily achieve a steady state in the WINS server
	when the WINS server is either started with a clean database or many WINS
	clients come online for the first time. Either situation causes a large amount
	of name registration and name refresh traffic to occur. The WINS server
	currently stores a maximum of 25,000 name registration and refresh queries in
	its queue before dropping queries. By using this parameter, the WINS server can
	be configured to send success responses to the clients whose requests are
	dropped. These response will have time-to- live (TTL) values that will slow down
	the refresh rate of those WINS clients and regulate the burst of WINS client
	traffic. This will result in a steady state being reached much more quickly.
	
	To turn on this parameter, change the value to 1.
	
	
	The ConsistencyCheck Subkey
	---------------------------
	
	This is an optional subkey that should be created if you want WINS to
	periodically perform database consistency checks. To create this subkey, start
	Regedt32.exe and go to the following key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Wins\Parameters
	
	Create a new value named ConsistencyCheck. Once this key has been created, you
	can add the following values:
	
	  MaxRecsAtATime
	  Type = REG_DWORD
	  Range = 1000 to total number of records (decimal)
	  Default = 30000
	
	Specifies the maximum number of records that will be replicated in one
	consistency check cycle. WINS does consistency checks on the records of each
	owner WINS server (the WINS server from which the record was replicated). After
	checking an owner WINS server, the local WINS server continues to the next owner
	WINS server, or stops. This is determined by the MaxRecsAtATime value.
	
	  UseRplPnrs
	  Type = REG_DWORD or nonzero value
	  Range = 0 or nonzero
	  Default = 0
	
	If set to zero, WINS will contact the owner WINS server. If set to a nonzero
	value, WINS sill contact only its pull partners to perform consistency checks.
	If set to nonzero, WINS randomly picks a WINS from its list of pull partners
	unless the owner WINS server also happens to be a pull partner. In that case,
	the owner WINS is contacted.
	
	  TimeInterval
	  Type = REG_DWORD
	  Range = 21600 (6 hours) - entered in seconds (decimal)
	  Default = 86400 (24 hours) - entered in seconds (decimal)
	
	Specifies the time interval between WINS server database consistency checks.
	
	  SpTime
	  Type = REG_SZ
	  Default = 2:00:00 (2 A.M.)
	
	Specifies the specific time at which the first WINS server database consistency
	check will occur. The time is specified in hh:mm:ss format. Thereafter, the WINS
	database is periodically checked for consistency by using the time interval
	specified in the TimeInterval parameter.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
