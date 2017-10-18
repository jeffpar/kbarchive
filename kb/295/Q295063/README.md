---
layout: page
title: "Q295063: CodePage Set to UTF-8 Generates Output w/ Mismatched Characters"
permalink: kb/295/Q295063/
---

## Q295063: CodePage Set to UTF-8 Generates Output w/ Mismatched Characters

	Article: Q295063
	Product(s): Internet Information Server
	Version(s): 1.0,2.0,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set the code page in an ASP script to UTF-8 (either by using
	@CodePage=65001 or Session.CodePage=65001), the characters may be mismatched and
	the output does not match the expected results.
	
	CAUSE
	=====
	
	The encoding format of the ASP file page must be the same as the @CodePage used
	in the page.
	
	RESOLUTION
	==========
	
	Save the file with the UTF-8 encoding setting. The version of Notepad that is
	included in Windows 2000 or later has the option to specify an encoding format
	when you save a file. For example, if @CodePage is set to 65001, which indicates
	UTF-8, you need to save the ASP file with UTF-8 encoding. If @CodePage is set to
	1252, which indicates English or German, you need to save the ASP file with ANSI
	encoding.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis200 kbiis100
	Version           : :1.0,2.0,3.0,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
