---
layout: page
title: "Q221711: FIX: FFCs - Problem with Element Tag With _XMLTag in _html.vcx"
permalink: /kb/221/Q221711/
---

## Q221711: FIX: FFCs - Problem with Element Tag With _XMLTag in _html.vcx

	Article: Q221711
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbvfp600bug kbFFC kbVS600sp3fix kbGrpDSFox
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You create an instance of the _XMLTag Foundation class in _HTML.vcx. You set the
	Tagname and Value properties for the object, then check the value of the XMLText
	property. The element tag stored in the XMLText property is not properly
	optimized if the tag contents is empty.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.PRG) file:
	
	  oXml=NEWOBJECT("_xmltag",HOME()+"ffc\_html")
	  oXml.Tagname="foot"
	  oXml.Value="test"
	  ?oXml.XMLText
	
	2. The value printed to the desktop will be:
	
	  <foot value="test"></foot>
	
	3. The proper value should be:
	
	  <foot value="test"/>
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600 kbvfp600bug kbFFC kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
