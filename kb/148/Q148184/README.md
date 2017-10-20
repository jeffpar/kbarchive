---
layout: page
title: "Q148184: BUG: Large Fonts Cause SETFONT() to Fail in Scigraph Demo"
permalink: /kb/148/Q148184/
---

## Q148184: BUG: Large Fonts Cause SETFONT() to Fail in Scigraph Demo

{% raw %}

	Article: Q148184
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Scigraph demo when using Windows Large Fonts, only the graph
	title and outline are displayed for each of the sample graphs.
	
	CAUSE
	=====
	
	Before plotting a graph, the PlotGraph() function makes a call to the SETFONT()
	graphics function using Windows Small Fonts - which have a height of 11 pixels.
	On a computer running Windows Large Fonts, this is replaced with a font that is
	10 or 12 pixels high. Consequently, the call to SETFONT() fails. PlotGraph()
	detects this and stops drawing the rest of the graph.
	
	RESOLUTION
	==========
	
	Perform the following steps to run the Scigraph demo successfully on any
	computer that has the Arial TrueType font installed. To accomplish this, you
	must change the reference to Windows Small Fonts in the Sgdata.f90 source file
	by replacing the $FVSANSSERIFSM font value of t'Small Fonts'h11w5 with
	t'Arial'h12w6.
	
	1. After copying all the Scigraph demo files to your computer, delete the source
	  module (*.mod) files in the \Scigraph directory by using the File Manager in
	  Windows NT or Explorer in Windows 95.
	
	2. Open the Scigraph.mdp static library project file. On the Developer Studio
	  File menu, click Open Workspace, and select the Scigraph.mdp project file
	  located in the \Scigraph directory.
	
	3. Open the Sgdata.f90 source file contained in the scigraph project. This is
	  accessible through the Scigraph files list in the \Scigraph directory.
	
	4. Replace the reference to Small Fonts by using Developer Studio's find and
	  replace feature. On the Edit menu, click Replace. In the Find What box,
	  type:
	
	  " "t'Small Fonts'h11w5"" (without the quotation marks)
	
	  In the Replace With box, type:
	
	  " "t'Arial'h12w6"" (without the quotation marks)
	
	  Then click the Replace button. After successfully changing the font reference,
	  save the modified source file.
	
	5. Rebuild the Scigraph.mdp project file by clicking Rebuild All on the
	  Developer Studio Build menu.
	
	6. Open the Sgdemo.mdp project file and remove the files Scigraph.lib and
	  Sgdemo.f90. These files must be removed from the project because they contain
	  old references to the module files.
	
	7. Insert the new versions of the two files removed in step 6 back into the
	  Sgdemo.mdp project file -- the newly created Scigraph.lib file built in step
	  5 located in either the \Debug or \Release project subdirectory and the
	  Sgdemo.f90 source file located in the \Scigraph directory.
	
	8. Rebuild the Sgdemo.mdp project file by click Rebuild All on the Developer
	  Studio Build menu.
	
	9. Run the Scigraph demo to display all the graph elements for each of the
	  sample graphs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
