---
layout: page
title: "Q124816: Very Large or Very Small Transfers to SCSI Printers Fail"
permalink: /kb/124/Q124816/
---

## Q124816: Very Large or Very Small Transfers to SCSI Printers Fail

{% raw %}

	Article: Q124816
	Product(s): Microsoft Windows NT
	Version(s): 
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
	
	Your computer stops responding (hangs) if the SCSIPRNT driver is loaded and a
	SCSI printer is connected.
	
	CAUSE
	=====
	
	SCSIPRINT does not handle transfers correctly when they are smaller than the
	maximum transfer length of the device in question. In addition, on large
	transfers, it assumes that the request is either a 10-byte SCSI Read or SCSI
	Write command, but SCSI printers use a 6-byte SCSI Print command. When the
	10-byte write command is issued, the SCSI printer rejects the command as an
	illegal request.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in the latest U.S. Service Pack for Windows NT version
	3.5. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
