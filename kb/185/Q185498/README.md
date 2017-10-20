---
layout: page
title: "Q185498: Vfphtml.exe Demonstrates HTML Help in VFP 3.0 and 5.0"
permalink: /kb/185/Q185498/
---

## Q185498: Vfphtml.exe Demonstrates HTML Help in VFP 3.0 and 5.0

{% raw %}

	Article: Q185498
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbfile kbsample kbHTMLHelp kbvfp300 kbvfp500
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Vfphtml.exe is a file that demonstrates how to implement an HTML help file
	within Visual FoxPro 3.0x and 5.0x.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Vfphtml.exe
	  (http://download.microsoft.com/download/vfox50/Demo/1/W9XNT4/EN-US/Vfphtml.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Vfphtml.exe contains three files: Hhctrl.ocx, Test.chm, and Htmlhelp.prg. The
	example is dependent on the version of the Hhctrl.ocx file. These files allow
	one to implement an HTML-style Help file within Visual FoxPro 3.0x or 5.0x. To
	setup the files, use the following steps:
	
	1. Unzip the self-extracting VfpHtml.exe file into a folder named Test.
	
	2. Register the Hhctrl.ocx file following the instructions in the Microsoft
	  Knowledge Base article listed in the REFERENCES section.
	
	3. Modify the program and change the values of the lcSampleHelp and lcHhctrl
	  variables. These variables contain the locations of the Test.chm and
	  Hhctrl.ocx files respectively. These files can reside in different folders as
	  long as the variables contain the correct file locations.
	
	4. Start Visual FoxPro 3.0x or 5.0x and run the program.
	
	5. The HTML-style help appears on the screen.
	
	REFERENCES
	==========
	
	For information on registering the .ocx control, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q146219 HOWTO: Register an ActiveX Control (.ocx) Manually
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbHTMLHelp kbvfp300 kbvfp500 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0b,5.0,5.0a
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
