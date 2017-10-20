---
layout: page
title: "Q86097: PC Win: MSMAIL.INI Entries in &#91;Mac File Types&#93;"
permalink: /kb/086/Q86097/
---

## Q86097: PC Win: MSMAIL.INI Entries in &#91;Mac File Types&#93;

{% raw %}

	Article: Q86097
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists and explains all the entries in the Microsoft Mail for
	Windows private profile, MSMAIL.INI, that are contained in the [Mac File Types]
	section.
	
	[Mac FileTypes]
	
	Entries in this section map Macintosh file type and creator tags to MS-DOS file
	extensions. Mail uses them to determine what application to launch on a file
	attachment that has been sent from a Macintosh mail client. There are two
	alternative forms for the entries:
	
	  creator:type=.extension
	
	  or
	
	  :type=.extension
	
	Both the creator and type are sequences of four characters (possibly including
	blanks). For example
	
	  :TEXT=.DOC
	
	will launch the application associated with the extension .DOC (for example, Word
	for Windows) on any Macintosh file of type TEXT.
	
	Additional query words: 3.00 3.00b 3.20 Mac File Types
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
