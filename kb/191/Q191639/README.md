---
layout: page
title: "Q191639: PRB: Report Command Used In Visual FoxPro COM DLL Causes Error"
permalink: /kb/191/Q191639/
---

## Q191639: PRB: Report Command Used In Visual FoxPro COM DLL Causes Error

{% raw %}

	Article: Q191639
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running the Report command within an in-process OLE component created in
	Microsoft Visual FoxPro 6.0, returns an error indicating that the User-
	Interface operation is not allowed at this time.
	
	CAUSE
	=====
	
	The Report command calls the User Interface functions in order to properly run
	the report. User Interface functions are no longer allowed in in- process
	Component Object Model (COM) servers created in Microsoft Visual FoxPro.
	
	RESOLUTION
	==========
	
	Create a Local COM server (.exe) in Visual FoxPro that can be called by the
	in-process server to run the report, or build the original object as a Local COM
	server (.exe).
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The full text of the error message returned that follows, uses the file, class
	and procedure name used in the Steps to Reproduce Behavior section of this
	article. The path specified in the error message will also vary depending on the
	file location.
	
	  OLE IDispatch exception code 1031 from MyServer.MyClass: .runit
	  e:\data\beta\ole\dll\dllmain.prg Error in line 4 User-Interface operation not
	  allowed at this time. 1031..
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place the following code in a program file named DllMain.prg in a new project
	  and build it as a COM DLL named MyServer.dll. Select Ignore when you build
	  the .dll if the Project Manager reports that it can not find the report named
	  rpt1.
	
	        DEFINE CLASS MyClass AS CUSTOM OLEPUBLIC
	           MyName="MyClass"
	           PROCEDURE runit
	              REPORT FORM rpt1 TO PRINTER NOCONSOLE NOWAIT
	           ENDPROC
	        ENDDEFINE
	
	2. Place the following code in a new program file named CallIt.prg:
	
	        oX=CREATEOBJECT("MyServer.MyClass")
	        oX.RunIt
	        RELEASE oX
	
	3. Run the CallIt program.
	
	REFERENCES
	==========
	
	Visual FoxPro Help; search on "sys(2335)"; topic: "SYS(2335) - Unattended Server
	Mode"
	
	Additional query words: kbDSupport OLE Print kbDSE kbVFp600 kbCOMt kbPrinting kbReportWriter
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
