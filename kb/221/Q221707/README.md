---
layout: page
title: "Q221707: FIX: Trace Breaks Too Often With Breakpoint on SET(&quot;NULL&quot;)"
permalink: /kb/221/Q221707/
---

## Q221707: FIX: Trace Breaks Too Often With Breakpoint on SET(&quot;NULL&quot;)

{% raw %}

	Article: Q221707
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0a,6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSupport
	Last Modified: 25-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a breakpoint is set in the Watch Window of the debugger with a value of a SET
	setting, an executing program might break even though the value does not change.
	For example, a breakpoint is set on SET("NULL").
	
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
	
	1. Set a breakpoint in the watch window on SET("NULL").
	
	2. Create a program called MyProc.prg with the following code:
	
	  Procedure MyProcedure
	     For i = 1 To 100
	        Wait Window Str(i) Nowait
	     Endfor
	  EndProc
	
	3. In the Command window, type "Set Procedure To MyProc." (without the quotation
	  marks)
	
	4. Create a form with one CommandButton. In the CommandButton's Click event,
	  enter the following code:
	
	  Do MyProcedure
	
	5. Run the form.
	
	Note that the debugger causes the program to break execution.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMiscTools kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
