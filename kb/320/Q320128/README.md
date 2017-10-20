---
layout: page
title: "Q320128: FIX: The XMLToCursor() Function Causes a Fatal Exception"
permalink: /kb/320/Q320128/
---

## Q320128: FIX: The XMLToCursor() Function Causes a Fatal Exception

{% raw %}

	Article: Q320128
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 17-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the XmlToCursor function to write a string of XML data to a cursor,
	the following error is returned:
	
	  Fatal error: Exception code=C0000005
	
	This error occurs if the [<VFPData>] root tags are not contained in the XML
	string.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	WORKAROUND
	==========
	
	To work around this issue if you have not installed Visual FoxPro 7.0 Service
	Pack 1 (SP1), add the <VFPData> tag to the beginning of the string and add
	the </VFPData> tag to the end of the string. This permits the cursor to be
	created. The following sample code demonstrates this method:
	
	  * If the myXmlString string does not contain the root tags in the string:
	  myXmlString = [<myTable my_fld1 = "ABCDE" />]
	  * Add them by using the following code:
	  myXmlString = [<VFPData>] + myXmlString + [</VFPData>]
	  * If it works, 1 is returned (meaning that one record has been created).
	  * Otherwise, 0 is returned (meaning that it did not succeed).
	  ? XMLTOCURSOR(myXmlString, "mycursor")
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0. This problem was first corrected in Visual FoxPro for Windows 7.0
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Start Visual FoxPro version 7.00.0000.9262.
	
	2. Create a program, add the following sample code, and then run the program
	  from the Command window:
	
	  myXmlString = [<myTable my_fld1 = "ABCDE" />]
	  ? XMLTOCURSOR(myXmlString, "mycursor")
	
	The error that is mentioned in the "Symptoms" section appears.
	
	Note that if you run this after you install SP1, a 0 (zero) value is returned
	because no records were created. Installing SP1 prevents the error, but the root
	tags are still required for the XmlToCursor function to operate properly. If you
	change the code to the code that is listed in the "Workaround" section of this
	article, a one-record cursor is created in Visual FoxPro 7.0 SP1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
