---
layout: page
title: "Q86098: PC Win: MSMAIL.INI Entries in &#91;MS Proofing Tools&#93;"
permalink: /kb/086/Q86098/
---

## Q86098: PC Win: MSMAIL.INI Entries in &#91;MS Proofing Tools&#93;

{% raw %}

	Article: Q86098
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists and explains all the entries in the Microsoft Mail for
	Windows private profile, MSMAIL.INI, that are contained in the [MS Proofing
	Tools] section.
	
	[MS Proofing Tools]
	
	CustomDict=<keyname>
	--------------------
	
	This entry gives the name of an entry in the [MS Proofing Tools] section of your
	WIN.INI file. That entry in turn gives the fully qualified path to a file
	containing your custom dictionary. The custom dictionary contains spellings not
	found in the standard dictionary, which you have added using the Add button in
	the Spelling Check dialog box.
	
	There is no default value. The purpose of this entry is to let Mail take
	advantage of a custom dictionary you may have already created with another
	Microsoft application, such as Word for Windows.
	
	Spelling=<keyname>
	------------------
	
	This entry specifies the name of an entry in the [MS Proofing Tools] section of
	your WIN.INI file. That entry in turn gives the fully qualified path to the
	spelling checker DLL.
	
	There is no default value. The purpose of this entry is to let Mail use the same
	spelling checker you may already be using with another Microsoft application,
	such as Word for Windows.
	
	Additional query words: 3.00 3.00b 3.20 MS Proofing Tools
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
