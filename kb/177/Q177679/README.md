---
layout: page
title: "Q177679: Incorrect Size of Printed Documents Results from Unknown Font"
permalink: /kb/177/Q177679/
---

## Q177679: Incorrect Size of Printed Documents Results from Unknown Font

{% raw %}

	Article: Q177679
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you import a document from another computer and then print it, the printed
	document has different dimensions from those seen when the same document is
	printed from the originating computer.
	
	CAUSE
	=====
	
	This problem may occur if the document contains a font that does not exist on
	your computer or printer. Depending on the fonts installed on the computer or
	the printer, the GDI Font Mapper may substitute different fonts for the unknown
	font on different computers.
	
	Depending on the font chosen, text may be rendered larger or smaller in width
	and/or height, causing the printed document to expand or shrink relative to the
	expected dimensions.
	
	RESOLUTION
	==========
	
	To work around this problem, check the document for fonts that you do not have
	installed, and then create an explicit font substitution in the registry as
	follows:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\ SOFTWARE\Microsoft\Windows NT\ 
	  CurrentVersion\FontSubstitutes
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value, and use the following entry:
	
	  Value Name : <Facename of the unknown font>
	  Data Type  :  REG_SZ
	  String     : <Facename of the substitute font>
	
	For example, if your system is mapping an unknown font named Geneva, to
	Helvetica, but Helvetica-Narrow would be better for your purposes, add a value
	as follows:
	
	Value Name : Geneva
	Data Type  : REG_SZ
	String     : Helvetica-Narrow
	
	STATUS
	======
	
	This is by design.
	
	MORE INFORMATION
	================
	
	Depending on the fonts installed on computers and in printers, different font
	lists will be created internally within Windows NT on different computers. When
	the time comes to make a substitution for an unknown font, you can make
	different substitutions on different computers, because of the different font
	lists that Windows NT creates.
	
	
	Additional query words: substitution substitutions
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
