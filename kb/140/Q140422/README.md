---
layout: page
title: "Q140422: Domain Synchronization Over a Slow WAN Link"
permalink: /kb/140/Q140422/
---

## Q140422: Domain Synchronization Over a Slow WAN Link

{% raw %}

	Article: Q140422
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT Server has a parameter that can be used to increase performance of
	replication across slow links. The parameter is called the ReplicationGovernor.
	
	A backup domain controller (BDC) uses the ReplicationGovernor registry value to
	increase the performance of domain synchronization over a slow WAN link.
	
	IMPORTANT: The ReplicationGovernor parameter is supported only on Windows NT
	Server 3.5 or later.
	
	MORE INFORMATION
	================
	
	The ReplicationGovernor defines both the size of the data transferred on each
	call to the primary domain controller (PDC) and the frequency of those calls.
	Adjusting the ReplicationGovernor parameter works in two ways:
	
	- It reduces the size of the buffer used on each call from the BDC to the PDC,
	  ensuring that a single call does not occupy the WAN link for too long.
	
	- It causes NetLogon essentially to "sleep" between calls, allowing other
	  applications to access the WAN link between calls to the PDC.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	You can add the ReplicationGovernor parameter to the registry of a BDC under
	\HKEY_LOCAL_MACHINE subtree under the following subkey:
	
	  \SYSTEM\CurrentControlSet\Services\Netlogon\Parameters
	
	To add this parameter, assign a type of REG_DWORD and a value from zero to 100
	(the default is 100). This value defines a percentage for both the amount of
	data transferred on each call to the PDC and the frequency of those calls.
	
	For example, if you set the ReplicationGovernor value to 50 percent, it will use
	a 64KB buffer rather than the default 128 KB buffer. In addition, the BDC will
	have an outstanding synchronization call on the net for only a maximum of 50
	percent of the time.
	
	CAUTION: Care must be taken in setting this value, because if the
	ReplicationGovernor is set too low, synchronization might never complete. A
	value of zero will cause NetLogon never to synchronize, and the user account
	database can become completely out of sync.
	
	IMPORTANT: This parameter must be set individually on each BDC and should only be
	used when the PDC is a computer running Windows NT Server 3.5 or later.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
