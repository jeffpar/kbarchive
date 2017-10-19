---
layout: page
title: "Q150847: File Manager Truncates Long File Names Containing Spaces"
permalink: /kb/150/Q150847/
---

## Q150847: File Manager Truncates Long File Names Containing Spaces

	Article: Q150847
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use File Manager in Windows NT, and are working with files with long
	names that contain spaces, those names may in some cases be displayed in a
	truncated format.
	
	CAUSE
	=====
	
	The parser routine being used truncates file names after the last space (" ")
	found in long file names. File Manager displays this truncated file name. The
	truncated file name is used to find approximate matches of all similar file
	names for a length up to the space where the break occurs. The resulting match
	list contains all matching file names, including file names listed in 8.3
	format.
	
	STEPS TO REPRODUCE
	------------------
	
	1. Open File Manager and select a long file name containing spaces.
	
	2. Choose File and then Properties
	
	3. Select the Open By button to display the Network Properties window
	
	4. The text associated with File Name may display a truncated length; for
	  example, the name "test 123 456 789.txt" is displayed as "test 123 456".
	
	
	RESOLUTION
	==========
	
	This problem has been resolved in a hotfix to the file NTlanui.dll. Use of this
	fix resolves the display problem so that the complete file name will be
	displayed. Note, however, that this fix may have the following side effect:
	After you install it, Windows NT may underreport the number of files that are
	open. This occurs because the request for a more detailed match (using the long
	file name) may result in no matches against a file list in cases where the file
	is represented in 8.3 format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	
	
	A supported fix is now available, but is not fully regression-tested and should
	be applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the service pack release containing this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
