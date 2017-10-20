---
layout: page
title: "Q111908: DoubleSpace Err Msg: DBLSPACE.&lt;nnn&gt; Is Not a Valid CVF"
permalink: /kb/111/Q111908/
---

## Q111908: DoubleSpace Err Msg: DBLSPACE.&lt;nnn&gt; Is Not a Valid CVF

{% raw %}

	Article: Q111908
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ScanDisk repairs an error in the Microsoft DoubleSpace BIOS Parameter Block
	(MDBPB), or does not find any errors, when examining a compressed volume file
	(CVF); however, DoubleSpace is unable to mount the CVF and displays the
	following error
	
	  DoubleSpace cannot mount drive <x>.
	  The <y>:\DBLSPACE.<nnn> file is not a valid compressed volume
	  file.
	  To fix it, type SCANDISK <y>:\DBLSPACE.<nnn> at the command
	  prompt.
	
	where <x> is the drive letter of the CVF when mounted, <y> is the
	host drive, and <nnn> is the CVF's sequence number (extension). You do not
	have access to the files on the compressed drive.
	
	STATUS
	======
	
	There may be rare instances of CVF corruption that ScanDisk cannot correct.
	Microsoft is researching this problem and will post new information in the
	Microsoft Knowledge Base as it becomes available.
	
	CAUSE
	=====
	
	
	WORKAROUND
	==========
	
	If you are using MS-DOS 6.2, and your CVF was not created with a beta version of
	MS-DOS 6.0, contact Microsoft Product Support Services for assistance in
	resolving this problem.
	
	
	NOTE: If your CVF was created with a beta version of MS-DOS 6.0, you need to
	remove the DoubleSpace CVFs, and then install an MS-DOS 6.x Upgrade. You will
	not be able to backup the data on the damaged CVF in this case.
	
	
	IMPORTANT: If you have the above symptoms and are running MS-DOS 6.0, upgrade to
	MS-DOS 6.2 and use ScanDisk to repair the CVF. ScanDisk can correct most
	instances of CVF corruption that prevent DoubleSpace from mounting the volume.
	
	
	MORE INFORMATION
	================
	
	To access the files on a compressed drive or CVF, DoubleSpace must mount the
	CVF. While ScanDisk can correct most problems that prevent DoubleSpace from
	mounting a CVF, there may be rare cases of CVF corruption that ScanDisk cannot
	repair.
	
	REFERENCES
	==========
	
	"Microsoft MS-DOS 6 Programmer's Reference"
	
	Additional query words: 6.22 6.20 tshoot invalid damaged
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	

{% endraw %}
