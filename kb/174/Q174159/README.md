---
layout: page
title: "Q174159: DOC: Correction for VB Setup Wizard Code Signing Info"
permalink: /kb/174/Q174159/
---

## Q174159: DOC: Correction for VB Setup Wizard Code Signing Info

	Article: Q174159
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbdocerr kbVBp500
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual Basic 5.0 Setup Wizard Help contains some incorrect information
	regarding code signing with Authenticode. This article contains the correct
	information.
	
	MORE INFORMATION
	================
	
	The Visual Basic 5.0 Setup Wizard Help, under "Setup Wizard -- Internet
	Package," states:
	
	  "Although Visual Basic, version 5.0, does not include any tools to digitally
	  sign components, the Setup Wizard-generated .cab files reserve space for you
	  to add a digital signature at a later time. To get your files digitally
	  signed you can:
	
	- Send them to a service provider such as VeriSign, who keeps the private key.
	  The service provider signs the files and returns them to you.
	
	- Purchase special hardware and/or software which stores your private key
	  locally. When you are ready to sign your files, run a utility such as
	  CodeSign to sign your files. The ActiveX SDK includes tools to create text
	  signatures.
	
	- Use the ActiveX SDK to create test digital signatures."
	
	The above statements should be replaced with the following corrected and updated
	information:
	
	  Although Visual Basic, version 5.0, does not include any tools to digitally
	  sign components, the Setup Wizard-generated .cab files reserve space for you
	  to add a digital signature at a later time.
	
	  You can sign your files by creating a "test certificate" with signing tools
	  provided in the ActiveX SDK (for Microsoft Internet Explorer 3.02) or
	  Internet Client SDK (for Microsoft Internet Explorer 4.0 and above). In
	  addition to the code signing tools you will need either:
	
	- A digital code signing certificate obtained from a Certificate Authority such
	  as VeriSign,
	
	  -or-
	
	- A test code signing certificate created using the code signing tools
	  mentioned above.
	
	Note that the test code signing certificate is for test purposes only and not for
	final code distribution.
	
	REFERENCES
	==========
	
	For more information about signing code, click on the Authenticode table of
	contents link on the Microsoft Security Advisor site at
	http://www.microsoft.com/security
	
	NOTE: Because the Microsoft Web site is constantly updated, the site address may
	change without notice. If this occurs, link to the Microsoft home page at the
	following address:
	
	  http://www.microsoft.com/
	
	Additional query words: Authenticode
	
	======================================================================
	Keywords          : kbdocerr kbVBp500 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	
	=============================================================================
	
