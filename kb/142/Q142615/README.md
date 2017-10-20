---
layout: page
title: "Q142615: Event Log Service Fails to Check Access to Security Log File"
permalink: /kb/142/Q142615/
---

## Q142615: Event Log Service Fails to Check Access to Security Log File

{% raw %}

	Article: Q142615
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Event Viewer to examine the Security log file, the Event Log
	service does not examine the "Manage auditing and security log" privilege as the
	Concepts and Planning manual states. It does examine the Administrators
	membership.
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Windows NT 3.51
	---------------
	
	To resolve this problem, contact Microsoft Technical Support to obtain the
	following fix.
	
	This fix should have the following time stamp:
	
	  02/03/98  09:27p                46,288 Eventlog.dll (Intel)
	  02/03/98  09:24p                68,880 Eventlog.dll (Alpha)
	
	STATUS
	======
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Windows NT 3.51
	---------------
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	3.51. A supported fix is now available, but has not been fully regression tested
	and should be applied only to systems experiencing this specific problem. Unless
	you are severely impacted by this specific problem, Microsoft recommends that
	you wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	MORE INFORMATION
	================
	
	The Windows NT Concepts and Planning and System guides state that the "Manage
	auditing and security log" right allows the grantee to view and clear the Event
	Log security file.
	
	This right is granted by default to the Administrators group, even if not
	explicitly added to the "Manage auditing and security log" rights list.
	
	It is possible to grant this right to users and/or groups.
	
	Additional query words: audit
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
