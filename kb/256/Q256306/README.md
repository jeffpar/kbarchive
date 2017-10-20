---
layout: page
title: "Q256306: Windows NT Backup Does Not Work with Seagate Scorpion 40 DAT"
permalink: /kb/256/Q256306/
---

## Q256306: Windows NT Backup Does Not Work with Seagate Scorpion 40 DAT

{% raw %}

	Article: Q256306
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open the Windows NT Backup program, you may receive the following error
	message:
	
	  A tape device has been detected, and the tape driver started. However,the
	  tape device is not responding. Check that the tape device power is on and
	  cables are properly connected.
	
	CAUSE
	=====
	
	This issue occurs when Windows NT detects errors initializing the Seagate drive.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Windows NT 4.0 service pack that
	contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The typical support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time       Size    File name      Platform
	  -----------------------------------------------------
	  03/02/2000  04:02p   711,440 Ntbackup.exe   i386
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, contact Seagate about how to configure the disk
	drive.
	
	
	The problem was observed on a Seagate Scorpion 40 with compression and no host
	control set; all switches were set to ON except switches 2 and 10.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0.
	
	Additional query words: seagate dat
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
