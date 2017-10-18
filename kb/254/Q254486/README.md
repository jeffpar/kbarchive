---
layout: page
title: "Q254486: Sample Visual FoxPro Form to View XML Data"
permalink: kb/254/Q254486/
---

## Q254486: Sample Visual FoxPro Form to View XML Data

	Article: Q254486
	Product(s): Microsoft FoxPro
	Version(s): 2.6,3.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbMiscTools kbvfp600 kbXML kbGrpDSFox kbDSupport kbCodeSnippet kbMSXML kbGrpDSMS
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft XML, versions 2.6, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FoxXMLvw.exe is a sample Visual FoxPro form that uses the Microsoft XML (MSXML)
	parser object to view an XML document.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  http://download.microsoft.com/download/vfox60/sample/6/w9x2k/en-us/foxxmlvw.exe
	  (http://download.microsoft.com/download/vfox60/sample/6/w9x2k/en-us/foxxmlvw.exe)
	
	Release Date: 3/20/2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The sample form creates the Microsoft XML parser object and loads an XML
	document. Two levels of the XML document hierarchy are viewable in a Treeview
	object on the form. Clicking on a Treeview node displays the contents of that
	node in an edit box on the form. The Treeview nodes correspond to FoxPro fields
	and the edit box displays the data in the field.
	
	CAUTION: The object name of the MSXML parser changed from MSXML to MSXML2 when
	version 2 of the parser pre-release became available. If the sample form does
	not create the MSXML.DOMDocument object, the problem could be due to an
	incorrect object name.
	
	The edit box can also display the entire XML document (Show XML Doc) or just the
	text of the XML document without the XML tags (Show XML Text).
	
	The Microsoft XML parser is available at:
	
	  http://msdn.microsoft.com/xml/default.asp">http://msdn.microsoft.com/xml/default.asp">http://msdn.microsoft.com/xml/default.asp
	
	Complete the steps below to run the sample form.
	
	1. Download and install the Microsoft XML parser from:
	  http://www.microsoft.com/xml
	  (There should be an MSXML2.DOMDocument component in the registry after the
	  parser has been installed.)
	
	2. Run the Visual FoxPro FoxXMLvw form (FoxXMLvw.scx).
	
	3. If you do not have an XML document to load into the form, you can create a
	  test XML document called WeatherReport.xml by clicking on the Create Test XML
	  File button.
	
	  NOTE: If the XML document is not well-formed, you receive an error. A
	  well-formed XML document can be as simple as one with only a basename and its
	  closing tag. An example is a document that contains only the following:
	
	  <Start> </Start>
	
	This is a Visual FoxPro 6.0 example of demonstrating the difference between a
	well-formed XML document and one that is not well-formed:
	
	  StrToFile("<Start> </Start>","Start.xml")
	  oXML = CREATEOBJECT("msxml2.DOMDocument")
	  oXML.Load("start.xml") && This loads without error.
	  StrToFile("<Start> </End>","End.xml")
	  oXML.Load("End.xml") && An "Incorrect function" error is generated.
	
	An error is generated because of the lack of matching beginning and ending
	basename tags. There may be other conditions that generate the same error.
	
	4. Click the Load XML File button to load the XML document that is specified in
	  the Enter path textbox. If no document name is specified, a GetFile dialog
	  box is launched in order to locate an XML file.
	
	5. Once the document is loaded, a representation of two levels of the XML
	  document hierarchy is displayed in the Treeview control. The nodes are
	  synonymous with FoxPro fields. Clicking on a node displays the node text in
	  the edit box. The node text is synonymous with the field data.
	
	6. Clicking the Show XML Doc button displays the complete XML document in the
	  edit box. This includes both the tags and the data.
	
	7. Clicking the Show XML Text button displays only the XML text or data.
	
	8. Clicking the Close button closes the form and releases the parser object.
	
	
	REFERENCES
	==========
	
	For more general information about XML, see the following Web sites:
	
	  http://msdn.microsoft.com/xml
	
	  http://www.xml.com
	
	Additional query words: FoxXMLVw FoxXMLViewer
	
	======================================================================
	Keywords          : kbfile kbMiscTools kbvfp600 kbXML kbGrpDSFox kbDSupport kbCodeSnippet kbMSXML kbGrpDSMSXML 
	Technology        : kbVFPsearch kbAudDeveloper kbMSXMLSearch kbVFP600 kbMSXML260 kbMSXML300
	Version           : :2.6,3.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
