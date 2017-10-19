---
layout: page
title: "Q255818: Err Msg: 19033-ERROR: &#36;multi_valued() Subscript Goes Beyond..."
permalink: /kb/255/Q255818/
---

## Q255818: Err Msg: 19033-ERROR: &#36;multi_valued() Subscript Goes Beyond...

	Article: Q255818
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 10-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The management agent (MA) log may incorrectly report the following error
	message:
	
	  19033-ERROR: $multi_valued() subscript goes beyond range 12121 in template []
	  in the statement starting at line XX
	
	Both the range (512) value and the line number are reported incorrectly. The line
	number is reported incorrectly if the $multi_valued function follows comments in
	the template.
	
	CAUSE
	=====
	
	The error message occurs with the $multi_valued function. If the first parameter
	contains all numbers, it is assumed to be a subscript number rather than a
	string value to search for. If the first parameter contains letters, it is
	considered a string and you do not receive the error message.
	
	RESOLUTION
	==========
	
	A partial resolution is to remove the double comments before the function to
	have the correct line reported. The range value continues to be incorrectly
	reported.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	
