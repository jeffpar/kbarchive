---
layout: page
title: "Q150911: CACLS Output Cannot Be Redirected"
permalink: /kb/150/Q150911/
---

## Q150911: CACLS Output Cannot Be Redirected

{% raw %}

	Article: Q150911
	Product(s): Microsoft Windows NT
	Version(s): 3.51 SP5,4.0 SP2
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51 SP5, 4.0 SP2 
	- Microsoft Windows NT Workstation versions 3.51 SP5, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to redirect the output of CACLS to a file, the resulting
	information is incomplete. For example, the display output of "cacls c:\" is:
	
	  c:\ BUILTIN\Administrators:(OI)(CI)F
	  Everyone:(OI)(CI)C
	  CREATOR OWNER:(OI)(CI)F
	  NT AUTHORITY\SYSTEM:(OI)(CI)F
	
	If you redirect the ouput with "cacls c:\ >file.out," File.out only contains
	the following:
	
	  \:(OI)(CI)F
	  :(OI)(CI)C
	  :(OI)(CI)F
	  \:(OI)(CI)F
	
	CAUSE
	=====
	
	With Service Pack 2 for Windows NT 4.0 and Service Pack 5 for Windows NT 3.51,
	Cacls.exe was modified to handle extended characters. This modification required
	output routines that cannot be redirected.
	
	RESOLUTION
	==========
	
	Use Cacls.exe that ships with the Windows NT 4.0 CD-ROM or use XCACLS from the
	Windows NT Server Resource Kit with Update 1.
	
	NOTE: Xcacls.exe is located in the folder where you installed the Windows NT
	Resource Kit; the default location is C:\Ntreskit. On the Resource Kit CD, it is
	located in the following folder:
	
	  D:\<platform>\Netadmin
	
	where D: is your CDROM drive and <platform> is your computer platform, such
	as i386 or Alpha.
	
	MORE INFORMATION
	================
	
	For more information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	Q142661Cacls.exe May Report Errors when Handling Extended Characters
	
	Additional query words: 4.00 prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW400sp2 kbWinNTSsearch kbWinNTS400sp2 kbWinNTS400search kbWinNTS351search kbWinNTS351sp5 kbWinNTW351sp5
	Version           : :3.51 SP5,4.0 SP2
	
	=============================================================================
	

{% endraw %}
