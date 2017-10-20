---
layout: page
title: "Q143166: Windows NT 3.51 SP4 Allows Extended Characters in 8.3 File Names"
permalink: /kb/143/Q143166/
---

## Q143166: Windows NT 3.51 SP4 Allows Extended Characters in 8.3 File Names

{% raw %}

	Article: Q143166
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Prior to Windows NT version 3.51 and Service Pack 4, 8.3 convention file names
	on an NTFS volume were limited to the standard ASCII character set (minus some
	reserved characters). Extended characters, such as foreign accent characters
	were not available. With Service Pack 4, a registry setting can be configured so
	NTFS can use extended characters in the 8.3 short file name.
	
	With this feature enabled, the 8.3 short file names have the same behavior as in
	Windows NT 3.1, before the support for long file names was added.
	
	MORE INFORMATION
	================
	
	To enable the use of extended characters in the 8.3 convention file names on a
	NTFS volume:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Control\FileSystem
	
	3. Add a new value to this key:
	  Value: NtfsAllowExtendedCharacterIn8dot3Name
	  Data Type: REG_DWORD
	  Data Value: 0x1
	
	To enable extended characters, set the data value 0x1. To disable extended
	characters, set the data value 0x0 or remove the value from the key.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
