---
layout: page
title: "Q175682: PRB: VFP Crashes When Working With Top-Level &amp; Child Forms"
permalink: /kb/175/Q175682/
---

## Q175682: PRB: VFP Crashes When Working With Top-Level &amp; Child Forms

{% raw %}

	Article: Q175682
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp
	Last Modified: 06-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running a Top-Level form and one or more child forms within it, and then closing
	the Top-Level form, may produce error messages or phantom copies of the
	top-level form. Following these problems the Project Manager may produce Access
	Violations when you try to Build/Rebuild a project.
	
	RESOLUTION
	==========
	
	The above problems occur in the development version of Visual FoxPro. If the
	Top-Level form is being created for use as an EXE and the EXE is designed to end
	when the Top-Level form is closed, there should be no problems using the
	Top-Level form with its child forms.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following symptoms may appear when developing a project containing a
	Top-Level form that has child forms contained within it. Running a Top- Level
	form and one or more child forms within it and then closing the Top- Level form,
	may cause the following symptoms in Visual FoxPro:
	
	1. The error message "FORMS is not an object." This happens while closing the
	  Top-Level form when child forms are open within it.
	
	2. "Phantom" copies of the Top-Level form remaining on the Windows Taskbar for
	  each time the Top-Level form was run and closed with a child form within.
	  They can be activated and the form's border and title bar will show but they
	  cannot be moved, minimized or maximized, or closed. They are also
	  transparent, whatever application is behind them can be seen but not accessed
	  through the form. Use the Windows Taskbar or click on the visible portion of
	  the application outside of the "phantom" Top-Level form to activate the
	  desired application. These "phantom" forms only go away if Visual FoxPro is
	  shut down.
	
	3. Choosing the Build button in the Project Manager to build or rebuild anything
	  will cause Visual FoxPro to crash with an Access Violation in Windows NT or
	  to end with the "This program has performed an illegal operation and will be
	  shut down" error message in Windows 95. Using the command line BUILD
	  commands(BUILD PROJECT, BUILD EXE, BUILD APP or BUILD DLL) will also cause
	  the errors. This only happens if there is a "phantom" form as described in #2
	  above.
	
	  In Windows NT 4.0 with Service Pack 3, the exact error message with addresses
	  is this:
	
	  
	
	     An application error has occurred and an application error log is
	     being generated.
	                      vfp.exe
	     Exception: access violation (0xc0000005), Address: 0x004025a0
	
	  In Windows 95, the details of the error message is this:
	
	  VFP caused an invalid page fault in module VFP.EXE at 0137:00402960.
	  Registers: <register info not repeated in this article>
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce this problem, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q175625 FILE: Use Topclose.exe to Close Child Forms Of Top-Level Forms
	
	Work with the Almost.pjx project and the Almost.app file. Step #4 in the
	Additional Information section of the above mentioned article refers to the
	problem.
	
	NOTE: The following information assumes that the sample files from the above
	mentioned KB article has been downloaded and explored.
	
	Just run the Almost.app and follow the instructions on the Top-Level form to see
	the "phantom" form(s) appear. After there is at least one "phantom" form, try
	rebuilding the Almost.pjx and Visual FoxPro should crash.
	
	To get the error message "FORMS is not an object", make the following
	modifications to the QueryUnload method of thE Almost.scx form in the Almost.pjx
	project:
	
	1. Replace the DO WHILE loop with a FOR...ENDFOR loop. To do this, remark out
	  the following line of code:
	
	        DO WHILE _Screen.ActiveForm.Caption != "Good Top-Level Form"
	
	  and replace it with the following two lines of code:
	
	           FOR x=1 TO xx
	           IF _SCREEN.FORMS(x).CAPTION != "Good Top-Level Form"
	
	  The variable xx is already setup at the beginning of the QueryUnload code to
	  contain _Screen.FormCount. At the end of the DO WHILE loop, remark out the
	  following line of code:
	
	        ENDDO
	
	  and replace it with the following two lines of code:
	
	           ENDIF
	           ENDFOR
	
	2. Save the form and rebuild the application.
	
	3. Run the Almost.app application and open at least one child form and then
	  close the Top-Level form. The error message "FORMS is not an object" should
	  appear before all the forms are closed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
