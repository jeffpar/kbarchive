---
layout: page
title: "Q190544: BUG: Compile of Report with #INCLUDE Causes VFP to Terminate"
permalink: /kb/190/Q190544/
---

## Q190544: BUG: Compile of Report with #INCLUDE Causes VFP to Terminate

{% raw %}

	Article: Q190544
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbcode kberrmsg
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are attempting to compile a report that contains a #INCLUDE statement in one
	of its Data Environment methods. You could do this could explicitly with COMPILE
	REPORT. Or you could do it implicitly by building a project that contains the
	report after selecting the Recompile All Files check box in the Project Manager
	Build Options dialog box. When the compile occurs, you get an error similar to
	the following under Windows NT:
	
	  Exception: access violation (0xc0000005), Address: 0x00401252
	
	Under Windows 95, you get an error similar to the following:
	
	  VFP caused an invalid page fault in module VFP.EXE at 0137:00401252
	
	The specific address will vary between specific Visual FoxPro versions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file. It will create a header
	  file, paste in a #DEFINE, and save and close the file. It will then create a
	  report and open the report's Data Environment.
	
	  
	
	        CLOSE DATABASE ALL
	        * Create the table
	        CREATE TABLE freetab (f1 c(10))
	        INSERT INTO freetab VALUES ("abcde")
	        * Create the header file
	        _CLIPTEXT = '#DEFINE CX "test"'
	        KEYBOARD '{ctrl+v}{ctrl+w}'
	        MODIFY FILE inclfile.h
	
	        * Create the report
	        _CLIPTEXT = '# include inclfile.h' + CHR(13) + ;
	           "WAIT WINDOW CX"
	        MODIFY REPORT test NOWAIT
	        KEYBOARD '{alt+v}e'
	
	2. Right-click the report's Data Environment window and select Code from the
	  Shortcut menu.
	
	3. Paste the contents of the Clipboard into the Code window, and close the Code
	  window.
	
	4. Right-click the report's Data Environment window and select Add from the
	  Shortcut menu.
	
	5. Add the table Freetab.dbf from the Open dialog box and click OK. Click Close
	  in the Add Table or View dialog box.
	
	6. Close the report and click Yes when prompted to save the report.
	
	7. Type the following in the Command window then press ENTER:
	
	  
	
	        COMPILE REPORT test
	
	Under Windows NT, you will get an error similar to "Exception: access violation
	(0xc0000005), Address: 0x00401252". Under Windows 95, you will get an error
	similar to "VFP caused an invalid page fault in module Vfp.exe at 0137:00401252"
	and Visual FoxPro will terminate.
	
	In the Project Manager, if you build a project, application or executable that
	contains the report with the #INCLUDE, the error will occur if the report is
	recompiled. If you have selected the Recompile All Files check box in the
	Project Manager Build Options dialog box, this will cause the report to be
	recompiled each time the project is built.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp500abug kbReportWriter
	
	======================================================================
	Keywords          : kbcode kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
