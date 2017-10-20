---
layout: page
title: "Q318990: FIX: Reserved Word &quot;IsDataSet&quot; in CURSORTOXML Schema Is Misspell"
permalink: /kb/318/Q318990/
---

## Q318990: FIX: Reserved Word &quot;IsDataSet&quot; in CURSORTOXML Schema Is Misspell

{% raw %}

	Article: Q318990
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbCtrl kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 10-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the cSchemaName parameter of the CURSORTOXML function to convert a
	Visual FoxPro cursor into XML text and build a schema, the reserved word
	"IsDataSet" in the schema is misspelled as "lsDataSet". The first letter of the
	reserved word is a lower case letter "L" instead of an upper case letter "I".
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0.
	
	This problem was first corrected in Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Paste the following code in a program (.prg) file, and then run the program from
	the Command window:
	
	  CREATE CURSOR xml_test ( fld1 C(25))
	  INSERT INTO xml_test VALUES("IsDataSet is misspelled.")
	  CURSORTOXML("xml_test", "xml_var", 1, 0, 0, "1")
	  STRTOFILE(xml_var, "isdataset.xsd")
	  MODIFY FILE isdataset.xsd NOWAIT
	  KEYBOARD '{CTRL+F10}'
	
	After the text file isdataset.xsd opens, note that the reserved word "IsDataSet"
	is misspelled "lsDataSet" in the fifth line of the file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
