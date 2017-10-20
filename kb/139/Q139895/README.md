---
layout: page
title: "Q139895: How To Convert Personal or Common Groups"
permalink: /kb/139/Q139895/
---

## Q139895: How To Convert Personal or Common Groups

{% raw %}

	Article: Q139895
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The REGTOGRP.EXE and GRPTOREG.EXE utilities from the Windows NT Resource Kit can
	be used to give users a single group without using User Profile Editor. The
	utilities also allow you to convert personal groups to common groups and
	vice-versa.
	
	MORE INFORMATION
	================
	
	REGTOGRP.EXE creates a .GRP file in the current directory for each of your
	Program Manager groups. The .GRP files created by REGTOGRP are Windows NT
	specific and can only be used by Windows NT. They are intended to be used only
	by GRPTOREG. If the first eight characters of the group name are the same,
	REGTOGRP does not generate unique group names.
	
	GRPTOREG transfers a Windows NT compatible .GRP file to a valid Registry entry
	for use by Windows NT. Note: The .GRP file must have been created using
	REGTOGRP. GRPTOREG does not accept MS-DOS Windows .GRP files.
	
	You must first create .GRP files before converting groups. To do so, type
	REGTOGRP at the command prompt. Group files are created in the current
	directory.
	
	To convert a personal group to a common group use the /c switch. You need
	administrative privileges to use /c, otherwise a personal group is created. For
	example: "GRPTOREG /C Games.GRP" creates a Games (Common) group.
	
	NOTE: The new group is placed directly on top of the existing group. To convert
	multiple groups place a space between group names. For example, "GRPTOREG /C
	Games.GRP Startup.GRP". A lowercase "c" preceding the group name indicates a
	common group. To convert a common group to personal group, do not use the /c
	switch. For example, "GRPTOREG cMicrosoftOffice.grp" converts a Microsoft Office
	(Common) group to a personal group.
	
	If a Program Manager group already exists with the same name as the groupfile,
	using the /o switch, as in "GRPTOREG /o", overwrites it.
	
	NOTE: Personal groups and Common groups with the same name, do not have the same
	groupfile name. For example: "GRPTOREG /o cMicrosoftOffice.grp" does not
	overwrite the existing Microsoft Office (Common) group, instead a new personal
	Microsoft Office group is created.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
