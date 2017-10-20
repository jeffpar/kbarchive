---
layout: page
title: "Q154139: XCLN: Set Exchange to Use Alternate Spelling Checker"
permalink: /kb/154/Q154139/
---

## Q154139: XCLN: Set Exchange to Use Alternate Spelling Checker

{% raw %}

	Article: Q154139
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Windows 95 client does not include a spelling checker.
	However, Microsoft Exchange can use any 32-bit spelling checker that is
	correctly registered (such as the one from Office 7.0).
	
	By default, Microsoft Exchange uses a language setting of 1033, which is a
	dictionary of US spelling. You can change the registry so that Microsoft
	Exchange uses an alternate dictionary file (if available).
	
	This is useful when you use a type of English other than American English. This
	article uses the example of Australian English. Words such as "colour" and
	"organise" will show up as incorrect. However, these spellings are correct in
	Australia, for example, and so the spelling checker is inaccurate for Australian
	spelling.
	
	MORE INFORMATION
	================
	
	When you use the spelling checker in the Microsoft Exchange mail client, it
	searches for the following entry in the registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools\Proofing
	  Tools\Spelling\1033\Normal
	
	The Microsoft Exchange Windows 95 client has no spelling checker. To check
	spelling in Microsoft Exchange, you must have a 32-bit spelling checker
	installed. When you install Office 95, Word 7.0, or Microsoft Excel 7.0, a
	32-bit spelling checker is installed by default.
	
	For information about how to edit the registry, see the "Changing Keys And
	Values" online Help topic in Registry Editor(Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	To change the entry so that the spelling checker uses an alternate dictionary
	file:
	
	1. Check the following entry in the registry:
	
	     HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools\Proofing
	     Tools\Spelling\1033\Normal
	
	2. Verify that the key contains the following two values:
	
	     Dictionary C:\Program Files\Common Files\Proof\Mssp2_en.lex
	     Engine C:\Program Files\Common Files\Proof\Mssp232.dll
	
	  NOTE: The paths may differ depending on where you installed the files.
	
	  Although Microsoft Exchange looks in this key, it does not check against
	  language type, and so the path can be modified to point to an alternative,
	  compatible dictionary file. The dictionary file that can apply Australian
	  spelling is Mssp2_ea.lex (usually installed with the localized versions of
	  Microsoft Word 7.0 or Microsoft Office 7.0).
	
	3. Assuming you have a localized version of Microsoft Word 7.0 or Office 7.0,
	  modify the path as follows:
	
	     Dictionary C:\Program Files\Common Files\Proof\mssp2_ea.lex
	
	4. Click Save and quit Registry Editor.
	
	When Microsoft Exchange is restarted, the spelling checker will accept "colour"
	and "organise," but there are no other indications that the Australian
	dictionary is being used.
	
	WARNING: Any other applications that also use this common registry key for US
	spelling will be forced to use this alternate dictionary file.
	
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q140618 OFF7: Spell Check Is Unavailable in Microsoft Exchange
	
	Additional query words: AUS 3081 lex spell checker
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
