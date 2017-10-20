---
layout: page
title: "Q93435: FIX: GPF/UAE When Converting String &gt; 32K to Double Precision"
permalink: /kb/093/Q93435/
---

## Q93435: FIX: GPF/UAE When Converting String &gt; 32K to Double Precision

{% raw %}

	Article: Q93435
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When converting a large string that is greater than 32K into a double precision
	number, a General Protection (GP) fault or Unrecoverable Application Error (UAE)
	can occur. An example of this problem is described in detail further below. This
	problem also occurs with the functions CCur, CInt, CLng, CSng as well as CDbl.
	
	WORKAROUND
	==========
	
	To work around the problem, break the string into two parts, an x part and a y
	part. Then you can print both parts one after the other and the error does not
	occur because each part is less than 32K. Here is an example:
	
	  Show
	  x = String(20000, "1")
	  y = String(20000, "1")
	  Print CDbl(x);CDbl(y)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Standard and Professional
	Editions of Microsoft Visual Basic version 2.0 for Windows. This problem was
	corrected in Microsoft Visual Basic version 3.0 for Windows.
	
	MORE INFORMATION
	================
	
	The following steps can be used to reproduce this problem:
	
	1. Start VB.EXE.
	
	2. Add the following code to the Form_Load event procedure:
	
	     Show
	     x = String(40000, "1")
	     Print CDbl(x)
	
	3. Press the F5 key to run the example and a GPF or a UAE occurs.
	
	Additional query words: buglist2.00 fixlist3.00 2.00 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
