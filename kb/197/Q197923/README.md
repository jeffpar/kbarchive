---
layout: page
title: "Q197923: Memotool.exe Saves User Defined Toolbar Positions"
permalink: /kb/197/Q197923/
---

## Q197923: Memotool.exe Saves User Defined Toolbar Positions

{% raw %}

	Article: Q197923
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbfile kbContainer kbCtrl kbvfp500 kbvfp500a kbvfp600 kbDSupport
	Last Modified: 28-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Memotool.exe is a self-extracting executable that contains a sample which
	demonstrates how to save and recall user defined toolbar positions with a
	top-level form.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Memotool.exe
	  (http://download.microsoft.com/download/vfox60/toolbar/2/W98NT42kME/EN-US/MemoTool.exe)
	
	Release Date: February 27, 2001
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	  FileName                 Size          Description
	  ---------------------------------------------------------
	
	  Clean_reg.prg             1KB          PRG File
	  Memory_toolbar.pjt        8KB          PJT File
	  Memory_toolbar.pjx        3KB          PJX File
	  Registry_toolbar.sct      7KB          SCT File
	  Registry_toolbar.scx      2KB          SCX File
	  Table_toolbar.sct         4KB          SCT File
	  Table_toolbar.scx         2KB          SCX File
	  Tb_demo.vct               7KB          VCT File
	  Tb_demo.vcx               3KB          VCX File
	
	Many Windows applications that use toolbars retain the position of the toolbars
	between instances. This functionality creates a more user-friendly application.
	While Visual FoxPro does not natively provide this functionality, it is possible
	using the code provided in this sample.
	
	This sample demonstrates how to create a toolbar that remembers its positions
	between instances of its parent form. Two methods are shown:
	
	- Using a table to store the positions. -and-
	
	- Using the Windows registry.
	
	NOTE: If you use this sample between Visual FoxPro 5.0 and Visual FoxPro 6.0, be
	sure to rebuild the project and recompile all files before running the forms.
	You may receive errors when rebuilding the project in Visual FoxPro 5.0 such as
	"Unable to find UNKNOWN NEWOBJECT". You can ignore these messages.
	
	
	Additional query words: MemoTool
	
	======================================================================
	Keywords          : kbfile kbContainer kbCtrl kbvfp500 kbvfp500a kbvfp600 kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
