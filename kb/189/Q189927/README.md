---
layout: page
title: "Q189927: PRB: MsGraph 8.0 Causes Fatal Exception Error"
permalink: /kb/189/Q189927/
---

## Q189927: PRB: MsGraph 8.0 Causes Fatal Exception Error

{% raw %}

	Article: Q189927
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you define an MsGraph 8.0 object with the Top, Left, Width, Height, Autosize,
	and Stretch properties in the class in Visual FoxPro 5.x, an exception error
	might occur when the class is instantiated.
	
	RESOLUTION
	==========
	
	Do not include the Top, Left, Width, and Height properties in conjunction with
	Autosize and Stretch properties in the class.
	
	Use the following sample code to work around for this problem:
	
	     PUBLIC x
	     x=CREATEOBJECT('MyForm')
	     x.ole1.AutoSize=.F.
	     x.ole1.Stretch=0
	     x.ole1.DoVerb()
	     x.Show
	
	     DEFINE CLASS MyForm AS Form
	     WindowType=1
	     ADD OBJECT ole1 AS OleControl WITH ;
	        OleClass='MSGraph.chart.8',;
	        Top=10, Left=10, Width=100, Height=100
	     ENDDEFINE
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a .prg (program) file.
	
	2. Copy the following code into the program file:
	
	        PUBLIC x
	        x=CREATEOBJECT('MyForm')
	        x.Show
	
	        DEFINE CLASS MyForm AS Form
	        WindowType=1
	        ADD OBJECT ole1 AS OleControl WITH   ;
	           OleClass='MSGraph.chart.8',;
	           Top=10, Left=10, Width=100, Height=100,;
	           AutoSize=.f.,Stretch=0
	        ENDDEFINE
	
	3. Save the program and run it.
	
	RESULT: An exception error occurs, and Visual FoxPro shuts down.
	
	Additional query words: kbOOP kbinterop kbVFp500a kbVFp500 kbVFp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
