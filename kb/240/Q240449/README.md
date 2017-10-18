---
layout: page
title: "Q240449: Aciniupd Does Not Update Some Characters Properly into .ini File"
permalink: kb/240/Q240449/
---

## Q240449: Aciniupd Does Not Update Some Characters Properly into .ini File

	Article: Q240449
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 11-DEC-2001
	
	This article discusses a Beta release of a Microsoft product. The 
	information in this article is provided as-is and is subject to change
	without notice.
	
	No formal product support is available from Microsoft for this Beta 
	product. For information about obtaining support for a Beta release, 
	please see the documentation included with the Beta product files, or 
	check the Web location from which you downloaded the release.
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to add a non-alphanumeric character into an .ini file with the
	Aciniupd.exe tool, it may not work as you expect.
	
	For example, the following sample file uses an .ini file named Test.ini and
	attempts to modify the [CashRegister] section of the .ini file. The problem in
	the example is that there is a dash (-)at the beginning of the string that needs
	to be changed.
	
	  Existing Line: parms=-i"c:\appl\prod\views\ini\costview"
	  Required Change: parms=-i"i:\views\ini\costview"
	
	Using the following batch file, the dash does get entered, but with a space in
	front:
	
	  set V=" -I\"I:\views\ini\costview\"
	  aciniupd.exe /v /e "TEST.INI" "CashRegister" "parms" %V%%
	
	CAUSE
	=====
	
	Although the "\" escape character is used, it is not interpreted properly at the
	beginning of the string. If there is a space at the beginning of the string
	("\-I\"I:\views4\ini\costview\"), Aciniupd adds the escape character as well. As
	used as in the above batch file, the string does get implemented, but with the
	space.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTS400search kbwin2000Search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:4.0,4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
