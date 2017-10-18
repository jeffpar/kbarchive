---
layout: page
title: "Q166578: XADM: KCC Fails with More Than 212 Sites in Organization"
permalink: kb/166/Q166578/
---

## Q166578: XADM: KCC Fails with More Than 212 Sites in Organization

	Article: Q166578
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the number of Microsoft Exchange Server sites in one organization reaches
	213 or more, a knowledge consistency check (KCC) will fail with the following
	error message:
	
	  The knowledge consistency check did not correct directory
	  inconsistencies.
	
	  Be sure the directory service is running, and then try again. If the
	  error occurs, try stopping the directory service and the administrator
	  program and then restarting them. To view details of the error, see the
	  application event log in the Windows NT Event Viewer on the Microsoft
	  Exchange Server computer on which you checked knowledge consistency.
	
	Several of the following Event IDs will appear in the Windows NT Event Viewer
	Application log if diagnostics logging is set to maximum:
	
	  Event ID: 1171
	  Exception e0010004 has occurred with parameters -1026 and 0 (Internal ID
	  2060400). Please contact Microsoft Product Support Services for
	  assistance.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. We are currently researching this problem and will post more
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Important Notes
	---------------
	
	- This fix must be installed on every Microsoft Exchange Server computer in
	  your organization. In addition, you cannot reinstall a previous version of
	  Dsamain.exe on any of your Microsoft Exchange Server computers. If you do so,
	  the Microsoft Exchange Server directory will be damaged beyond repair.
	
	- This fix must be installed before the limit is reached. The fix does not
	  repair damage that occurs when the limit is reached prior to installing the
	  fix.
	
	MORE INFORMATION
	================
	
	For more information about how to set the Diagnostics Logging level, please
	refer to the Microsoft Exchange Server Administrator's Guide, chapter 17.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
