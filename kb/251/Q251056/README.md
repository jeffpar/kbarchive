---
layout: page
title: "Q251056: PRB: Print Dialog May Not Appear with SET PRINT ON PROMPT"
permalink: /kb/251/Q251056/
---

## Q251056: PRB: Print Dialog May Not Appear with SET PRINT ON PROMPT

{% raw %}

	Article: Q251056
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kb
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you issue the SET PRINT ON command with the PROMPT clause more than once in
	Visual FoxPro, which is running on Windows 95, Windows 98, Windows NT 4.0 or the
	Apple Macintosh, the Print dialog box does not appear after issuing the command
	the first time.
	
	RESOLUTION
	==========
	
	As a work around, use the following commands to display the Print dialog box:
	
	  SET PRINT ON PROMPT
	  SET PRINT OFF
	  SET PRINT TO
	  SET PRINT ON PROMPT
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On a Windows 95, Windows 98, or Windows NT 4.0 computer that is running
	  Visual FoxPro 3.0b, 5.0a, or 6.0 (SP3) with a printer attached, type the
	  following in the Command window:
	
	  SET PRINT ON PROMPT
	
	2. When the Print dialog box appears, either press OK, Cancel, or ESC to close
	  the dialog box.
	
	3. Issue this command:
	
	  SET PRINT OFF
	
	4. Next, issue this command:
	
	  SET PRINT ON PROMPT
	
	Note that the Print dialog box does not appear after step 4. You must exit Visual
	FoxPro and re-issue the SET PRINT ON PROMPT command to see the Print dialog box
	again.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
