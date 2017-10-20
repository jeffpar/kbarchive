---
layout: page
title: "Q143154: Indicate Expandable Branches In File Manager Causes Delay"
permalink: /kb/143/Q143154/
---

## Q143154: Indicate Expandable Branches In File Manager Causes Delay

{% raw %}

	Article: Q143154
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	File Manager performance is excessively slow and causes delays in displaying
	directories in extremely large directory structures. Every time a directory is
	opened, you see the "Directories read:" message in the lower- left corner of
	File Manager.
	
	CAUSE
	=====
	
	When Indicate Expandable Branches (on the Tree menu) is enabled in File Manager,
	it must open every directory and do a FindFirstFile() to determine if
	subdirectories exist (that is, the "+" on the directory folders in File Manager
	when Indicate Expandable Branches is enabled).
	
	If Indicate Expandable Branches is not enabled, File Manager uses the directory
	list it has already received. This setting is saved in the user's profile.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	

{% endraw %}
