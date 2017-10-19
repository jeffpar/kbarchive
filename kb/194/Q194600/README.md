---
layout: page
title: "Q194600: PC Ext: Some &#42;SPECIAL Mssgs. Cause WinNT &amp; OS/2 MMTAs to Fail"
permalink: /kb/194/Q194600/
---

## Q194600: PC Ext: Some &#42;SPECIAL Mssgs. Cause WinNT &amp; OS/2 MMTAs to Fail

	Article: Q194600
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The OS/2 multitasking message transfer agent (MMTA) stops responding (hangs)
	with SYS 3175 memory allocation errors when the External program processes
	*SPECIAL messages.
	
	The Windows NT MMTA hangs with a General Protection Fault on Async.ovl. An OS/2
	program caused a protection violation.
	
	At this point, the OS/2 and the Windows NT MMTA stops processing mail, and
	continue to produce errors even after re-starting.
	
	The MS-DOS version of the External program does not produce the error.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  File Name      Version
	  ----------------------
	  External.exe   3.5.24
	
	This hotfix has been posted to the following Internet location as Exty2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/All-Y2K/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail for PC Networks
	versions 3.2 and 3.5.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN350
	Version           : WINDOWS:3.2,3.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
