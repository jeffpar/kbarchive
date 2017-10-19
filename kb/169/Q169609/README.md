---
layout: page
title: "Q169609: INFO: Digitally Sign Your Visual Basic Internet Application"
permalink: /kb/169/Q169609/
---

## Q169609: INFO: Digitally Sign Your Visual Basic Internet Application

	Article: Q169609
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCodeSign kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbFAQ kbDSupport kbVBp401 kbieFAQ
	Last Modified: 23-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Internet Client SDK 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With Visual Basic 5.0 and later, you can now develop software easily for
	distribution over the Internet. Code received via the Internet lacks
	shrink-wrapped packaging to vouch for its reliability and some users may be
	skeptical when asked to download your application and components. To reassure
	these users that your application and components are safe to download, you can
	provide a digital signature to assure your customers that your software will not
	harm their systems. This article gives a brief overview of how to have your
	Visual Basic Internet application or component digitally signed.
	
	MORE INFORMATION
	================
	
	Install the latest version of Internet Explorer on your system. Internet
	Explorer version 3.0 or later is required. To obtain the latest version of
	Internet Explorer please go to the following Web site:
	
	  http://www.microsoft.com/windows/ie/downloads/default.asp
	
	Get credentials from a Certificate Authority (CA). A Certificate Authority is a
	third party who will give users information about you. The CA provides and
	renews your certificate, authenticates your identity, and handles legal and
	liability issues for broken security. For instructions on obtaining a
	certificate from a CA, visit the following Web site:
	
	  http://msdn.microsoft.com/downloads/default.asp?url=/code/sample.asp?url=/msdn-files/027/000/219/msdncompositedoc.xml
	
	You can also search the Microsoft home page for information about "Authenticode."
	Obtain the latest version of the Internet Client SDK for the tools needed to
	sign your code. Consult the code signing documentation provided in the SDK for
	additional information on using these tools. The Internet Client SDK is located
	at the following web address:
	
	  http://msdn.microsoft.com/library/default.asp?url=/library/en-us/vbcon98/html/vbconunderstandingdigitalsigning.asp
	
	Once you have obtained the Internet Client SDK and followed the instructions for
	digitally signing your code, your application and/or components will be
	digitally signed and ready for Internet distribution.
	
	REFERENCES
	==========
	
	For more information regarding digital signing, visit the following Web site:
	
	  http://msdn.microsoft.com/library/default.asp?url=/workshop/security/authcode/authenticode_ovw_entry.asp
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q247257 INFO: Steps for Signing a .cab File
	
	Also, search the Microsoft home page for information about "Authenticode."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCodeSign kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbFAQ kbDSupport kbVBp401 kbieFAQ 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVB500 kbVB600 kbSDKSearch kbZNotKeyword3 kbIClientSearch
	Version           : :5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
