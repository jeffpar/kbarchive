---
layout: page
title: "Q242007: BUG: RasDial() Function Fails to Dial Multilink Entries"
permalink: /kb/242/Q242007/
---

## Q242007: BUG: RasDial() Function Fails to Dial Multilink Entries

{% raw %}

	Article: Q242007
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): _IK12469
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The RasDial function fails to aggregate multiple channels of Remote Access
	Service (RAS)-capable devices on a computer that is running Windows NT 4.0
	Server or Windows NT Workstation 4.0 with Service Pack 4 (SP4). The dial-up
	connectoid user interface (UI) works fine.
	
	This problem does not occur with RRAS for Windows NT 4.0 Server; the problem
	occurs only with the standard RAS that is shipped with Windows NT 4.0 Server or
	Windows NT 4.0 Workstation. However, RRAS cannot be applied to Windows NT 4.0
	workstation.
	
	CAUSE
	=====
	
	This problem is cause by a bug in Windows NT 4.0 RAS.
	
	RESOLUTION
	==========
	
	On Windows NT 4.0 Workstation, use the RasDialDlg function. On Windows NT 4.0
	Server and Advanced Server, use the RasDialDlg function or install the RRAS
	update.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Windows 2000.
	
	MORE INFORMATION
	================
	
	Step to Reproduce the Problem on a Windows NT 4.0 Workstation
	-------------------------------------------------------------
	
	1. Create a phone book entry with multiple lines.
	
	2. From the UI, click the entry, and then make a connection.
	
	3. Verify that all the lines are connected.
	
	4. Disconnect it.
	
	5. Create a sample dial-up code by using the RasDial function.
	
	6. Call the RasDial function with the phone book entry that was created in step
	  1.
	
	Notice that only the first line is connected.
	
	Additional query words: multi-link
	
	======================================================================
	Keywords          : _IK12469 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
