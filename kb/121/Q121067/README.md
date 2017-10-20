---
layout: page
title: "Q121067: MS-DOS 6.21 or 6.22 Upgrade: Files Not Updated in English"
permalink: /kb/121/Q121067/
---

## Q121067: MS-DOS 6.21 or 6.22 Upgrade: Files Not Updated in English

{% raw %}

	Article: Q121067
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you upgrade to an English version of MS-DOS 6.21 or 6.22 over an existing
	installation of a non-English-language version of MS-DOS 6.0, some files may not
	be updated correctly and therefore remain in the non-English language.
	
	MORE INFORMATION
	================
	
	The following files found in an MS-DOS 6.0 non-English-language installation are
	not updated correctly when upgrading to the English version of MS-DOS 6.21 or
	6.22:
	
	MWBACKUP.DLL, MWBACKR.DLL, MWBACKUP.EXE, MWBACKUP.HLP, VFINTD.386,
	MSBACKDB.OVL, MSBACKDR.OVL, MSBACKFB.OVL, MSBACKFR.OVL, MSBACKUP.EXE,
	MSBACKUP.HLP, MSBACKUP.OVL, MSBCONFG.HLP, MSBCONFG.OVL, MSTOOLS.DLL,
	DBLWIN.HLP
	
	To update these files, manually expand the corresponding files found on the
	original MS-DOS 6.21 or 6.22 English versions to the same directory. This
	overwrites the existing non-English files.
	
	Additional query words: 6.22 foreign french
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	

{% endraw %}
