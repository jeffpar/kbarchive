---
layout: page
title: "Q164360: FIX: Error &quot;OLE Error Code 0x80080005 Server Execution Failed&quot;"
permalink: /kb/164/Q164360/
---

## Q164360: FIX: Error &quot;OLE Error Code 0x80080005 Server Execution Failed&quot;

{% raw %}

	Article: Q164360
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b 5.00
	Operating System(s): 
	Keyword(s): kbenv kbvfp kbvfp600fix
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the "at" symbol ("@") is in the name of your computer, you may receive the
	following error message when running a manually written MSGraph program:
	
	  OLE error code 0x80080005 Server execution failed
	
	RESOLUTION
	==========
	
	To resolve this problem, the "at" symbol ("@") must be removed from the name of
	the computer as follows:
	
	1. Right-click the Network Neighborhood icon and click Properties.
	
	2. Click the Identification tab.
	
	3. In the Computer Name box, remove the "at" symbol ("@") from the name of the
	  computer.
	
	4. Click OK and restart the computer. On non-Windows 95 networks you may have to
	  resolve this new computer name for proper network operation.
	
	5. Run the Graph1.prg program, located in the MORE INFORMATION section below,
	  from the Command window.
	
	The MSGraph Bar chart appears on the screen.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Place the following code into a .prg file and execute it:
	
	  
	
	     #DEFINE tab chr(09)
	     #DEFINE cr_lf chr(13) + chr(10)
	     LOCAL FruitData
	     Fruit_Data = " "   + tab + "Fruits" + cr_lf + ;
	          "Apples"  + tab + "1"      + cr_lf + ;
	               "Oranges" + tab + "2"      + cr_lf + ;
	               "Pears"   + tab + "3"      + cr_lf
	     CREATE TABLE frt_graph (mygraph G)
	     APPEND BLANK
	     APPEND GENERAL MyGraph CLASS "MSGRAPH" DATA Fruit_Data
	     MODIFY GENERAL MyGraph
	
	If you have an "at" symbol ("@") in the computer name you will receive the
	following error message.
	
	  OLE error code 0x80080005 Server execution failed
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbvfp kbvfp600fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500
	Version           : 3.00 3.00b 5.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
