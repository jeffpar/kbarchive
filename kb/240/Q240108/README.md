---
layout: page
title: "Q240108: Backup Host Security Cache Deleted on Exit"
permalink: /kb/240/Q240108/
---

## Q240108: Backup Host Security Cache Deleted on Exit

{% raw %}

	Article: Q240108
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When SNA Server Host Account Cache service (SnaDatabase) is installed on a
	Windows NT Backup Domain Controller (BDC) in a backup role, the host account
	database is deleted when the service is stopped, if contact with the primary
	Host Account Cache service has been lost.
	
	When the backup Host Account Cache service is restarted, it will automatically
	contact the primary cache and download a new copy of the host cache database.
	However, if the primary Host Account Cache is unreachable (or has been taken off
	the network), the backup Host Account Cache will fail to start and will no
	longer have a host cache database.
	
	CAUSE
	=====
	
	The backup Host Account Cache service was designed to delete the database file
	when ending, if contact with the primary cache is lost. Even though the database
	is already encrypted using 128-bit encryption, the backup cache service attempts
	to implement additional security to prevent the database file from being
	accessible when the backup computer is taken off the network.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	If a backup Host Account Cache service is planned to be promoted to a primary
	role (for example, promoting the computer to a Windows NT Primary Domain
	Controller), the backup cache should be stopped while the primary cache is still
	on the network.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0, 4.0 SP1 and 4.0 SP2. This problem was first corrected in SNA Server version
	4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	The following scenario illustrates the problem that can occur when you promote a
	backup cache to a primary role:
	
	1. Install a Windows NT PDC with SNA Server, Host Acct Cache (primary role),
	  WinNT Account Synchronization, and SnaHostProc services.
	
	2. Install a Windows NT BDC with SNA Server, Host Acct Cache (backup role),
	  WinNT Acct Sync (backup) and SnaHostProc.
	
	3. Configure a host security domain associated with the remote system, using two
	  connections (one from each SNA Server computer).
	
	  NOTE: On the SNA Server computer that has the second connection added to the
	  remote system host security domain, it's necessary to manually add the Domain
	  registry key for the other host security domain and its associated values.
	  For example, assuming the host security domain of "DILBERT":
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\
	  SnaHostProcess\Parameters\Domains\DILBERT\
	  LocalLU
	  RemoteLU
	  TPMode
	  and so on...
	
	4. Start both connections and populate the Host Account Cache with entries using
	  Host Account Manager. Test to make sure that the Host Account Cache lookup
	  works from both SNA Server computers (for example, using the WIN5250 applet).
	
	5. Unplug the PDC (to simulate a network outage). Leave the PDC unplugged
	  through the following sequence:
	
	  a. On the BDC, the following errors are logged in the application log:
	
	  Event ID: 0
	  Source: SNA Host Security
	  Type: Information
	  Description: The description for Event ID ( 0 ) in Source ( SNA Host Security
	  ) could not be found. It contains the following insertion string(s): 0x79.
	
	  b. If you try to stop the SnaDatabase, the following error occurs:
	
	  C:> net stop snadatabase
	  The SNA Host Account Cache service could not be stopped
	
	  c. Two more Event IDs (Event ID: 0) are logged. If you try to stop it again,
	     the following error occurs:
	
	  The service could not be controlled in its present state
	
	  d. Within another couple minutes, another Event ID: 0 is logged, and the
	     SnaDatabase service is no longer running (no event is logged to indicate
	     that it stopped),
	
	  e. When the SnaDatabase service has stopped, the Host Cache database is
	     deleted (for example, no more hidden file: Hsroot\Hssystem\Dbase.dbs )
	
	     If the SnaDatabase is restarted on the BDC (with PDC still down), the
	     following two events are logged:
	
	  Event 0: x79
	  Event 1324: SNA Host Account Cache Started - Database synchronized
	
	  f. A few seconds later, another Event 0: x79 is logged, and the SnaDatabase
	     service quietly ends (no events are logs).
	
	With this fix applied, the backup Host Account Cache database is no longer
	deleted, and the event logging is corrected.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
