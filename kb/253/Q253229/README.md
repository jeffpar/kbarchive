---
layout: page
title: "Q253229: Full NTFS Volumes Can Be Marked &quot;Dirty&quot; Even If They Are Clean"
permalink: /kb/253/Q253229/
---

## Q253229: Full NTFS Volumes Can Be Marked &quot;Dirty&quot; Even If They Are Clean

{% raw %}

	Article: Q253229
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you fill an NTFS volume to capacity, the volume may be marked "dirty",
	even though Chkdsk finds no problems with the volume.
	
	CAUSE
	=====
	
	This issue can occur if an NTFS volume is filled to capacity in such a way that
	the file system cannot allocate disk space for its own internal data structures.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time       Size    File name     Platform
	  ----------------------------------------------------
	  02/02/2000  07:50p   363,056 ntfs.sys      i386
	  02/02/2000  07:49p   556,368 ntfs.sys      alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	This problem does not result in data loss, but can result in unexpected and
	unnecessary downtime. Because there is no way to determine the cause of the bit
	having been set, you must run Autochk or Chkdsk in order to verify that the
	volume is, in fact, clean.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
