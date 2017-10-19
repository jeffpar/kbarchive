---
layout: page
title: "Q177221: XADM: Errors Occur During Exchange Service Pack Upgrade"
permalink: /kb/177/Q177221/
---

## Q177221: XADM: Errors Occur During Exchange Service Pack Upgrade

	Article: Q177221
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to apply a service pack to a computer running Microsoft
	Exchange Server, you may receive an error message during setup that says some
	files are in use, even when no other applications are running. The error message
	may be similar to the following:
	
	  Could not open the file named 'C:\EXCHSRVR\BIN\ADDRESS.DLL'. It is in use by
	  another application.
	
	CAUSE
	=====
	
	The System Attendant is possibly running again. Part of the update and setup
	process is to first stop all known Exchange related services; this includes the
	System Attendant. However, if there is at least one server monitor running
	against the server, the System Attendant can be restarted. This occurs even if:
	
	- The system attendant is not set to be monitored.
	
	- The server monitor is configured to take no action.
	
	- You use ADMIN /T NR to suspend notifications and repairs.
	
	WORKAROUND
	==========
	
	To work around this issue, stop all server monitors that run against the
	Exchange Server computer that is being upgraded.
	
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be an issue in Microsoft Exchange Server
	versions 4.0, 5.0, and 5.5. Mirosoft is researching this issue and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: SP1 SP2 SP3 SP4 ADMIN.EXE MMIEXT.DLL EMSABP32.DLL EMSMDB32.DLL EXCHMEM.DLL MAPI32.DLL exfaqad
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	
