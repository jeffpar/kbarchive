---
layout: page
title: "Q126752: DCs Fail to Synchronize or Validate Users Over NWLINK"
permalink: /kb/126/Q126752/
---

## Q126752: DCs Fail to Synchronize or Validate Users Over NWLINK

{% raw %}

	Article: Q126752
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT Netlogon services may fail. Users may fail to be logged on and
	servers may be unable to synchronize. The following errors may appear be or
	reported in the system log:
	
	  1311 There are currently no logon servers available to service the logon
	  request.
	
	  5719 No windows NT domain controller is available for domain...
	
	  3096 The Windows NT domain controller for this domain could not be located.
	
	  3210 Failed to authenticate with <computer name>, a Windows NT domain
	  controller for domain <name>.
	
	  5723 The session setup from the computer <computer name> failed to
	  authenticate. The name of the account referenced in the security database is
	  <name>. The following error occurred: Access is denied.
	
	
	CAUSE
	=====
	
	When the default protocol becomes inoperable, Netlogon fails to complete
	operations because it does not attempt to use other installed protocols.
	
	NOTE: Protocols can become inoperable when catastrophic infrastructure problems
	occur involving routers or network addressing.
	
	
	RESOLUTION
	==========
	
	Netlogon has been updated. When Netlogon receives an error responding to a
	mailslot message from the first protocol that it attempts to use, it responds to
	duplicates of the original message received by all available protocols. Datagram
	mailslot messages are used by Netlogon to initiate client logon operations and
	inter-domain operations including the synchronization of domain controllers
	(DCs). By responding to all messages received, Netlogon responds successfully,
	even if an individual protocol is not operating properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in the latest US Service Pack for Windows NT. For
	information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt domain controller controllers viewer network mail slot net logon
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
