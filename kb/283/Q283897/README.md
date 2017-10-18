---
layout: page
title: "Q283897: Developing XML Solutions Comments and Corrections"
permalink: kb/283/Q283897/
---

## Q283897: Developing XML Solutions Comments and Corrections

	Article: Q283897
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Developing XML Solutions, ISBN
	0-7356-0796-6.
	
	The following topics are covered:
	
	- Page 64: Corrections To Note
	
	- Pages 67 and 69: Correction To Code
	
	- Page 116: Correction to Code
	
	MORE INFORMATION
	================
	
	Page 64: Corrections To Note
	----------------------------
	
	On page 64, the Note section explains portions of the code used on pages 67 and
	69. However, this code requires corrections, as listed below (see Pages 67 and
	69: Correction to Code). Therefore, the Note should be revised to correspond
	with the code corrections.
	
	Change:
	"Also notice the use of &apos; as a place holder for a single quotation mark
	and the use of the parentheses to group the collection of choices."
	
	To:
	"Also notice the use of underscores as a place holder for white spaces and the
	use of the parentheses to group the collection of choices."
	
	
	Pages 67 and 69: Correction To Code
	-----------------------------------
	
	The Revised DTD code on pages 66-67 will produce an error when run through XML
	Authority. The offending text is "&apos;".
	
	The DTD is attempting to define an attribute named "font" with "New Roman Times"
	as one of the enumerated values. However, the attribute values cannot contain
	white spaces and the & symbol is not allowed. Using an underscore in the
	attribute value will solve the problem.
	
	On page 67, change:
	
	  face  (&apos; Times New Roman &apos; | Arial) #REQUIRED
	
	To:
	
	  face  (Times_New_Roman | Arial) #REQUIRED
	
	Please note this code error is repeated on page 69.
	
	
	Page 116: Correction to Code
	----------------------------
	
	On page 116, the code at the bottom should be changed to include
	</customer> after the first customer element.
	
	Change:
	
	  <message>
	      <date>01-01-2001</date>
	      <customer customerID="c1" customerName="John" />
	          <order orderID="o100"/>
	      <customer customerID="c2" customerName="William">
	          <order orderID='o101'/>
	      </customer>
	  </message>
	
	To:
	
	  <message>
	      <date>01-01-2001</date>
	      <customer customerID="c1" customerName="John">
	          <order orderID="o100"/>
	      </customer>
	      <customer customerID="c2" customerName="William">
	          <order orderID='o101'/>
	      </customer>
	  </message>
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: DEVBOOK 0-7356-0796-6 STURM XML
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Issue type        : kbinfo
	
	=============================================================================
	
