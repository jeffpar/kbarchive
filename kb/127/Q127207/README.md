---
layout: page
title: "Q127207: Missing Objects and Counters in Performance Monitor"
permalink: kb/127/Q127207/
---

## Q127207: Missing Objects and Counters in Performance Monitor

	Article: Q127207
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	When you attempt to add counters to the chart in Performance Monitor, the list
	of objects and counters may be incomplete or blank.
	
	MORE INFORMATION
	================
	
	The Performance Monitor object and counter names are stored in the "Counters" in
	this Registry Key:
	
	  HKEY_LOCAL_MACHINE
	   \Software
	    \Microsoft
	     \WindowsNT
	      \CurrentVersion
	       \Perflib
	        \<LangID> (LangID 009 = U.S. English)
	
	If the list of objects and counters available to chart in Performance Monitor is
	incomplete or blank, it may be because Perflib subkeys other than the 009 subkey
	exist. Performance Monitor only uses the contents of one <LangID> subkey.
	Additional subkeys under the Perflib subkey are created when the Language
	setting in Control Panel is modified.
	
	To restore the default list of counters and objects in Performance Monitor, do
	either of these steps:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	- If you have Windows NT version 3.1:
	
	  Delete all <LangID> subkeys except the 009 subkey.
	
	  NOTE: As a precaution, save the Perflib subkey before deleting any of the
	  <LangID> subkeys.
	
	- If you have Windows NT version 3.1 or 3.5:
	
	  In Windows NT 3.5 you cannot delete any of the <LangID> subkeys.
	
	  Change your Language setting in the International dialog box Control Panel
	  back to its original setting or to the setting that includes the complete
	  list of objects and counters.
	
	- If you have Windows NT 3.51 or 4.0:
	
	  The Performance Monitor system counter names and explain text have been moved
	  from the registry to two data files, PerfCxxx.dat and PerfHxxx.dat, located
	  in the %SystemRoot%\system32 directory. They can be renamed and expanded off
	  of the installation CD.
	
	
	Additional query words: prodnt perfmon perflib counters corrupted perfc009.dat.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51,4.0
	
	=============================================================================
	
