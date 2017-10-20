---
layout: page
title: "Q118565: X400: Use BODYPART.CFG File for Body-Part Typing/Tagging"
permalink: /kb/118/Q118565/
---

## Q118565: X400: Use BODYPART.CFG File for Body-Part Typing/Tagging

{% raw %}

	Article: Q118565
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail to X.400 Gateway supports these body-part types: IA5,
	T61/TTX, binary, and (in version 3.2 only) ISO6937. You can use the BODYPART.CFG
	file (in version 3.2, use the X.400 Admin program) to encode any file as any of
	these body-part types.
	
	For example, if the BODYPART.CFG file contains the entry,
	
	  *.bmp IA5
	
	then any attached bitmap files are tagged as a IA5 body-parts in the message,
	even though the .bmp file contains characters that fall outside the IA5
	character set. This allows the Microsoft Mail to X.400 Gateway to interoperate
	more easily with implementations that support only IA5 type body-parts.
	
	
	Additional query words: 3.00 3.20 bodypart
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300 kbMailGatex400320
	Version           : MS-DOS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
