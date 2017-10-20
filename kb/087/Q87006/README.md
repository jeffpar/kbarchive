---
layout: page
title: "Q87006: BUG: Dictionary Receives No DIRQ_SYMBOLGRAPH Message"
permalink: /kb/087/Q87006/
---

## Q87006: BUG: Dictionary Receives No DIRQ_SYMBOLGRAPH Message

{% raw %}

	Article: Q87006
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an application developed for Microsoft Windows for Pen Computing, the
	dictionary function does not receive a DIRQ_SYMBOLGRAPH message for a given
	recognition session.
	
	CAUSE
	=====
	
	Windows for Pen Computing detected an unrecognized symbol in the symbol graph.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows for Pen Computing version
	1.0. We are researching this problem and will post new information here as it
	becomes available.
	
	MORE INFORMATION
	================
	
	In the Windows for Pen Computing environment, a dictionary can be designed to
	process the DIRQ_SYMBOLGRAPH message. If an application specifies the
	RCO_SUGGEST flag in the lRcOption member of the recognition context (RC) data
	structure, Windows for Pen Computing sends this message to a dictionary before
	any other message. If an application also specifies the RCO_NOSPACEBREAK flag,
	the system sends the complete symbol graph to the dictionary. Unfortunately,
	Windows for Pen Computing scans the symbol graph for any SYV_UNKNOWN symbols
	before the system sends the DIRQ_SYMBOLGRAPH message to the dictionary. If the
	symbol graph contains a SYV_UNKNOWN symbol, no DIRQ_SYMBOLGRAPH message is sent.
	
	Additional query words: buglist1.00 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
