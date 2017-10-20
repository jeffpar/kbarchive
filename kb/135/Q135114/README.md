---
layout: page
title: "Q135114: PRB: Error &quot;Library File Foxtools.fll is Invalid&quot;"
permalink: /kb/135/Q135114/
---

## Q135114: PRB: Error &quot;Library File Foxtools.fll is Invalid&quot;

{% raw %}

	Article: Q135114
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to rebuild a converted FoxPro version 2.X project, you receive
	this error message:
	
	     Library file Foxtools.fll is invalid.
	
	CAUSE
	=====
	
	The project is looking at the Foxtools.fll file that shipped with FoxPro version
	2.X. It should be looking at the Foxtools.fll file that shipped with Visual
	FoxPro version 3.0.
	
	RESOLUTION
	==========
	
	1. Remove Foxtools.fll from the Visual FoxPro project, and add the 32-bit
	  Foxtools.fll found in your VFP subdirectory.
	
	2. If your path to Foxtools.fll in the setup code of your 2.X screen was coded
	  with a specific path statement (for example, using SET LIBRARY TO
	  C:\Fpw26\Foxtools.fll instead of SYS(2004)+"Foxtools.fll"), look under the
	  Load Event Method of the Form.
	
	  With the editing window open for the Load Event, open the Object window in the
	  title bar. You will see a systematically assigned id that looks something
	  like _R2R0H0G9K. Open it up. You will discover your former Setup Code. Here
	  you can manually edit the path to Foxtools.fll.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
