---
layout: page
title: "Q291380: FIX: Redefinition Errors When You Compile an IDL File"
permalink: /kb/291/Q291380/
---

## Q291380: FIX: Redefinition Errors When You Compile an IDL File

	Article: Q291380
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbXML kbGrpDSVCDB kbDSupport kbMSXML300bug kbGrpDSMSXML kbMSXMLnosweep KbMSXML300SP1 Kb
	Last Modified: 12-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft XML, version 3.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile an Interface Definition Language (.idl) file which imports the
	Msxml2.idl file, you may receive several error messages regarding the
	redefinition of XML interfaces:
	
	  D:\Program Files\Microsoft Visual Studio\VC98\INCLUDE\msxml.idl(50) : error
	  MIDL2003 : redefinition : XMLELEMTYPE_ELEMENT
	
	  D:\Program Files\Microsoft Visual Studio\VC98\INCLUDE\msxml.idl(51) : error
	  MIDL2003 : redefinition : XMLELEMTYPE_TEXT
	
	  D:\Program Files\Microsoft Visual Studio\VC98\INCLUDE\msxml.idl(52) : error
	  MIDL2003 : redefinition : XMLELEMTYPE_COMMENT
	
	CAUSE
	=====
	
	One of the other files that your .idl file imports, such as Ocild.idl,
	implicitly imports the Msxml.idl file, which causes duplication and results in
	the redefinition errors.
	
	RESOLUTION
	==========
	
	The Msxml2.idl file that ships with the Microsoft XML (MSXML) 3.0 Service Pack 1
	Software Development Kit (SDK) resolves the problem when it is used with the
	Msxml.idl file that shipped with Visual C++ 6.0 (dated April 1998). To avoid the
	error, you just need to add the IMPORTED_MSXML macro as an option with the
	Microsoft Interface Definition Language (MIDL) compiler; for example:
	
	  midl /D IMPORTED_MSXML test.idl
	
	NOTE: The fix in MSXML 3.0 SP1 does not resolve the redefinition problem that
	exists for the Msxml.idl that comes with the Windows Platform SDK that is dated
	February 2000.
	
	You also need to have the MIDL Compiler version 5.03.0280. If you do not have it,
	you will receive the following error message:
	
	  midl\oleaut32.dll : error MIDL2020 : error generating type library :
	  AddImplType failed : IXMLDOMDocument
	
	You can download the latest Platform SDK from the following Microsoft Web site:
	
	  http://www.microsoft.com/msdownload/platformsdk/setuplauncher.htm
	
	To set up the Platform SDK, select Custom installation, then open the Tools
	section and select Platform SDK Tools. After you install this, MSDEV uses the
	new version of MIDL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This bug was corrected in Microsoft XML 3.0 Service Pack 1 SDK.
	
	For additional information on other fixes included in Microsoft XML 3.0 Service
	Pack 1, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q292935 INFO: List of Issues Fixed in Microsoft XML 3.0 Service Pack 1
	
	For the latest information and downloads of MSXML, refer to the following MSDN
	Web site at:
	
	  http://msdn.microsoft.com/xml/default.asp
	  (http://msdn.microsoft.com/xml/default.asp)
	
	MORE INFORMATION
	================
	
	To reproduce this problem, add the following code to your .idl file and then
	compile it using the MIDL compiler:
	
	  import "msxml2.idl";
	  import "oaidl.idl";
	  import "ocidl.idl";
	
	Additional query words:
	
	======================================================================
	Keywords          : kbXML kbGrpDSVCDB kbDSupport kbMSXML300bug kbGrpDSMSXML kbMSXMLnosweep KbMSXML300SP1 KbMSXML300SP1fix 
	Technology        : kbVCsearch kbAudDeveloper kbMSXMLSearch kbVC600 kbVC32bitSearch kbMSXML300
	Version           : :3.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
