---
layout: page
title: "Q308916: Generic/Text Only Drivers Don't Correctly Print Eastern European"
permalink: kb/308/Q308916/
---

## Q308916: Generic/Text Only Drivers Don't Correctly Print Eastern European

	Article: Q308916
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6a
	Operating System(s): 
	Keyword(s): kbDriver kbRegistry
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP6a 
	- Microsoft Windows NT Server version 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When use a program and you want to print text files from the program, you may
	use the Generic/Text Only printer driver. However, if you want to use Eastern
	European characters that are specific to the locale, those characters are
	printed as an at (@) symbol (characters that are above 0x80 in the American
	National Standards Institute [ANSI] code page).
	
	CAUSE
	=====
	
	This problem occurs because the Windows NT 4.0 implementation of the
	Generic/Text Only driver does not have sufficient information to convert Easter
	European code pages.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date         Time   Version  Size    File name  Platform
	  --------------------------------------------------------
	  12-Nov-2001  23:46  0.2.0.0  73,200  Rasdd.dll  Intel
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a (SP6a).
	
	
	
	To use the fix, you must set a registry value. To do this:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Printers\Generic /
	  Text Only\PrinterDriverData
	
	3. Click Add Value on the Edit menu, and then add the following registry value:
	
	  Value name: SpecialRLE
	  Data type: REG_BINARY
	  Radix: Hexadecimal
	  Value data: 01 (this is one byte of data)
	
	4. Quit Registry Editor.
	
	5. To activate this setting, restart the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: greek greece hellenic republic russian russia federation poland polish of slovanian slovania slovenia
	
	======================================================================
	Keywords          : kbDriver kbRegistry 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTW400SP6a
	Version           : :4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
