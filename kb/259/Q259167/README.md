---
layout: page
title: "Q259167: Program Receives &quot;File Is Corrupt or Unreadable&quot; Error Message"
permalink: /kb/259/Q259167/
---

## Q259167: Program Receives &quot;File Is Corrupt or Unreadable&quot; Error Message

{% raw %}

	Article: Q259167
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWin2000PreSP1Fix kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a multiple-processor computer with two or more programs that access the same
	files by using the CreateFile (or another) file function, one of the programs
	may receive a STATUS_FILE_CORRUPT_ERROR response and generate an error message
	similar to:
	
	  FILE.TXT -- Corrupt File
	  The file or directory \dir\temp is corrupt and unreadable, please run the
	  Chkdsk utility.
	
	However, when you run Chkdsk.exe, no file corruption is found.
	
	CAUSE
	=====
	
	This behavior is caused by a timing issue in the NTFS file system when both
	programs attempt to access the same file at the same time. This timing problem
	causes a STATUS_FILE_CORRUPT_ERROR response to be returned erroneously to one of
	the programs.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size     File name  Platform
	  ------------------------------------------------
	  04/04/2000  01:02p  561,808  Ntfs.sys   Alpha
	  04/04/2000  01:02p  368,464  Ntfs.sys   Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000PreSP1Fix kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
