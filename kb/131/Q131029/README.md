---
layout: page
title: "Q131029: HOWTO: Manipulate Embedded Objects in General Fields"
permalink: /kb/131/Q131029/
---

## Q131029: HOWTO: Manipulate Embedded Objects in General Fields

	Article: Q131029
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbinterop kbole kbAutomation kbvfp300 kbvfp500 kbvfp600
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If an OLE object is embedded (not linked) in a General field, you cannot control
	the object directly by using OLE automation. Instead, you must first place the
	object on a form.
	
	MORE INFORMATION
	================
	
	You cannot use the CREATEOBJECT or GETOBJECT functions to create a reference to
	an embedded OLE object in a General field. However, the field can be manipulated
	if it is placed on a form. From a programming standpoint, if the form is never
	made visible, the operation on the object is transparent to the user.
	
	Code Sample
	-----------
	
	The following example creates a table that has a General field, places a
	Microsoft Graph object in the first record, and then programatically adds a
	title to the chart.
	
	     * Create the table with the embedded object:
	     CREATE TABLE grphaut(olegraph g)
	     APPEND BLANK
	     APPEND GENERAL olegraph CLASS "MSGraph"   && Appends default MSGraph
	                                               && Data.
	
	     * Use OLE automation to change the appearance of the chart:
	     frmDummy =CREATEOBJECT("form")
	     frmDummy.ADDOBJECT("oleGraph","OleBoundControl")
	     WITH frmDummy.oleGraph
	        .Height = 300
	        .Width = 500
	        .ControlSource = "grphaut.olegraph"
	        .HasTitle = .T.
	        .ChartTitle.Caption = "The Spanish Inquisition"
	        .Type=3   && Type = 3 produces a bar chart, 4 produces a line chart
	     ENDWITH
	     RELEASE frmDummy
	
	The actual OLE automation commands depend on the type of object stored in the
	General field.
	
	For more information on passing data to Microsoft Graph programatically, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q129533 How to Pass Data to Microsoft Graph Programmatically
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbinterop kbole kbAutomation kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
