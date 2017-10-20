---
layout: page
title: "Q195689: WD97: &quot;Converter Is an Old Version&quot; Error Trying to Convert"
permalink: /kb/195/Q195689/
---

## Q195689: WD97: &quot;Converter Is an Old Version&quot; Error Trying to Convert

{% raw %}

	Article: Q195689
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to convert a file, the following error message appears:
	
	  The selected text converter is an old version which does not work with the
	  current version of Word. Reinstall the converter and try again.
	
	CAUSE
	=====
	
	This error may be caused when Microsoft FrontPage 98 is installed on a computer
	that already contains a "Run From Network Server" installation of Word.
	
	If you have installed Microsoft Word 97 (not including Word 97 Service Release 1)
	as a "Run From Network Server" workstation installation and then you install
	FrontPage 98 locally, FrontPage 98 detects the administrative installation of
	Word on the network server and replaces the Word converters. FrontPage 98
	installs the SR-1 version of all the converters.
	
	Word 97 (not including Word 97 SR-1) is unable to use this version of the
	converters, which results in the error message described in the "Symptoms"
	section of this article.
	
	NOTE: If Word is installed locally or if its shared files are installed locally,
	this problem does not occur.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Perform a custom installation of FrontPage 98 and do not install the shared
	  converters.
	
	  -or-
	
	- Install Microsoft Word 97 SR-1.
	
	This behavior does not occur in Microsoft Word 2000.
	
	MORE INFORMATION
	================
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
