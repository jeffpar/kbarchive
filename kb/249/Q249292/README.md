---
layout: page
title: "Q249292: XML In Action Comments and Corrections"
permalink: /kb/249/Q249292/
---

## Q249292: XML In Action Comments and Corrections

	Article: Q249292
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 18-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS XML In Action ISBN 0-7356-0562-9 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book XML In Action, ISBN 0-7356-0562-9.
	
	The following topics are covered:
	
	- CD-ROM: XML Notepad Does Not Uninstall Correctly
	
	- Page 50: No Start Button On Sample Chap04\Lst4_1.htm
	
	- Page 113: Closing Tag Is Incorrect
	
	MORE INFORMATION
	================
	
	CD-ROM: XML Notepad Does Not Uninstall Correctly
	------------------------------------------------
	
	The CD-ROM that accompanies this book contains a copy of Microsoft XML Notepad.
	This tool can be installed with the setup program located in the tools/XML
	Notepad directory. However, the tool does not uninstall correctly.
	
	If you uninstall this program using the Add/Remove Programs in the Control Panel,
	references to the XML Notepad application and the ReadMe file are not removed
	from the Start|Programs menu. These references have to be deleted manually. To
	delete the references, from the Start menu select Programs, and then right click
	the file name and choose Delete from the submenu.
	
	
	Page 50: No Start Button On Sample Chap04\Lst4_1.htm
	----------------------------------------------------
	
	On pages 50, the instructions in the first paragraph indicate that you will need
	to press the Start button on the sample web page Chap04\Lst4_1.htm. The sample
	web page that is included on the accompanying CD-ROM does not include a Start
	button.
	
	Change:
	"If you run this document by displaying the HTML page found in the
	Chap04\Lst4_1.htm file on the companion CD, and then clicking the Start button,
	the document looks similar to..."
	
	To:
	"If you run this document by displaying the HTML page found in the
	Chap04\Lst4_1.htm file on the companion CD, the document looks similar to..."
	
	
	Page 113: Closing Tag Is Incorrect
	----------------------------------
	
	On page 113, under the UNQUALIFIED NAMES paragraph, the closing tag is
	incorrect.
	
	Change:
	
	  <PRODUCT>
	     <NAME>Bloodroot</Title>
	     <QUANTITY>10</QUANTITY>
	  </PRODUCT>
	
	To:
	
	  <PRODUCT>
	     <NAME>Bloodroot</NAME>
	     <QUANTITY>10</QUANTITY>
	  </PRODUCT>
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: DevBook XML Pardi 0-7356-0562-9
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
