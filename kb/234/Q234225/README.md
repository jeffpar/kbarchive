---
layout: page
title: "Q234225: HOWTO: Instantiate Multiple Copies of HTML Help in Visual FoxPro"
permalink: /kb/234/Q234225/
---

## Q234225: HOWTO: Instantiate Multiple Copies of HTML Help in Visual FoxPro

	Article: Q234225
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDocs kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 23-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to create multiple instances of HTML Help using the interfaces
	exposed in the Foxhhelp COM object.
	
	MORE INFORMATION
	================
	
	The code below demonstrates how to instantiate multiple copies of HTML Help
	using Foxhhelp's FoxHelpDoActivateHelp method:
	
	  *-- Change the filename to suit your installation
	  lsHelpFile = "C:\Program Files\Microsoft "+ ;
	  "Visual Studio\MSDN98\98VS\1033\dsmsdn.chm"
	  oHelp1 = createobject("foxhhelp.foxhtmlhelp")
	  oHelp2 = createobject("foxhhelp.foxhtmlhelp")
	  oHelp1.foxhelpdoactivatehelp(lsHelpFile)
	  oHelp2.foxhelpdoactivatehelp(lsHelpFile)
	
	Other useful Foxhhelp methods include:
	
	- FoxHelpDoMSDNCollection(String filename) - Instantiates an instance of HTML
	  using the collection in the supplied filename.
	
	- FoxHelpDoActivateHelp(String filename) - Instantiates an instance of HTML
	  using the Help file in the supplied filename.
	
	- FoxHelpDoContextHelp(String filename, Long dwData) - Instantiates an instance
	  of HTML using the Help file in the supplied filename and context ID.
	
	- FoxHelpDoKeywordSearch(String filename, String keyword) - Instantiates an
	  instance of HTML using the Help file in the supplied filename and performs a
	  keyword search using the supplied keyword.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Mike A. Stewart, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDocs kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
