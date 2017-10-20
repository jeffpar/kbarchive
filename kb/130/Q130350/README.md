---
layout: page
title: "Q130350: TYPE() Returns &quot;N&quot; for Double, Float, and Integer"
permalink: /kb/130/Q130350/
---

## Q130350: TYPE() Returns &quot;N&quot; for Double, Float, and Integer

{% raw %}

	Article: Q130350
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual FoxPro for Windows, a field may be given the TYPE B for Double, and F
	for Float, but the TYPE() function always returns "N" (Numeric) for Double,
	Float, and Integer data types.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	The following code demonstrates this:
	
	     ***TYPETEST.PRG***
	     CLEAR
	     CREATE CURSOR SYS(2015) (bField B(6),fField F(16,8),yField Y)
	     INSERT INTO (ALIAS()) VALUES (111.111, 222.222, 333.333)
	     ? "The types are: Created Double="+TYPE("bField")+", Created Float=";
	     + TYPE("fField")+", Created Currency="+ TYPE("yField")
	
	Here is the result:
	
	  "The types are: Created Double=N, Created Float=N, Created Currency=Y"
	
	Why Numeric Is Always Returned
	------------------------------
	
	The Float type is included for compatibility only. It is functionally equivalent
	to Numeric. The Double type is relevant only in a table, denoting how the field
	data is stored to disk.
	
	All Float types are stored internally as Doubles, converted to ASCII when written
	to disk, and then converted back when read. This can result in a loss of
	accuracy, so a Double type field is stored as an 8-byte binary value to avoid
	inaccuracies.
	
	Additional query words: VFoxWin character
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
