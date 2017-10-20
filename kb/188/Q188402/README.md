---
layout: page
title: "Q188402: INFO: Some Visual FoxPro Files Contained in XSOURCE Folder"
permalink: /kb/188/Q188402/
---

## Q188402: INFO: Some Visual FoxPro Files Contained in XSOURCE Folder

{% raw %}

	Article: Q188402
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbHTMLHelp
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Included with Visual FoxPro for Windows version 6.00 are two files named
	Xsource.zip and Solnhlp.zip. They are located in the \Tools\XSource folder under
	the folder returned by the Visual FoxPro HOME() function.
	
	MORE INFORMATION
	================
	
	Unzipping the Xsource.zip file with the pkunzip.exe -d parameter creates a
	folder named \vfpsource. The \vfpsource folder contains the following folders:
	
	  \Addlabel
	  \Browser
	  \Builders
	  \Coverage
	  \Wizards
	
	Unzipping the Solnhlp.zip file with the pkunzip.exe -d parameter creates a folder
	named \Solution. The \Solution folder contains 128 files which are the source
	code for the Solutions sample application (for the purpose of showing how to
	create a context sensitive HTML help file). These folders are also created:
	
	  \Compiled
	     \Html
	     \Stylesheets
	
	REFERENCES
	==========
	
	Visual FoxPro 6.0 Readme.hlp; search on: "XSOURCE"
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Perry Newton, Microsoft Corporation
	
	
	Additional query words: kbVFp kbVFp600 kbOLDocs
	
	======================================================================
	Keywords          : kbHTMLHelp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
