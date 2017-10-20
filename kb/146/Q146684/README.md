---
layout: page
title: "Q146684: XCON: Administrator Cannot Adjust the Filenames of Attachments"
permalink: /kb/146/Q146684/
---

## Q146684: XCON: Administrator Cannot Adjust the Filenames of Attachments

{% raw %}

	Article: Q146684
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Attachments sent without a filename (OLE attachments, text, and so forth) are
	given a predefined filename by Microsoft Exchange that is not configurable
	through the Microsoft Exchange Administrator program.
	
	Extra text body parts are called X400.txt and Binary body parts are called
	Att.dat.
	
	MORE INFORMATION
	================
	
	In the Microsoft Mail 3.x X.400 Gateway, the mail administrator could specify
	the filename and extension for mail attachments that had no previously specified
	filename. This was done so that these types of messages could spawn external
	programs to view the data being sent.
	
	For example, you could specify that all binary body parts have the extension .b14
	and then create an association for .b14 to open Microsoft Word.
	
	Microsoft Exchange does not allow for modification of the filename and extensions
	of unnamed attachments. Microsoft Exchange is hard-coded to use the filenames
	and extensions listed above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 4.0, of Microsoft
	Exchange. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: binary extensions text body parts
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
