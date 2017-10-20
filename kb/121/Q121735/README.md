---
layout: page
title: "Q121735: PC Ext: UNINIT Status Message on External"
permalink: /kb/121/Q121735/
---

## Q121735: PC Ext: UNINIT Status Message on External

{% raw %}

	Article: Q121735
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With version 3.2 of the message transfer agent (MTA), when you press F2, one of
	the status messages that may appear is UNINIT. The UNINIT Status Message is an
	indication that the following events occurred:
	
	- The MTA successfully connected to the Server having the postoffice.
	
	- The MTA was able to read the MASTER.GLB file of the postoffice in the UNINIT
	  status.
	
	- The MTA failed to access information needed to complete the initialization
	  process. This information is normally obtained by reading several files from
	  the postoffice.
	
	CAUSE
	=====
	
	The following circumstances can cause the UNINIT status to appear on the status
	screen of the MTA.
	
	- An intermittent network could allow the MTA to attach to the server but fail
	  to download information into memory. The MASTER.GLB file is only 176 bytes
	  and is likely to be readable even on a poorly performing network. Other
	  necessary files may contain much more data and would be more likely to fail
	  on an intermittent network.
	
	- Lack of adequate access rights. The MTA must have complete rights to the
	  postoffice database. On a Novell server, the Filescan right is required, but
	  the Supervisor right is not.
	
	- A necessary file may be locked open. Confirm that ACCESS2.GLB, GROUP.GLB,
	  NETWORK.GLB, and all .XTN files are not locked open.
	
	- If you are running multiple MTAs, another MTA may have one of the necessary
	  files locked open at the exact time this MTA was trying to initialize. The
	  MTA will try to initialize from the drive again when the IntervalUpdate time
	  is reached. By default, the IntervalUpdate value is set to 5 minutes. If the
	  IntervalUpdate has been set to zero, no attempt to re-initialize will occur.
	
	
	KB: SRX940930000890
	Tech By: Stann
	SRG Group: PO
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
