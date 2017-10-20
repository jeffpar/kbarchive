---
layout: page
title: "Q115443: X400: OSIWare Bodypart Contain"
permalink: /kb/115/Q115443/
---

## Q115443: X400: OSIWare Bodypart Contain

{% raw %}

	Article: Q115443
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An ISO6937 bodypart from OSIWare containing a banner for "OSIWARE" may come
	through with <LR><CR> inserted at unexpected places.
	
	
	CAUSE
	=====
	
	OSIWare chops Unix files into 256-byte chunks and pours them into the Context(0)
	octet strings that make an ISO6937 bodypart. The gateway ignores the Unix line
	ends (LFs), since it isn't looking for them, and when it comes to the end of a
	chunk it supplies a CRLF, since the chunks are supposed to be lines and it is
	the job of the receiving MTAs to supply line ends.
	
	RESOLUTION
	==========
	
	Microsoft believes that there is a problem with the OSIWare implementation. No
	workaround is possible on the Microsoft side. Please contact OSIWare if you
	encounter this problem.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	

{% endraw %}
