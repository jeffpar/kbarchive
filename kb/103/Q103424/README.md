---
layout: page
title: "Q103424: X400: Err Msg: Address Mapping Contains the Character X..."
permalink: /kb/103/Q103424/
---

## Q103424: X400: Err Msg: Address Mapping Contains the Character X...

{% raw %}

	Article: Q103424
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With version 3.2 of Microsoft Mail Gateway to X.400, the Routing section of the
	Administrator program may give the following error:
	
	  Address Mapping contains the character "X" which is not valid. Type it again
	  using valid characters.
	
	CAUSE
	=====
	
	This error means the address contains a character that is not allowed in an
	X.400 address. X.400 addresses allow letters, numbers, spaces, parentheses, and
	most punctuation marks, as specified in the X.409 Specification on page 80 of
	the Fascicle VIII.7 document published by The Consultative Committee for
	International Telegraph and Telephone (CCITT).
	
	MORE INFORMATION
	================
	
	The following characters are allowed:
	
	  Name                             Graphic
	  -------------------------------------------------------------------
	
	  Uppercase letters                A,B,...Z
	  Lowercase letters                a,b,...z
	  Numbers                          0,1,...9
	  Spaces                           <space>
	  Apostrophe                       '
	  Opening parenthesis              (
	  Closing parenthesis              )
	  Plus sign                        +
	  Comma                            ,
	  Hyphen                           -
	  Period                           .
	  Slash mark                       / 
	  Colon                            :
	  Equal sign                       =
	  Question mark                    ?
	
	
	Additional query words: 3.20 errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	

{% endraw %}
