---
layout: page
title: "Q168431: FIX: Launching VB 5.0 ActiveX Documents from Internet Explorer"
permalink: /kb/168/Q168431/
---

## Q168431: FIX: Launching VB 5.0 ActiveX Documents from Internet Explorer

	Article: Q168431
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.x,5.0
	Operating System(s): 
	Keyword(s): kbcode kbtool kbActiveX kbDownload kbVBp500 kbCodeDownload kbGrpDSVB kbFAQ kbDSupport k
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Internet Explorer (Programming) version 3.x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When browsing to an ActiveX Document using Microsoft Internet Explorer, the
	document will fail to load the associated VBD file correctly. Instead, Microsoft
	Internet Explorer will display the following message:
	
	  "Opening:
	  <filename> from <URL>
	
	  Some files can contain viruses or otherwise be harmful to your
	  computer. It is important to be certain that this file is from a
	  trustworthy source.
	
	  What would you like to do with this file?"
	
	The user is presented with a choice of Opening or Saving the VBD file. If the
	user selects Open, the Open With window is displayed asking which application
	should launch the file. None of the applications listed, including Microsoft
	Internet Explorer, will successfully launch the VBD file.
	
	CAUSE
	=====
	
	The Setup Wizard for Microsoft Visual Basic 5.0 creates a set of files to be
	used for Internet download of ActiveX Documents. These files include a cabinet
	(CAB), VBD, and a hypertext-markup HTM file.
	
	Unfortunately, without changes to the HTM file, an ActiveX Document will not
	launch correctly when a user browses to the HTM file using Microsoft Internet
	Explorer 3.x.
	
	RESOLUTION
	==========
	
	Below is a sample of an original HTM file created using the Microsoft Visual
	Basic 5.0 Setup Wizard. Following the example, is another sample that shows a
	working HTM file.
	
	Example 1 - Original HTM File
	-----------------------------
	
	     <HTML>
	     <OBJECT ID="SampleDoc1"
	     CLASSID="CLSID:11111111-1111-1111-1111-111111111111"
	     CODEBASE="Project1.CAB#version=1,0,0,0">
	     </OBJECT>
	
	     <SCRIPT LANGUAGE="VBScript">
	     Sub Window_OnLoad
	         Document.Open
	         Document.Write "<FRAMESET>"
	         Document.Write "<FRAME SRC=""SampleDoc1.VBD"">"
	         Document.Write "</FRAMESET>"
	         Document.Close
	     End Sub
	     </SCRIPT>
	     </HTML>
	
	Example 2 - Changed HTM File
	----------------------------
	
	     <HTML>
	     <OBJECT ID="SampleDoc1"
	     CLASSID="CLSID:11111111-1111-1111-1111-111111111111"
	     CODEBASE="Project1.CAB#version=1,0,0,0">
	     </OBJECT>
	     <SCRIPT LANGUAGE="VBScript">
	     Sub Window_OnLoad
	         Location.Replace("SampleDoc1.vbd")
	     End Sub
	     </SCRIPT>
	     </HTML>
	
	The changes to the Window_OnLoad procedure allow the VBD file to be launched
	successfully, thus the ActiveX Document will initialize and display within
	Microsoft Internet Explorer.
	
	To convert an HTM file created with Setup Wizard, do the following:
	
	1. Make a copy of your original HTM file.
	
	2. Open the Original HTM file into Notepad.
	
	3. Remove the lines in the Window_OnLoad procedure. Make note of the VBD
	  filename on the third line of the procedure.
	
	4. Place the following code within the Window_OnLoad procedure:
	
	        Sub Window_OnLoad
	            Location.Replace("FILENAME.vbd")
	        End Sub
	
	where "FILENAME.VBD" must be replaced with the name of your VBD (including
	quotation marks).
	
	5. Save the HTM file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This bug was corrected in Internet Explorer 4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbtool kbActiveX kbDownload kbVBp500 kbCodeDownload kbGrpDSVB kbFAQ kbDSupport kbieFAQ 
	Technology        : kbVBSearch kbIEsearch kbAudDeveloper kbZNotKeyword6 kbSDKIESearch kbZNotKeyword2 kbVB500Search kbVB500
	Version           : :3.x,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
