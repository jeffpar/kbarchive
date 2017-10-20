---
layout: page
title: "Q175957: Event ID 5770 When Installing New Member Server"
permalink: /kb/175/Q175957/
---

## Q175957: Event ID 5770 When Installing New Member Server

{% raw %}

	Article: Q175957
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to add a new server computer to a Windows NT domain, the
	operation fails. Event ID 5770 appears in the event log:
	
	  The session setup to the Windows NT Domain Controller <PDC_NAME> from
	  computer <WORKSTATION> using account <MACHINENAME$> failed.
	  <MACHINENAME> is declared to be a BDC in domain <DOMAIN2>. However,
	  <MACHINENAME$> tried to connect as either a DC in a trusted domain, a
	  member workstation in domain <DOMAIN2>, or as a server in domain
	  <DOMAIN2>. Use the Server Manager to remove the BDC account for
	  <MACHINENAME>.
	
	CAUSE
	=====
	
	The name you are trying to use was previously in use by a LAN Manager domain
	controller. The machine name MACHINENAME$ exists in the domain accounts
	database, having been migrated from the LAN Manager accounts database.
	
	RESOLUTION
	==========
	
	Using User Manager for Domains, delete the MACHINENAME$ account from the domain
	accounts database. Reset the machine account, if necessary, by deleting and
	recreating it in Server Manager.
	
	Additional query words: lanman lan manager error
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
