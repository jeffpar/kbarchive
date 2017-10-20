---
layout: page
title: "Q163525: Delay When Saving Word File to Windows NT 4.0 Server"
permalink: /kb/163/Q163525/
---

## Q163525: Delay When Saving Word File to Windows NT 4.0 Server

{% raw %}

	Article: Q163525
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Word version 7.0 or 2000, there may be a delay when you save a
	modified document to a network drive that is located on a Windows NT 4.0 server.
	
	CAUSE
	=====
	
	The Windows NT client was ignoring the oplock break request from the server.
	
	RESOLUTION
	==========
	
	This problem has been identified as a Windows NT environment issue.
	
	To work around this problem, you can disable an optimization called oplock
	(opportunistic lock) on the remote Windows NT server or you can apply the latest
	service pack.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start the Registry Editor (Regedt32.exe).
	
	2. Find the following key:
	
	  \HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	           \LanmanServer\Parameters
	
	3. Add the following entry, if it is not already present:
	
	    Value Name: EnableOplocks
	        Data Type:  REG_DWORD
	        Data:       0
	
	  If the entry already exists, set the data to 0.
	
	4. Exit the registry.
	
	5. Shut down and restart Windows NT.
	
	For additional information about oplocks, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q129202 Explanation of Opportunistic Locking on Windows NT
	
	Disabling oplocks might cause a slight decrease in performance, but should not be
	noticeable.
	
	If you encounter a drop in performance, please click on the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q249799 Slow Network Performance with Service Pack 4, 5, 6, or 6a
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	
	
	Additional query words: 4.00 prodnt slow word97 word95
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
