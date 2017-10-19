---
layout: page
title: "Q191714: INFO: Limiting the Scope of MSDN Help Topics in Visual FoxPro"
permalink: /kb/191/Q191714/
---

## Q191714: INFO: Limiting the Scope of MSDN Help Topics in Visual FoxPro

	Article: Q191714
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When working with the Microsoft Developer Network Library that ships with Visual
	Studio and Visual FoxPro 6.0, it is possible to make use of subsets to limit the
	scope of Help topics that are viewable. However, Help topics unrelated to the
	subset still appear in the list, but they are unavailable.
	
	MORE INFORMATION
	================
	
	It is possible to view only the Visual FoxPro Help file topics when using the
	Microsoft Developer Network Library. After installing the Microsoft Developer
	Network Library and the Visual FoxPro documentation, you can configure Visual
	FoxPro to use the FoxHelp.chm file as the default Help file using one of the
	following methods:
	
	- Use the following command in the Visual FoxPro Command window:
	
	  
	
	        SET HELP TO <full path to the FoxHelp.chm file>
	
	  -or-
	
	- From the Tools menu, choose Options. In the Options dialog box, click the
	  File Locations tab and change the default help file location so that it
	  points to the path of the FoxHelp.chm file on your computer.
	
	  -or-
	
	- Add the following line to the Config.fpw file:
	
	  
	
	        HELP = <full path to the FoxHelp.chm file>
	
	To set the Help back to the normal Microsoft Developer Network Help, repeat step
	2 using the Msdnvs98.col file in place of the FoxHelp.chm file name. This sets
	the Help file to the more general form of Help.
	
	REFERENCES
	==========
	
	Visual FoxPro Help; search on: "set as default"
	
	Additional query words: kbVFp600 kbDocs
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
