---
layout: page
title: "Q156698: Disabling Access to Network Resources Using System Policies"
permalink: /kb/156/Q156698/
---

## Q156698: Disabling Access to Network Resources Using System Policies

	Article: Q156698
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The default user icon in System Policy Editor lets you hide network resources in
	Network Neighborhood or even completely hide the Network Neighborhood itself
	(Default User\Shell\Restrictions\Hide Network Neighborhood).
	
	However, users can still browse network resources from Windows Explorer and My
	Computer using the Map Network Drive icon in addition to the NET VIEW and NET
	USE commands issued from the command prompt.
	
	WORKAROUND
	==========
	
	In My Computer, select the "Hide drives in My Computer" check box under Default
	User\Shell\Restrictions\Hide Drives. Although the Map Network Drive button
	continues to show a list of servers, logical network drives are not visible in
	Windows Explorer, My Computer, or at the MS-DOS prompt.
	
	Attempts to establish new logical drive connections from the command prompt
	appear to work. A NET USE to a network resource completes with the message
	"Command completed successfully." Attempts to access the resource, however, fail
	with an error message: "The device is not ready."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
