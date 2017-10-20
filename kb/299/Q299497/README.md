---
layout: page
title: "Q299497: FIX: _VFP.DataToClip() Truncates DateTime Data"
permalink: /kb/299/Q299497/
---

## Q299497: FIX: _VFP.DataToClip() Truncates DateTime Data

{% raw %}

	Article: Q299497
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp500aBUG kbvfp500bug kbvfp600bug kbGrpDSFox kbCodeSnippet kbvfp700fixkbfixlis
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Visual FoxPro (VFP) DataToClip() application method is used to store
	data from a DateTime field to the clipboard, the data is truncated, leaving off
	the trailing "M" in AM or PM.
	
	STATUS
	======
	
	This problem was corrected in Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual FoxPro (VFP) 5.0 or 6.0, paste the following code in a new program:
	
	  CLEAR
	  LOCAL lcOldSetCentury
	  lcOldSetCentury = SET("CENTURY")
	
	  CREATE CURSOR TstCursor (fldDTime T)
	  INSERT INTO TstCursor VALUES (DATETIME())
	
	  _VFP.DATATOCLIP
	  ? _CLIPTEXT
	
	  SET CENTURY ON
	
	  _VFP.DATATOCLIP
	  ? _CLIPTEXT
	
	  USE IN TstCursor
	  SET CENTURY &lcOldSetCentury
	
	2. Save and run the program (the name is not important).
	
	This program creates a new cursor with a DateTime field and stores DATETIME to
	that field. The value from that field is then stored to the clipboard using
	_VFP.DataToClip, and the contents of the clipboard are printed to _SCREEN. This
	is done twice: once with CENTURY off and once with CENTURY on.
	
	In VFP 5.0 and 6.0 the DateTime values that are stored to the clipboard are
	truncated and are missing the "M" in the AM/PM portion of the text. As a result,
	this code prints incomplete strings to _SCREEN in those VFP versions.
	
	REFERENCES
	==========
	
	For additional information on the DataClip method, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q156267 HOWTO: Use the DataToClip Method
	
	  Q280309 PRB: _VFP.DataToClip() Only Reads DataSession 1
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp500aBUG kbvfp500bug kbvfp600bug kbGrpDSFox kbCodeSnippet kbvfp700fix kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
