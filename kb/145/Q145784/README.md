---
layout: page
title: "Q145784: XCLN: &quot;Close and Return&quot; from Word Doesn't Return to Exchange"
permalink: /kb/145/Q145784/
---

## Q145784: XCLN: &quot;Close and Return&quot; from Word Doesn't Return to Exchange

{% raw %}

	Article: Q145784
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you open a Microsoft Word document that has been dragged from Windows
	Explorer or the Windows File Manager and copied into either a shared or personal
	folder, Word maintains an OLE connection to the document. When you choose Close
	And Return To Exchange on the Word File menu, the document closes, but you are
	not returned to Microsoft Exchange.
	
	MORE INFORMATION
	================
	
	This behavior occurs because Word's File Close command has "and return to
	Microsoft Exchange" appended to the Close menu because Word was launched as an
	OLE server. This same behavior is seen in other applications that are launched
	as OLE servers.
	
	
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0
	
	=============================================================================
	

{% endraw %}
