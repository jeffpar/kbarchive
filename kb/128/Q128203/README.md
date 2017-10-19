---
layout: page
title: "Q128203: FIX: No Generic/Text Only Printer Driver in Windows NT"
permalink: /kb/128/Q128203/
---

## Q128203: FIX: No Generic/Text Only Printer Driver in Windows NT

	Article: Q128203
	Product(s): Microsoft FoxPro
	Version(s): 2.60a 3.00
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	To send the output of a FoxPro report to a text file in FoxPro for Windows, you
	must use the Generic/Text Only printer driver. However, Microsoft Windows NT
	does not ship with the Generic/Text Only printer driver or any equivalent
	drivers.
	
	WORKAROUND
	==========
	
	Create a hard-coded report using the ??? "" command to put the printer driver in
	'raw' mode and use @..SAY or ? statements to output the data to the file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	Additional query words: VFoxWin FoxWin Generic ASCII buglist2.60a
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300
	Version           : 2.60a 3.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
