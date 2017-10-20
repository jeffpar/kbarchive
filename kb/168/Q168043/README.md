---
layout: page
title: "Q168043: FIX: Grid is Empty with Incorrect Column ControlSource"
permalink: /kb/168/Q168043/
---

## Q168043: FIX: Grid is Empty with Incorrect Column ControlSource

{% raw %}

	Article: Q168043
	Product(s): Microsoft FoxPro
	Version(s): 5.0 5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500bugkbbuglist
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Specifying an invalid column ControlSource name in a Grid results in an empty
	grid in Visual FoxPro 5.x. However, in Visual FoxPro 3.x, this results in the
	following error, which is expected:
	
	  "Error loading File - ControlSource..., Variable "column name" is not found"
	
	RESOLUTION
	==========
	
	Check the ControlSource names in each column and make sure they are valid names.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.PRG) file:
	
	        SET SAFETY ON
	        USE HOME()+'samples\data\customer'
	        LOCAL aobj[1], ox
	        CREATE FORM TEMP NOWAIT
	        =ASELOBJ(aobj,1)
	        ox = aobj[1]
	        ox.AddObject('grid1','Grid')
	        WITH ox.grid1
	           .Recordsource = 'customer'
	           .Visible = .T.
	           .ColumnCount = 2
	           .Column1.ControlSource = 'customer.cust_id'
	
	           * Purposely put an invalid column controlsource name
	                .Column2.ControlSource = 'customer.Xcontact'
	
	           * To display the Grid correctly set:
	           *   .Column2.ControlSource = 'customer.contact'
	
	        ENDWITH
	        KEYBOARD 'Y' CLEAR
	        RELEASE WINDOW 'Form Designer'
	        DO FORM temp
	
	2. Form shows up with an empty grid.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbvfp kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : 5.0 5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
