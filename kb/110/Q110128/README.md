---
layout: page
title: "Q110128: PRB: &quot;Unrecognized Phrase/Keyword...&quot; with Macro Substitution"
permalink: kb/110/Q110128/
---

## Q110128: PRB: &quot;Unrecognized Phrase/Keyword...&quot; with Macro Substitution

	Article: Q110128
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.5b 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use macro substitution with a filename that contains spaces, the error
	message "Unrecognized phrase/keyword in command" occurs.
	
	CAUSE
	=====
	
	The Macintosh file system allows filenames to have spaces. This feature can
	cause errors in programs that use macro substitution and don't allow for
	spaces.
	
	Macro substitution in FoxPro is direct text substitution. Consider the following
	code:
	
	     x='MAC HD:FOXPRO:DATABASE'
	     USE &x
	
	This code is exactly equivalent to the following USE command:
	
	     USE MAC HD:FOXPRO:DATABASE
	
	However, this USE command isn't valid because FoxPro thinks the filename is MAC
	and doesn't understand what HD:FOXPRO:DATABASE is supposed to be.
	
	RESOLUTION
	==========
	
	To work around this problem, do one of the following:
	
	- Pad the composed text string with another set of quotation marks:
	
	        x="'MAC HD:FOXPRO:DATABASE'"
	
	  Note the double quotation marks and single quotation marks. You can also use
	  "" or ''.
	
	-or-
	
	- Use a named expression:
	
	        x='MAC HD:FOXPRO:DATABASE'
	        USE (x)
	
	Additional query words: VFoxMac FoxMac file name marco errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	
