---
layout: page
title: "Q318977: FIX: The CDATA Section of CURSORTOXML( ) May Format Characters"
permalink: /kb/318/Q318977/
---

## Q318977: FIX: The CDATA Section of CURSORTOXML( ) May Format Characters

	Article: Q318977
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbCtrl kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the nFlag parameter is set to 8 in the CURSORTOXML function in a memo
	field, the following characters may be formatted incorrectly:
	
	- less than (<)
	- greater than (>)
	- ampersand (&)
	
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
	
	When you set the nFlag parameter to 8 in the CURSORTOXML function, the contents
	of the memo field with an XML CDATA section wrap. This protects the data if the
	<, >, or & characters are used in the memo field. These characters are
	not formatted correctly in the memo field when the CURSORTOXML function is used
	in the original release version of Visual FoxPro 7.0.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Paste the following code into a program file, and then run the file from the
	Command window:
	
	  CLEAR 
	  CREATE CURSOR myxml_memo (fld_memo M)
	  APPEND BLANK
	  REPLACE fld_memo WITH "Joe & Jim's last name is <Smith>."
	  CURSORTOXML("myxml_memo", "myxml_var1", 1, 8)
	
	  * Displays CDATA section with the &amp, &lt, and &gt substitutions.
	  ? myxml_var1
	  myxml_var2 = STRTRAN(myxml_var1, "&" + "amp;", "&")
	  myxml_var2 = STRTRAN(myxml_var2, "&" + "lt;", "<")
	  myxml_var2 = STRTRAN(myxml_var2, "&" + "gt;", ">")
	  *!* Note: the strings in the code are broken up for clarity.
	  *!* You can write them as one literal in your code.
	
	  * The CDATA section should resemble the following:
	  ? myxml_var2
	  LOCAL ox AS MSXML2.DomDocument.3.0
	  ox = NEWOBJECT("MSXML2.DomDocument.3.0")
	  ox.Async = .F.
	  ox.LoadXML(myxml_var1)
	  ? ox.DocumentElement.FirstChild.FirstChild.Xml
	  * This is displayed incorrectly in the MSXML text.
	  ? ox.DocumentElement.FirstChild.FirstChild.Text
	  ? ""
	  ox.LoadXML(myxml_var2)
	  ? ox.DocumentElement.FirstChild.FirstChild.Xml
	  * This is expected when you use CDATA to wrap the text.
	  ? ox.DocumentElement.FirstChild.FirstChild.Text
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
