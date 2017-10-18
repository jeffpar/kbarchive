---
layout: page
title: "Q258669: Redirection Operators (&lt; and &gt;) May Not Work"
permalink: kb/258/Q258669/
---

## Q258669: Redirection Operators (&lt; and &gt;) May Not Work

	Article: Q258669
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP5,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP5, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The redirection operators (< and >) may not work if a command is run by a
	file-type association.
	
	For example, assume that you have an .xxx file associated with Program.exe.
	Running the "test.xxx" command has the same effect as running "program.exe
	test.xxx". If you redirect the output of Program.exe to a file by using the
	"program.exe test.xxx > output.txt" command, the output is redirected to the
	Output.txt file. However, if you try to redirect the output of Program.exe to a
	file by using the "test.xxx > output.txt" command, the output is not
	redirected to the file.
	
	CAUSE
	=====
	
	This behavior is caused by a problem in the Kernel32.dll dynamic-link library
	(DLL).
	
	
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
	
	  Date      Time    Size     File name     Platform
	  -------------------------------------------------
	  03/28/00  05:35p  375,568  Kernel32.dll  Intel
	  03/28/00  05:34p  590,096  Kernel32.dll  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400search kbWinNTS400 kbWinNTW400SP6a
	Version           : winnt:4.0,4.0 SP5,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
