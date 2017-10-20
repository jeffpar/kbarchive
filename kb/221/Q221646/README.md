---
layout: page
title: "Q221646: FIX: ERR Files Contain Carriage Return and No Linefeed"
permalink: /kb/221/Q221646/
---

## Q221646: FIX: ERR Files Contain Carriage Return and No Linefeed

{% raw %}

	Article: Q221646
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300bBUG kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbVS600sp3fix kbGrpDSFox
	Last Modified: 08-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You compile a Visual FoxPro program file, form, class library, or report that
	contains at least one compile error. SET LOGERRORS is ON, which is the default,
	and this forces Visual FoxPro to write any compile errors to a .ERR file. When
	the .ERR file is opened within the Visual FoxPro editor, it will appear as
	expected with line feeds between each line, but if the file is opened with
	another editor, such as Notepad, no line feeds appear, and the text will all
	appear on a single line.
	
	CAUSE
	=====
	
	The .ERR file is written with a carriage return character (ASCII value 13) at
	the end of each line, but no line feed character (ASCII 10). The Visual FoxPro
	editor moves to a new line with each ASCII 13 character, but other editors such
	as Notepad may not.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.PRG) file:
	
	  =STRTOFILE('This line will cause an error!'+ CHR(13) + CHR(10) + ;
	  'So will this one!', 'testxx.prg')
	  SET LOGERRORS ON    && This is the default
	  COMPILE testxx.prg
	  RUN /N notepad testxx.err
	
	MOTE: If you are running Visual FoxPro 3.0 or 5.0, then you must create the
	program file manually. The STRTOFILE function is not available in earlier
	versions of Visual FoxPro.
	
	2. Look at the error file that is opened in Notepad.
	
	3. All the text will appear on the same line, but it will wrap if Word Wrap is
	  enabled in Notepad. The file will contain the text below. The character
	  represented here as [] will appear as a black square in Notepad.
	
	  This line will cause an error![]Error in line 1: Unrecognized command
	  verb.[]So will this one![]Error in line 3: Unrecognized command verb.[]
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300bBUG kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
