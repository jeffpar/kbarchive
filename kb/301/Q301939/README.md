---
layout: page
title: "Q301939: HOWTO: Add MSXML Support to a C++ Application"
permalink: /kb/301/Q301939/
---

## Q301939: HOWTO: Add MSXML Support to a C++ Application

{% raw %}

	Article: Q301939
	Product(s): Microsoft C Compiler
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 06-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE eMbedded Visual C++, version 3.0 
	- Microsoft Windows CE Platform SDK for Pocket PC 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some Windows CE-based platforms include support for the Microsoft XML component,
	but no examples of calling the XML component from C++ on Windows CE platforms
	are available in the online documentation. Many of the existing desktop examples
	will not work because they utilize the COM compiler extensions (through the
	#import statement) which are not currently supported in the Windows CE
	development environment. This article describes what is necessary to incorporate
	XML support
	
	MORE INFORMATION
	================
	
	The MSXML component is declared in the MSXML.h file. This includes everything
	that is necessary to access the component including:
	
	- Class and interface identifiers
	
	- Interface declarations
	
	To use these declarations, you can simply include the MSXML.h file in any source
	files that access the component. If you are porting desktop code that accesses
	the component through a namespace, you can achieve a similar effect, without
	needing to edit all of the scoped references to the namespace, by including
	MSXML.h in a namespace. For example, if the code you are porting accesses the
	IXMLDOMDocument interface like this
	
	  MSXML::IXMLDOMDocument
	
	the MSXML component is declared in the MSXML namespace. You can achieve the same
	effect in Windows CE by including MSXML.h as follows:
	
	  namespace MSXML
	  {
	  #include <msxml.h>
	  }
	
	To link the application, include Uuid.lib in the list of linker object/library
	modules.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q301586 BUG: MSXML Methods Return 0x80070005 - E_ACCESSDENIED
	
	  Q301630 FIX: IXMLDOMDocument::load() 'Hangs' MIPS Device When Called from C++
	
	  Q301935 BUG: MSXML Component Fails When Loading Local Files
	
	Additional query words: XML
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbPocketSearch kbSDKSearch kbWinCEETKSearch kbWinCESDKSearch kbWinCESearch kbWinCEETK300VC kbWinCESDKPalmsizePC
	Version           : :3.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
