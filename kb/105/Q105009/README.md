---
layout: page
title: "Q105009: PRB: &quot;Record out of Range&quot; Error When Modifying Report"
permalink: /kb/105/Q105009/
---

## Q105009: PRB: &quot;Record out of Range&quot; Error When Modifying Report

{% raw %}

	Article: Q105009
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the MODIFY REPORT command is issued in a compact executable file and the
	report to be modified is an MS-DOS-style report, one the following error
	messages occur:
	
	  FoxPro 2.x for Windows: "Record out of range."
	
	  Visual FoxPro for Windows: "Report file is invalid."
	
	RESOLUTION
	==========
	
	Under FoxPro 2.x for Window, resolve this problem by runing the transporter on
	the report before modifying the report.
	
	For example, insert the following line in the program shown below in the "More
	Information" section as the first line of code:
	
	     DO TRANSPRT.FXP WITH "RPT25.FRX", 13
	
	This line causes the transporter program, TRANSPRT.PRG, to be called prior to
	modification of the report.
	
	Save the program, rebuild the executable, and rerun the .EXE file. The Transport
	dialog box appears, the report is transported, and the Report Writer is launched
	with the transported report. Note that the transporter program is included in
	the project and thus built into your application.
	
	NOTE: Under Visual FoxPro for Windows, open the report files by choosing Open
	from the File menu. This automatically calls the converter utility.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In FoxPro for MS-DOS, create a quick report. Save the report as RPT25.FRX.
	
	2. Open FoxPro for Windows.
	
	3. Create a new project and add to the project a program that contains the
	  following code:
	
	        MODIFY REPORT RPT25.FRX
	
	4. Save the project and build an executable file.
	
	5. Run the executable file from Program Manager or File Manager. The following
	  error message appears:
	
	  Record out of range. Cancel or Ignore.
	
	Additional query words: XPlatForm VFoxWin FoxWin 2.50 2.50a 2.50b 2.60 2.60a errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300
	Version           : WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	

{% endraw %}
