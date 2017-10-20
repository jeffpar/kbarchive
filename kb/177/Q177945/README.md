---
layout: page
title: "Q177945: JETERR35.HLP Is Missing for DAO 3.5 in Visual C++ 5.0"
permalink: /kb/177/Q177945/
---

## Q177945: JETERR35.HLP Is Missing for DAO 3.5 in Visual C++ 5.0

{% raw %}

	Article: Q177945
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbDAOsearch kbVC500 kbVC600
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Jeterr35.exe contains two help files, Jeterr35.hlp and a related help file,
	Jetdef35.hlp, which were not included with either Visual C++ 5.0 or the DAO SDK
	Version 3.5. The help files may be referenced in an error condition.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Jeterr35.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	When DAO 3.5 raises an error, it may refer to Jeterr35.hlp in the HelpFile
	property, providing a context id into that help file. Copy the contents of the
	self-extracting Jeterr35.exe file into the \program files\common files\Microsoft
	shared\dao location on your machine to correctly invoke these help files.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbDAOsearch kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0,6.0
	
	=============================================================================
	

{% endraw %}
