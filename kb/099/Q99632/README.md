---
layout: page
title: "Q99632: PRB: &quot;String too long to fit&quot; or &quot;Feature is not available&quot;"
permalink: /kb/099/Q99632/
---

## Q99632: PRB: &quot;String too long to fit&quot; or &quot;Feature is not available&quot;

{% raw %}

	Article: Q99632
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.5,2.5a,2.5b,2.6,2.6a; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the CALL command to call a binary file, can cause the following error
	message in FoxPro for Windows and the 32-bit (extended) versions of FoxPro for
	MS-DOS:
	
	  String too long to fit
	
	In Visual FoxPro for Windows, the LOAD function causes this error message:
	
	  Feature is not available
	
	RESOLUTION
	==========
	
	Convert the binary file into a Library Construction Kit (LCK) routine that uses
	the API's parameter-passing feature.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a "safe" binary file:
	
	  Type "CD\" and Enter at the MS-DOS prompt
	  Type "COPY CON:dummy.bin" and Enter at the MS-DOS prompt
	  Type "REM" and Enter
	  Hit CTRL+Z and Enter
	  Type "DEBUG dummy.bin" and Enter at the MS-DOS prompt
	  Type "E 100" and Enter at the Debug hyphen prompt
	  Type "CB" and Enter
	  Type "W" and Enter at the Debug hyphen prompt
	  Type "Q" and Enter at the Debug hyphen prompt
	
	  When called, this file returns nothing.
	
	2. Enter the following commands in the FoxPro Command window:
	
	     LOAD \dummy.bin
	     mvar=REPLICATE(" ",1000)
	     CALL dummy WITH mvar
	
	3. Observe the following results:
	
	   - FoxPro for MS-DOS (32-bit version) returns the "String too long to fit"
	     error message.
	
	   - FoxPro for Windows returns the "String too long to fit" error message.
	
	   - Visual FoxPro for Windows returns the "Feature is not available" error
	     message.
	
	Additional query words: VFoxWin FoxWin FoxDos bin foxprox errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300
	Version           : MS-DOS:2.5,2.5a,2.5b,2.6,2.6a; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0
	
	=============================================================================
	

{% endraw %}
