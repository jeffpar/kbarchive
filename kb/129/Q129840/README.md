---
layout: page
title: "Q129840: ADVANCED WINDOWS: Corrections and Comments"
permalink: /kb/129/Q129840/
---

## Q129840: ADVANCED WINDOWS: Corrections and Comments

{% raw %}

	Article: Q129840
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Advanced Windows ISBN 1-55615-677-4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "Advanced Windows: Developer's Guide to
	Windows NT 3.5 and Windows 95."
	
	The following topics are covered:
	
	- Page 6: First Paragraph, Last Sentence Is Misleading
	
	- Page 494: pvData in Sample Code Should Be pData
	
	- Page 502: Missing "not" in Second to Last Sentence
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, this document might also
	include sections labeled "Correction" and "Comments." Please note that the
	"Correction" section is worded for correcting the book and does not necessarily
	address the problem introduced by the book error. The "Comments" section
	contains specific information for working around problems.
	
	Page 6: First Paragraph, Last Sentence Is Misleading
	----------------------------------------------------
	
	The last sentence in the first paragraph on page 6 reads as follows:
	
	  On Windows 95, a new thread of execution cannot be created because Microsoft
	  didn't feel that the function was useful enough to warrant the additional
	  memory overhead required to make Windows 95 run in a 4-MB machine.
	
	As this sentence stands, the reasoning for omitting the CreatRemoteThread() API
	function is unclear and the effect on Windows 95 is misleading.
	
	Correction:
	
	Change this sentence to the following:
	
	  On Windows 95, the CreateRemoteThread() function is not fully implemented
	  because Microsoft didn't feel that the function was useful enough to warrant
	  the additional memory overhead of the function, given that Windows 95 is
	  required to run on a 4-MB machine.
	
	Page 494: pvData in Sample Code Should Be pData
	-----------------------------------------------
	
	In the sample code, change
	
	     static PVOID pvData = NULL
	
	to
	
	     static PVOID pData = NULL
	
	Page 502: Missing "not" in Second to Last Sentence
	--------------------------------------------------
	
	On page 501, there is a code fragment that uses DisableThreadLibraryCalls in an
	attempt to avoid a deadlock condition. On that same page, the text states that
	this approach did not solve the problem.
	
	However, the continued discussion on page 502 describes a mutex object that is
	created with each process and states "Because the system works this way, adding
	the call to DisableThreadLibraryCalls does prevent the threads from
	deadlocking."
	
	Correction:
	
	In the second to last sentence on page 502, change
	
	  DisableThreadLibraryCalls does prevent
	
	to
	
	  DisableThreadLibraryCalls does not prevent
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: mspress ms_press press bookbug
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	

{% endraw %}
