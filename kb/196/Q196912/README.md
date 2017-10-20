---
layout: page
title: "Q196912: WD97: Syntax Error in Formula Field That Uses Comma Separator"
permalink: /kb/196/Q196912/
---

## Q196912: WD97: Syntax Error in Formula Field That Uses Comma Separator

{% raw %}

	Article: Q196912
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using a formula or expression field to perform a calculation of a set of
	numbers, you may receive the following error message
	
	  !Syntax Error, xxx,xxx
	
	where xxx represents the numbers in the argument.
	
	This error occurs when two or more numbers are separated by a comma without a
	space, and the second and subsequent numbers are three or more digits. For
	example, the following expressions
	
	  {=sum(123,123)}
	  {=sum(123,123,123)}
	
	will produce the following errors:
	
	  !Syntax Error, 123,123
	
	  !Syntax Error, 123,123,123
	
	This behavior occurs when the formula field performs the following calculations:
	SUM, AVERAGE, MIN, MAX, and PRODUCT.
	
	If the expression contains a series of three or more numbers, the second number
	is one or two digits, and each number is separated by a comma without a space,
	your results will be inaccurate, and you will not get a syntax error. For
	example, the following expression
	
	  {=sum(1,22,222,222)}
	
	will produce the following result:
	
	  22,222,223
	
	This behavior does not occur when you perform calculations based on table cell
	references or when using bookmarks.
	
	CAUSE
	=====
	
	When the comma is not followed by a space but is followed by three digits, Word
	interprets the comma as being the thousands-place separator and treats the
	argument as one number.
	
	RESOLUTION
	==========
	
	Place a space immediately following the comma, so that your formula looks as
	follows:
	
	  {=SUM(123, 125)}
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: field codes average maximum sum product minimum syntax error winword errors table tables calculate formula incorrect wrong
	
	======================================================================
	Keywords          : kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
