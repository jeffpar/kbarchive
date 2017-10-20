---
layout: page
title: "Q173976: ADT/ODE: &quot;Help Workshop Is Out of Memory&quot; Error with Compression"
permalink: /kb/173/Q173976/
---

## Q173976: ADT/ODE: &quot;Help Workshop Is Out of Memory&quot; Error with Compression

{% raw %}

	Article: Q173976
	Product(s): Microsoft Access Distribution Kit
	Version(s): ; WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 01-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	- Microsoft Access Developer's Toolkit, version 7.0 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you compile a Help project file in the Help Compiler Workshop that ships
	with Microsoft Office 97 Developer Edition Tools or Microsoft Access Developer's
	Toolkit version 7.0, you receive the following error message:
	
	  HC6000: Error: Help Workshop is out of memory. If you have any other programs
	  running, close them down and try compiling again.
	
	Note that this problem also occurs if you download version 4.03 of the Help
	Compiler Workshop from the Microsoft Download Center.
	
	CAUSE
	=====
	
	You are using Hall compression. Note that if you click the Compression option
	"Maximum (recommended)," Hall compression is automatically selected.
	
	RESOLUTION
	==========
	
	Do not use the Maximum Compression option or the Custom option with Hall
	compression. Change the compression setting for the Help project to None, or
	change compression setting to Custom and click to clear the Hall compression
	check box. To do so, follow these steps:
	
	1. Start the Microsoft Help Workshop.
	
	2. On the File menu, click Open.
	
	3. In the Open dialog box, select your Help Project File, and then click Open.
	
	4. In the <Project Name> window, click Options, and then click the
	  Compression tab.
	
	5. Click None, or click Custom, and then click to clear the Hall compression
	  check box. Then Click OK.
	
	6. In the <Project Name> window, click Save And Compile.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Access Developer's
	Toolkit and Microsoft Office 97 Developer Edition Tools.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start the Microsoft Help Workshop.
	
	2. On the File menu, click New.
	
	3. In the New dialog box, select Help Project, and then click OK.
	
	4. In the Project File Name dialog box, type "MyTest" (without the quotation
	  marks) in the File name box, and then click Save.
	
	5. In the MyTest project window, click Files.
	
	6. In the Topic File dialog box, click Add.
	
	7. In the Open dialog box, select your .rtf file, and then click Open.
	
	8. In the Topic Files dialog box, click OK.
	
	9. In the MyTest project window, click Options.
	
	10. Select the Compression tab and click Maximum (recommended). Then click OK.
	
	11. In the MyTest project window, click Save And Compile. Note that you receive
	  the error described in the "Symptoms" section.
	
	REFERENCES
	==========
	
	For more information about Compression, search the Help Compiler Workshop Help
	Index for "compression," and then select the topic "To specify compression
	options."
	
	Additional query words: pra tool kit
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbOffice97 kbZNotKeyword3 kbAccessDevTK700 kbOffice97DevSearch
	Version           : :; WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
