---
layout: page
title: "Q251278: User Profile Folders Are Not Deleted After Logging Off"
permalink: /kb/251/Q251278/
---

## Q251278: User Profile Folders Are Not Deleted After Logging Off

{% raw %}

	Article: Q251278
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbui kbWinNT4sp6fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On Windows NT Server, Terminal Server Edition, when you enable the Delete Cached
	Profile (DeleteRoamingCache) feature and a user logs off from the Terminal
	Server, the profile is copied back to the central profile location and the
	cached copy on the terminal server box is deleted.
	
	In the process of deleting this cached copy, Terminal Server recursively removes
	all the folders under the user's profile folder. But, the top level folder of
	the user profile might not be removed.
	
	This seems as if the Delete Cached Profile setting did not work, but the empty
	folder does not cause any profile corruption.
	
	Userenv log indicates error 32, a sharing violation occurred.
	
	  1:USERENV: DeleteProfile: Delnode failed. Error = 32
	  1:USERENV: UnloadUserProfile: DeleteProfileDirectory returned false (2).
	  Error = 32
	
	CAUSE
	=====
	
	This issue can occur if the current directory for the Winlogon process running
	under the user's context gets set to the user's profile folder incorrectly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	version 4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Terminal Server.
	This problem was first corrected in Windows NT Server version 4.0, Terminal
	Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbui kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
