---
layout: page
title: "Q172094: PRB: Help Compiler Does Not Compile Word 97 RTF Files"
permalink: /kb/172/Q172094/
---

## Q172094: PRB: Help Compiler Does Not Compile Word 97 RTF Files

{% raw %}

	Article: Q172094
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp
	Last Modified: 18-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Help Compiler to compile a Microsoft Word 97 for Windows Rich Text
	Format (RTF) file may produce the following error message:
	
	  File is invalid
	
	Other errors may appear indicating that the file is corrupt or that the Help file
	cannot be created.
	
	CAUSE
	=====
	
	Microsoft Word 97 for Windows uses a different RTF file format than earlier
	versions of Microsoft Word.
	
	RESOLUTION
	==========
	
	Use the updated Help Workshop version 4.03.0002 that is available for download
	from the Internet (anonymous FTP) site listed below in the More Information
	section.
	
	There is also a Help Workshop version 4.02 that compiles Word 97 RTF files. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q164012 WD97: Error Message: 'The RTF File .\ Is Corrupted at Offset...'
	
	
	If access to either of the newer help compilers is not available, Microsoft Word
	95 or an earlier version of Microsoft Word can be used to create the RTF file.
	
	MORE INFORMATION
	================
	
	To obtain a version of the Help compiler, download Hcwsetup.exe, a
	self-extracting file, from the following ftp address:
	
	  ftp://ftp.microsoft.com/softlib/mslfiles/
	
	Select the file entitled Hcwsetup.exe and save it to a folder on your hard drive.
	Once copied to the hard drive, open Explorer and double-click the .exe file to
	begin the self-extraction process.
	
	Additional query words: visual basic bitmap bmp
	
	======================================================================
	Keywords          : kberrmsg kbvfp 
	Technology        : kbWordSearch kbVFPsearch kbAudDeveloper kbWord97 kbWord97Search kbZNotKeyword2 kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
