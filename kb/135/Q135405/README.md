---
layout: page
title: "Q135405: Repairing a Corrupted WINS Database w/ Starting Version Count"
permalink: /kb/135/Q135405/
---

## Q135405: Repairing a Corrupted WINS Database w/ Starting Version Count

{% raw %}

	Article: Q135405
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how you may increase the Starting Version Count within
	WINS preferences to repair WINS database corruption.
	
	MORE INFORMATION
	================
	
	To repair WINS database corruption, you may modify the Starting Version Count
	(also called Starting Version ID) within WINS preferences to increase the
	Highest Version ID of the Local Database. You may set this Starting Version ID
	only to a higher value than the existing Highest Version ID. After you set it to
	a higher value you may not lower it without deleting the databases.
	
	NOTE: Although the terms Starting Version ID and Highest Version ID contain the
	word Version they do not refer to a particular released version of the product,
	but to the number of entries in the WINS database. Therefore, you may use any
	number that is a higher value than the current Starting Version ID. For
	additional information, refer to the EXAMPLES section below.
	
	To modify the Starting Version ID in the registry:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Under the subtree HKEY_LOCAL_MACHINE, select the following subkey:
	
	  \System\CurrentControlSet\Services\WINS\Parameters
	
	  The following parameters for the Starting Version count appear:
	
	  VersCounterStartVal_LowWord: REG_DWORD
	  VersCounterStartVal_HighWord: REG_DWORD
	
	2. Select the parameter you want to modify. If you are unsure about which
	  parameter to select, read the EXAMPLES section below.
	
	3. From the Edit menu, choose DWORD.
	
	4. Type the higher hexadecimal value and choose OK.
	
	EXAMPLES
	--------
	
	A Starting Version ID of FF78 hexadecimal (hex) appears as:
	
	  VersCounterStartVal_LowWord: REG_DWORD:0x0000FF78
	  VersCounterStartVal_HighWord: REG_DWORD:0x00000000
	
	To increment this number, change the VersCounterStartVal_LowWord value to FF79.
	
	As the number of database entries grows the VersCounterStartVal_LowWord value
	increases until it reaches 0xFFFFFFFF hex that is the maximum number for a
	double word hexadecimal value. If you want to increment this number by one, you
	need to start using the VersCounterStartVal_HighWord counter. For the starting
	Version ID of 100000000 hex, both parameters appear as follows:
	
	  VersCounterStartVal_LowWord: REG_DWORD:0x00000000
	  VersCounterStartVal_HighWord: REG_DWORD:0x00000001
	
	A Starting Version ID of 100000001 hex appears as:
	
	  VersCounterStartVal_LowWord: REG_DWORD:0x00000001
	  VersCounterStartVal_HighWord: REG_DWORD:0x00000001
	
	A Starting Version ID of 12FF6F782B3 hex appears as:
	
	  VersCounterStartVal_LowWord: REG_DWORD:0xF6F782B3
	  VersCounterStartVal_HighWord: REG_DWORD:0x0000012F
	
	Additional query words: prodnt tcp/ip tcpip
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
