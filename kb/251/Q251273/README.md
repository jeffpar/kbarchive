---
layout: page
title: "Q251273: Sample: Create XMLDOM Document with #import"
permalink: /kb/251/Q251273/
---

## Q251273: Sample: Create XMLDOM Document with #import

	Article: Q251273
	Product(s): Microsoft C Compiler
	Version(s): 2.5,2.6,3.0,4.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbVC600 kbXML kbGrpDSVCDB kbMSXML kbGrpDSMSXML kbgraphxlinkcritical _IK
	Last Modified: 26-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft XML, versions 2.5, 2.6, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NewXMLDOC.exe is a Visual C++ sample that shows you how to create a new XMLDOM
	document from scratch when you use #import on Msxml.dll.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  DownloadDownload NewXMLDOC.exe now
	  (http://download.microsoft.com/download/vstudio60ent/Sample/New/WIN98/EN-US/NewXMLDOC.exe)
	
	Release Date: July 12, 2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	NewXMLDOC.exe contains the files listed in the following table.
	
	+-----------------------------------+
	| FileName                 | Size   | 
	+-----------------------------------+
	| CreateXMLDOMDocument.cpp | 4.71KB | 
	+-----------------------------------+
	| CreateXMLDOMDocument.dsp | 4.40KB | 
	+-----------------------------------+
	| CreateXMLDOMDocument.dsw | 565B   | 
	+-----------------------------------+
	
	Notes
	
	1. The sample shows how to create a simple XML document with the following
	  structure:
	
	  <Customers>
	     <customer id=345>
	       <name FirstName="Jane" LastName="Doe"/>      
	       <orders>
	         <order Date=07/16/98 ProductName="Visual Basic" />
	         <order Date=07/23/98 ProductName="Visual C++" />
	       </orders>
	    </customer>
	  </Customers>
	
	2. Inside the sample, the majority of the work is accomplished within the
	  BuildTree() function. Notice that the sample also contains the following two
	  structures that are defined to facilitate the building of the tree:
	
	  a. XMLDocTreeBuilderInstrEnum: An enumeration that describes the node type.
	
	  b. XMLDocSourceData: The actual data used to create the node. The BuildTree()
	     function accepts an array of the XMLDocSourceData datatypes and uses this
	     array to build XMLDOMDocument.
	
	3. Inline comments are available on major steps.
	
	4. On Windows NT 4.0 platform, if you download the NT 5.0 header files for XML
	  samples and you get the following compiler errors:
	
	  c:\workshop\include\nt50\ocidl.h(3233) : error C2061: syntax error :
	  identifier 'IPropertyBag'
	
	  You need to alter the order of the new Windows 2000 header directories to the
	  end of the search path.
	
	5. The code sample uses #import on msxml.dll, which is for the MSXML 2.5 parser.
	  If you have the MSXML 2.6 or MSXML 3.0 parser installed on the system,
	  comment out the following code block:
	
	  #import "msxml.dll" 
	  using namespace MSXML;
	
	  and add following correspondingly:
	
	  #import "msxml2.dll"  //msxml 2.6 parser
	  using namespace MSXML2;
	
	  or 
	
	  #import "msxml3.dll"  //msxml 3.0 parser
	  using namespace MSXML2;
	
	  or
	
	  #import "msxml4.dll" //msxml 4.0 parser
	  using namespace MSXML2;
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q269194 PRB: Compiler Errors When You Use #import with XML
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbSample kbVC600 kbXML kbGrpDSVCDB kbMSXML kbGrpDSMSXML kbgraphxlinkcritical _IK 
	Technology        : kbVCsearch kbAudDeveloper kbMSXMLSearch kbVC600 kbVC32bitSearch kbMSXML250 kbMSXML260 kbMSXML300
	Version           : :2.5,2.6,3.0,4.0,6.0
	
	=============================================================================
	
